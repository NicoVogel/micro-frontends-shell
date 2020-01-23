import { LoaderManager } from "./service/loader.js";
import { LayoutManager } from "./service/layout.js";

window.addEventListener('load', () => init());

async function init() {
    const loader = new LoaderManager();
    const config = await loader.loadConfig();
    const layout = new LayoutManager(config, loader);
    const router = await loader.loadRouter(config.routerSrc);

    const updateLayout = () => {
        const hashIndex = location.hash.indexOf('#');
        const hash = hashIndex === -1 ? '/' : location.hash.substr(hashIndex + 1);
        layout.loadLayout(router.getLayout(hash, config));
    }
    window.onhashchange = () => updateLayout();
    updateLayout();

}