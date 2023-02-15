import {customElement, state} from "lit/decorators.js";
import {html, LitElement} from "lit";
// @ts-ignore
import {MotionCarousel} from "./motion-carousal";
// @ts-ignore
import {DocCard} from "./doc-card";
import {styles} from './styles.js';

@customElement('query-showcase')
export class QueryShowcase extends LitElement {
    static override styles = styles;
    constructor() {
        super();
        //This is for the bundler so it packages the other components with this one
        DocCard;
        MotionCarousel;
    }

    @state()
    private data: any;
    override connectedCallback() {
        super.connectedCallback();
        this.performQuery();
    }

    async performQuery(){
        const response = await fetch('../response.json');
        this.data = await response.json();
    }

    override render(){
        if(!this.data) {
            return html`loading data...`;
        }
        const docCardsList = this.data.map((doc:any) => html`<doc-card .doc="${doc}"></doc-card>`);
        return html`
            <motion-carousel>
                ${docCardsList}
            </motion-carousel>`

    }

}