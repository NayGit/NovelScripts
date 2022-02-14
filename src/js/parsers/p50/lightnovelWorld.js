import { Parser } from '../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../domain';
import tanimoto from '../../StringProcent/tanimoto'

export default class lightnovelWorld extends Parser {
    constructor() {
        super(new URL('https://m.lightnovel.world'), '', true)
    }
    
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.book_info");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    book.querySelector("li.text1.textC000 span").remove();
                    let titleParser = book.querySelector("li.text1.textC000").textContent.trim();

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("div.book_info_r > ul > li.book_info_add_afv > a:nth-child(2)").pathname;
                        return book.querySelector("a.text2.textC333").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => fetchCatch(err, url));
    }
}