import {html, LitElement} from "lit";
import {until} from 'lit-html/directives/until.js';
import {customElement, property} from "lit/decorators.js";
import {register} from 'swiper/element/bundle';
import {DocumentCard} from "./document-card";

register();

@customElement('search-carousel')
export class SearchCarousel extends LitElement {
    @property() documents: any[] = [];
    @property() searchUrl: string = '';
    @property() titleText: string | undefined;
    @property() titleLink: string | undefined;

    constructor() {
        super();
        DocumentCard
        //This is for the bundler so it packages the other components with this one

    }

    override connectedCallback() {
        super.connectedCallback();
    }

    //disables shadow root for lit element otherwise swiper styling doesn't work properly
    protected override createRenderRoot() {
        return this;
    }


    override render() {
        if (!this.documents) {
            return html``;
        }

        const titleHtml = this.getTitleHtml();

        const docsPromise = this.documents.map((doc: any) =>
            html`
                <swiper-slide>
                    <document-card .thumbnail="${doc.thumbnail}" .docTitle="${doc.title}" 
                                   .publisher="${doc.publisher}" .deepLink="${doc.deepLink}" >
                    </document-card>
                </swiper-slide>`)

        return html`

            <div class="gallery-container">
                ${titleHtml}
                <button class="swiper-button-prev"></button>
                <swiper-container init="false" class="swiper">
                    ${until(docsPromise, ``)}
                </swiper-container>
                <!-- Navigation buttons -->
                <button class="swiper-button-next"></button>
                <div class="swiper-pagination"></div>
            </div>
        `;
    }

    protected override updated() {
        const swiperEl = this.renderRoot.querySelector('swiper-container');
        const nextEl = this.renderRoot.querySelector('.swiper-button-next');
        const prevEl = this.renderRoot.querySelector('.swiper-button-prev');
        const paginationEl = this.renderRoot.querySelector('.swiper-pagination');
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
                el: paginationEl,
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
                nextEl: nextEl,
                prevEl: prevEl,
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
                        --width-param: 700px;
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
                    
                    .gallery-container h2 {
                        text-align: center;
                    }
                    
                    .swiper {
                        max-width: var(--width-param);
                        margin-block-end: 1em;
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
                    .gallery-container .swiper-button-next {
                        margin-right: -2.5em;
                    }

                    .gallery-container .swiper-button-prev {
                        margin-left: -2.5em;
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
                    
                    .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{
                        --swiper-pagination-bullet-horizontal-gap: 8px;
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
            return this.titleLink ? html`<h2><a target="_blank" href="${this.titleLink}">${this.titleText}</a>
            </h2>` : html`<h2>${this.titleText}</h2>`
        }
        return html``;
    }

}
