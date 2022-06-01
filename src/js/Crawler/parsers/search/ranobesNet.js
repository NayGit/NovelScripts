import { ParserSearch } from 'CrawlerClass/ParserClass';

export default class ranobesNet extends ParserSearch {
    constructor() {
        super('https://ranobes.net/')
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=" + this.bTitle;
    }
}