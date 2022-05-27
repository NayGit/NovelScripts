import { GetChapterIndex } from '../../webNovel'
import { CheckTotalAll } from './CreateTableSites'

export function CreateTableRead(_bookChapter, _bId) {
    let tbl = document.createElement('table');
    tbl.id = "crawlerRead";
    tbl.style.fontSize = "16px";
    tbl.style.border = '1px solid black';

    let bookId = getReadLocal();
    if (bookId[_bId] === undefined) {
        let tB = tbl.createTBody();
    }
    else {
        let ch = GetChapterIndex(_bookChapter, bookId[_bId].index);

        let tH = tbl.createTHead();
        let trH = tH.insertRow();

        let tdType = trH.insertCell();
        tdType.textContent = bookId[_bId].type;

        let tdIndex = trH.insertCell();
        tdIndex.textContent = bookId[_bId].index;
        tdIndex.style.fontWeight = "bold";

        let tdName = trH.insertCell();
        tdName.textContent = ch.Name;

        let tdButton = trH.insertCell();
        tdButton.textContent = "Clear";
        tdButton.style.fontWeight = "bold";
        tdButton.style.fontStyle = "italic";
        tdButton.addEventListener('click', function () {
            clearReadLocal(_bookChapter, _bId);
        });


        let tB = tbl.createTBody();
    }

    return tbl;
}

export function CreateTableReadReplace(_bookChapter, _bId, _index) {
    let body = document.querySelector("#crawlerRead tbody");
    while (body.rows[0]) {
        body.deleteRow(0);
    }

    for (let i = _index - 2; i <= _index + 2; i++) {
        let ch = GetChapterIndex(_bookChapter, i);
        if (ch !== undefined) {
            let tr = body.insertRow();
            if (_index === i) {
                tr.style.fontWeight = "bold";
            }

            let tdType = tr.insertCell();
            tdType.textContent = "";

            let tdIndex = tr.insertCell();
            tdIndex.textContent = ch.Index;

            let tdName = tr.insertCell();
            tdName.textContent = ch.Name;

            let tdButton = tr.insertCell();
            tdButton.textContent = "Save";
            tdButton.addEventListener('click', function () {
                setReadLocal(_bookChapter, _bId, ch.Index, "Parsing");
            });
        }
    }
}

function getReadLocal() {
    let bookId = localStorage.getItem("WebNovelRead");

    if (bookId) {
        return JSON.parse(bookId);
    }
    else {
        return {};
    }
}

export async function setReadLocal(_bookChapter, _bId, _index, _type) {
    let bookId = getReadLocal();

    bookId[_bId] = {
        type: _type,
        index: _index
    };
    //bookId[_bId] = _index;
    bookId = JSON.stringify(bookId);
    localStorage.setItem("WebNovelRead", bookId);

    //let tbl = document.querySelector("#crawlerRead")
    //tbl.replaceWith(CreateTableRead(_bookChapter, _bId));
    //document.querySelector("#crawlerRead").remove();
    document.querySelector("#crawlerRead").hidden = true;
    document.querySelector("#divTable").prepend(CreateTableRead(_bookChapter, _bId));

    CheckTotalAll();
}

async function clearReadLocal(_bookChapter, _bId) {
    let bookId = getReadLocal();

    delete bookId[_bId];
    bookId = JSON.stringify(bookId);
    localStorage.setItem("WebNovelRead", bookId);

    //let tbl = document.querySelector("#crawlerRead")
    //tbl.replaceWith(CreateTableRead(_bookChapter, _bId));
    //document.querySelector("#crawlerRead").remove();
    document.querySelector("#crawlerRead").hidden = true;
    document.querySelector("#divTable").prepend(CreateTableRead(_bookChapter, _bId));

    CheckTotalAll();
}

export function ReadLocalTotal(_bId) {
    let bookId = getReadLocal();

    if (bookId[_bId] === undefined) {
        return bookId[_bId]
    }

    return bookId[_bId].index;
}