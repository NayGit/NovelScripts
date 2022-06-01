// ==UserScript==
// @name        WebnovelCom - Tag
// @namespace   NovelScripts
// @icon        https://github.com/NayGit/NovelScripts/raw/master/icon.png
// @supportURL  https://github.com/NayGit/NovelScripts/issues
// @author      Nay
// @include     https://*.webnovel.com/tags/*
// @grant       none
// @version     0.3
// ==/UserScript==

import './css/tag.css';

import { getCookie } from 'Domain/webNovel';
import { fetchStatusHTML, fetchStatusJSON, fetchCatch } from 'Domain/FetchResult';
import { ceTagId, ceNav, ceInputButton, ceInputNumber, ceInputCheckbox } from 'Tag/tag';

async function StartCreate() {
    await new Promise(r => setTimeout(r, 2500));

    
    if (location.host === "m.webnovel.com") {
        // m
        document.querySelector("#qd-report-root > div:nth-child(3)").style.visibility = "hidden";
    }
    else {
        // www
        document.querySelector("body > div.page > div.lst-hd.g_sub_hd").style.visibility = "hidden";
        document.querySelector("body > div.page > div.j_bookList.lis-mn").style.visibility = "hidden";
    }


    var h2Tag = Object.assign(document.createElement("h2"), {
        className: "globalTag",
        textContent: _GlobalTag
    });



    var inN = ceInputButton("Novel");
    inN.addEventListener('click', async function () {
        _GlobalType = 1;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });

    var inF = ceInputButton("Fan-fic");
    inF.addEventListener('click', async function () {
        _GlobalType = 4;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });

    var inSortP = ceInputButton("Popular");
    inSortP.addEventListener('click', async function () {
        _GlobalOrder = 1;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });

    var inSortU = ceInputButton("Updated");
    inSortU.addEventListener('click', async function () {
        _GlobalOrder = 2;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });

    var inSortC = ceInputButton("Collection");
    inSortC.addEventListener('click', async function () {
        _GlobalOrder = 3;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });



    var inNumberGo = ceInputButton("Go");
    inNumberGo.addEventListener('click', async function () {
        _GlobalNumber = document.getElementById("inNumber").value;
        await UpdateBook();
        document.querySelector("body").scrollIntoView(); // {behavior: "smooth"}
    });



    var inNumPrev = ceInputButton("Prev");
    inNumPrev.addEventListener('click', async function () {
        if (_GlobalNumber > 1) {
            _GlobalNumber--;
            document.getElementById("inNumber").value = _GlobalNumber;
            await UpdateBook();
            document.querySelector("body").scrollIntoView(); // {behavior: "smooth"}
        }
    });

    var inNumNext = ceInputButton("Next");
    inNumNext.addEventListener('click', async function () {
        _GlobalNumber++;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
        document.querySelector("body").scrollIntoView(); // {behavior: "smooth"}
    });



    var divMain = ceTagId("div", "divMain", false);
    divMain.append(
        ceNav([
            h2Tag,
            ceInputCheckbox("InputCheck"),
            ceInputNumber("InputCheckMin", "100")
        ]),
        ceNav([
            inN,
            inF
        ]),
        ceNav([
            inSortP,
            inSortU,
            inSortC
        ]),
        ceTagId("ul", "divBook", true),
        ceNav([
            ceInputNumber("inNumber", 1),
            inNumberGo
        ]),
        ceNav([
            inNumPrev,
            inNumNext
        ])
    );

    if (location.host === "m.webnovel.com") {
        // m
        let referenceNode = document.querySelector("#qd-report-root > header")
        referenceNode.parentNode.insertBefore(divMain, referenceNode.nextSibling);
    }
    else {
        // www
        let referenceNode = document.querySelector("body > div.page > div.g_header_ph")
        referenceNode.parentNode.insertBefore(divMain, referenceNode.nextSibling);
    }
}

async function downloadList(_csrfToken, type, order, pageIndex, tagName) {
    let url = location.origin + '/go/pcm/seo/getTagBookList?_csrfToken=' + _csrfToken + '&type=' + type + '&order=' + order + '&pageIndex=' + pageIndex + '&tagName=' + tagName; //r18

    let bodyJson = "";
    await fetch(url)
        .then(res => fetchStatusJSON(res))
        .then(data => {
            bodyJson = data.data.items;
        })
        .catch(err => fetchCatch(err, url));

    return bodyJson;
}

function ListLeft(book) {
    let linkB = Object.assign(document.createElement("a"), {
        className: "chapterLeft",
        href: "/book/" + book.bookId,
        target: "_blank"
    });

    let imgB = Object.assign(document.createElement("img"), {
        className: "chapterLeftImg",
        src: "//img.webnovel.com/bookcover/" + book.bookId + "/180/180.jpg?imageMogr2/format/webp"
    });

    linkB.append(imgB);

    return linkB;
}

function ListRight(book) {
    let divR = Object.assign(document.createElement("div"), {
        className: "chapterRight"
    });

    var divTag = Object.assign(document.createElement("div"), {
        className: "chapterRightTags"
    });

    console.log(book.tagInfo);

    for (let t of book.tagInfo) {
        let linkT = Object.assign(document.createElement("a"), {
            className: "chapterRightTag",
            href: "/tags/" + t.tagName + "-novel",
            textContent: "#" + t.tagName
        });

        divTag.append(linkT);
    }

    divR.append(divTag);


    let h3Title = Object.assign(document.createElement("h3"), {
        className: "chapterRightTitle",
        textContent: book.bookName
    });

    divR.append(h3Title);


    let pDescr = Object.assign(document.createElement("p"), {
        className: "chapterRightDesc",
        textContent: book.description
    });

    divR.append(pDescr);


    let divOther = document.createElement("div");

    let divStar = Object.assign(document.createElement("div"), {
        className: "chapterRightOther",
        textContent: "? " + book.totalScore
    });

    let divChapter = Object.assign(document.createElement("div"), {
        className: "chapterRightOther",
        textContent: book.chapterNum
    });

    divOther.append(divStar);
    divOther.append(divChapter);
    divR.append(divOther);

    return divR;
}

async function UpdateBook() {
    var divClear = document.getElementById('divBook');
    while (divClear.firstChild) {
        divClear.removeChild(divClear.firstChild);
    }

    var bList = await downloadList(_GlobalToken, _GlobalType, _GlobalOrder, _GlobalNumber, _GlobalTag);
    console.log(bList);

    let inputCheck = document.querySelector("#InputCheck").checked;
    let inputCheckMin = document.querySelector("#InputCheckMin").value * 1;

    for (let book of bList) {
        if (!inputCheck || (inputCheck && book.chapterNum * 1 >= inputCheckMin)) {
            var li = Object.assign(document.createElement("li"), {
                className: "chapter"
            });
            li.append(ListLeft(book));
            li.append(ListRight(book));

            document.getElementById("divBook").append(li);
        }
    }
}

var _GlobalToken;
var _GlobalType;
var _GlobalOrder;
var _GlobalNumber;
var _GlobalTag;

(async function () {
    'use strict';

    _GlobalToken = getCookie("_csrfToken");
    console.log(_GlobalToken);

    _GlobalTag = location.pathname.replace("/tags/", "").split('-')[0];
    console.log(_GlobalTag);

    _GlobalType = 1;
    _GlobalOrder = 2;
    _GlobalNumber = 1;

    await StartCreate();

    await UpdateBook();
})();

