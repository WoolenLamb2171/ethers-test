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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst index = ()=>{\n    _s();\n    const [maticBalance, setMatichBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const provider = new InfuraProvider(\"maticmum\");\n    const handleConnectWalletClick = async ()=>{\n        const provider1 = new ethers__WEBPACK_IMPORTED_MODULE_2__.BrowserProvider(window.ethereum);\n        const accounts = await provider1.send(\"maticmum_requestAccounts\", []);\n        setCurrentAccount(accounts[0]);\n        console.log(accounts);\n    };\n    const getBalance = async ()=>{\n        const balance = await provider.getBalance(currentAccount);\n        return (0,ethers__WEBPACK_IMPORTED_MODULE_2__.formatEther)(balance);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                if (currentAccount) {\n                    setMatichBalance(await getBalance());\n                }\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    }, [\n        currentAccount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Address: \",\n                    currentAccount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"balance: \",\n                    maticBalance\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleConnectWalletClick,\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/pages/index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"Rkxu1d7E6Us1/nVLMgzk3ddTsA4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRTtBQUMxQjtBQUU1QyxNQUFNSyxRQUFRLElBQU07O0lBQ2hCLE1BQU0sQ0FBQ0MsY0FBY0MsaUJBQWlCLEdBQUdILCtDQUFRQTtJQUNqRCxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQTtJQUVwRCxtREFBbUQ7SUFFbkQsTUFBTU0sMkJBQTJCLFVBQVk7UUFDekMsTUFBTUMsWUFBVyxJQUFJWCxtREFBZUEsQ0FBQ1ksT0FBT0MsUUFBUTtRQUNwRCxNQUFNQyxXQUFXLE1BQU1ILFVBQVNJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtRQUNuRU4sa0JBQWtCSyxRQUFRLENBQUMsRUFBRTtRQUM3QkUsUUFBUUMsR0FBRyxDQUFDSDtJQUNoQjtJQUVBLE1BQU1JLGFBQWEsVUFBVztRQUMxQixNQUFNQyxVQUFVLE1BQU1SLFNBQVNPLFVBQVUsQ0FBQ1Y7UUFDMUMsT0FBT1AsbURBQVdBLENBQUNrQjtJQUN2QjtJQUVBaEIsZ0RBQVNBLENBQUMsSUFBSTtRQUNULFdBQVk7WUFDVCxJQUFHO2dCQUNDLElBQUdLLGdCQUFlO29CQUNkRCxpQkFBaUIsTUFBTVc7Z0JBQzNCLENBQUM7WUFDTCxFQUNBLE9BQU1FLE9BQU07Z0JBQ1JKLFFBQVFJLEtBQUssQ0FBQ0E7WUFDbEI7UUFDSjtJQUNKLEdBQUc7UUFBQ1o7S0FBZTtJQUVuQixxQkFDQSw4REFBQ2E7OzBCQUNHLDhEQUFDQzs7b0JBQUc7b0JBQVVkOzs7Ozs7OzBCQUNkLDhEQUFDYzs7b0JBQUc7b0JBQVVoQjs7Ozs7OzswQkFDZCw4REFBQ2lCO2dCQUFPQyxTQUFTZDswQkFBMEI7Ozs7Ozs7Ozs7OztBQUduRDtHQXRDTUw7QUF3Q04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyUHJvdmlkZXIsIGZvcm1hdEV0aGVyLCBJbmZ1cmFQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgW21hdGljQmFsYW5jZSwgc2V0TWF0aWNoQmFsYW5jZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoKTtcblxuICAgIC8vIGNvbnN0IHByb3ZpZGVyID0gbmV3IEluZnVyYVByb3ZpZGVyKFwibWF0aWNtdW1cIik7XG5cbiAgICBjb25zdCBoYW5kbGVDb25uZWN0V2FsbGV0Q2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHByb3ZpZGVyLnNlbmQoXCJtYXRpY211bV9yZXF1ZXN0QWNjb3VudHNcIiwgW10pO1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+e1xuICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShjdXJyZW50QWNjb3VudCk7XG4gICAgICAgIHJldHVybiBmb3JtYXRFdGhlcihiYWxhbmNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50QWNjb3VudCl7XG4gICAgICAgICAgICAgICAgICAgIHNldE1hdGljaEJhbGFuY2UoYXdhaXQgZ2V0QmFsYW5jZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKClcbiAgICB9LCBbY3VycmVudEFjY291bnRdKVxuICAgIFxuICAgIHJldHVybiAoIFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5BZGRyZXNzOiB7Y3VycmVudEFjY291bnR9PC9oMT5cbiAgICAgICAgPGgxPmJhbGFuY2U6IHttYXRpY0JhbGFuY2V9PC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25uZWN0V2FsbGV0Q2xpY2t9PkNvbm5lY3QgV2FsbGV0PC9idXR0b24+XG4gICAgPC9kaXY+IFxuICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwibmFtZXMiOlsiQnJvd3NlclByb3ZpZGVyIiwiZm9ybWF0RXRoZXIiLCJJbmZ1cmFQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5kZXgiLCJtYXRpY0JhbGFuY2UiLCJzZXRNYXRpY2hCYWxhbmNlIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImhhbmRsZUNvbm5lY3RXYWxsZXRDbGljayIsInByb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJhY2NvdW50cyIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2UiLCJlcnJvciIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});