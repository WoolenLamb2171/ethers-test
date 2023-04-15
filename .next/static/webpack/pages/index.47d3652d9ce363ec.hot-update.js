"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst index = ()=>{\n    _s();\n    const [maticBalance, setMatichBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.InfuraProvider(\"maticmum\");\n    const handleConnectWalletClick = async ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.BrowserProvider(window.ethereum);\n        const accounts = await provider.send(\"eth_requestAccounts\", []);\n        setCurrentAccount(accounts[0]);\n        console.log(accounts);\n        console.log(maticBalance);\n    };\n    const getBalance = async ()=>{\n        const balance = await provider.getBalance(currentAccount);\n        return (0,ethers__WEBPACK_IMPORTED_MODULE_2__.formatEther)(balance);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                if (currentAccount) {\n                    setMatichBalance(await getBalance());\n                }\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    }, [\n        currentAccount\n    ]);\n    const handleSendSubbmit = async (event)=>{\n        event.preventDefault();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const tx = signer.sendTransaction;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Address: \",\n                    currentAccount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"balance: \",\n                    maticBalance\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleConnectWalletClick,\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Send some matic\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSendSubbmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"labe\", {\n                        htmlFor: \"to\",\n                        children: \"To\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"to\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"amout\",\n                        children: \"Amout of matic\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        step: \".1\",\n                        name: \"amout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Send matic\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"Rkxu1d7E6Us1/nVLMgzk3ddTsA4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRTtBQUMxQjtBQUU1QyxNQUFNSyxRQUFRLElBQU07O0lBQ2hCLE1BQU0sQ0FBQ0MsY0FBY0MsaUJBQWlCLEdBQUdILCtDQUFRQTtJQUNqRCxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQTtJQUVwRCxNQUFNTSxXQUFXLElBQUlSLGtEQUFjQSxDQUFDO0lBRXBDLE1BQU1TLDJCQUEyQixVQUFZO1FBQ3pDLE1BQU1ELFdBQVcsSUFBSVYsbURBQWVBLENBQUNZLE9BQU9DLFFBQVE7UUFDcEQsTUFBTUMsV0FBVyxNQUFNSixTQUFTSyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7UUFDOUROLGtCQUFrQkssUUFBUSxDQUFDLEVBQUU7UUFDN0JFLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWkUsUUFBUUMsR0FBRyxDQUFDWDtJQUNoQjtJQUVBLE1BQU1ZLGFBQWEsVUFBVztRQUMxQixNQUFNQyxVQUFVLE1BQU1ULFNBQVNRLFVBQVUsQ0FBQ1Y7UUFDMUMsT0FBT1AsbURBQVdBLENBQUNrQjtJQUN2QjtJQUVBaEIsZ0RBQVNBLENBQUMsSUFBSTtRQUNULFdBQVk7WUFDVCxJQUFHO2dCQUNDLElBQUdLLGdCQUFlO29CQUNkRCxpQkFBaUIsTUFBTVc7Z0JBQzNCLENBQUM7WUFDTCxFQUNBLE9BQU1FLE9BQU07Z0JBQ1JKLFFBQVFJLEtBQUssQ0FBQ0E7WUFDbEI7UUFDSjtJQUNKLEdBQUc7UUFBQ1o7S0FBZTtJQUVuQixNQUFNYSxvQkFBb0IsT0FBT0MsUUFBUTtRQUNyQ0EsTUFBTUMsY0FBYztRQUNwQixNQUFNYixXQUFXLElBQUlWLG1EQUFlQSxDQUFDWSxPQUFPQyxRQUFRO1FBQ3BELE1BQU1XLFNBQVMsTUFBTWQsU0FBU2UsU0FBUztRQUN2QyxNQUFNQyxLQUFLRixPQUFPRyxlQUFlO0lBRXJDO0lBRUEscUJBQ0EsOERBQUNDOzswQkFDRyw4REFBQ0M7O29CQUFHO29CQUFVckI7Ozs7Ozs7MEJBQ2QsOERBQUNxQjs7b0JBQUc7b0JBQVV2Qjs7Ozs7OzswQkFDZCw4REFBQ3dCO2dCQUFPQyxTQUFTcEI7MEJBQTBCOzs7Ozs7MEJBQzNDLDhEQUFDa0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0c7Z0JBQUtDLFVBQVVaOztrQ0FDWiw4REFBQ2E7d0JBQUtDLFNBQVE7a0NBQUs7Ozs7OztrQ0FDbkIsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFLQyxNQUFLOzs7Ozs7a0NBQ3RCLDhEQUFDQzt3QkFBTUosU0FBUTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ0M7d0JBQU1FLE1BQUs7d0JBQVNFLE1BQUs7d0JBQUtILE1BQUs7Ozs7OztrQ0FDcEMsOERBQUNQO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0F4RE16QjtBQTBETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJQcm92aWRlciwgZm9ybWF0RXRoZXIsIEluZnVyYVByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBbbWF0aWNCYWxhbmNlLCBzZXRNYXRpY2hCYWxhbmNlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgSW5mdXJhUHJvdmlkZXIoXCJtYXRpY211bVwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXRDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgcHJvdmlkZXIuc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiwgW10pO1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICAgICAgY29uc29sZS5sb2cobWF0aWNCYWxhbmNlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+e1xuICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShjdXJyZW50QWNjb3VudCk7XG4gICAgICAgIHJldHVybiBmb3JtYXRFdGhlcihiYWxhbmNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50QWNjb3VudCl7XG4gICAgICAgICAgICAgICAgICAgIHNldE1hdGljaEJhbGFuY2UoYXdhaXQgZ2V0QmFsYW5jZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKClcbiAgICB9LCBbY3VycmVudEFjY291bnRdKVxuXG4gICAgY29uc3QgaGFuZGxlU2VuZFN1YmJtaXQgPSBhc3luYyAoZXZlbnQpPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCB0eCA9IHNpZ25lci5zZW5kVHJhbnNhY3Rpb25cblxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKCBcbiAgICA8ZGl2PlxuICAgICAgICA8aDE+QWRkcmVzczoge2N1cnJlbnRBY2NvdW50fTwvaDE+XG4gICAgICAgIDxoMT5iYWxhbmNlOiB7bWF0aWNCYWxhbmNlfTwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29ubmVjdFdhbGxldENsaWNrfT5Db25uZWN0IFdhbGxldDwvYnV0dG9uPlxuICAgICAgICA8aDE+U2VuZCBzb21lIG1hdGljPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlbmRTdWJibWl0fT5cbiAgICAgICAgICAgIDxsYWJlIGh0bWxGb3I9XCJ0b1wiPlRvPC9sYWJlPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0b1wiIHR5cGU9XCJ0ZXh0XCIgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFtb3V0XCI+QW1vdXQgb2YgbWF0aWM8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiLjFcIiBuYW1lPVwiYW1vdXRcIi8+XG4gICAgICAgICAgICA8YnV0dG9uPlNlbmQgbWF0aWM8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgPC9kaXY+IFxuICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwibmFtZXMiOlsiQnJvd3NlclByb3ZpZGVyIiwiZm9ybWF0RXRoZXIiLCJJbmZ1cmFQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5kZXgiLCJtYXRpY0JhbGFuY2UiLCJzZXRNYXRpY2hCYWxhbmNlIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsInByb3ZpZGVyIiwiaGFuZGxlQ29ubmVjdFdhbGxldENsaWNrIiwid2luZG93IiwiZXRoZXJldW0iLCJhY2NvdW50cyIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2UiLCJlcnJvciIsImhhbmRsZVNlbmRTdWJibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNpZ25lciIsImdldFNpZ25lciIsInR4Iiwic2VuZFRyYW5zYWN0aW9uIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZSIsImh0bWxGb3IiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwibGFiZWwiLCJzdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});