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

export class artBook extends ParserBook {
    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle + this.endUrl;
    }

    async totalChapters() {
        let isLucky = false;
        var isError = '';
        await gmfetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.result-container_2.result-container > ul.result-list > li.list-item");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a.list-img > img.item-img").alt;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("a.list-img").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = fetchCatch(err, this.siteSearch.href));

        if (isError != '') {
            this.total = isError;
            return;
        }

        if (isLucky) {
            return await gmfetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let allCH = data.querySelector("#detail > div.chapter-wrapper > ul").getElementsByTagName("a");
                    for (let i = allCH.length - 1; i >= 0; i--) {
                        if (allCH[i].style.color === 'gray')
                            continue;
                        else {
                            this.total = allCH[i].textContent.match(/\D*(\d+)/)[1] * -1;
                            return;
                        }
                    }

                    this.total = data.querySelector("#detail > div.chapter-wrapper > div > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}