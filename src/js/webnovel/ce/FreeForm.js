import { ParserSearch, ParserBook, ParserChapter } from '../../parser';
import { GetChapterId } from '../../webNovel';

export function CreateTableSites(_sites, _bookInfo) {
    let tbl = document.createElement('table');
    tbl.id = "crawlerId";
    tbl.hidden = true;
    tbl.style.width = '200px';
    tbl.style.border = '1px solid black';

    for (let i in _sites) {
        for (let j in _sites[i]) {
            let tr = tbl.insertRow();
            tr.className = i + "_" + j;


            // Site
            let tdSite = tr.insertCell();
            tdSite.textContent = _sites[i][j].site.origin;
            tdSite.style.border = '1px solid black';


            // Search
            let tdSearch = tr.insertCell();
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
            let tdTotal = tr.insertCell();
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
                let tdRead = tr.insertCell();
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
            let tdParsing = tr.insertCell();
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