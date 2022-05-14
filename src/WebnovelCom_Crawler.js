﻿// ==UserScript==
// @name        WebnovelCom - Crawler
// @namespace   NovelScripts
// @icon        https://github.com/NayGit/NovelScripts/raw/master/icon.png
// @supportURL  https://github.com/NayGit/NovelScripts/issues
// @author      Nay
// @match       https://m.webnovel.com/book/*/*
// @grant       GM_xmlhttpRequest
// @version     0.4.0
// ==/UserScript==

'use strict';

import './css/webnovel.css'

import { downloadBookIfno, glavaWebNovel, GetChapterId, GetChapterLevel, GetChapterName } from './js/webNovel';
import { DivPanel, InputDivPanelHide, InputBookInfo, H1IdGlava, InputChapterNext } from './js/webnovel/ce/DivPanel';
import { CreateTableSites, CheckTotalAll, ParsingAll } from './js/webnovel/ce/FreeForm';

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
import octopiiCo from './js/parsers/apiSearchChapter/octopiiCo';
import webnovelonlineCom from './js/parsers/apiSearchChapter/webnovelonlineCom';

// htmlSearch
import lightnovelWorld from './js/parsers/htmlSearch/lightnovelWorld';
import novelhallCom from './js/parsers/htmlSearch/novelhallCom';
import pandanovelCom from './js/parsers/htmlSearch/pandanovelCom';
import readlightnovelsNet from './js/parsers/htmlSearch/readlightnovelsNet';

// htmlSearchChapter
//    madentertainment
import madnovelCom from './js/parsers/htmlSearchChapter/madentertainment/madnovelCom';
import novelbuddyCom from './js/parsers/htmlSearchChapter/madentertainment/novelbuddyCom';
import novelforestCom from './js/parsers/htmlSearchChapter/madentertainment/novelforestCom';
import novelfullMe from './js/parsers/htmlSearchChapter/madentertainment/novelfullMe';
//    truyenNovel/novel
import novelfullplusCom from './js/parsers/htmlSearchChapter/truyenNovel/novel/novelfullplusCom';
import novelpokiCom from './js/parsers/htmlSearchChapter/truyenNovel/novel/novelpokiCom';
import noveltop1Com from './js/parsers/htmlSearchChapter/truyenNovel/novel/noveltop1Com';
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
//new novelsonlineNet(),

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
        new novelfullplusCom(),
        new novelpokiCom(),
        new noveltop1Com(),
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

