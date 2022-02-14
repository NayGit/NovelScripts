import { bookWebNovel } from "../../webNovel";

export function DivPanel() {
    return Object.assign(document.createElement("div"), {
        id: "divPanel"
    });
}

export function InputDivPanelHide() {
    let inputDivPanelHide = Object.assign(document.createElement("input"), {
        className: "iMain",
        type: "button",
        value: "Hide"
    });

    inputDivPanelHide.addEventListener('click', function () {
        document.getElementById("divPanel").hidden = true;
    });

    return inputDivPanelHide;
}

export function InputBookInfo(_loc) {
    let inputBookInfo = Object.assign(document.createElement("input"), {
        className: "iMain",
        type: "button",
        value: "BookInfo"
    });

    inputBookInfo.addEventListener('click', function () {
        location.replace(_loc.origin + '/book/' + bookWebNovel(_loc));
    });

    return inputBookInfo;
}

export function H1IdGlava(_chStart, _chStop) {
    return Object.assign(document.createElement("h1"), {
        id: "idGlava",
        textContent: _chStart + " / " + _chStop
    });
}

export function InputChapterNext(_loc, _bookChapters) {
    let InputChapterNext = Object.assign(document.createElement("input"), {
        id: "InputChapterNext",
        className: "iMain",
        type: "button",
        value: _bookChapters[0][0] * 1 - 1
    });

    InputChapterNext.addEventListener('click', function () {
        for (let i = 0; i < _bookChapters.length; i++) {
            if (_bookChapters[i][0] === Math.abs(this.value)) {
                location.replace(_loc.origin + '/book/' + bookWebNovel(_loc) + '/' + _bookChapters[i][1]);
                break;
            }
        }
    });

    return InputChapterNext;
}

export function DivInputCheck() {
    return Object.assign(document.createElement("div"), {
        id: "DivInputCheck",
        className: "iMain"
    });
}

export function InputSecond(_id) {
    return Object.assign(document.createElement("input"), {
        id: "InputSecond",
        className: "iMain",
        type: "button",
        value: "Add Parser: " + _id
    });
}