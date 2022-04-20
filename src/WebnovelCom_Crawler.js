// ==UserScript==
// @name        WebnovelCom - Crawler
// @namespace   NovelScripts
// @icon        https://github.com/NayGit/NovelScripts/raw/master/icon.png
// @supportURL  https://github.com/NayGit/NovelScripts/issues
// @author      Nay
// @match       https://*.webnovel.com/book/*/*
// @grant       GM_xmlhttpRequest
// @grant       GM.xmlHttpRequest
// @require     https://raw.githubusercontent.com/maple3142/gmxhr-fetch/master/gmxhr-fetch.min.js
// @version     0.2.5
// ==/UserScript==

'use strict';

import './css/webnovel.css'

import { downloadBookIfno, getCatalog } from './js/webNovel'
import { DivPanel, InputDivPanelHide, InputBookInfo, H1IdGlava, InputChapterNext, DivInputCheck, InputSecond } from './js/webnovel/ce/DivPanel'
import { FormMain, FormAddInputRadio, CheckFreeForm } from './js/webnovel/ce/FreeForm'

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

(async function () {
    'use strict';

    const Loc = location;

    const BookInfo = await downloadBookIfno(Loc);
    console.log(BookInfo);

    const BookTitle = BookInfo.data.bookInfo.bookName;
    console.log(BookTitle);

    const BookChapters = getCatalog(BookInfo, Loc);
    console.log(BookChapters);

    if (Loc.href.indexOf('webnovel.com/') != -1) {
        console.log('webnovel.com');

        if (Loc.href.indexOf('webnovel.com/book/') != -1 && Loc.pathname.split('/').length == 4) {
            var d = DivPanel();

            if (Loc.href.endsWith('/catalog')) {
                console.log('*/book/*/catalog');
            }

            else {
                console.log('*/book/*/*?from=detail');

                d.append(InputDivPanelHide());
                d.append(InputBookInfo(Loc));

                if (BookChapters.length === 0) {
                    document.getElementsByTagName("body")[0].append(d);
                    return;
                }

                d.append(InputChapterNext(Loc, BookChapters));

                let isPriv = false;
                let chNum = 0;
                if (BookChapters[0][5] == 0) {
                    isPriv = false;

                    for (let cN in BookChapters) {
                        if (BookChapters[cN][5] > 0) {
                            chNum = cN * 1 - 1;
                            break;
                        }
                    }
                    if (chNum == 0) {
                        chNum = BookChapters.length - 1;
                    }
                }
                else {
                    isPriv = true;
                    chNum = BookChapters.length - 1;
                }

                // Fix Del
                isPriv = false;

                d.append(H1IdGlava(BookChapters[0][0], BookChapters[chNum][0]));
                d.append(FormMain(SitesAll, chNum, BookTitle, BookChapters[0][0], BookChapters[0][2]));
                d.append(DivInputCheck());
                d.append(InputSecond(1));
                document.getElementsByTagName("body")[0].append(d);

                FormAddInputRadio(SitesAll, 0, isPriv);
                await CheckFreeForm(SitesAll, 0, BookTitle, BookChapters[0][0], BookChapters[0][2]);

                document.querySelector("#InputSecond").addEventListener('click', async function () {
                    let parsing = this.value.match(/\D*(\d+)/)[1] * 1;

                    FormAddInputRadio(SitesAll, parsing, isPriv);
                    await CheckFreeForm(SitesAll, parsing, BookTitle, BookChapters[0][0], BookChapters[0][2]);

                    parsing++;

                    this.value = this.value.replace(/\d+/gi, parsing);

                    if (parsing >= SitesAll.length) {
                        this.hidden = true;
                    }
                });
            }
        }
    }

    else if (Loc.href.indexOf('translate.goog/') != -1) {
        document.getElementById("gt-nvframe").hidden = true;

        var s = Object.assign(document.createElement("input"), {
            type: "button",
            id: "showHide",
            value: 'ShowHide'
        });
        s.addEventListener('click', function () {
            document.getElementById("gt-nvframe").hidden = document.getElementById("gt-nvframe").hidden ? false : true;
        });

        var referenceNode = document.getElementById("gt-nvframe");
        referenceNode.parentNode.insertBefore(s, referenceNode.nextSibling); //jQuery insertAfter
    }
})();