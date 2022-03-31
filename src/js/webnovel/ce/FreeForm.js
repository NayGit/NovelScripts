export function FormMain(_sitesAll, _chNum, _book, _chapterN, _chapterTitle) {
    let formMain = Object.assign(document.createElement("form"), {
        id: "FormMain"
    });

    let divInputRadio = Object.assign(document.createElement("div"), {
        id: "DivInputRadio"
    });
    formMain.append(divInputRadio);

    let divInputSubmit = document.createElement("div");
    let inputSubmit = Object.assign(document.createElement("input"), {
        type: "submit",
        value: "Search: " + _chNum
    });
    divInputSubmit.append(inputSubmit);
    formMain.append(divInputSubmit)

    formMain.addEventListener("submit", function () {
        let data = new FormData(formMain);
        let name = "";
        let output = "";

        for (const entry of data) {
            name = entry[0];
            output = entry[1];
        };

        _sitesAll[name][output].linkRead(_book, _chapterN, _chapterTitle);

        event.preventDefault();
    }, false);

    return formMain;
}

export function FormAddInputRadio(_sitesAll, _name, _isPriv) {
    let divInputRadio = document.querySelector("#DivInputRadio");
    for (let i = 0; i < _sitesAll[_name].length; i++) {
        if (_isPriv && !_sitesAll[_name][i].isPrivileged) {
            continue;
        }
        let inputRadio = Object.assign(document.createElement("input"), {
            type: "radio",
            name: _name,
            value: i
        });
                
        inputRadio.addEventListener('click', function () {
            let inputRadioAll = document.querySelectorAll("#DivInputRadio > input[type=radio]");
            for (const entry of inputRadioAll) {
                if (entry.name == _name) {
                    continue;
                }
                else if (entry.checked) {
                    entry.checked = false;
                }
            };
            
            //document.querySelector('input[name="first"]:checked').checked = false;
        });

        divInputRadio.append(inputRadio);
    };
}

export async function CheckFreeForm(_sitesAll, _name, _book, _chapterN, _chapterTitle) {
    let divInputCheck = document.querySelector("#DivInputCheck");
    let inputRadio = document.querySelector("#DivInputRadio").getElementsByTagName("input");;

    for (let i = 0; i < inputRadio.length; i++) {
        if (inputRadio[i].name == _name) {
            let site = _sitesAll[_name][inputRadio[i].value];

            if (site.isSearch) {
                CheckFreeFormAsync(divInputCheck, inputRadio, site, i, _book, _chapterN, _chapterTitle);
            }
        }
    };
}

async function CheckFreeFormAsync(divInputCheck, inputRadio, site, i, _book, _chapterN, _chapterTitle) {
    var listener = function (event) {
        window.open(site.site);
    };
    //div.addEventListener('click', listener, false);
    //div.removeEventListener('click', listener, false);

    inputRadio[i].hidden = true;

    let inputButton = Object.assign(document.createElement("input"), {
        id: 'inputButton_' + i,
        type: "button",
        value: "???"
    });
    inputButton.addEventListener('click', listener, false);
    divInputCheck.append(inputButton);

    let res = -1;
    try {
        res = await site.totalChapters(_book);
    }
    catch {
        console.error("Error: " + site.site)
        res = -99999;
    }

    let iB = document.querySelector("#" + inputButton.id);
    iB.value = res;

    if (res === -99999) {
        iB.className = "tcError";
        iB.value = "Err";
    }
    else if (Math.abs(res) > (_chapterN * 1 - 1)) {
        iB.className = "tcUp";
        iB.removeEventListener('click', listener, false);
        iB.addEventListener('click', function () {
            site.linkRead(_book, _chapterN, _chapterTitle);
            document.querySelector("#InputChapterNext").value = res;
        });
    }
    else if (res === "B0" || res === "S0" || Math.abs(res) <= (_chapterN * 1 - 1)) {
        iB.hidden = true;
    }
    else {
        iB.className = "tcDown";
    }
}