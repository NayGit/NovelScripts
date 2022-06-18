'use strict';

import html2canvas from 'html2canvas';

import { createWorker } from 'tesseract.js';

async function WorkerNew() {
    let worker = createWorker({
        //logger: m => console.log(m), // Add logger here
    });

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    return worker;
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

export async function ReplaceTesseract2(_cId) {
    let contentCheck = document.querySelector("#content-" + _cId);

    // Сортировка
    let pOrder = contentCheck.querySelectorAll("p._cfcmp");
    if (pOrder.length > 0) {
        let pAll = document.querySelectorAll("#content-" + _cId + " > p");
        for (let p of pAll) {
            p.translate = false;
        }

        let _workerPre = await WorkerNew();
        let dict = await Dict(_cId, _workerPre, {}, 1);
        await _workerPre.terminate();

        let p_cfnp = document.querySelectorAll("#content-" + _cId + " > p._cfnp");
        for (let p of p_cfnp) {
            RemoveTag(p);

            ReplaceSymbol(p, dict);

            p.translate = true;
        }

        //let p_cfcmp = document.querySelectorAll("#content-" + _cId + " > p._cfcmp");
        //for (let p of p_cfcmp) {
        //    p.translate = false;
        //}

        contentCheck.translate = true;

        // создаем наблюдатель
        let observer = new IntersectionObserver((entries, observer) => {
            // для каждой записи-целевого элемента
            entries.forEach(async entry => {
                // если элемент является наблюдаемым
                if (entry.isIntersecting) {
                    const pObserve = entry.target;

                    // прекращаем наблюдение
                    observer.unobserve(pObserve);

                    let pTr = document.createElement("p");

                    pTr.innerText = await ArraySortOrder(pObserve);
                    ReplaceSymbol(pTr, dict);


                    pObserve.after(pTr);

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
    else {
        alert("Chapter: Error")
        return -1;
    }
}

async function Dict(_cId, _workerPre, _dict, _i) {
    console.warn(_i);

    if (Object.keys(_dict).length > 0 || _i > 20) {
        return _dict;
    }

    let pAll = document.querySelectorAll("#content-" + _cId + " > p");
    for (let p of pAll) {
        let y = p.querySelectorAll("y.sy-0");
        for (let sy of y) {
            sy.remove();
        }

        for (let s of p.textContent.split('')) {
            _dict[s] = s;
        }
    }

    delete _dict[' '];
    delete _dict['\''];
    delete _dict['"'];
    delete _dict[String.fromCharCode(8211)]; //'–'.charCodeAt(0)
    delete _dict[String.fromCharCode(8212)]; //'—'.charCodeAt(0)
    delete _dict[String.fromCharCode(8230)]; //'…'.charCodeAt(0)


    let tesseract = document.createElement('pre');
    tesseract.style.fontSize = 16 + _i + "px";
    tesseract.style.fontWeight = 'bold';
    //tesseract.style.letterSpacing = _i + "px";
    for (let s in _dict) {
        tesseract.textContent = tesseract.textContent + _dict[s];
    }
    document.querySelector("#content-" + _cId).prepend(tesseract);


    let c = await html2canvas(tesseract);

    let { data: { text } } = await _workerPre.recognize(c.toDataURL());


    let tmpText = "";
    for (let t of text.trim().replace(/\s/, '').replace(String.fromCharCode(32), '').split("\n")) {
        tmpText = tmpText + t;
    }
    //console.info(tmpText, tmpText.length);

    document.querySelector("#content-" + _cId + " pre").remove();

    //console.info(Object.keys(_dict).length, tmpText.length)

    if (Object.keys(_dict).length === tmpText.length) {
        let i = 0;
        for (let s in _dict) {
            _dict[s] = tmpText[i];
            console.info(s, _dict[s], tmpText[i].charCodeAt(0));
            i++;
        }
        return _dict;
    }

    return Dict(_cId, _workerPre, {}, ++_i);
}