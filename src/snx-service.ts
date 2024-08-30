export class SnxService {

    public transformSnxToGeneric(docs: any[], defaultThumbnailUrl: string) {
        const genericDocs = [];

        // const parsedUrl = new URL(searchUrl);


        for (const doc of docs) {
            const genericDoc = {
                title: doc?.title ?? '',
                publisher: doc?.publisher ?? '',
                thumbnail: this.getThumbnailUrl(doc, defaultThumbnailUrl),
                deepLink: this.getDeeplink(doc)
            }
            genericDocs.push(genericDoc);
        }
        return genericDocs;
    }


    private async getThumbnailUrl(doc: any, defaultThumbnailUrl: string) {
        return doc?.thumbnail_large ?? doc.thumbnail_medium ?? doc.thumbnail_small ?? defaultThumbnailUrl;
    }

    getAlmaDThumbnailBaseUrl(doc: any) {
        const parsedUrl = new URL(doc["@id"]);
        return `${parsedUrl.origin}/view/delivery/thumbnail`
    }

    private getDeeplink(doc: any) {
        return doc?.link ?? '';
    }

}