import {html, LitElement} from "lit";
import {until} from 'lit-html/directives/until.js';
import { customElement, property, state } from "lit/decorators.js";
import { register } from 'swiper/element/bundle';
import {PnxCard} from "./pnx-card";

register();

@customElement('search-carousel')
export class SearchCarousel extends LitElement {
    @property() searchUrl: string = '';

    @state()
    private data: any;
    private viewId: any;
    private language: any;
    private scope: any;
    private tab: any;

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
        try{
            const response = await fetch(this.searchUrl);
            this.data = response.json();
        }
        catch (error){
        }


    }

    //disables shadow root for lit element otherwise swiper styling doesn't work properly
    protected override createRenderRoot() {
        return this;
    }
    

    override render() {
        if(!this.data) {
            return html`loading data....`;
        }
        const parsedUrl = new URL(this.searchUrl);
        this.viewId = parsedUrl.searchParams.get("vid");
        this.language = parsedUrl.searchParams.get("lang")
        this.scope = parsedUrl.searchParams.get("scope")
        this.tab = parsedUrl.searchParams.get("tab")


        const docsPromise = this.data.then(data => data.docs.map((doc:any) => html`<swiper-slide><pnx-card .doc="${doc}" .vid="${this.viewId}" .language="${this.language}" .scope="${this.scope}" .tab="${this.tab}"></pnx-card></swiper-slide>`)

        return html`
            
            <div class="gallery-container">
                <swiper-container init="false">
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

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "3",
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
            // Accessibility
            a11y: {
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
            },
            injectStyles: [
                `
                    .gallery-container {
                        padding: 20px;
                        max-width: 930px;
                        padding-top: 25px;
                        padding-bottom: 50px;
                    }
                    
                    .gallery-container a:hover, .gallery-container a:focus {
                        text-decoration: underline;
                    }
                    
                    .gallery-container h1 {
                        text-align: center;
                    }
                    
                    
                    .swiper-wrapper {
                        max-width: 930px;
                        padding-top: 25px;
                        padding-bottom: 50px;
                    }
                    
                    swiper-slide {
                        background-position: center;
                        background-size: cover;
                        width: 160px;
                        /*height: 227px;*/
                        text-decoration: none;
                    }
                    
                    swiper-slide:hover, swiper-slide:focus {
                        text-decoration: underline;
                    }
                    
                    .swiper-slide img {
                        display: block;
                        max-width: 100%;
                        height: auto;
                        /*width: 100%;*/
                    }
                    
                    
                    .swiper-button-prev, .swiper-button-next {
                        color: black;
                        background: transparent;
                        border: none;
                    }
                    
                    /*.swiper-button-prev:focus, .swiper-button-next:focus {
                        border: 2px solid black;
                        !*box-shadow: 0 0 0 2px black;*!
                    }*/
                    
                    .swiper-pagination .swiper-pagination-bullet-active {
                        background-color: black;
                    }
            `,
            ],

        }
        Object.assign(swiperEl, params);
        swiperEl.initialize();
    }

}