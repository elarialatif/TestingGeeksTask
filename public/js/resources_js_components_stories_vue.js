"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_stories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      recentlyStories: [],
      viewedStories: [],
      currentUserName: "",
      currentUserAvatar: ""
    };
  },
  methods: {
    getRecentlyStoriesList: function getRecentlyStoriesList() {
      var _this = this;

      axios.get('/api/recentlyStories').then(function (res) {
        if (res.data.success === true) _this.recentlyStories = res.data.recentlyStories;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getViewedStoriesList: function getViewedStoriesList() {
      var _this2 = this;

      axios.get('/api/viewedStories').then(function (res) {
        if (res.data.success === true) _this2.viewedStories = res.data.viewedStories;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCurrentUser: function getCurrentUser() {
      var _this3 = this;

      axios.get('/api/currentUser').then(function (res) {
        if (res.data.success === true) _this3.currentUserName = res.data.currentUser.name;
        _this3.currentUserAvatar = res.data.currentUser.avatar;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.getRecentlyStoriesList();
    this.getViewedStoriesList();
    this.getCurrentUser();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody[data-v-0d64ff50]{\r\n    background:#eee;\r\n    margin-top:20px;\n}\n.storiesCard[data-v-0d64ff50] {\r\n    margin-bottom: 1rem;\n}\n.menuLink[data-v-0d64ff50]{\r\n    font-weight: bold;\r\n    margin: 1rem 0;\r\n    font-size: 1rem;\n}\n.widget[data-v-0d64ff50] {\r\n    padding: 0;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    border-radius: 6px;\r\n    box-shadow: 0 4px 6px 0 rgb(85 85 85 / 8%), 0 1px 20px 0 rgb(0 0 0 / 7%), 0px 1px 11px 0px rgb(0 0 0 / 7%);\n}\n.widget.box .widget-header[data-v-0d64ff50] {\r\n    background: #fff;\r\n    padding: 0px 8px 0px;\r\n    border-top-right-radius: 6px;\r\n    border-top-left-radius: 6px;\n}\n.widget .widget-header[data-v-0d64ff50] {\r\n    border-bottom: 0px solid #f1f2f3;\n}\n.widget.box .widget-header[data-v-0d64ff50] {\r\n    background: #fff;\r\n    padding: 0px 8px 0px;\r\n    border-top-right-radius: 6px;\r\n    border-top-left-radius: 6px;\n}\n.widget .widget-header[data-v-0d64ff50] {\r\n    border-bottom: 0px solid #f1f2f3;\n}\n.widget .widget-header[data-v-0d64ff50]:after {\r\n    clear: both;\n}\n.widget .widget-header[data-v-0d64ff50]:before, .widget .widget-header[data-v-0d64ff50]:after {\r\n    display: table;\r\n    content: \"\";\r\n    line-height: 0;\n}\n.widget-content-area[data-v-0d64ff50] {\r\n    padding: 20px;\r\n    position: relative;\r\n    background-color: #fff;\r\n    border-bottom-left-radius: 6px;\r\n    border-bottom-right-radius: 6px;\n}\n.statbox .widget-content[data-v-0d64ff50]:before, .statbox .widget-content[data-v-0d64ff50]:after {\r\n    display: table;\r\n    content: \"\";\r\n    line-height: 0;\r\n    clear: both;\n}\n.statbox .widget-content[data-v-0d64ff50]:before, .statbox .widget-content[data-v-0d64ff50]:after {\r\n    display: table;\r\n    content: \"\";\r\n    line-height: 0;\r\n    clear: both;\n}\n.story-container-2 .single-story[data-v-0d64ff50] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 10px;\n}\n.story-container-2 .story-dp[data-v-0d64ff50] {\r\n    height: 50px;\r\n    width: 50px;\r\n    position: relative;\r\n    border-radius: 50%;\r\n    margin-right: 15px;\r\n    padding: 3px;\n}\n.story-container-2 .story-dp img[data-v-0d64ff50] {\r\n    height: 100%;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 50%;\n}\n.story-container-2 .story-author p.name[data-v-0d64ff50] {\r\n    margin-bottom: 0px;\r\n    font-weight: 600;\r\n    font-size: 13px;\n}\n.story-container-2 .story-author p.time[data-v-0d64ff50] {\r\n    margin-bottom: 0px;\r\n    font-weight: 500;\r\n    font-size: 12px;\n}\n.story-container-2 .story-dp img.add-story[data-v-0d64ff50] {\r\n    position: absolute;\r\n    height: 19px !important;\r\n    width: 19px !important;\r\n    right: -3px;\n}\n.story-container-2 .story-dp img[data-v-0d64ff50] {\r\n    height: 100%;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 50%;\n}\n.story-container-2 p.divider[data-v-0d64ff50] {\r\n    margin: 10px 0px 10px 0px;\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n    color: #404040;\n}\n.widget.box .widget-footer[data-v-0d64ff50] {\r\n    padding: 2rem 2.25rem;\r\n    background-color: #ffffff;\r\n    border-top: 1px solid #EBEDF3;\n}\n.bg-light-primary[data-v-0d64ff50] {\r\n    background-color: #f6f1ff!important;\r\n    border-color: #f6f1ff;\r\n    color: #5526ab;\n}\r\n\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stories_vue_vue_type_style_index_0_id_0d64ff50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stories_vue_vue_type_style_index_0_id_0d64ff50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stories_vue_vue_type_style_index_0_id_0d64ff50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/stories.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/stories.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stories_vue_vue_type_template_id_0d64ff50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stories.vue?vue&type=template&id=0d64ff50&scoped=true& */ "./resources/js/components/stories.vue?vue&type=template&id=0d64ff50&scoped=true&");
/* harmony import */ var _stories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stories.vue?vue&type=script&lang=js& */ "./resources/js/components/stories.vue?vue&type=script&lang=js&");
/* harmony import */ var _stories_vue_vue_type_style_index_0_id_0d64ff50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css& */ "./resources/js/components/stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _stories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stories_vue_vue_type_template_id_0d64ff50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _stories_vue_vue_type_template_id_0d64ff50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0d64ff50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/stories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/stories.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/stories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stories_vue_vue_type_style_index_0_id_0d64ff50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=style&index=0&id=0d64ff50&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/stories.vue?vue&type=template&id=0d64ff50&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/stories.vue?vue&type=template&id=0d64ff50&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stories_vue_vue_type_template_id_0d64ff50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stories_vue_vue_type_template_id_0d64ff50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stories_vue_vue_type_template_id_0d64ff50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stories.vue?vue&type=template&id=0d64ff50&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=template&id=0d64ff50&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=template&id=0d64ff50&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/stories.vue?vue&type=template&id=0d64ff50&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c(
            "router-link",
            { staticClass: "menuLink", attrs: { to: "/home" } },
            [_vm._v("Home")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row storiesCard" }, [
        _c("div", { staticClass: "col-lg-4 layout-spacing" }, [
          _c("div", { staticClass: "statbox widget box box-shadow" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "widget-content widget-content-area" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12 col-md-12 col-sm-12" }, [
                  _c(
                    "div",
                    { staticClass: "tabcontent", attrs: { id: "content_2" } },
                    [
                      _c(
                        "div",
                        { staticClass: "story-container-2" },
                        [
                          _c("div", { staticClass: "single-story" }, [
                            _c("div", { staticClass: "story-dp" }, [
                              _c("img", {
                                attrs: { src: _vm.currentUserAvatar },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "story-author" }, [
                              _c("p", { staticClass: "name" }, [
                                _vm._v(_vm._s(_vm.currentUserName)),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "time" }, [
                                _vm._v("Tap to add a story"),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "divider" }, [
                            _vm._v("Recently Added"),
                          ]),
                          _vm._v(" "),
                          _vm._l(
                            _vm.recentlyStories,
                            function (recentlyStory, index) {
                              return _c(
                                "div",
                                { key: index, staticClass: "single-story" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "story-dp unseen" },
                                    [
                                      _c("img", {
                                        attrs: { src: recentlyStory.avatar },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "story-author" }, [
                                    _c("p", { staticClass: "name" }, [
                                      _vm._v(_vm._s(recentlyStory.name)),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "time" }, [
                                      _vm._v(_vm._s(recentlyStory.time)),
                                    ]),
                                  ]),
                                ]
                              )
                            }
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "divider" }, [
                            _vm._v("Viewed Stories"),
                          ]),
                          _vm._v(" "),
                          _vm._l(
                            _vm.viewedStories,
                            function (viewedStory, index) {
                              return _c(
                                "div",
                                {
                                  key: "A" + index,
                                  staticClass: "single-story",
                                },
                                [
                                  _c("div", { staticClass: "story-dp seen" }, [
                                    _c("img", {
                                      attrs: { src: viewedStory.avatar },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "story-author" }, [
                                    _c("p", { staticClass: "name" }, [
                                      _vm._v(_vm._s(viewedStory.name)),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "time" }, [
                                      _vm._v(_vm._s(viewedStory.time)),
                                    ]),
                                  ]),
                                ]
                              )
                            }
                          ),
                        ],
                        2
                      ),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "section-title text-center mb-4 pb-2" }, [
          _c("h4", { staticClass: "title mb-4" }, [_vm._v("Stories")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", { staticClass: "pb-0" }, [_vm._v("Stories")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);