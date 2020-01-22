import { MicroFrontendConfig } from "./mfConfig";

export interface ShellConfig {
    baseUrl: string;
    preloadAll: boolean;
    container: string;
    configs: MFConfigs;
    router: LayoutRouter;
}

/**
 * compose the microfrontends into an object
 */
export interface MFConfigs {
    [name: string]: MicroFrontendConfig;
}

/**
 * provide a function which selects the layout based on an url string
 */
export interface LayoutRouter {
    getLayout(url: string): PageLayout
}

/**
 * how the page is composed
 */
export interface PageLayout {
    name: string;
    parts: PageLayoutPart[];
    htmlSource: string;
    cssSource?: string;
}

/**
 * composition part
 */
export interface PageLayoutPart {
    id: string;
    mfId?: string;
    layout: PageLayout;
}