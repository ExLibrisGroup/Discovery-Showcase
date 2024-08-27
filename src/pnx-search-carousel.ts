import {html, LitElement} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {register} from 'swiper/element/bundle';
import {SearchCarousel} from "./search-carousel";
import { PnxService } from "./pnx-service";

register();

@customElement('pnx-search-carousel')
export class PnxSearchCarousel extends LitElement {
    @property() searchUrl: string = '';
    @property() titleText: string | undefined;
    @property() titleLink: string | undefined;
    @property() defaultThumbnailUrl: string = '';

    @state()
    private documents: any[] = [];
    private pnxService = new PnxService();

    constructor() {
        super();
        SearchCarousel;
        //This is for the bundler so it packages the other components with this one

    }

    override connectedCallback() {
        super.connectedCallback();
        this.performQuery();
    }

    async performQuery() {
        try {
            const response = await fetch(this.searchUrl);
            const data = await response.json();  // Await the JSON parsing
            this.documents = data.docs;
        } catch (error) {
        }

        console.log("here pnx: ", this.documents);
    }

    //disables shadow root for lit element otherwise swiper styling doesn't work properly
    protected override createRenderRoot() {
        return this;
    }


    override render() {    
        const genericDocs = this.pnxService.transformPnxToGeneric(this.documents, this.searchUrl, this.defaultThumbnailUrl);
        
        return html`
            <search-carousel
                    .documents="${genericDocs}"
                    titleText="${this.titleText}"
                    titleLink="${this.titleLink}"
                    defaultThumbnailUrl="${this.defaultThumbnailUrl}"
                    searchUrl="${this.searchUrl}">
            </search-carousel>`
    }

    
}
