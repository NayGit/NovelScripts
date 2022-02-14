import { Parser } from '../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class novelscafeCom extends Parser {
    constructor() {
        super(new URL('https://novelscafe.com'), '/', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(/\/$/, "") + '-chapter-' + _chapterN + '-' + ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.posts.row > div.col-4.col-md-3.col-lg-2.post-column.mt-3");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a > div.post-title").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("a").href;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("#primary > div:nth-child(2) > div.col-12.col-md-9 > div.last-10-chapters > div > div:nth-child(1) > h3 > a").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => fetchCatch(err, url));
        }

        return "B0";
    }
}