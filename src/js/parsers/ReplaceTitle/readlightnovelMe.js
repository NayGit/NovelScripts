import { ParserChapter } from '../../parser';
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';

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
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                this.total = data.querySelector("div.novel-detail-item[style='display:flex;'] > div.novel-detail-body > ul > li:first-child > a").textContent.match(/\D*(\d+)/)[1];
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}