export function DivPanel(_id, _class) {
    return Object.assign(document.createElement("div"), {
        id: _id,
        className: _class,
        translate: false
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

export function InputBookInfo(_bId) {
    let inputBookInfo = Object.assign(document.createElement("input"), {
        className: "iMain",
        type: "button",
        value: "BookInfo"
    });

    inputBookInfo.addEventListener('click', function () {
        location.replace(location.origin + '/book/' + _bId);
    });

    return inputBookInfo;
}

export function H1IdGlava(_chStart, _chLastLocked, _chStop) {
    let tmpText = "";
    if (_chStart == _chLastLocked && _chStart == _chStop) {
        tmpText = "last";
    }
    else if (_chStart == _chLastLocked || _chLastLocked == _chStop) {
        tmpText = _chStart + " / " + _chStop;
    }
    else if (_chStart > _chLastLocked) {
        tmpText = _chStart + " / " + _chStop;
    }
    else {
        tmpText = _chStart + " / " + _chLastLocked + " / " + _chStop;
    }

    return Object.assign(document.createElement("h1"), {
        className: "idGlava",
        textContent: tmpText    
    });
}

export function InputChapterNext(_bookInfo, _bookChapters, _chN) {
    let InputChapterNext = Object.assign(document.createElement("input"), {
        id: "InputChapterNext",
        className: "iMain",
        type: "button",
        value: _chN
    });

    InputChapterNext.addEventListener('click', function () {
        let tmpV = Math.abs(this.value);

        for (let chapter of _bookChapters.Data.Chapters) {
            if (chapter.Index === tmpV) {
                location.replace(location.origin + '/book/' + _bookInfo.data.bookInfo.bookId + '/' + chapter.Id);
                return;
            }
        }
    });

    return InputChapterNext;
}