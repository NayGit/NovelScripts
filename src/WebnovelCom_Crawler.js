﻿// ==UserScript==
// @name        WebnovelCom - Crawler
// @namespace   NovelScripts
// @icon        https://github.com/NayGit/NovelScripts/raw/master/icon.png
// @supportURL  https://github.com/NayGit/NovelScripts/issues
// @author      Nay
// @match       https://*.webnovel.com/book/*/*
// @grant       GM_xmlhttpRequest
// @grant       GM.xmlHttpRequest
// @require     https://raw.githubusercontent.com/maple3142/gmxhr-fetch/master/gmxhr-fetch.min.js
// @version     0.3.1
// ==/UserScript==

'use strict';

import './css/webnovel.css'

import { downloadBookIfno, GetChapterId, GetChapterLevel } from './js/webNovel';
import { DivPanel, InputDivPanelHide, InputBookInfo, H1IdGlava, InputChapterNext } from './js/webnovel/ce/DivPanel';
import { CreateTableSites } from './js/webnovel/ce/FreeForm';

import { ReplaceText } from './js/ReplaceText';
import { GetText } from './js/GetText';

// 2fetch/apiSearch
//    artBook
import mWuxiaworldCo from './js/parsers/2fetch/apiSearch/artBook/mWuxiaworldCo'
import novelupdatesCc from './js/parsers/2fetch/apiSearch/artBook/novelupdatesCc'
import readlightnovelCc from './js/parsers/2fetch/apiSearch/artBook/readlightnovelCc'
import readlightnovelCo from './js/parsers/2fetch/apiSearch/artBook/readlightnovelCo'

// 2fetch/apiSearchChapter
import lightnovelreaderOrg from './js/parsers/2fetch/apiSearchChapter/lightnovelreaderOrg';
//    bookWings
import ltnovelCom from './js/parsers/2fetch/apiSearchChapter/bookWings/ltnovelCom';
import novelmtCom from './js/parsers/2fetch/apiSearchChapter/bookWings/novelmtCom';
import readwnCom from './js/parsers/2fetch/apiSearchChapter/bookWings/readwnCom';
import wuxiahereCom from './js/parsers/2fetch/apiSearchChapter/bookWings/wuxiahereCom';
import wuxiapubCom from './js/parsers/2fetch/apiSearchChapter/bookWings/wuxiapubCom';

// 2fetch/htmlSearch
import mMylovenovelCom from './js/parsers/2fetch/htmlSearch/mMylovenovelCom';

// 2fetch/htmlSearchChapter
import freewebnovelCom from './js/parsers/2fetch/htmlSearchChapter/freewebnovelCom';
import novelfullvipCom from './js/parsers/2fetch/htmlSearchChapter/novelfullvipCom';
import novelscafeCom from './js/parsers/2fetch/htmlSearchChapter/novelscafeCom';
//    POST
import novelsonlineNet from './js/parsers/2fetch/htmlSearchChapter/POST/novelsonlineNet';

// 2fetch/search
import lightnovelplusCom from './js/parsers/2fetch/search/lightnovelplusCom';

// apiSearch
import lightnovelsMe from './js/parsers/apiSearch/lightnovelsMe';

// apiSearchChapter
import webnovelonlineCom from './js/parsers/apiSearchChapter/webnovelonlineCom';

// htmlSearch
import lightnovelWorld from './js/parsers/htmlSearch/lightnovelWorld';
import novelhallCom from './js/parsers/htmlSearch/novelhallCom';
import pandanovelCom from './js/parsers/htmlSearch/pandanovelCom';
import readlightnovelsNet from './js/parsers/htmlSearch/readlightnovelsNet';

