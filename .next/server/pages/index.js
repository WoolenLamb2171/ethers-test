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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_1__]);\nethers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst index = ()=>{\n    const [ethBalance, setEthhBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.InfuraProvider(\"maticmum\");\n    const getBalance = async ()=>{\n        const balance = await provider.getBalance(\"0x9559CDD39b8Fc8fE166475f4c88e96f07C4Af2c5\");\n        return (0,ethers__WEBPACK_IMPORTED_MODULE_1__.formatEther)(balance);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getBalance().then((balance)=>{\n            setEthhBalance(balance);\n            console.log(balance);\n        }).catch((error)=>console.error(error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            \"balance: \",\n            ethBalance\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n        lineNumber: 24,\n        columnNumber: 14\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ2pCO0FBRTVDLE1BQU1LLFFBQVEsSUFBTTtJQUNoQixNQUFNLENBQUNDLFlBQVlDLGVBQWUsR0FBR0gsK0NBQVFBO0lBQzdDLE1BQU1JLFdBQVcsSUFBSU4sa0RBQWNBLENBQUM7SUFDcEMsTUFBTU8sYUFBYSxVQUFXO1FBQzFCLE1BQU1DLFVBQVUsTUFBTUYsU0FBU0MsVUFBVSxDQUNyQztRQUdKLE9BQU9SLG1EQUFXQSxDQUFDUztJQUN2QjtJQUVBUCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1ZNLGFBQ0NFLElBQUksQ0FBQ0QsQ0FBQUEsVUFBVztZQUNiSCxlQUFlRztZQUNmRSxRQUFRQyxHQUFHLENBQUNIO1FBQ2hCLEdBQ0NJLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0gsUUFBUUcsS0FBSyxDQUFDQTtJQUNsQyxHQUFHLEVBQUU7SUFFTCxxQkFBUyw4REFBQ0M7O1lBQUc7WUFBVVY7Ozs7Ozs7QUFDM0I7QUFFQSxpRUFBZUQsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0aGVycy10ZXN0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMsIGZvcm1hdEV0aGVyLCBJbmZ1cmFQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgW2V0aEJhbGFuY2UsIHNldEV0aGhCYWxhbmNlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgSW5mdXJhUHJvdmlkZXIoXCJtYXRpY211bVwiKTtcbiAgICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT57XG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBwcm92aWRlci5nZXRCYWxhbmNlKFxuICAgICAgICAgICAgXCIweDk1NTlDREQzOWI4RmM4ZkUxNjY0NzVmNGM4OGU5NmYwN0M0QWYyYzVcIlxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZvcm1hdEV0aGVyKGJhbGFuY2UpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBnZXRCYWxhbmNlKClcbiAgICAgICAgLnRoZW4oYmFsYW5jZSA9PiB7XG4gICAgICAgICAgICBzZXRFdGhoQmFsYW5jZShiYWxhbmNlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYmFsYW5jZSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxuICAgIH0sIFtdKVxuICAgIFxuICAgIHJldHVybiAoIDxoMT5iYWxhbmNlOiB7ZXRoQmFsYW5jZX08L2gxPiApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sIm5hbWVzIjpbImV0aGVycyIsImZvcm1hdEV0aGVyIiwiSW5mdXJhUHJvdmlkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImluZGV4IiwiZXRoQmFsYW5jZSIsInNldEV0aGhCYWxhbmNlIiwicHJvdmlkZXIiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();