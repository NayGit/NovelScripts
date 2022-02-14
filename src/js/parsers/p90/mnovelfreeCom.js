import { Parser } from '../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class mnovelfreeCom extends Parser {
    constructor() {
        super(new URL('https://mnovelfree.com'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?q=' + title;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#truyen-slide > div.list.list-thumbnail.col-xs-12.col-md-9 > div.row > div.col-xs-4.col-sm-3.col-md-3");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a").title;

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
                    return data.querySelector("#truyen > div.col-xs-12.col-sm-12.col-md-9.col-truyen-main > div.col-xs-12.col-info-desc > div.col-xs-12.col-sm-8.col-md-8.desc > div.l-chapter > ul > li:nth-child(1) > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => fetchCatch(err, url));
        }

        return "S0";
    }
}