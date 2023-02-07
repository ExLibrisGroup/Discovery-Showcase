import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
@customElement('doc-card')
export class DocCard extends LitElement{
    @property()
    doc: any;
    override render(){
        return html`
            <span>${this.doc.pnx.display.title[0]}</span>
            <img src="${this.doc.delivery.link[0].linkURL}">`
    }
}