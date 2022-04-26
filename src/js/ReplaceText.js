'use strict';

async function GetChapter(_url, _cId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'GET',
            url: _url,
            //anonymous: true,
            type: 'document',
            //headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36' },
            onload: function (data) {
                // User-Agent: Mobile
                let bodyText = data.response;

                let parser = new DOMParser();
                let bodyHtml = parser.parseFromString(bodyText, 'text/html');

                let pOrig = bodyHtml.querySelectorAll("#content-" + _cId + " > p");

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

export async function ReplaceText(_bId, _cId) {
    let contentCheck = document.querySelector("#content-" + _cId);
    if (contentCheck.querySelector("pre")) {
        return;
    }

    // Сортировка
    let pOrder = contentCheck.querySelectorAll("p._cfcmp");
    if (pOrder.length > 0) {
        
        let pre = document.createElement('pre');
        contentCheck.appendChild(pre);

        for (let i = 0; i < pOrder.length; i++) {
            let str = "";
            [].slice.call(pOrder[i].children).sort(function (a, b) {
                if (getComputedStyle(a).order * 1 > getComputedStyle(b).order * 1) {
                    return 1;
                }
                if (getComputedStyle(a).order * 1 < getComputedStyle(b).order * 1) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            })
                .forEach(function (val) {
                    str = str + val.innerText;
                });

            pOrder[i].innerText = str;
        }

        let p2 = await GetChapter("https://m-webnovel-com.translate.goog/book/" + _bId + "/" + _cId + "?_x_tr_sl=en&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp");
        //let p2 = await GetChapter("https://m-webnovel-com.translate.goog" + new URL(_loc).pathname + "?_x_tr_sl=en&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp", _gWN);
        //let p2 = await GetChapter(_loc, _gWN);
        if (p2.length > 0) {
            var dict = {};
            let pReplace = document.querySelectorAll("#content-" + _cId + " > p");

            for (let i = 0; i < p2.length; i++) {
                let p2Array = p2[i].split('');
                let contentChArray = pReplace[i].innerText.split('');

                for (let prop in contentChArray) {
                    dict[contentChArray[prop]] = p2Array[prop];
                }
            }

            for (let i = 0; i < pReplace.length; i++) {
                let str = "";
                pReplace[i].innerText.split('').forEach(element => {
                    if (dict[element] !== undefined) {
                        str = str + dict[element];
                    }
                    else {
                        str = str + element;
                    }
                });

                pReplace[i].innerText = str;
            }
        }
    }
    else {
        alert("Chapter: LOCKED")
        return -1;
    }
}