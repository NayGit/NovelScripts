import { p4 } from '../../parser'

export default class novelhallCom extends p4 {
    constructor() {
        super(new URL('https://www.novelhall.com/index.php?s=so&module=book&keyword='), '', false)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book + this.endUrl);
    }
}