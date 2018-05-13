/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./commons.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./commons.js":
/*!********************!*\
  !*** ./commons.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n///////////\n// Стили //\n///////////\n\n__webpack_require__(/*! ./styles/main.scss */ \"./styles/main.scss\");\n\n////////////\n// Шрифты //\n////////////\n\n__webpack_require__(/*! ./fonts/Gilroy-ExtraBold.eot */ \"./fonts/Gilroy-ExtraBold.eot\");\n__webpack_require__(/*! ./fonts/Gilroy-ExtraBold.woff */ \"./fonts/Gilroy-ExtraBold.woff\");\n__webpack_require__(/*! ./fonts/Gilroy-ExtraBold.ttf */ \"./fonts/Gilroy-ExtraBold.ttf\");\n__webpack_require__(/*! ./fonts/Gilroy-Light.eot */ \"./fonts/Gilroy-Light.eot\");\n__webpack_require__(/*! ./fonts/Gilroy-Light.woff */ \"./fonts/Gilroy-Light.woff\");\n__webpack_require__(/*! ./fonts/Gilroy-Light.ttf */ \"./fonts/Gilroy-Light.ttf\");\n\n////////////\n// Шрифты //\n////////////\n\n__webpack_require__(/*! ./images/logo-dgkb.png */ \"./images/logo-dgkb.png\");\n__webpack_require__(/*! ./images/footer-logo.png */ \"./images/footer-logo.png\");\n__webpack_require__(/*! ./images/logo-dgkb.svg */ \"./images/logo-dgkb.svg\");\n__webpack_require__(/*! ./images/24-hours.png */ \"./images/24-hours.png\");\n\n__webpack_require__(/*! ./images/home-bg.jpg */ \"./images/home-bg.jpg\");\n\n__webpack_require__(/*! ./images/icons/phone.png */ \"./images/icons/phone.png\");\n__webpack_require__(/*! ./images/icons/marker.png */ \"./images/icons/marker.png\");\n__webpack_require__(/*! ./images/icons/menu.png */ \"./images/icons/menu.png\");\n__webpack_require__(/*! ./images/icons/login.png */ \"./images/icons/login.png\");\n__webpack_require__(/*! ./images/icons/search.png */ \"./images/icons/search.png\");\n__webpack_require__(/*! ./images/icons/glasses.png */ \"./images/icons/glasses.png\");\n__webpack_require__(/*! ./images/icons/comment.png */ \"./images/icons/comment.png\");\n__webpack_require__(/*! ./images/icons/more.png */ \"./images/icons/more.png\");\n__webpack_require__(/*! ./images/icons/more-post.png */ \"./images/icons/more-post.png\");\n__webpack_require__(/*! ./images/icons/status.png */ \"./images/icons/status.png\");\n\n__webpack_require__(/*! ./images/icons/vk.png */ \"./images/icons/vk.png\");\n__webpack_require__(/*! ./images/icons/facebook.png */ \"./images/icons/facebook.png\");\n__webpack_require__(/*! ./images/icons/twitter.png */ \"./images/icons/twitter.png\");\n__webpack_require__(/*! ./images/icons/ok.png */ \"./images/icons/ok.png\");\n\n__webpack_require__(/*! ./images/consultants-form-submit.png */ \"./images/consultants-form-submit.png\");\n\n__webpack_require__(/*! ./images/medic.jpg */ \"./images/medic.jpg\");\n\n__webpack_require__(/*! ./images/news-item.jpg */ \"./images/news-item.jpg\");\n__webpack_require__(/*! ./images/main-news-item.jpg */ \"./images/main-news-item.jpg\");\n\n__webpack_require__(/*! ./images/map.jpg */ \"./images/map.jpg\");\n\n__webpack_require__(/*! ./images/stomatolog.png */ \"./images/stomatolog.png\");\n__webpack_require__(/*! ./images/info-for-muther.png */ \"./images/info-for-muther.png\");\n__webpack_require__(/*! ./images/our-spec.png */ \"./images/our-spec.png\");\n__webpack_require__(/*! ./images/stacionar.png */ \"./images/stacionar.png\");\n__webpack_require__(/*! ./images/consulting-center.png */ \"./images/consulting-center.png\");\n\n//# sourceURL=webpack:///./commons.js?");

