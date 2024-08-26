
export class PnxService {

    public transformPnxToGeneric(docs: any[], searchUrl: string, defaultThumbnailUrl: string) {
        const genericDocs = [];
        
        const parsedUrl = new URL(searchUrl);
        const host = parsedUrl.host;
        const vid = parsedUrl.searchParams.get("vid") || "";
        const language = parsedUrl.searchParams.get("lang") || "";
        const scope = parsedUrl.searchParams.get("scope") || "";
        const tab = parsedUrl.searchParams.get("tab") || "";
        const institution = parsedUrl.searchParams.get("inst") || "";
        
        for (const doc of docs) {
            const genericDoc = {
                title: doc?.pnx?.display?.title?.[0] ?? '',
                publisher: doc?.pnx?.display?.publisher?.[0] ?? '',
                thumbnail: this.getThumbnailLinks(doc, vid, institution, this.getAlmaDThumbnailBaseUrl(doc), defaultThumbnailUrl),
                deepLink: this.getDeeplink(doc, host, vid, language, scope, tab)
            }
            genericDocs.push(genericDoc);
        }
        return genericDocs;
    }


    getAlmaDThumbnailBaseUrl(doc: any) {
        const parsedUrl = new URL(doc["@id"]);
        return `${parsedUrl.origin}/view/delivery/thumbnail`
    }

    private getDeeplink(doc: any, host: string, vid: string, language: string, scope: string, tab: string) {
        let deeplink = "";
        const parsedUrl = new URL(doc["@id"]);
        const protocol = this.getProtocol(parsedUrl);
        const primoMapping = this.isPrimo() ? "/primo-explore" : "/discovery";
        const state = this.getState();
        const recordId = doc.pnx.control.recordid;
        const context = doc.context;


        deeplink = protocol + host + primoMapping + state + "&docid=" + recordId + "&context=" + context + "&vid=" + vid + "&lang=" + language + "&search_scope=" + scope + "&tab=" + tab;

        return deeplink;
    }

    private getProtocol(url: URL) {
        return url.protocol + "//";
    }

    private isPrimo() {
        return false;
        //TODO
    }

    private getState() {
        return "/fulldisplay?"
    }

    private async getThumbnailLinks(doc: any, vid: string, institution: string, almaDThumbnailBaseURL: string, defaultThumbnailUrl?: string) {

        try {
            let linksArray = doc.delivery.link || [];
            // let type = this.getType(false, doc);

            // const defaultThumbnail = this.defineDefaultThumbnail(type);
            let thumbnailLinks = linksArray.filter((e: any) => e.displayLabel === 'thumbnail')

            const almaD = await this.getThumbnailFromAlmaD(doc, vid, institution, almaDThumbnailBaseURL);
            if (almaD) {
                return almaD;
            }

            let other = await this.getThumbnailFromOther(thumbnailLinks);
            if (other) {
                return other;
            }

            const syndeticsEXL = await this.getThumbnailFromSyndeticsEXL(thumbnailLinks, doc);
            if (syndeticsEXL) {
                return syndeticsEXL;
            }

            const syndetics = await this.getThumbnailFromSyndetics(thumbnailLinks);
            if (syndetics) {
                return syndetics;
            }

            const google = await this.getThumbnailFromGoogle(thumbnailLinks);
            if (google) {
                return google;
            }

            if (defaultThumbnailUrl) {
                return defaultThumbnailUrl
            }

            throw 'no thumbnail';

        } catch (error) {
            throw error; // Rethrow the error for higher-level error handling
        }
    }

    private async getThumbnailFromAlmaD(doc: any, vid: string, institution: string, almaDThumbnailBaseURL: string) {
        try {
            if (this.isAlmaD(doc)) {
                const thumbnailLink = await this.getAlmaDigitalThumbnailForPnx(doc, institution, vid, almaDThumbnailBaseURL);
                return await this.resolveAlmaDigitalImage(thumbnailLink);
            } else {
                return '';
            }
        } catch (error) {
            console.error('Error in getThumbnailFromAlmaD:', error);
            return '';
        }
    }

    private async getThumbnailFromOther(thumbnailLinks: any) {

        let otherThumbnailLinks = thumbnailLinks.filter(this.getAllButSpecificLinkFilterFactory('amazon'));
        otherThumbnailLinks = otherThumbnailLinks.filter(this.getAllButSpecificLinkFilterFactory('syndetics.com'));
        otherThumbnailLinks = otherThumbnailLinks.filter(this.getAllButSpecificLinkFilterFactory('google.com'));

        if (otherThumbnailLinks.length) {
            const promiseArray = otherThumbnailLinks.map((link: any) => {
                this.removeLabelFromLinkUrl(link);
                return this.getImageLink(link.linkURL);
            });

            try {
                const result = await Promise.race(promiseArray);
                return result || '';
            } catch (error) {
                // console.error('Error fetching images:', error);
                return '';
            }
        } else {
            return '';
        }
    }

