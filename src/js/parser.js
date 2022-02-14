import { fetchStatusHTML, fetchCatch, ReplaceName } from './domain';
import tanimoto from './StringProcent/tanimoto'

export class Parser {
    constructor(site, endUrl, isSearch, isPrivileged = false) {
        this.site = site;
        this.endUrl = endUrl;
        this.isSearch = isSearch;
        this.isPrivileged = isPrivileged;
    }

    linkRead(title, chInt) {
        alert("Нет таких значений");
    }

    async totalChapters(title) {
        return -99999;
    }
}

export class p1 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + ReplaceName(_book) + '_' + _chapterN + this.endUrl);
    }
}

export class p2 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + ReplaceName(_book) + '/chapter-' + _chapterN + this.endUrl);
    }
}

export class p3 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + ReplaceName(_book) + "/chapter-" + _chapterN + "-" + ReplaceName(_chapterTitle) + this.endUrl);
    }
}

export class p4 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book.toLowerCase().replaceAll(' ', '+') + this.endUrl);
    }
}

export class p95 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search/' + title + this.endUrl;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.result-container_2.result-container > ul.result-list > li.list-item");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a.list-img > img.item-img").alt;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a.list-img").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let allCH = data.querySelector("#detail > div.chapter-wrapper > ul").getElementsByTagName("a");
                    for (let i = allCH.length - 1; i >= 0; i--) {
                        if (allCH[i].style.color === 'gray')
                            continue;
                        else {
                            return allCH[i].textContent.match(/\D*(\d+)/)[1] * -1;
                        }
                    }

                    return data.querySelector("#detail > div.chapter-wrapper > div > a").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => fetchCatch(err, url));
        }

        return "S0";
    }
}