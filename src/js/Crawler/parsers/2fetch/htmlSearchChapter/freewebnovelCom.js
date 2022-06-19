import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchResult';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class freewebnovelCom extends ParserChapter {
    constructor() {
        super('https://freewebnovel.com/');
        this.endUrl = '.html';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/?searchkey=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + '/chapter-' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetchXHR(FXmode.fetchHTML, this.siteSearch.href)
                .then(data => {
                    let block = data.querySelectorAll("div.col-content > div > div.li-row");

                    if (block.length == 1 && block[0].querySelectorAll("div.li > div.con").length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("div.txt > h3.tit > a").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("div.txt > h3.tit > a").pathname;
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
                    this.total = data.querySelector("body > div.main > div > div > div.col-content > div.m-newest1 > ul > li:nth-child(1) > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}