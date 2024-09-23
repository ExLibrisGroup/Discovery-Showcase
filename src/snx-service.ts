import { ImageService } from "./image-service";

export class SnxService {

    private imageService: ImageService = new ImageService();

    public transformSnxToGeneric(docs: any[], defaultThumbnailUrl: string, searchUrl: string) {
        const genericDocs = [];

        for (const doc of docs) {
            const genericDoc = {
                title: doc?.title.replace(/<\/?[^>]+(>|$)/g, '') ?? '', // Remove HTML tags, including <mark> tags
                publisher: doc?.publisher ?? '',
                thumbnail: this.getThumbnailLinks(doc, defaultThumbnailUrl),
                deepLink: this.getDeeplink(doc, searchUrl)
            }
            genericDocs.push(genericDoc);
        }
        return genericDocs;
    }


    private async getThumbnailLinks(doc: any, defaultThumbnailUrl: string) {
        const thumbnailLink = doc?.thumbnail_large ?? doc.thumbnail_medium ?? doc.thumbnail_small ?? defaultThumbnailUrl;
        try {
            if (thumbnailLink) {
                return await this.imageService.getImageLink(thumbnailLink);
            }
            throw 'no thumbnail';
        } catch (error) {
            if(thumbnailLink !== defaultThumbnailUrl) { // If the thumbnail link is not the default thumbnail, try to get the default thumbnail
                return await this.imageService.getImageLink(defaultThumbnailUrl);
            }
            throw error; // Rethrow the error for higher-level error handling
        }
    }

    private getDeeplink(doc: any, searchUrl: string) {
        const searchUrlParts = searchUrl.split('/api');
        const summonDomain = searchUrlParts[0];
        const canCreateBookmark = summonDomain?.includes('summon') && doc?.bookmark || false
        return canCreateBookmark ? `${summonDomain}/#!/search?bookMark=${doc.bookmark}` : doc?.link || '';
    }

}