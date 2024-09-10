export class ImageService {
    public async getImageLink(imageUrl: string) {
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

    public handleLink(link: string) {
        let newLink = link;
        if (window.location.protocol === 'https:') {
            newLink = link.replace('http://', 'https://');
        }
        return newLink;
    }
}