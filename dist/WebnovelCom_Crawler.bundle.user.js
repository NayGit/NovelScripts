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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(121), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(244), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* https://icomoon.io/ --> IcoMoon - Free */\r\n/* to base64 */\r\n/* https://transfonter.org/ */\r\n@font-face {\r\n    font-family: 'icomoon';\r\n    src:\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n\r\ntd.search:before, td.read:before, td.parsing:before, .eye:before, .eye-hidden:before {\r\n    font-family: icomoon;\r\n    margin: 0px 5px;\r\n}\r\n\r\ntd.search:before {\r\n    content: \"\\e986\";\r\n}\r\n\r\ntd.read:before {\r\n    content: \"\\e926\";\r\n}\r\n\r\ntd.parsing:before {\r\n    content: \"\\e982\";\r\n}\r\n\r\n.eye:before {\r\n    content: \"\\e9ce\";\r\n}\r\n\r\n.eye-hidden:before {\r\n    content: \"\\e9d1\";\r\n}\r\n\r\n.eye, .eye-hidden {\r\n    text-align: center;\r\n}\r\n\r\ndiv.locked > div > input, div.unlocked > div > input, div.free > div > input, div.private > div > input {\r\n    background: black;\r\n    color: darkgray;\r\n}\r\n\r\ndiv.locked input.replace, div.free input.replace, div.private input.replace {\r\n    display: none;\r\n}\r\n\r\ndiv.free input.gettext, div.private input.gettext {\r\n    display: none;\r\n}\r\n\r\ndiv.HomeNextChapter, div.ParsingReplaceGetText {\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\ndiv.ParsingReplaceGetText {\r\n    justify-content: space-around;\r\n}\r\n\r\nh1.idGlava {\r\n    background: darkgray;\r\n    color: black;\r\n    /*background: lightgray;*/\r\n}\r\n\r\ninput.tcError, input.tcUp, input.tcDown {\r\n    width: 100%;\r\n}\r\n\r\ninput.tcError {\r\n    background: red;\r\n}\r\n\r\ninput.tcUp {\r\n    background: lime;\r\n}\r\n\r\ninput.tcDown {\r\n    background: orange;\r\n}\r\n\r\ntable.hTrue tr.tcHidden {\r\n    display: none;\r\n}", ""]);
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

/***/ 667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ }),

/***/ 121:
/***/ ((module) => {

module.exports = "data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAAUcAA0AAAAACuwAAATGAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCdhEICoo0iFALFgABNgIkAyAEIAWDGwdtGwkJyB6FcRvdpEplZf/kPh/+3fTPTdCkolQMakJFnIqlUHHbBpvDXAzYE/8SEYLqtvf3kxZ4gIHFTVQgRfKiCafURAHV/77+5CeOpX4lRaQlwRtFJi66MCJoexpGJO9GMB6NHwc8s61s+zHTdbFG5E0ACAD6vT4iAPh4b1m88tkEYAKQACgEIUbwABSAzvNkJfhAXdRTwArIhbyYQgxNExmwXwp8+Yq++X9SpJ0wAwisLUUANO90zq+GATQSz18eDmDBAg0gpI/3l3O/XPjl8y9f/Q8g9Z3/T/KJZL5EI4mTxICYykkEDaQDSArbFwBUjf8MeDQ5gvz0UIyTbQC2QG6AWtDNq2msvR8BCoXGT5LsKLI3O93d3c/ZWW7ixliauRH4O50+fNv/8HP/y+cZE+1VCNo11lx3g/A12+XKQ9ccGLLv2qR6LWOmXU+Emg2shtXpWB2B+hDLVphoDxPNEdZUdwjqg8pYwbSWe/tWpnBGlZHN6sr1+ijaK7/CG6JRGgwYmNBlB1RvKwUYbUaUaF77iZdoVWtPKw+ft7ljpJ1Mb6Z8LX6YsWjtNr/yQ/qAI4Yhbdxlg/w40QSfMMZfYXWxl/RBx6AOPPo25mJ3E5nil5y+5FVjldFY9kZlKH0t2srr6MobP33LaA2Flw3ylhU3bLDbuBVq+n762EusLv6KMfgE0Wx3XLfOlnDql+RNr4nmDat7Nb1ea8OdNzAdNzylL+DWqm3X7eMPPGA3vUEzoHvmwO2/XW9AQ38n6/2KLxvk/Zrtji37zvXrVXHMAMxg0X1v7tz8JhsKoV0ce3wguL1kY2BD9zL2B9l3sgYe+OmDBth35+dHtuXc3LzZZL6o2V64WPgpABuyKFgvU43xqam76ac7/r+p6tCIozaZE60Iad7srPbWyUsW+Vbdg2onVbJCadHAqEKWKytX5rnDAQOTbiXS4lrfcV+yUZdPjU+tVltLLoRgL1o9DEkqv2fS/h92hczJLnbJcMns6MhEX3FxYHWhbS70oOK8Xyh7Toij+W/Usx+PKehDm2nFLBL5xZvMzMSkyMikxMzMN19Equfgt+VL8u3mlSkUHlm6V6HwtbGZ8yVcTsUDhz5Q5D99aop9MKz2Sk93D8dztCyTtUzbDdDSbrpFVmaJvyNXZTC+jvjx9Ee+Hz161F3CBoxQ6VtVh2r79tyfa5OIxZK2KLrhI183Dylvy+TkpRSp77j4hvwSP3tF3dOp1MyNqzJtlKWpqV6tNsPtlvg0IwMWMcW9XRaez89/UW8RNlCeyNKaBh4BABAAgDezv/OuN0/4VcTysNXcyiUB/1cp+iZAhGph2B5i4CkBfBoQGl5QgSM71CkAD1K0JgBGO4HYDUqZOQ6ilBCyCIEU1BdIQ1OAPGiFgI81IRAQWnszw9FrJFLFIMwAgBTUHkhDQ4A8aI6AT6JBIGBm/qMZEbaiU7N+vfr164POs/9oeDNQqlW7UT0aDcHXgyNB3R7mKSq1GjKss7VUKLkQeK6YZag8pJ0jK15xhFS7VtnQi2SjEa1aqjeZJJVLQgvicniZ6XSajec29/934xoAivZ+BkgBFTTo4BE+ERAhEQnaeyYHOkKFo32dIWBw6ZmxYVHYmDBTHJOe6c8IBQAA";

/***/ }),

