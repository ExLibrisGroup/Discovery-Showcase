import {html, LitElement} from "lit";
import {until} from 'lit-html/directives/until.js';
import {customElement, property, state} from "lit/decorators.js";
import {register} from 'swiper/element/bundle';
import {PnxCard} from "./pnx-card";

register();

@customElement('search-carousel')
export class SearchCarousel extends LitElement {
    @property() searchUrl: string = '';
    @property() titleText: string | undefined;
    @property() titleLink: string | undefined;
    @property() defaultThumbnailUrl: string | undefined;

    @state()
    private data: any;
    private viewId!: string | null;
    private language!: string | null;
    private scope!: string | null;
    private tab!: string | null;
    private institution!: string | null;
    private host!: string | null;

    constructor() {
        super();
        PnxCard;
        //This is for the bundler so it packages the other components with this one

    }

    override connectedCallback() {
        super.connectedCallback();
        this.performQuery();
    }

    async performQuery() {
        try {
            const response = await fetch(this.searchUrl);
            this.data = response.json();
        } catch (error) {
        }


    }

    //disables shadow root for lit element otherwise swiper styling doesn't work properly
    protected override createRenderRoot() {
        return this;
    }


    override render() {
        if (!this.data) {
            return html``;
        }
        const parsedUrl = new URL(this.searchUrl);
        this.host = parsedUrl.host;
        this.viewId = parsedUrl.searchParams.get("vid");
        this.language = parsedUrl.searchParams.get("lang")
        this.scope = parsedUrl.searchParams.get("scope")
        this.tab = parsedUrl.searchParams.get("tab")
        this.institution = parsedUrl.searchParams.get("inst")

        const titleHtml = this.getTitleHtml();


        const docsPromise = this.data.then((data: any) => data.docs.map((doc: any) =>
            html`<swiper-slide>
                <pnx-card .doc="${doc}" .host="${this.host}" .institution="${this.institution}" .vid="${this.viewId}" 
                          .language="${this.language}" .scope="${this.scope}" 
                          .tab="${this.tab}" .defaultThumbnailUrl="${this.defaultThumbnailUrl}">
                </pnx-card>
            </swiper-slide>`))

        return html`
            
            <div class="gallery-container">
                ${titleHtml}
                <swiper-container init="false" class="swiper">
                         ${until(docsPromise, ``)}
                </swiper-container>
                <!-- Navigation buttons -->
                <button class="swiper-button-next"></button>
                <button class="swiper-button-prev"></button>
                <div class="swiper-pagination"></div>
            </div>
        `;
    }

    protected override updated() {
        const swiperEl = this.renderRoot.querySelector('swiper-container');
        if (!swiperEl) {
            return;
        }
        const params = {
            // inject same style to shadow DOM
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            // slidesPerView: "4",
            spaceBetween: 70,
            slidesPerView: "auto",
            // loop: true,
            coverflowEffect: {
                rotate: 25,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            // Responsive breakpoints
            breakpoints: {
                360: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 130,
                },
                1024: {
                    slidesPerView: "auto",
                    spaceBetween: 70,
                },
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Accessibility
            a11y: {
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
            },
            injectStyles: [
                `
                     search-carousel {
                        position: relative;
                        height: 100%;
                        display: block;
                        font-size: 14px;
                        color: #000;
                        padding: 0;
                        --width-param: 930px;
                        max-width: var(--width-param);
                        margin: 0 auto;
                     }
                    .gallery-container {
                        padding: 20px;
                    }
                    
                    .gallery-container a {
                        text-decoration: none;
                        color: black;
                    }
                    
                    .gallery-container a:hover, .gallery-container a:focus {
                        text-decoration: underline;
                    }
                    
                    .gallery-container h1 {
                        text-align: center;
                    }
                    
                    .swiper {
                        max-width: var(--width-param);
                        padding-top: 25px;
                    }
                    
                    swiper-slide {
                        background-position: center;
                        background-size: cover;
                        width: calc(0.2 * var(--width-param));
                        text-decoration: none;
                    }
                    
                    swiper-slide:hover, swiper-slide:focus {
                        text-decoration: underline;
                    }
                    
                    .swiper-slide img {
                        display: block;
                    }
                    
                    
                    .gallery-container .swiper-button-prev, .gallery-container .swiper-button-next {
                        color: black;
                        background-color: transparent;
                        border: none;
                        top: 50%;
                        padding: 0;
                    }
                    
                    @media only screen and (max-width: 360px) {
                        .gallery-container .swiper-button-next {
                            margin-inline-end: -13px;
                        }
                        .gallery-container .swiper-button-prev {
                            margin-inline-start: -13px;
                        }
                        /*.swiper-button-prev:focus:not(:active), .swiper-button-next:focus:not(:active) {
                        box-shadow: 0 0 0 2px black;
                        }*/
                    }
                    
                    /*.swiper-button-prev:focus, .swiper-button-next:focus {
                        // box-shadow: 0 0 0 2px black;
                    }*/
                    
                    .swiper-button-prev, .swiper-button-next {
                        &:hover,&:focus {
                            background-color: black;
                            &:after {
                            color: white;
                            }
                        }
                    }
                    
                    .swiper-pagination .swiper-pagination-bullet-active {
                        background-color: black;
                    }
            `,
            ],

        }
        Object.assign(swiperEl, params);
        // @ts-ignore
        swiperEl.initialize();
    }

    private getTitleHtml() {
        if (this.titleText) {
            return this.titleLink ? html`<h1><a target="_blank" href="${this.titleLink}">${this.titleText}</a></h1>` : html`<h1>${this.titleText}</h1>`
        }
        return html``;
    }

}