async function CreateDivMain(_statusChapter, _cId = "") {
    // divMain
    let divMain;
    if (_statusChapter === StatusChapter.PRIVATE) {
        divMain = DivPanel(DivMain + "_" + _statusChapter, _statusChapter);

        _cId = glavaWebNovel(location);

        if (GetChapterId(BookInfo, _cId).chapterLevel === 0) {
            let tmpChId = "";
            for (let volume of BookInfo.data.volumeItems) {
                for (let chapter of volume.chapterItems) {
                    if (chapter.chapterLevel > 0) {
                        tmpChId = chapter.chapterId;
                        break;
                    }
                }

                if (tmpChId !== "") {
                    break
                }
            }

            if (tmpChId !== "") {
                _cId = tmpChId;
            }
            else {
                return divMain;
            }

        }
    }
    else {
        divMain = DivPanel(DivMain + "_" + _cId, _statusChapter);
    }

    // divHomeNextChapter
    let divHomeNextChapter = Object.assign(document.createElement("div"), {
        className: "HomeNextChapter",
    });

    // InputBookInfo
    divHomeNextChapter.appendChild(InputBookInfo(BookId));


    // chapter
    let chapter = GetChapterId(BookInfo, _cId);


    // InputChapterNext
    divHomeNextChapter.appendChild(InputChapterNext(BookInfo, chapter.chapterIndex));


    // H1IdGlava
    divHomeNextChapter.appendChild(H1IdGlava(chapter.chapterIndex, ChLastLocked, BookInfo.data.lastChapterItem.chapterIndex));


    // add HomeNextChapter
    divMain.appendChild(divHomeNextChapter);


    //// Check "The End"
    //if (_cId === BookInfo.data.lastChapterItem.chapterId) {
    //    let tmpH1 = document.createElement("h1");
    //    tmpH1.textContent = "The End";
    //    divMain.appendChild(tmpH1);
    //    return divMain;
    //}


    // divHomeNextChapter
    let divParsingReplaceGetText = Object.assign(document.createElement("div"), {
        className: "ParsingReplaceGetText",
    });


    // inputParsing
    let inputParsing = Object.assign(document.createElement("input"), {
        type: "button",
        value: "Parsing"
    });
    inputParsing.addEventListener('click', async function () {
        let crawlerTable = document.querySelector("#crawlerId");
        if (crawlerTable !== null) {
            if (_statusChapter === StatusChapter.PRIVATE) {
                document.querySelector("#" + DivMain + "_" + _statusChapter).appendChild(crawlerTable);
            }
            else {
                document.querySelector("#" + DivMain + "_" + _cId).appendChild(crawlerTable);
            }
            crawlerTable.setAttribute("cId", _cId);
            crawlerTable.hidden = false;

            //ParsingAll();
        }

        CheckTotalAll();
    });
    divParsingReplaceGetText.appendChild(inputParsing);


    // inputReplace
    let inputReplace = Object.assign(document.createElement("input"), {
        className: "replace",
        type: "button",
        value: "Replace"
    });
    inputReplace.addEventListener('click', async function () {
        this.disabled = true;
        await ReplaceText(BookId, _cId);
        this.hidden = true;
    });
    divParsingReplaceGetText.appendChild(inputReplace);


    // inputGetText
    let inputGetText = Object.assign(document.createElement("input"), {
        className: "gettext",
        type: "button",
        value: GetTextValue
    });
    inputGetText.addEventListener('click', async function () {
        this.disabled = true;
        let tmpN = await GetText(BookId, _cId, BookTitle, chapter.chapterName);

        if (tmpN !== -1 && this.value === "GetText") {
            GetTextValue = "GetText: " + GetChapterName(BookInfo, tmpN).chapterIndex;
            for (let gt of document.querySelectorAll("input.gettext")) {
                gt.value = GetTextValue;
            }
        }

        //if (tmpN === -1) {
        //    this.hidden = true;
        //}
    });
    divParsingReplaceGetText.appendChild(inputGetText);


    // add ParsingReplaceGetText
    divMain.appendChild(divParsingReplaceGetText);


    // tableCrawler
    if (document.querySelector("#crawlerId") === null) {
        let tableCrawler = CreateTableSites(SitesAll, BookInfo);
        tableCrawler.setAttribute("cId", _cId);
        divMain.appendChild(tableCrawler);
    }

    return divMain;
}

var BookInfo;
var BookTitle;
var BookId;

const DivMain = "divMain";
const StatusChapter = { LOCKED: 'locked', UNLOCKED: 'unlocked', FREE: 'free', PRIVATE: 'private' };
var ChLastLocked = "";

var GetTextValue = "GetText";


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
            site.bId = BookId;
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
                c.translate = false;

                let divMain = await CreateDivMain(StatusChapter.LOCKED, chapterId[1]);

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
                let divMain = c.parentElement.querySelector("div." + StatusChapter.LOCKED);
                if (divMain !== null) {
                    divMain.classList.remove(StatusChapter.LOCKED);

                    if (c.querySelector("p._cfcmp")) {
                        divMain.classList.add(StatusChapter.UNLOCKED);
                    }
                    else {
                        divMain.classList.add(StatusChapter.FREE);
                        c.translate = true;
                    }
                }
            }
        }

        let contentsPrivate = document.querySelector("div.pr > div > div.styles_last_chapter_footer__SPOMm");
        if (contentsPrivate !== null && contentsPrivate.querySelector("#" + DivMain + "_" + StatusChapter.PRIVATE) === null) {
            let divMain = await CreateDivMain(StatusChapter.PRIVATE);
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