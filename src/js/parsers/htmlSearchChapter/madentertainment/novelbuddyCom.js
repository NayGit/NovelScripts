import { ParserChapter } from '../../../parser';
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../domain';
import tanimoto from '../../../StringProcent/tanimoto';

export default class novelbuddyCom extends ParserChapter {
    constructor() {
        super('https://novelbuddy.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?q=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        this.total = book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}