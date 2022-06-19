import { ParserBook } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchResult';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class lightnovelsMe extends ParserBook {
    constructor() {
        super('https://lightnovels.me/');
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;

        // API
    }

    async totalChapters() {
        this.apiSearch = new URL(this.site.origin + "/api/search?keyword=" + this.bTitle + "&index=0&limit=20");

        await fetchXHR(FXmode.fetchJSON, this.apiSearch.href)
            .then(data => {
                if (Object.keys(data.results).length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of data.results) {
                    let titleParser = book.novel_name;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + '/novel' + book.novel_slug;
                        this.total = book.chapter_name.match(/\D*(\d+)/)[1];
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.apiSearch.href));
    }
}