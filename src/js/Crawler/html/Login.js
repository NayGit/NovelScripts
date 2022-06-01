import { SelectLogin, SelectLoginId, LS_Login_LP } from 'CrawlerVariable/Variable';

export function CreateLogin() {
    // divLogin
    let divLogin = Object.assign(document.createElement("div"), {
        id: "divLogin",
    });


    // SelectLogin
    let select = Object.assign(document.createElement("select"), {
        id: SelectLogin,
        size: 0
    });
    select.addEventListener("change", function () {
        setLP(this.options[this.selectedIndex].text);
    });
    divLogin.appendChild(select);


    // Add
    let bAdd = Object.assign(document.createElement("input"), {
        type: "button",
        value: "Add"
    });
    bAdd.addEventListener("click", function () {
        setLoginLocal(document.querySelector("#email").value, document.querySelector("input._int.loginPass").value);
    });
    divLogin.appendChild(bAdd);


    // Remove
    let bRemove = Object.assign(document.createElement("input"), {
        type: "button",
        value: "Remove"
    });
    bRemove.addEventListener("click", function () {
        let tmpS = document.querySelector(SelectLoginId);
        delLoginLocal(tmpS.options[tmpS.options.selectedIndex].text);
    });
    divLogin.appendChild(bRemove);


    let tmpF = document.querySelector("#step1");
    tmpF.before(divLogin);


    UpdateSelect();


    let tmpP = document.querySelector("input._int.loginPass");
    tmpP.type = "text";
}

function UpdateSelect() {
    let lp = getLoginLocal();

    let tmpS = document.querySelector(SelectLoginId);
    while (tmpS.options.length > 0) {
        tmpS.remove(0);
    } 

    for (let tmpLP in lp) {
        tmpS.add(new Option(tmpLP, tmpLP));
    }

    tmpS.size = tmpS.options.length;

    for (let l in lp) {
        setLP(l);
        break;
    }
}

function setLP(_l) {
    let tmpL = document.querySelector("#email");
    tmpL.value = _l;

    let tmpP = document.querySelector("input._int.loginPass");
    tmpP.value = getPass(_l);
}

function getLoginLocal() {
    let lp = localStorage.getItem(LS_Login_LP);

    if (lp) {
        return JSON.parse(lp);
    }
    else {
        return {};
    }
}

function setLoginLocal(_l, _p) {
    let lp = getLoginLocal();

    lp[_l] = _p;
    lp = JSON.stringify(lp);
    localStorage.setItem(LS_Login_LP, lp);

    UpdateSelect();

    setLP(_l);
}

function delLoginLocal(_l) {
    let lp = getLoginLocal();

    delete lp[_l];
    lp = JSON.stringify(lp);
    localStorage.setItem(LS_Login_LP, lp);

    UpdateSelect();
}

function getPass(_l) {
    return getLoginLocal()[_l];
}