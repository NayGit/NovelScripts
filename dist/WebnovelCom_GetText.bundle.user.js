/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/domain.js


async function ResponseToHTML(response) {
        let bodyText = await response.text();

        let parser = new DOMParser();
        let bodyHtml = parser.parseFromString(bodyText, 'text/html');

        return bodyHtml;
}

function domain_fetchStatusHTML(response) {
    return response.ok ? ResponseToHTML(response) : Promise.reject(response)
}

function fetchStatusJSON(response) {
    return response.ok ? response.json() : Promise.reject(response)
}

function domain_fetchCatch(_error, _site) {
    if (!_error.ok) {
        console.warn(new URL(_site) + ' Fetch error: ' + _error.status);
        console.warn(_error);
        return "F" + _error.status;
    }
    else {
        console.error(new URL(_site) + ' Parsing error: ' + _error);
        console.error(_error);
        return "errP";
    }
}

function ReplaceName(name) {
    return name.toLowerCase().replaceAll(' ', '-').replaceAll(/[.?!)(,:'\[\]]/g, '');
}

function copytext(el) {
    /*
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(el).text()).select();
        document.execCommand("copy");
        $tmp.remove();
    */
}

function copyHtml(el) {
    //document.ondragstart =
    //    document.onselectstart =
    //    document.oncontextmenu =
    //    document.body.oncontextmenu =
    //    document.body.onkeydown =
    //    () => true;

    console.log("asdasdasda" + el);
    var tmp = document.createElement("textarea");
    tmp.id = "copyTextarea";
    tmp.value = el;
    document.getElementsByTagName("body")[0].append(tmp);

    var copyTextarea = document.getElementById("copyTextarea");
    copyTextarea.focus();
    copyTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}
;// CONCATENATED MODULE: ./src/js/webNovel.js


// ���������� ���� � ��������� name. ��� undefined, ���� ������ �� �������
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function bookWebNovel(loc) {
    let p = loc.pathname.split('/');

    let book = p[2].split('_');

    if (book.length == 2)
        return book[1];
    else
        return p[2];
}

function glavaWebNovel(loc) {
    let p = loc.pathname.split('/');

    let glava = p[3].split('_');

    if (glava.length == 2)
        return glava[1];
    else
        return p[3];
}

async function downloadBookIfno(_loc) {
    let url = _loc.origin + '/go/pcm/chapter/get-chapter-list?bookId=' + bookWebNovel(_loc) + '&_csrfToken=' + getCookie("_csrfToken");;

    return await fetch(url)
        .then(res => fetchStatusJSON(res))
        .then(data => {
            return data;
        })
        .catch(err => domain_fetchCatch(err, url));
}

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function getCatalog(_json, _loc) {
    let chId = glavaWebNovel(_loc);

    var tmpChList = new Array();
    var tmpFlag = false;

    if (_loc.href.endsWith('/catalog'))
        tmpFlag = true;

    for (let volume of _json.data.volumeItems) {
        for (let chapter of volume.chapterItems) {
            if (tmpFlag)
                tmpChList.push([chapter.chapterIndex, chapter.chapterId, chapter.chapterName, chapter.publishTimeFormat, chapter.isAuth, chapter.chapterLevel]); //isAuth=1 � ���������, chapterLevel=0 --> �� ������, chapterLevel>0 ��������
            else if (chId == chapter.chapterId)
                tmpFlag = true;
        }
    }

    return tmpChList;
}

// �������???
async function downloadCatalog(bookId, chId) {
    var tmpChList = new Array();
    var tmpFlag = false;

    if (location.href.endsWith('/catalog'))
        tmpFlag = true;

    let url = 'https://m.webnovel.com/book/' + bookId + '/catalog';
    await fetch(url)
        .then(res => fetchStatusHTML(res))
        .then(data => {
            var chObj = data.getElementById('__NEXT_DATA__').textContent;

            var chJson = JSON.parse(chObj);
            console.log(chJson);

            var chList = chJson.props.initialState.entities.chapter;
            console.log(chList);

            for (var ch in chList) {
                if (tmpFlag)
                    tmpChList.push([chList[ch].chapterIndex, chList[ch].chapterId, chList[ch].chapterName, chList[ch].publishTimeFormat, chList[ch].isAuth, chList[ch].chapterLevel]); //isAuth=1 � ���������, chapterLevel=0 --> �� ������, chapterLevel>0 ��������
                else if (chId == chList[ch].chapterId)
                    tmpFlag = true;
            }
            console.log(tmpChList);
        })
        .catch(err => fetchCatch(err, url));

    return tmpChList;
}

// �������???
function Title() {
    let title = document.title;
    console.log(title);

    let result = title.match(/(.+)\sChapter\s(\d+)\s-\s(.+)/);

    if (result.length === 4) {
        console.log(result[1]);     // Script (������ ������)
        console.log(result[2]);     // Script (2 ������)
        console.log(result[3]);     // Script (3 ������)
        console.log(result.length); // 4
    }
    else {
        console.log('��� �����???');
    }

    return result;
}
;// CONCATENATED MODULE: ./src/js/StringProcent/tanimoto.js
function tanimoto(s1, s2) {
    s1 = Array.from(s1.toLowerCase());
    s2 = Array.from(s2.toLowerCase());

    var a = s1.length;
    var b = s2.length;
    var c = 0;

    for (var sym of s1) {
        var index = s2.indexOf(sym);
        if (index > -1) {
            s2.splice(index, 1);
            c += 1;
        }
    }
    return c / (a + b - c)
}

//let diff = tanimoto(title, titleParser);
;// CONCATENATED MODULE: ./src/WebnovelCom_GetText.js
// ==UserScript==
// @name        WebnovelCom - GetText
// @namespace   NovelScripts
// @icon        https://github.com/NayGit/NovelScripts/raw/master/icon.png
// @supportURL  https://github.com/NayGit/NovelScripts/issues
// @author      Nay
// @match       https://m.webnovel.com/book/*/*
// @grant       GM_xmlhttpRequest
// @version     0.0.2
// ==/UserScript==






async function GetBooks(_title) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'POST',
            url: "https://open.lightnovelplus.com/book/search",
            anonymous: true,
            type: 'json',
            headers: { 'User-Agent': 'okhttp/4.9.1' },
            data: JSON.stringify({ "packageName": "com.lightnovelplus.webnovel", "marketChannel": "none", "page_num": "1", "sysVer": "5.1.1", "osType": "2", "keyword": _title, "language": "en", "ver": "2.1.7", "product": "1" }),
            onload: function (data) {
                console.log(data);

                let json = JSON.parse(data.responseText);
                console.log(json);

                resolve(json);

            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

async function GetCatalog(_bId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'POST',
            url: "https://open.lightnovelplus.com/chapter/catalog",
            anonymous: true,
            type: 'json',
            headers: { 'User-Agent': 'okhttp/4.9.1' },
            data: JSON.stringify({ "sysVer": "5.1.1", "book_id": _bId, "packageName": "com.lightnovelplus.webnovel", "osType": "2", "marketChannel": "none", "language": "en", "ver": "2.1.7", "product": "1" }),
            onload: function (data) {
                console.log(data);

                let json = JSON.parse(data.responseText);
                console.log(json);

                resolve(json);

            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

async function GetChapter(_bId, _chId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'GET',
            url: "https://img.suv666.com/20170612/nof/" + _bId + "/" + md5(_bId + "-" + _chId).toLowerCase() + ".json",
            anonymous: true,
            type: 'json',
            headers: { 'User-Agent': 'okhttp/4.9.1' },
            onload: function (data) {
                console.log(data);

                let json = JSON.parse(data.responseText);
                console.log(json);

                resolve(json);

            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

function md5(d) { return rstr2hex(binl2rstr(binl_md5(rstr2binl(d), 8 * d.length))) } function rstr2hex(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function rstr2binl(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function binl2rstr(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function binl_md5(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }

(async function () {
    'use strict';
    await new Promise(r => setTimeout(r, 500));

    if (!document.querySelector("#content-" + glavaWebNovel(location) + " ~ div > .styles_locked_area__Luqxf")) {
        return;
    }

    let bWN = bookWebNovel(location);

    let BookId = localStorage.getItem("ln_" + bWN);
    if (!BookId) {
        let BookInfo = await downloadBookIfno(location);
        let BookTitle = BookInfo.data.bookInfo.bookName;

        let jsonBooks = await GetBooks(BookTitle);


        for (let book of jsonBooks.data.list) {
            let titleParser = book.name;

            let diff = tanimoto(BookTitle, titleParser);

            if (diff > 0.9) {
                BookId = book.book_id;
                localStorage.setItem("ln_" + bWN, BookId);
                break;
            }
        }

        if (!BookId) {
            alert("Error: BookId");
            return;
        }
    }

    let ChapterListReverse = "";
    if (ChapterListReverse === "") {
        let jsonCatalog = await GetCatalog(BookId);
        ChapterListReverse = jsonCatalog.data.chapter_list.reverse();
    }

    while (true) {
        let contents = document.querySelectorAll("div.pr > div > div.styles_content__3tuD4.styles_locked_content__16dUX");

        if (contents.length === 0) {
            return;
        }

        for (let c of contents) {
            let cId = c.id.match(/^content-(\d+)$/);
            if (cId) {
                if (await GO(cId[1], ChapterListReverse) === -1) {
                    return;
                }
            }
        }

        await new Promise(r => setTimeout(r, 6000));
    }
})();

async function GO(_gWN, _cLR) {
    let content = document.querySelector("#content-" + _gWN);
    let chapterTitle = content.parentElement.querySelector("h2").textContent.match(/^\d+ (.*?)$/)[1];

    if (content.querySelector("pre")) {
        return;
    }

    let tmpP = content.querySelectorAll("p");
    for (let i = 0, p; p = tmpP[i]; i++) {
        if (i === 0) {
            continue;
        }
        p.parentNode.removeChild(p);
    }

    let jsonChapter = "";
    for (let catalog of _cLR) {
        if (catalog.chapter_title === chapterTitle) {
            jsonChapter = await GetChapter(catalog.book_id, catalog.chapter_id);
            break;
        }
    }

    if (jsonChapter !== "") {
        content.style.height = "auto";
        content.style.position = "inherit";

        let pre = document.createElement('pre');
        pre.innerHTML = jsonChapter.data.content;

        content.appendChild(pre);
    }
    else {
        alert("Error: No chapter");
        return -1;
    }
}
/******/ })()
;