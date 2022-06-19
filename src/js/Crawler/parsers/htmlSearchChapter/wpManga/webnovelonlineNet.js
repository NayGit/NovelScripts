import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchResult';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class webnovelonlineNet extends ParserChapter {
    constructor() {
        super('https://webnovelonline.net/');
        this.endUrl = "/";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle + '&post_type=wp-manga';
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "chapter-" + _cIndex + "-" + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetchXHR(FXmode.fetchHTML, this.siteSearch.href)
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("div.post-title > h3 > a").href;
                        this.total = book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}