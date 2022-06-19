import { ParserBook } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchResult';
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
        let isLucky = false;
        var isError = '';
        await fetchXHR(FXmode.fetchHTML, this.siteSearch.href)
            .then(data => {
                let block = data.querySelectorAll("#panda-app > div.sr-body > div.novel-list > ul > li");

                if (block.length == 0) {
                    isError = this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.novel-desc > h4").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("a").pathname;
                        isLucky = true;
                        return;
                    }
                }
            })
            .catch(err => isError = fetchCatch(err, this.siteSearch.href));

        if (isError != '') {
            this.total = isError;
            return;
        }

        if (isLucky) {
            return await fetchXHR(FXmode.fetchHTML, this.siteBook.href)
                .then(data => {
                    this.total = data.querySelector("#detailsBody > div > div.details-chapters > dl > dt > p > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}