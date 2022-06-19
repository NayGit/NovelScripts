import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchResult';
import { ReplaceName } from 'Domain/domain';

export default class lightnovelworldCom extends ParserChapter {
    constructor() {
        super('https://www.lightnovelworld.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/novel/" + ReplaceName(this.bTitle);

        this.siteBook = this.siteSearch;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        await fetchXHR(FXmode.fetchHTML, this.siteSearch.href)
            .then(data => {
                this.total = data.querySelector("#novel > div.novel-body.container > nav > a.grdbtn.chapter-latest-container > div > p.latest.text1row").textContent.match(/\D*(\d+)/)[1];
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}