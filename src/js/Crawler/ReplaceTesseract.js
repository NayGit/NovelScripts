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

async function ReplaceSymbolGO(_worker, _element) {
    while (_element.tagName === undefined) {
        _element = _element.parentElement;
    }

    let c = await html2canvas(_element);

    let { data: { text } } = await _worker.recognize(c.toDataURL());

    _element.textContent = text;
}

async function ReplaceSymbol(_worker, _element) {
    if (_element.hasChildNodes()) {
        let children = _element.childNodes;

        for (let ch of children) {
            if (ch.hasChildNodes()) {
                await ReplaceSymbol(_worker, ch);
            }
            else {
                await ReplaceSymbolGO(_worker, ch);
            }
        }
    }
    else {
        await ReplaceSymbolGO(_worker, _element);
    }
}

export async function ReplaceTesseract(_cId) {
    let contentCheck = document.querySelector("#content-" + _cId);

    // Сортировка
    let pOrder = contentCheck.querySelectorAll("p._cfcmp");
    if (pOrder.length > 0) {
        WorkerCfnp(_cId);
        WorkerCfcmp(_cId);
    }
    else {
        alert("Chapter: Error")
        return -1;
    }
}

async function WorkerCfnp(_cId) {
    var workerCnfp = await WorkerNew();
    let p_cfnp = document.querySelectorAll("#content-" + _cId + " > p._cfnp");

    for (let p of p_cfnp) {
        RemoveTag(p);

        await ReplaceSymbol(workerCnfp, p);
        p.translate = true;
    }
}

async function WorkerCfcmp(_cId) {
    var workerCfcmp = await WorkerNew();

    let stackP = [];

    // создаем наблюдатель
    let observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(async entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
                let pObserve = entry.target;

                stackP.push(pObserve);

                // прекращаем наблюдение
                observer.unobserve(pObserve);
            }
        })
    },
        {
            // родитель целевого элемента - область просмотра
            root: null,
            // без отступов
            rootMargin: '0px',
            // процент пересечения - половина изображения
            threshold: 0.8
        });

    // с помощью цикла следим за всеми img на странице
    let p_cfcmpMix = document.querySelectorAll("#content-" + _cId + " > p._cfcmp");
    p_cfcmpMix.forEach(i => {
        observer.observe(i)
    });

    while (true) {
        if (stackP.length > 0) {
            let pObserve = stackP.shift();

            let pTr = document.createElement("p");
            pTr.className = pObserve.className;
            pTr.classList.remove("_cfcmp");
            pTr.classList.add("_rs");

            pTr.translate = false;

            pTr.innerText = await ArraySortOrder(pObserve);

            pObserve.after(pTr);

            pObserve.style.display = "none";

            let pTrNew = document.querySelector("p." + pTr.className.replaceAll(' ', '.'));
            await ReplaceSymbol(workerCfcmp, pTrNew);

            pTrNew.translate = true;
        }
        else {
            await new Promise(r => setTimeout(r, 1000));
        }
    }
}