import { ParserChapter } from '../../parser';
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto';

export default class octopiiCo extends ParserChapter {
    constructor() {
        super('https://octopii.co/');
        this.endUrl = "/";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace('/novel/', '/').replace(/\/$/, '') + '-chapter-' + _cIndex + '-' + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#primary > div > div.col-12.col-md-6.d-flex.mb-4.flex-wrap.position-relative.overflow-hidden");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-name.m-0 > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.novel-name.m-0 > a").pathname;
                        this.total = book.querySelector("h4.chapter-name.m-0 > a.chapter-name").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}