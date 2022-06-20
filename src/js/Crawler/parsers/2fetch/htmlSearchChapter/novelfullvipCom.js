import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class novelfullvipCom extends ParserChapter {
    constructor() {
        super('https://novelfullvip.com/');
        this.endUrl = '.html';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?q=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetchXHR(FXmode.xhrHTML, this.siteSearch.href)
                .then(data => {
                    let block = data.querySelectorAll("#truyen-slide > div.list.list-thumbnail.col-xs-12.col-md-9 > div.row > div.col-xs-4.col-sm-3.col-md-3");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a").title;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = book.querySelector("a").href;
                            this.setBookLocal();
                            break;
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
                    this.total = data.querySelector("#truyen > div.col-xs-12.col-sm-12.col-md-9.col-truyen-main > div.col-xs-12.col-info-desc > div.col-xs-12.col-sm-8.col-md-8.desc > div.l-chapter > ul > li:nth-child(1) > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}