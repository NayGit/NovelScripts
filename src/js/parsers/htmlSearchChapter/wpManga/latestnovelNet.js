import { ParserChapter } from '../../../parser';
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../domain';
import tanimoto from '../../../StringProcent/tanimoto'

export default class latestnovelNet extends ParserChapter {
    constructor() {
        super('https://latestnovel.net/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle.replace(':', '') + '&post_type=wp-manga';
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + 'chapter-' + _cIndex);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
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