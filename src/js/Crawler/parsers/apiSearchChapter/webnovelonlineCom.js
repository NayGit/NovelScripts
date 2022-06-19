import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchResult';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class webnovelonlineCom extends ParserChapter {
    constructor() {
        super('https://webnovelonline.com/');
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/searching/' + this.bTitle;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace('/novel/', '/chapter/') + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        this.apiSearch = new URL(this.site.protocol + "//api." + this.site.hostname + "/api/v1/wuxia/search?name=" + this.bTitle);

        await fetchXHR(FXmode.fetchJSON, this.apiSearch.href)
            .then(data => {
                if (Object.keys(data.data).length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of data.data) {
                    let titleParser = book.title;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + new URL(book.url).pathname;
                        this.total = book.chap.match(/\D*(\d+)/)[1];
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.apiSearch.href));
    }
}