import { fetchStatusHTML, fetchCatch, ReplaceName } from './domain';
import tanimoto from './StringProcent/tanimoto'


        //console.info(this.constructor.name);

export class Parser {
    constructor(_site) {
        this.site = new URL(_site);
        this._siteSearch = "";
        this.bTitle = "";
    }

    set siteSearch(_newSiteSearch) {
        this._siteSearch = new URL(_newSiteSearch);
    }

    get siteSearch() {
        return this._siteSearch === "" ? this.site : this._siteSearch;
    }

    SetSiteSearch() {
        alert("‡: " + this.bTitle);
    }

    linkSearch() {
        window.open(this.siteSearch);
    }




    linkRead(title, chInt) {
        //throw new UserException("Error");
        alert("Нет таких значений");
    }

    async totalChapters(title) {
        //throw new UserException("Error");
        return -99999;
    }
}

export class ParserSearch extends Parser {
    //constructor(_site) {
    //    super(_site);
    //}
}

export class ParserBook extends Parser {
    constructor(_site) {
        super(_site);
        this.total = 0;
        this._siteBook = "";
    }

    set siteBook(_newSiteBook) {
        this._siteBook = new URL(_newSiteBook);
    }

    get siteBook() {
        return this._siteBook === "" ? this.site : this._siteBook;
    }

    linkBook() {
        window.open(this.siteBook);
    }
}

export class ParserChapter extends ParserBook {
    constructor(_site) {
        super(_site);
        this.endUrl = "";
    }
}

export class p1 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + ReplaceName(_book) + '_' + _chapterN + this.endUrl);
    }
}

export class p2 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + ReplaceName(_book) + '/chapter-' + _chapterN + this.endUrl);
    }
}

export class p3 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + ReplaceName(_book) + "/chapter-" + _chapterN + "-" + ReplaceName(_chapterTitle) + this.endUrl);
    }
}

export class p4 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book.toLowerCase().replaceAll(' ', '+') + this.endUrl);
    }
}

export class artBook extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search/' + title + this.endUrl;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.result-container_2.result-container > ul.result-list > li.list-item");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a.list-img > img.item-img").alt;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a.list-img").pathname;
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
                    let allCH = data.querySelector("#detail > div.chapter-wrapper > ul").getElementsByTagName("a");
                    for (let i = allCH.length - 1; i >= 0; i--) {
                        if (allCH[i].style.color === 'gray')
                            continue;
                        else {
                            return allCH[i].textContent.match(/\D*(\d+)/)[1] * -1;
                        }
                    }

                    return data.querySelector("#detail > div.chapter-wrapper > div > a").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => fetchCatch(err, url));
        }

        return "S0";
    }
}