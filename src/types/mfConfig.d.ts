/**
 * base information which should be provided by each micro frontend itselfe
 */
export interface MicroFrontendConfig {
    /**
     * main tag
     */
    tag: string;
    /**
     * provides these tags
     */
    subTags?: string[];
    /**
     * needs these tags to be loaded
     */
    requiresTags?: string[];
    /**
     * base url which needs to be added infront of the paths 
     */
    baseUrl: string;
    /**
     * script files
     */
    scripts: FileIdentfier[] | FileIdentfier;
    /**
     * css files
     */
    csss?: FileIdentfier[] | FileIdentfier;
    /**
     * runtime information
     */
    runtime?: FileIdentfier;
}

/**
 * can be used to manage shared resources
 */
export interface FileIdentfier {
    id?: string;
    path: string;
    integretyHash?: string;
}