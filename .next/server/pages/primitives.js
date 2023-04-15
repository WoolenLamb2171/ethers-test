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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_0__]);\nethers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst defaultProvider = new ethers__WEBPACK_IMPORTED_MODULE_0__.InfuraProvider(\"maticmum\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hYmkvZGVmYXVsdFByb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1DLGtCQUFrQixJQUFJRCxrREFBY0EsQ0FBQ0UsVUFBdUI7QUFFbEUsaUVBQWVELGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldGhlcnMtdGVzdC8uL2FiaS9kZWZhdWx0UHJvdmlkZXIuanM/OTY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmZ1cmFQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcblxuY29uc3QgZGVmYXVsdFByb3ZpZGVyID0gbmV3IEluZnVyYVByb3ZpZGVyKHByb2Nlc3MuZW52Lm5ldHdvcmtOYW1lKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFByb3ZpZGVyOyJdLCJuYW1lcyI6WyJJbmZ1cmFQcm92aWRlciIsImRlZmF1bHRQcm92aWRlciIsInByb2Nlc3MiLCJlbnYiLCJuZXR3b3JrTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./abi/defaultProvider.js\n");

/***/ }),

/***/ "./pages/primitives.js":
/*!*****************************!*\
  !*** ./pages/primitives.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/defaultProvider */ \"./abi/defaultProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_1__, _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__]);\n([ethers__WEBPACK_IMPORTED_MODULE_1__, _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst Primitives = ()=>{\n    const abi = [\n        {\n            inputs: [],\n            name: \"bigBytes\",\n            outputs: [\n                {\n                    internalType: \"bytes32\",\n                    name: \"\",\n                    type: \"bytes32\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        },\n        {\n            inputs: [],\n            name: \"bigInt\",\n            outputs: [\n                {\n                    internalType: \"int256\",\n                    name: \"\",\n                    type: \"int256\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        },\n        {\n            inputs: [],\n            name: \"bigUint\",\n            outputs: [\n                {\n                    internalType: \"uint256\",\n                    name: \"\",\n                    type: \"uint256\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        },\n        {\n            inputs: [],\n            name: \"isTrue\",\n            outputs: [\n                {\n                    internalType: \"bool\",\n                    name: \"\",\n                    type: \"bool\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        },\n        {\n            inputs: [],\n            name: \"name\",\n            outputs: [\n                {\n                    internalType: \"string\",\n                    name: \"\",\n                    type: \"string\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        },\n        {\n            inputs: [\n                {\n                    internalType: \"bytes32\",\n                    name: \"_bigBytes\",\n                    type: \"bytes32\"\n                }\n            ],\n            name: \"setBigBytes\",\n            outputs: [],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        },\n        {\n            inputs: [\n                {\n                    internalType: \"int256\",\n                    name: \"_bigInt\",\n                    type: \"int256\"\n                }\n            ],\n            name: \"setBiglInt\",\n            outputs: [],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        },\n        {\n            inputs: [\n                {\n                    internalType: \"uint256\",\n                    name: \"_bigUint\",\n                    type: \"uint256\"\n                }\n            ],\n            name: \"setBiglUint\",\n            outputs: [],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        },\n        {\n            inputs: [\n                {\n                    internalType: \"string\",\n                    name: \"_name\",\n                    type: \"string\"\n                }\n            ],\n            name: \"setName\",\n            outputs: [],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        },\n        {\n            inputs: [\n                {\n                    internalType: \"bytes1\",\n                    name: \"_smallBytes\",\n                    type: \"bytes1\"\n                }\n            ],\n            name: \"setSmallBytes\",\n            outputs: [],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        },\n        {\n            inputs: [\n                {\n                    internalType: \"int8\",\n                    name: \"_smallInt\",\n                    type: \"int8\"\n                }\n            ],\n            name: \"setSmallInt\",\n            outputs: [],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        },\n        {\n            inputs: [\n                {\n                    internalType: \"uint8\",\n                    name: \"_smallUint\",\n                    type: \"uint8\"\n                }\n            ],\n            name: \"setSmallUint\",\n            outputs: [],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        },\n        {\n            inputs: [\n                {\n                    internalType: \"bool\",\n                    name: \"_isTrue\",\n                    type: \"bool\"\n                }\n            ],\n            name: \"setTrue\",\n            outputs: [],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        },\n        {\n            inputs: [\n                {\n                    internalType: \"address\",\n                    name: \"_wallet\",\n                    type: \"address\"\n                }\n            ],\n            name: \"setWallet\",\n            outputs: [],\n            stateMutability: \"nonpayable\",\n            type: \"function\"\n        },\n        {\n            inputs: [],\n            name: \"smallBytes\",\n            outputs: [\n                {\n                    internalType: \"bytes1\",\n                    name: \"\",\n                    type: \"bytes1\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        },\n        {\n            inputs: [],\n            name: \"smallInt\",\n            outputs: [\n                {\n                    internalType: \"int8\",\n                    name: \"\",\n                    type: \"int8\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        },\n        {\n            inputs: [],\n            name: \"smallUint\",\n            outputs: [\n                {\n                    internalType: \"uint8\",\n                    name: \"\",\n                    type: \"uint8\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        },\n        {\n            inputs: [],\n            name: \"wallet\",\n            outputs: [\n                {\n                    internalType: \"address\",\n                    name: \"\",\n                    type: \"address\"\n                }\n            ],\n            stateMutability: \"view\",\n            type: \"function\"\n        }\n    ];\n    const primitives = new ethers__WEBPACK_IMPORTED_MODULE_1__.Contract(\"0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462\", abi, _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const isTrue = await primitives.isTrue();\n            console.log(\"isTrue: \", isTrue);\n        })();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Primitives\"\n    }, void 0, false, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/primitives.js\",\n        lineNumber: 147,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Primitives);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy5qcz9hN2VhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyYWN0IH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IGRlZmF1bHRQcm92aWRlciBmcm9tIFwiLi4vYWJpL2RlZmF1bHRQcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByaW1pdGl2ZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGFiaSA9IFtcbiAgICB7XG4gICAgICBpbnB1dHM6IFtdLFxuICAgICAgbmFtZTogXCJiaWdCeXRlc1wiLFxuICAgICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcImJ5dGVzMzJcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJieXRlczMyXCIgfV0sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbXSxcbiAgICAgIG5hbWU6IFwiYmlnSW50XCIsXG4gICAgICBvdXRwdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwiaW50MjU2XCIsIG5hbWU6IFwiXCIsIHR5cGU6IFwiaW50MjU2XCIgfV0sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbXSxcbiAgICAgIG5hbWU6IFwiYmlnVWludFwiLFxuICAgICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50MjU2XCIgfV0sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbXSxcbiAgICAgIG5hbWU6IFwiaXNUcnVlXCIsXG4gICAgICBvdXRwdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIlwiLCB0eXBlOiBcImJvb2xcIiB9XSxcbiAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbnB1dHM6IFtdLFxuICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICBvdXRwdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwic3RyaW5nXCIsIG5hbWU6IFwiXCIsIHR5cGU6IFwic3RyaW5nXCIgfV0sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwiYnl0ZXMzMlwiLCBuYW1lOiBcIl9iaWdCeXRlc1wiLCB0eXBlOiBcImJ5dGVzMzJcIiB9XSxcbiAgICAgIG5hbWU6IFwic2V0QmlnQnl0ZXNcIixcbiAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlucHV0czogW3sgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLCBuYW1lOiBcIl9iaWdJbnRcIiwgdHlwZTogXCJpbnQyNTZcIiB9XSxcbiAgICAgIG5hbWU6IFwic2V0QmlnbEludFwiLFxuICAgICAgb3V0cHV0czogW10sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIl9iaWdVaW50XCIsIHR5cGU6IFwidWludDI1NlwiIH1dLFxuICAgICAgbmFtZTogXCJzZXRCaWdsVWludFwiLFxuICAgICAgb3V0cHV0czogW10sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwic3RyaW5nXCIsIG5hbWU6IFwiX25hbWVcIiwgdHlwZTogXCJzdHJpbmdcIiB9XSxcbiAgICAgIG5hbWU6IFwic2V0TmFtZVwiLFxuICAgICAgb3V0cHV0czogW10sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwiYnl0ZXMxXCIsIG5hbWU6IFwiX3NtYWxsQnl0ZXNcIiwgdHlwZTogXCJieXRlczFcIiB9XSxcbiAgICAgIG5hbWU6IFwic2V0U21hbGxCeXRlc1wiLFxuICAgICAgb3V0cHV0czogW10sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwiaW50OFwiLCBuYW1lOiBcIl9zbWFsbEludFwiLCB0eXBlOiBcImludDhcIiB9XSxcbiAgICAgIG5hbWU6IFwic2V0U21hbGxJbnRcIixcbiAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlucHV0czogW3sgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwiX3NtYWxsVWludFwiLCB0eXBlOiBcInVpbnQ4XCIgfV0sXG4gICAgICBuYW1lOiBcInNldFNtYWxsVWludFwiLFxuICAgICAgb3V0cHV0czogW10sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIl9pc1RydWVcIiwgdHlwZTogXCJib29sXCIgfV0sXG4gICAgICBuYW1lOiBcInNldFRydWVcIixcbiAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlucHV0czogW3sgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJfd2FsbGV0XCIsIHR5cGU6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgbmFtZTogXCJzZXRXYWxsZXRcIixcbiAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlucHV0czogW10sXG4gICAgICBuYW1lOiBcInNtYWxsQnl0ZXNcIixcbiAgICAgIG91dHB1dHM6IFt7IGludGVybmFsVHlwZTogXCJieXRlczFcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJieXRlczFcIiB9XSxcbiAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbnB1dHM6IFtdLFxuICAgICAgbmFtZTogXCJzbWFsbEludFwiLFxuICAgICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcImludDhcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJpbnQ4XCIgfV0sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5wdXRzOiBbXSxcbiAgICAgIG5hbWU6IFwic21hbGxVaW50XCIsXG4gICAgICBvdXRwdXRzOiBbeyBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJ1aW50OFwiIH1dLFxuICAgICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlucHV0czogW10sXG4gICAgICBuYW1lOiBcIndhbGxldFwiLFxuICAgICAgb3V0cHV0czogW3sgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgdHlwZTogXCJhZGRyZXNzXCIgfV0sXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHByaW1pdGl2ZXMgPSBuZXcgQ29udHJhY3QoXG4gICAgcHJvY2Vzcy5lbnYucHJpbWl0aXZlc0FkZHJlc3MsXG4gICAgYWJpLFxuICAgIGRlZmF1bHRQcm92aWRlclxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGlzVHJ1ZSA9IGF3YWl0IHByaW1pdGl2ZXMuaXNUcnVlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImlzVHJ1ZTogXCIsIGlzVHJ1ZSk7XG4gICAgfSkoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIDxoMT5QcmltaXRpdmVzPC9oMT47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltaXRpdmVzO1xuIl0sIm5hbWVzIjpbIkNvbnRyYWN0IiwiZGVmYXVsdFByb3ZpZGVyIiwidXNlRWZmZWN0IiwiUHJpbWl0aXZlcyIsImFiaSIsImlucHV0cyIsIm5hbWUiLCJvdXRwdXRzIiwiaW50ZXJuYWxUeXBlIiwidHlwZSIsInN0YXRlTXV0YWJpbGl0eSIsInByaW1pdGl2ZXMiLCJwcm9jZXNzIiwiZW52IiwicHJpbWl0aXZlc0FkZHJlc3MiLCJpc1RydWUiLCJjb25zb2xlIiwibG9nIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/primitives.js\n");

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