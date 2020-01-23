
import { ShellConfig, LayoutRouter } from "../@types/shellConfig";

export class LoaderManager {

    constructor() { }

    public async loadConfig(): Promise<ShellConfig> {
        const response = await fetch(`${location.origin}/mfconfig.json`);
        return await response.json();
    }

    public async loadRouter(url: string): Promise<LayoutRouter> {
        let router: LayoutRouter | undefined = undefined;
        try {
            router = { getLayout: (await import(url)).default };
        } catch (err) {
            console.error(err);
        }
        return router;
    }

    public async loadHtml(url: string): Promise<string> {
        const response = await fetch(url);
        return await response.text();
    }

}
