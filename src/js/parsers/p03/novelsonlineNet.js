import { Parser } from '../../parser'
import { fetchStatusHTML, fetchStatusJSON, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class novelsonlineNet extends Parser {
    constructor() {
        super(new URL('https://novelsonline.net'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/sResults.php";

        let isLucky = false;
        var isError = '';
        await gmfetch(url, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            "referrer": "https://novelsonline.net/",
            "body": "q=" + title,
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

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("a").href;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("#collapse-1 > div > div > div.tab-pane.active > ul > li:last-child").textContent.match(/\D*(\d+)/)[1];
                })
                .catch(err => fetchCatch(err, url));
        }

        return "S0";
    }
}


