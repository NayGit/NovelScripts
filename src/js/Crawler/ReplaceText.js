'use strict';

import { fetchXHR, FXmode, fetchCatch } from 'Domain/FetchXHR';

//async function GetChapter(_url, _cId) {
//    return new Promise((resolve, reject) => {
//        GM_xmlhttpRequest({
//            method: 'GET',
//            url: _url,
//            //anonymous: true,
//            type: 'document',
//            headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36' },
//            onload: function (data) {
//                // User-Agent: Mobile
//                let bodyText = data.response;

//                let parser = new DOMParser();
//                let bodyHtml = parser.parseFromString(bodyText, 'text/html');

//                let pOrig = bodyHtml.querySelectorAll("#content-" + _cId + " > p");

//                if (pOrig.length > 0) {
//                    let pTmp = [];
//                    for (let c of pOrig) {
//                        pTmp.push(c.innerText);
//                    }
//                    resolve(pTmp);
//                }
//                else {
//                    // User-Agent: ---> PC
//                    let str = data.responseText.match(/chapInfo.*?({.*?});/);

//                    if (str) {
//                        str = str[1].replaceAll(/\\([<> '&])/g, "$1");
//                        //console.log(str);

//                        let json = JSON.parse(str);
//                        //console.log(json);

//                        let pTmp = [];
//                        for (let c of json.chapterInfo.contents) {
//                            pTmp.push(c.content.replaceAll(/<[/]?p>/g, ""));
//                        }
//                        resolve(pTmp);
//                    }
//                    else {
//                        resolve("Error");
//                    }
//                }

//            },
//            onerror: function (error) {
//                reject(error);
//            }
//        });
//    });
//}

async function GetChapterFetch(_url, _cId) {
    return await fetchXHR(FXmode.fetchHTML, _url)
        .then(data => {
            let pOrig = data.querySelectorAll("#content-" + _cId + " > p");

            if (pOrig.length > 0) {
                let pTmp = [];
                for (let c of pOrig) {
                    pTmp.push(c.innerText);
                }

                return pTmp;
            }
            else {
                return [];
            }
        })
        .catch(err => fetchCatch(err, this.siteSearch.href));
}

function RemoveTag(_parrent) {
    let y = _parrent.querySelectorAll("y.sy-0");
    for (let sy of y) {
        sy.remove();
    }
}

async function ArraySortOrder(_parrent) {
    let pCopy = _parrent;
    while (true) {
        if (!pCopy.classList.contains("_mix")) {
            break;
        }
        else {
            await new Promise(r => setTimeout(r, 250));

            let tmpP = _parrent.parentElement.querySelector("p." + _parrent.className.replaceAll(" ", ".").replace("._mix", ""));
            if (tmpP) {
                pCopy = tmpP;
            }
        }
    }

    RemoveTag(pCopy);

    let str = "";
    [].slice.call(pCopy.children).sort(function (a, b) {
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

    if (str === "") {
        return _parrent.innerText;
    }

    //return innerText;
    return str;
}

function ReplaceSymbolGO(_element, _dict) {
    let str = "";
    _element.textContent.split('').forEach(element => {
        if (_dict[element] !== undefined) {
            str = str + _dict[element];
        }
        else {
            str = str + element;
        }
    });

    _element.textContent = str;
}

function ReplaceSymbol(_element, _dict) {
    if (_element.hasChildNodes()) {
        let children = _element.childNodes;

        for (let ch of children) {
            if (ch.hasChildNodes()) {
                ReplaceSymbol(ch, _dict);
            }
            else {
                ReplaceSymbolGO(ch, _dict);
            }
        }
    }
    else {
        ReplaceSymbolGO(_element, _dict);
    }
}

export async function ReplaceText(_bId, _cId) {
    let contentCheck = document.querySelector("#content-" + _cId);

    // ����������
    let pOrder = contentCheck.querySelectorAll("p._cfcmp");
    if (pOrder.length > 0) {
        let p2 = await GetChapterFetch("https://m-webnovel-com.translate.goog/book/" + _bId + "/" + _cId + "?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp", _cId);
        if (p2.length > 0) {
            var dict = {};
            let pReplace = document.querySelectorAll("#content-" + _cId + " > p");

            let j = 0;
            for (let i in p2) {
                if (p2[i].trim() === "" && p2[i].trim() !== pReplace[j].textContent.trim()) {
                    continue;
                }

                let p2Array = p2[i].trim().split('');

                if (pReplace[i].classList.contains("_cfcmp")) {
                    pReplace[i].scrollIntoView({ behavior: "smooth" });
                    await new Promise(r => setTimeout(r, 750));
                }
                let contentChArray = (await ArraySortOrder(pReplace[j])).trim().split('');

                if (p2Array.lenght === contentChArray.lenght) {
                    for (let prop in p2Array) {
                        if (dict[contentChArray[prop]] === undefined) {
                            dict[contentChArray[prop]] = p2Array[prop];
                        }
                    }
                }

                j++;
            }
            contentCheck.parentElement.querySelector("div.ChapterTitle_chapter_title_container__Wq5T8").scrollIntoView({ behavior: "smooth" });

            let p_cfnp = document.querySelectorAll("#content-" + _cId + " > p._cfnp");
            for (let p of p_cfnp) {
                RemoveTag(p);

                ReplaceSymbol(p, dict);

                p.translate = true;
            }

            // ������� �����������
            let observer = new IntersectionObserver((entries, observer) => {
                // ��� ������ ������-�������� ��������
                entries.forEach(async entry => {
                    // ���� ������� �������� �����������
                    if (entry.isIntersecting) {
                        const pObserve = entry.target;

                        // ���������� ����������
                        observer.unobserve(pObserve);

                        let pTr = document.createElement("p");

                        pTr.innerText = await ArraySortOrder(pObserve);
                        ReplaceSymbol(pTr, dict);

                        pTr.translate = true;

                        pObserve.after(pTr);

                        pObserve.style.display = "none";
                    }
                })
            },
            {
                // �������� �������� �������� - ������� ���������
                root: null,
                // ��� ��������
                rootMargin: '0px',
                // ������� ����������� - �������� �����������
                threshold: 1.0
            });

            // � ������� ����� ������ �� ����� img �� ��������
            let p_cfcmpMix = document.querySelectorAll("#content-" + _cId + " > p._cfcmp");
            p_cfcmpMix.forEach(i => {
                observer.observe(i)
            });
        }
    }
    else {
        alert("Chapter: Error")
        return -1;
    }
}