/***/ }),

/***/ "./fonts/Gilroy-ExtraBold.eot":
/*!************************************!*\
  !*** ./fonts/Gilroy-ExtraBold.eot ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Gilroy-ExtraBold.eot\";\n\n//# sourceURL=webpack:///./fonts/Gilroy-ExtraBold.eot?");

/***/ }),

/***/ "./fonts/Gilroy-ExtraBold.ttf":
/*!************************************!*\
  !*** ./fonts/Gilroy-ExtraBold.ttf ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Gilroy-ExtraBold.ttf\";\n\n//# sourceURL=webpack:///./fonts/Gilroy-ExtraBold.ttf?");

/***/ }),

/***/ "./fonts/Gilroy-ExtraBold.woff":
/*!*************************************!*\
  !*** ./fonts/Gilroy-ExtraBold.woff ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Gilroy-ExtraBold.woff\";\n\n//# sourceURL=webpack:///./fonts/Gilroy-ExtraBold.woff?");

/***/ }),

/***/ "./fonts/Gilroy-Light.eot":
/*!********************************!*\
  !*** ./fonts/Gilroy-Light.eot ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Gilroy-Light.eot\";\n\n//# sourceURL=webpack:///./fonts/Gilroy-Light.eot?");

/***/ }),

/***/ "./fonts/Gilroy-Light.ttf":
/*!********************************!*\
  !*** ./fonts/Gilroy-Light.ttf ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Gilroy-Light.ttf\";\n\n//# sourceURL=webpack:///./fonts/Gilroy-Light.ttf?");

/***/ }),

/***/ "./fonts/Gilroy-Light.woff":
/*!*********************************!*\
  !*** ./fonts/Gilroy-Light.woff ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Gilroy-Light.woff\";\n\n//# sourceURL=webpack:///./fonts/Gilroy-Light.woff?");

/***/ }),

/***/ "./images/24-hours.png":
/*!*****************************!*\
  !*** ./images/24-hours.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/24-hours.png\";\n\n//# sourceURL=webpack:///./images/24-hours.png?");

/***/ }),

/***/ "./images/consultants-form-submit.png":
/*!********************************************!*\
  !*** ./images/consultants-form-submit.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/consultants-form-submit.png\";\n\n//# sourceURL=webpack:///./images/consultants-form-submit.png?");

/***/ }),

/***/ "./images/consulting-center.png":
/*!**************************************!*\
  !*** ./images/consulting-center.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/consulting-center.png\";\n\n//# sourceURL=webpack:///./images/consulting-center.png?");

/***/ }),

/***/ "./images/footer-logo.png":
/*!********************************!*\
  !*** ./images/footer-logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/footer-logo.png\";\n\n//# sourceURL=webpack:///./images/footer-logo.png?");

/***/ }),

/***/ "./images/home-bg.jpg":
/*!****************************!*\
  !*** ./images/home-bg.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/home-bg.jpg\";\n\n//# sourceURL=webpack:///./images/home-bg.jpg?");

/***/ }),

/***/ "./images/icons/comment.png":
/*!**********************************!*\
  !*** ./images/icons/comment.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/comment.png\";\n\n//# sourceURL=webpack:///./images/icons/comment.png?");

/***/ }),

/***/ "./images/icons/facebook.png":
/*!***********************************!*\
  !*** ./images/icons/facebook.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/facebook.png\";\n\n//# sourceURL=webpack:///./images/icons/facebook.png?");

/***/ }),

/***/ "./images/icons/glasses.png":
/*!**********************************!*\
  !*** ./images/icons/glasses.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/glasses.png\";\n\n//# sourceURL=webpack:///./images/icons/glasses.png?");

/***/ }),

/***/ "./images/icons/login.png":
/*!********************************!*\
  !*** ./images/icons/login.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/login.png\";\n\n//# sourceURL=webpack:///./images/icons/login.png?");

/***/ }),

/***/ "./images/icons/marker.png":
/*!*********************************!*\
  !*** ./images/icons/marker.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/marker.png\";\n\n//# sourceURL=webpack:///./images/icons/marker.png?");

/***/ }),

