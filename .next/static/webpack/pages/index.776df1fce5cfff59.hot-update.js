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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst index = ()=>{\n    _s();\n    const [maticBalance, setMatichBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.InfuraProvider(\"maticmum\");\n    const handleConnectWalletClick = async ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.BrowserProvider(window.ethereum);\n        const accounts = await provider.send(\"eth_requestAccounts\", []);\n        setCurrentAccount(accounts[0]);\n        getBalance().then((balance)=>{\n            setMatichBalance(balance);\n            console.log(balance);\n        }).catch((error)=>console.error(error));\n        console.log(accounts);\n    };\n    const getBalance = async ()=>{\n        const balance = await provider.getBalance(currentAccount);\n        return (0,ethers__WEBPACK_IMPORTED_MODULE_2__.formatEther)(balance);\n    };\n    // useEffect(()=>{\n    //     getBalance()\n    //     .then(balance => {\n    //         setMatichBalance(balance)\n    //         console.log(balance)\n    //     })\n    //     .catch(error => console.error(error))\n    // }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Address: \",\n                    currentAccount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"balance: \",\n                    maticBalance\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleConnectWalletClick,\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"Sm7IHzjN1o8akUXr9Sg3P9+Zi+U=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRTtBQUMxQjtBQUU1QyxNQUFNSyxRQUFRLElBQU07O0lBQ2hCLE1BQU0sQ0FBQ0MsY0FBY0MsaUJBQWlCLEdBQUdILCtDQUFRQTtJQUNqRCxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQTtJQUVwRCxNQUFNTSxXQUFXLElBQUlSLGtEQUFjQSxDQUFDO0lBRXBDLE1BQU1TLDJCQUEyQixVQUFZO1FBQ3pDLE1BQU1ELFdBQVcsSUFBSVYsbURBQWVBLENBQUNZLE9BQU9DLFFBQVE7UUFDcEQsTUFBTUMsV0FBVyxNQUFNSixTQUFTSyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7UUFDOUROLGtCQUFrQkssUUFBUSxDQUFDLEVBQUU7UUFDN0JFLGFBQ0NDLElBQUksQ0FBQ0MsQ0FBQUEsVUFBVztZQUNiWCxpQkFBaUJXO1lBQ2pCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCLEdBQ0NHLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0gsUUFBUUcsS0FBSyxDQUFDQTtRQUM5QkgsUUFBUUMsR0FBRyxDQUFDTjtJQUNoQjtJQUVBLE1BQU1FLGFBQWEsVUFBVztRQUMxQixNQUFNRSxVQUFVLE1BQU1SLFNBQVNNLFVBQVUsQ0FBQ1I7UUFDMUMsT0FBT1AsbURBQVdBLENBQUNpQjtJQUN2QjtJQUVBLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0IsU0FBUztJQUNULDRDQUE0QztJQUM1QyxTQUFTO0lBRVQscUJBQ0EsOERBQUNLOzswQkFDRyw4REFBQ0M7O29CQUFHO29CQUFVaEI7Ozs7Ozs7MEJBQ2QsOERBQUNnQjs7b0JBQUc7b0JBQVVsQjs7Ozs7OzswQkFDZCw4REFBQ21CO2dCQUFPQyxTQUFTZjswQkFBMEI7Ozs7Ozs7Ozs7OztBQUduRDtHQXhDTU47QUEwQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyUHJvdmlkZXIsIGZvcm1hdEV0aGVyLCBJbmZ1cmFQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgW21hdGljQmFsYW5jZSwgc2V0TWF0aWNoQmFsYW5jZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoKTtcblxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEluZnVyYVByb3ZpZGVyKFwibWF0aWNtdW1cIik7XG5cbiAgICBjb25zdCBoYW5kbGVDb25uZWN0V2FsbGV0Q2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKTtcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgICBnZXRCYWxhbmNlKClcbiAgICAgICAgLnRoZW4oYmFsYW5jZSA9PiB7XG4gICAgICAgICAgICBzZXRNYXRpY2hCYWxhbmNlKGJhbGFuY2UpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhiYWxhbmNlKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpXG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+e1xuICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShjdXJyZW50QWNjb3VudCk7XG4gICAgICAgIHJldHVybiBmb3JtYXRFdGhlcihiYWxhbmNlKTtcbiAgICB9XG5cbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgICAvLyAgICAgZ2V0QmFsYW5jZSgpXG4gICAgLy8gICAgIC50aGVuKGJhbGFuY2UgPT4ge1xuICAgIC8vICAgICAgICAgc2V0TWF0aWNoQmFsYW5jZShiYWxhbmNlKVxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYmFsYW5jZSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxuICAgIC8vIH0sIFtdKVxuICAgIFxuICAgIHJldHVybiAoIFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5BZGRyZXNzOiB7Y3VycmVudEFjY291bnR9PC9oMT5cbiAgICAgICAgPGgxPmJhbGFuY2U6IHttYXRpY0JhbGFuY2V9PC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25uZWN0V2FsbGV0Q2xpY2t9PkNvbm5lY3QgV2FsbGV0PC9idXR0b24+XG4gICAgPC9kaXY+IFxuICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwibmFtZXMiOlsiQnJvd3NlclByb3ZpZGVyIiwiZm9ybWF0RXRoZXIiLCJJbmZ1cmFQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5kZXgiLCJtYXRpY0JhbGFuY2UiLCJzZXRNYXRpY2hCYWxhbmNlIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsInByb3ZpZGVyIiwiaGFuZGxlQ29ubmVjdFdhbGxldENsaWNrIiwid2luZG93IiwiZXRoZXJldW0iLCJhY2NvdW50cyIsInNlbmQiLCJnZXRCYWxhbmNlIiwidGhlbiIsImJhbGFuY2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});