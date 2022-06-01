import { ParserSearch, ParserBook, ParserChapter } from 'CrawlerClass/ParserClass';
import { GetChapterId, GetChapterIndex } from 'Domain/webNovel';
import { CreateTableReadReplace, ReadLocalTotal } from './CreateTableRead'

var eventCheck = "event_check";
var event = new Event(eventCheck);
var clH = "hTrue";

export function CreateTableSites(_sites, _bookChapters, _bId) {
    let tbl = document.createElement('table');
    tbl.id = "crawlerId";
    tbl.classList.add(clH);
    tbl.hidden = true;
    tbl.style.fontSize = "16px";
    tbl.style.width = '200px';
    tbl.style.border = '1px solid black';

    let tH = tbl.createTHead();
    let trH = tH.insertRow();


    // Hidden?
    var tdCheckBox = trH.insertCell();
    tdCheckBox.classList.add("eye-hidden");
    tdCheckBox.addEventListener('click', function () {
        let tmpCkeck = document.querySelector("#crawlerId");
        if (this.classList.contains("eye")) {
            tmpCkeck.classList.add(clH);

            this.classList.remove("eye");
            this.classList.add("eye-hidden");
        }
        else {
            tmpCkeck.classList.remove(clH);

            this.classList.add("eye");
            this.classList.remove("eye-hidden");
        }
    });


    // ParsingAll
    var tdH = trH.insertCell();
    tdH.textContent = "Parsing All";
    tdH.colSpan = "4";
    tdH.style.textAlign = "right";
    tdH.addEventListener('click', function () {
        ParsingAll();
    });

    let tB = tbl.createTBody();

    for (let i in _sites) {
        for (let j in _sites[i]) {
            let trB = tB.insertRow();
            trB.classList.add(i + "_" + j);


            // Site
            let tdSite = trB.insertCell();
            tdSite.textContent = _sites[i][j].site.hostname;
            tdSite.style.border = '1px solid black';


            // Search
            let tdSearch = trB.insertCell();
            tdSearch.className = "search";
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
            tdTotal.className = "total";
            tdTotal.style.border = '1px solid black';
            let inputButton = Object.assign(document.createElement("input"), {
                type: "button",
                value: "???"
            });
            inputButton.addEventListener('click', function () {
                _sites[i][j].linkBook();
                CreateTableReadReplace(_bookChapters, _bId, Math.abs(_sites[i][j].total));
            });
            inputButton.addEventListener(eventCheck, function () {
                if (this.value === "???" && _sites[i][j].total === 0) {
                    return;
                }

                let cId = document.querySelector("#crawlerId").getAttribute("cId");

                let ch = GetChapterId(_bookChapters, cId);
                let chIndex = ch.Index * 1;

                let tmpR = ReadLocalTotal(_bId);
                if (tmpR !== undefined) {
                    if (chIndex < tmpR) {
                        chIndex = tmpR;
                    }
                }

                console.info(chIndex);

                this.value = _sites[i][j].total;
                if (Math.abs(this.value) > (chIndex * 1)) {
                    this.className = "tcUp";
                }
                else if (this.value === "B0" || this.value === "S0" || this.value === "Fetch" || Math.abs(this.value) <= (chIndex * 1)) {
                    this.className = "tcDown";
                    //this.parentElement.parentElement.hidden = true;
                }
                else {
                    this.className = "tcError";
                }

                if (this.className === "tcDown") {
                    this.parentElement.parentElement.classList.add("tcHidden");
                }
                else {
                    this.parentElement.parentElement.classList.remove("tcHidden");
                }
            });

            tdTotal.append(inputButton);


            // Read
            if (_sites[i][j] instanceof ParserChapter) {
                let tdRead = trB.insertCell();
                tdRead.className = "read"
                tdRead.style.border = '1px solid black';
                tdRead.addEventListener('click', function () {
                    let cId = document.querySelector("#crawlerId").getAttribute("cId");

                    let ch = GetChapterId(_bookChapters, cId);
                    console.info(ch);

                    let tmpR = ReadLocalTotal(_bId);
                    if (tmpR !== undefined) {
                        if (ch.Index < tmpR) {
                            ch = GetChapterIndex(_bookChapters, tmpR + 1);
                        }
                    }

                    _sites[i][j].linkChapter(ch.Index, ch.Name);
                    CreateTableReadReplace(_bookChapters, _bId, Math.abs(_sites[i][j].total));
                });
            }


            // Parsing
            let tdParsing = trB.insertCell();
            tdParsing.className = "parsing";
            tdParsing.style.border = '1px solid black';
            tdParsing.addEventListener('click', async function () {
                await _sites[i][j].totalChapters();

                let iB = this.parentElement.querySelector("td.total > input");
                iB.dispatchEvent(event);
            });


            // -_-
            if (!(_sites[i][j] instanceof ParserChapter)) {
                tdTotal.colSpan = "2";
            }
        }
    }

    return tbl;
}

export function CheckTotalAll() {
    let tmpTotal = document.querySelectorAll("#crawlerId > tbody > tr > td.total > input");
    for (let i of tmpTotal) {
        i.dispatchEvent(event);
    }
}

export function ParsingAll() {
    let tmpParsing = document.querySelectorAll("#crawlerId > tbody > tr > td.parsing");
    for (let p of tmpParsing) {
        p.click();
    }
}