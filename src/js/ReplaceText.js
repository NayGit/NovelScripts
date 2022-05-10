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

function ArraySortOrder(_parrent) {
    let str = "";
    [].slice.call(_parrent.children).sort(function (a, b) {
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

    if (str === "") {
        return _parrent.innerText;
    }

    //return innerText;
    return str;
}

function ReplaceSymbol(_element, _dict) {
    let str = "";
    _element.innerText.split('').forEach(element => {
        if (_dict[element] !== undefined) {
            str = str + _dict[element];
        }
        else {
            str = str + element;
        }
    });

    _element.innerText = str;
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
            pOrder[i].innerText = ArraySortOrder(pOrder[i]);
        }

        let p2 = await GetChapter("https://m-webnovel-com.translate.goog/book/" + _bId + "/" + _cId + "?_x_tr_sl=en&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp", _cId);
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

            let p_cfnp = document.querySelectorAll("#content-" + _cId + " > p._cfnp");
            for (let i = 0; i < p_cfnp.length; i++) {
                ReplaceSymbol(p_cfnp[i], dict);
            }
            
            let p_cfcmp = document.querySelectorAll("#content-" + _cId + " > p._cfcmp");
            for (let i = 0; i < p_cfcmp.length; i++) {
                p_cfcmp[i].translate = false;
            }

            contentCheck.translate = true;

            // создаем наблюдатель
            let observer = new IntersectionObserver((entries, observer) => {
                // для каждой записи-целевого элемента
                entries.forEach(entry => {
                    // если элемент является наблюдаемым
                    if (entry.isIntersecting) {
                        const pObserve = entry.target;

                        // прекращаем наблюдение
                        observer.unobserve(pObserve)


                        let pClone = pObserve.cloneNode(true);
                        //pClone.className = '';
                        pClone.removeAttribute("class");

                        pClone.innerText = ArraySortOrder(pClone);
                        ReplaceSymbol(pClone, dict);

                        pClone.translate = true;

                        pObserve.after(pClone);


                        pObserve.style.display = "none";
                    }
                })
            },
            {
                // родитель целевого элемента - область просмотра
                root: null,
                // без отступов
                rootMargin: '0px',
                // процент пересечения - половина изображения
                threshold: 1.0
            });

            // с помощью цикла следим за всеми img на странице
            let p_cfcmpMix = document.querySelectorAll("#content-" + _cId + " > p._cfcmp");
            p_cfcmpMix.forEach(i => {
                observer.observe(i)
            });
        }
    }
    else {
        alert("Chapter: LOCKED")
        return -1;
    }
}