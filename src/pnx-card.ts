import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {styles} from './pnx-card-style';
@customElement('pnx-card')
export class PnxCard extends LitElement{
    static override styles = styles;
    @property()
    doc: any;
    override render(){
        return html`
            <a  href="https://www.w3schools.com" target="_blank" aria-label="">
                <img  src="./images/image9.jpg"/>
                <div class="record-details">
                    <h2>${this?.doc?.pnx?.display?.title?.[0]??''}</h2>
                    <span>${this?.doc?.pnx?.display?.publisher?.[0] ?? ''}</span>
                </div>
            </a>
            
        `
    }
}