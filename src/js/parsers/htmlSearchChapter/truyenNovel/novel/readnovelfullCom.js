import { ParserChapter } from '../../../../parser';
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../../domain';
import tanimoto from '../../../../StringProcent/tanimoto';

export default class readnovelfullCom extends ParserChapter {
    constructor() {
        super('https://readnovelfull.com/');
        this.endUrl = ".html";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '').replaceAll(/-v\d+$/g, '') + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.novel-title > a").pathname;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = ffetchCatch(err, this.siteSearch.href));
    }
}