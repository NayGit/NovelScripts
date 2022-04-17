import { Parser } from '../../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../domain';
import tanimoto from '../../../StringProcent/tanimoto'

export default class webnovelonlineNet extends Parser {
    constructor() {
        super(new URL('https://webnovelonline.net'), '/', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "chapter-" + _chapterN + "-" + ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title + '&post_type=wp-manga';

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("div.post-title > h3 > a").href;
                        return book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}