"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      features: [],
      members: []
    };
  },
  methods: {
    getFeaturesList: function getFeaturesList() {
      var _this = this;

      axios.get('/api/features').then(function (res) {
        if (res.data.success === true) _this.features = res.data.features;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getMembersList: function getMembersList() {
      var _this2 = this;

      axios.get('/api/team').then(function (res) {
        if (res.data.success === true) _this2.members = res.data.team;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.getFeaturesList();
    this.getMembersList();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody[data-v-fa6affac] {\r\n    margin-top: 20px;\r\n    background: #eee;\n}\n.menuLink[data-v-fa6affac]{\r\n    font-weight: bold;\r\n    margin: 1rem 0;\r\n    font-size: 1rem;\n}\n.service-container[data-v-fa6affac] {\r\n    transition: all 0.5s ease;\n}\n.service-container .icon[data-v-fa6affac] {\r\n    margin-top: 5%;\r\n    font-size: 38px;\r\n    transition: all 0.5s ease;\n}\n.service-container .number-icon .icon-2[data-v-fa6affac] {\r\n    height: 70px;\r\n    width: 70px;\r\n    line-height: 80px;\r\n    border-radius: 64% 36% 55% 45% / 76% 72% 28% 24% !important;\r\n    border-color: #f89d36 !important;\r\n    transition: all 0.5s ease;\n}\n.service-container .number-icon .icon-2 i[data-v-fa6affac] {\r\n    font-size: 30px;\n}\n.service-container .number-icon .number[data-v-fa6affac] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 70px;\r\n    left: 0;\r\n    height: 35px;\r\n    width: 35px;\r\n    margin: 0 auto;\r\n    transition: all 0.5s ease;\n}\n.service-container .number-icon .number span[data-v-fa6affac] {\r\n    line-height: 30px;\n}\n.service-container .content .number[data-v-fa6affac] {\r\n    font-size: 40px;\r\n    color: #dee2e6;\n}\n.service-container .content .title[data-v-fa6affac] {\r\n    transition: all 0.5s ease;\n}\n.service-container.hover-bg[data-v-fa6affac] {\r\n    transition: all 0.5s ease;\n}\n.service-container.hover-bg .smooth-icon[data-v-fa6affac] {\r\n    position: absolute;\r\n    bottom: -40px;\r\n    right: -20px;\r\n    font-size: 60px;\r\n    color: #f8f9fa;\r\n    transition: all 0.8s ease;\n}\n.service-container.hover-bg[data-v-fa6affac]:hover {\r\n    background-color: #f89d36;\n}\n.service-container.hover-bg:hover .content .title[data-v-fa6affac] {\r\n    color: #ffffff !important;\n}\n.service-container.hover-bg:hover .content .serv-pera[data-v-fa6affac] {\r\n    color: #fafafb !important;\n}\n.service-container.hover-bg:hover .smooth-icon[data-v-fa6affac] {\r\n    font-size: 100px;\r\n    opacity: 0.2;\r\n    bottom: -20px;\r\n    right: 10px;\n}\n.service-container[data-v-fa6affac]:hover {\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 25px rgba(47, 60, 78, 0.15) !important;\n}\n.service-container:hover .icon[data-v-fa6affac] {\r\n    color: #f89d36;\r\n    -webkit-animation: mover-data-v-fa6affac 1s infinite alternate;\r\n    animation: mover-data-v-fa6affac 1s infinite alternate;\n}\n.service-container:hover .number-icon .icon-2[data-v-fa6affac] {\r\n    background-color: #f89d36;\r\n    border-radius: 50% !important;\n}\n.service-container:hover .number-icon .icon-2 i[data-v-fa6affac] {\r\n    color: #ffffff !important;\n}\n.service-container:hover .number-icon .number[data-v-fa6affac] {\r\n    color: #ffffff;\r\n    background: #f89d36 !important;\r\n    border-color: #ffffff !important;\n}\n.service-container:hover .content .title[data-v-fa6affac] {\r\n    color: #f89d36;\n}\n.service-container a[data-v-fa6affac]:hover,\r\n.service-container a .title[data-v-fa6affac]:hover {\r\n    color: #f89d36 !important;\n}\n@-webkit-keyframes mover-data-v-fa6affac {\n0% {\r\n        transform: translateY(0);\n}\n100% {\r\n        transform: translateY(-15px);\n}\n}\n@keyframes mover-data-v-fa6affac {\n0% {\r\n        transform: translateY(0);\n}\n100% {\r\n        transform: translateY(-15px);\n}\n}\n.service-wrapper[data-v-fa6affac] {\r\n    transition: all 0.5s ease;\n}\n.service-wrapper .icon[data-v-fa6affac] {\r\n    width: 60px;\r\n    height: 60px;\r\n    line-height: 45px;\r\n    transition: all 0.5s ease;\n}\n.service-wrapper .content .title[data-v-fa6affac] {\r\n    transition: all 0.5s ease;\r\n    font-weight: 500;\n}\n.service-wrapper .big-icon[data-v-fa6affac] {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    opacity: 0.05;\r\n    transition: all 0.5s ease;\n}\n.service-wrapper[data-v-fa6affac]:hover {\r\n    box-shadow: 0 10px 25px rgba(47, 60, 78, 0.15) !important;\r\n    background: #ffffff;\r\n    transform: translateY(-8px);\r\n    border-color: transparent !important;\n}\n.service-wrapper:hover .icon[data-v-fa6affac] {\r\n    background: #0062ff !important;\r\n    color: #ffffff !important;\n}\n.service-wrapper:hover .big-icon[data-v-fa6affac] {\r\n    z-index: -1;\r\n    opacity: 0.1;\r\n    font-size: 160px;\n}\n.text-custom[data-v-fa6affac] {\r\n    color: #0062ff !important;\n}\n.uim-svg[data-v-fa6affac] {\r\n    display: inline-block;\r\n    height: 1em;\r\n    vertical-align: -0.125em;\r\n    font-size: inherit;\r\n    fill: var(--uim-color, currentColor);\n}\nh4.title[data-v-fa6affac]{\r\n    margin: 1rem 0;\n}\n.teamSection[data-v-fa6affac] {\r\n    border-top: 1px solid #00000020;\r\n    margin: 1rem 0;\n}\n.radius-15[data-v-fa6affac] {\r\n    border-radius: 15px;\n}\n.card[data-v-fa6affac] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 0px solid rgba(0, 0, 0, 0);\r\n    border-radius: .25rem;\r\n    margin-bottom: 1.5rem;\r\n    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);\n}\nelement.style[data-v-fa6affac] {\n}\n.list-inline-item[data-v-fa6affac]:not(:last-child) {\r\n    margin-right: .5rem;\n}\n.contacts-social a[data-v-fa6affac] {\r\n    background: #ffffff;\r\n    border: 1px solid #eeecec;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    color: #2b2a2a;\n}\n.contacts-social a img[data-v-fa6affac] {\r\n    width: 30px ;\n}\n.bg-facebook[data-v-fa6affac] {\r\n    background-color: #3b5998!important;\n}\n.bg-twitter[data-v-fa6affac] {\r\n    background-color: #55acee!important;\n}\n.bg-linkedin[data-v-fa6affac] {\r\n    background-color: #0976b4!important;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=fa6affac&scoped=true& */ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& */ "./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fa6affac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=fa6affac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            { staticClass: "menuLink", attrs: { to: "/stories" } },
            [_vm._v("Stories")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.features, function (feature, index) {
          return _c(
            "div",
            { key: index, staticClass: "col-lg-4 col-md-6 col-12 mt-4 pt-2" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "card service-wrapper rounded border-0 shadow p-4",
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon text-center text-custom h1 shadow rounded bg-white",
                    },
                    [
                      _c("span", { staticClass: "uim-svg" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              width: "1em",
                            },
                          },
                          [
                            _c("path", {
                              staticClass: "uim-primary",
                              attrs: {
                                d: "M12,6a.99974.99974,0,0,1,1,1v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12V7A.99974.99974,0,0,1,12,6Z",
                              },
                            }),
                            _c("path", {
                              staticClass: "uim-tertiary",
                              attrs: {
                                d: "M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12Z",
                              },
                            }),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "content mt-4" }, [
                    _c("h5", { staticClass: "title" }, [
                      _vm._v(_vm._s(feature.name)),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted mt-3 mb-0" }, [
                      _vm._v(_vm._s(feature.description)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "big-icon h1 text-custom" }, [
                    _c("span", { staticClass: "uim-svg" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "1em",
                          },
                        },
                        [
                          _c("path", {
                            staticClass: "uim-primary",
                            attrs: {
                              d: "M12,6a.99974.99974,0,0,1,1,1v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12V7A.99974.99974,0,0,1,12,6Z",
                            },
                          }),
                          _c("path", {
                            staticClass: "uim-tertiary",
                            attrs: {
                              d: "M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12Z",
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "teamSection" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row row-cols-1 row-cols-lg-2 row-cols-xl-4" },
          _vm._l(_vm.members, function (member, index) {
            return _c("div", { key: index, staticClass: "col" }, [
              _c("div", { staticClass: "card radius-15" }, [
                _c("div", { staticClass: "card-body text-center" }, [
                  _c("div", { staticClass: "p-4 border radius-15" }, [
                    _c("img", {
                      staticClass: "rounded-circle shadow",
                      attrs: {
                        src: member.avatar,
                        width: "110",
                        height: "110",
                        alt: "",
                      },
                    }),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mb-0 mt-5" }, [
                      _vm._v(_vm._s(member.name)),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-3" }, [
                      _vm._v(_vm._s(member.title)),
                    ]),
                    _vm._v(" "),
                    _vm._m(2, true),
                    _vm._v(" "),
                    _vm._m(3, true),
                  ]),
                ]),
              ]),
            ])
          }),
          0
        ),
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
          _c("h4", { staticClass: "title mb-4" }, [_vm._v("Our Features")]),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted para-desc mx-auto mb-0" }, [
            _vm._v(
              "There is now an abundance of readable dummy texts.\n                        These are usually used when a text is required purely to fill a space."
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "section-title text-center mb-4 pb-2" }, [
          _c("h4", { staticClass: "title mb-4" }, [_vm._v("Our Team")]),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted para-desc mx-auto mb-0" }, [
            _vm._v(
              "There is now an abundance of readable dummy texts.\n                            These are usually used when a text is required purely to fill a space."
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "list-inline contacts-social mt-3 mb-3" }, [
      _c(
        "a",
        {
          attrs: {
            href: "https://cdnlogo.com/logo/facebook-circle-icon_428.html",
          },
        },
        [
          _c("img", {
            attrs: { src: "https://cdn.cdnlogo.com/logos/f/83/facebook.svg" },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        { attrs: { href: "https://cdnlogo.com/logo/twitter_500.html" } },
        [
          _c("img", {
            attrs: { src: "https://cdn.cdnlogo.com/logos/t/39/twitter.svg" },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          attrs: { href: "https://cdnlogo.com/logo/linkedin-icon_39431.html" },
        },
        [
          _c("img", {
            attrs: {
              src: "https://cdn.cdnlogo.com/logos/l/78/linkedin-icon.svg",
            },
          }),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-grid" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-outline-primary radius-15",
          attrs: { href: "#" },
        },
        [_vm._v("Contact Me")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);