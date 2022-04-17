import { Parser } from '../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class octopiiCo extends Parser {
    constructor() {
        super(new URL('https://octopii.co'), '/', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + '-chapter-' + _chapterN + '-' + ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title;

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#primary > div > div.col-12.col-md-6.d-flex.mb-4.flex-wrap.position-relative.overflow-hidden");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-name.m-0 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("h3.novel-name.m-0 > a").pathname.replace('/novel/', '/').replace(/\/$/, '');
                        return book.querySelector("h4.chapter-name.m-0 > a.chapter-name").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}