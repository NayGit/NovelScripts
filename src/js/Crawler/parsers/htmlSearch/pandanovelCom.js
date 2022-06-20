import { ParserBook } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class pandanovelCom extends ParserBook {
    constructor() {
        super('https://www.panda-novel.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetchXHR(FXmode.xhrHTML, this.siteSearch.href, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
                },
            })
                .then(data => {
                    //let block = data.querySelectorAll("#panda-app > div.sr-body > div.novel-list > ul > li"); //mobile
                    let block = data.querySelectorAll("#panda-app > div.sr-body div.novel-list > ul > li")

                    if (block.length == 0) {
                        isError = this.total = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("div.novel-desc > h4").textContent;

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
                    //this.total = data.querySelector("#detailsBody > div > div.details-chapters > dl > dt > p > a").textContent.match(/\D*(\d+)/)[1] * -1; //mobile
                    this.total = data.querySelector("div.details-chapters > dl > dt > p > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}