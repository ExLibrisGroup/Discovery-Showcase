import {html, LitElement} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {styles} from './document-card-style';
import {until} from 'lit-html/directives/until.js';


@customElement('document-card')
export class DocumentCard extends LitElement {

    static override styles = styles;
    @property()
    thumbnail: any;
    @property()
    docTitle!: string;
    @property()
    publisher!: string;
    @property()
    deepLink!: string;

    @state()
    thumbnailFallbackUrl: string = 'https://tinypng.com/static/images/george-account-page.webp';

    override render() {
        const imagePlaceHolder = html`
            <div style="background-color: ${this.getRandomColor()}"
                 class="image-place-holder"></div>`;
        const imgPromise = this.thumbnail.then((url: string) => {
            console.log(`getImageUrl returned ${url}`)
            return html`
                <img
                        src=${url}
                        @load=${this.imgOnLoad}
                        @error=${this.imgOnError}
                        alt="">`
        }).catch(() => imagePlaceHolder); //on error or no thumbnail render the image placeholder

        // Remove HTML tags, including <mark>
        const cleanTitle = this.docTitle?.replace(/<\/?[^>]+(>|$)/g, '') ?? '';
        return html`
            <a href="${this.deepLink}" target="_blank" aria-label="">
                ${until(imgPromise, imagePlaceHolder)}
                <div class="record-details">
                    <h3>${cleanTitle}</h3>
                    <span>${this.publisher ?? ''}</span>
                </div>
            </a>

        `
    }

    public imgOnLoad(e: any) {
        console.log('Image loaded: ', e.target.naturalWidth, e.target.naturalHeight);
        if (e.target.naturalWidth === 1 && e.target.naturalHeight === 1) {
            console.log('Image dimensions are 1x1, likely a placeholder image.');
            e.target.src = this.thumbnailFallbackUrl; // Set fallback source
        }
    }

    public imgOnError(e: any) {
        console.log('Image failed to load, applying fallback.', e.target.src);
        e.target.src = this.thumbnailFallbackUrl; // Set fallback source
    }

    private getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}



