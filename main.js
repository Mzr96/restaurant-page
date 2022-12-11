/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/css/general.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/css/general.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n--- 01 TYPOGRAPHY SYSTEM\r\n\r\n- Font sizes (px)\r\n10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98\r\n\r\n- Font weights\r\nDefault: 400\r\nMedium: 500\r\nSemi-bold: 600\r\nBold: 700\r\n\r\n- Line heights\r\nDefault: 1\r\nSmall: 1.05\r\nParagraph default: 1.6\r\n\r\n\r\n\r\n- Letter spacing\r\n-0.5px\r\n0.75px\r\n\r\n--- 02 COLORS\r\n\r\n- Primary: #e67e22\r\n- Tints:\r\n#fdf2e9\r\n#fae5d3\r\n- Shades: \r\n#cf711f\r\n45260a\r\n\r\n- Accents:\r\n- Greys\r\n#6f6f6f (lightest grey allowed on #fdf2e9)\r\n#555\r\n#333\r\n\r\n\r\n--- 05 SHADOWS\r\n\r\n\r\n--- 06 BORDER-RADIUS\r\nDefault: 9px\r\nMedium: 11px\r\n\r\n--- 07 WHITESPACE\r\n\r\n- Spacing system (px)\r\n2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128\r\n*/\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  /* Change the rem to 10px dynamicly */\r\n  /* Use percentage to respect user if they want to change default font size */\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: \"Rubik\", sans-serif;\r\n  line-height: 1;\r\n  font-weight: 400;\r\n  color: #555;\r\n}\r\n\r\n*:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 0 0.8rem rgba(230, 125, 34, 0.5);\r\n}\r\n/***************************/\r\n/* GENERAL REUSABLE COMPONENTS */\r\n/***************************/\r\n\r\n.container {\r\n  max-width: 120rem;\r\n  padding: 0 3.2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  row-gap: 9.6rem;\r\n  column-gap: 6.4rem;\r\n  /* margin-bottom: 9.6rem; */\r\n}\r\n\r\n/* .grid:last-child {\r\n  margin-bottom: 0;\r\n} */\r\n\r\n.grid:not(:last-child) {\r\n  margin-bottom: 9.6rem;\r\n}\r\n\r\n.grid--2-cols {\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.grid--3-cols {\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.grid--4-cols {\r\n  grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.grid--5-cols {\r\n  grid-template-columns: repeat(5, 1fr);\r\n}\r\n\r\n.heading-primary,\r\n.heading-secondary,\r\n.heading-tertiary {\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n  color: #333;\r\n}\r\n\r\n.heading-primary {\r\n  font-size: 5.2rem;\r\n  line-height: 1.05;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.heading-secondary {\r\n  font-size: 4.4rem;\r\n  line-height: 1.2;\r\n  /* margin-bottom: 9.6rem; */\r\n}\r\n\r\n.heading-tertiary {\r\n  font-size: 3rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.subheading {\r\n  display: block;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n  color: #cf711f;\r\n  text-transform: uppercase;\r\n  margin-bottom: 1.6rem;\r\n  letter-spacing: 0.75px;\r\n}\r\n\r\n.btn,\r\n.btn:link,\r\n.btn:visited {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 1.6rem 3.2rem;\r\n  border-radius: 9px;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n  border-radius: 9px;\r\n  font-family: inherit;\r\n}\r\n\r\n.btn--full:link,\r\n.btn--full:visited {\r\n  color: #fff;\r\n  background-color: #e67e22;\r\n}\r\n\r\n.btn--full:hover,\r\n.btn--full:active {\r\n  background-color: #cf711f;\r\n}\r\n\r\n.margin-right-sm:link,\r\n.margin-right-sm:visited {\r\n  display: inline-block;\r\n  margin-right: 1.6rem;\r\n}\r\n\r\n.btn--outline:visited,\r\n.btn--outline:link {\r\n  color: #555;\r\n  background-color: #fff;\r\n}\r\n\r\n.btn--outline:hover,\r\n.btn--outline:active {\r\n  background-color: #fdf2e9;\r\n  box-shadow: inset 0 0 0 3px #fff;\r\n}\r\n\r\n.btn--form {\r\n  background-color: #45260a;\r\n  border: none;\r\n  color: #fdf2e9;\r\n  align-self: end;\r\n  padding: 1.2rem;\r\n}\r\n\r\n.btn--form:hover {\r\n  background-color: #fff;\r\n  color: #333;\r\n}\r\n\r\n.margin-bottom-md {\r\n  margin-bottom: 4.8rem !important;\r\n}\r\n\r\nstrong {\r\n  font-weight: 500;\r\n}\r\n\r\n.list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.6rem;\r\n}\r\n\r\n.list-item {\r\n  font-size: 1.8rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.6rem;\r\n}\r\n\r\n.list-icon {\r\n  font-size: 3rem;\r\n  color: #e67e22;\r\n}\r\n", "",{"version":3,"sources":["webpack://./assets/css/general.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAmDC;AACD;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,qCAAqC;EACrC,4EAA4E;EAC5E,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,cAAc;EACd,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gDAAgD;AAClD;AACA,4BAA4B;AAC5B,gCAAgC;AAChC,4BAA4B;;AAE5B;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;;GAEG;;AAEH;EACE,qBAAqB;AACvB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;;;EAGE,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;;;EAGE,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;;EAEE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;;EAEE,WAAW;EACX,sBAAsB;AACxB;;AAEA;;EAEE,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,cAAc;AAChB","sourcesContent":["/*\r\n--- 01 TYPOGRAPHY SYSTEM\r\n\r\n- Font sizes (px)\r\n10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98\r\n\r\n- Font weights\r\nDefault: 400\r\nMedium: 500\r\nSemi-bold: 600\r\nBold: 700\r\n\r\n- Line heights\r\nDefault: 1\r\nSmall: 1.05\r\nParagraph default: 1.6\r\n\r\n\r\n\r\n- Letter spacing\r\n-0.5px\r\n0.75px\r\n\r\n--- 02 COLORS\r\n\r\n- Primary: #e67e22\r\n- Tints:\r\n#fdf2e9\r\n#fae5d3\r\n- Shades: \r\n#cf711f\r\n45260a\r\n\r\n- Accents:\r\n- Greys\r\n#6f6f6f (lightest grey allowed on #fdf2e9)\r\n#555\r\n#333\r\n\r\n\r\n--- 05 SHADOWS\r\n\r\n\r\n--- 06 BORDER-RADIUS\r\nDefault: 9px\r\nMedium: 11px\r\n\r\n--- 07 WHITESPACE\r\n\r\n- Spacing system (px)\r\n2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128\r\n*/\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  /* Change the rem to 10px dynamicly */\r\n  /* Use percentage to respect user if they want to change default font size */\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: \"Rubik\", sans-serif;\r\n  line-height: 1;\r\n  font-weight: 400;\r\n  color: #555;\r\n}\r\n\r\n*:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 0 0.8rem rgba(230, 125, 34, 0.5);\r\n}\r\n/***************************/\r\n/* GENERAL REUSABLE COMPONENTS */\r\n/***************************/\r\n\r\n.container {\r\n  max-width: 120rem;\r\n  padding: 0 3.2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  row-gap: 9.6rem;\r\n  column-gap: 6.4rem;\r\n  /* margin-bottom: 9.6rem; */\r\n}\r\n\r\n/* .grid:last-child {\r\n  margin-bottom: 0;\r\n} */\r\n\r\n.grid:not(:last-child) {\r\n  margin-bottom: 9.6rem;\r\n}\r\n\r\n.grid--2-cols {\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.grid--3-cols {\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.grid--4-cols {\r\n  grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.grid--5-cols {\r\n  grid-template-columns: repeat(5, 1fr);\r\n}\r\n\r\n.heading-primary,\r\n.heading-secondary,\r\n.heading-tertiary {\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n  color: #333;\r\n}\r\n\r\n.heading-primary {\r\n  font-size: 5.2rem;\r\n  line-height: 1.05;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.heading-secondary {\r\n  font-size: 4.4rem;\r\n  line-height: 1.2;\r\n  /* margin-bottom: 9.6rem; */\r\n}\r\n\r\n.heading-tertiary {\r\n  font-size: 3rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.subheading {\r\n  display: block;\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n  color: #cf711f;\r\n  text-transform: uppercase;\r\n  margin-bottom: 1.6rem;\r\n  letter-spacing: 0.75px;\r\n}\r\n\r\n.btn,\r\n.btn:link,\r\n.btn:visited {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 1.6rem 3.2rem;\r\n  border-radius: 9px;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n  border-radius: 9px;\r\n  font-family: inherit;\r\n}\r\n\r\n.btn--full:link,\r\n.btn--full:visited {\r\n  color: #fff;\r\n  background-color: #e67e22;\r\n}\r\n\r\n.btn--full:hover,\r\n.btn--full:active {\r\n  background-color: #cf711f;\r\n}\r\n\r\n.margin-right-sm:link,\r\n.margin-right-sm:visited {\r\n  display: inline-block;\r\n  margin-right: 1.6rem;\r\n}\r\n\r\n.btn--outline:visited,\r\n.btn--outline:link {\r\n  color: #555;\r\n  background-color: #fff;\r\n}\r\n\r\n.btn--outline:hover,\r\n.btn--outline:active {\r\n  background-color: #fdf2e9;\r\n  box-shadow: inset 0 0 0 3px #fff;\r\n}\r\n\r\n.btn--form {\r\n  background-color: #45260a;\r\n  border: none;\r\n  color: #fdf2e9;\r\n  align-self: end;\r\n  padding: 1.2rem;\r\n}\r\n\r\n.btn--form:hover {\r\n  background-color: #fff;\r\n  color: #333;\r\n}\r\n\r\n.margin-bottom-md {\r\n  margin-bottom: 4.8rem !important;\r\n}\r\n\r\nstrong {\r\n  font-weight: 500;\r\n}\r\n\r\n.list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.6rem;\r\n}\r\n\r\n.list-item {\r\n  font-size: 1.8rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.6rem;\r\n}\r\n\r\n.list-icon {\r\n  font-size: 3rem;\r\n  color: #e67e22;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/css/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/css/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/eating.jpg */ "./assets/img/eating.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/***************************/\r\n/* HEADER */\r\n/***************************/\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 4.8rem;\r\n  background-color: #fdf2e9;\r\n\r\n  /* Because we want header to be sticky later */\r\n  height: 9.6rem;\r\n}\r\n\r\n.logo {\r\n  height: 2.2rem;\r\n}\r\n\r\n.main-nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 3.2rem;\r\n  font-size: 1.8rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.main-nav-link:link,\r\n.main-nav-link:visited {\r\n  text-decoration: none;\r\n  color: #333;\r\n  font-size: 1.8rem;\r\n  font-weight: 500;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.main-nav-link:hover,\r\n.main-nav-link:active {\r\n  color: #e67e22;\r\n}\r\n\r\n.main-nav-link.nav-cta:link,\r\n.main-nav-link.nav-cta:visited {\r\n  background-color: #e67e22;\r\n  color: #fff;\r\n  padding: 1.2rem 2.4rem;\r\n  border-radius: 9px;\r\n}\r\n\r\n.main-nav-link.nav-cta:hover,\r\n.main-nav-link.nav-cta:active {\r\n  background-color: #cf711f;\r\n}\r\n\r\n/***************************/\r\n/* NAVIGATION */\r\n/***************************/\r\n\r\n/***************************/\r\n/* HERO SECTION */\r\n/***************************/\r\n.section-hero {\r\n  /* justify-content: center; */\r\n\r\n  padding: 4.8rem 0 9.6rem 0;\r\n  background-color: #fdf2e9;\r\n}\r\n\r\n.hero {\r\n  max-width: 130rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 9.6 rem;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  padding: 0 4.8rem;\r\n}\r\n\r\n.hero-text-box {\r\n}\r\n\r\n.hero-description {\r\n  font-size: 2rem;\r\n  line-height: 1.5;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.delivered-meals {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.delivered-meals img {\r\n  width: 4.8rem;\r\n  height: 4.8rem;\r\n  border: 3px solid #fdf2e9;\r\n  border-radius: 50%;\r\n  margin-left: -1.6rem;\r\n}\r\n\r\n.delivered-meals img:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.delivered-text {\r\n  font-size: 1.7rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.delivered-text span {\r\n  color: #cf711f;\r\n}\r\n\r\n.hero-img {\r\n  width: 100%;\r\n}\r\n\r\n/***************************/\r\n/* FETURED IN SECTION*/\r\n/***************************/\r\n.section-featured-in {\r\n  padding: 4.8rem 0 3.2rem 0;\r\n}\r\n\r\n.heading-featured-in {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  letter-spacing: 0.75px;\r\n  color: #888;\r\n  margin-bottom: 2.4rem;\r\n}\r\n\r\n.logos {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.featured-in-img {\r\n  height: 3.2rem;\r\n  filter: brightness(0);\r\n  opacity: 0.5;\r\n}\r\n/***************************/\r\n/* HOW IT WORKS SECTION */\r\n/***************************/\r\n.section-how {\r\n  /* background-color: #fdf2e9; */\r\n  padding: 9.6rem 0;\r\n}\r\n\r\n.how-header {\r\n  grid-column: 1/3;\r\n}\r\n\r\n.step-text-box {\r\n  align-self: center;\r\n}\r\n\r\n.step-number {\r\n  font-size: 8.6rem;\r\n  font-weight: 600;\r\n  color: #ddd;\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.step-description {\r\n  font-size: 1.8rem;\r\n  line-height: 1.8;\r\n}\r\n\r\n.step-img-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n.step-img-box::before,\r\n.step-img-box::after {\r\n  content: \"\";\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.step-img-box::before {\r\n  width: 60%;\r\n  /* height: 70%; */\r\n  padding-bottom: 60%;\r\n  background-color: #fdf2e9;\r\n  z-index: -2;\r\n}\r\n\r\n.step-img-box::after {\r\n  width: 45%;\r\n  padding-bottom: 45%;\r\n  background-color: #fae5d3;\r\n  z-index: -1;\r\n}\r\n\r\n.step-img {\r\n  width: 35%;\r\n}\r\n\r\n/***************************/\r\n/* MEALS SECTION */\r\n/***************************/\r\n.section-meals {\r\n  padding: 9.6rem 0;\r\n}\r\n\r\n.meals-header {\r\n  text-align: center;\r\n\r\n  margin-bottom: 8.6rem !important;\r\n}\r\n\r\n.meal-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 11px;\r\n  transition: all 0.5s;\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-card:hover {\r\n  transform: translate(0, -3%);\r\n}\r\n\r\n.meal-img {\r\n  width: 100%;\r\n  /* border-top-left-radius: 11px;\r\n  border-top-right-radius: 11px; */\r\n}\r\n\r\n.meal-content {\r\n  padding: 3.2rem 4.8rem 4.8rem 4.8rem;\r\n  color: #333;\r\n}\r\n\r\n.meal-tags {\r\n  display: flex;\r\n  gap: 0.4rem;\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.tag {\r\n  display: inline-block;\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 2rem;\r\n  font-size: 1.2rem;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n}\r\n\r\n.tag--vegetarian {\r\n  background-color: #51cf66;\r\n}\r\n\r\n.tag--vegan {\r\n  background-color: #94d82d;\r\n}\r\n\r\n.tag--paleo {\r\n  background-color: #ffd43b;\r\n}\r\n\r\n.meal-title {\r\n  font-size: 2.4rem;\r\n  color: #333;\r\n  font-weight: 600;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.meal-attributes {\r\n  color: #555;\r\n  gap: 2rem;\r\n}\r\n\r\n.meal-attributes li {\r\n  font-size: 1.8rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.meal-attributes li ion-icon {\r\n  font-size: 2.4rem;\r\n}\r\n\r\n/* .meal-attributes li span {\r\n  font-weight: 600;\r\n} */\r\n\r\n.meal-icon {\r\n  font-size: 2.4rem;\r\n  color: #e67e22;\r\n}\r\n\r\n/* .diets-list {\r\n\r\n} */\r\n\r\n.all-recipes {\r\n  font-size: 1.8rem;\r\n  text-align: center;\r\n}\r\n\r\n.link:link,\r\n.link:visited {\r\n  display: inline-block;\r\n  color: #e67e22;\r\n  text-decoration: none;\r\n  border-bottom: 1px solid currentColor;\r\n  padding-bottom: 2px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.link:hover,\r\n.link:active {\r\n  color: #cf711f;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n/***************************/\r\n/* TESTIMONIALS SECTION */\r\n/***************************/\r\n\r\n.section-testimonials {\r\n  background-color: #fdf2e9;\r\n  display: grid;\r\n  grid-template-columns: 55fr 45fr;\r\n  align-items: center;\r\n}\r\n\r\n.testimonials-container {\r\n  padding: 9.6rem;\r\n}\r\n\r\n.testimonials {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  row-gap: 4.8rem;\r\n  column-gap: 8rem;\r\n  margin-top: 9.6rem;\r\n}\r\n\r\n.testimonial-img {\r\n  width: 6.4rem;\r\n  height: 6.4rem;\r\n  border-radius: 50%;\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.testimonial-text {\r\n  font-size: 1.8rem;\r\n  line-height: 1.8;\r\n  margin-bottom: 1.6rem;\r\n}\r\n\r\n.testimonial-name {\r\n  font-size: 1.6rem;\r\n  color: #6f6f6f;\r\n}\r\n\r\n.gallery {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.6rem;\r\n  padding: 1.6rem;\r\n}\r\n\r\n.gallery-item {\r\n  overflow: hidden;\r\n}\r\n\r\n.img-gallery {\r\n  width: 100%;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.img-gallery:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n/***************************/\r\n/* PRICING SECTION */\r\n/***************************/\r\n.section-pricing {\r\n  padding: 9.6rem 0;\r\n}\r\n\r\n.pricing-header {\r\n  margin-bottom: 9.6rem !important;\r\n}\r\n\r\n.pricing-plan {\r\n  border-radius: 11px;\r\n  width: 75%;\r\n}\r\n\r\n.pricing-plan--starter {\r\n  border: 2px solid #fdf2e9;\r\n  justify-self: end;\r\n  padding: 4.6rem;\r\n}\r\n\r\n.pricing-plan--complete {\r\n  background-color: #fdf2e9;\r\n  padding: 4.8rem;\r\n  justify-self: start;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.pricing-plan--complete::after {\r\n  content: \"Best value\";\r\n  position: absolute;\r\n  text-transform: uppercase;\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  top: 6%;\r\n  right: -18%;\r\n  color: #333;\r\n  background-color: #ffd43b;\r\n  padding: 0.8rem 8rem;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.plan-header {\r\n  text-align: center;\r\n  margin-bottom: 4.8rem;\r\n}\r\n\r\n.plan-name {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: #cf711f;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.75px;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.plan-price {\r\n  font-size: 6.2rem;\r\n  font-weight: 600;\r\n  color: #333;\r\n  margin-bottom: 1.6rem;\r\n}\r\n\r\n.plan-price span {\r\n  font-size: 3rem;\r\n  font-weight: 500;\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.plan-text {\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  color: #6f6f6f;\r\n}\r\n\r\n.plan-sign-up {\r\n  text-align: center;\r\n  margin-top: 4.8rem;\r\n  /* margin-bottom: 3.6rem; */\r\n}\r\n\r\n.plan-details {\r\n  font-size: 1.6rem;\r\n  text-align: center;\r\n}\r\n\r\n.feature-icon {\r\n  color: #e67e22;\r\n  background-color: #fdf2e9;\r\n  width: 3.2rem;\r\n  height: 3.2rem;\r\n  padding: 1.6rem;\r\n  border-radius: 50%;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.feature-title {\r\n  font-size: 2.4rem;\r\n  font-weight: 700;\r\n  color: #333;\r\n  margin-bottom: 1.6rem;\r\n}\r\n\r\n.feature-text {\r\n  font-size: 1.8rem;\r\n  line-height: 1.8;\r\n}\r\n\r\n/***************************/\r\n/* CALL TO ACTION SECTION */\r\n/***************************/\r\n.section-cta {\r\n  /* padding: 9.6rem 0; */\r\n  padding: 4.8rem 0 12.8rem 0;\r\n}\r\n\r\n.cta *:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);\r\n}\r\n\r\n.cta {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n  /* background-color: #e67e22; */\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);\r\n  border-radius: 11px;\r\n  background-image: linear-gradient(to bottom left, #eb984e, #e67e22);\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n.cta-text-box {\r\n  padding: 4.8rem 6.4rem 6.4rem;\r\n  color: #45260a;\r\n}\r\n\r\n.cta .heading-secondary {\r\n  margin-bottom: 3.2rem;\r\n  color: inherit;\r\n}\r\n\r\n.cta-text {\r\n  font-size: 1.8rem;\r\n  line-height: 1.8;\r\n  margin-bottom: 4.8rem;\r\n}\r\n\r\n.cta-form {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 3.2rem;\r\n  row-gap: 2.4rem;\r\n}\r\n\r\n.cta-form div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.2rem;\r\n}\r\n\r\n.cta-form label {\r\n  font-size: 1.6rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.cta-form input,\r\n.cta-form select {\r\n  font-family: inherit;\r\n  font-size: 1.8rem;\r\n  font-weight: 400;\r\n  color: inherit;\r\n  height: 4.6rem;\r\n  padding: 1.2rem;\r\n  background-color: #fdf2e9;\r\n  border-radius: 9px;\r\n  border: none;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.cta-form input::placeholder {\r\n  color: #aaa;\r\n}\r\n\r\noption {\r\n  font-size: 1.8rem;\r\n  font-weight: 400;\r\n  color: #45260a;\r\n}\r\n\r\n.cta-img-box {\r\n  background-image: linear-gradient(\r\n      to bottom left,\r\n      rgba(235, 151, 78, 0.3),\r\n      rgba(230, 125, 34, 0.3)\r\n    ),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n/***************************/\r\n/* FOOTER */\r\n/***************************/\r\n.footer {\r\n  padding: 12.8rem 0;\r\n  border-top: 1px solid #eee;\r\n  /* display: grid;\r\n  grid-template-columns: 3fr 3fr 2fr 2fr 2fr; */\r\n\r\n  /* gap: 6.4rem; */\r\n}\r\n\r\n.grid--footer {\r\n  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;\r\n}\r\n\r\n.logo-col {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.footer-heading {\r\n  font-size: 1.8rem;\r\n  font-weight: 500;\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.social-links {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 2.4rem;\r\n  margin-top: 3.2rem;\r\n  /* margin-bottom: 6.4rem; */\r\n}\r\n\r\n.footer-link:link,\r\n.footer-link:visited {\r\n  text-decoration: none;\r\n  font-size: 1.6rem;\r\n  color: #767676;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.footer-link:hover,\r\n.footer-link:active {\r\n  color: #555;\r\n}\r\n\r\n.social-icon {\r\n  height: 2.4rem;\r\n  width: 2.4rem;\r\n}\r\n\r\n.copyright {\r\n  font-size: 1.4rem;\r\n  color: #767676;\r\n  line-height: 1.6;\r\n  margin-top: auto;\r\n}\r\n\r\n.contacts {\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  font-style: normal;\r\n}\r\n\r\n.address {\r\n  margin-bottom: 2.4rem;\r\n}\r\n\r\n.footer-nav {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2.4rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./assets/css/style.css"],"names":[],"mappings":"AAAA,4BAA4B;AAC5B,WAAW;AACX,4BAA4B;AAC5B;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;;EAEzB,8CAA8C;EAC9C,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;;EAEE,qBAAqB;EACrB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;;EAEE,yBAAyB;EACzB,WAAW;EACX,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA,4BAA4B;AAC5B,eAAe;AACf,4BAA4B;;AAE5B,4BAA4B;AAC5B,iBAAiB;AACjB,4BAA4B;AAC5B;EACE,6BAA6B;;EAE7B,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;AACA;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA,4BAA4B;AAC5B,sBAAsB;AACtB,4BAA4B;AAC5B;EACE,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,YAAY;AACd;AACA,4BAA4B;AAC5B,yBAAyB;AACzB,4BAA4B;AAC5B;EACE,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA,4BAA4B;AAC5B,kBAAkB;AAClB,4BAA4B;AAC5B;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;;EAElB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,gDAAgD;EAChD,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX;kCACgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;GAEG;;AAEH;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;;GAEG;;AAEH;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,qBAAqB;EACrB,cAAc;EACd,qBAAqB;EACrB,qCAAqC;EACrC,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;EAEE,cAAc;EACd,oCAAoC;AACtC;;AAEA,4BAA4B;AAC5B,yBAAyB;AACzB,4BAA4B;;AAE5B;EACE,yBAAyB;EACzB,aAAa;EACb,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,4BAA4B;AAC5B,oBAAoB;AACpB,4BAA4B;AAC5B;EACE,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,OAAO;EACP,WAAW;EACX,WAAW;EACX,yBAAyB;EACzB,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,4BAA4B;AAC5B,2BAA2B;AAC3B,4BAA4B;AAC5B;EACE,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,+BAA+B;EAC/B,+CAA+C;EAC/C,mBAAmB;EACnB,mEAAmE;;EAEnE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;;EAEE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,cAAc;EACd,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,wCAAwC;AAC1C;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE;;;;;2CAKwB;EACxB,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA,4BAA4B;AAC5B,WAAW;AACX,4BAA4B;AAC5B;EACE,kBAAkB;EAClB,0BAA0B;EAC1B;+CAC6C;;EAE7C,iBAAiB;AACnB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;;EAEE,qBAAqB;EACrB,iBAAiB;EACjB,cAAc;EACd,oBAAoB;AACtB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb","sourcesContent":["/***************************/\r\n/* HEADER */\r\n/***************************/\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 4.8rem;\r\n  background-color: #fdf2e9;\r\n\r\n  /* Because we want header to be sticky later */\r\n  height: 9.6rem;\r\n}\r\n\r\n.logo {\r\n  height: 2.2rem;\r\n}\r\n\r\n.main-nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 3.2rem;\r\n  font-size: 1.8rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.main-nav-link:link,\r\n.main-nav-link:visited {\r\n  text-decoration: none;\r\n  color: #333;\r\n  font-size: 1.8rem;\r\n  font-weight: 500;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.main-nav-link:hover,\r\n.main-nav-link:active {\r\n  color: #e67e22;\r\n}\r\n\r\n.main-nav-link.nav-cta:link,\r\n.main-nav-link.nav-cta:visited {\r\n  background-color: #e67e22;\r\n  color: #fff;\r\n  padding: 1.2rem 2.4rem;\r\n  border-radius: 9px;\r\n}\r\n\r\n.main-nav-link.nav-cta:hover,\r\n.main-nav-link.nav-cta:active {\r\n  background-color: #cf711f;\r\n}\r\n\r\n/***************************/\r\n/* NAVIGATION */\r\n/***************************/\r\n\r\n/***************************/\r\n/* HERO SECTION */\r\n/***************************/\r\n.section-hero {\r\n  /* justify-content: center; */\r\n\r\n  padding: 4.8rem 0 9.6rem 0;\r\n  background-color: #fdf2e9;\r\n}\r\n\r\n.hero {\r\n  max-width: 130rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 9.6 rem;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  padding: 0 4.8rem;\r\n}\r\n\r\n.hero-text-box {\r\n}\r\n\r\n.hero-description {\r\n  font-size: 2rem;\r\n  line-height: 1.5;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.delivered-meals {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.delivered-meals img {\r\n  width: 4.8rem;\r\n  height: 4.8rem;\r\n  border: 3px solid #fdf2e9;\r\n  border-radius: 50%;\r\n  margin-left: -1.6rem;\r\n}\r\n\r\n.delivered-meals img:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.delivered-text {\r\n  font-size: 1.7rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.delivered-text span {\r\n  color: #cf711f;\r\n}\r\n\r\n.hero-img {\r\n  width: 100%;\r\n}\r\n\r\n/***************************/\r\n/* FETURED IN SECTION*/\r\n/***************************/\r\n.section-featured-in {\r\n  padding: 4.8rem 0 3.2rem 0;\r\n}\r\n\r\n.heading-featured-in {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  letter-spacing: 0.75px;\r\n  color: #888;\r\n  margin-bottom: 2.4rem;\r\n}\r\n\r\n.logos {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.featured-in-img {\r\n  height: 3.2rem;\r\n  filter: brightness(0);\r\n  opacity: 0.5;\r\n}\r\n/***************************/\r\n/* HOW IT WORKS SECTION */\r\n/***************************/\r\n.section-how {\r\n  /* background-color: #fdf2e9; */\r\n  padding: 9.6rem 0;\r\n}\r\n\r\n.how-header {\r\n  grid-column: 1/3;\r\n}\r\n\r\n.step-text-box {\r\n  align-self: center;\r\n}\r\n\r\n.step-number {\r\n  font-size: 8.6rem;\r\n  font-weight: 600;\r\n  color: #ddd;\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.step-description {\r\n  font-size: 1.8rem;\r\n  line-height: 1.8;\r\n}\r\n\r\n.step-img-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n.step-img-box::before,\r\n.step-img-box::after {\r\n  content: \"\";\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.step-img-box::before {\r\n  width: 60%;\r\n  /* height: 70%; */\r\n  padding-bottom: 60%;\r\n  background-color: #fdf2e9;\r\n  z-index: -2;\r\n}\r\n\r\n.step-img-box::after {\r\n  width: 45%;\r\n  padding-bottom: 45%;\r\n  background-color: #fae5d3;\r\n  z-index: -1;\r\n}\r\n\r\n.step-img {\r\n  width: 35%;\r\n}\r\n\r\n/***************************/\r\n/* MEALS SECTION */\r\n/***************************/\r\n.section-meals {\r\n  padding: 9.6rem 0;\r\n}\r\n\r\n.meals-header {\r\n  text-align: center;\r\n\r\n  margin-bottom: 8.6rem !important;\r\n}\r\n\r\n.meal-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 11px;\r\n  transition: all 0.5s;\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-card:hover {\r\n  transform: translate(0, -3%);\r\n}\r\n\r\n.meal-img {\r\n  width: 100%;\r\n  /* border-top-left-radius: 11px;\r\n  border-top-right-radius: 11px; */\r\n}\r\n\r\n.meal-content {\r\n  padding: 3.2rem 4.8rem 4.8rem 4.8rem;\r\n  color: #333;\r\n}\r\n\r\n.meal-tags {\r\n  display: flex;\r\n  gap: 0.4rem;\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.tag {\r\n  display: inline-block;\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 2rem;\r\n  font-size: 1.2rem;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n}\r\n\r\n.tag--vegetarian {\r\n  background-color: #51cf66;\r\n}\r\n\r\n.tag--vegan {\r\n  background-color: #94d82d;\r\n}\r\n\r\n.tag--paleo {\r\n  background-color: #ffd43b;\r\n}\r\n\r\n.meal-title {\r\n  font-size: 2.4rem;\r\n  color: #333;\r\n  font-weight: 600;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.meal-attributes {\r\n  color: #555;\r\n  gap: 2rem;\r\n}\r\n\r\n.meal-attributes li {\r\n  font-size: 1.8rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.meal-attributes li ion-icon {\r\n  font-size: 2.4rem;\r\n}\r\n\r\n/* .meal-attributes li span {\r\n  font-weight: 600;\r\n} */\r\n\r\n.meal-icon {\r\n  font-size: 2.4rem;\r\n  color: #e67e22;\r\n}\r\n\r\n/* .diets-list {\r\n\r\n} */\r\n\r\n.all-recipes {\r\n  font-size: 1.8rem;\r\n  text-align: center;\r\n}\r\n\r\n.link:link,\r\n.link:visited {\r\n  display: inline-block;\r\n  color: #e67e22;\r\n  text-decoration: none;\r\n  border-bottom: 1px solid currentColor;\r\n  padding-bottom: 2px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.link:hover,\r\n.link:active {\r\n  color: #cf711f;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n/***************************/\r\n/* TESTIMONIALS SECTION */\r\n/***************************/\r\n\r\n.section-testimonials {\r\n  background-color: #fdf2e9;\r\n  display: grid;\r\n  grid-template-columns: 55fr 45fr;\r\n  align-items: center;\r\n}\r\n\r\n.testimonials-container {\r\n  padding: 9.6rem;\r\n}\r\n\r\n.testimonials {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  row-gap: 4.8rem;\r\n  column-gap: 8rem;\r\n  margin-top: 9.6rem;\r\n}\r\n\r\n.testimonial-img {\r\n  width: 6.4rem;\r\n  height: 6.4rem;\r\n  border-radius: 50%;\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.testimonial-text {\r\n  font-size: 1.8rem;\r\n  line-height: 1.8;\r\n  margin-bottom: 1.6rem;\r\n}\r\n\r\n.testimonial-name {\r\n  font-size: 1.6rem;\r\n  color: #6f6f6f;\r\n}\r\n\r\n.gallery {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.6rem;\r\n  padding: 1.6rem;\r\n}\r\n\r\n.gallery-item {\r\n  overflow: hidden;\r\n}\r\n\r\n.img-gallery {\r\n  width: 100%;\r\n  transition: all 0.6s;\r\n}\r\n\r\n.img-gallery:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n/***************************/\r\n/* PRICING SECTION */\r\n/***************************/\r\n.section-pricing {\r\n  padding: 9.6rem 0;\r\n}\r\n\r\n.pricing-header {\r\n  margin-bottom: 9.6rem !important;\r\n}\r\n\r\n.pricing-plan {\r\n  border-radius: 11px;\r\n  width: 75%;\r\n}\r\n\r\n.pricing-plan--starter {\r\n  border: 2px solid #fdf2e9;\r\n  justify-self: end;\r\n  padding: 4.6rem;\r\n}\r\n\r\n.pricing-plan--complete {\r\n  background-color: #fdf2e9;\r\n  padding: 4.8rem;\r\n  justify-self: start;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.pricing-plan--complete::after {\r\n  content: \"Best value\";\r\n  position: absolute;\r\n  text-transform: uppercase;\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  top: 6%;\r\n  right: -18%;\r\n  color: #333;\r\n  background-color: #ffd43b;\r\n  padding: 0.8rem 8rem;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.plan-header {\r\n  text-align: center;\r\n  margin-bottom: 4.8rem;\r\n}\r\n\r\n.plan-name {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: #cf711f;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.75px;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.plan-price {\r\n  font-size: 6.2rem;\r\n  font-weight: 600;\r\n  color: #333;\r\n  margin-bottom: 1.6rem;\r\n}\r\n\r\n.plan-price span {\r\n  font-size: 3rem;\r\n  font-weight: 500;\r\n  margin-right: 0.8rem;\r\n}\r\n\r\n.plan-text {\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  color: #6f6f6f;\r\n}\r\n\r\n.plan-sign-up {\r\n  text-align: center;\r\n  margin-top: 4.8rem;\r\n  /* margin-bottom: 3.6rem; */\r\n}\r\n\r\n.plan-details {\r\n  font-size: 1.6rem;\r\n  text-align: center;\r\n}\r\n\r\n.feature-icon {\r\n  color: #e67e22;\r\n  background-color: #fdf2e9;\r\n  width: 3.2rem;\r\n  height: 3.2rem;\r\n  padding: 1.6rem;\r\n  border-radius: 50%;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.feature-title {\r\n  font-size: 2.4rem;\r\n  font-weight: 700;\r\n  color: #333;\r\n  margin-bottom: 1.6rem;\r\n}\r\n\r\n.feature-text {\r\n  font-size: 1.8rem;\r\n  line-height: 1.8;\r\n}\r\n\r\n/***************************/\r\n/* CALL TO ACTION SECTION */\r\n/***************************/\r\n.section-cta {\r\n  /* padding: 9.6rem 0; */\r\n  padding: 4.8rem 0 12.8rem 0;\r\n}\r\n\r\n.cta *:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);\r\n}\r\n\r\n.cta {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n  /* background-color: #e67e22; */\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);\r\n  border-radius: 11px;\r\n  background-image: linear-gradient(to bottom left, #eb984e, #e67e22);\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n.cta-text-box {\r\n  padding: 4.8rem 6.4rem 6.4rem;\r\n  color: #45260a;\r\n}\r\n\r\n.cta .heading-secondary {\r\n  margin-bottom: 3.2rem;\r\n  color: inherit;\r\n}\r\n\r\n.cta-text {\r\n  font-size: 1.8rem;\r\n  line-height: 1.8;\r\n  margin-bottom: 4.8rem;\r\n}\r\n\r\n.cta-form {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 3.2rem;\r\n  row-gap: 2.4rem;\r\n}\r\n\r\n.cta-form div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.2rem;\r\n}\r\n\r\n.cta-form label {\r\n  font-size: 1.6rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.cta-form input,\r\n.cta-form select {\r\n  font-family: inherit;\r\n  font-size: 1.8rem;\r\n  font-weight: 400;\r\n  color: inherit;\r\n  height: 4.6rem;\r\n  padding: 1.2rem;\r\n  background-color: #fdf2e9;\r\n  border-radius: 9px;\r\n  border: none;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.cta-form input::placeholder {\r\n  color: #aaa;\r\n}\r\n\r\noption {\r\n  font-size: 1.8rem;\r\n  font-weight: 400;\r\n  color: #45260a;\r\n}\r\n\r\n.cta-img-box {\r\n  background-image: linear-gradient(\r\n      to bottom left,\r\n      rgba(235, 151, 78, 0.3),\r\n      rgba(230, 125, 34, 0.3)\r\n    ),\r\n    url(../img/eating.jpg);\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n/***************************/\r\n/* FOOTER */\r\n/***************************/\r\n.footer {\r\n  padding: 12.8rem 0;\r\n  border-top: 1px solid #eee;\r\n  /* display: grid;\r\n  grid-template-columns: 3fr 3fr 2fr 2fr 2fr; */\r\n\r\n  /* gap: 6.4rem; */\r\n}\r\n\r\n.grid--footer {\r\n  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;\r\n}\r\n\r\n.logo-col {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.footer-heading {\r\n  font-size: 1.8rem;\r\n  font-weight: 500;\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.social-links {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 2.4rem;\r\n  margin-top: 3.2rem;\r\n  /* margin-bottom: 6.4rem; */\r\n}\r\n\r\n.footer-link:link,\r\n.footer-link:visited {\r\n  text-decoration: none;\r\n  font-size: 1.6rem;\r\n  color: #767676;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.footer-link:hover,\r\n.footer-link:active {\r\n  color: #555;\r\n}\r\n\r\n.social-icon {\r\n  height: 2.4rem;\r\n  width: 2.4rem;\r\n}\r\n\r\n.copyright {\r\n  font-size: 1.4rem;\r\n  color: #767676;\r\n  line-height: 1.6;\r\n  margin-top: auto;\r\n}\r\n\r\n.contacts {\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  font-style: normal;\r\n}\r\n\r\n.address {\r\n  margin-bottom: 2.4rem;\r\n}\r\n\r\n.footer-nav {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2.4rem;\r\n}\r\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./assets/css/general.css":
/*!********************************!*\
  !*** ./assets/css/general.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./general.css */ "./node_modules/css-loader/dist/cjs.js!./assets/css/general.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const content = document.getElementById("content");

