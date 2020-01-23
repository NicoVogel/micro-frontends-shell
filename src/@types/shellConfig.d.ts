import { MicroFrontendConfig } from "./mfConfig";

export interface ShellConfig {
    initialRoute: string;
    preloadAll: boolean;
    containerId: string;
    configs: MFConfigs;
    routerSrc: string;
    layouts: PageLayout[];
    router?: LayoutRouter;
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
    getLayout(url: string, config: ShellConfig): PageLayout;
}

/**
 * how the page is composed
 */
export interface PageLayout {
    name: string;
    parts: PageLayoutPart[];
    htmlSource: string;
    cssSource?: string | string[];
}

/**
 * composition part
 */
export interface PageLayoutPart {
    id: string;
    mfId?: string;
    layout?: PageLayout;
}