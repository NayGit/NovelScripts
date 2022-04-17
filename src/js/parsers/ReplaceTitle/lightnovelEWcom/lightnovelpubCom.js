import { Parser } from '../../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../domain';

export default class lightnovelpubCom extends Parser {
    constructor() {
        super(new URL('https://www.lightnovelpub.com'), '', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.origin + "/novel/" + ReplaceName(_book) + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/novel/" + ReplaceName(title) + this.endUrl;

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                return data.querySelector("#novel > div.novel-body.container > nav > a.grdbtn.chapter-latest-container > div > p.latest.text1row").textContent.match(/\D*(\d+)/)[1];
            })
            .catch(err => fetchCatch(err, url));
    }
}