const loadContact = function () {
  const html = `      <section class="section-pricing">
    <div class="pricing-header container">
      <span class="subheading">Pricing</span>
      <h2 class="heading-secondary">Eating well without breaking the bank</h2>
    </div>
    <div class="container grid grid--2-cols margin-bottom-md">
      <div class="pricing-plan pricing-plan--starter">
        <header class="plan-header">
          <p class="plan-name">Starter</p>
          <p class="plan-price"><span>$</span>399</p>
          <p class="plan-text">per month. That's just $13 per       meal!</p>
        </header>
        <ul class="plan-attributes list">
          <li class="list-item">
            <ion-icon class="list-icon"  name="checkmark-outline"></ion-icon>
            <span>1 meal per day</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Order from 11am to 9pm</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Delivery is free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="close-outline"></ion-icon>
          </li>
        </ul>
        <div class="plan-sign-up">
          <a class="btn btn--full " href="#">Start eating well</a>
        </div>
      </div>
      <div class="pricing-plan pricing-plan--complete">
        <header class="plan-header">
          <p class="plan-name">Complete</p>
          <p class="plan-price"><span>$</span>649</p>
          <p class="plan-text">per month. That's just $11 per meal!</p>
        </header>
        <ul class="plan-attributes list">
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span><strong>2 meals</strong> per day</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Order <strong>24/7</strong></span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Delivery is free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Get access to latest recipes</span>
          </li>
        </ul>
        <div class="plan-sign-up">
          <a class="btn btn--full" href="#">Start eating well</a>
        </div>
      </div>
    </div>
    <div class="container grid">
      <aside class="plan-details">
        Prices include all applicable taxes. You can cancel at any time. Both plans include the following:
      </aside>
    </div>
    <div class="container grid grid--4-cols">
      <div class="feature">
        <ion-icon class="feature-icon" name="infinite-outline"></ion-icon>  
        <p class="feature-title">Never cook again!</p>
        <p class="feature-text">Our subscriptions cover 365 days per year, even including major holidays.</p>
      </div>
      <div class="feature">
        <ion-icon class="feature-icon" name="nutrition-outline"></ion-icon>
        <p class="feature-title">Locale and organic</p>
        <p class="feature-text">Our cooks only use local, fresh, and organic products to prepare your meals.</p>
      </div>
      <div class="feature">
        <ion-icon class="feature-icon" name="leaf-outline"></ion-icon>
        <p class="feature-title">No waste</p>
        <p class="feature-text">All our partners only use reusable containers to package all your meals.</p>
      </div>
      <div class="feature">
        <ion-icon class="feature-icon" name="pause-outline"></ion-icon> 
        <p class="feature-title">Pause anttime</p>
        <p class="feature-text">Going on vacation? Just pause your subscription, and we refund unused days.</p>
      </div>
    </div>
  </section>
  <section class="section-cta">
    <div class="container">
      <div class="cta">
        <div class="cta-text-box">
          <h2 class="heading-secondary">Get your first meal for free!</h2>
          <p class="cta-text">Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>
          <form class="cta-form" action="#">
            <div>
              <label for="full-name">Full Name</label>
              <input required placeholder="John Smith"  type="text" name="full-name" id="full-name">
            </div>
            <div>
              <label for="email">Email address</label>
              <input required type="email" placeholder="me@example.com" name="email" id="email">
            </div>
            <div>
              <label for="select-where">Where did you hear from us?</label>
              <select required name="select-where" id="select-where">
                <option value="">Please choose one option:</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">YouTube video</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook ad</option>
                <option value="others">Others</option>
              </select>
            </div class="input-field">
            <button class="btn btn--form">Sign up now</button>
          </form>
        </div>
        <div class="cta-img-box" role="img" aria-label="Woman enjoying food ">
          <!-- <img class="cta-img" src="./img/eating.jpg" alt=""> -->
        </div>
      </div>
    </div>
  </section>`;

  content.innerHTML = "";
  content.insertAdjacentHTML("afterbegin", html);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// import HeroImg from "../assets/img/hero.png";

const content = document.querySelector("#content");
const loadHome = function () {
  const html = `
  <main>
  <section class="section-hero">
    <div class="hero">
      <div class="hero-text-box">
        <h1 class="heading-primary">
          A healthy meal delivered to your door, every single day
        </h1>
        <p class="hero-description">
          The smart 365-days-per-year food subscription that will make you
          eat healthy again. Tailored to your personal tastes and
          nutritional needs.
        </p>
        <a class="btn btn--full margin-right-sm" href="#"
          >Start eating well</a
        >
        <a class="btn btn--outline" href="#">Learn more &darr;</a>
        <div class="delivered-meals">
          <div class="delivered-imgs">
            <img
              src="../assets/img/customers/customer-1.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-2.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-3.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-4.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-5.jpg"
              alt="customer photo"
            />
            <img
              src="../assets/img/customers/customer-6.jpg"
              alt="customer photo"
            />
          </div>
          <p class="delivered-text">
            <span>250,000+</span> meals delivered last year!
          </p>
        </div>
      </div>

      <img
        class="hero-img"
        src="../assets/img/hero.png"
        alt="Woman enjoying food"
      />
    </div>
  </section>
  <section class="section-featured-in">
    <div class="container featured-in">
      <h2 class="heading-featured-in">As featured in</h2>
      <div class="logos">
        <img class="featured-in-img" src="../assets/img/logos/techcrunch.png" alt="Company logo">
        <img class="featured-in-img" src="../assets/img/logos/business-insider.png" alt="Company logo">
        <img class="featured-in-img" src="../assets/img/logos/the-new-york-times.png" alt="Company logo">
        <img class="featured-in-img" src="../assets/img/logos/forbes.png" alt="Company logo">
        <img class="featured-in-img" src="../assets/img/logos/usa-today.png" alt="Company logo">
      </div>
    </div>
  </section>
  <section class="section-how">
    <div class="how container grid grid--2-cols">
      <div class="how-header">
        <span class="subheading">HOW IT WORKS</span>
        <h2 class="heading-secondary">Your daily dose of health in 3 simple steps</h3>
      </div>
      <div class="step-text-box">
        <p class="step-number">01</p>
        <h3 class="heading-tertiary">Tell us what you like (and what not)</h3>
        <p class="step-description">Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!</p>
      </div>
      <div class="step-img-box">
        <img class="step-img" src="../assets/img/app/app-screen-1.png" alt="">
      </div>

      <div class="step-img-box">
        <img class="step-img" src="../assets/img/app/app-screen-2.png" alt="">
      </div>
      <div class="step-text-box">
        <p class="step-number">02</p>
        <h3 class="heading-tertiary">Approve your weekly meal plan</h3>
        <p class="step-description">Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.</p>
      </div>
      
      
      <div class="step-text-box">
        <p class="step-number">03</p>
        <h3 class="heading-tertiary">Receive meals at convenient time</h3>
        <p class="step-description">Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!</p>
      </div>
      <div class="step-img-box">
        <img class="step-img" src="../assets/img/app/app-screen-3.png" alt="">
      </div>
    </div>
  </section>
</main> 
`;
  content.innerHTML = "";
  content.insertAdjacentHTML("afterbegin", html);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const content = document.getElementById("content");

const loadMenu = function () {
  const html = `      <section class="section-meals">
    <div class="container meals-header">
      <span class="subheading">Meals</span>
      <h2 class="heading-secondary">Omnifood AI chooses from 5,000+ recipes</h2>
    </div>
    <div class="container meals grid grid--3-cols margin-bottom-md">
      <div class="meal-card">
        <img class="meal-img" src="../assets/img/meals/meal-1.jpg" alt="Dishes of japanese food">
        <div class="meal-content">
          <div class="meal-tags">
            <span class="tag tag--vegetarian">Vegetarian</span>
          </div>
          <p class="meal-title">Japanese Gyozas</p>
          <ul class="meal-attributes list">
            <li>
              <ion-icon class="list-icon" name="flame-outline"></ion-icon>
              <span><strong>650</strong> calories</span>
            </li>
            <li>
              <ion-icon class="list-icon" name="restaurant-outline"></ion-icon>
              <span>NutriScore ® <strong>74</strong></span>
            </li>
            <li>
              <ion-icon class="list-icon" name="star-outline"></ion-icon>
              <span><strong>4.9</strong> rating (537)</span>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="meal-card">
        <img class="meal-img" src="../assets/img/meals/meal-2.jpg" alt="Dishes of japanese food">
        <div class="meal-content">
          <div class="meal-tags">
            <span class="tag tag--vegan">Vegan</span>
            <span class="tag tag--paleo">Paleo</span>
          </div>
          <p class="meal-title">Avocado Salad</p>
          <ul class="meal-attributes list">
            <li>
              <ion-icon class="list-icon" name="flame-outline"></ion-icon>
              <span><strong>400 </strong> calories</span>
            </li>
            <li>
              <ion-icon class="list-icon" name="restaurant-outline"></ion-icon>
              <span>NutriScore ® <strong>92</strong></span>
            </li>
            <li>
              <ion-icon class="list-icon" name="star-outline"></ion-icon>
              <span><strong>4.8 </strong> rating (441)</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="diets ">
        <h3 class="heading-tertiary">Works with any diet:</h3>

        <ul class="diets-list list">
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Vegetarian</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Vegan</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Pescatarian</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Gluten-free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Lactose-free</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Keto</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Paleo</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Low FODMAP</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Kid-friendly</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container all-recipes">
      <a class="link" href="#">See all recipes &rarr;</a>
    </div>
  </section>
  <section class="section-testimonials">
    <div class="testimonials-container">
      <span class="subheading">Testimonials</span>
      <h2 class="heading-secondary">Once you try it, you can't go back</h2>
    
      <div class="testimonials ">
        <figure class="testimonial">
          <img class="testimonial-img" src="../assets/img/customers/dave.jpg" alt="">
          <blockquote class="testimonial-text">Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.</blockquote>
          <span class="testimonial-name">— Dave Bryson</span>
        </figure>
        <figure class="testimonial">
          <img class="testimonial-img" src="../assets/img/customers/ben.jpg" alt="">
          <blockquote class="testimonial-text">The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!</blockquote>
          <span class="testimonial-name">— Ben Hadley</span>
        </figure>
        <figure class="testimonial">
          <img class="testimonial-img" src="../assets/img/customers/steve.jpg" alt="">
          <blockquote class="testimonial-text">Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!</blockquote>
          <span class="testimonial-name">— Steve Miller</span>
        </figure>
        <figure class="testimonial">
          <img class="testimonial-img" src="../assets/img/customers/hannah.jpg" alt="">
          <blockquote class="testimonial-text">I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.</blockquote>
          <span class="testimonial-name">— Hannah Smith</span>
        </figure>
      </div>
    </div>
    <div class="gallery ">
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-1.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-2.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-3.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-4.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-5.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-6.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-7.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-8.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-9.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-10.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-11.jpg" alt="photo of food">
        </figure>
        <figure class="gallery-item">
          <img class="img-gallery" src="../assets/img/gallery/gallery-12.jpg" alt="photo of food">
        </figure>
    </div>
  </section>`;

  content.innerHTML = "";
  content.insertAdjacentHTML("afterbegin", html);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./assets/img/eating.jpg":
/*!*******************************!*\
  !*** ./assets/img/eating.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb10ee9ced850d7e76d2.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			"main": 0
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_general_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/general.css */ "./assets/css/general.css");







const navList = document.querySelector(".main-nav-list");

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
navList.addEventListener("click", function (e) {
  if (e.target.classList.contains("home-btn")) (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (e.target.classList.contains("meals-btn")) (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (e.target.classList.contains("pricing-btn")) (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxZQUFZLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFNBQVMsT0FBTyxhQUFhLGFBQWEsT0FBTyxZQUFZLFdBQVcsWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLFFBQVEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLG9IQUFvSCxvQkFBb0Is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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdklkO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkhYOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xMeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWE7QUFDb0I7QUFDQTtBQUNPO0FBQ1A7QUFDRTs7QUFFbkM7O0FBRUEsb0RBQVE7QUFDUjtBQUNBLCtDQUErQyxvREFBUTtBQUN2RCxnREFBZ0Qsb0RBQVE7QUFDeEQsa0RBQWtELHVEQUFZO0FBQzlELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9hc3NldHMvY3NzL2dlbmVyYWwuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9hc3NldHMvY3NzL2dlbmVyYWwuY3NzP2EyY2YiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vYXNzZXRzL2Nzcy9zdHlsZS5jc3M/MDMyNiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG4tLS0gMDEgVFlQT0dSQVBIWSBTWVNURU1cXHJcXG5cXHJcXG4tIEZvbnQgc2l6ZXMgKHB4KVxcclxcbjEwIC8gMTIgLyAxNCAvIDE2IC8gMTggLyAyMCAvIDI0IC8gMzAgLyAzNiAvIDQ0IC8gNTIgLyA2MiAvIDc0IC8gODYgLyA5OFxcclxcblxcclxcbi0gRm9udCB3ZWlnaHRzXFxyXFxuRGVmYXVsdDogNDAwXFxyXFxuTWVkaXVtOiA1MDBcXHJcXG5TZW1pLWJvbGQ6IDYwMFxcclxcbkJvbGQ6IDcwMFxcclxcblxcclxcbi0gTGluZSBoZWlnaHRzXFxyXFxuRGVmYXVsdDogMVxcclxcblNtYWxsOiAxLjA1XFxyXFxuUGFyYWdyYXBoIGRlZmF1bHQ6IDEuNlxcclxcblxcclxcblxcclxcblxcclxcbi0gTGV0dGVyIHNwYWNpbmdcXHJcXG4tMC41cHhcXHJcXG4wLjc1cHhcXHJcXG5cXHJcXG4tLS0gMDIgQ09MT1JTXFxyXFxuXFxyXFxuLSBQcmltYXJ5OiAjZTY3ZTIyXFxyXFxuLSBUaW50czpcXHJcXG4jZmRmMmU5XFxyXFxuI2ZhZTVkM1xcclxcbi0gU2hhZGVzOiBcXHJcXG4jY2Y3MTFmXFxyXFxuNDUyNjBhXFxyXFxuXFxyXFxuLSBBY2NlbnRzOlxcclxcbi0gR3JleXNcXHJcXG4jNmY2ZjZmIChsaWdodGVzdCBncmV5IGFsbG93ZWQgb24gI2ZkZjJlOSlcXHJcXG4jNTU1XFxyXFxuIzMzM1xcclxcblxcclxcblxcclxcbi0tLSAwNSBTSEFET1dTXFxyXFxuXFxyXFxuXFxyXFxuLS0tIDA2IEJPUkRFUi1SQURJVVNcXHJcXG5EZWZhdWx0OiA5cHhcXHJcXG5NZWRpdW06IDExcHhcXHJcXG5cXHJcXG4tLS0gMDcgV0hJVEVTUEFDRVxcclxcblxcclxcbi0gU3BhY2luZyBzeXN0ZW0gKHB4KVxcclxcbjIgLyA0IC8gOCAvIDEyIC8gMTYgLyAyNCAvIDMyIC8gNDggLyA2NCAvIDgwIC8gOTYgLyAxMjhcXHJcXG4qL1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLyogQ2hhbmdlIHRoZSByZW0gdG8gMTBweCBkeW5hbWljbHkgKi9cXHJcXG4gIC8qIFVzZSBwZXJjZW50YWdlIHRvIHJlc3BlY3QgdXNlciBpZiB0aGV5IHdhbnQgdG8gY2hhbmdlIGRlZmF1bHQgZm9udCBzaXplICovXFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbio6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuOHJlbSByZ2JhKDIzMCwgMTI1LCAzNCwgMC41KTtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4vKiBHRU5FUkFMIFJFVVNBQkxFIENPTVBPTkVOVFMgKi9cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMjByZW07XFxyXFxuICBwYWRkaW5nOiAwIDMuMnJlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcm93LWdhcDogOS42cmVtO1xcclxcbiAgY29sdW1uLWdhcDogNi40cmVtO1xcclxcbiAgLyogbWFyZ2luLWJvdHRvbTogOS42cmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuZ3JpZDpsYXN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufSAqL1xcclxcblxcclxcbi5ncmlkOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC0tMi1jb2xzIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtLTMtY29scyB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC0tNC1jb2xzIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLS01LWNvbHMge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctcHJpbWFyeSxcXHJcXG4uaGVhZGluZy1zZWNvbmRhcnksXFxyXFxuLmhlYWRpbmctdGVydGlhcnkge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxyXFxuICBmb250LXNpemU6IDUuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjA1O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogNC40cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gIC8qIG1hcmdpbi1ib3R0b206IDkuNnJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctdGVydGlhcnkge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YmhlYWRpbmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2NmNzExZjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLFxcclxcbi5idG46bGluayxcXHJcXG4uYnRuOnZpc2l0ZWQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1mdWxsOmxpbmssXFxyXFxuLmJ0bi0tZnVsbDp2aXNpdGVkIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi0tZnVsbDpob3ZlcixcXHJcXG4uYnRuLS1mdWxsOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3MTFmO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luLXJpZ2h0LXNtOmxpbmssXFxyXFxuLm1hcmdpbi1yaWdodC1zbTp2aXNpdGVkIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbi1yaWdodDogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1vdXRsaW5lOnZpc2l0ZWQsXFxyXFxuLmJ0bi0tb3V0bGluZTpsaW5rIHtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi0tb3V0bGluZTpob3ZlcixcXHJcXG4uYnRuLS1vdXRsaW5lOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5idG4tLWZvcm0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1MjYwYTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmRmMmU5O1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgcGFkZGluZzogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1mb3JtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpbi1ib3R0b20tbWQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNC44cmVtICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWljb24ge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6ICNlNjdlMjI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Fzc2V0cy9jc3MvZ2VuZXJhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1EQztBQUNEO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsNEVBQTRFO0VBQzVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7QUFDbEQ7QUFDQSw0QkFBNEI7QUFDNUIsZ0NBQWdDO0FBQ2hDLDRCQUE0Qjs7QUFFNUI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcclxcbi0tLSAwMSBUWVBPR1JBUEhZIFNZU1RFTVxcclxcblxcclxcbi0gRm9udCBzaXplcyAocHgpXFxyXFxuMTAgLyAxMiAvIDE0IC8gMTYgLyAxOCAvIDIwIC8gMjQgLyAzMCAvIDM2IC8gNDQgLyA1MiAvIDYyIC8gNzQgLyA4NiAvIDk4XFxyXFxuXFxyXFxuLSBGb250IHdlaWdodHNcXHJcXG5EZWZhdWx0OiA0MDBcXHJcXG5NZWRpdW06IDUwMFxcclxcblNlbWktYm9sZDogNjAwXFxyXFxuQm9sZDogNzAwXFxyXFxuXFxyXFxuLSBMaW5lIGhlaWdodHNcXHJcXG5EZWZhdWx0OiAxXFxyXFxuU21hbGw6IDEuMDVcXHJcXG5QYXJhZ3JhcGggZGVmYXVsdDogMS42XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLSBMZXR0ZXIgc3BhY2luZ1xcclxcbi0wLjVweFxcclxcbjAuNzVweFxcclxcblxcclxcbi0tLSAwMiBDT0xPUlNcXHJcXG5cXHJcXG4tIFByaW1hcnk6ICNlNjdlMjJcXHJcXG4tIFRpbnRzOlxcclxcbiNmZGYyZTlcXHJcXG4jZmFlNWQzXFxyXFxuLSBTaGFkZXM6IFxcclxcbiNjZjcxMWZcXHJcXG40NTI2MGFcXHJcXG5cXHJcXG4tIEFjY2VudHM6XFxyXFxuLSBHcmV5c1xcclxcbiM2ZjZmNmYgKGxpZ2h0ZXN0IGdyZXkgYWxsb3dlZCBvbiAjZmRmMmU5KVxcclxcbiM1NTVcXHJcXG4jMzMzXFxyXFxuXFxyXFxuXFxyXFxuLS0tIDA1IFNIQURPV1NcXHJcXG5cXHJcXG5cXHJcXG4tLS0gMDYgQk9SREVSLVJBRElVU1xcclxcbkRlZmF1bHQ6IDlweFxcclxcbk1lZGl1bTogMTFweFxcclxcblxcclxcbi0tLSAwNyBXSElURVNQQUNFXFxyXFxuXFxyXFxuLSBTcGFjaW5nIHN5c3RlbSAocHgpXFxyXFxuMiAvIDQgLyA4IC8gMTIgLyAxNiAvIDI0IC8gMzIgLyA0OCAvIDY0IC8gODAgLyA5NiAvIDEyOFxcclxcbiovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAvKiBDaGFuZ2UgdGhlIHJlbSB0byAxMHB4IGR5bmFtaWNseSAqL1xcclxcbiAgLyogVXNlIHBlcmNlbnRhZ2UgdG8gcmVzcGVjdCB1c2VyIGlmIHRoZXkgd2FudCB0byBjaGFuZ2UgZGVmYXVsdCBmb250IHNpemUgKi9cXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpa1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuKjpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMC44cmVtIHJnYmEoMjMwLCAxMjUsIDM0LCAwLjUpO1xcclxcbn1cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi8qIEdFTkVSQUwgUkVVU0FCTEUgQ09NUE9ORU5UUyAqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDEyMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMy4ycmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICByb3ctZ2FwOiA5LjZyZW07XFxyXFxuICBjb2x1bW4tZ2FwOiA2LjRyZW07XFxyXFxuICAvKiBtYXJnaW4tYm90dG9tOiA5LjZyZW07ICovXFxyXFxufVxcclxcblxcclxcbi8qIC5ncmlkOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmdyaWQ6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA5LjZyZW07XFxyXFxufVxcclxcblxcclxcbi5ncmlkLS0yLWNvbHMge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC0tMy1jb2xzIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLS00LWNvbHMge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtLTUtY29scyB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZy1wcmltYXJ5LFxcclxcbi5oZWFkaW5nLXNlY29uZGFyeSxcXHJcXG4uaGVhZGluZy10ZXJ0aWFyeSB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZy1wcmltYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogNS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZy1zZWNvbmRhcnkge1xcclxcbiAgZm9udC1zaXplOiA0LjRyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgLyogbWFyZ2luLWJvdHRvbTogOS42cmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZy10ZXJ0aWFyeSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjY2Y3MTFmO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4sXFxyXFxuLmJ0bjpsaW5rLFxcclxcbi5idG46dmlzaXRlZCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5idG4tLWZ1bGw6bGluayxcXHJcXG4uYnRuLS1mdWxsOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1mdWxsOmhvdmVyLFxcclxcbi5idG4tLWZ1bGw6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjcxMWY7XFxyXFxufVxcclxcblxcclxcbi5tYXJnaW4tcmlnaHQtc206bGluayxcXHJcXG4ubWFyZ2luLXJpZ2h0LXNtOnZpc2l0ZWQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4tLW91dGxpbmU6dmlzaXRlZCxcXHJcXG4uYnRuLS1vdXRsaW5lOmxpbmsge1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1vdXRsaW5lOmhvdmVyLFxcclxcbi5idG4tLW91dGxpbmU6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi0tZm9ybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUyNjBhO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmZGYyZTk7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBwYWRkaW5nOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4tLWZvcm06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luLWJvdHRvbS1tZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0LjhyZW0gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogI2U2N2UyMjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvZWF0aW5nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLyogSEVBREVSICovXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCA0LjhyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcclxcblxcclxcbiAgLyogQmVjYXVzZSB3ZSB3YW50IGhlYWRlciB0byBiZSBzdGlja3kgbGF0ZXIgKi9cXHJcXG4gIGhlaWdodDogOS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzLjJyZW07XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi1saW5rOmxpbmssXFxyXFxuLm1haW4tbmF2LWxpbms6dmlzaXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtbGluazpob3ZlcixcXHJcXG4ubWFpbi1uYXYtbGluazphY3RpdmUge1xcclxcbiAgY29sb3I6ICNlNjdlMjI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi1saW5rLm5hdi1jdGE6bGluayxcXHJcXG4ubWFpbi1uYXYtbGluay5uYXYtY3RhOnZpc2l0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMS4ycmVtIDIuNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LWxpbmsubmF2LWN0YTpob3ZlcixcXHJcXG4ubWFpbi1uYXYtbGluay5uYXYtY3RhOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3MTFmO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi8qIE5BVklHQVRJT04gKi9cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLyogSEVSTyBTRUNUSU9OICovXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uc2VjdGlvbi1oZXJvIHtcXHJcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcblxcclxcbiAgcGFkZGluZzogNC44cmVtIDAgOS42cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICBtYXgtd2lkdGg6IDEzMHJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDkuNiByZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDQuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tdGV4dC1ib3gge1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGl2ZXJlZC1tZWFscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5kZWxpdmVyZWQtbWVhbHMgaW1nIHtcXHJcXG4gIHdpZHRoOiA0LjhyZW07XFxyXFxuICBoZWlnaHQ6IDQuOHJlbTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZGYyZTk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGl2ZXJlZC1tZWFscyBpbWc6Zmlyc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5kZWxpdmVyZWQtdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5kZWxpdmVyZWQtdGV4dCBzcGFuIHtcXHJcXG4gIGNvbG9yOiAjY2Y3MTFmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLyogRkVUVVJFRCBJTiBTRUNUSU9OKi9cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi5zZWN0aW9uLWZlYXR1cmVkLWluIHtcXHJcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDMuMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZy1mZWF0dXJlZC1pbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXHJcXG4gIGNvbG9yOiAjODg4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWluLWltZyB7XFxyXFxuICBoZWlnaHQ6IDMuMnJlbTtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKTtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4vKiBIT1cgSVQgV09SS1MgU0VDVElPTiAqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLnNlY3Rpb24taG93IHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7ICovXFxyXFxuICBwYWRkaW5nOiA5LjZyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdy1oZWFkZXIge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG59XFxyXFxuXFxyXFxuLnN0ZXAtdGV4dC1ib3gge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RlcC1udW1iZXIge1xcclxcbiAgZm9udC1zaXplOiA4LjZyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICNkZGQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5zdGVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG59XFxyXFxuXFxyXFxuLnN0ZXAtaW1nLWJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RlcC1pbWctYm94OjpiZWZvcmUsXFxyXFxuLnN0ZXAtaW1nLWJveDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RlcC1pbWctYm94OjpiZWZvcmUge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIC8qIGhlaWdodDogNzAlOyAqL1xcclxcbiAgcGFkZGluZy1ib3R0b206IDYwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxyXFxuICB6LWluZGV4OiAtMjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0ZXAtaW1nLWJveDo6YWZ0ZXIge1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA0NSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlNWQzO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zdGVwLWltZyB7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi8qIE1FQUxTIFNFQ1RJT04gKi9cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi5zZWN0aW9uLW1lYWxzIHtcXHJcXG4gIHBhZGRpbmc6IDkuNnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtaGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gIG1hcmdpbi1ib3R0b206IDguNnJlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbiAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMyUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICAvKiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMXB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDExcHg7ICovXFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRlbnQge1xcclxcbiAgcGFkZGluZzogMy4ycmVtIDQuOHJlbSA0LjhyZW0gNC44cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXRhZ3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC40cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFnIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZy0tdmVnZXRhcmlhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFjZjY2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFnLS12ZWdhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRkODJkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFnLS1wYWxlbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNDNiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYXR0cmlidXRlcyB7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYXR0cmlidXRlcyBsaSB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1hdHRyaWJ1dGVzIGxpIGlvbi1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAubWVhbC1hdHRyaWJ1dGVzIGxpIHNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLm1lYWwtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIGNvbG9yOiAjZTY3ZTIyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuZGlldHMtbGlzdCB7XFxyXFxuXFxyXFxufSAqL1xcclxcblxcclxcbi5hbGwtcmVjaXBlcyB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbms6bGluayxcXHJcXG4ubGluazp2aXNpdGVkIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGNvbG9yOiAjZTY3ZTIyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmxpbms6aG92ZXIsXFxyXFxuLmxpbms6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjY2Y3MTFmO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi8qIFRFU1RJTU9OSUFMUyBTRUNUSU9OICovXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4uc2VjdGlvbi10ZXN0aW1vbmlhbHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU1ZnIgNDVmcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbHMtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDkuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFscyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgcm93LWdhcDogNC44cmVtO1xcclxcbiAgY29sdW1uLWdhcDogOHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDkuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsLWltZyB7XFxyXFxuICB3aWR0aDogNi40cmVtO1xcclxcbiAgaGVpZ2h0OiA2LjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogIzZmNmY2ZjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IDEuNnJlbTtcXHJcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnktaXRlbSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWdhbGxlcnkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1nYWxsZXJ5OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4vKiBQUklDSU5HIFNFQ1RJT04gKi9cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi5zZWN0aW9uLXByaWNpbmcge1xcclxcbiAgcGFkZGluZzogOS42cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcmljaW5nLWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA5LjZyZW0gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNpbmctcGxhbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNpbmctcGxhbi0tc3RhcnRlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmRmMmU5O1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBwYWRkaW5nOiA0LjZyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmljaW5nLXBsYW4tLWNvbXBsZXRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxyXFxuICBwYWRkaW5nOiA0LjhyZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNpbmctcGxhbi0tY29tcGxldGU6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJCZXN0IHZhbHVlXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB0b3A6IDYlO1xcclxcbiAgcmlnaHQ6IC0xOCU7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0M2I7XFxyXFxuICBwYWRkaW5nOiAwLjhyZW0gOHJlbTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYW4taGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYW4tbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICNjZjcxMWY7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYW4tcHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiA2LjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5wbGFuLXByaWNlIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbi10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGNvbG9yOiAjNmY2ZjZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbi1zaWduLXVwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQuOHJlbTtcXHJcXG4gIC8qIG1hcmdpbi1ib3R0b206IDMuNnJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnBsYW4tZGV0YWlscyB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUtaWNvbiB7XFxyXFxuICBjb2xvcjogI2U2N2UyMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxyXFxuICB3aWR0aDogMy4ycmVtO1xcclxcbiAgaGVpZ2h0OiAzLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxLjZyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4vKiBDQUxMIFRPIEFDVElPTiBTRUNUSU9OICovXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uc2VjdGlvbi1jdGEge1xcclxcbiAgLyogcGFkZGluZzogOS42cmVtIDA7ICovXFxyXFxuICBwYWRkaW5nOiA0LjhyZW0gMCAxMi44cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jdGEgKjpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMC44cmVtIHJnYmEoMjUzLCAyNDIsIDIzMywgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmN0YSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjsgKi9cXHJcXG4gIGJveC1zaGFkb3c6IDAgMi40cmVtIDQuOHJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgI2ViOTg0ZSwgI2U2N2UyMik7XFxyXFxuXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY3RhLXRleHQtYm94IHtcXHJcXG4gIHBhZGRpbmc6IDQuOHJlbSA2LjRyZW0gNi40cmVtO1xcclxcbiAgY29sb3I6ICM0NTI2MGE7XFxyXFxufVxcclxcblxcclxcbi5jdGEgLmhlYWRpbmctc2Vjb25kYXJ5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uY3RhLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS44O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3RhLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDMuMnJlbTtcXHJcXG4gIHJvdy1nYXA6IDIuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmN0YS1mb3JtIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3RhLWZvcm0gbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY3RhLWZvcm0gaW5wdXQsXFxyXFxuLmN0YS1mb3JtIHNlbGVjdCB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgaGVpZ2h0OiA0LjZyZW07XFxyXFxuICBwYWRkaW5nOiAxLjJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmN0YS1mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG59XFxyXFxuXFxyXFxub3B0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiAjNDUyNjBhO1xcclxcbn1cXHJcXG5cXHJcXG4uY3RhLWltZy1ib3gge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSBsZWZ0LFxcclxcbiAgICAgIHJnYmEoMjM1LCAxNTEsIDc4LCAwLjMpLFxcclxcbiAgICAgIHJnYmEoMjMwLCAxMjUsIDM0LCAwLjMpXFxyXFxuICAgICksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi8qIEZPT1RFUiAqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLmZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiAxMi44cmVtIDA7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAzZnIgMmZyIDJmciAyZnI7ICovXFxyXFxuXFxyXFxuICAvKiBnYXA6IDYuNHJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtLWZvb3RlciB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDEuNWZyIDFmciAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1jb2wge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItaGVhZGluZyB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWxpbmtzIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyLjRyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAzLjJyZW07XFxyXFxuICAvKiBtYXJnaW4tYm90dG9tOiA2LjRyZW07ICovXFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluazpsaW5rLFxcclxcbi5mb290ZXItbGluazp2aXNpdGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgY29sb3I6ICM3Njc2NzY7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saW5rOmhvdmVyLFxcclxcbi5mb290ZXItbGluazphY3RpdmUge1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDIuNHJlbTtcXHJcXG4gIHdpZHRoOiAyLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5jb3B5cmlnaHQge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBjb2xvcjogIzc2NzY3NjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHMge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbmF2IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMi40cmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0QkFBNEI7QUFDNUIsV0FBVztBQUNYLDRCQUE0QjtBQUM1QjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7O0VBRXpCLDhDQUE4QztFQUM5QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFz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Z0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi8qIEhFQURFUiAqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgNC44cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXHJcXG5cXHJcXG4gIC8qIEJlY2F1c2Ugd2Ugd2FudCBoZWFkZXIgdG8gYmUgc3RpY2t5IGxhdGVyICovXFxyXFxuICBoZWlnaHQ6IDkuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgaGVpZ2h0OiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMy4ycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtbGluazpsaW5rLFxcclxcbi5tYWluLW5hdi1saW5rOnZpc2l0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LWxpbms6aG92ZXIsXFxyXFxuLm1haW4tbmF2LWxpbms6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjZTY3ZTIyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtbGluay5uYXYtY3RhOmxpbmssXFxyXFxuLm1haW4tbmF2LWxpbmsubmF2LWN0YTp2aXNpdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDEuMnJlbSAyLjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi1saW5rLm5hdi1jdGE6aG92ZXIsXFxyXFxuLm1haW4tbmF2LWxpbmsubmF2LWN0YTphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzExZjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4vKiBOQVZJR0FUSU9OICovXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi8qIEhFUk8gU0VDVElPTiAqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLnNlY3Rpb24taGVybyB7XFxyXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDkuNnJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgbWF4LXdpZHRoOiAxMzByZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiA5LjYgcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMCA0LjhyZW07XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXRleHQtYm94IHtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5kZWxpdmVyZWQtbWVhbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsaXZlcmVkLW1lYWxzIGltZyB7XFxyXFxuICB3aWR0aDogNC44cmVtO1xcclxcbiAgaGVpZ2h0OiA0LjhyZW07XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZmRmMmU5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5kZWxpdmVyZWQtbWVhbHMgaW1nOmZpcnN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsaXZlcmVkLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsaXZlcmVkLXRleHQgc3BhbiB7XFxyXFxuICBjb2xvcjogI2NmNzExZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8taW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi8qIEZFVFVSRUQgSU4gU0VDVElPTiovXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uc2VjdGlvbi1mZWF0dXJlZC1pbiB7XFxyXFxuICBwYWRkaW5nOiA0LjhyZW0gMCAzLjJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctZmVhdHVyZWQtaW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxyXFxuICBjb2xvcjogIzg4ODtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pbi1pbWcge1xcclxcbiAgaGVpZ2h0OiAzLjJyZW07XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLyogSE9XIElUIFdPUktTIFNFQ1RJT04gKi9cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi5zZWN0aW9uLWhvdyB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5OyAqL1xcclxcbiAgcGFkZGluZzogOS42cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5ob3ctaGVhZGVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxufVxcclxcblxcclxcbi5zdGVwLXRleHQtYm94IHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0ZXAtbnVtYmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogOC42cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZGRkO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RlcC1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxufVxcclxcblxcclxcbi5zdGVwLWltZy1ib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0ZXAtaW1nLWJveDo6YmVmb3JlLFxcclxcbi5zdGVwLWltZy1ib3g6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0ZXAtaW1nLWJveDo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICAvKiBoZWlnaHQ6IDcwJTsgKi9cXHJcXG4gIHBhZGRpbmctYm90dG9tOiA2MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcclxcbiAgei1pbmRleDogLTI7XFxyXFxufVxcclxcblxcclxcbi5zdGVwLWltZy1ib3g6OmFmdGVyIHtcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNDUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTVkMztcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RlcC1pbWcge1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4vKiBNRUFMUyBTRUNUSU9OICovXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uc2VjdGlvbi1tZWFscyB7XFxyXFxuICBwYWRkaW5nOiA5LjZyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzLWhlYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBtYXJnaW4tYm90dG9tOiA4LjZyZW0gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG4gIGJveC1zaGFkb3c6IDAgMi40cmVtIDQuOHJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNhcmQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTMlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgLyogYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTFweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMXB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDMuMnJlbSA0LjhyZW0gNC44cmVtIDQuOHJlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10YWdzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNHJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi50YWctLXZlZ2V0YXJpYW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxY2Y2NjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZy0tdmVnYW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZDgyZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZy0tcGFsZW8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDQzYjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWF0dHJpYnV0ZXMge1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWF0dHJpYnV0ZXMgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYXR0cmlidXRlcyBsaSBpb24taWNvbiB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm1lYWwtYXR0cmlidXRlcyBsaSBzcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufSAqL1xcclxcblxcclxcbi5tZWFsLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICBjb2xvcjogI2U2N2UyMjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmRpZXRzLWxpc3Qge1xcclxcblxcclxcbn0gKi9cXHJcXG5cXHJcXG4uYWxsLXJlY2lwZXMge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saW5rOmxpbmssXFxyXFxuLmxpbms6dmlzaXRlZCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBjb2xvcjogI2U2N2UyMjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5saW5rOmhvdmVyLFxcclxcbi5saW5rOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2NmNzExZjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4vKiBURVNUSU1PTklBTFMgU0VDVElPTiAqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLnNlY3Rpb24tdGVzdGltb25pYWxzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1NWZyIDQ1ZnI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWxzLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA5LjZyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHJvdy1nYXA6IDQuOHJlbTtcXHJcXG4gIGNvbHVtbi1nYXA6IDhyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA5LjZyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC1pbWcge1xcclxcbiAgd2lkdGg6IDYuNHJlbTtcXHJcXG4gIGhlaWdodDogNi40cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwtdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgY29sb3I6ICM2ZjZmNmY7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAxLjZyZW07XFxyXFxuICBwYWRkaW5nOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0ge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1nYWxsZXJ5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxyXFxufVxcclxcblxcclxcbi5pbWctZ2FsbGVyeTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLyogUFJJQ0lORyBTRUNUSU9OICovXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4uc2VjdGlvbi1wcmljaW5nIHtcXHJcXG4gIHBhZGRpbmc6IDkuNnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2luZy1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOS42cmVtICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5wcmljaW5nLXBsYW4ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxufVxcclxcblxcclxcbi5wcmljaW5nLXBsYW4tLXN0YXJ0ZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZkZjJlOTtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgcGFkZGluZzogNC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2luZy1wbGFuLS1jb21wbGV0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcclxcbiAgcGFkZGluZzogNC44cmVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcmljaW5nLXBsYW4tLWNvbXBsZXRlOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiQmVzdCB2YWx1ZVxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdG9wOiA2JTtcXHJcXG4gIHJpZ2h0OiAtMTglO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNDNiO1xcclxcbiAgcGFkZGluZzogMC44cmVtIDhyZW07XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5wbGFuLWhlYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XFxyXFxufVxcclxcblxcclxcbi5wbGFuLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjY2Y3MTFmO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5wbGFuLXByaWNlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNi4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbi1wcmljZSBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYW4tdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBjb2xvcjogIzZmNmY2ZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYW4tc2lnbi11cCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0LjhyZW07XFxyXFxuICAvKiBtYXJnaW4tYm90dG9tOiAzLjZyZW07ICovXFxyXFxufVxcclxcblxcclxcbi5wbGFuLWRldGFpbHMge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlLWljb24ge1xcclxcbiAgY29sb3I6ICNlNjdlMjI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmMmU5O1xcclxcbiAgd2lkdGg6IDMuMnJlbTtcXHJcXG4gIGhlaWdodDogMy4ycmVtO1xcclxcbiAgcGFkZGluZzogMS42cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUtdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLyogQ0FMTCBUTyBBQ1RJT04gU0VDVElPTiAqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLnNlY3Rpb24tY3RhIHtcXHJcXG4gIC8qIHBhZGRpbmc6IDkuNnJlbSAwOyAqL1xcclxcbiAgcGFkZGluZzogNC44cmVtIDAgMTIuOHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY3RhICo6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuOHJlbSByZ2JhKDI1MywgMjQyLCAyMzMsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5jdGEge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7ICovXFxyXFxuICBib3gtc2hhZG93OiAwIDIuNHJlbSA0LjhyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICNlYjk4NGUsICNlNjdlMjIpO1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmN0YS10ZXh0LWJveCB7XFxyXFxuICBwYWRkaW5nOiA0LjhyZW0gNi40cmVtIDYuNHJlbTtcXHJcXG4gIGNvbG9yOiAjNDUyNjBhO1xcclxcbn1cXHJcXG5cXHJcXG4uY3RhIC5oZWFkaW5nLXNlY29uZGFyeSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmN0YS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuODtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmN0YS1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBjb2x1bW4tZ2FwOiAzLjJyZW07XFxyXFxuICByb3ctZ2FwOiAyLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5jdGEtZm9ybSBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmN0YS1mb3JtIGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmN0YS1mb3JtIGlucHV0LFxcclxcbi5jdGEtZm9ybSBzZWxlY3Qge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIGhlaWdodDogNC42cmVtO1xcclxcbiAgcGFkZGluZzogMS4ycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jdGEtZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxufVxcclxcblxcclxcbm9wdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogIzQ1MjYwYTtcXHJcXG59XFxyXFxuXFxyXFxuLmN0YS1pbWctYm94IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICB0byBib3R0b20gbGVmdCxcXHJcXG4gICAgICByZ2JhKDIzNSwgMTUxLCA3OCwgMC4zKSxcXHJcXG4gICAgICByZ2JhKDIzMCwgMTI1LCAzNCwgMC4zKVxcclxcbiAgICApLFxcclxcbiAgICB1cmwoLi4vaW1nL2VhdGluZy5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4vKiBGT09URVIgKi9cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbi5mb290ZXIge1xcclxcbiAgcGFkZGluZzogMTIuOHJlbSAwO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XFxyXFxuICAvKiBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgM2ZyIDJmciAyZnIgMmZyOyAqL1xcclxcblxcclxcbiAgLyogZ2FwOiA2LjRyZW07ICovXFxyXFxufVxcclxcblxcclxcbi5ncmlkLS1mb290ZXIge1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciAxLjVmciAxZnIgMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tY29sIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWhlYWRpbmcge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1saW5rcyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMi40cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMy4ycmVtO1xcclxcbiAgLyogbWFyZ2luLWJvdHRvbTogNi40cmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbms6bGluayxcXHJcXG4uZm9vdGVyLWxpbms6dmlzaXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGNvbG9yOiAjNzY3Njc2O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluazpob3ZlcixcXHJcXG4uZm9vdGVyLWxpbms6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb24ge1xcclxcbiAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICB3aWR0aDogMi40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29weXJpZ2h0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgY29sb3I6ICM3Njc2NzY7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3Mge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLW5hdiB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIuNHJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dlbmVyYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nZW5lcmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgbG9hZENvbnRhY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGh0bWwgPSBgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLXByaWNpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJpY2luZy1oZWFkZXIgY29udGFpbmVyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInN1YmhlYWRpbmdcIj5QcmljaW5nPC9zcGFuPlxuICAgICAgPGgyIGNsYXNzPVwiaGVhZGluZy1zZWNvbmRhcnlcIj5FYXRpbmcgd2VsbCB3aXRob3V0IGJyZWFraW5nIHRoZSBiYW5rPC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGdyaWQgZ3JpZC0tMi1jb2xzIG1hcmdpbi1ib3R0b20tbWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcmljaW5nLXBsYW4gcHJpY2luZy1wbGFuLS1zdGFydGVyXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJwbGFuLWhlYWRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwicGxhbi1uYW1lXCI+U3RhcnRlcjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInBsYW4tcHJpY2VcIj48c3Bhbj4kPC9zcGFuPjM5OTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInBsYW4tdGV4dFwiPnBlciBtb250aC4gVGhhdCdzIGp1c3QgJDEzIHBlciAgICAgICBtZWFsITwvcD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDx1bCBjbGFzcz1cInBsYW4tYXR0cmlidXRlcyBsaXN0XCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiAgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPjEgbWVhbCBwZXIgZGF5PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+T3JkZXIgZnJvbSAxMWFtIHRvIDlwbTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPkRlbGl2ZXJ5IGlzIGZyZWU8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjbG9zZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1zaWduLXVwXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLS1mdWxsIFwiIGhyZWY9XCIjXCI+U3RhcnQgZWF0aW5nIHdlbGw8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJpY2luZy1wbGFuIHByaWNpbmctcGxhbi0tY29tcGxldGVcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cInBsYW4taGVhZGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwbGFuLW5hbWVcIj5Db21wbGV0ZTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInBsYW4tcHJpY2VcIj48c3Bhbj4kPC9zcGFuPjY0OTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInBsYW4tdGV4dFwiPnBlciBtb250aC4gVGhhdCdzIGp1c3QgJDExIHBlciBtZWFsITwvcD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDx1bCBjbGFzcz1cInBsYW4tYXR0cmlidXRlcyBsaXN0XCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz4yIG1lYWxzPC9zdHJvbmc+IHBlciBkYXk8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj5PcmRlciA8c3Ryb25nPjI0Lzc8L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj5EZWxpdmVyeSBpcyBmcmVlPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+R2V0IGFjY2VzcyB0byBsYXRlc3QgcmVjaXBlczwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxhbi1zaWduLXVwXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLS1mdWxsXCIgaHJlZj1cIiNcIj5TdGFydCBlYXRpbmcgd2VsbDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGdyaWRcIj5cbiAgICAgIDxhc2lkZSBjbGFzcz1cInBsYW4tZGV0YWlsc1wiPlxuICAgICAgICBQcmljZXMgaW5jbHVkZSBhbGwgYXBwbGljYWJsZSB0YXhlcy4gWW91IGNhbiBjYW5jZWwgYXQgYW55IHRpbWUuIEJvdGggcGxhbnMgaW5jbHVkZSB0aGUgZm9sbG93aW5nOlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGdyaWQgZ3JpZC0tNC1jb2xzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZVwiPlxuICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJmZWF0dXJlLWljb25cIiBuYW1lPVwiaW5maW5pdGUtb3V0bGluZVwiPjwvaW9uLWljb24+ICBcbiAgICAgICAgPHAgY2xhc3M9XCJmZWF0dXJlLXRpdGxlXCI+TmV2ZXIgY29vayBhZ2FpbiE8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZmVhdHVyZS10ZXh0XCI+T3VyIHN1YnNjcmlwdGlvbnMgY292ZXIgMzY1IGRheXMgcGVyIHllYXIsIGV2ZW4gaW5jbHVkaW5nIG1ham9yIGhvbGlkYXlzLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmVcIj5cbiAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwiZmVhdHVyZS1pY29uXCIgbmFtZT1cIm51dHJpdGlvbi1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPHAgY2xhc3M9XCJmZWF0dXJlLXRpdGxlXCI+TG9jYWxlIGFuZCBvcmdhbmljPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmUtdGV4dFwiPk91ciBjb29rcyBvbmx5IHVzZSBsb2NhbCwgZnJlc2gsIGFuZCBvcmdhbmljIHByb2R1Y3RzIHRvIHByZXBhcmUgeW91ciBtZWFscy48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlXCI+XG4gICAgICAgIDxpb24taWNvbiBjbGFzcz1cImZlYXR1cmUtaWNvblwiIG5hbWU9XCJsZWFmLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmUtdGl0bGVcIj5ObyB3YXN0ZTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJmZWF0dXJlLXRleHRcIj5BbGwgb3VyIHBhcnRuZXJzIG9ubHkgdXNlIHJldXNhYmxlIGNvbnRhaW5lcnMgdG8gcGFja2FnZSBhbGwgeW91ciBtZWFscy48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlXCI+XG4gICAgICAgIDxpb24taWNvbiBjbGFzcz1cImZlYXR1cmUtaWNvblwiIG5hbWU9XCJwYXVzZS1vdXRsaW5lXCI+PC9pb24taWNvbj4gXG4gICAgICAgIDxwIGNsYXNzPVwiZmVhdHVyZS10aXRsZVwiPlBhdXNlIGFudHRpbWU8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZmVhdHVyZS10ZXh0XCI+R29pbmcgb24gdmFjYXRpb24/IEp1c3QgcGF1c2UgeW91ciBzdWJzY3JpcHRpb24sIGFuZCB3ZSByZWZ1bmQgdW51c2VkIGRheXMuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLWN0YVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdGFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN0YS10ZXh0LWJveFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmctc2Vjb25kYXJ5XCI+R2V0IHlvdXIgZmlyc3QgbWVhbCBmb3IgZnJlZSE8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzPVwiY3RhLXRleHRcIj5IZWFsdGh5LCB0YXN0eSBhbmQgaGFzc2xlLWZyZWUgbWVhbHMgYXJlIHdhaXRpbmcgZm9yIHlvdS4gU3RhcnQgZWF0aW5nIHdlbGwgdG9kYXkuIFlvdSBjYW4gY2FuY2VsIG9yIHBhdXNlIGFueXRpbWUuIEFuZCB0aGUgZmlyc3QgbWVhbCBpcyBvbiB1cyE8L3A+XG4gICAgICAgICAgPGZvcm0gY2xhc3M9XCJjdGEtZm9ybVwiIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmdWxsLW5hbWVcIj5GdWxsIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJKb2huIFNtaXRoXCIgIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZ1bGwtbmFtZVwiIGlkPVwiZnVsbC1uYW1lXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJtZUBleGFtcGxlLmNvbVwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNlbGVjdC13aGVyZVwiPldoZXJlIGRpZCB5b3UgaGVhciBmcm9tIHVzPzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3QgcmVxdWlyZWQgbmFtZT1cInNlbGVjdC13aGVyZVwiIGlkPVwic2VsZWN0LXdoZXJlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlBsZWFzZSBjaG9vc2Ugb25lIG9wdGlvbjo8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZnJpZW5kc1wiPkZyaWVuZHMgYW5kIGZhbWlseTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ5b3V0dWJlXCI+WW91VHViZSB2aWRlbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb2RjYXN0XCI+UG9kY2FzdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYWNlYm9va1wiPkZhY2Vib29rIGFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90aGVyc1wiPk90aGVyczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1mb3JtXCI+U2lnbiB1cCBub3c8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3RhLWltZy1ib3hcIiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIldvbWFuIGVuam95aW5nIGZvb2QgXCI+XG4gICAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVwiY3RhLWltZ1wiIHNyYz1cIi4vaW1nL2VhdGluZy5qcGdcIiBhbHQ9XCJcIj4gLS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5gO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIGltcG9ydCBIZXJvSW1nIGZyb20gXCIuLi9hc3NldHMvaW1nL2hlcm8ucG5nXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBsb2FkSG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPG1haW4+XG4gIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbi1oZXJvXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlcm9cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLXRleHQtYm94XCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImhlYWRpbmctcHJpbWFyeVwiPlxuICAgICAgICAgIEEgaGVhbHRoeSBtZWFsIGRlbGl2ZXJlZCB0byB5b3VyIGRvb3IsIGV2ZXJ5IHNpbmdsZSBkYXlcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJoZXJvLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgVGhlIHNtYXJ0IDM2NS1kYXlzLXBlci15ZWFyIGZvb2Qgc3Vic2NyaXB0aW9uIHRoYXQgd2lsbCBtYWtlIHlvdVxuICAgICAgICAgIGVhdCBoZWFsdGh5IGFnYWluLiBUYWlsb3JlZCB0byB5b3VyIHBlcnNvbmFsIHRhc3RlcyBhbmRcbiAgICAgICAgICBudXRyaXRpb25hbCBuZWVkcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tLWZ1bGwgbWFyZ2luLXJpZ2h0LXNtXCIgaHJlZj1cIiNcIlxuICAgICAgICAgID5TdGFydCBlYXRpbmcgd2VsbDwvYVxuICAgICAgICA+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi0tb3V0bGluZVwiIGhyZWY9XCIjXCI+TGVhcm4gbW9yZSAmZGFycjs8L2E+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWxpdmVyZWQtbWVhbHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsaXZlcmVkLWltZ3NcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9jdXN0b21lcnMvY3VzdG9tZXItMS5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJjdXN0b21lciBwaG90b1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL2N1c3RvbWVycy9jdXN0b21lci0yLmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImN1c3RvbWVyIHBob3RvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY3VzdG9tZXJzL2N1c3RvbWVyLTMuanBnXCJcbiAgICAgICAgICAgICAgYWx0PVwiY3VzdG9tZXIgcGhvdG9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9jdXN0b21lcnMvY3VzdG9tZXItNC5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJjdXN0b21lciBwaG90b1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL2N1c3RvbWVycy9jdXN0b21lci01LmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cImN1c3RvbWVyIHBob3RvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY3VzdG9tZXJzL2N1c3RvbWVyLTYuanBnXCJcbiAgICAgICAgICAgICAgYWx0PVwiY3VzdG9tZXIgcGhvdG9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImRlbGl2ZXJlZC10ZXh0XCI+XG4gICAgICAgICAgICA8c3Bhbj4yNTAsMDAwKzwvc3Bhbj4gbWVhbHMgZGVsaXZlcmVkIGxhc3QgeWVhciFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3M9XCJoZXJvLWltZ1wiXG4gICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvaGVyby5wbmdcIlxuICAgICAgICBhbHQ9XCJXb21hbiBlbmpveWluZyBmb29kXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLWZlYXR1cmVkLWluXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmZWF0dXJlZC1pblwiPlxuICAgICAgPGgyIGNsYXNzPVwiaGVhZGluZy1mZWF0dXJlZC1pblwiPkFzIGZlYXR1cmVkIGluPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dvc1wiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZmVhdHVyZWQtaW4taW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9sb2dvcy90ZWNoY3J1bmNoLnBuZ1wiIGFsdD1cIkNvbXBhbnkgbG9nb1wiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZmVhdHVyZWQtaW4taW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9sb2dvcy9idXNpbmVzcy1pbnNpZGVyLnBuZ1wiIGFsdD1cIkNvbXBhbnkgbG9nb1wiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZmVhdHVyZWQtaW4taW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9sb2dvcy90aGUtbmV3LXlvcmstdGltZXMucG5nXCIgYWx0PVwiQ29tcGFueSBsb2dvXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJmZWF0dXJlZC1pbi1pbWdcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2xvZ29zL2ZvcmJlcy5wbmdcIiBhbHQ9XCJDb21wYW55IGxvZ29cIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImZlYXR1cmVkLWluLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvbG9nb3MvdXNhLXRvZGF5LnBuZ1wiIGFsdD1cIkNvbXBhbnkgbG9nb1wiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLWhvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJob3cgY29udGFpbmVyIGdyaWQgZ3JpZC0tMi1jb2xzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaG93LWhlYWRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN1YmhlYWRpbmdcIj5IT1cgSVQgV09SS1M8L3NwYW4+XG4gICAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmctc2Vjb25kYXJ5XCI+WW91ciBkYWlseSBkb3NlIG9mIGhlYWx0aCBpbiAzIHNpbXBsZSBzdGVwczwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGVwLXRleHQtYm94XCI+XG4gICAgICAgIDxwIGNsYXNzPVwic3RlcC1udW1iZXJcIj4wMTwvcD5cbiAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGluZy10ZXJ0aWFyeVwiPlRlbGwgdXMgd2hhdCB5b3UgbGlrZSAoYW5kIHdoYXQgbm90KTwvaDM+XG4gICAgICAgIDxwIGNsYXNzPVwic3RlcC1kZXNjcmlwdGlvblwiPk5ldmVyIGFnYWluIHdhc3RlIHRpbWUgdGhpbmtpbmcgYWJvdXQgd2hhdCB0byBlYXQhIE9tbmlmb29kIEFJIHdpbGwgY3JlYXRlIGEgMTAwJSBwZXJzb25hbGl6ZWQgd2Vla2x5IG1lYWwgcGxhbiBqdXN0IGZvciB5b3UuIEl0IG1ha2VzIHN1cmUgeW91IGdldCBhbGwgdGhlIG51dHJpZW50cyBhbmQgdml0YW1pbnMgeW91IG5lZWQsIG5vIG1hdHRlciB3aGF0IGRpZXQgeW91IGZvbGxvdyE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGVwLWltZy1ib3hcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInN0ZXAtaW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9hcHAvYXBwLXNjcmVlbi0xLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGVwLWltZy1ib3hcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInN0ZXAtaW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9hcHAvYXBwLXNjcmVlbi0yLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RlcC10ZXh0LWJveFwiPlxuICAgICAgICA8cCBjbGFzcz1cInN0ZXAtbnVtYmVyXCI+MDI8L3A+XG4gICAgICAgIDxoMyBjbGFzcz1cImhlYWRpbmctdGVydGlhcnlcIj5BcHByb3ZlIHlvdXIgd2Vla2x5IG1lYWwgcGxhbjwvaDM+XG4gICAgICAgIDxwIGNsYXNzPVwic3RlcC1kZXNjcmlwdGlvblwiPk9uY2UgcGVyIHdlZWssIGFwcHJvdmUgdGhlIG1lYWwgcGxhbiBnZW5lcmF0ZWQgZm9yIHlvdSBieSBPbW5pZm9vZCBBSS4gWW91IGNhbiBjaGFuZ2UgaW5ncmVkaWVudHMsIHN3YXAgZW50aXJlIG1lYWxzLCBvciBldmVuIGFkZCB5b3VyIG93biByZWNpcGVzLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGVwLXRleHQtYm94XCI+XG4gICAgICAgIDxwIGNsYXNzPVwic3RlcC1udW1iZXJcIj4wMzwvcD5cbiAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGluZy10ZXJ0aWFyeVwiPlJlY2VpdmUgbWVhbHMgYXQgY29udmVuaWVudCB0aW1lPC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJzdGVwLWRlc2NyaXB0aW9uXCI+QmVzdCBjaGVmcyBpbiB0b3duIHdpbGwgY29vayB5b3VyIHNlbGVjdGVkIG1lYWwgZXZlcnkgZGF5LCBhbmQgd2Ugd2lsbCBkZWxpdmVyIGl0IHRvIHlvdXIgZG9vciB3aGVuZXZlciB3b3JrcyBiZXN0IGZvciB5b3UuIFlvdSBjYW4gY2hhbmdlIGRlbGl2ZXJ5IHNjaGVkdWxlIGFuZCBhZGRyZXNzIGRhaWx5ITwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInN0ZXAtaW1nLWJveFwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwic3RlcC1pbWdcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2FwcC9hcHAtc2NyZWVuLTMucG5nXCIgYWx0PVwiXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC9tYWluPiBcbmA7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgbG9hZE1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGh0bWwgPSBgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLW1lYWxzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtZWFscy1oZWFkZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3ViaGVhZGluZ1wiPk1lYWxzPC9zcGFuPlxuICAgICAgPGgyIGNsYXNzPVwiaGVhZGluZy1zZWNvbmRhcnlcIj5PbW5pZm9vZCBBSSBjaG9vc2VzIGZyb20gNSwwMDArIHJlY2lwZXM8L2gyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbWVhbHMgZ3JpZCBncmlkLS0zLWNvbHMgbWFyZ2luLWJvdHRvbS1tZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY2FyZFwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwibWVhbC1pbWdcIiBzcmM9XCIuLi9hc3NldHMvaW1nL21lYWxzL21lYWwtMS5qcGdcIiBhbHQ9XCJEaXNoZXMgb2YgamFwYW5lc2UgZm9vZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtdGFnc1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgdGFnLS12ZWdldGFyaWFuXCI+VmVnZXRhcmlhbjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1lYWwtdGl0bGVcIj5KYXBhbmVzZSBHeW96YXM8L3A+XG4gICAgICAgICAgPHVsIGNsYXNzPVwibWVhbC1hdHRyaWJ1dGVzIGxpc3RcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImZsYW1lLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8c3Bhbj48c3Ryb25nPjY1MDwvc3Ryb25nPiBjYWxvcmllczwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJyZXN0YXVyYW50LW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8c3Bhbj5OdXRyaVNjb3JlIMKuIDxzdHJvbmc+NzQ8L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwic3Rhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz40Ljk8L3N0cm9uZz4gcmF0aW5nICg1MzcpPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNhcmRcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cIm1lYWwtaW1nXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9tZWFscy9tZWFsLTIuanBnXCIgYWx0PVwiRGlzaGVzIG9mIGphcGFuZXNlIGZvb2RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLXRhZ3NcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIHRhZy0tdmVnYW5cIj5WZWdhbjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIHRhZy0tcGFsZW9cIj5QYWxlbzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1lYWwtdGl0bGVcIj5Bdm9jYWRvIFNhbGFkPC9wPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1lYWwtYXR0cmlidXRlcyBsaXN0XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJmbGFtZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz40MDAgPC9zdHJvbmc+IGNhbG9yaWVzPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cInJlc3RhdXJhbnQtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxzcGFuPk51dHJpU2NvcmUgwq4gPHN0cm9uZz45Mjwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJzdGFyLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8c3Bhbj48c3Ryb25nPjQuOCA8L3N0cm9uZz4gcmF0aW5nICg0NDEpPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRpZXRzIFwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJoZWFkaW5nLXRlcnRpYXJ5XCI+V29ya3Mgd2l0aCBhbnkgZGlldDo8L2gzPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cImRpZXRzLWxpc3QgbGlzdFwiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPlZlZ2V0YXJpYW48L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj5WZWdhbjwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIGNsYXNzPVwibGlzdC1pY29uXCIgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxzcGFuPlBlc2NhdGFyaWFuPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+R2x1dGVuLWZyZWU8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj5MYWN0b3NlLWZyZWU8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj5LZXRvPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+UGFsZW88L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjbGFzcz1cImxpc3QtaWNvblwiIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8c3Bhbj5Mb3cgRk9ETUFQPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJsaXN0LWljb25cIiBuYW1lPVwiY2hlY2ttYXJrLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+S2lkLWZyaWVuZGx5PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGFsbC1yZWNpcGVzXCI+XG4gICAgICA8YSBjbGFzcz1cImxpbmtcIiBocmVmPVwiI1wiPlNlZSBhbGwgcmVjaXBlcyAmcmFycjs8L2E+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLXRlc3RpbW9uaWFsc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXN0aW1vbmlhbHMtY29udGFpbmVyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInN1YmhlYWRpbmdcIj5UZXN0aW1vbmlhbHM8L3NwYW4+XG4gICAgICA8aDIgY2xhc3M9XCJoZWFkaW5nLXNlY29uZGFyeVwiPk9uY2UgeW91IHRyeSBpdCwgeW91IGNhbid0IGdvIGJhY2s8L2gyPlxuICAgIFxuICAgICAgPGRpdiBjbGFzcz1cInRlc3RpbW9uaWFscyBcIj5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInRlc3RpbW9uaWFsXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cInRlc3RpbW9uaWFsLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY3VzdG9tZXJzL2RhdmUuanBnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3M9XCJ0ZXN0aW1vbmlhbC10ZXh0XCI+SW5leHBlbnNpdmUsIGhlYWx0aHkgYW5kIGdyZWF0LXRhc3RpbmcgbWVhbHMsIHdpdGhvdXQgZXZlbiBoYXZpbmcgdG8gb3JkZXIgbWFudWFsbHkhIEl0IGZlZWxzIHRydWx5IG1hZ2ljYWwuPC9ibG9ja3F1b3RlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVzdGltb25pYWwtbmFtZVwiPuKAlCBEYXZlIEJyeXNvbjwvc3Bhbj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJ0ZXN0aW1vbmlhbFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJ0ZXN0aW1vbmlhbC1pbWdcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2N1c3RvbWVycy9iZW4uanBnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3M9XCJ0ZXN0aW1vbmlhbC10ZXh0XCI+VGhlIEFJIGFsZ29yaXRobSBpcyBjcmF6eSBnb29kLCBpdCBjaG9vc2VzIHRoZSByaWdodCBtZWFscyBmb3IgbWUgZXZlcnkgdGltZS4gSXQncyBhbWF6aW5nIG5vdCB0byB3b3JyeSBhYm91dCBmb29kIGFueW1vcmUhPC9ibG9ja3F1b3RlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVzdGltb25pYWwtbmFtZVwiPuKAlCBCZW4gSGFkbGV5PC9zcGFuPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInRlc3RpbW9uaWFsXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cInRlc3RpbW9uaWFsLWltZ1wiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY3VzdG9tZXJzL3N0ZXZlLmpwZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzPVwidGVzdGltb25pYWwtdGV4dFwiPk9tbmlmb29kIGlzIGEgbGlmZSBzYXZlciEgSSBqdXN0IHN0YXJ0ZWQgYSBjb21wYW55LCBzbyB0aGVyZSdzIG5vIHRpbWUgZm9yIGNvb2tpbmcuIEkgY291bGRuJ3QgbGl2ZSB3aXRob3V0IG15IGRhaWx5IG1lYWxzIG5vdyE8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXN0aW1vbmlhbC1uYW1lXCI+4oCUIFN0ZXZlIE1pbGxlcjwvc3Bhbj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJ0ZXN0aW1vbmlhbFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJ0ZXN0aW1vbmlhbC1pbWdcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2N1c3RvbWVycy9oYW5uYWguanBnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3M9XCJ0ZXN0aW1vbmlhbC10ZXh0XCI+SSBnb3QgT21uaWZvb2QgZm9yIHRoZSB3aG9sZSBmYW1pbHksIGFuZCBpdCBmcmVlcyB1cCBzbyBtdWNoIHRpbWUhIFBsdXMsIGV2ZXJ5dGhpbmcgaXMgb3JnYW5pYyBhbmQgdmVnYW4gYW5kIHdpdGhvdXQgcGxhc3RpYy48L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXN0aW1vbmlhbC1uYW1lXCI+4oCUIEhhbm5haCBTbWl0aDwvc3Bhbj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeSBcIj5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTEuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTIuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTMuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTQuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTUuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTYuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTcuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTguanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTkuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZ2FsbGVyeVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9nYWxsZXJ5LTEwLmpwZ1wiIGFsdD1cInBob3RvIG9mIGZvb2RcIj5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxmaWd1cmUgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWdhbGxlcnlcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2dhbGxlcnkvZ2FsbGVyeS0xMS5qcGdcIiBhbHQ9XCJwaG90byBvZiBmb29kXCI+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8ZmlndXJlIGNsYXNzPVwiZ2FsbGVyeS1pdGVtXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImltZy1nYWxsZXJ5XCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2dhbGxlcnktMTIuanBnXCIgYWx0PVwicGhvdG8gb2YgZm9vZFwiPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPmA7XG5cbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGxvYWRDb250YWN0cyBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9nZW5lcmFsLmNzc1wiO1xuXG5jb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW5hdi1saXN0XCIpO1xuXG5sb2FkSG9tZSgpO1xubmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhvbWUtYnRuXCIpKSBsb2FkSG9tZSgpO1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVhbHMtYnRuXCIpKSBsb2FkTWVudSgpO1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpY2luZy1idG5cIikpIGxvYWRDb250YWN0cygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=