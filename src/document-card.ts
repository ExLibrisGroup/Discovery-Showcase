import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
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

    override render() {
        const imagePlaceHolder = html`
            <img src="images/format/-generic_36px.png" alt="" class="image-placeHolder">`;
        const imgPromise = this.thumbnail.then((url: string) => {
            console.log(`getImageUrl returned ${url}`)
            return html`
                <img src=${url} alt="">`
        }).catch(() => imagePlaceHolder); //on error or no thumbnail render the image placeholder

        return html`
            <a href="${this.deepLink}" target="_blank" aria-label="">
                ${until(imgPromise, imagePlaceHolder)}
                <div class="record-details">
                    <h3>${this.docTitle}</h3>
                    <span>${this.publisher ?? ''}</span>
                </div>
            </a>

        `
    }
}



