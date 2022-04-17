import { artBook } from '../../../../parser'

export default class readlightnovelCo extends artBook {
    constructor() {
        super(new URL('https://www.readlightnovel.co'), '/1', true, true);
    }
}