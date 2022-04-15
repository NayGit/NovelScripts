/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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
        .catch(err => fetchCatch(err, url));
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
;// CONCATENATED MODULE: ./src/WebnovelCom_Replace.js
// ==UserScript==
// @name        WebnovelCom - Replace
// @namespace   NovelScripts
// @icon        https://github.com/NayGit/NovelScripts/raw/master/icon.png
// @supportURL  https://github.com/NayGit/NovelScripts/issues
// @author      Nay
// @match       https://m.webnovel.com/book/*/*
// @grant       GM_xmlhttpRequest
// @version     0.0.1
// ==/UserScript==





async function GetChapter(_url, _chapter) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'GET',
            url: _url,
            anonymous: true,
            type: 'document',
            //headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36' },
            onload: function (data) {
                // User-Agent: Mobile
                let bodyText = data.response;

                let parser = new DOMParser();
                let bodyHtml = parser.parseFromString(bodyText, 'text/html');

                let pOrig = bodyHtml.querySelectorAll("#content-" + _chapter + " > p");

                if (pOrig.length > 0) {
                    let pTmp = [];
                    for (let c of pOrig) {
                        pTmp.push(c.innerText);
                    }
                    resolve(pTmp);
                }
                else {
                    // User-Agent: ---> PC
                    let str = data.responseText.match(/chapInfo.*?({.*?});/);

                    if (str) {
                        str = str[1].replaceAll(/\\([<> '&])/g, "$1");
                        //console.log(str);

                        let json = JSON.parse(str);
                        //console.log(json);

                        let pTmp = [];
                        for (let c of json.chapterInfo.contents) {
                            pTmp.push(c.content.replaceAll(/<[/]?p>/g, ""));
                        }
                        resolve(pTmp);
                    }
                    else {
                        resolve("Error");
                    }
                }

            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

(async function () {
    'use strict';

    await new Promise(r => setTimeout(r, 2500));

    // @match       https://*/*
    //let TEST = await GetChapter('https://www.webnovel.com/book/*/*', 'chapter');
    //console.log(TEST);
    //return;

    const chapter = glavaWebNovel(location);

    // ����������
    let content = document.querySelectorAll("#content-" + chapter + " > p._cfcmp");
    if (content.length > 0) {
        document.querySelector("#content-" + chapter).style.fontFamily = "Merriweather,serif"; //Genuine_61365182307294757, Lora, serif, serif

        for (let i = 0; i < content.length; i++) {
            let str = "";
            [].slice.call(content[i].children).sort(function (a, b) {
                if (getComputedStyle(a).order * 1 > getComputedStyle(b).order * 1) {
                    return 1;
                }
                if (getComputedStyle(a).order * 1 < getComputedStyle(b).order * 1) {
                    return -1;
                }
                // a ������ ���� ������ b
                return 0;
            })
                .forEach(function (val) {
                    str = str + val.innerText;
                });

            content[i].innerText = str;
        }

        let p2 = await GetChapter(location.href, chapter);
        //let p2 = await GetChapter("https://m-webnovel-com.translate.goog" + location.pathname + "?_x_tr_sl=en&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp", chapter);
        if (p2.length > 0) {
            var dict = {};
            let contentCh = document.querySelectorAll("#content-" + chapter + " > p");

            for (let i = 0; i < p2.length; i++) {
                let p2Array = p2[i].split('');
                let contentChArray = contentCh[i].innerText.split('');

                for (let prop in contentChArray) {
                    dict[contentChArray[prop]] = p2Array[prop];
                }
            }

            for (let i = 0; i <= contentCh.length; i++) {
                let str = "";
                contentCh[i].innerText.split('').forEach(element => {
                    if (dict[element] !== undefined) {
                        str = str + dict[element];
                    }
                    else {
                        str = str + element;
                    }
                });

                contentCh[i].innerText = str;
            }
        }
    }
})();
/******/ })()
;