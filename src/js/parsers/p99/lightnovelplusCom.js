import { p4 } from '../../parser'

export default class lightnovelplusCom extends p4 {
    constructor() {
        super(new URL('https://lightnovelplus.com/book/search.html?keyword='), '', false)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book + this.endUrl);
    }
}