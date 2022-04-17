import { Parser } from '../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class novelhallCom extends Parser {
    constructor() {
        super(new URL('https://www.novelhall.com'), '', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/index.php?s=so&module=book&keyword=' + title + this.endUrl;

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#main > div.container > div > table > tbody > tr");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("td:nth-child(2) > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("td:nth-child(2) > a").pathname;
                        return book.querySelector("a.chapter").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}