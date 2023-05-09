"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/primitives";
exports.ids = ["pages/primitives"];
exports.modules = {

/***/ "./abi/defaultProvider.js":
/*!********************************!*\
  !*** ./abi/defaultProvider.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_0__]);\nethers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst defaultProvider = new ethers__WEBPACK_IMPORTED_MODULE_0__.InfuraProvider(\"goerli\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hYmkvZGVmYXVsdFByb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1DLGtCQUFrQixJQUFJRCxrREFBY0EsQ0FBQ0UsUUFBdUI7QUFFbEUsaUVBQWVELGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldGhlcnMtdGVzdC8uL2FiaS9kZWZhdWx0UHJvdmlkZXIuanM/OTY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmZ1cmFQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcblxuY29uc3QgZGVmYXVsdFByb3ZpZGVyID0gbmV3IEluZnVyYVByb3ZpZGVyKHByb2Nlc3MuZW52Lm5ldHdvcmtOYW1lKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFByb3ZpZGVyOyJdLCJuYW1lcyI6WyJJbmZ1cmFQcm92aWRlciIsImRlZmF1bHRQcm92aWRlciIsInByb2Nlc3MiLCJlbnYiLCJuZXR3b3JrTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./abi/defaultProvider.js\n");

/***/ }),

/***/ "./pages/primitives.js":
/*!*****************************!*\
  !*** ./pages/primitives.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/defaultProvider */ \"./abi/defaultProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_1__, _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__]);\n([ethers__WEBPACK_IMPORTED_MODULE_1__, _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst Primitives = ()=>{\n    const abi = [{\"inputs\":[],\"name\":\"bigBytes\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTrue\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_bigBytes\",\"type\":\"bytes32\"}],\"name\":\"setBigBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_bigInt\",\"type\":\"int256\"}],\"name\":\"setBiglInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigUint\",\"type\":\"uint256\"}],\"name\":\"setBiglUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes1\",\"name\":\"_smallBytes\",\"type\":\"bytes1\"}],\"name\":\"setSmallBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int8\",\"name\":\"_smallInt\",\"type\":\"int8\"}],\"name\":\"setSmallInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_smallUint\",\"type\":\"uint8\"}],\"name\":\"setSmallUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_isTrue\",\"type\":\"bool\"}],\"name\":\"setTrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_wallet\",\"type\":\"address\"}],\"name\":\"setWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallBytes\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"\",\"type\":\"bytes1\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallInt\",\"outputs\":[{\"internalType\":\"int8\",\"name\":\"\",\"type\":\"int8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallUint\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}];\n    const primitives = new ethers__WEBPACK_IMPORTED_MODULE_1__.Contract(\"0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462\", abi, _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const isTrue = await primitives.isTrue();\n            console.log(\"isTrue: \", isTrue);\n        })();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Primitives\"\n    }, void 0, false, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Primitives);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcmltaXRpdmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ21CO0FBQ25CO0FBRWxDLE1BQU1HLGFBQWEsSUFBTTtJQUN2QixNQUFNQyxNQUFNQyx5a0ZBQWU7SUFDM0IsTUFBTUUsYUFBYSxJQUFJUCw0Q0FBUUEsQ0FDN0JLLDRDQUE2QixFQUM3QkQsS0FDQUgsNERBQWVBO0lBR2pCQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2IsV0FBWTtZQUNYLE1BQU1PLFNBQVMsTUFBTUYsV0FBV0UsTUFBTTtZQUN0Q0MsUUFBUUMsR0FBRyxDQUFDLFlBQVlGO1FBQzFCO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ0c7a0JBQUc7Ozs7OztBQUNiO0FBRUEsaUVBQWVULFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldGhlcnMtdGVzdC8uL3BhZ2VzL3ByaW1pdGl2ZXMuanM/YTdlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cmFjdCB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBkZWZhdWx0UHJvdmlkZXIgZnJvbSBcIi4uL2FiaS9kZWZhdWx0UHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcmltaXRpdmVzID0gKCkgPT4ge1xuICBjb25zdCBhYmkgPSBwcm9jZXNzLmVudi5hYmk7XG4gIGNvbnN0IHByaW1pdGl2ZXMgPSBuZXcgQ29udHJhY3QoXG4gICAgcHJvY2Vzcy5lbnYucHJpbWl0aXZlc0FkZHJlc3MsXG4gICAgYWJpLFxuICAgIGRlZmF1bHRQcm92aWRlclxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGlzVHJ1ZSA9IGF3YWl0IHByaW1pdGl2ZXMuaXNUcnVlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImlzVHJ1ZTogXCIsIGlzVHJ1ZSk7XG4gICAgfSkoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIDxoMT5QcmltaXRpdmVzPC9oMT47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltaXRpdmVzO1xuIl0sIm5hbWVzIjpbIkNvbnRyYWN0IiwiZGVmYXVsdFByb3ZpZGVyIiwidXNlRWZmZWN0IiwiUHJpbWl0aXZlcyIsImFiaSIsInByb2Nlc3MiLCJlbnYiLCJwcmltaXRpdmVzIiwicHJpbWl0aXZlc0FkZHJlc3MiLCJpc1RydWUiLCJjb25zb2xlIiwibG9nIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/primitives.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("ethers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/primitives.js"));
module.exports = __webpack_exports__;

})();