import { ParserChapter } from '../../../../parser';
import { fetchStatusHTML, fetchStatusJSON, fetchCatch, ReplaceName } from '../../../../domain';
import tanimoto from '../../../../StringProcent/tanimoto';

export default class novelsonlineNet extends ParserChapter {
    constructor() {
        super('https://novelsonline.net/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // POST url
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        let url = new URL(this.site.origin + "/sResults.php");

        let isLucky = false;
        var isError = '';
        await fetch(url.href, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            "referrer": "https://novelsonline.net/",
            "body": "q=" + this.bTitle,
            "method": "POST",
        })
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("ul > li");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a > span.title").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("a").href;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = fetchCatch(err, url.href));

        if (isError != '') {
            this.total = isError;
            return;
        }

        if (isLucky) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("#collapse-1 > div > div > div.tab-pane.active > ul > li:last-child").textContent.match(/\D*(\d+)/)[1];
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}


