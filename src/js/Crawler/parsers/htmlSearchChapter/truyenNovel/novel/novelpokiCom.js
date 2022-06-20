import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class novelpokiCom extends ParserChapter {
    constructor() {
        super(new URL('https://novelpoki.com/'));
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace('/novel/', '/') + "-chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetchXHR(FXmode.xhrHTML, this.siteSearch.href)
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("h3.novel-title > a").href;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}