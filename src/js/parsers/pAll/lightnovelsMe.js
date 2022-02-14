import { Parser } from '../../parser'
import { fetchStatusHTML, fetchStatusJSON, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class lightnovelsMe extends Parser {
    constructor() {
        super(new URL('https://lightnovels.me'), '.html', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(this.endUrl, '').replace('/novel/', '/') + "/chapter-" + _chapterN + "-" + ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/api/search?keyword=" + title + "&index=0&limit=20";

        return await gmfetch(url)
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data.results).length == 0) {
                    return "B0";
                }

                for (let book of data.results) {
                    let titleParser = book.novel_name;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.novel_slug;
                        return book.chapter_name.match(/\D*(\d+)/)[1];
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}