// ==UserScript==
// @name        WebnovelCom - Crawler
// @namespace   NovelScripts
// @icon        https://github.com/NayGit/NovelScripts/raw/master/icon.png
// @supportURL  https://github.com/NayGit/NovelScripts/issues
// @author      Nay
// @match       https://m.webnovel.com/
// @match       https://m.webnovel.com/book/*/*
// @match       https://passport.webnovel.com/emaillogin.html*
// @grant       GM_xmlhttpRequest
// @version     0.6.3
// ==/UserScript==

'use strict';

import './css/webnovel.css'

import { DivMainId, StatusChapter, LS_Login_R } from './js/variable/crawler'

import { downloadBookIfno, downloadBookChapters, GetChapterLast, GetIndexLastChapterLock } from './js/webNovel';
import { CreateLogin } from './js/webnovel/ce/Login'
import { CreateDivMain } from './js/webnovel/ce/CreateDivMain';


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
import readnoveldailyCom from './js/parsers/2fetch/htmlSearch/readnoveldailyCom';

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

const SitesParser = [
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
        new readnoveldailyCom(),

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


// GetText
import g_lightnovelplusCom from './js/getText/g_lightnovelplusCom';

const SitesGetText = [
    [
        new g_lightnovelplusCom(),
    ]
];


(async function () {
    if (location.origin === 'https://m.webnovel.com' && location.pathname === "/") {
        let lpR = localStorage.getItem(LS_Login_R);
        if (lpR !== null) {
            localStorage.removeItem(LS_Login_R);
            document.location.replace("https://passport.webnovel.com/emaillogin.html?returnurl=" + lpR);
        }

        return;
    }
    else if (location.href.indexOf('passport.webnovel.com/emaillogin.html') != -1) {
        await new Promise(r => setTimeout(r, 2500));

        CreateLogin();

        return;
    }

    let BookInfo = await downloadBookIfno(location);
    console.info(BookInfo);

    let BookTitle = BookInfo.data.bookInfo.bookName;
    console.info(BookTitle);

    let BookId = BookInfo.data.bookInfo.bookId;
    console.info(BookId);

    for (let sites of SitesParser) {
        for (let site of sites) {
            site.bId = BookId;
            site.bTitle = BookTitle;
            site.SetSiteSearch();
        }
    }

    for (let sites of SitesGetText) {
        for (let site of sites) {
            site.bId = BookId;
            site.bTitle = BookTitle;
        }
    }

    let BookChapters = await downloadBookChapters(location);

    let ChLast = GetChapterLast(BookChapters);
    let ChIndexLastLocked = GetIndexLastChapterLock(BookChapters);

    while (true) {
        let contents = document.querySelectorAll("div.pr > div > div.styles_content__3tuD4");
        for (let c of contents) {
            let chapterId = c.id.match(/^content-(\d+)$/);
            if (chapterId && c.parentElement.querySelector(DivMainId + "_" + chapterId[1]) === null) {
                c.translate = false;

                let divMain = await CreateDivMain(SitesParser, SitesGetText, BookChapters, BookId, ChLast, ChIndexLastLocked, StatusChapter.LOCKED, chapterId[1]);

                let contentTitle = c.parentElement.querySelector("div.ChapterTitle_chapter_title_container__Wq5T8");
                contentTitle.after(divMain);
            }
            //else {
            //    console.warn("Copy");
            //}
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
        if (contentsPrivate !== null && contentsPrivate.querySelector(DivMainId + "_" + StatusChapter.PRIVATE) === null) {
            let divMain = await CreateDivMain(SitesParser, SitesGetText, BookChapters, BookId, ChLast, ChIndexLastLocked, StatusChapter.PRIVATE);
            contentsPrivate.prepend(divMain);
        }

        await new Promise(r => setTimeout(r, 10000));
    }

    return;

    const Loc = location;
    
    if (Loc.href.indexOf('webnovel.com/') != -1) {
        console.log('webnovel.com');

        if (Loc.href.indexOf('webnovel.com/book/') != -1 && Loc.pathname.split('/').length == 4) {
            //var d = DivPanel();

            if (Loc.href.endsWith('/catalog')) {
                console.log('*/book/*/catalog');
            }

            else {
               
            }
        }
    }
})();