import { ShellConfig, PageLayout } from "../@types/shellConfig";

export default function getLayout(url: string, config: ShellConfig): PageLayout {
    console.log(url);
    if (url === '/') {
        return config.layouts[0]
    }
    return config.layouts[1];
}