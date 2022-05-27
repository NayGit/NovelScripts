export function CreateLogin() {
    let tmpF = document.querySelector("#step1");


    let divLogin = Object.assign(document.createElement("div"), {
        id: "divLogin",
    });


    let select = Object.assign(document.createElement("select"), {
        id: "sLogin",
        size: 0
    });
    select.addEventListener("change", function () {
        setLP(this.options[this.selectedIndex].text);
    });
    divLogin.appendChild(select);


    let bAdd = Object.assign(document.createElement("input"), {
        type: "button",
        value: "Add"
    });
    bAdd.addEventListener("click", function () {
        setLoginLocal(document.querySelector("#email").value, document.querySelector("input._int.loginPass").value);
    });
    divLogin.appendChild(bAdd);


    let bRemove = Object.assign(document.createElement("input"), {
        type: "button",
        value: "Remove"
    });
    bRemove.addEventListener("click", function () {
        let tmpS = document.querySelector("#sLogin");
        delLoginLocal(tmpS.options[tmpS.options.selectedIndex].text);
        //tmpS.remove(tmpS.options.selectedIndex);
    });
    divLogin.appendChild(bRemove);


    tmpF.before(divLogin);


    UpdateSelect();


    let tmpP = document.querySelector("input._int.loginPass");
    tmpP.type = "text";
}

function UpdateSelect() {
    let lp = getLoginLocal();

    let tmpS = document.querySelector("#sLogin");
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
    let lp = localStorage.getItem("WebNovel_LP");

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
    localStorage.setItem("WebNovel_LP", lp);

    UpdateSelect();

    setLP(_l);
}

function delLoginLocal(_l) {
    let lp = getLoginLocal();

    delete lp[_l];
    lp = JSON.stringify(lp);
    localStorage.setItem("WebNovel_LP", lp);

    UpdateSelect();
}

function getPass(_l) {
    return getLoginLocal()[_l];
}