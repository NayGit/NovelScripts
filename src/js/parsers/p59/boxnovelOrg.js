import { Parser } from '../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class boxnovelOrg extends Parser {
    constructor() {
        super(new URL('https://boxnovel.org'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace('/novel/', '/') + "-chapter-" + _chapterN + "-" + ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("h3.novel-title > a").href;
                        return book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}