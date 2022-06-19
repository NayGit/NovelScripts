import { ParserBook } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchResult';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class lightnovelWorld extends ParserBook {
    constructor() {
        super('https://m.lightnovel.world/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    async totalChapters() {
        await fetchXHR(FXmode.fetchHTML, this.siteSearch.href)
            .then(data => {
                let block = data.querySelectorAll("div.book_info");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    book.querySelector("li.text1.textC000 span").remove();
                    let titleParser = book.querySelector("li.text1.textC000").textContent.trim();

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("div.book_info_r > ul > li.book_info_add_afv > a:nth-child(2)").pathname;
                        this.total = book.querySelector("a.text2.textC333").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}