import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class ltnovelCom extends ParserChapter {
    constructor() {
        super('https://www.ltnovel.com/');
        this.endUrl = '.html';
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + '_' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            this.apiSearch = new URL(this.site.origin + "/e/search/index.php");

            let isError = '';
            await fetchXHR(FXmode.fetchHTML, this.apiSearch.href, {
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                },
                "referrer": this.site.origin + "/search.html",
                "body": "show=title&tempid=1&tbname=news&keyboard=" + this.bTitle,
                "method": "POST",
            })
                .then(data => {
                    if (data.title === "Message hint" || data.title == "") {
                        isError = "B0";
                        return;
                    }

                    let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                    for (let book of block) {
                        let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.apiSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetchXHR(FXmode.fetchHTML, this.siteBook.href)
                .then(data => {
                    this.total = data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}