import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';

export default class readlightnovelMe extends ParserChapter {
    constructor() {
        super('https://www.readlightnovel.me/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/" + ReplaceName(this.bTitle);

        this.siteBook = this.siteSearch;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open();
    }

    async totalChapters() {
        await fetchXHR(FXmode.fetchHTML, this.siteSearch.href)
            .then(data => {
                this.total = data.querySelector("div.novel-detail-item[style='display:flex;'] > div.novel-detail-body > ul > li:first-child > a").textContent.match(/\D*(\d+)/)[1];
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}