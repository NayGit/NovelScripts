import { p4 } from '../../parser'

export default class novelgateNet extends p4 {
    constructor() {
        super(new URL('https://novelgate.net/search/'), '', false)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book + this.endUrl);
    }
}