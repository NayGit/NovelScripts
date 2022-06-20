import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class novelscafeCom extends ParserChapter {
    constructor() {
        super('https://novelscafe.com/');
        this.endUrl = '/';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(/\/$/, "") + '-chapter-' + _cIndex + '-' + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetchXHR(FXmode.fetchHTML, this.siteSearch.href)
                .then(data => {
                    let block = data.querySelectorAll("div.posts.row > div.col-4.col-md-3.col-lg-2.post-column.mt-3");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a > div.post-title").textContent;

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
            return await fetchXHR(FXmode.fetchHTML, this.siteBook.href)
                .then(data => {
                    this.total = data.querySelector("#primary > div:nth-child(2) > div.col-12.col-md-9 > div.last-10-chapters > div > div:nth-child(1) > h3 > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}