import { ImageService } from "./image-service";

export class SnxService {

    private imageService: ImageService = new ImageService();

    public transformSnxToGeneric(docs: any[], defaultThumbnailUrl: string) {
        const genericDocs = [];

        for (const doc of docs) {
            const genericDoc = {
                title: doc?.title.replace(/<\/?[^>]+(>|$)/g, '') ?? '', // Remove HTML tags, including <mark> tags
                publisher: doc?.publisher ?? '',
                thumbnail: this.getThumbnailLinks(doc, defaultThumbnailUrl),
                deepLink: doc?.link ?? ''
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
            throw error; // Rethrow the error for higher-level error handling
        }
    }

}