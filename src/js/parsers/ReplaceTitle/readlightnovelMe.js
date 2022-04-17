import { Parser } from '../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';

export default class readlightnovelMe extends Parser {
    constructor() {
        super(new URL('https://www.readlightnovel.me'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.origin + "/" + ReplaceName(_book) + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/" + ReplaceName(title) + this.endUrl;

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                return data.querySelector("div.novel-detail-item[style='display:flex;'] > div.novel-detail-body > ul > li:first-child > a").textContent.match(/\D*(\d+)/)[1];
            })
            .catch(err => fetchCatch(err, url));
    }
}