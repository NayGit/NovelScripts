/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#idGlava {\r\n    background: lightgray;\r\n}\r\n#divPanel { position: fixed; top: 0; right: 0; z-index: 999999; max-width: 450px; }\r\ninput.iMain {\r\n    height: 100px;\r\n    width: 100%;\r\n    background: black;\r\n    color: gray;\r\n    margin: 1px;\r\n}\r\n#divPanel input[type=radio] { height:35px; width:35px; vertical-align: middle; background: black; color: gray }\r\n#divPanel input[type=submit] { height: 50px; width: 100%; background: black; color: gray }\r\n#showHide { z-index: -999; height: 150px; width: 100%; background: black; color: gray; }\r\n.tcError, .tcUp, .tcDown {\r\n    height: 35px;\r\n    width: auto;\r\n    min-width: 25px;\r\n    margin: 3px;\r\n}\r\ninput.tcError {\r\n    background: red;\r\n}\r\ninput.tcUp {\r\n    background: lime;\r\n}\r\ninput.tcDown {\r\n    background: orange;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/webnovel.css
var webnovel = __webpack_require__(286);
;// CONCATENATED MODULE: ./src/css/webnovel.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(webnovel/* default */.Z, options);




       /* harmony default export */ const css_webnovel = (webnovel/* default */.Z && webnovel/* default.locals */.Z.locals ? webnovel/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/js/domain.js


async function ResponseToHTML(response) {
        let bodyText = await response.text();

        let parser = new DOMParser();
        let bodyHtml = parser.parseFromString(bodyText, 'text/html');

        return bodyHtml;
}

function domain_fetchStatusHTML(response) {
    return response.ok ? ResponseToHTML(response) : Promise.reject(response)
}

function fetchStatusJSON(response) {
    return response.ok ? response.json() : Promise.reject(response)
}

function domain_fetchCatch(_error, _site) {
    if (!_error.ok) {
        console.warn(new URL(_site) + ' Fetch error: ' + _error.status);
        console.warn(_error);
        return "F" + _error.status;
    }
    else {
        console.error(new URL(_site) + ' Parsing error: ' + _error);
        console.error(_error);
        return "errP";
    }
}

function domain_ReplaceName(name) {
    return name.toLowerCase().replaceAll(' ', '-').replaceAll(/[.?!)(,:'\[\]]/g, '');
}

function copytext(el) {
    /*
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(el).text()).select();
        document.execCommand("copy");
        $tmp.remove();
    */
}

function copyHtml(el) {
    //document.ondragstart =
    //    document.onselectstart =
    //    document.oncontextmenu =
    //    document.body.oncontextmenu =
    //    document.body.onkeydown =
    //    () => true;

    console.log("asdasdasda" + el);
    var tmp = document.createElement("textarea");
    tmp.id = "copyTextarea";
    tmp.value = el;
    document.getElementsByTagName("body")[0].append(tmp);

    var copyTextarea = document.getElementById("copyTextarea");
    copyTextarea.focus();
    copyTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}
;// CONCATENATED MODULE: ./src/js/webNovel.js


// ���������� ���� � ��������� name. ��� undefined, ���� ������ �� �������
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function bookWebNovel(loc) {
    let p = loc.pathname.split('/');

    let book = p[2].split('_');

    if (book.length == 2)
        return book[1];
    else
        return p[2];
}

function glavaWebNovel(loc) {
    let p = loc.pathname.split('/');

    let glava = p[3].split('_');

    if (glava.length == 2)
        return glava[1];
    else
        return p[3];
}

async function downloadBookIfno(_loc) {
    let url = _loc.origin + '/go/pcm/chapter/get-chapter-list?bookId=' + bookWebNovel(_loc) + '&_csrfToken=' + getCookie("_csrfToken");;

    return await fetch(url)
        .then(res => fetchStatusJSON(res))
        .then(data => {
            return data;
        })
        .catch(err => domain_fetchCatch(err, url));
}

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function getCatalog(_json, _loc) {
    let chId = glavaWebNovel(_loc);

    var tmpChList = new Array();
    var tmpFlag = false;

    if (_loc.href.endsWith('/catalog'))
        tmpFlag = true;

    for (let volume of _json.data.volumeItems) {
        for (let chapter of volume.chapterItems) {
            if (tmpFlag)
                tmpChList.push([chapter.chapterIndex, chapter.chapterId, chapter.chapterName, chapter.publishTimeFormat, chapter.isAuth, chapter.chapterLevel]); //isAuth=1 � ���������, chapterLevel=0 --> �� ������, chapterLevel>0 ��������
            else if (chId == chapter.chapterId)
                tmpFlag = true;
        }
    }

    return tmpChList;
}

// �������???
async function downloadCatalog(bookId, chId) {
    var tmpChList = new Array();
    var tmpFlag = false;

    if (location.href.endsWith('/catalog'))
        tmpFlag = true;

    let url = 'https://m.webnovel.com/book/' + bookId + '/catalog';
    await fetch(url)
        .then(res => fetchStatusHTML(res))
        .then(data => {
            var chObj = data.getElementById('__NEXT_DATA__').textContent;

            var chJson = JSON.parse(chObj);
            console.log(chJson);

            var chList = chJson.props.initialState.entities.chapter;
            console.log(chList);

            for (var ch in chList) {
                if (tmpFlag)
                    tmpChList.push([chList[ch].chapterIndex, chList[ch].chapterId, chList[ch].chapterName, chList[ch].publishTimeFormat, chList[ch].isAuth, chList[ch].chapterLevel]); //isAuth=1 � ���������, chapterLevel=0 --> �� ������, chapterLevel>0 ��������
                else if (chId == chList[ch].chapterId)
                    tmpFlag = true;
            }
            console.log(tmpChList);
        })
        .catch(err => fetchCatch(err, url));

    return tmpChList;
}

// �������???
function Title() {
    let title = document.title;
    console.log(title);

    let result = title.match(/(.+)\sChapter\s(\d+)\s-\s(.+)/);

    if (result.length === 4) {
        console.log(result[1]);     // Script (������ ������)
        console.log(result[2]);     // Script (2 ������)
        console.log(result[3]);     // Script (3 ������)
        console.log(result.length); // 4
    }
    else {
        console.log('��� �����???');
    }

    return result;
}
;// CONCATENATED MODULE: ./src/js/webnovel/ce/DivPanel.js


function DivPanel() {
    return Object.assign(document.createElement("div"), {
        id: "divPanel"
    });
}

function InputDivPanelHide() {
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

function InputBookInfo(_loc) {
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

function H1IdGlava(_chStart, _chStop) {
    return Object.assign(document.createElement("h1"), {
        id: "idGlava",
        textContent: _chStart + " / " + _chStop
    });
}

function InputChapterNext(_loc, _bookChapters) {
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

function DivInputCheck() {
    return Object.assign(document.createElement("div"), {
        id: "DivInputCheck",
        className: "iMain"
    });
}

function InputSecond(_id) {
    return Object.assign(document.createElement("input"), {
        id: "InputSecond",
        className: "iMain",
        type: "button",
        value: "Add Parser: " + _id
    });
}
;// CONCATENATED MODULE: ./src/js/webnovel/ce/FreeForm.js
function FormMain(_sitesAll, _chNum, _book, _chapterN, _chapterTitle) {
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

function FormAddInputRadio(_sitesAll, _name, _isPriv) {
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

async function CheckFreeForm(_sitesAll, _name, _book, _chapterN, _chapterTitle) {
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
;// CONCATENATED MODULE: ./src/js/StringProcent/tanimoto.js
function tanimoto(s1, s2) {
    s1 = Array.from(s1.toLowerCase());
    s2 = Array.from(s2.toLowerCase());

    var a = s1.length;
    var b = s2.length;
    var c = 0;

    for (var sym of s1) {
        var index = s2.indexOf(sym);
        if (index > -1) {
            s2.splice(index, 1);
            c += 1;
        }
    }
    return c / (a + b - c)
}

//let diff = tanimoto(title, titleParser);
;// CONCATENATED MODULE: ./src/js/parser.js



class Parser {
    constructor(site, endUrl, isSearch, isPrivileged = false) {
        this.site = site;
        this.endUrl = endUrl;
        this.isSearch = isSearch;
        this.isPrivileged = isPrivileged;
    }

    linkRead(title, chInt) {
        alert("��� ����� ��������");
    }

    async totalChapters(title) {
        return -99999;
    }
}

class p1 extends (/* unused pure expression or super */ null && (Parser)) {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + ReplaceName(_book) + '_' + _chapterN + this.endUrl);
    }
}

class p2 extends (/* unused pure expression or super */ null && (Parser)) {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + ReplaceName(_book) + '/chapter-' + _chapterN + this.endUrl);
    }
}

class p3 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + domain_ReplaceName(_book) + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }
}

class p4 extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book.toLowerCase().replaceAll(' ', '+') + this.endUrl);
    }
}

