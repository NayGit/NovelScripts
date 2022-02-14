import { p4 } from '../../parser'

export default class ranobesNet extends p4 {
    constructor() {
        super(new URL('https://ranobes.net/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story='), '', false)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book + this.endUrl);
    }
}