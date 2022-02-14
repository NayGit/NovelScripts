/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 82:
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
___CSS_LOADER_EXPORT___.push([module.id, "#divMain {\n    width: 100%;\n    margin-top: 100px;\n    margin-left: auto;\n    margin-right: auto;\n    box-sizing: border-box;\n}\n\n#divBook {\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 14px;\n    padding-right: 14px;\n    list-style: none;\n    box-sizing: border-box;\n}\n\n.globalTag {\n    padding: 0;\n    padding-top: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    margin: 0;\n    color: rgba(18,18,23,.9);\n    font: inherit;\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 2rem;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    text-transform: capitalize;\n    box-sizing: border-box;\n}\n\n.navButton {\n    box-shadow: inset 0 -1px 0 rgb(18 18 23 / 10%);\n    text-align: center;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 0.3rem 0.5rem;\n}\n\n.newButton {\n    padding: 1px 6px;\n    border-width: 2px;\n    border-style: outset;\n    border-image: initial;\n    border-radius: 2px 2px 0 0;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    text-decoration: none;\n    justify-content: center;\n    flex: 1 1;\n    min-width: 0;\n    display: flex;\n    align-items: center;\n    font: inherit;\n    box-sizing: border-box;\n    background: lightgray;\n}\n\n.chapter {\n    display: list-item;\n    font-size: 0;\n    margin: 0.15rem -0.75rem;\n    box-sizing: border-box;\n}\n\n.chapterLeft, .chapterRight {\n    display: inline-block;\n    width: 25%;\n    vertical-align: top;\n    box-sizing: border-box;\n}\n\n.chapterLeftImg {\n    position: relative;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    aspect-ratio: auto 96 / 128;\n    border-radius: 0.25rem;\n    box-sizing: border-box;\n}\n\n.chapterRight {\n    width: 75%;\n    padding-left: 0.475rem;\n}\n\n.chapterRightTags {\n    margin-bottom: 0.25rem;\n    font-size: 0;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    box-sizing: border-box;\n}\n\n.chapterRightTag {\n    display: inline-block;\n    color: #3b66f5;\n    font-size: .75rem;\n    font-weight: 500;\n    line-height: 1rem;\n    margin-right: 0.5rem;\n    text-transform: uppercase;\n    box-sizing: border-box;\n}\n\n.chapterRightTitle {\n    width: 100%;\n    margin: 0;\n    margin-bottom: 0.25rem;\n    font-size: .875rem;\n    line-height: 1.125rem;\n    letter-spacing: .1px;\n    font-weight: 500;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    color: rgba(18,18,23,.9);\n    box-sizing: border-box;\n}\n\n.chapterRightDesc {\n    margin: 0;\n    max-height: 5rem;\n    overflow: hidden;\n    line-height: 1rem;\n    font-size: .85rem;\n    box-sizing: border-box;\n}\n\n.chapterRightOther {\n    color: #000;\n    line-height: 1.25rem;\n    font-size: .75rem;\n    padding-right: 1rem;\n    display: inline-block;\n    box-sizing: border-box;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n\n@media (min-width: 980px) {\n    #divMain {\n        width: 1050px;\n        margin-top: 0;\n        box-sizing: border-box;\n    }\n\n    #divBook {\n    }\n\n    .chapter {\n        width: 490px;\n        display: inline-block;\n        box-sizing: border-box;\n        padding: 0.75rem 1.625rem;\n        margin: 0 -1rem;\n    }\n\n    .chapterLeft {\n        height: 186px;\n        width: 31%;\n        box-sizing: border-box;\n    }\n\n    .chapterLeftImg {\n        aspect-ratio: auto 140 / 186;\n        box-sizing: border-box;\n    }\n\n    .chapterRight {\n        width: 69%;\n        box-sizing: border-box;\n    }\n\n    .chapterRightTag {\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: inline-block;\n        height: 18px;\n        line-height: 18px;\n        border: 1px solid;\n        color: #4c5fe2;\n        font-size: 12px;\n        padding: 0 0.8em;\n        border-radius: 30px;\n        margin-right: 8px;\n        vertical-align: middle;\n        transition: .2s;\n        margin-bottom: 2px;\n        cursor: pointer;\n        box-sizing: border-box;\n    }\n\n    .chapterRightTitle {\n        max-height: 48px;\n        -webkit-line-clamp: 2;\n        display: -webkit-box;\n        overflow: hidden;\n        word-wrap: break-word;\n        -webkit-box-orient: vertical;\n        line-height: 24px;\n        font-size: 20px;\n        padding-top: 4px;\n        margin-bottom: 8px;\n        font-weight: 700;\n        margin: 0;\n        padding: 0;\n        margin-block-start: 1em;\n        margin-block-end: 1em;\n        margin-inline-start: 0px;\n        margin-inline-end: 0px;\n        color: #000;\n        cursor: pointer;\n        box-sizing: border-box;\n    }\n\n    .chapterRightDesc {\n        color: #000;\n        font-size: 16px;\n        line-height: 1.5;\n        display: block;\n        max-height: 4.5em;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n        box-sizing: border-box;\n    }\n\n    .chapterRightOther {\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        max-width: 10em;\n        margin-left: 4px;\n        line-height: 16px;\n        color: rgba(18,18,23,.9);\n        font-size: 14px;\n        box-sizing: border-box;\n    }\n}\n", ""]);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/webnovelTag.css
var webnovelTag = __webpack_require__(82);
;// CONCATENATED MODULE: ./src/css/webnovelTag.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(webnovelTag/* default */.Z, options);




       /* harmony default export */ const css_webnovelTag = (webnovelTag/* default */.Z && webnovelTag/* default.locals */.Z.locals ? webnovelTag/* default.locals */.Z.locals : undefined);

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
        .catch(err => fetchCatch(err, url));
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

