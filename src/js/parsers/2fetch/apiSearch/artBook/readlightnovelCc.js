import { artBook } from '../../../../parser'

export default class readlightnovelCc extends artBook {
    constructor() {
        super(new URL('https://www.readlightnovel.cc'), '/1', true, true);
    }
}