    private getAllButSpecificLinkFilterFactory(linkIdentifier: string) {
        return (thumbnailLink: any) => {
            if (typeof thumbnailLink === 'string') {
                return thumbnailLink.indexOf(linkIdentifier) === -1
            }
            let linkURL = thumbnailLink?.linkURL;
            if (!linkURL) {
                return false;
            }
            if (typeof linkURL === 'string') {
                return linkURL.indexOf(linkIdentifier) === -1;
            }
            return linkURL.linkURL.indexOf(linkIdentifier) === -1;
        }
    }

    private async getThumbnailFromSyndeticsEXL(thumbnailLinks: any, doc: any, useUnbound?: boolean) {
        const syndeticsLinks = thumbnailLinks.filter((link: any) => this.getSpecificLink(link, 'syndetics.com') || this.getSpecificLink(link, 'primo'));

        if (syndeticsLinks.length > 0 || !this.isPrimo()) {
            const isbns = [...new Set((doc?.pnx?.addata?.isbn || []).concat(doc?.pnx?.addata?.eisbn || []))];
            const issns = [...new Set((doc?.pnx?.addata?.issn || []).concat(doc?.pnx?.addata?.eissn || []))];
            const upc = doc?.pnx?.addata?.upcid || [];

            const syntetixBaseUrl = `https://syndetics.com/index.php?client=primo&${useUnbound ? 'type=unbound&' : ''}`;

            for (const isbn of isbns) {
                syndeticsLinks.push(this.createLinkObj(`${syntetixBaseUrl}isbn=${isbn}/lc.jpg`));
            }

            for (const issn of issns) {
                syndeticsLinks.push(this.createLinkObj(`${syntetixBaseUrl}issn=${issn}/lc.jpg`));
            }

            for (const code of upc) {
                syndeticsLinks.push(this.createLinkObj(`${syntetixBaseUrl}upc=${code}/lc.jpg`));
            }

            if (syndeticsLinks.length > 0) {
                return this.handleSyndeticsThumbnailLinks(syndeticsLinks);
            }
        }

        return '';
    }

    private async getThumbnailFromSyndetics(thumbnailLinks: any) {
        const syndeticsLinks = thumbnailLinks.filter((link: any) => this.getSpecificLink(link, 'syndetics.com'));

        if (syndeticsLinks.length > 0) {
            return this.handleSyndeticsThumbnailLinks(syndeticsLinks);
        }
        return '';
    }

    private getSpecificLink(thumbnailLink: any, linkIdentifier: any) {

        if (typeof thumbnailLink === 'string') {//todo change
            return thumbnailLink.indexOf(linkIdentifier) > -1;
        }
        let linkURL = thumbnailLink ? thumbnailLink.linkURL : undefined;
        if (!linkURL) {
            return false;
        }
        if (typeof linkURL === 'string') {//todo change
            return linkURL.indexOf(linkIdentifier) > -1;
        }
        return linkURL.linkURL.indexOf(linkIdentifier) > -1;
    }

    private async handleSyndeticsThumbnailLinks(syndeticsLinks: any) {
        let syndeticsProxy = this.getSyndetixWithProxy();
        let promiseArray = syndeticsLinks.map((link: any) => {
            const imageUrl = link.linkURL.replace('https://syndetics.com/index.php?client=', syndeticsProxy);
            return this.getImageLink(imageUrl);
        })
        return await this.createPromiseOnlyFailOnAllFailedResolveFirstSuccess(promiseArray);
    }

    private async getThumbnailFromGoogle(thumbnailLinks: any) {

        if (this.showICPLicenseFooter()) {
            return '';
        }

        const googleLink = thumbnailLinks.find((link: any) => this.getSpecificLink(link, 'books.google.com'));

        if (!googleLink) {
            return ''; // early return if no Google link is found
        }

        try {
            const linkUrl = googleLink.linkURL;
            const gbUrl = linkUrl.replace('&callback=updateGBSCover', '');
            const response = await fetch(gbUrl);
            const data = await response.text();
            let jsonData = JSON.parse(data.substring(data.indexOf('{'), data.indexOf('}') + 2));
            const keys = Object.keys(jsonData);

            if (keys.length > 0) {
                let thumbnailUrl = jsonData[keys[0]].thumbnail_url;

                if (thumbnailUrl) {
                    const returnedLink = {
                        displayLabel: 'thumbnail',
                        linkType: 'http://purl.org/pnx/linkType/thumbnail',
                        linkURL: this.handleLink(thumbnailUrl),
                    };
                    return returnedLink.linkURL;
                }
            }


        } catch (error) {
            return '';
        }

        return '';
    }

