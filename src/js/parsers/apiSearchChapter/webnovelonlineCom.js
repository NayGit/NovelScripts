import { Parser } from '../../parser'
import { fetchStatusHTML, fetchStatusJSON, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class webnovelonlineCom extends Parser {
    constructor() {
        super(new URL('https://webnovelonline.com'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace('/novel/', '/chapter/') + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.protocol + "//api." + this.site.hostname + "/api/v1/wuxia/search?name=" + title;

        return await gmfetch(url)
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data.data).length == 0) {
                    return "B0";
                }

                for (let book of data.data) {
                    let titleParser = book.title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + new URL(book.url).pathname;
                        return book.chap.match(/\D*(\d+)/)[1];
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}