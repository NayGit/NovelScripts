import { ParserBook } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class mMylovenovelCom extends ParserBook {
    constructor() {
        super('https://m.mylovenovel.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/index.php?s=so&module=book&keyword=' + this.bTitle;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetchXHR(FXmode.xhrHTML, this.siteSearch.href)
                .then(data => {
                    let block = data.querySelectorAll("div.main > ul.list > li");

                    if (block.length == 0) {
                        isError = this.total = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a > p.bookname").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a").pathname;
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
                    this.total = data.querySelector("#info > div.main > div.detail > p.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}