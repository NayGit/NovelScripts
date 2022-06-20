import { ParserSearch } from 'CrawlerClass/ParserClass';
import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';
import { ReplaceName } from 'Domain/domain';
import tanimoto from 'Domain/StringProcent/tanimoto';

export default class lightnovelplusCom extends ParserSearch {
    constructor() {
        super('https://lightnovelplus.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/book/search.html?keyword=' + this.bTitle;
    }

    linkSearch() {
        this.Open();
    }

    async Open() {
        this.site = this.siteSearch;

        let isLucky = false;
        var isError = '';
        await fetchXHR(FXmode.xhrHTML, this.site.href)
            .then(data => {
                let block = data.querySelectorAll("#list-page > div.col-xs-12.col-sm-12.col-md-9.col-truyen-main_1.archive > div > div.row");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.site = new URL(this.site.origin + book.querySelector("h3.truyen-title > a").pathname);
                        isLucky = true;
                        break;
                    }
                }

                return;
            })
            .catch(err => isError = fetchCatch(err, this.site.href));

        if (isError != '') {
            console.error(isError);
            window.open(this.site);
            return;
        }

        if (isLucky) {
            isLucky = false;
            await fetchXHR(FXmode.xhrHTML, this.site.href)
                .then(data => {
                    this.site = new URL(this.site.origin + data.querySelector("#list-chapter > ul > li.last > a").pathname + data.querySelector("#list-chapter > ul > li.last > a").search);
                    isLucky = true;
                })
                .catch(err => isError = fetchCatch(err, this.site.href));


            if (isError != '') {
                console.error(isError);
                window.open(this.site);
                return;
            }

            if (isLucky) {
                window.open(this.site);
                return;

                //return await fetchXHR(FXmode.xhrHTML, this.site)
                //    .then(data => {
                //        return data.querySelector("#list-chapter > div.row > div:nth-child(1) > ul:last-child- > li > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                //    })
                //    .catch(err => fetchCatch(err, this.site));
            }
        }

        window.open(this.site);
        return;
    }
}