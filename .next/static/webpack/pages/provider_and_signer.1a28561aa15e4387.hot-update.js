"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/provider_and_signer",{

/***/ "./utils/connectMetaMask.js":
/*!**********************************!*\
  !*** ./utils/connectMetaMask.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst connectMetaMask = async ()=>{\n    if (!(window === null || window === void 0 ? void 0 : window.ethereum)) {\n        throw new Error(\"MetaMask is not installed\");\n    }\n    const accounts = await window.ethereum.request({\n        method: \"eth_requestAccounts\",\n        params: []\n    });\n    return accounts[0];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectMetaMask);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25uZWN0TWV0YU1hc2suanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLGtCQUFrQixVQUFVO0lBQzlCLElBQUcsQ0FBQ0MsQ0FBQUEsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRQyxRQUFRLEdBQUM7UUFDakIsTUFBTSxJQUFJQyxNQUFNLDZCQUE2QjtJQUNqRCxDQUFDO0lBQ0QsTUFBTUMsV0FBVyxNQUFNSCxPQUFPQyxRQUFRLENBQUNHLE9BQU8sQ0FBQztRQUMzQ0MsUUFBUTtRQUNSQyxRQUFRLEVBQUU7SUFDZDtJQUNBLE9BQU9ILFFBQVEsQ0FBQyxFQUFFO0FBQ3RCO0FBRUEsK0RBQWVKLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29ubmVjdE1ldGFNYXNrLmpzP2VmODIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29ubmVjdE1ldGFNYXNrID0gYXN5bmMgKCk9PntcbiAgICBpZighd2luZG93Py5ldGhlcmV1bSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIGlzIG5vdCBpbnN0YWxsZWRcIik7XG4gICAgfVxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgICBwYXJhbXM6IFtdLCBcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjb3VudHNbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNZXRhTWFzazsiXSwibmFtZXMiOlsiY29ubmVjdE1ldGFNYXNrIiwid2luZG93IiwiZXRoZXJldW0iLCJFcnJvciIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/connectMetaMask.js\n"));

/***/ })

});