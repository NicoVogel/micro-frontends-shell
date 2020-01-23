
import { ShellConfig, PageLayout } from "../@types/shellConfig";
import { LoaderManager } from "./loader.js";

export class LayoutManager {

    constructor(private config: ShellConfig, private loader: LoaderManager) {
        customElements.define('layout-div', LayoutDiv);
    }

    public async loadLayout(layout: PageLayout): Promise<void> {
        const container = document.getElementById(this.config.containerId);
        const htmlData = await this.loader.loadHtml(layout.htmlSource);
        container.innerHTML = htmlData;
        // console.log(htmlData);

    }

}


class LayoutDiv extends HTMLElement {
    // private shadowDOM: ShadowRoot
    constructor() {
        super();
        // this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    // public get dom(): ShadowRoot {
    //     return this.shadowDOM;
    // }
}

