import { Parser } from '../../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../domain';
import tanimoto from '../../../StringProcent/tanimoto'

export default class freewebnovelCom extends Parser {
    constructor() {
        super(new URL('https://freewebnovel.com'), '.html', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(this.endUrl, '') + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search/?searchkey=' + title;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-content > div > div.li-row");

                if (block.length == 1 && block[0].querySelectorAll("div.li > div.con").length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.txt > h3.tit > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("div.txt > h3.tit > a").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("body > div.main > div > div > div.col-content > div.m-newest1 > ul > li:nth-child(1) > a").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => fetchCatch(err, url));
        }

        return "S0";
    }
}