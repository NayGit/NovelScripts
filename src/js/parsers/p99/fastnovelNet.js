import { Parser } from '../../parser'

export default class fastnovelNet extends Parser {
    constructor() {
        super(new URL('https://fastnovel.net/search/'), '', false)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book + this.endUrl);
    }
}