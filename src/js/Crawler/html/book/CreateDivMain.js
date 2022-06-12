import { DivMain, DivMainId, StatusChapter } from 'CrawlerVariable/Variable'

import { glavaWebNovel, GetChapterId, GetChapterName } from 'Domain/webNovel';

import { DivPanel, InputDivPanelHide, InputBookInfo, H1IdGlava } from './DivPanel';
import { CreateTableSites, CheckTotalAll } from './CreateTableSites';
import { CreateTableRead, setReadLocal } from './CreateTableRead';

import { ReplaceText } from 'Crawler/ReplaceText';
import { ReplaceTesseract } from 'Crawler/ReplaceTesseract';


export async function CreateDivMain(_sitesParser, _sitesGetText, _bookChapters, _bookId, _chLast, _chIndexLastLocked, _statusChapter, _cId = "") {
    // divMain
    let divMain;


    if (_statusChapter === StatusChapter.PRIVATE) {
        divMain = DivPanel(DivMain + "_" + _statusChapter, _statusChapter);

        _cId = glavaWebNovel(location);

        if (GetChapterId(_bookChapters, _cId).Index <= _chIndexLastLocked) {
            _cId = _bookChapters.Data.PrivilegeInfo[0].Id;
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
    divHomeNextChapter.appendChild(InputBookInfo(_bookId));


    // chapter
    let chapter = GetChapterId(_bookChapters, _cId);


    // H1IdGlava
    divHomeNextChapter.appendChild(H1IdGlava(chapter.Index, _chIndexLastLocked, _chLast.Index));


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
        let divTable = document.querySelector("#divTable");
        if (divTable !== null) {
            if (_statusChapter === StatusChapter.PRIVATE) {
                document.querySelector(DivMainId + "_" + _statusChapter).appendChild(divTable);
            }
            else {
                document.querySelector(DivMainId + "_" + _cId).appendChild(divTable);
            }

            let crawlerTable = document.querySelector("#crawlerId");
            crawlerTable.setAttribute("cId", _cId);
            crawlerTable.hidden = false;

            //ParsingAll();
            CheckTotalAll();
        }
    });
    divParsingReplaceGetText.appendChild(inputParsing);


    // inputReplaceText
    let inputReplaceText = Object.assign(document.createElement("input"), {
        className: "replace text",
        type: "button",
        value: "ReplaceText"
    });
    inputReplaceText.addEventListener('click', async function () {
        this.disabled = true;
        await ReplaceText(_bookId, _cId);
        this.hidden = true;

        this.parentNode.querySelector(".replace.tesseract").hidden = true;

        let nick = document.querySelector("dialog header > div > i > img");
        if (nick) {
            setReadLocal(_bookChapters, _bookId, chapter.Index, nick.alt);
        }
        else {
            setReadLocal(_bookChapters, _bookId, chapter.Index, "");
        }
    });
    divParsingReplaceGetText.appendChild(inputReplaceText);


    // inputReplaceTesseract
    let inputReplaceTesseract = Object.assign(document.createElement("input"), {
        className: "replace tesseract",
        type: "button",
        value: "ReplaceTesseract"
    });
    inputReplaceTesseract.addEventListener('click', async function () {
        this.disabled = true;
        await ReplaceTesseract(_cId);
        this.hidden = true;

        this.parentNode.querySelector(".replace.text").hidden = true;

        let nick = document.querySelector("dialog header > div > i > img");
        if (nick) {
            setReadLocal(_bookChapters, _bookId, chapter.Index, nick.alt);
        }
        else {
            setReadLocal(_bookChapters, _bookId, chapter.Index, "");
        }
    });
    divParsingReplaceGetText.appendChild(inputReplaceTesseract);


    // inputGetText
    let inputGetText = Object.assign(document.createElement("input"), {
        className: "gettext",
        type: "button",
        value: _sitesGetText[0][0].lastChapterIndex === -99999 ? "GetText" : "GetText: " + _sitesGetText[0][0].lastChapterIndex
    });
    inputGetText.addEventListener('click', async function () {
        this.disabled = true;
        let tmpN = await _sitesGetText[0][0].GetText(_cId, chapter.Name);

        if (tmpN === -1) {
            return;
        }

        if (_sitesGetText[0][0].lastChapterIndex === -99999 && _sitesGetText[0][0].lastChapterTitle !== "") {
            _sitesGetText[0][0].lastChapterIndex = GetChapterName(_bookChapters, _sitesGetText[0][0].lastChapterTitle).Index;
            for (let gt of document.querySelectorAll("input.gettext")) {
                gt.value = "GetText: " + _sitesGetText[0][0].lastChapterIndex;
            }
        }

        if (tmpN === -2) {
            this.disabled = false;
            return;
        }
    });
    divParsingReplaceGetText.appendChild(inputGetText);


    // add ParsingReplaceGetText
    divMain.appendChild(divParsingReplaceGetText);



    // divTable
    if (document.querySelector("#divTable") === null) {
        let divTable = Object.assign(document.createElement("div"), {
            id: "divTable",
        });


        divTable.appendChild(CreateTableRead(_bookChapters, _bookId));


        // tableCrawler
        let tableCrawler = CreateTableSites(_sitesParser, _bookChapters, _bookId);
        tableCrawler.setAttribute("cId", _cId);
        divTable.appendChild(tableCrawler);


        divMain.appendChild(divTable);
    }

    return divMain;
}