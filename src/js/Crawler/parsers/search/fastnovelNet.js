import { ParserSearch } from 'CrawlerClass/ParserClass';

export default class fastnovelNet extends ParserSearch {
    constructor() {
        super('https://fastnovel.net/')
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/search/" + this.bTitle;
    }
}