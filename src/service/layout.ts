
import { ShellConfig, PageLayout } from "../@types/shellConfig";
import { LoaderManager } from "./loader.js";

export class LayoutManager {

    private existingLayouts: string[];
    private activeName: string;

    constructor(private config: ShellConfig, private loader: LoaderManager) {
        customElements.define('layout-div', LayoutDiv);
        customElements.define('layout-container', LayoutContainer);
        this.existingLayouts = [];
    }

    public async loadLayout(layout: PageLayout): Promise<void> {
        if (this.activeName === layout.name) {
            return;
        }
        const container = document.getElementById(this.config.containerId);

        if (this.existingLayouts.some(value => value === layout.name)) {
            this.showExisting(layout.name, container);
            return;
        }
        this.loadNewLayout(layout, container);
    }

    private showExisting(name: string, container: HTMLElement) {
        this.hideActive(container);
        const layouts = container.getElementsByTagName('layout-container');
        for (let i = 0; i < layouts.length; i++) {
            const element = layouts[i];
            if (element.getAttribute('layout-name') === name) {
                element['style'].display = 'block';
                this.activeName = name;
                return;
            }
        }
    }

    private hideActive(container: HTMLElement) {
        const layouts = container.getElementsByTagName('layout-container');
        for (let i = 0; i < layouts.length; i++) {
            const element = layouts[i];
            if (element.getAttribute('layout-name') === this.activeName) {
                element['style'].display = 'none';
                this.activeName = '';
                return;
            }
        }
    }

    private async loadNewLayout(layout: PageLayout, container: HTMLElement) {
        const htmlData = await this.loader.loadHtml(layout.htmlSource);
        const element = document.createElement('layout-container');
        element.setAttribute('layout-name', layout.name);
        element.innerHTML = htmlData;
        this.hideActive(container);
        this.activeName = layout.name;
        this.existingLayouts.push(layout.name)
        container.appendChild(element);
    }

}


class LayoutContainer extends HTMLElement { }

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

