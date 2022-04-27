import { ParserBook } from '../../parser';
import { fetchStatusHTML, fetchCatch } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto';

export default class pandanovelCom extends ParserBook {
    constructor() {
        super('https://www.panda-novel.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle;
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#panda-app > div.sr-body > div.novel-list > ul > li"); 

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.novel-desc > h4").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("a").pathname;

                        let tmpTotal = book.querySelector("div.novel-desc > div > label > em");
                        if (tmpTotal === null) {
                            tmpTotal = book.querySelector("div.novel-desc > h6 > label > em")
                        }
                        this.total = tmpTotal.textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}