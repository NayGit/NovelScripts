import { ParserBook } from '../../../../parser';
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../../domain';
import tanimoto from '../../../../StringProcent/tanimoto'

export default class mWuxiaworldCo extends ParserBook {
    constructor() {
        super('https://m.wuxiaworld.co/');
        this.endUrl = '/1';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle + this.endUrl;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("div.result-container_2.result-container > ul.result-list > li.list-item");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a.list-img > img.item-img").alt;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a.list-img").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let allCH = data.querySelector("#detail > div.chapter-wrapper > ul").getElementsByTagName("a");
                    for (let i = allCH.length - 1; i >= 0; i--) {
                        if (allCH[i].style.color === 'gray')
                            continue;
                        else {
                            this.total = allCH[i].textContent.match(/\D*(\d+)/)[1] * -1;
                            return;
                        }
                    }

                    this.total = data.querySelector("#detail > div.chapter-wrapper > div > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}