// htmlSearchChapter
import octopiiCo from './js/parsers/htmlSearchChapter/octopiiCo';
//    madentertainment
import madnovelCom from './js/parsers/htmlSearchChapter/madentertainment/madnovelCom';
import novelbuddyCom from './js/parsers/htmlSearchChapter/madentertainment/novelbuddyCom';
import novelforestCom from './js/parsers/htmlSearchChapter/madentertainment/novelforestCom';
import novelfullMe from './js/parsers/htmlSearchChapter/madentertainment/novelfullMe';
//    truyenNovel/novel
import boxnovelOrg from './js/parsers/htmlSearchChapter/truyenNovel/novel/boxnovelOrg';
import novelfullplusCom from './js/parsers/htmlSearchChapter/truyenNovel/novel/novelfullplusCom';
import readnovelfullCom from './js/parsers/htmlSearchChapter/truyenNovel/novel/readnovelfullCom';
import topwebnovelCom from './js/parsers/htmlSearchChapter/truyenNovel/novel/topwebnovelCom';
//    truyenNovel/truyen
import allnovelfullCom from './js/parsers/htmlSearchChapter/truyenNovel/truyen/allnovelfullCom';
import allnovelOrg from './js/parsers/htmlSearchChapter/truyenNovel/truyen/allnovelOrg';
import novelfullCom from './js/parsers/htmlSearchChapter/truyenNovel/truyen/novelfullCom';
import novelgreatNet from './js/parsers/htmlSearchChapter/truyenNovel/truyen/novelgreatNet';
//    wpManga
import oneStkissnovelLove from './js/parsers/htmlSearchChapter/wpManga/1stkissnovelLove'; // 1stkissnovelLove
import latestnovelNet from './js/parsers/htmlSearchChapter/wpManga/latestnovelNet';
import lightnovelMobi from './js/parsers/htmlSearchChapter/wpManga/lightnovelMobi';
import novelteamNet from './js/parsers/htmlSearchChapter/wpManga/novelteamNet';
import noveltrenchCom from './js/parsers/htmlSearchChapter/wpManga/noveltrenchCom';
import readnovelsOrg from './js/parsers/htmlSearchChapter/wpManga/readnovelsOrg';
import webnovelonlineNet from './js/parsers/htmlSearchChapter/wpManga/webnovelonlineNet';

// ReplaceTitle
import readlightnovelMe from './js/parsers/ReplaceTitle/readlightnovelMe';
//    lightnovelEWcom
import lightnovelpubCom from './js/parsers/ReplaceTitle/lightnovelEWcom/lightnovelpubCom';
import lightnovelworldCom from './js/parsers/ReplaceTitle/lightnovelEWcom/lightnovelworldCom';

// search
import fastnovelNet from './js/parsers/search/fastnovelNet';
import novelgateNet from './js/parsers/search/novelgateNet';
import ranobesNet from './js/parsers/search/ranobesNet';

const SitesAll = [
    [
        new lightnovelplusCom(),
    ],
    [
    ],
    [
        // 2fetch/apiSearch
        //    artBook
        new mWuxiaworldCo(),
        new novelupdatesCc(),
        new readlightnovelCc(),
        new readlightnovelCo(),

        // 2fetch/apiSearchChapter
        new lightnovelreaderOrg(),
        //    bookWings
        new ltnovelCom(),
        new novelmtCom(),
        new readwnCom(),
        new wuxiahereCom(),
        new wuxiapubCom(),

        // 2fetch/htmlSearch
        new mMylovenovelCom(),

        // 2fetch/htmlSearchChapter
        new freewebnovelCom(),
        new novelfullvipCom(),
        new novelscafeCom(),
        //    POST
        new novelsonlineNet(),

        // 2fetch/search
    //new lightnovelplusCom(),

        // apiSearch
        new lightnovelsMe(),

        // apiSearchChapter
        new webnovelonlineCom(),

        // htmlSearch
        new lightnovelWorld(),
        new novelhallCom(),
        new pandanovelCom(),
        new readlightnovelsNet(),

        // htmlSearchChapter
new octopiiCo(),
        //    madentertainment
        new madnovelCom(),
        new novelbuddyCom(),
        new novelforestCom(),
        new novelfullMe(),
        //    truyenNovel/novel
        new boxnovelOrg(),
new novelfullplusCom(),
        new readnovelfullCom(),
        new topwebnovelCom(),
        //    truyenNovel/truyen
        new allnovelfullCom(),
        new allnovelOrg(),
        new novelfullCom(),
        new novelgreatNet(),
        //    wpManga
        new oneStkissnovelLove(),
new latestnovelNet(),
        new lightnovelMobi(),
        new novelteamNet(),
        new noveltrenchCom(),
        new readnovelsOrg(),
        new webnovelonlineNet(),

        // ReplaceTitle
        new readlightnovelMe(),
        //    lightnovelEWcom
        new lightnovelpubCom(),
        new lightnovelworldCom(),

        // search
        new fastnovelNet(),
        new novelgateNet(),
        new ranobesNet(),
    ]
];

