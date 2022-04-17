import { artBook } from '../../../../parser'

export default class novelupdatesCc extends artBook {
    constructor() {
        super(new URL('https://www.novelupdates.cc'), '/1', true, true);
    }
}