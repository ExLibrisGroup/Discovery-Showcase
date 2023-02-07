import {customElement, state} from "lit/decorators.js";
import {html, LitElement} from "lit";

@customElement('query-showcase')
export class QueryShowcase extends LitElement {
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
        return html`<h1>test!!!!</h1>
            <motion-carousel>
                ${docCardsList}
            </motion-carousel>`

    }

}