import { ParserSearch } from '../../parser'

export default class novelgateNet extends ParserSearch {
    constructor() {
        super('https://novelgate.net/')
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/search/" + this.bTitle;
    }
}