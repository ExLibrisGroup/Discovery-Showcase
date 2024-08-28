import {html, LitElement} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {register} from 'swiper/element/bundle';
import {SearchCarousel} from "./search-carousel";
import {SnxService} from "./snx-service";

register();

@customElement('snx-search-carousel')
export class SnxSearchCarousel extends LitElement {
    @property() searchUrl: string = '';
    @property() titleText: string | undefined;
    @property() titleLink: string | undefined;
    @property() defaultThumbnailUrl: string = '';

    @state()
    private documents: any[] = [];
    private snxService: SnxService = new SnxService();

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
            this.documents = data.documents;
        } catch (error) {
        }

        console.log("here snx: ", this.documents);
    }

    //disables shadow root for lit element otherwise swiper styling doesn't work properly
    protected override createRenderRoot() {
        return this;
    }


    override render() {
        if (!this.documents) {
            return html`
                <div>Error Loading Carousel Widget!!</div>`;
        }

        const genericDocs = this.snxService.transformSnxToGeneric(this.documents, this.defaultThumbnailUrl);

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
