import {html, LitElement} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {register} from 'swiper/element/bundle';
import {SearchCarousel} from "./search-carousel";
import {SnxService} from "./snx-service";
import { Externals } from "./Externals";

register();

@customElement('snx-search-carousel')
export class SnxSearchCarousel extends LitElement {
    @property() searchUrl: string = '';
    @property() titleText: string = 'Search Results';
    @property() titleLink: string = '';
    @property() defaultThumbnailUrl: string = '';

    @state()
    private documents: any[] = [];
    private snxService: SnxService = new SnxService();
    private externals: Externals = new Externals(window);

    constructor() {
        super();
        SearchCarousel;
        //This is for the bundler so it packages the other components with this one

    }

    override connectedCallback() {
        super.connectedCallback();
        this.performQuery();
    }

    override updated(changedProperties: any) {
        if (changedProperties.has('searchUrl')) {
          console.log('searchUrl changed:', this.searchUrl);
          this.performQuery();
        }
      }

      async performQuery() {
        try {
            const data = await this.externals.jsonp(this.searchUrl);
            
            // Assume `documents` is part of the returned data
            this.documents = data.documents || [];
        } catch (error) {
            console.error("An error occurred while fetching documents:", error);
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

        const genericDocs = this.snxService.transformSnxToGeneric(this.documents, this.defaultThumbnailUrl, this.searchUrl);

        return html`
            <search-carousel
                    .documents="${genericDocs}"
                    titleText="${this.titleText}"
                    titleLink="${this.titleLink}"
                    searchUrl="${this.searchUrl}">
            </search-carousel>`
    }


}