/***/ 244:
/***/ ((module) => {

module.exports = "data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAbkAA0AAAAACuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGrAAAABoAAAAckuzNf0dERUYAAAbIAAAAHAAAAB4AJwAQT1MvMgAAAZgAAABAAAAAYA8UBrBjbWFwAAAB8AAAAFwAAAF207PEt2dhc3AAAAakAAAACAAAAAgAAAAQZ2x5ZgAAAmQAAAMdAAAFLD2Yn4toZWFkAAABMAAAADAAAAA2IGjr9GhoZWEAAAFgAAAAIAAAACQHxQPDaG10eAAAAdgAAAAYAAAAIAtVAEBsb2NhAAACTAAAABYAAAAWBMUDH21heHAAAAGAAAAAGAAAACAAEQBpbmFtZQAABYQAAADcAAABm/pYTdhwb3N0AAAGYAAAAEIAAABtX1OHzXjaY2BkAAPV7QG/4vltvjJws4D595YEW0PoEDsGhv/7WJiYDwC5HAxMIFEALYEKinjaY2BkYGA+8H8fAwMLAwPD/38sTAxAERTABgB3BASQeNpjYGRgYOBiSGdgYwABJgY0AAAMCAB7eNpjYGbexjiBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvLzIfOD/PgYH5gMMTiA1SLIKDIwAdAALz3jaY2GAAMZQCM0ExCwMDA5QYQYACusAoXjaY2BgYGaAYBkGRgYQKADyGMF8FoYQIC0AhCB5RgaFl2ovm162vTz38uL//2C1aCL/n4jdF2sRaxSzErMAqhdgQAWMIHMY2YCYGSrABCSYMFQBLR7eAABFMhjxAAAAAAAIAAgAEAAYAKMBCgF0AfUClgAAeNqFU89PGkEUnt3FGVEhrAu7CoguyO5SBcrirhiiMaVAWlxrjTZt/BETk6Z4qpcePGljm6beeujBix6bHnvswXA2qf9Ae+DYs4eeEPtmFxRjaocB3rz35s183/cGMag9WISmWPS/NUazlzUOPmgQyWgKldEy2kSIURTVnjE5igO8X8zKumnwE4qqiqIUM0RR8GOIKeAzs/ezup7VMwFIy3LUCT5ZFwN+rN6x4j7zycFgVlITvU2fnE7LbF1Oe8PvpLjnkE+8d5OLEeJ2E2v+uzUveOrHzVmPIHiYGv39h83+lLLBwSQf9qblxrFd83VvQjWlBH/oiTd+03rcBnHXPUITCR66zyPs3jIoN5c1FwJWZFQANqIEY4KJOWnCzOoScCBStMDJhM0Tp9uhSWwnxqK205hQYsCe305nUXV19WMiwbFRebvyePnZ3Nz2iJzTNJgH62tbd0a5mqp+WFl5tfJk4U00GovtLD5d03I5bWtt/UDTGuiuqK305YmLBTQaeohQHC5HzPbNYw621i0B0SQWJbAnTYVpw7gJ287n6ueC6hvLRCLVUnFhoViqRiKOXd7VGR9/FqqEgq6Lt0Y6VfLDKKXSRof94oz3MfpuuXOjY2fGfKpwHnEFQxWGvbWvZSPEQQfvuuhfCD2Cnr3SSGzhcPRwupi6aBCEsR2mLSS+Bm0ng1y0uTPET/Non+qg2pJl7RvG6Khh7FvW0o3Vl1RlaKiSyu0VCns5x2YxR7o7b9pNOMw2qJD0yyFpYCmfL5fz+aUBqdP+GraSSSs8qiijjsW62MC41AldGg+A03Qq5VAXfcR2j0ZAV/pyX9J3GyVEaYtKAA7BFCTVlTEnGB0cCsXWdc2B7VLjgJ4Rr4iDrYFO1sh1CJK5b17Ne6oujrX4GH5uHnm9pN/t7of35b2oj2R6dsLxXPNPm5NBcVp7EGQ/Ydw8EVS/g2umyLBXHA5NAfANvVUxujkNh3hP+/oclmaq2hGcSWDAAVrzVzy805MZ0XK1K64SleHpUClR8qtC8wRjm7QfRYZh2tQSYvl4p1xh+x76Cz/n7U8AAAB42nXOsWrCUBjF8X80WrQgnUrpdEenoOADdCp1cOkgHRvjJQT0XogRdO8jdOwz9GF8Ik/CtyZww+87N+cjwIx/Eton4YEn80Cem4fymzmVv8wjHrmYx8p/zVNeuamVpBMls25D64H8Yh7KC3Mqf5hHPPNtHiv/MU9Z8UdFQeSoEwlQFfEYo/CJp+TMgZxaoy/Ph1zo+74v32pPzUn3be5Ykukv2fr6VMXgltmiv/vezY1apbaEblOu2bNXtuOq97rrbqybqRRD40offJ03fu92V7cu4kb7Mu7l2z5DeNpjYGLAD7gYGBiZGJgYmRmYGVkYWRnZGNkZOdjScyoLMgzZS/MyDQwMwLSrpZEZhLYwgtJQvrMrhHYxBADObA/9AAAAAQAB//8AD3jaY2BgYGQAgqtL1DlA9L0lwdYwGgA9VQXKAAB42mNgZGBg4AFiMSBmYmAEQk4gZgHzGAAEAQA4";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			284: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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

function fetchStatusHTML(response) {
    return response.ok ? ResponseToHTML(response) : Promise.reject(response)
}

function fetchStatusJSON(response) {
    return response.ok ? response.json() : Promise.reject(response)
}

function fetchCatch(_error, _site) {
    if (_error instanceof TypeError) {
        if (_error.message == "Failed to fetch") {
            console.warn('TypeError: ' + new URL(_site));
            console.warn(_error);
            return "Fetch";
        }
    }

    if (_error instanceof Response) {
        if (!_error.ok) {
            console.warn('Response: ' + new URL(_site));
            console.warn(_error);
            return "F" + _error.status;
        }
    }

    console.warn('Error: ' + new URL(_site));
    console.warn(_error);
    return "Err";
}

function ReplaceName(name) {
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
        .catch(err => fetchCatch(err, url));
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
    let cloneBI = JSON.parse(JSON.stringify(_bookInfo));

    for (let volume of cloneBI.data.volumeItems.reverse()) {
        for (let chapter of volume.chapterItems.reverse()) {
            if (chapter.chapterLevel === _cLevel) {
                return chapter;
            }
        }
    }
}

function GetChapterName(_bookInfo, _cName) {
    let cloneBI = JSON.parse(JSON.stringify(_bookInfo));

    for (let volume of cloneBI.data.volumeItems.reverse()) {
        for (let chapter of volume.chapterItems.reverse()) {
            if (chapter.chapterName === _cName) {
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
    else if (_chStart > _chLastLocked) {
        tmpText = _chStart + " / " + _chStop;
    }
    else {
        tmpText = _chStart + " / " + _chLastLocked + " / " + _chStop;
    }

    return Object.assign(document.createElement("h1"), {
        className: "idGlava",
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
        this.bId = "";
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

    getBookLocal() {
        let bookId = localStorage.getItem(this.constructor.name);

        if (bookId) {
            return JSON.parse(bookId);
        }
        else {
            return {};
        }
    }

    setBookLocal() {
        let bookId = this.getBookLocal();

        bookId[this.bId] = this.siteBook.href;
        bookId = JSON.stringify(bookId);
        localStorage.setItem(this.constructor.name, bookId);
    }

    checkBookUndefined() {
        let bookId = this.getBookLocal();
        if (bookId[this.bId] === undefined) {
            return true;
        }
        else {
            this.siteBook = bookId[this.bId];
            return false;
        }
    }

    checkBookSite() {
        let bookId = this.getBookLocal();

        return bookId[this.bId] === this.siteBook.href;
    }
}

class ParserChapter extends ParserBook {
    constructor(_site) {
        super(_site);
        this.endUrl = "";
    }
}
;// CONCATENATED MODULE: ./src/js/webnovel/ce/FreeForm.js



var eventCheck = "event_check";
var FreeForm_event = new Event(eventCheck);
var clH = "hTrue";

function CreateTableSites(_sites, _bookInfo) {
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
                document.querySelector("#InputChapterNext").value = _sites[i][j].total;
            });
            inputButton.addEventListener(eventCheck, function () {
                if (this.value === "???" && _sites[i][j].total === 0) {
                    return;
                }

                let cId = document.querySelector("#crawlerId").getAttribute("cId");

                let ch = GetChapterId(_bookInfo, cId);
                let chIndex = ch.chapterIndex * 1;

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

                    let ch = GetChapterId(_bookInfo, cId);

                    _sites[i][j].linkChapter(ch.chapterIndex, ch.chapterName);
                    document.querySelector("#InputChapterNext").value = _sites[i][j].total;
                });
            }


            // Parsing
            let tdParsing = trB.insertCell();
            tdParsing.className = "parsing";
            tdParsing.style.border = '1px solid black';
            tdParsing.addEventListener('click', async function () {
                await _sites[i][j].totalChapters();

                let iB = this.parentElement.querySelector("td.total > input");
                iB.dispatchEvent(FreeForm_event);
            });


            // -_-
            if (!(_sites[i][j] instanceof ParserChapter)) {
                tdTotal.colSpan = "2";
            }
        }
    }

    return tbl;
}

function CheckTotalAll() {
    let tmpTotal = document.querySelectorAll("#crawlerId > tbody > tr > td.total > input");
    for (let i of tmpTotal) {
        i.dispatchEvent(FreeForm_event);
    }
}

function ParsingAll() {
    let tmpParsing = document.querySelectorAll("#crawlerId > tbody > tr > td.parsing");
    for (let p of tmpParsing) {
        p.click();
    }
}
;// CONCATENATED MODULE: ./src/js/ReplaceText.js




//async function GetChapter(_url, _cId) {
//    return new Promise((resolve, reject) => {
//        GM_xmlhttpRequest({
//            method: 'GET',
//            url: _url,
//            //anonymous: true,
//            type: 'document',
//            headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36' },
//            onload: function (data) {
//                // User-Agent: Mobile
//                let bodyText = data.response;

//                let parser = new DOMParser();
//                let bodyHtml = parser.parseFromString(bodyText, 'text/html');

//                let pOrig = bodyHtml.querySelectorAll("#content-" + _cId + " > p");

//                if (pOrig.length > 0) {
//                    let pTmp = [];
//                    for (let c of pOrig) {
//                        pTmp.push(c.innerText);
//                    }
//                    resolve(pTmp);
//                }
//                else {
//                    // User-Agent: ---> PC
//                    let str = data.responseText.match(/chapInfo.*?({.*?});/);

//                    if (str) {
//                        str = str[1].replaceAll(/\\([<> '&])/g, "$1");
//                        //console.log(str);

//                        let json = JSON.parse(str);
//                        //console.log(json);

//                        let pTmp = [];
//                        for (let c of json.chapterInfo.contents) {
//                            pTmp.push(c.content.replaceAll(/<[/]?p>/g, ""));
//                        }
//                        resolve(pTmp);
//                    }
//                    else {
//                        resolve("Error");
//                    }
//                }

//            },
//            onerror: function (error) {
//                reject(error);
//            }
//        });
//    });
//}

async function GetChapterFetch(_url, _cId) {
    return await fetch(_url)
        .then(res => fetchStatusHTML(res))
        .then(data => {
            let pOrig = data.querySelectorAll("#content-" + _cId + " > p");

            if (pOrig.length > 0) {
                let pTmp = [];
                for (let c of pOrig) {
                    pTmp.push(c.innerText);
                }
                return pTmp;
            }
            else {
                return "Error";
            }
        })
        .catch(err => fetchCatch(err, this.siteSearch.href));
}

async function ArraySortOrder(_parrent) {
    let pCopy = _parrent;
    while (true) {
        if (!pCopy.classList.contains("_mix")) {
            break;
        }
        else {
            await new Promise(r => setTimeout(r, 250));

            let tmpP = _parrent.parentElement.querySelector("p." + _parrent.className.replaceAll(" ", ".").replace("._mix", ""));
            if (tmpP) {
                pCopy = tmpP;
            }
        }
    }

    let str = "";
    [].slice.call(pCopy.children).sort(function (a, b) {
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

    if (str === "") {
        return _parrent.innerText;
    }

    //return innerText;
    return str;
}

function ReplaceSymbolGO(_element, _dict) {
    let str = "";
    _element.textContent.split('').forEach(element => {
        if (_dict[element] !== undefined) {
            str = str + _dict[element];
        }
        else {
            str = str + element;
        }
    });

    _element.textContent = str;
}

function ReplaceSymbol(_element, _dict) {
    if (_element.hasChildNodes()) {
        let children = _element.childNodes;

        for (let ch of children) {
            if (ch.hasChildNodes()) {
                ReplaceSymbol(ch, _dict);
            }
            else {
                ReplaceSymbolGO(ch, _dict);
            }
        }
    }
    else {
        ReplaceSymbolGO(_element, _dict);
    }
}

async function ReplaceText(_bId, _cId) {
    let contentCheck = document.querySelector("#content-" + _cId);

    // ����������
    let pOrder = contentCheck.querySelectorAll("p._cfcmp");
    if (pOrder.length > 0) {
        let p2 = await GetChapterFetch("https://m-webnovel-com.translate.goog/book/" + _bId + "/" + _cId + "?_x_tr_sl=en&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp", _cId);
        if (p2.length > 0) {
            var dict = {};
            let pReplace = document.querySelectorAll("#content-" + _cId + " > p");

            for (let i in p2) {
                let p2Array = p2[i].split('');

                if (pReplace[i].classList.contains("_cfcmp")) {
                    pReplace[i].scrollIntoView({ behavior: "smooth" });
                    await new Promise(r => setTimeout(r, 750));
                }
                let contentChArray = (await ArraySortOrder(pReplace[i])).split('');

                for (let prop in p2Array) {
                    dict[contentChArray[prop]] = p2Array[prop];
                }
            }
            contentCheck.parentElement.querySelector("div.ChapterTitle_chapter_title_container__Wq5T8").scrollIntoView({ behavior: "smooth" });

            let p_cfnp = document.querySelectorAll("#content-" + _cId + " > p._cfnp");
            for (let p of p_cfnp) {
                ReplaceSymbol(p, dict);
            }
            
            let p_cfcmp = document.querySelectorAll("#content-" + _cId + " > p._cfcmp");
            for (let p of p_cfcmp) {
                p.translate = false;
            }

            contentCheck.translate = true;

            // ������� �����������
            let observer = new IntersectionObserver((entries, observer) => {
                // ��� ������ ������-�������� ��������
                entries.forEach(async entry => {
                    // ���� ������� �������� �����������
                    if (entry.isIntersecting) {
                        const pObserve = entry.target;

                        // ���������� ����������
                        observer.unobserve(pObserve);

                        let pTr = document.createElement("p");

                        pTr.innerText = await ArraySortOrder(pObserve);
                        ReplaceSymbol(pTr, dict);


                        pObserve.after(pTr);

                        pObserve.style.display = "none";
                    }
                })
            },
            {
                // �������� �������� �������� - ������� ���������
                root: null,
                // ��� ��������
                rootMargin: '0px',
                // ������� ����������� - �������� �����������
                threshold: 1.0
            });

            // � ������� ����� ������ �� ����� img �� ��������
            let p_cfcmpMix = document.querySelectorAll("#content-" + _cId + " > p._cfcmp");
            p_cfcmpMix.forEach(i => {
                observer.observe(i)
            });
        }
    }
    else {
        alert("Chapter: LOCKED")
        return -1;
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
;// CONCATENATED MODULE: ./src/js/GetText.js


async function GetBooks(_title) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'POST',
            url: "https://open.lightnovelplus.com/book/search",
            anonymous: true,
            type: 'json',
            headers: { 'User-Agent': 'okhttp/4.9.1' },
            data: JSON.stringify({ "packageName": "com.lightnovelplus.webnovel", "marketChannel": "none", "page_num": "1", "sysVer": "5.1.1", "osType": "2", "keyword": _title, "language": "en", "ver": "2.2.0", "product": "1" }),
            onload: function (data) {
                let json = JSON.parse(data.responseText);
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
            data: JSON.stringify({ "sysVer": "5.1.1", "book_id": _bId, "packageName": "com.lightnovelplus.webnovel", "osType": "2", "marketChannel": "none", "language": "en", "ver": "2.2.0", "product": "1" }),
            onload: function (data) {
                let json = JSON.parse(data.responseText);
                resolve(json);
            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

async function GetChapter(_bId, _chId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'GET',
            url: "https://img.suv666.com/20170612/nof/" + _bId + "/" + md5(_bId + "-" + _chId).toLowerCase() + ".json",
            anonymous: true,
            type: 'json',
            headers: { 'User-Agent': 'okhttp/4.9.1' },
            onload: function (data) {
                let json = JSON.parse(data.responseText);
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
    BookId = localStorage.getItem("ln_" + _bId);
    if (!BookId) {
        let jsonBooks = await GetBooks(_bTitle);

        for (let book of jsonBooks.data.list) {

            let titleParser = book.name;

            let diff = tanimoto(_bTitle, titleParser);

            if (diff > 0.9) {
                BookId = book.book_id;
                localStorage.setItem("ln_" + _bId, BookId);
                break;
            }
        }

        if (!BookId) {
            alert("Error: BookId");
            return -1;
        }
    }

    if (ChapterListReverse === "") {
        let jsonCatalog = await GetCatalog(BookId);
        ChapterListReverse = jsonCatalog.data.chapter_list.reverse();
    }

    let content = document.querySelector("#content-" + _cId);
    content.translate = true;

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
            jsonChapter = await GetChapter(catalog.book_id, catalog.chapter_id);
            break;
        }
    }

    if (jsonChapter !== "") {
        if ('error' in jsonChapter) {
            console.warn(jsonChapter);

            alert(jsonChapter.error + "\n\nStart App:\n" + _bTitle);
            return -99999;
        }

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

    return ChapterListReverse[0].chapter_title;
}


// ParserBook
//function getBookLocal() {
//    let bookId = localStorage.getItem("GetText");

//    if (bookId) {
//        return JSON.parse(bookId);
//    }
//    else {
//        return {};
//    }
//}

//function setBookLocal(_bId, _gId) {
//    let bookId = this.getBookLocal();

//    bookId[_bId] = _gId;
//    bookId = JSON.stringify(bookId);
//    localStorage.setItem("GetText", bookId);
//}

//function checkBookUndefined() {
//    let bookId = this.getBookLocal();
//    if (bookId[this.bId] === undefined) {
//        return true;
//    }
//    else {
//        BookId = bookId[this.bId];
//        return false;
//    }
//}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearch/artBook/mWuxiaworldCo.js




class mWuxiaworldCo extends ParserBook {
    constructor() {
        super('https://m.wuxiaworld.co/');
        this.endUrl = '/1';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle + this.endUrl;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("div.result-container_2.result-container > ul.result-list > li.list-item");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a.list-img > img.item-img").alt;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a.list-img").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let allCH = data.querySelector("#detail > div.chapter-wrapper > ul").getElementsByTagName("a");
                    for (let i = allCH.length - 1; i >= 0; i--) {
                        if (allCH[i].style.color === 'gray')
                            continue;
                        else {
                            this.total = allCH[i].textContent.match(/\D*(\d+)/)[1] * -1;
                            return;
                        }
                    }

                    this.total = data.querySelector("#detail > div.chapter-wrapper > div > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearch/artBook/novelupdatesCc.js




class novelupdatesCc extends ParserBook {
    constructor() {
        super('https://www.novelupdates.cc/');
        this.endUrl = '/1';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle + this.endUrl;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("div.result-container_2.result-container > ul.result-list > li.list-item");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a.list-img > img.item-img").alt;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a.list-img").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let allCH = data.querySelector("#detail > div.chapter-wrapper > ul").getElementsByTagName("a");
                    for (let i = allCH.length - 1; i >= 0; i--) {
                        if (allCH[i].style.color === 'gray')
                            continue;
                        else {
                            this.total = allCH[i].textContent.match(/\D*(\d+)/)[1] * -1;
                            return;
                        }
                    }

                    this.total = data.querySelector("#detail > div.chapter-wrapper > div > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearch/artBook/readlightnovelCc.js




class readlightnovelCc extends ParserBook {
    constructor() {
        super('https://www.readlightnovel.cc/');
        this.endUrl = '/1';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle + this.endUrl;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("div.result-container_2.result-container > ul.result-list > li.list-item");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a.list-img > img.item-img").alt;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a.list-img").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let allCH = data.querySelector("#detail > div.chapter-wrapper > ul").getElementsByTagName("a");
                    for (let i = allCH.length - 1; i >= 0; i--) {
                        if (allCH[i].style.color === 'gray')
                            continue;
                        else {
                            this.total = allCH[i].textContent.match(/\D*(\d+)/)[1] * -1;
                            return;
                        }
                    }

                    this.total = data.querySelector("#detail > div.chapter-wrapper > div > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearch/artBook/readlightnovelCo.js




class readlightnovelCo extends ParserBook {
    constructor() {
        super('https://www.readlightnovel.co');
        this.endUrl = '/1';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle + this.endUrl;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("div.result-container_2.result-container > ul.result-list > li.list-item");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a.list-img > img.item-img").alt;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a.list-img").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let allCH = data.querySelector("#detail > div.chapter-wrapper > ul").getElementsByTagName("a");
                    for (let i = allCH.length - 1; i >= 0; i--) {
                        if (allCH[i].style.color === 'gray')
                            continue;
                        else {
                            this.total = allCH[i].textContent.match(/\D*(\d+)/)[1] * -1;
                            return;
                        }
                    }

                    this.total = data.querySelector("#detail > div.chapter-wrapper > div > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/lightnovelreaderOrg.js




class lightnovelreaderOrg extends ParserChapter {
    constructor() {
        super('https://lightnovelreader.org/');
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            this.apiSearch = new URL(this.site.origin + "/search/autocomplete?query=" + this.bTitle);

            let isError = '';
            await fetch(this.apiSearch.href)
                .then(res => fetchStatusJSON(res))
                .then(data => {
                    if (Object.keys(data).length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of data.results) {
                        let titleParser = book.original_title;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = book.link;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.apiSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("body > section:nth-child(4) > div > div > div.col-12.col-xl-9 > div > div:nth-child(2) > div > div.novels-detail-right > ul > li:nth-child(9) > div.novels-detail-right-in-right > a:nth-child(1)").textContent.match(/\D*(\d+)/)[1];
                    return;
                })
                .catch(err => this.total = fetchCatch(err, url));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/ltnovelCom.js




class ltnovelCom extends ParserChapter {
    constructor() {
        super('https://www.ltnovel.com/');
        this.endUrl = '.html';
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + '_' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            this.apiSearch = new URL(this.site.origin + "/e/search/index.php");

            let isError = '';
            await fetch(this.apiSearch.href, {
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                },
                "referrer": this.site.origin + "/search.html",
                "body": "show=title&tempid=1&tbname=news&keyboard=" + this.bTitle,
                "method": "POST",
            })
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    if (data.title === "Message hint" || data.title == "") {
                        isError = "B0";
                        return;
                    }

                    let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                    for (let book of block) {
                        let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.apiSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/novelmtCom.js




class novelmtCom extends ParserChapter {
    constructor() {
        super('https://www.novelmt.com/');
        this.endUrl = '.html';
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + '_' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            this.apiSearch = new URL(this.site.origin + "/e/search/index.php");

            let isError = '';
            await fetch(this.apiSearch.href, {
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                },
                "referrer": this.site.origin + "/search.html",
                "body": "show=title&tempid=1&tbname=news&keyboard=" + this.bTitle,
                "method": "POST",
            })
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    if (data.title === "Message hint" || data.title == "") {
                        isError = "B0";
                        return;
                    }

                    let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                    for (let book of block) {
                        let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.apiSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/readwnCom.js




class readwnCom extends ParserChapter {
    constructor() {
        super('https://www.readwn.com/');
        this.endUrl = '.html';
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + '_' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            this.apiSearch = new URL(this.site.origin + "/e/search/index.php");

            let isError = '';
            await fetch(this.apiSearch.href, {
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                },
                "referrer": this.site.origin + "/search.html",
                "body": "show=title&tempid=1&tbname=news&keyboard=" + this.bTitle,
                "method": "POST",
            })
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    if (data.title === "Message hint" || data.title == "") {
                        isError = "B0";
                        return;
                    }

                    let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                    for (let book of block) {
                        let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.apiSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/wuxiahereCom.js




class wuxiahereCom extends ParserChapter {
    constructor() {
        super('https://www.wuxiahere.com/');
        this.endUrl = '.html';
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + '_' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            this.apiSearch = new URL(this.site.origin + "/e/search/index.php");

            let isError = '';
            await fetch(this.apiSearch.href, {
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                },
                "referrer": this.site.origin + "/search.html",
                "body": "show=title&tempid=1&tbname=news&keyboard=" + this.bTitle,
                "method": "POST",
            })
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    if (data.title === "Message hint" || data.title == "") {
                        isError = "B0";
                        return;
                    }

                    let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                    for (let book of block) {
                        let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.apiSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/apiSearchChapter/bookWings/wuxiapubCom.js




class wuxiapubCom extends ParserChapter {
    constructor() {
        super('https://www.wuxiapub.com/');
        this.endUrl = '.html';
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + '_' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            this.apiSearch = new URL(this.site.origin + "/e/search/index.php");

            let isError = '';
            await fetch(this.apiSearch.href, {
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                },
                "referrer": this.site.origin + "/search.html",
                "body": "show=title&tempid=1&tbname=news&keyboard=" + this.bTitle,
                "method": "POST",
            })
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    if (data.title === "Message hint" || data.title == "") {
                        isError = "B0";
                        return;
                    }

                    let block = data.querySelectorAll("section > ul.novel-list.grid.col.col2 > li.novel-item");
                    for (let book of block) {
                        let titleParser = book.querySelector("a > h4.novel-title.text2row").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.apiSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("div.novel-info > div.header-stats > span:nth-child(1) > strong").textContent.trim();
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearch/mMylovenovelCom.js




class mMylovenovelCom extends ParserBook {
    constructor() {
        super('https://m.mylovenovel.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/index.php?s=so&module=book&keyword=' + this.bTitle;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("div.main > ul.list > li");

                    if (block.length == 0) {
                        isError = this.total = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a > p.bookname").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("a").pathname;
                            this.setBookLocal();
                            return;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("#info > div.main > div.detail > p.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearch/readnoveldailyCom.js




class readnoveldailyCom extends ParserBook {
    constructor() {
        super('https://readnoveldaily.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?q=' + this.bTitle;
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("#list-posts div.row.special > div");

                    if (block.length == 0) {
                        isError = this.total = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("h3.title-book > a").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = book.querySelector("h3.title-book > a").href;
                            this.setBookLocal();
                            return;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("div.latest-chapters.list-chapter > ul.list > li:first-child").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearchChapter/freewebnovelCom.js




class freewebnovelCom extends ParserChapter {
    constructor() {
        super('https://freewebnovel.com/');
        this.endUrl = '.html';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/?searchkey=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + '/chapter-' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("div.col-content > div > div.li-row");

                    if (block.length == 1 && block[0].querySelectorAll("div.li > div.con").length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("div.txt > h3.tit > a").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = this.site.origin + book.querySelector("div.txt > h3.tit > a").pathname;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("body > div.main > div > div > div.col-content > div.m-newest1 > ul > li:nth-child(1) > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearchChapter/novelfullvipCom.js




class novelfullvipCom extends ParserChapter {
    constructor() {
        super('https://novelfullvip.com/');
        this.endUrl = '.html';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?q=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("#truyen-slide > div.list.list-thumbnail.col-xs-12.col-md-9 > div.row > div.col-xs-4.col-sm-3.col-md-3");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a").title;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = book.querySelector("a").href;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("#truyen > div.col-xs-12.col-sm-12.col-md-9.col-truyen-main > div.col-xs-12.col-info-desc > div.col-xs-12.col-sm-8.col-md-8.desc > div.l-chapter > ul > li:nth-child(1) > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/2fetch/htmlSearchChapter/novelscafeCom.js




class novelscafeCom extends ParserChapter {
    constructor() {
        super('https://novelscafe.com/');
        this.endUrl = '/';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(/\/$/, "") + '-chapter-' + _cIndex + '-' + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        if (this.checkBookUndefined()) {
            let isError = '';
            await fetch(this.siteSearch.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    let block = data.querySelectorAll("div.posts.row > div.col-4.col-md-3.col-lg-2.post-column.mt-3");

                    if (block.length == 0) {
                        isError = "B0";
                        return;
                    }

                    for (let book of block) {
                        let titleParser = book.querySelector("a > div.post-title").textContent;

                        let diff = tanimoto(this.bTitle, titleParser);

                        if (diff > 0.8) {
                            this.siteBook = book.querySelector("a").href;
                            this.setBookLocal();
                            break;
                        }
                    }
                })
                .catch(err => isError = fetchCatch(err, this.siteSearch.href));

            if (isError != '') {
                this.total = isError;
                return;
            }
        }

        if (this.checkBookSite()) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("#primary > div:nth-child(2) > div.col-12.col-md-9 > div.last-10-chapters > div > div:nth-child(1) > h3 > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
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
        await fetch(this.site.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#list-page > div.col-xs-12.col-sm-12.col-md-9.col-truyen-main_1.archive > div > div.row");

                if (block.length == 0) {
                    isError = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.site = new URL(this.site.origin + book.querySelector("h3.truyen-title > a").pathname);
                        isLucky = true;
                        break;
                    }
                }

                return;
            })
            .catch(err => isError = fetchCatch(err, this.site.href));

        if (isError != '') {
            console.error(isError);
            window.open(this.site);
            return;
        }

        if (isLucky) {
            isLucky = false;
            await fetch(this.site.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.site = new URL(this.site.origin + data.querySelector("#list-chapter > ul > li.last > a").pathname + data.querySelector("#list-chapter > ul > li.last > a").search);
                    isLucky = true;
                })
                .catch(err => isError = fetchCatch(err, this.site.href));


            if (isError != '') {
                console.error(isError);
                window.open(this.site);
                return;
            }

            if (isLucky) {
                window.open(this.site);
                return;

                //return await fetch(this.site)
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
;// CONCATENATED MODULE: ./src/js/parsers/apiSearch/lightnovelsMe.js




class lightnovelsMe extends ParserBook {
    constructor() {
        super('https://lightnovels.me/');
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;

        // API
    }

    async totalChapters() {
        this.apiSearch = new URL(this.site.origin + "/api/search?keyword=" + this.bTitle + "&index=0&limit=20");

        await fetch(this.apiSearch.href)
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data.results).length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of data.results) {
                    let titleParser = book.novel_name;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + '/novel' + book.novel_slug;
                        this.total = book.chapter_name.match(/\D*(\d+)/)[1];
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.apiSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/apiSearchChapter/octopiiCo.js




class octopiiCo extends ParserChapter {
    constructor() {
        super('https://octopii.co/');
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex + '-' + ReplaceName(_cTitle));
    }

    async totalChapters() {
        this.apiSearch = new URL(this.site.origin + "/api/advance-search");

        await fetch(this.apiSearch.href, {
            "headers": {
                "content-type": "application/json",
            },
            "body": "{\"clicked\":false,\"limit\":\"24\",\"page\":0,\"pageCount\":1,\"value\":\"" + this.bTitle + "\",\"sort\":3,\"selected\":{\"genre\":[],\"status\":[],\"sort\":[],\"author\":[]},\"results\":[],\"label\":\"searching ....\"}",
            "method": "POST",
        })
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data.results).length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of data.results) {
                    let titleParser = book.novel_name;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + "/novel/" + book.novel_slug;
                        this.total = book.chapter_name.match(/\D*(\d+)/)[1];
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.apiSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/apiSearchChapter/webnovelonlineCom.js




class webnovelonlineCom extends ParserChapter {
    constructor() {
        super('https://webnovelonline.com/');
        this.apiSearch = '';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/searching/' + this.bTitle;

        // API
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace('/novel/', '/chapter/') + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        this.apiSearch = new URL(this.site.protocol + "//api." + this.site.hostname + "/api/v1/wuxia/search?name=" + this.bTitle);

        await fetch(this.apiSearch.href)
            .then(res => fetchStatusJSON(res))
            .then(data => {
                if (Object.keys(data.data).length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of data.data) {
                    let titleParser = book.title;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + new URL(book.url).pathname;
                        this.total = book.chap.match(/\D*(\d+)/)[1];
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.apiSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearch/lightnovelWorld.js




class lightnovelWorld extends ParserBook {
    constructor() {
        super('https://m.lightnovel.world/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.book_info");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    book.querySelector("li.text1.textC000 span").remove();
                    let titleParser = book.querySelector("li.text1.textC000").textContent.trim();

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("div.book_info_r > ul > li.book_info_add_afv > a:nth-child(2)").pathname;
                        this.total = book.querySelector("a.text2.textC333").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearch/novelhallCom.js




class novelhallCom extends ParserBook {
    constructor() {
        super('https://www.novelhall.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/index.php?s=so&module=book&keyword=' + this.bTitle;
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#main > div.container > div > table > tbody > tr");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("td:nth-child(2) > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("td:nth-child(2) > a").pathname;
                        this.total = book.querySelector("a.chapter").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearch/pandanovelCom.js




class pandanovelCom extends ParserBook {
    constructor() {
        super('https://www.panda-novel.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/' + this.bTitle;
    }

    async totalChapters() {
        let isLucky = false;
        var isError = '';
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("#panda-app > div.sr-body > div.novel-list > ul > li");

                if (block.length == 0) {
                    isError = this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.novel-desc > h4").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("a").pathname;
                        isLucky = true;
                        return;
                    }
                }
            })
            .catch(err => isError = fetchCatch(err, this.siteSearch.href));

        if (isError != '') {
            this.total = isError;
            return;
        }

        if (isLucky) {
            return await fetch(this.siteBook.href)
                .then(res => fetchStatusHTML(res))
                .then(data => {
                    this.total = data.querySelector("#detailsBody > div > div.details-chapters > dl > dt > p > a").textContent.match(/\D*(\d+)/)[1] * -1;
                    return;
                })
                .catch(err => this.total = fetchCatch(err, this.siteBook.href));
        }

        this.total = "S0";
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearch/readlightnovelsNet.js




class readlightnovelsNet extends ParserBook {
    constructor() {
        super('https://readlightnovels.net/');
        this.endUrl = '.html';
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle;
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-md-3.col-sm-6.col-xs-6.home-truyendecu");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("a").title;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("a").href;
                        this.total = book.querySelector("a > div > small").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/madentertainment/madnovelCom.js




class madnovelCom extends ParserChapter {
    constructor() {
        super('https://madnovel.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?q=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        this.total = book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/madentertainment/novelbuddyCom.js




class novelbuddyCom extends ParserChapter {
    constructor() {
        super('https://novelbuddy.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?q=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        this.total = book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/madentertainment/novelforestCom.js




class novelforestCom extends ParserChapter {
    constructor() {
        super('https://novelforest.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?q=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        this.total = book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/madentertainment/novelfullMe.js




class novelfullMe extends ParserChapter {
    constructor() {
        super('https://novelfull.me/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?q=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.section-body > div.list > div.book-item");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.title > h3 > a").title;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("div.title > h3 > a").pathname;
                        this.total = book.querySelector("div.thumb > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/novel/novelfullplusCom.js




class novelfullplusCom extends ParserChapter {
    constructor() {
        super(new URL('https://novelfullplus.com/'));
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("h3.novel-title > a").href;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/novel/novelpokiCom.js




class novelpokiCom extends ParserChapter {
    constructor() {
        super(new URL('https://novelpoki.com/'));
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace('/novel/', '/') + "-chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("h3.novel-title > a").href;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/novel/noveltop1Com.js




class noveltop1Com extends ParserChapter {
    constructor() {
        super(new URL('https://noveltop1.com/'));
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle));
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("h3.novel-title > a").href;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/novel/readnovelfullCom.js




class readnovelfullCom extends ParserChapter {
    constructor() {
        super('https://readnovelfull.com/');
        this.endUrl = ".html";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '').replaceAll(/-v\d+$/g, '') + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.novel-title > a").pathname;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = ffetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/novel/topwebnovelCom.js




class topwebnovelCom extends ParserBook {
    constructor() {
        super('https://topwebnovel.com');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search/?keyword=' + this.bTitle;
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-novel-main.archive > div.list.list-novel.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.novel-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.novel-title > a").pathname;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/allnovelfullCom.js




class allnovelfullCom extends ParserChapter {
    constructor() {
        super('https://allnovelfull.com/');
        this.endUrl = ".html";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.truyen-title > a").pathname;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/allnovelOrg.js




class allnovelOrg extends ParserChapter {
    constructor() {
        super('https://allnovel.org/');
        this.endUrl = ".html";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.truyen-title > a").pathname;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/novelfullCom.js




class novelfullCom extends ParserChapter {
    constructor() {
        super('https://novelfull.com/');
        this.endUrl = ".html";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href.replace(this.endUrl, '') + "/chapter-" + _cIndex + "-" + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.truyen-title > a").pathname;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/truyenNovel/truyen/novelgreatNet.js




class novelgreatNet extends ParserBook {
    constructor() {
        super('https://novelgreat.net/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/search?keyword=' + this.bTitle;
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.col-xs-12.col-sm-12.col-md-9.col-truyen-main.archive > div.list.list-truyen.col-xs-12 > div.row");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("h3.truyen-title > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = this.site.origin + book.querySelector("h3.truyen-title > a").pathname;
                        this.total = book.querySelector("div.col-xs-2.text-info > div > a > span").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/1stkissnovelLove.js




class oneStkissnovelLove extends ParserChapter {
    constructor() {
        super('https://1stkissnovel.love/');
        this.endUrl = "/";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle + '&post_type=wp-manga';
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "chapter-" + _cIndex + "-" + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("div.post-title > h3 > a").href;
                        this.total = book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/latestnovelNet.js




class latestnovelNet extends ParserChapter {
    constructor() {
        super('https://latestnovel.net/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle.replace(':', '') + '&post_type=wp-manga';
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + 'chapter-' + _cIndex);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("div.post-title > h3 > a").href;
                        this.total = book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/lightnovelMobi.js




class lightnovelMobi extends ParserChapter {
    constructor() {
        super('https://lightnovel.mobi/');
        this.endUrl = "/";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle + '&post_type=wp-manga';
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "chapter-" + _cIndex + "-" + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("div.post-title > h3 > a").href;
                        this.total = book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/novelteamNet.js




class novelteamNet extends ParserChapter {
    constructor() {
        super('https://novelteam.net/');
        this.endUrl = "/";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle + '&post_type=wp-manga';
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + 'chapter-' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("div.post-title > h3 > a").href;
                        this.total = book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/noveltrenchCom.js




class noveltrenchCom extends ParserChapter {
    constructor() {
        super('https://noveltrench.com/');
        this.endUrl = "/";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle + '&post_type=wp-manga';
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + 'chapter-' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("div.post-title > h3 > a").href;
                        this.total = book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/readnovelsOrg.js




class readnovelsOrg extends ParserChapter {
    constructor() {
        super('https://readnovels.org/');
        this.endUrl = "/";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle + '&post_type=wp-manga';
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + 'chapter-' + _cIndex + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("div.post-title > h3 > a").href;
                        this.total = book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/htmlSearchChapter/wpManga/webnovelonlineNet.js




class webnovelonlineNet extends ParserChapter {
    constructor() {
        super('https://webnovelonline.net/');
        this.endUrl = "/";
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + '/?s=' + this.bTitle + '&post_type=wp-manga';
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + "chapter-" + _cIndex + "-" + ReplaceName(_cTitle) + this.endUrl);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                let block = data.querySelectorAll("div.row.c-tabs-item__content");

                if (block.length == 0) {
                    this.total = "B0";
                    return;
                }

                for (let book of block) {
                    let titleParser = book.querySelector("div.post-title > h3 > a").textContent;

                    let diff = tanimoto(this.bTitle, titleParser);

                    if (diff > 0.8) {
                        this.siteBook = book.querySelector("div.post-title > h3 > a").href;
                        this.total = book.querySelector("div.tab-meta > div.meta-item.latest-chap > span.font-meta.chapter > a").textContent.match(/\D*(\d+)/)[1] * -1;
                        return;
                    }
                }

                this.total = "S0";
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/ReplaceTitle/readlightnovelMe.js



class readlightnovelMe extends ParserChapter {
    constructor() {
        super('https://www.readlightnovel.me/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/" + ReplaceName(this.bTitle);

        this.siteBook = this.siteSearch;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    linkRead(_book, _chapterN, _chapterTitle) {
        window.open();
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                this.total = data.querySelector("div.novel-detail-item[style='display:flex;'] > div.novel-detail-body > ul > li:first-child > a").textContent.match(/\D*(\d+)/)[1];
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/ReplaceTitle/lightnovelEWcom/lightnovelpubCom.js



class lightnovelpubCom extends ParserChapter {
    constructor() {
        super('https://www.lightnovelpub.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/novel/" + ReplaceName(this.bTitle);

        this.siteBook = this.siteSearch;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                this.total = data.querySelector("#novel > div.novel-body.container > nav > a.grdbtn.chapter-latest-container > div > p.latest.text1row").textContent.match(/\D*(\d+)/)[1];
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
    }
}
;// CONCATENATED MODULE: ./src/js/parsers/ReplaceTitle/lightnovelEWcom/lightnovelworldCom.js



class lightnovelworldCom extends ParserChapter {
    constructor() {
        super('https://www.lightnovelworld.com/');
    }

    SetSiteSearch() {
        this.siteSearch = this.site.origin + "/novel/" + ReplaceName(this.bTitle);

        this.siteBook = this.siteSearch;
    }

    linkChapter(_cIndex, _cTitle) {
        window.open(this.siteBook.href + '/chapter-' + _cIndex);
    }

    async totalChapters() {
        await fetch(this.siteSearch.href)
            .then(res => fetchStatusHTML(res))
            .then(data => {
                this.total = data.querySelector("#novel > div.novel-body.container > nav > a.grdbtn.chapter-latest-container > div > p.latest.text1row").textContent.match(/\D*(\d+)/)[1];
                return;
            })
            .catch(err => this.total = fetchCatch(err, this.siteSearch.href));
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
// @match       https://m.webnovel.com/book/*/*
// @grant       GM_xmlhttpRequest
// @version     0.4.3
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
        new readnoveldailyCom(),

        // 2fetch/htmlSearchChapter
        new freewebnovelCom(),
        new novelfullvipCom(),
        new novelscafeCom(),
        //    POST
//new novelsonlineNet(),

        // 2fetch/search
    //new lightnovelplusCom(),

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
        new novelfullplusCom(),
        new novelpokiCom(),
        new noveltop1Com(),
        new readnovelfullCom(),
        new topwebnovelCom(),
        //    truyenNovel/truyen
        new allnovelfullCom(),
        new allnovelOrg(),
        new novelfullCom(),
        new novelgreatNet(),
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

        // search
        new fastnovelNet(),
        new novelgateNet(),
        new ranobesNet(),
    ]
];

async function CreateDivMain(_statusChapter, _cId = "") {
    // divMain
    let divMain;
    if (_statusChapter === StatusChapter.PRIVATE) {
        divMain = DivPanel(DivMain + "_" + _statusChapter, _statusChapter);

        _cId = glavaWebNovel(location);

        if (GetChapterId(BookInfo, _cId).chapterLevel === 0) {
            let tmpChId = "";
            for (let volume of BookInfo.data.volumeItems) {
                for (let chapter of volume.chapterItems) {
                    if (chapter.chapterLevel > 0) {
                        tmpChId = chapter.chapterId;
                        break;
                    }
                }

                if (tmpChId !== "") {
                    break
                }
            }

            if (tmpChId !== "") {
                _cId = tmpChId;
            }
            else {
                return divMain;
            }

        }
    }
    else {
        divMain = DivPanel(DivMain + "_" + _cId, _statusChapter);
    }

    // divHomeNextChapter
    let divHomeNextChapter = Object.assign(document.createElement("div"), {
        className: "HomeNextChapter",
    });

    // InputBookInfo
    divHomeNextChapter.appendChild(InputBookInfo(WebnovelCom_Crawler_BookId));


    // chapter
    let chapter = GetChapterId(BookInfo, _cId);


    // InputChapterNext
    divHomeNextChapter.appendChild(InputChapterNext(BookInfo, chapter.chapterIndex));


    // H1IdGlava
    divHomeNextChapter.appendChild(H1IdGlava(chapter.chapterIndex, ChLastLocked, BookInfo.data.lastChapterItem.chapterIndex));


    // add HomeNextChapter
    divMain.appendChild(divHomeNextChapter);


    //// Check "The End"
    //if (_cId === BookInfo.data.lastChapterItem.chapterId) {
    //    let tmpH1 = document.createElement("h1");
    //    tmpH1.textContent = "The End";
    //    divMain.appendChild(tmpH1);
    //    return divMain;
    //}


    // divHomeNextChapter
    let divParsingReplaceGetText = Object.assign(document.createElement("div"), {
        className: "ParsingReplaceGetText",
    });


    // inputParsing
    let inputParsing = Object.assign(document.createElement("input"), {
        type: "button",
        value: "Parsing"
    });
    inputParsing.addEventListener('click', async function () {
        let crawlerTable = document.querySelector("#crawlerId");
        if (crawlerTable !== null) {
            if (_statusChapter === StatusChapter.PRIVATE) {
                document.querySelector("#" + DivMain + "_" + _statusChapter).appendChild(crawlerTable);
            }
            else {
                document.querySelector("#" + DivMain + "_" + _cId).appendChild(crawlerTable);
            }
            crawlerTable.setAttribute("cId", _cId);
            crawlerTable.hidden = false;

            //ParsingAll();
        }

        CheckTotalAll();
    });
    divParsingReplaceGetText.appendChild(inputParsing);


    // inputReplace
    let inputReplace = Object.assign(document.createElement("input"), {
        className: "replace",
        type: "button",
        value: "Replace"
    });
    inputReplace.addEventListener('click', async function () {
        this.disabled = true;
        await ReplaceText(WebnovelCom_Crawler_BookId, _cId);
        this.hidden = true;
    });
    divParsingReplaceGetText.appendChild(inputReplace);


    // inputGetText
    let inputGetText = Object.assign(document.createElement("input"), {
        className: "gettext",
        type: "button",
        value: GetTextValue
    });
    inputGetText.addEventListener('click', async function () {
        this.disabled = true;
        let tmpN = await GetText(WebnovelCom_Crawler_BookId, _cId, BookTitle, chapter.chapterName);

        if (tmpN === -99999) {
            this.disabled = false;
            return;
        }

        if (tmpN !== -1 && this.value === "GetText") {
            GetTextValue = "GetText: " + GetChapterName(BookInfo, tmpN).chapterIndex;
            for (let gt of document.querySelectorAll("input.gettext")) {
                gt.value = GetTextValue;
            }
        }
    });
    divParsingReplaceGetText.appendChild(inputGetText);


    // add ParsingReplaceGetText
    divMain.appendChild(divParsingReplaceGetText);


    // tableCrawler
    if (document.querySelector("#crawlerId") === null) {
        let tableCrawler = CreateTableSites(SitesAll, BookInfo);
        tableCrawler.setAttribute("cId", _cId);
        divMain.appendChild(tableCrawler);
    }

    return divMain;
}

var BookInfo;
var BookTitle;
var WebnovelCom_Crawler_BookId;

const DivMain = "divMain";
const StatusChapter = { LOCKED: 'locked', UNLOCKED: 'unlocked', FREE: 'free', PRIVATE: 'private' };
var ChLastLocked = "";

var GetTextValue = "GetText";


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
            site.bId = WebnovelCom_Crawler_BookId;
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
                c.translate = false;

                let divMain = await CreateDivMain(StatusChapter.LOCKED, chapterId[1]);

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
                let divMain = c.parentElement.querySelector("div." + StatusChapter.LOCKED);
                if (divMain !== null) {
                    divMain.classList.remove(StatusChapter.LOCKED);

                    if (c.querySelector("p._cfcmp")) {
                        divMain.classList.add(StatusChapter.UNLOCKED);
                    }
                    else {
                        divMain.classList.add(StatusChapter.FREE);
                        c.translate = true;
                    }
                }
            }
        }

        let contentsPrivate = document.querySelector("div.pr > div > div.styles_last_chapter_footer__SPOMm");
        if (contentsPrivate !== null && contentsPrivate.querySelector("#" + DivMain + "_" + StatusChapter.PRIVATE) === null) {
            let divMain = await CreateDivMain(StatusChapter.PRIVATE);
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