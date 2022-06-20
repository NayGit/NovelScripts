import { ParserBook } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class readnoveldailyCom extends ParserBook {
    constructor() {
        super('https://readnoveldaily.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?q=' + this.bTitle;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetchXHR(FXmode.xhrHTML, this.siteSearch.href)
                .then(data => {
                    let block = data.querySelectorAll("#list-posts div.row.special > div");

                    if (block.length == 0) {
                        isError = this.total = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("h3.title-book > a").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = book.querySelector("h3.title-book > a").href;
                            this.setBookLocal();
                            return;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetchXHR(FXmode.xhrHTML, this.siteBook.href)
                .then(data => {
                    this.total = data.querySelector("div.latest-chapters.list-chapter > ul.list > li:first-child").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}