function domain_fetchStatusJSON(response) {
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

function ReplaceName(name) {
    return name.toLowerCase().replaceAll(' ', '-').replaceAll(/[.?!)(,:']/g, '');
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
;// CONCATENATED MODULE: ./src/js/webnovel/tag.js
function ceTagId(_tagName, _id) {
    return Object.assign(document.createElement(_tagName), {
        id: _id
    });
}

function ceNav(_obj) {
    let nav = Object.assign(document.createElement("nav"), {
        className: "navButton"
    });

    for (let ce of _obj)
        nav.append(ce);

    return nav;
}

function ceInputButton(_value) {
    return Object.assign(document.createElement("input"), {
        className: "newButton",
        type: "button",
        value: _value
    });
}

function ceInputNumber(_id, _value) {
    return Object.assign(document.createElement("input"), {
        id: _id,
        className: "newButton",
        type: "number",
        min: "1",
        value: _value
    });
}

function ceInputCheckbox(_id) {
    return Object.assign(document.createElement("input"), {
        id: _id,
        className: "newButton",
        type: "checkbox",
        checked: false
    });
}
;// CONCATENATED MODULE: ./src/WebnovelCom_Tag.js
// ==UserScript==
// @name        WebnovelCom - Tag
// @namespace   NovelScripts
// @icon        https://github.com/NayGit/NovelScripts/raw/master/icon.png
// @supportURL  https://github.com/NayGit/NovelScripts/issues
// @author      Nay
// @include     https://*.webnovel.com/tags/*
// @grant       none
// @version     0.1
// ==/UserScript==







async function StartCreate() {
    await new Promise(r => setTimeout(r, 2500));

    
    if (location.host === "m.webnovel.com") {
        // m
        document.querySelector("#qd-report-root > div:nth-child(3)").style.visibility = "hidden";
    }
    else {
        // www
        document.querySelector("body > div.page > div.lst-hd.g_sub_hd").style.visibility = "hidden";
        document.querySelector("body > div.page > div.j_bookList.lis-mn").style.visibility = "hidden";
    }


    var h2Tag = Object.assign(document.createElement("h2"), {
        className: "globalTag",
        textContent: _GlobalTag
    });



    var inN = ceInputButton("Novel");
    inN.addEventListener('click', async function () {
        _GlobalType = 1;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });

    var inF = ceInputButton("Fan-fic");
    inF.addEventListener('click', async function () {
        _GlobalType = 4;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });

    var inSortP = ceInputButton("Popular");
    inSortP.addEventListener('click', async function () {
        _GlobalOrder = 1;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });

    var inSortU = ceInputButton("Updated");
    inSortU.addEventListener('click', async function () {
        _GlobalOrder = 2;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });

    var inSortC = ceInputButton("Collection");
    inSortC.addEventListener('click', async function () {
        _GlobalOrder = 3;
        _GlobalNumber = 1;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
    });



    var inNumberGo = ceInputButton("Go");
    inNumberGo.addEventListener('click', async function () {
        _GlobalNumber = document.getElementById("inNumber").value;
        await UpdateBook();
        document.querySelector("body").scrollIntoView(); // {behavior: "smooth"}
    });



    var inNumPrev = ceInputButton("Prev");
    inNumPrev.addEventListener('click', async function () {
        if (_GlobalNumber > 1) {
            _GlobalNumber--;
            document.getElementById("inNumber").value = _GlobalNumber;
            await UpdateBook();
            document.querySelector("body").scrollIntoView(); // {behavior: "smooth"}
        }
    });

    var inNumNext = ceInputButton("Next");
    inNumNext.addEventListener('click', async function () {
        _GlobalNumber++;
        document.getElementById("inNumber").value = _GlobalNumber;
        await UpdateBook();
        document.querySelector("body").scrollIntoView(); // {behavior: "smooth"}
    });



    var divMain = ceTagId("div", "divMain");
    divMain.append(
        ceNav([
            h2Tag,
            ceInputCheckbox("InputCheck"),
            ceInputNumber("InputCheckMin", "100")
        ]),
        ceNav([
            inN,
            inF
        ]),
        ceNav([
            inSortP,
            inSortU,
            inSortC
        ]),
        ceTagId("ul", "divBook"),
        ceNav([
            ceInputNumber("inNumber", 1),
            inNumberGo
        ]),
        ceNav([
            inNumPrev,
            inNumNext
        ])
    );

    if (location.host === "m.webnovel.com") {
        // m
        let referenceNode = document.querySelector("#qd-report-root > header")
        referenceNode.parentNode.insertBefore(divMain, referenceNode.nextSibling);
    }
    else {
        // www
        let referenceNode = document.querySelector("body > div.page > div.g_header_ph")
        referenceNode.parentNode.insertBefore(divMain, referenceNode.nextSibling);
    }
}

async function downloadList(_csrfToken, type, order, pageIndex, tagName) {
    let url = location.origin + '/go/pcm/seo/getTagBookList?_csrfToken=' + _csrfToken + '&type=' + type + '&order=' + order + '&pageIndex=' + pageIndex + '&tagName=' + tagName; //r18

    let bodyJson = "";
    await fetch(url)
        .then(res => domain_fetchStatusJSON(res))
        .then(data => {
            bodyJson = data.data.items;
        })
        .catch(err => domain_fetchCatch(err, url));

    return bodyJson;
}

function ListLeft(book) {
    let linkB = Object.assign(document.createElement("a"), {
        className: "chapterLeft",
        href: "/book/" + book.bookId,
        target: "_blank"
    });

    let imgB = Object.assign(document.createElement("img"), {
        className: "chapterLeftImg",
        src: "//img.webnovel.com/bookcover/" + book.bookId + "/180/180.jpg?imageMogr2/format/webp"
    });

    linkB.append(imgB);

    return linkB;
}

function ListRight(book) {
    let divR = Object.assign(document.createElement("div"), {
        className: "chapterRight"
    });

    var divTag = Object.assign(document.createElement("div"), {
        className: "chapterRightTags"
    });

    console.log(book.tagInfo);

    for (let t of book.tagInfo) {
        let linkT = Object.assign(document.createElement("a"), {
            className: "chapterRightTag",
            href: "/tags/" + t.tagName + "-novel",
            textContent: "#" + t.tagName
        });

        divTag.append(linkT);
    }

    divR.append(divTag);


    let h3Title = Object.assign(document.createElement("h3"), {
        className: "chapterRightTitle",
        textContent: book.bookName
    });

    divR.append(h3Title);


    let pDescr = Object.assign(document.createElement("p"), {
        className: "chapterRightDesc",
        textContent: book.description
    });

    divR.append(pDescr);


    let divOther = document.createElement("div");

    let divStar = Object.assign(document.createElement("div"), {
        className: "chapterRightOther",
        textContent: "? " + book.totalScore
    });

    let divChapter = Object.assign(document.createElement("div"), {
        className: "chapterRightOther",
        textContent: book.chapterNum
    });

    divOther.append(divStar);
    divOther.append(divChapter);
    divR.append(divOther);

    return divR;
}

async function UpdateBook() {
    var divClear = document.getElementById('divBook');
    while (divClear.firstChild) {
        divClear.removeChild(divClear.firstChild);
    }

    var bList = await downloadList(_GlobalToken, _GlobalType, _GlobalOrder, _GlobalNumber, _GlobalTag);
    console.log(bList);

    let inputCheck = document.querySelector("#InputCheck").checked;
    let inputCheckMin = document.querySelector("#InputCheckMin").value * 1;

    for (let book of bList) {
        if (!inputCheck || (inputCheck && book.chapterNum * 1 >= inputCheckMin)) {
            var li = Object.assign(document.createElement("li"), {
                className: "chapter"
            });
            li.append(ListLeft(book));
            li.append(ListRight(book));

            document.getElementById("divBook").append(li);
        }
    }
}

var _GlobalToken;
var _GlobalType;
var _GlobalOrder;
var _GlobalNumber;
var _GlobalTag;

(async function () {
    'use strict';

    _GlobalToken = getCookie("_csrfToken");
    console.log(_GlobalToken);

    _GlobalTag = location.pathname.replace("/tags/", "").split('-')[0];
    console.log(_GlobalTag);

    _GlobalType = 1;
    _GlobalOrder = 2;
    _GlobalNumber = 1;

    await StartCreate();

    await UpdateBook();
})();


})();

/******/ })()
;