import { Parser } from '../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class readlightnovelsNet extends Parser {
    constructor() {
        super(new URL('https://readlightnovels.net'), '.html', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title;

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-md-3.col-sm-6.col-xs-6.home-truyendecu");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a").title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("a").href;
                        return book.querySelector("a > div > small").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}