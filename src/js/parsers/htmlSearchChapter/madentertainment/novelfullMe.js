import { Parser } from '../../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../domain';
import tanimoto from '../../../StringProcent/tanimoto'

export default class novelfullMe extends Parser {
    constructor() {
        super(new URL('https://novelfull.me'), '', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "/chapter-" + _chapterN + "-" + ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?q=' + title;

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        return book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}