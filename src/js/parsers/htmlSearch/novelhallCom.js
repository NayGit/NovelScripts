import { ParserBook } from '../../parser';
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto';

export default class novelhallCom extends ParserBook {
    constructor() {
        super('https://www.novelhall.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/index.php?s=so&module=book&keyword=' + this.bTitle;
    }

    async totalChapters() {
        await gmfetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#main > div.container > div > table > tbody > tr");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("td:nth-child(2) > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("td:nth-child(2) > a").pathname;
                        this.total = book.querySelector("a.chapter").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}