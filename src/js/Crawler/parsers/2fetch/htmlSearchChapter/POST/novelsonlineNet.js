import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchResult';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class novelsonlineNet extends ParserChapter {
    constructor() {
        super('https://novelsonline.net/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // POST url
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let url = new URL(this.site.origin + "/sResults.php");

            let isError = '';
            await fetchXHR(FXmode.fetchHTML, url.href, {
                headers: new Headers({
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
                }),
                //"headers": {
                //    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                //    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
                //},
                "referrer": "https://novelsonline.net/",
                "body": "q=" + this.bTitle,
                "method": "POST",
            })
                .then(data => {
                    let block = data.querySelectorAll("ul > li");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a > span.title").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = book.querySelector("a").href;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, url.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetchXHR(FXmode.fetchHTML, this.siteBook.href)
                .then(data => {
                    this.total = data.querySelector("#collapse-1 > div > div > div.tab-pane.active > ul > li:last-child").textContent.match(/\D*(\d+)/)[1];
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}