    private async createPromiseOnlyFailOnAllFailedResolveFirstSuccess(promiseArray: any) {
        const reflectedPromises = promiseArray.map(this.reflect);
        const results = await Promise.all(reflectedPromises);

        const successfulResult = results.find(result => result.status === 'resolved');
        if (successfulResult) {
            return (successfulResult.value);
        } else {
            return ('');
        }
    }

    private reflect(promise: any) {
        return promise.then(
            (v: any) => ({value: v, status: "resolved"}),
            (e: any) => ({error: e, status: "rejected"})
        );
    }

    private showICPLicenseFooter() {
        return false;
    }

    private removeLabelFromLinkUrl(thumbnailLink: any) {
        let linkUrl = thumbnailLink.linkURL;
        if (linkUrl && linkUrl.includes('$$L')) {
            thumbnailLink.linkURL = linkUrl.substr(0, linkUrl.indexOf('$$L')).trim();
        }
    }

    private isAlmaD(doc: any) {
        if (this.isPrimo()) {
            return false;
        }
        if (doc.context === 'SP' && doc?.pnx?.control?.sourceid === 'alma' && doc.delivery?.electronicServices) {
            return (doc.delivery.electronicServices.filter(
                (svc: any) => svc.serviceType === 'DIGITAL').length > 0);
        } else {
            return doc.delivery['hasD'] === true || doc.delivery['digitalAuxiliaryMode'] === true;
        }
    }

    private async getAlmaDigitalThumbnailForPnx(doc: any, institution: string, vid: string, almaDThumbnailBaseURL: string): Promise<string> {
        const mmsId = doc?.pnx?.control?.sourcerecordid?.[0];
        const institutionCode = doc?.delivery?.recordInstitutionCode || institution;
        let thumbnailUrl = this.getAlmaDigitalThumbnailUrl(mmsId, almaDThumbnailBaseURL, institutionCode);

        // For shared D - find the correct link to the thumbnail
        if (doc?.delivery?.sharedDigitalCandidates && doc.delivery.sharedDigitalCandidates.length > 0) {
            const response = await fetch(`${almaDThumbnailBaseURL}/${institutionCode}/${mmsId}?vid=${vid}`, {
                method: 'POST',
                body: JSON.stringify(doc?.delivery?.sharedDigitalCandidates)
            });
            thumbnailUrl = (await response.json()).data as string;
        } else if (doc?.pnx?.control?.isDedup) {
            const response = await fetch(`${almaDThumbnailBaseURL}/${mmsId}?vid=${vid}`);
            if (!(await response.json())?.data?.hasDigitalInventory) {
                return '';
            }
        }

        if (this.isEsploroRecord(doc)) {
            thumbnailUrl += '?calculateAccessRights=true';
        }

        return thumbnailUrl;
    }

    private isEsploroRecord(doc: any) {
        return doc.pnx.control.sourceformat?.[0] === 'ESPLORO' || false;
    }

    private getAlmaDigitalThumbnailUrl(mmsId: any, almaDThumbnailBaseURL: string, institution: string) {
        return `${almaDThumbnailBaseURL}/${institution}/${mmsId}`
    }

    private resolveAlmaDigitalImage(thumbnailUrl: any) {
        return this.getImageLink(thumbnailUrl);
    }

    private createLinkObj(url: any) {
        return {
            displayLabel: 'thumbnail',
            linkType: 'http://purl.org/pnx/linkType/thumbnail',
            linkURL: url
        };
    }

    private async getImageLink(imageUrl: string) {
        return new Promise((resolve, reject) => {
            if (!imageUrl) {
                reject('');
                return;
            }

            const image = new Image();
            image.onload = () => {
                if (image.width > 1) {
                    resolve(imageUrl);
                } else {
                    reject('');
                }
            };

            image.onerror = () => {
                reject('');
            };

            image.src = this.handleLink(imageUrl);
        });
    }

    private handleLink(link: string) {
        let newLink = link;
        if (window.location.protocol === 'https:') {
            newLink = link.replace('http://', 'https://');
        }
        return newLink;
    }

    private getSyndetixWithProxy() {
        return "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.php?client="
    }
}