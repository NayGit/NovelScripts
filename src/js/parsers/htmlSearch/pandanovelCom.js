import { Parser } from '../../parser'
import { fetchStatusHTML, fetchCatch } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class pandanovelCom extends Parser {
    constructor() {
        super(new URL('https://www.panda-novel.com'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search/' + title;

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#panda-app > div.sr-body > div > div.novel-list.gray-mask > ul > li");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.novel-desc > h4").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a").pathname;
                        return book.querySelector("div.novel-desc > div > label > em").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}