/***/ "./images/icons/menu.png":
/*!*******************************!*\
  !*** ./images/icons/menu.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/menu.png\";\n\n//# sourceURL=webpack:///./images/icons/menu.png?");

/***/ }),

/***/ "./images/icons/more-post.png":
/*!************************************!*\
  !*** ./images/icons/more-post.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/more-post.png\";\n\n//# sourceURL=webpack:///./images/icons/more-post.png?");

/***/ }),

/***/ "./images/icons/more.png":
/*!*******************************!*\
  !*** ./images/icons/more.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/more.png\";\n\n//# sourceURL=webpack:///./images/icons/more.png?");

/***/ }),

/***/ "./images/icons/ok.png":
/*!*****************************!*\
  !*** ./images/icons/ok.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/ok.png\";\n\n//# sourceURL=webpack:///./images/icons/ok.png?");

/***/ }),

/***/ "./images/icons/phone.png":
/*!********************************!*\
  !*** ./images/icons/phone.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/phone.png\";\n\n//# sourceURL=webpack:///./images/icons/phone.png?");

/***/ }),

/***/ "./images/icons/search.png":
/*!*********************************!*\
  !*** ./images/icons/search.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/search.png\";\n\n//# sourceURL=webpack:///./images/icons/search.png?");

/***/ }),

/***/ "./images/icons/status.png":
/*!*********************************!*\
  !*** ./images/icons/status.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/status.png\";\n\n//# sourceURL=webpack:///./images/icons/status.png?");

/***/ }),

/***/ "./images/icons/twitter.png":
/*!**********************************!*\
  !*** ./images/icons/twitter.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/twitter.png\";\n\n//# sourceURL=webpack:///./images/icons/twitter.png?");

/***/ }),

/***/ "./images/icons/vk.png":
/*!*****************************!*\
  !*** ./images/icons/vk.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/vk.png\";\n\n//# sourceURL=webpack:///./images/icons/vk.png?");

/***/ }),

/***/ "./images/info-for-muther.png":
/*!************************************!*\
  !*** ./images/info-for-muther.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/info-for-muther.png\";\n\n//# sourceURL=webpack:///./images/info-for-muther.png?");

/***/ }),

/***/ "./images/logo-dgkb.png":
/*!******************************!*\
  !*** ./images/logo-dgkb.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/logo-dgkb.png\";\n\n//# sourceURL=webpack:///./images/logo-dgkb.png?");

/***/ }),

/***/ "./images/logo-dgkb.svg":
/*!******************************!*\
  !*** ./images/logo-dgkb.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/logo-dgkb.svg\";\n\n//# sourceURL=webpack:///./images/logo-dgkb.svg?");

/***/ }),

/***/ "./images/main-news-item.jpg":
/*!***********************************!*\
  !*** ./images/main-news-item.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/main-news-item.jpg\";\n\n//# sourceURL=webpack:///./images/main-news-item.jpg?");

/***/ }),

/***/ "./images/map.jpg":
/*!************************!*\
  !*** ./images/map.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/map.jpg\";\n\n//# sourceURL=webpack:///./images/map.jpg?");

/***/ }),

/***/ "./images/medic.jpg":
/*!**************************!*\
  !*** ./images/medic.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/medic.jpg\";\n\n//# sourceURL=webpack:///./images/medic.jpg?");

/***/ }),

/***/ "./images/news-item.jpg":
/*!******************************!*\
  !*** ./images/news-item.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/news-item.jpg\";\n\n//# sourceURL=webpack:///./images/news-item.jpg?");

/***/ }),

/***/ "./images/our-spec.png":
/*!*****************************!*\
  !*** ./images/our-spec.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/our-spec.png\";\n\n//# sourceURL=webpack:///./images/our-spec.png?");

/***/ }),

/***/ "./images/stacionar.png":
/*!******************************!*\
  !*** ./images/stacionar.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/stacionar.png\";\n\n//# sourceURL=webpack:///./images/stacionar.png?");

/***/ }),

/***/ "./images/stomatolog.png":
/*!*******************************!*\
  !*** ./images/stomatolog.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/stomatolog.png\";\n\n//# sourceURL=webpack:///./images/stomatolog.png?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ })

/******/ });