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
___CSS_LOADER_EXPORT___.push([module.id, "#idGlava {\r\n    background: lightgray;\r\n}\r\n/*#divPanel { position: fixed; top: 0; right: 0; z-index: 999999; max-width: 450px; }*/\r\ninput.iMain {\r\n    height: 100px;\r\n    width: 100%;\r\n    background: black;\r\n    color: gray;\r\n    margin: 1px;\r\n}\r\n#divPanel input[type=radio] { height:35px; width:35px; vertical-align: middle; background: black; color: gray }\r\n#divPanel input[type=submit] { height: 50px; width: 100%; background: black; color: gray }\r\n#showHide { z-index: -999; height: 150px; width: 100%; background: black; color: gray; }\r\n.tcError, .tcUp, .tcDown {\r\n    height: 35px;\r\n    width: auto;\r\n    min-width: 25px;\r\n    margin: 3px;\r\n}\r\ninput.tcError {\r\n    background: red;\r\n}\r\ninput.tcUp {\r\n    background: lime;\r\n}\r\ninput.tcDown {\r\n    background: orange;\r\n}", ""]);
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
    return name.toLowerCase().replaceAll(' ', '-').replaceAll(/"/g, 'quot').replaceAll(/[.?!)(,:'\[\]]/g, '');
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

function GetChapterId(_bookInfo, _cId) {
    for (let volume of _bookInfo.data.volumeItems) {
        for (let chapter of volume.chapterItems) {
            if (chapter.chapterId === _cId) {
                return chapter;
            }
        }
    }
}

function GetChapterLevel(_bookInfo, _cLevel) {
    for (let volume of _bookInfo.data.volumeItems.reverse()) {
        for (let chapter of volume.chapterItems.reverse()) {
            if (chapter.chapterLevel === _cLevel) {
                return chapter;
            }
        }
    }
}
;// CONCATENATED MODULE: ./src/js/webnovel/ce/DivPanel.js
function DivPanel(_id, _class) {
    return Object.assign(document.createElement("div"), {
        id: _id,
        className: _class,
        translate: false
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

function InputBookInfo(_bId) {
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

function H1IdGlava(_chStart, _chLastLocked, _chStop) {
    let tmpText = "";
    if (_chStart == _chLastLocked && _chStart == _chStop) {
        tmpText = "last";
    }
    else if (_chStart == _chLastLocked || _chLastLocked == _chStop) {
        tmpText = _chStart + " / " + _chStop;
    }
    else {
        tmpText = _chStart + " / " + _chLastLocked + " / " + _chStop;
    }

    return Object.assign(document.createElement("h1"), {
        id: "idGlava",
        textContent: tmpText    
    });
}

function InputChapterNext(_bookInfo, _chN) {
    let InputChapterNext = Object.assign(document.createElement("input"), {
        id: "InputChapterNext",
        className: "iMain",
        type: "button",
        value: _chN
    });

    InputChapterNext.addEventListener('click', function () {
        let tmpV = Math.abs(this.value);

        for (let volume of _bookInfo.data.volumeItems) {
            for (let chapter of volume.chapterItems) {
                if (chapter.chapterIndex === tmpV) {
                    location.replace(location.origin + '/book/' + _bookInfo.data.bookInfo.bookId + '/' + chapter.chapterId);
                    return;
                }
            }
        }
    });

    return InputChapterNext;
}
;// CONCATENATED MODULE: ./src/js/parser.js




        //console.info(this.constructor.name);

class Parser {
    constructor(_site) {
        this.site = new URL(_site);
        this._siteSearch = "";
        this.bTitle = "";
    }

    set siteSearch(_newSiteSearch) {
        this._siteSearch = new URL(_newSiteSearch);
    }

    get siteSearch() {
        return this._siteSearch === "" ? this.site : this._siteSearch;
    }

    SetSiteSearch() {
        alert("�: " + this.bTitle);
    }

    linkSearch() {
        window.open(this.siteSearch);
    }




    linkRead(title, chInt) {
        //throw new UserException("Error");
        alert("��� ����� ��������");
    }

    async totalChapters(title) {
        //throw new UserException("Error");
        return -99999;
    }
}

class ParserSearch extends Parser {
    //constructor(_site) {
    //    super(_site);
    //}
}

class ParserBook extends Parser {
    constructor(_site) {
        super(_site);
        this.total = 0;
        this._siteBook = "";
    }

    set siteBook(_newSiteBook) {
        this._siteBook = new URL(_newSiteBook);
    }

    get siteBook() {
        return this._siteBook === "" ? this.site : this._siteBook;
    }

    linkBook() {
        window.open(this.siteBook);
    }
}

class ParserChapter extends ParserBook {
    constructor(_site) {
        super(_site);
        this.endUrl = "";
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

class p3 extends (/* unused pure expression or super */ null && (Parser)) {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + ReplaceName(_book) + "/chapter-" + _chapterN + "-" + ReplaceName(_chapterTitle) + this.endUrl);
    }
}

class p4 extends (/* unused pure expression or super */ null && (Parser)) {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site + _book.toLowerCase().replaceAll(' ', '+') + this.endUrl);
    }
}

class artBook extends (/* unused pure expression or super */ null && (Parser)) {
    linkRead(_book, _chapterN, _chapterTitle) {
        window.open(this.site);
    }

    async totalChapters(title) {
        let url = this.site.origin + '/search/' + title + this.endUrl;

        let isLucky = false;
        var isError = '';
        await gmfetch(url)
            .then(res => fetchStatusHTML(res))
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
            .catch(err => isError = fetchCatch(err, url));

        if (isError != '') {
            return isError;
        }

        if (isLucky) {
            return await gmfetch(this.site)
                .then(res => fetchStatusHTML(res))
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
                .catch(err => fetchCatch(err, url));
        }

        return "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/webnovel/ce/FreeForm.js



function CreateTableSites(_sites, _bookInfo) {
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
;// CONCATENATED MODULE: ./src/js/ReplaceText.js


async function GetChapter(_url, _cId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'GET',
            url: _url,
            //anonymous: true,
            type: 'document',
            //headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36' },
            onload: function (data) {
                // User-Agent: Mobile
                let bodyText = data.response;

                let parser = new DOMParser();
                let bodyHtml = parser.parseFromString(bodyText, 'text/html');

                let pOrig = bodyHtml.querySelectorAll("#content-" + _cId + " > p");

                if (pOrig.length > 0) {
                    let pTmp = [];
                    for (let c of pOrig) {
                        pTmp.push(c.innerText);
                    }
                    resolve(pTmp);
                }
                else {
                    // User-Agent: ---> PC
                    let str = data.responseText.match(/chapInfo.*?({.*?});/);

                    if (str) {
                        str = str[1].replaceAll(/\\([<> '&])/g, "$1");
                        //console.log(str);

                        let json = JSON.parse(str);
                        //console.log(json);

                        let pTmp = [];
                        for (let c of json.chapterInfo.contents) {
                            pTmp.push(c.content.replaceAll(/<[/]?p>/g, ""));
                        }
                        resolve(pTmp);
                    }
                    else {
                        resolve("Error");
                    }
                }

            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

async function ReplaceText(_bId, _cId) {
    let contentCheck = document.querySelector("#content-" + _cId);
    if (contentCheck.querySelector("pre")) {
        return;
    }

    // ����������
    let pOrder = contentCheck.querySelectorAll("p._cfcmp");
    if (pOrder.length > 0) {
        
        let pre = document.createElement('pre');
        contentCheck.appendChild(pre);

        for (let i = 0; i < pOrder.length; i++) {
            let str = "";
            [].slice.call(pOrder[i].children).sort(function (a, b) {
                if (getComputedStyle(a).order * 1 > getComputedStyle(b).order * 1) {
                    return 1;
                }
                if (getComputedStyle(a).order * 1 < getComputedStyle(b).order * 1) {
                    return -1;
                }
                // a ������ ���� ������ b
                return 0;
            })
                .forEach(function (val) {
                    str = str + val.innerText;
                });

            pOrder[i].innerText = str;
        }

        let p2 = await GetChapter("https://m-webnovel-com.translate.goog/book/" + _bId + "/" + _cId + "?_x_tr_sl=en&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp");
        //let p2 = await GetChapter("https://m-webnovel-com.translate.goog" + new URL(_loc).pathname + "?_x_tr_sl=en&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp", _gWN);
        //let p2 = await GetChapter(_loc, _gWN);
        if (p2.length > 0) {
            var dict = {};
            let pReplace = document.querySelectorAll("#content-" + _cId + " > p");

            for (let i = 0; i < p2.length; i++) {
                let p2Array = p2[i].split('');
                let contentChArray = pReplace[i].innerText.split('');

                for (let prop in contentChArray) {
                    dict[contentChArray[prop]] = p2Array[prop];
                }
            }

            for (let i = 0; i < pReplace.length; i++) {
                let str = "";
                pReplace[i].innerText.split('').forEach(element => {
                    if (dict[element] !== undefined) {
                        str = str + dict[element];
                    }
                    else {
                        str = str + element;
                    }
                });

                pReplace[i].innerText = str;
            }
        }
    }
    else {
        alert("Chapter: LOCKED")
        return -1;
    }
}
;// CONCATENATED MODULE: ./src/js/StringProcent/tanimoto.js
function tanimoto_tanimoto(s1, s2) {
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
;// CONCATENATED MODULE: ./src/js/GetText.js


async function GetBooks(_title) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'POST',
            url: "https://open.lightnovelplus.com/book/search",
            anonymous: true,
            type: 'json',
            headers: { 'User-Agent': 'okhttp/4.9.1' },
            data: JSON.stringify({ "packageName": "com.lightnovelplus.webnovel", "marketChannel": "none", "page_num": "1", "sysVer": "5.1.1", "osType": "2", "keyword": _title, "language": "en", "ver": "2.1.7", "product": "1" }),
            onload: function (data) {
                console.log(data);

                let json = JSON.parse(data.responseText);
                console.log(json);

                resolve(json);

            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

async function GetCatalog(_bId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'POST',
            url: "https://open.lightnovelplus.com/chapter/catalog",
            anonymous: true,
            type: 'json',
            headers: { 'User-Agent': 'okhttp/4.9.1' },
            data: JSON.stringify({ "sysVer": "5.1.1", "book_id": _bId, "packageName": "com.lightnovelplus.webnovel", "osType": "2", "marketChannel": "none", "language": "en", "ver": "2.1.7", "product": "1" }),
            onload: function (data) {
                console.log(data);

                let json = JSON.parse(data.responseText);
                console.log(json);

                resolve(json);

            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

async function GetText_GetChapter(_bId, _chId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'GET',
            url: "https://img.suv666.com/20170612/nof/" + _bId + "/" + md5(_bId + "-" + _chId).toLowerCase() + ".json",
            anonymous: true,
            type: 'json',
            headers: { 'User-Agent': 'okhttp/4.9.1' },
            onload: function (data) {
                console.log(data);

                let json = JSON.parse(data.responseText);
                console.log(json);

                resolve(json);

            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

function md5(d) { return rstr2hex(binl2rstr(binl_md5(rstr2binl(d), 8 * d.length))) } function rstr2hex(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function rstr2binl(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function binl2rstr(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function binl_md5(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }

var BookId;
var ChapterListReverse = "";

async function GetText(_bId, _cId, _bTitle, _cTitle) {
    'use strict';

    if (!document.querySelector("#content-" + _cId + " ~ div > .styles_locked_area__Luqxf")) {
        return;
    }


    BookId = localStorage.getItem("ln_" + _bId);
    if (!BookId) {
        let jsonBooks = await GetBooks(_bTitle);

        for (let book of jsonBooks.data.list) {

            let titleParser = book.name;

            let diff = tanimoto_tanimoto(_bTitle, titleParser);

            if (diff > 0.9) {
                BookId = book.book_id;
                localStorage.setItem("ln_" + _bId, BookId);
                break;
            }
        }

        if (!BookId) {
            alert("Error: BookId");
            return;
        }
    }

    if (ChapterListReverse === "") {
        let jsonCatalog = await GetCatalog(BookId);
        ChapterListReverse = jsonCatalog.data.chapter_list.reverse();
        alert("Rev");
    }


    let content = document.querySelector("#content-" + _cId);

    if (content.querySelector("pre")) {
        return;
    }

    let tmpP = content.querySelectorAll("p");
    for (let i = 0, p; p = tmpP[i]; i++) {
        if (i === 0) {
            continue;
        }
        p.parentNode.removeChild(p);
    }

    let jsonChapter = "";
    for (let catalog of ChapterListReverse) {
        if (catalog.chapter_title === _cTitle) {
            jsonChapter = await GetText_GetChapter(catalog.book_id, catalog.chapter_id);
            break;
        }
    }

    if (jsonChapter !== "") {
        content.style.height = "auto";
        content.style.position = "inherit";

        let pre = document.createElement('pre');
        pre.innerHTML = jsonChapter.data.content;

        content.appendChild(pre);
    }
    else {
        alert("Error: No chapter");
        return -1;
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/search/lightnovelplusCom.js




class lightnovelplusCom extends ParserSearch {
    constructor() {
        super('https://lightnovelplus.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/book/search.html?keyword=' + this.bTitle;
    }

    linkSearch() {
        this.Open();
    }

    async Open() {
        this.site = this.siteSearch;

        let isLucky = false;
        var isError = '';
        await gmfetch(this.site.href)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#list-page > div.col-xs-12.col-sm-12.col-md-9.col-truyen-main_1.archive > div > div.row");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto_tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.site = new URL(this.site.origin + book.querySelector("h3.truyen-title > a").pathname);
                        isLucky = true;
                        break;
                    }
                }

                return;
            })
            .catch(err => isError = domain_fetchCatch(err, this.site.href));

        if (isError != '') {
            console.error(isError);
            window.open(this.site);
            return;
        }

        if (isLucky) {
            isLucky = false;
            await gmfetch(this.site.href)
                .then(res => domain_fetchStatusHTML(res))
                .then(data => {
                    this.site = new URL(this.site.origin + data.querySelector("#list-chapter > ul > li.last > a").pathname + data.querySelector("#list-chapter > ul > li.last > a").search);
                    isLucky = true;
                })
                .catch(err => isError = domain_fetchCatch(err, this.site.href));


            if (isError != '') {
                console.error(isError);
                window.open(this.site);
                return;
            }

            if (isLucky) {
                window.open(this.site);
                return;

                //return await gmfetch(this.site)
                //    .then(res => fetchStatusHTML(res))
                //    .then(data => {
                //        return data.querySelector("#list-chapter > div.row > div:nth-child(1) > ul:last-child- > li > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                //    })
                //    .catch(err => fetchCatch(err, this.site));
            }
        }

        window.open(this.site);
        return;
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/novelfullCom.js




class novelfullCom extends ParserChapter {
    constructor() {
        super('https://novelfull.com');
        this.endUrl = ".html";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cN, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + "/chapter-" + _cN + "-" + domain_ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await gmfetch(this.siteSearch.href)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto_tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.truyen-title > a").pathname;
                        this.total =  book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = domain_fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/novelgreatNet.js




class novelgreatNet extends ParserBook {
    constructor() {
        super('https://novelgreat.net');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    async totalChapters() {
        await gmfetch(this.siteSearch.href)
            .then(res => domain_fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto_tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.truyen-title > a").pathname;

                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = domain_fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/search/fastnovelNet.js


class fastnovelNet extends ParserSearch {
    constructor() {
        super('https://fastnovel.net/')
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/search/" + this.bTitle;
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/search/novelgateNet.js


class novelgateNet extends ParserSearch {
    constructor() {
        super('https://novelgate.net/')
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/search/" + this.bTitle;
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/search/ranobesNet.js


class ranobesNet extends ParserSearch {
    constructor() {
        super('https://ranobes.net/')
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=" + this.bTitle;
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
// @version     0.3.0
// ==/UserScript==












// 2fetch/apiSearch
//    artBook





// 2fetch/apiSearchChapter

//    bookWings






// 2fetch/htmlSearch


// 2fetch/htmlSearchChapter



//    POST


// 2fetch/search


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
        new lightnovelplusCom(),
    ],
    [
    ],
    [
    //    // 2fetch/apiSearch
    //    //    artBook
    //    new mWuxiaworldCo(),
    //    new novelupdatesCc(),
    //    new readlightnovelCc(),
    //    new readlightnovelCo(),

    //    // 2fetch/apiSearchChapter
    //    new lightnovelreaderOrg(),
    //    //    bookWings
    //    new ltnovelCom(),
    //    new novelmtCom(),
    //    new readwnCom(),
    //    new wuxiahereCom(),
    //    new wuxiapubCom(),

    //    // 2fetch/htmlSearch
    //    new mMylovenovelCom(),

    //    // 2fetch/htmlSearchChapter
    //    new freewebnovelCom(),
    //    new novelfullvipCom(),
    //    new novelscafeCom(),
    //    //    POST
    //    new novelsonlineNet(),

    //    // 2fetch/search
    ////new lightnovelplusCom(),

    //    // apiSearch
    //    new lightnovelsMe(),

    //    // apiSearchChapter
    //    new webnovelonlineCom(),

    //    // htmlSearch
    //    new lightnovelWorld(),
    //    new novelhallCom(),
    //    new pandanovelCom(),
    //    new readlightnovelsNet(),

    //    // htmlSearchChapter
    //    new octopiiCo(),
    //    //    madentertainment
    //    new madnovelCom(),
    //    new novelbuddyCom(),
    //    new novelforestCom(),
    //    new novelfullMe(),
    //    //    truyenNovel/novel
    //    new boxnovelOrg(),
    //    new novelfullplusCom(),
    //    new readnovelfullCom(),
    //    new topwebnovelCom(),
    //    //    truyenNovel/truyen
    //    new allnovelfullCom(),
    //    new allnovelOrg(),
        new novelfullCom(),
        new novelgreatNet(),
    //    //    wpManga
    //    new oneStkissnovelLove(),
    //    new latestnovelNet(),
    //    new lightnovelMobi(),
    //    new novelteamNet(),
    //    new noveltrenchCom(),
    //    new readnovelsOrg(),
    //    new webnovelonlineNet(),

    //    // ReplaceTitle
    //    new readlightnovelMe(),
    //    //    lightnovelEWcom
    //    new lightnovelpubCom(),
    //    new lightnovelworldCom(),

    //    // search
        new fastnovelNet(),
        new novelgateNet(),
        new ranobesNet(),
    ]
];

async function CreateDivMain(_cId) {
    let chapter = GetChapterId(BookInfo, _cId);

    let divMain = DivPanel(DivMain + "_" + _cId, DivMain);

    divMain.append(InputBookInfo(WebnovelCom_Crawler_BookId));

    if (_cId === BookInfo.data.lastChapterItem.chapterId) {
        let tmpH1 = document.createElement("h1");
        tmpH1.textContent = "The End";
        divMain.append(tmpH1);
        return divMain;
    }

    divMain.append(InputChapterNext(BookInfo, chapter.chapterIndex));
    
    divMain.append(H1IdGlava(chapter.chapterIndex, ChLastLocked, BookInfo.data.lastChapterItem.chapterIndex));

    let locked = Object.assign(document.createElement("input"), {
        className: "lockedButton",
        type: "button",
        value: "Parsing"
    });
    locked.addEventListener('click', async function () {
        let crawlerTable = document.querySelector("#crawlerId");
        if (crawlerTable !== null) {
            document.querySelector("#" + DivMain + "_" + _cId).appendChild(crawlerTable);
            crawlerTable.setAttribute("cId", _cId);
            crawlerTable.hidden = false;
        }
    });
    divMain.appendChild(locked);

    let unlocked = Object.assign(document.createElement("input"), {
        className: "unlockedButton",
        type: "button",
        value: "Replace"
    });
    unlocked.addEventListener('click', async function () {
        this.disabled = true;
        await ReplaceText(WebnovelCom_Crawler_BookId, _cId);
        this.hidden = true;
    });
    divMain.appendChild(unlocked);

    let getText = Object.assign(document.createElement("input"), {
        className: "getTextButton",
        type: "button",
        value: "GetText"
    });
    getText.addEventListener('click', async function () {
        this.disabled = true;
        await GetText(WebnovelCom_Crawler_BookId, _cId, BookTitle, chapter.chapterName);
        this.hidden = true;
    });
    divMain.appendChild(getText);

    if (document.querySelector("#crawlerId") === null) {
        let createTableSites = CreateTableSites(SitesAll, BookInfo);
        createTableSites.setAttribute("cId", _cId);
        divMain.appendChild(createTableSites);
    }

    return divMain;
}

var BookInfo;
var BookTitle;
var WebnovelCom_Crawler_BookId;

const DivMain = "divMain";
const StatusChapter = { LOCKED: 'locked', UNLOCKED: 'unlocked', PRIVATE: 'private' };
var ChLastLocked = "";


(async function () {
    'use strict';
    BookInfo = await downloadBookIfno(location);
    console.info(BookInfo);

    BookTitle = BookInfo.data.bookInfo.bookName;
    console.info(BookTitle);

    WebnovelCom_Crawler_BookId = BookInfo.data.bookInfo.bookId;
    console.info(WebnovelCom_Crawler_BookId);

    for (let sites of SitesAll) {
        for (let site of sites) {
            site.bTitle = BookTitle;
            site.SetSiteSearch();
        }
    }

    ChLastLocked = GetChapterLevel(BookInfo, 0).chapterIndex;

    while (true) {
        let contents = document.querySelectorAll("div.pr > div > div.styles_content__3tuD4");
        for (let c of contents) {
            let chapterId = c.id.match(/^content-(\d+)$/);
            if (chapterId && c.parentElement.querySelector("#" + DivMain + "_" + chapterId[1]) === null) {
                let divMain = await CreateDivMain(chapterId[1]);
                divMain.classList.add(StatusChapter.LOCKED);

                let contentTitle = c.parentElement.querySelector("div.ChapterTitle_chapter_title_container__Wq5T8");
                contentTitle.after(divMain);
            }
            else {
                console.warn("Copy");
            }
        }

        let contentsUnlocked = document.querySelectorAll("div.pr > div > div.styles_content__3tuD4:not(.styles_locked_content__16dUX)");
        if (contentsUnlocked.length > 0) {
            for (let c of contentsUnlocked) {
                let divMain = c.parentElement.querySelector("div." + DivMain + "." + StatusChapter.LOCKED);
                if (divMain !== null) {
                    divMain.classList.remove(StatusChapter.LOCKED);
                    divMain.classList.add(StatusChapter.UNLOCKED);
                }
            }
        }

        let contentsPrivate = document.querySelector("div.pr > div > div.styles_last_chapter_footer__SPOMm");
        if (contentsPrivate !== null && contentsPrivate.querySelector("div." + DivMain + "." + StatusChapter.PRIVATE) === null) {
            let divMain = await CreateDivMain(chapterId[1]);
            //let divMain = await CreateDivMain(BookInfo, "61829347492807077");
            divMain.classList.add(StatusChapter.PRIVATE);

            contentsPrivate.prepend(divMain);
        }

        await new Promise(r => setTimeout(r, 10000));
    }

    return;

    const Loc = location;
    
    if (Loc.href.indexOf('webnovel.com/') != -1) {
        console.log('webnovel.com');

        if (Loc.href.indexOf('webnovel.com/book/') != -1 && Loc.pathname.split('/').length == 4) {
            var d = DivPanel();

            if (Loc.href.endsWith('/catalog')) {
                console.log('*/book/*/catalog');
            }

            else {
               
            }
        }
    }
})();
})();

/******/ })()
;