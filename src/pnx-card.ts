import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from './pnx-card-style';


@customElement('pnx-card')
export class PnxCard extends LitElement {


    static override styles = styles;
    @property()
    doc: any;
    @property()
    vid: any;
    @property()
    language: any;
    @property()
    scope: any;
    @property()
    tab: any;

    override render() {
        return html`
            
            <a  href="${this.getDeeplink()}" target="_blank" aria-label="">
                <img  src= "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.php?client=primo&isbn=0821376454/sc.jpg"/>

                <div class="record-details">
                    <h2>${this?.doc?.pnx?.display?.title?.[0] ?? ''}</h2>
                    <span>${this?.doc?.pnx?.display?.publisher?.[0] ?? ''}</span>
                </div>
            </a>
            
        `
    }
    private getDeeplink() {
        let deeplink = "";
        const parsedUrl = new URL(this.doc["@id"]);
        const protocol = this.getProtocol(parsedUrl);
        const host = this.getHost(parsedUrl);
        const primoMapping = this.isPrimo() ? "/primo-explore" : "/discovery";
        const state = this.getState();
        const recordId = this.doc.pnx.control.recordid;
        const context = this.doc.context;


        deeplink = protocol + host + primoMapping + state + "&docid=" + recordId + "&context=" + context + "&vid=" + this.vid + "&lang=" + this.language + "&search_scope=" + this.scope + "&tab=" + this.tab;

        return deeplink;
    }
    private getProtocol(url: URL) {
        return url.protocol + "//";
    }

    private getHost(url: URL) {
        return url.host;
    }

    private isPrimo() {
        return false;
        //TODO
    }
    private getState() {
        return "/fulldisplay?"
    }
 
}



