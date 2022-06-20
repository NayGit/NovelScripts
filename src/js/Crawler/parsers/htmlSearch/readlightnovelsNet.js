import { ParserBook } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class readlightnovelsNet extends ParserBook {
    constructor() {
        super('https://readlightnovels.net/');
        this.endUrl = '.html';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle;
    }

    async totalChapters() {
        await fetchXHR(FXmode.xhrHTML, this.siteSearch.href)
            .then(data => {
                let block = data.querySelectorAll("div.col-md-3.col-sm-6.col-xs-6.home-truyendecu");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a").title;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("a").href;
                        this.total = book.querySelector("a > div > small").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}