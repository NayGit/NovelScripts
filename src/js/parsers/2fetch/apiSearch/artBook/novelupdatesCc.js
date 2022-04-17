import { p95 } from '../../../../parser'

export default class novelupdatesCc extends p95 {
    constructor() {
        super(new URL('https://www.novelupdates.cc'), '/1', true, true);
    }
}