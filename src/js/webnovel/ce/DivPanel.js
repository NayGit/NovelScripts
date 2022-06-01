import { LS_Login_R } from '../../variable/crawler'


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

    let tmpH1 = Object.assign(document.createElement("h1"), {
        className: "idGlava",
        textContent: tmpText    
    });
    tmpH1.addEventListener("click", async function () {
        document.querySelector("#qd-report-root > div > dialog").open = true;


        await new Promise(r => setTimeout(r, 500));
        document.querySelector("#qd-report-root > div > dialog > div.pa.l0.w100\\%.t0.styles_header__2mIzb > header > div > i > img").click();

        await new Promise(r => setTimeout(r, 1000));

        localStorage.setItem(LS_Login_R, location.href);
        document.querySelector("button.g_id_signout").click();
    });

    return tmpH1;

    return Object.assign(document.createElement("h1"), {
        className: "idGlava",
        textContent: tmpText    
    });
}