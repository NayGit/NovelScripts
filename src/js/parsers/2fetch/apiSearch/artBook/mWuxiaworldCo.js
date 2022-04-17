import { artBook } from '../../../../parser'

export default class mWuxiaworldCo extends artBook {
    constructor() {
        super(new URL('https://m.wuxiaworld.co'), '/1', true, true);
    }
}