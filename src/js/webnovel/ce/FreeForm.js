import { ParserSearch, ParserBook, ParserChapter } from '../../parser';
import { GetChapterId } from '../../webNovel';

export function CreateTableSites(_sites, _bookInfo) {
    let tbl = document.createElement('table');
    tbl.id = "crawlerId";
    tbl.hidden = true;
    tbl.style.fontSize = "16px";
    tbl.style.width = '200px';
    tbl.style.border = '1px solid black';

    let tH = tbl.createTHead();
    let trH = tH.insertRow();
    var tdH = trH.insertCell();
    tdH.textContent = "Parsing All";
    tdH.colSpan = "5";
    tdH.style.textAlign = "right";
    trH.addEventListener('click', function () {
        let tmpParsing = document.querySelectorAll("#crawlerId > tbody > tr > td.parsing");
        for (let p of tmpParsing) {
            p.click();
        }
    });

    let tB = tbl.createTBody();

    for (let i in _sites) {
        for (let j in _sites[i]) {
            let trB = tB.insertRow();
            trB.className = i + "_" + j;


            // Site
            let tdSite = trB.insertCell();
            tdSite.textContent = _sites[i][j].site.hostname;
            tdSite.style.border = '1px solid black';


            // Search
            let tdSearch = trB.insertCell();
            tdSearch.textContent = "Search";
            tdSearch.style.border = '1px solid black';
            tdSearch.addEventListener('click', function () {
                _sites[i][j].linkSearch();
            });
            if (_sites[i][j] instanceof ParserSearch) {
                tdSearch.colSpan = "4";
                continue;
            }


            // Total
            let tdTotal = trB.insertCell();
            tdTotal.className = "total"
            tdTotal.style.border = '1px solid black';
            let inputButton = Object.assign(document.createElement("input"), {
                type: "button",
                value: "???"
            });
            inputButton.addEventListener('click', function () {
                _sites[i][j].linkBook();
                document.querySelector("#InputChapterNext").value = _sites[i][j].total;
            });
            tdTotal.append(inputButton);


            // Read
            if (_sites[i][j] instanceof ParserChapter) {
                let tdRead = trB.insertCell();
                tdRead.className = "read"
                tdRead.style.border = '1px solid black';
                let ibRead = Object.assign(document.createElement("input"), {
                    type: "button",
                    value: "Read"
                });
                ibRead.addEventListener('click', function () {
                    let cId = document.querySelector("#crawlerId").getAttribute("cId");
                    //let cId = this.parentElement.parentElement.parentElement.parentElement.getAttribute("cId");

                    let ch = GetChapterId(_bookInfo, cId);

                    _sites[i][j].linkChapter(ch.chapterIndex, ch.chapterName);
                    document.querySelector("#InputChapterNext").value = _sites[i][j].total;
                });
                tdRead.append(ibRead);
            }


            // Parsing
            let tdParsing = trB.insertCell();
            tdParsing.className = "parsing";
            tdParsing.textContent = "parsing";
            tdParsing.style.border = '1px solid black';
            tdParsing.addEventListener('click', async function () {
                await _sites[i][j].totalChapters();

                let cId = document.querySelector("#crawlerId").getAttribute("cId");
                //let cId = this.parentElement.parentElement.parentElement.getAttribute("cId");

                let ch= GetChapterId(_bookInfo, cId);
                let chIndex = ch.chapterIndex * 1;

                let iB = this.parentElement.querySelector("td.total > input");
                iB.value = _sites[i][j].total;
                if (Math.abs(iB.value) > (chIndex * 1)) {
                    iB.className = "tcUp";
                }
                else if (iB.value === "B0" || iB.value === "S0" || Math.abs(iB.value) <= (chIndex * 1)) {
                    //iB.parentElement.parentElement.hidden = true;
                }
                else {
                    iB.className = "tcDown";
                }
            });


            // -_-
            if (!(_sites[i][j] instanceof ParserChapter)) {
                tdTotal.colSpan = "2";
            }
        }
    }

    return tbl;
}