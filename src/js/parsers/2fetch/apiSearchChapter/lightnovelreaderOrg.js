import { Parser } from '../../../parser'
import { fetchStatusHTML, fetchStatusJSON, fetchCatch, ReplaceName } from '../../../domain';
import tanimoto from '../../../StringProcent/tanimoto'

export default class lightnovelreaderOrg extends Parser {
    constructor() {
        super(new URL('https://lightnovelreader.org'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/search/autocomplete?query=" + title;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data).length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of data.results) {
                    let titleParser = book.original_title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.link;
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
                    return data.querySelector("body > section:nth-child(4) > div > div > div.col-12.col-xl-9 > div > div:nth-child(2) > div > div.novels-detail-right > ul > li:nth-child(9) > div.novels-detail-right-in-right > a:nth-child(1)").textContent.match(/\D*(\d+)/)[1];
                })
                .catch(err => fetchCatch(err, url));
        }

        return "S0";
    }
}