import { ParserChapter } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class lightnovelreaderOrg extends ParserChapter {
    constructor() {
        super('https://lightnovelreader.org/');
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            this.apiSearch = new URL(this.site.origin + "/search/autocomplete?query=" + this.bTitle);

            let isError = '';
            await fetchXHR(FXmode.xhrJSON, this.apiSearch.href)
                .then(data => {
                    if (Object.keys(data).length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of data.results) {
                        let titleParser = book.original_title;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = book.link;
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
            return await fetchXHR(FXmode.xhrHTML, this.siteBook.href)
                .then(data => {
                    this.total = data.querySelector("body > section:nth-child(4) > div > div > div.col-12.col-xl-9 > div > div:nth-child(2) > div > div.novels-detail-right > ul > li:nth-child(9) > div.novels-detail-right-in-right > a:nth-child(1)").textContent.match(/\D*(\d+)/)[1];
                    return;
                })
                .catch(err => this.total = fetchCatch(err, url));
        }

        this.total = "S0";
    }
}