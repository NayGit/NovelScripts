import { ParserChapter } from '../../../parser';
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../domain';

export default class lightnovelpubCom extends ParserChapter {
    constructor() {
        super('https://www.lightnovelpub.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/novel/" + ReplaceName(this.bTitle);

        this.siteBook = this.siteSearch;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                this.total = data.querySelector("#novel > div.novel-body.container > nav > a.grdbtn.chapter-latest-container > div > p.latest.text1row").textContent.match(/\D*(\d+)/)[1];
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}