import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class novelfullMe extends ParserChapter {
    constructor() {
        super('https://novelfull.me/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?q=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetchXHR(FXmode.fetchHTML, this.siteSearch.href)
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