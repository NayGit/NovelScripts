import { p95 } from '../../parser'

export default class readlightnovelCc extends p95 {
    constructor() {
        super(new URL('https://www.readlightnovel.cc'), '/1', true, true);
    }
}