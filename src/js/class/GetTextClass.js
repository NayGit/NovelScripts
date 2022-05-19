export class GetText {
    constructor(_site) {
        this.site = new URL(_site);
        this.bTitle = "";
        this.bId = "";
        this.sBookId = 0;
    }

    async GetText(_cId, _cTitle) {
        alert("GetText???");
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

        bookId[this.bId] = this.sBookId;
        bookId = JSON.stringify(bookId);
        localStorage.setItem(this.constructor.name, bookId);
    }

    checkBookUndefined() {
        let bookId = this.getBookLocal();
        if (bookId[this.bId] === undefined) {
            return true;
        }
        else {
            this.sBookId = bookId[this.bId];
            return false;
        }
    }

    checkBookZero() {
        return this.sBookId === 0;
    }
}