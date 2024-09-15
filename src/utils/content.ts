export interface BlogConfig {
    contentRootFolder: string;
    rootUrl: string;
    staticPaths: string[];
}

const KEYWORD_CATEGORIES = [
    "pages"
]


export class Content {
    config: BlogConfig;
    keywordCategories = KEYWORD_CATEGORIES;

    constructor(config: BlogConfig) {
        this.config = config;
        this.keywordCategories.push(...config.staticPaths);
    }

    parseContent() {
        // const contentFolder = this.config.contentRootFolder;
        
    }

}