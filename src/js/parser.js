//console.info(this.constructor.name);

export class Parser {
    constructor(_site) {
        this.site = new URL(_site);
        this._siteSearch = "";
        this.bTitle = "";
        this.bId = "";
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

    getBookLocal() {
        let bookId = localStorage.getItem(this.constructor.name);

        if (bookId) {
            return JSON.parse(bookId);
        }
        else {
            return {};
        }
    }

    setBookLocal() {
        let bookId = this.getBookLocal();

        bookId[this.bId] = this.siteBook.href;
        bookId = JSON.stringify(bookId);
        localStorage.setItem(this.constructor.name, bookId);
    }

    checkBookUndefined() {
        let bookId = this.getBookLocal();
        if (bookId[this.bId] === undefined) {
            return true;
        }
        else {
            this.siteBook = bookId[this.bId];
            return false;
        }
    }

    checkBookSite() {
        let bookId = this.getBookLocal();

        return bookId[this.bId] === this.siteBook.href;
    }
}

export class ParserChapter extends ParserBook {
    constructor(_site) {
        super(_site);
        this.endUrl = "";
    }
}