class artBook extends Parser {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search/' + title + this.endUrl;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.result-container_2.result-container > ul.result-list > li.list-item");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a.list-img > img.item-img").alt;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a.list-img").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    let allCH = data.querySelector("#detail > div.chapter-wrapper > ul").getElementsByTagName("a");
                    for (let i = allCH.length - 1; i >= 0; i--) {
                        if (allCH[i].style.color === 'gray')
                            continue;
                        else {
                            return allCH[i].textContent.match(/\D*(\d+)/)[1] * -1;
                        }
                    }

                    return data.querySelector("#detail > div.chapter-wrapper > div > a").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearch/artBook/mWuxiaworldCo.js


class mWuxiaworldCo extends artBook {
    constructor() {
        super(new URL('https://m.wuxiaworld.co'), '/1', true, true);
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearch/artBook/novelupdatesCc.js


class novelupdatesCc extends artBook {
    constructor() {
        super(new URL('https://www.novelupdates.cc'), '/1', true, true);
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearch/artBook/readlightnovelCc.js


class readlightnovelCc extends artBook {
    constructor() {
        super(new URL('https://www.readlightnovel.cc'), '/1', true, true);
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearch/artBook/readlightnovelCo.js


class readlightnovelCo extends artBook {
    constructor() {
        super(new URL('https://www.readlightnovel.co'), '/1', true, true);
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/lightnovelreaderOrg.js




class lightnovelreaderOrg extends Parser {
    constructor() {
        super(new URL('https://lightnovelreader.org'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/search/autocomplete?query=" + title;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data).length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of data.results) {
                    let titleParser = book.original_title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.link;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("body > section:nth-child(4) > div > div > div.col-12.col-xl-9 > div > div:nth-child(2) > div > div.novels-detail-right > ul > li:nth-child(9) > div.novels-detail-right-in-right > a:nth-child(1)").textContent.match(/\D*(\d+)/)[1];
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/ltnovelCom.js




class ltnovelCom extends Parser {
    constructor() {
        super(new URL('https://www.ltnovel.com'), '.html', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(this.endUrl, '') + '_' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/e/search/index.php";

        let isLucky = false;
        var isError = '';
        await gmfetch(url, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "referrer": this.site.origin + "/search.html",
            "body": "show=title&tempid=1&tbname=news&keyboard=" + title,
            "method": "POST",
        })
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                if (data.title === "Message hint" || data.title == "") {
                    isError = "B0";
                    return;
                }

                let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                for (let book of block) {
                    let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/novelmtCom.js




class novelmtCom extends Parser {
    constructor() {
        super(new URL('https://www.novelmt.com'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(this.endUrl, '') + '_' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/e/search/index.php";

        let isLucky = false;
        var isError = '';
        await gmfetch(url, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "referrer": this.site.origin + "/search.html",
            "body": "show=title&tempid=1&tbname=news&keyboard=" + title,
            "method": "POST",
        })
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                if (data.title === "Message hint" || data.title == "") {
                    isError = "B0";
                    return;
                }

                let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                for (let book of block) {
                    let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/readwnCom.js




class readwnCom extends Parser {
    constructor() {
        super(new URL('https://www.readwn.com'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(this.endUrl, '') + '_' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/e/search/index.php";

        let isLucky = false;
        var isError = '';
        await gmfetch(url, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "referrer": this.site.origin + "/search.html",
            "body": "show=title&tempid=1&tbname=news&keyboard=" + title,
            "method": "POST",
        })
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                if (data.title === "Message hint" || data.title == "") {
                    isError = "B0";
                    return;
                }

                let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                for (let book of block) {
                    let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/wuxiahereCom.js




class wuxiahereCom extends Parser {
    constructor() {
        super(new URL('https://www.wuxiahere.com'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(this.endUrl, '') + '_' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/e/search/index.php";

        let isLucky = false;
        var isError = '';
        await gmfetch(url, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "referrer": this.site.origin + "/search.html",
            "body": "show=title&tempid=1&tbname=news&keyboard=" + title,
            "method": "POST",
        })
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                if (data.title === "Message hint" || data.title == "") {
                    isError = "B0";
                    return;
                }

                let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                for (let book of block) {
                    let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/wuxiapubCom.js




class wuxiapubCom extends Parser {
    constructor() {
        super(new URL('https://www.wuxiapub.com'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(this.endUrl, '') + '_' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/e/search/index.php";

        let isLucky = false;
        var isError = '';
        await gmfetch(url, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
            "referrer": this.site.origin + "/search.html",
            "body": "show=title&tempid=1&tbname=news&keyboard=" + title,
            "method": "POST",
        })
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                if (data.title === "Message hint" || data.title == "") {
                    isError = "B0";
                    return;
                }

                let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                for (let book of block) {
                    let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearch/mMylovenovelCom.js




class mMylovenovelCom extends Parser {
    constructor() {
        super(new URL('https://m.mylovenovel.com'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/index.php?s=so&module=book&keyword=' + title;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.main > ul.list > li");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a > p.bookname").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("#info > div.main > div.detail > p.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearchChapter/freewebnovelCom.js




class freewebnovelCom extends Parser {
    constructor() {
        super(new URL('https://freewebnovel.com'), '.html', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(this.endUrl, '') + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search/?searchkey=' + title;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-content > div > div.li-row");

                if (block.length == 1 && block[0].querySelectorAll("div.li > div.con").length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.txt > h3.tit > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("div.txt > h3.tit > a").pathname;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("body > div.main > div > div > div.col-content > div.m-newest1 > ul > li:nth-child(1) > a").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearchChapter/novelfullvipCom.js




class novelfullvipCom extends Parser {
    constructor() {
        super(new URL('https://novelfullvip.com'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?q=' + title;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#truyen-slide > div.list.list-thumbnail.col-xs-12.col-md-9 > div.row > div.col-xs-4.col-sm-3.col-md-3");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a").title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("a").href;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("#truyen > div.col-xs-12.col-sm-12.col-md-9.col-truyen-main > div.col-xs-12.col-info-desc > div.col-xs-12.col-sm-8.col-md-8.desc > div.l-chapter > ul > li:nth-child(1) > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearchChapter/novelscafeCom.js




class novelscafeCom extends Parser {
    constructor() {
        super(new URL('https://novelscafe.com'), '/', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace(/\/$/, "") + '-chapter-' + _chapterN + '-' + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.posts.row > div.col-4.col-md-3.col-lg-2.post-column.mt-3");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a > div.post-title").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("a").href;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("#primary > div:nth-child(2) > div.col-12.col-md-9 > div.last-10-chapters > div > div:nth-child(1) > h3 > a").textContent.match(/\D*(\d+)/)[1] * -1;
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "B0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearchChapter/POST/novelsonlineNet.js




class novelsonlineNet extends Parser {
    constructor() {
        super(new URL('https://novelsonline.net'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/sResults.php";

        let isLucky = false;
        var isError = '';
        await gmfetch(url, {
            "headers": {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            "referrer": "https://novelsonline.net/",
            "body": "q=" + title,
            "method": "POST",
        })
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("ul > li");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a > span.title").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("a").href;
                        isLucky = true;
                        break;
                    }
                }
            })
            .catch(err => isError = domain_fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    return data.querySelector("#collapse-1 > div > div > div.tab-pane.active > ul > li:last-child").textContent.match(/\D*(\d+)/)[1];
                })
                .catch(err => domain_fetchCatch(err, url));
        }

        return "S0";
    }
}



;// CONCATENATED MODULE: ./src/js/parsers/apiSearch/lightnovelsMe.js




class lightnovelsMe extends Parser {
    constructor() {
        super(new URL('https://lightnovels.me'), '.html', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/api/search?keyword=" + title + "&index=0&limit=20";

        return await gmfetch(url)
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data.results).length == 0) {
                    return "B0";
                }

                for (let book of data.results) {
                    let titleParser = book.novel_name;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + '/novel' + book.novel_slug;
                        return book.chapter_name.match(/\D*(\d+)/)[1];
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/apiSearchChapter/webnovelonlineCom.js




class webnovelonlineCom extends Parser {
    constructor() {
        super(new URL('https://webnovelonline.com'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace('/novel/', '/chapter/') + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.protocol + "//api." + this.site.hostname + "/api/v1/wuxia/search?name=" + title;

        return await gmfetch(url)
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data.data).length == 0) {
                    return "B0";
                }

                for (let book of data.data) {
                    let titleParser = book.title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + new URL(book.url).pathname;
                        return book.chap.match(/\D*(\d+)/)[1];
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearch/lightnovelWorld.js




class lightnovelWorld extends Parser {
    constructor() {
        super(new URL('https://m.lightnovel.world'), '', true)
    }
    
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.book_info");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    book.querySelector("li.text1.textC000 span").remove();
                    let titleParser = book.querySelector("li.text1.textC000").textContent.trim();

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("div.book_info_r > ul > li.book_info_add_afv > a:nth-child(2)").pathname;
                        return book.querySelector("a.text2.textC333").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearch/novelhallCom.js




class novelhallCom extends Parser {
    constructor() {
        super(new URL('https://www.novelhall.com'), '', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/index.php?s=so&module=book&keyword=' + title + this.endUrl;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#main > div.container > div > table > tbody > tr");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("td:nth-child(2) > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("td:nth-child(2) > a").pathname;
                        return book.querySelector("a.chapter").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearch/pandanovelCom.js




class pandanovelCom extends Parser {
    constructor() {
        super(new URL('https://www.panda-novel.com'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search/' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#panda-app > div.sr-body > div > div.novel-list.gray-mask > ul > li");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.novel-desc > h4").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("a").pathname;
                        return book.querySelector("div.novel-desc > div > label > em").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearch/readlightnovelsNet.js




class readlightnovelsNet extends Parser {
    constructor() {
        super(new URL('https://readlightnovels.net'), '.html', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-md-3.col-sm-6.col-xs-6.home-truyendecu");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a").title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("a").href;
                        return book.querySelector("a > div > small").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/octopiiCo.js




class octopiiCo extends Parser {
    constructor() {
        super(new URL('https://octopii.co'), '/', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + '-chapter-' + _chapterN + '-' + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#primary > div > div.col-12.col-md-6.d-flex.mb-4.flex-wrap.position-relative.overflow-hidden");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-name.m-0 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("h3.novel-name.m-0 > a").pathname.replace('/novel/', '/').replace(/\/$/, '');
                        return book.querySelector("h4.chapter-name.m-0 > a.chapter-name").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/madentertainment/madnovelCom.js




class madnovelCom extends Parser {
    constructor() {
        super(new URL('https://madnovel.com'), '', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?q=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        return book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/madentertainment/novelbuddyCom.js




class novelbuddyCom extends Parser {
    constructor() {
        super(new URL('https://novelbuddy.com'), '', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?q=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        return book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/madentertainment/novelforestCom.js




class novelforestCom extends Parser {
    constructor() {
        super(new URL('https://novelforest.com'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?q=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        return book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/madentertainment/novelfullMe.js




class novelfullMe extends Parser {
    constructor() {
        super(new URL('https://novelfull.me'), '', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?q=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        return book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/novel/boxnovelOrg.js




class boxnovelOrg extends Parser {
    constructor() {
        super(new URL('https://boxnovel.org'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replace('/novel/', '/') + "-chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("h3.novel-title > a").href;
                        return book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/novel/novelfullplusCom.js




class novelfullplusCom extends Parser {
    constructor() {
        super(new URL('https://novelfullplus.com/'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("h3.novel-title > a").href;
                        return book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/novel/readnovelfullCom.js




class readnovelfullCom extends Parser {
    constructor() {
        super(new URL('https://readnovelfull.com/'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.replaceAll(/-v\d+$/g, '') + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("h3.novel-title > a").pathname.replace(this.endUrl, '');
                        return book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/novel/topwebnovelCom.js




class topwebnovelCom extends Parser {
    constructor() {
        super(new URL('https://topwebnovel.com'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search/?keyword=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("h3.novel-title > a").pathname.replace(this.endUrl, '');
                        return book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/allnovelfullCom.js




class allnovelfullCom extends p3 {
    constructor() {
        super(new URL('https://allnovelfull.com'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("h3.truyen-title > a").pathname.replace(this.endUrl, '');
                        return book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/allnovelOrg.js




class allnovelOrg extends p3 {
    constructor() {
        super(new URL('https://allnovel.org'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("h3.truyen-title > a").pathname.replace(this.endUrl, '');
                        return book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/novelfullCom.js




class novelfullCom extends p3 {
    constructor() {
        super(new URL('https://novelfull.com'), '.html', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "/chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("h3.truyen-title > a").pathname.replace(this.endUrl, '');
                        return book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/novelgreatNet.js




class novelgreatNet extends p4 {
    constructor() {
        super(new URL('https://novelgreat.net'), '', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search?keyword=' + title;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = this.site.origin + book.querySelector("h3.truyen-title > a").pathname;
                        return book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/1stkissnovelLove.js




class oneStkissnovelLove extends Parser {
    constructor() {
        super(new URL('https://1stkissnovel.love'), '/', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title + '&post_type=wp-manga';

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("div.post-title > h3 > a").href;
                        return book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/latestnovelNet.js




class latestnovelNet extends Parser {
    constructor() {
        super(new URL('https://latestnovel.net'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + 'chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title.replace(':', '') + '&post_type=wp-manga';

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("div.post-title > h3 > a").href;
                        return book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/lightnovelMobi.js




class lightnovelMobi extends Parser {
    constructor() {
        super(new URL('https://lightnovel.mobi'), '/', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title + '&post_type=wp-manga';

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("div.post-title > h3 > a").href;
                        return book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/novelteamNet.js




class novelteamNet extends Parser {
    constructor() {
        super(new URL('https://novelteam.net'), '/', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + 'chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title + '&post_type=wp-manga';

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("div.post-title > h3 > a").href;
                        return book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/noveltrenchCom.js




class noveltrenchCom extends Parser {
    constructor() {
        super(new URL('https://noveltrench.com'), '/', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + 'chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title + '&post_type=wp-manga';

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("div.post-title > h3 > a").href;
                        return book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/readnovelsOrg.js




class readnovelsOrg extends Parser {
    constructor() {
        super(new URL('https://readnovels.org'), '/', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + 'chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title + '&post_type=wp-manga';

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("div.post-title > h3 > a").href;
                        return book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/webnovelonlineNet.js




class webnovelonlineNet extends Parser {
    constructor() {
        super(new URL('https://webnovelonline.net'), '/', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + "chapter-" + _chapterN + "-" + domain_ReplaceName(_chapterTitle) + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/?s=' + title + '&post_type=wp-manga';

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    return "B0";
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(title, titleParser);

                    if (diff > 0.8) {
                        this.site = book.querySelector("div.post-title > h3 > a").href;
                        return book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    }
                }

                return "S0";
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/ReplaceTitle/readlightnovelMe.js



class readlightnovelMe extends Parser {
    constructor() {
        super(new URL('https://www.readlightnovel.me'), '', true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.origin + "/" + domain_ReplaceName(_book) + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/" + domain_ReplaceName(title) + this.endUrl;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                return data.querySelector("div.novel-detail-item[style='display:flex;'] > div.novel-detail-body > ul > li:first-child > a").textContent.match(/\D*(\d+)/)[1];
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/ReplaceTitle/lightnovelEWcom/lightnovelpubCom.js



class lightnovelpubCom extends Parser {
    constructor() {
        super(new URL('https://www.lightnovelpub.com'), '', true)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.origin + "/novel/" + domain_ReplaceName(_book) + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/novel/" + domain_ReplaceName(title) + this.endUrl;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                return data.querySelector("#novel > div.novel-body.container > nav > a.grdbtn.chapter-latest-container > div > p.latest.text1row").textContent.match(/\D*(\d+)/)[1];
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/ReplaceTitle/lightnovelEWcom/lightnovelworldCom.js



class lightnovelworldCom extends Parser {
    constructor() {
        super(new URL('https://www.lightnovelworld.com'), '',true);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site.origin + "/novel/" + domain_ReplaceName(_book) + '/chapter-' + _chapterN + this.endUrl);
    }

    async totalChapters(title) {
        let url = this.site.origin + "/novel/" + domain_ReplaceName(title) + this.endUrl;

        return await gmfetch(url)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                return data.querySelector("#novel > div.novel-body.container > nav > a.grdbtn.chapter-latest-container > div > p.latest.text1row").textContent.match(/\D*(\d+)/)[1];
            })
            .catch(err => domain_fetchCatch(err, url));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/search/fastnovelNet.js


class fastnovelNet extends Parser {
    constructor() {
        super(new URL('https://fastnovel.net/search/'), '', false)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book + this.endUrl);
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/search/lightnovelplusCom.js


class lightnovelplusCom extends p4 {
    constructor() {
        super(new URL('https://lightnovelplus.com/book/search.html?keyword='), '', false)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book + this.endUrl);
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/search/novelgateNet.js


class novelgateNet extends p4 {
    constructor() {
        super(new URL('https://novelgate.net/search/'), '', false)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book + this.endUrl);
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/search/ranobesNet.js


class ranobesNet extends p4 {
    constructor() {
        super(new URL('https://ranobes.net/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story='), '', false)
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book + this.endUrl);
    }
}
;// CONCATENATED MODULE: ./src/WebnovelCom_Crawler.js
﻿// ==UserScript==
// @name        WebnovelCom - Crawler
// @namespace   NovelScripts
// @icon        https://github.com/NayGit/NovelScripts/raw/master/icon.png
// @supportURL  https://github.com/NayGit/NovelScripts/issues
// @author      Nay
// @match       https://*.webnovel.com/book/*/*
// @grant       GM_xmlhttpRequest
// @grant       GM.xmlHttpRequest
// @require     https://raw.githubusercontent.com/maple3142/gmxhr-fetch/master/gmxhr-fetch.min.js
// @version     0.2.4
// ==/UserScript==









// 2fetch/apiSearch
//    artBook





// 2fetch/apiSearchChapter

//    bookWings






// 2fetch/htmlSearch


// 2fetch/htmlSearchChapter



//    POST


// apiSearch


// apiSearchChapter


// htmlSearch





// htmlSearchChapter

//    madentertainment




//    truyenNovel/novel




//    truyenNovel/truyen




//    wpManga
 // 1stkissnovelLove







// ReplaceTitle

//    lightnovelEWcom



// search





const SitesAll = [
    [
        new fastnovelNet(),
        new lightnovelplusCom(),
        new novelgateNet(),
        new ranobesNet(),
    ],
    [
        new novelgreatNet(),
    ],
    [
        // 2fetch/apiSearch
        //    artBook
        new mWuxiaworldCo(),
        new novelupdatesCc(),
        new readlightnovelCc(),
        new readlightnovelCo(),

        // 2fetch/apiSearchChapter
        new lightnovelreaderOrg(),
        //    bookWings
        new ltnovelCom(),
        new novelmtCom(),
        new readwnCom(),
        new wuxiahereCom(),
        new wuxiapubCom(),

        // 2fetch/htmlSearch
        new mMylovenovelCom(),

        // 2fetch/htmlSearchChapter
        new freewebnovelCom(),
        new novelfullvipCom(),
        new novelscafeCom(),
        //    POST
        new novelsonlineNet(),


        // apiSearch
        new lightnovelsMe(),

        // apiSearchChapter
        new webnovelonlineCom(),

        // htmlSearch
        new lightnovelWorld(),
        new novelhallCom(),
        new pandanovelCom(),
        new readlightnovelsNet(),

        // htmlSearchChapter
        new octopiiCo(),

        //    madentertainment
        new madnovelCom(),
        new novelbuddyCom(),
        new novelforestCom(),
        new novelfullMe(),

        //    truyenNovel/novel
        new boxnovelOrg(),
        new novelfullplusCom(),
        new readnovelfullCom(),
        new topwebnovelCom(),

        //    truyenNovel/truyen
        new allnovelfullCom(),
        new allnovelOrg(),
        new novelfullCom(),
    //new novelgreatNet(),

        //    wpManga
        new oneStkissnovelLove(),
        new latestnovelNet(),
        new lightnovelMobi(),
        new novelteamNet(),
        new noveltrenchCom(),
        new readnovelsOrg(),
        new webnovelonlineNet(),

        // ReplaceTitle
        new readlightnovelMe(),

        //    lightnovelEWcom
        new lightnovelpubCom(),
        new lightnovelworldCom(),
    ]
];

(async function () {
    'use strict';

    const Loc = location;

    const BookInfo = await downloadBookIfno(Loc);
    console.log(BookInfo);

    const BookTitle = BookInfo.data.bookInfo.bookName;
    console.log(BookTitle);

    const BookChapters = getCatalog(BookInfo, Loc);
    console.log(BookChapters);

    if (Loc.href.indexOf('webnovel.com/') != -1) {
        console.log('webnovel.com');

        if (Loc.href.indexOf('webnovel.com/book/') != -1 && Loc.pathname.split('/').length == 4) {
            var d = DivPanel();

            if (Loc.href.endsWith('/catalog')) {
                console.log('*/book/*/catalog');
            }

            else {
                console.log('*/book/*/*?from=detail');

                d.append(InputDivPanelHide());
                d.append(InputBookInfo(Loc));

                if (BookChapters.length === 0) {
                    document.getElementsByTagName("body")[0].append(d);
                    return;
                }

                d.append(InputChapterNext(Loc, BookChapters));

                let isPriv = false;
                let chNum = 0;
                if (BookChapters[0][5] == 0) {
                    isPriv = false;

                    for (let cN in BookChapters) {
                        if (BookChapters[cN][5] > 0) {
                            chNum = cN * 1 - 1;
                            break;
                        }
                    }
                    if (chNum == 0) {
                        chNum = BookChapters.length - 1;
                    }
                }
                else {
                    isPriv = true;
                    chNum = BookChapters.length - 1;
                }

                // Fix Del
                isPriv = false;

                d.append(H1IdGlava(BookChapters[0][0], BookChapters[chNum][0]));
                d.append(FormMain(SitesAll, chNum, BookTitle, BookChapters[0][0], BookChapters[0][2]));
                d.append(DivInputCheck());
                d.append(InputSecond(1));
                document.getElementsByTagName("body")[0].append(d);

                FormAddInputRadio(SitesAll, 0, isPriv);
                await CheckFreeForm(SitesAll, 0, BookTitle, BookChapters[0][0], BookChapters[0][2]);

                document.querySelector("#InputSecond").addEventListener('click', async function () {
                    let parsing = this.value.match(/\D*(\d+)/)[1] * 1;

                    FormAddInputRadio(SitesAll, parsing, isPriv);
                    await CheckFreeForm(SitesAll, parsing, BookTitle, BookChapters[0][0], BookChapters[0][2]);

                    parsing++;

                    this.value = this.value.replace(/\d+/gi, parsing);

                    if (parsing >= SitesAll.length) {
                        this.hidden = true;
                    }
                });
            }
        }
    }

    else if (Loc.href.indexOf('translate.goog/') != -1) {
        document.getElementById("gt-nvframe").hidden = true;

        var s = Object.assign(document.createElement("input"), {
            type: "button",
            id: "showHide",
            value: 'ShowHide'
        });
        s.addEventListener('click', function () {
            document.getElementById("gt-nvframe").hidden = document.getElementById("gt-nvframe").hidden ? false : true;
        });

        var referenceNode = document.getElementById("gt-nvframe");
        referenceNode.parentNode.insertBefore(s, referenceNode.nextSibling); //jQuery insertAfter
    }
})();
})();

/******/ })()
;