import { GetChapterIndex } from 'Domain/webNovel';
import { CheckTotalAll } from './CreateTableSites';

export function CreateRead(_bookChapter, _bId) {
    let divRead = Object.assign(document.createElement("div"), {
        id: "readMain"
    });

    divRead.appendChild(CreateReadNew(_bookChapter, _bId));
    divRead.appendChild(CreateReadLocal(_bookChapter, _bId));

    return divRead;
}

export function CreateReadNew(_bookChapter, _bId) {
    let divSelect = Object.assign(document.createElement("div"), {
        id: "readDivSelect"
    });


    // spanIndex
    let spanSave = Object.assign(document.createElement("span"), {
        id: "readSpan"
    });
    spanSave.style.fontWeight = "bold";
    spanSave.style.fontStyle = "italic";
    spanSave.addEventListener('click', function () {
        setReadLocal(_bookChapter, _bId, this.textContent, "Parsing");
    });
    divSelect.appendChild(spanSave);


    // select
    let select = Object.assign(document.createElement("select"), {
        id: "readSelect",
        size: 0
    });
    select.addEventListener("change", function () {
        setReadLocal(_bookChapter, _bId, this.options[this.selectedIndex].value, "Parsing");
    });

    for (let chapter of _bookChapter.Data.Chapters) {
        select.add(new Option(chapter.Index + ": " + chapter.Name, chapter.Index));
    }
    divSelect.appendChild(select);
    

    return divSelect;
}

export function UpdateReadNew(_bookChapter, _bId, _index) {
    document.querySelector("#readSpan").textContent = _index;

    let readSelect = document.querySelector("#readSelect");
    for (let i in readSelect.options) {
        if (i == _index) {
            readSelect.options[i].selected = true;

            break;
        }
    }
}

function CreateReadLocal(_bookChapter, _bId) {
    let divRL = Object.assign(document.createElement("div"), {
        id: "readLocal"
    });
    divRL.style.fontSize = "16px";
    divRL.style.border = '1px solid black';
    divRL.style.display = "flex";
    divRL.style.justifyContent = "space-around";

    let spanType = document.createElement("span");
    divRL.appendChild(spanType);

    let spanIndex = document.createElement("span");
    spanIndex.style.fontWeight = "bold";
    divRL.appendChild(spanIndex);

    let spanName = document.createElement("span");
    divRL.appendChild(spanName);

    let spanClear = document.createElement("span");
    spanClear.textContent = "Clear";
    spanClear.style.fontWeight = "bold";
    spanClear.style.fontStyle = "italic";
    spanClear.addEventListener('click', function () {
        clearReadLocal(_bookChapter, _bId);
    });
    divRL.appendChild(spanClear);

    UpdateReadLocal(_bookChapter, _bId, divRL);

    return divRL;
}

function UpdateReadLocal(_bookChapter, _bId, _divRL = undefined) {
    let readLocal = (_divRL === undefined) ? document.querySelectorAll("#readLocal span") : _divRL.querySelectorAll("span");

    let spanType = readLocal[0];
    let spanIndex = readLocal[1];
    let spanName = readLocal[2];

    let bookId = getReadLocal();
    if (bookId[_bId] === undefined) {
        spanType.textContent = "";
        spanIndex.textContent = "";
        spanName.textContent = "";
    }
    else {
        spanType.textContent = bookId[_bId].type;

        spanIndex.textContent = bookId[_bId].index;
        spanIndex.style.fontWeight = "bold";

        let ch = GetChapterIndex(_bookChapter, bookId[_bId].index);
        spanName.textContent = (ch === undefined) ? "" : ch.Name;
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
    bookId = JSON.stringify(bookId);
    localStorage.setItem("WebNovelRead", bookId);

    UpdateReadLocal(_bookChapter, _bId);

    CheckTotalAll();
}

async function clearReadLocal(_bookChapter, _bId) {
    let bookId = getReadLocal();

    delete bookId[_bId];
    bookId = JSON.stringify(bookId);
    localStorage.setItem("WebNovelRead", bookId);

    UpdateReadLocal(_bookChapter, _bId);

    CheckTotalAll();
}

export function ReadLocalTotal(_bId) {
    let bookId = getReadLocal();

    if (bookId[_bId] === undefined) {
        return bookId[_bId]
    }

    return bookId[_bId].index;
}