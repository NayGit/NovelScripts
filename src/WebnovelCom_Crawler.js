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
// @version     0.1
// ==/UserScript==

'use strict';

import './css/webnovel.css'

import { downloadBookIfno, getCatalog } from './js/webNovel'
import { DivPanel, InputDivPanelHide, InputBookInfo, H1IdGlava, InputChapterNext, DivInputCheck, InputSecond } from './js/webnovel/ce/DivPanel'
import { FormMain, FormAddInputRadio, CheckFreeForm } from './js/webnovel/ce/FreeForm'

// p01
import ltnovelCom from './js/parsers/p01/ltnovelCom';
import novelmtCom from './js/parsers/p01/novelmtCom';
import readwnCom from './js/parsers/p01/readwnCom';
import wuxiahereCom from './js/parsers/p01/wuxiahereCom';

// p02
import lightnovelpubCom from './js/parsers/p02/lightnovelpubCom';
import lightnovelworldCom from './js/parsers/p02/lightnovelworldCom';

// p03
import lightnovelreaderOrg from './js/parsers/p03/lightnovelreaderOrg';
import novelsonlineNet from './js/parsers/p03/novelsonlineNet';
import readlightnovelMe from './js/parsers/p00/readlightnovelMe';

// p50
import lightnovelWorld from './js/parsers/p50/lightnovelWorld';
import octopiiCo from './js/parsers/p50/octopiiCo';
import readlightnovelsNet from './js/parsers/p50/readlightnovelsNet';

// p51
import madnovelCom from './js/parsers/p51/madnovelCom';
import novelbuddyCom from './js/parsers/p51/novelbuddyCom';
import novelforestCom from './js/parsers/p51/novelforestCom';
import novelfullMe from './js/parsers/p51/novelfullMe';

// 59
import boxnovelOrg from './js/parsers/p59/boxnovelOrg';
import novelfullplusCom from './js/parsers/p59/novelfullplusCom';
import readnovelfullCom from './js/parsers/p59/readnovelfullCom';
import topwebnovelCom from './js/parsers/p59/topwebnovelCom';

// p61
import oneStkissnovelLove from './js/parsers/p61/1stkissnovelLove'; // 1stkissnovelLove
import latestnovelNet from './js/parsers/p61/latestnovelNet';
import lightnovelMobi from './js/parsers/p61/lightnovelMobi';
import novelteamNet from './js/parsers/p61/novelteamNet';
import noveltrenchCom from './js/parsers/p61/noveltrenchCom';
import readnovelsOrg from './js/parsers/p61/readnovelsOrg';
import webnovelonlineNet from './js/parsers/p61/webnovelonlineNet';

// p60
import allnovelfullCom from './js/parsers/p60/allnovelfullCom';
import allnovelOrg from './js/parsers/p60/allnovelOrg';
import novelfullCom from './js/parsers/p60/novelfullCom';
import novelgreatNet from './js/parsers/p60/novelgreatNet';

// p90
import freewebnovelCom from './js/parsers/p90/freewebnovelCom';
import mnovelfreeCom from './js/parsers/p90/mnovelfreeCom';
import mMylovenovelCom from './js/parsers/p90/mMylovenovelCom';
import novelscafeCom from './js/parsers/p90/novelscafeCom';

// p95
import mWuxiaworldCo from './js/parsers/p95/mWuxiaworldCo'
import novelupdatesCc from './js/parsers/p95/novelupdatesCc'
import readlightnovelCc from './js/parsers/p95/readlightnovelCc'
import readlightnovelCo from './js/parsers/p95/readlightnovelCo'

// p99
import fastnovelNet from './js/parsers/p99/fastnovelNet';
import lightnovelplusCom from './js/parsers/p99/lightnovelplusCom';
import novelgateNet from './js/parsers/p99/novelgateNet';
import novelhallCom from './js/parsers/p99/novelhallCom';
import ranobesNet from './js/parsers/p99/ranobesNet';

// pAll
import lightnovelsMe from './js/parsers/pAll/lightnovelsMe';
import webnovelonlineCom from './js/parsers/pAll/webnovelonlineCom';

const SitesAll = [
    [
        new novelgreatNet(),
    ],
    [
        new readlightnovelMe(),
    ],
    [
        new ltnovelCom(),
        new novelmtCom(),
        new readwnCom(),
        new wuxiahereCom(),

        new lightnovelpubCom(),
        new lightnovelworldCom(),

        new lightnovelreaderOrg(),
        new novelsonlineNet(),

        new lightnovelWorld(),
        new octopiiCo(),
        new readlightnovelsNet(),

        new madnovelCom(),
        new novelbuddyCom(),
        new novelforestCom(),
        new novelfullMe(),

        new boxnovelOrg(),
        new novelfullplusCom(),
        new readnovelfullCom(),
        new topwebnovelCom(),

        new allnovelfullCom(),
        new allnovelOrg(),
        new novelfullCom(),

        new oneStkissnovelLove(),
        new latestnovelNet(),
        new lightnovelMobi(),
        new novelteamNet(),
        new noveltrenchCom(),
        new readnovelsOrg(),
        new webnovelonlineNet(),

        new freewebnovelCom(),
        new mnovelfreeCom(),
        new mMylovenovelCom(),
        new novelscafeCom(),

        new mWuxiaworldCo(),
        new novelupdatesCc(),
        new readlightnovelCc(),
        new readlightnovelCo(),

        new fastnovelNet(),
        new lightnovelplusCom(),
        new novelgateNet(),
        new novelhallCom(),
        new ranobesNet(),

        new lightnovelsMe(),
        new webnovelonlineCom(),
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