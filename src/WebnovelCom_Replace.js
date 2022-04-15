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

'use strict';

import { glavaWebNovel } from './js/webNovel'

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