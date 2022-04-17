import { Parser } from '../../../../parser'
import { fetchStatusHTML, fetchCatch, ReplaceName } from '../../../../domain';
import tanimoto from '../../../../StringProcent/tanimoto'

export default class readwnCom extends Parser {
    constructor() {
        super(new URL('https://www.readwn.com'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(this.endUrl, '') + '_' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/e/search/index.php";

        let isLucky = false;
        var isError = '';
        await gmfetch(url, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "referrer": this.site.origin + "/search.html",
            "body": "show=title&tempid=1&tbname=news&keyboard=" + title,
            "method": "POST",
        })
            .then(res => fetchStatusHTML(res))
            .then(data => {
                if (data.title === "Message hint" || data.title == "") {
                    isError = "B0";
                    return;
                }

                let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                for (let book of block) {
                    let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a").pathname;
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
                    return data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                })
                .catch(err => fetchCatch(err, url));
        }

        return "S0";
    }
}