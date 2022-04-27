import { ParserChapter } from '../../parser';
import { fetchStatusJSON, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto';

export default class octopiiCo extends ParserChapter {
    constructor() {
        super('https://octopii.co/');
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex + '-' + ReplaceName(_cTitle));
    }

    async totalChapters() {
        this.apiSearch = new URL(this.site.origin + "/api/advance-search");

        await fetch(this.apiSearch.href, {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"clicked\":false,\"limit\":\"24\",\"page\":0,\"pageCount\":1,\"value\":\"" + this.bTitle + "\",\"sort\":3,\"selected\":{\"genre\":[],\"status\":[],\"sort\":[],\"author\":[]},\"results\":[],\"label\":\"searching ....\"}",
            "method": "POST",
        })
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data.results).length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of data.results) {
                    let titleParser = book.novel_name;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + "/novel/" + book.novel_slug;
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