async function CreateDivMain(_cId) {
    let chapter = GetChapterId(BookInfo, _cId);

    let divMain = DivPanel(DivMain + "_" + _cId, DivMain);

    divMain.append(InputBookInfo(BookId));

    if (_cId === BookInfo.data.lastChapterItem.chapterId) {
        let tmpH1 = document.createElement("h1");
        tmpH1.textContent = "The End";
        divMain.append(tmpH1);
        return divMain;
    }

    divMain.append(InputChapterNext(BookInfo, chapter.chapterIndex));
    
    divMain.append(H1IdGlava(chapter.chapterIndex, ChLastLocked, BookInfo.data.lastChapterItem.chapterIndex));

    let locked = Object.assign(document.createElement("input"), {
        className: "lockedButton",
        type: "button",
        value: "Parsing"
    });
    locked.addEventListener('click', async function () {
        let crawlerTable = document.querySelector("#crawlerId");
        if (crawlerTable !== null) {
            document.querySelector("#" + DivMain + "_" + _cId).appendChild(crawlerTable);
            crawlerTable.setAttribute("cId", _cId);
            crawlerTable.hidden = false;
        }
    });
    divMain.appendChild(locked);

    let unlocked = Object.assign(document.createElement("input"), {
        className: "unlockedButton",
        type: "button",
        value: "Replace"
    });
    unlocked.addEventListener('click', async function () {
        this.disabled = true;
        await ReplaceText(BookId, _cId);
        this.hidden = true;
    });
    divMain.appendChild(unlocked);

    let getText = Object.assign(document.createElement("input"), {
        className: "getTextButton",
        type: "button",
        value: "GetText"
    });
    getText.addEventListener('click', async function () {
        this.disabled = true;
        await GetText(BookId, _cId, BookTitle, chapter.chapterName);
        this.hidden = true;
    });
    divMain.appendChild(getText);

    if (document.querySelector("#crawlerId") === null) {
        let createTableSites = CreateTableSites(SitesAll, BookInfo);
        createTableSites.setAttribute("cId", _cId);
        divMain.appendChild(createTableSites);
    }

    return divMain;
}

var BookInfo;
var BookTitle;
var BookId;

const DivMain = "divMain";
const StatusChapter = { LOCKED: 'locked', UNLOCKED: 'unlocked', PRIVATE: 'private' };
var ChLastLocked = "";


(async function () {
    'use strict';
    BookInfo = await downloadBookIfno(location);
    console.info(BookInfo);

    BookTitle = BookInfo.data.bookInfo.bookName;
    console.info(BookTitle);

    BookId = BookInfo.data.bookInfo.bookId;
    console.info(BookId);

    for (let sites of SitesAll) {
        for (let site of sites) {
            site.bTitle = BookTitle;
            site.SetSiteSearch();
        }
    }

    ChLastLocked = GetChapterLevel(BookInfo, 0).chapterIndex;

    while (true) {
        let contents = document.querySelectorAll("div.pr > div > div.styles_content__3tuD4");
        for (let c of contents) {
            let chapterId = c.id.match(/^content-(\d+)$/);
            if (chapterId && c.parentElement.querySelector("#" + DivMain + "_" + chapterId[1]) === null) {
                let divMain = await CreateDivMain(chapterId[1]);
                divMain.classList.add(StatusChapter.LOCKED);

                let contentTitle = c.parentElement.querySelector("div.ChapterTitle_chapter_title_container__Wq5T8");
                contentTitle.after(divMain);
            }
            else {
                console.warn("Copy");
            }
        }

        let contentsUnlocked = document.querySelectorAll("div.pr > div > div.styles_content__3tuD4:not(.styles_locked_content__16dUX)");
        if (contentsUnlocked.length > 0) {
            for (let c of contentsUnlocked) {
                let divMain = c.parentElement.querySelector("div." + DivMain + "." + StatusChapter.LOCKED);
                if (divMain !== null) {
                    divMain.classList.remove(StatusChapter.LOCKED);
                    divMain.classList.add(StatusChapter.UNLOCKED);
                }
            }
        }

        let contentsPrivate = document.querySelector("div.pr > div > div.styles_last_chapter_footer__SPOMm");
        if (contentsPrivate !== null && contentsPrivate.querySelector("div." + DivMain + "." + StatusChapter.PRIVATE) === null) {
            let divMain = await CreateDivMain(chapterId[1]);
            //let divMain = await CreateDivMain(BookInfo, "61829347492807077");
            divMain.classList.add(StatusChapter.PRIVATE);

            contentsPrivate.prepend(divMain);
        }

        await new Promise(r => setTimeout(r, 10000));
    }

    return;

    const Loc = location;
    
    if (Loc.href.indexOf('webnovel.com/') != -1) {
        console.log('webnovel.com');

        if (Loc.href.indexOf('webnovel.com/book/') != -1 && Loc.pathname.split('/').length == 4) {
            var d = DivPanel();

            if (Loc.href.endsWith('/catalog')) {
                console.log('*/book/*/catalog');
            }

            else {
               
            }
        }
    }
})();