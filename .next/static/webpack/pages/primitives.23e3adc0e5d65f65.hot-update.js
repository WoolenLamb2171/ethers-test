"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/primitives",{

/***/ "./pages/primitives.js":
/*!*****************************!*\
  !*** ./pages/primitives.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/getPrimitivesWithSigner */ \"./abi/getPrimitivesWithSigner.js\");\n/* harmony import */ var _abi_primitives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/primitives */ \"./abi/primitives.js\");\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useAppContext */ \"./hooks/useAppContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Primitives = ()=>{\n    _s();\n    const [isTrue, setIsTrue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [smallUint, setSmallUint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(BigInt(0));\n    const [bigUint, setBigUint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(BigInt(0));\n    const [smallBytes, setSmallBytes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const smallUintRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const bigUintRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { contextState , updateContextState  } = (0,_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const currentAccount = contextState === null || contextState === void 0 ? void 0 : contextState.currentAccount;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const isTrue = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.isTrue();\n                console.log(\"isTrue: \", isTrue);\n                setIsTrue(isTrue);\n                const smallUint = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.smallUint();\n                console.log(\"smallUint: \", typeof smallUint);\n                setSmallUint(smallUint);\n                const bigUint = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.bigUint();\n                console.log(\"bigUint: \", bigUint);\n                setBigUint(bigUint);\n                const smallBytes = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.smallBytes();\n                console.log(\"smallBytes: \", smallBytes);\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    });\n    const handleSetTrue = async (isTrue)=>{\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setTrue(isTrue);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewSmallUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setSmallUint(BigInt(smallUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewBigUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setBiglUint(BigInt(bigUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Primitives\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Address: \",\n                    currentAccount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Bool: \",\n                    isTrue ? \"true\" : \"false\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(true),\n                children: \"setTrue\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(false),\n                children: \"setFalse\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewSmallUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"SmallUint\",\n                        children: \"New small uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"SmallUint\",\n                        ref: smallUintRef,\n                        type: \"number\",\n                        min: 0,\n                        max: 255\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new small uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"SmallUint: \",\n                    smallUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewBigUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"BigUint\",\n                        children: \"New big uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"BigUint\",\n                        ref: bigUintRef,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new big uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"BigUint: \",\n                    bigUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n        lineNumber: 89,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Primitives, \"ihHj+D9AYsejKZB4YtHMP4MGiXY=\", false, function() {\n    return [\n        _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext\n    ];\n});\n_c = Primitives;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Primitives);\nvar _c;\n$RefreshReg$(_c, \"Primitives\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUFVbkI7Ozs7Ozs7MEJBRWQsOERBQUNvQjs7b0JBQUc7b0JBQU9qQyxTQUFTLFNBQVMsT0FBTzs7Ozs7OzswQkFFcEMsOERBQUNrQztnQkFBT0MsU0FBUyxJQUFNbEIsY0FBYyxJQUFJOzBCQUFHOzs7Ozs7MEJBRTVDLDhEQUFDaUI7Z0JBQU9DLFNBQVMsSUFBTWxCLGNBQWMsS0FBSzswQkFBRzs7Ozs7OzBCQUU3Qyw4REFBQ21CO2dCQUFLQyxVQUFVZDs7a0NBQ2QsOERBQUNlO3dCQUFNQyxTQUFRO2tDQUFZOzs7Ozs7a0NBRTNCLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBWUMsS0FBS2pDO3dCQUFja0MsTUFBSzt3QkFBU0MsS0FBSzt3QkFBR0MsS0FBSzs7Ozs7O2tDQUN0RSw4REFBQ1g7a0NBQU87Ozs7Ozs7Ozs7OzswQkFHViw4REFBQ0Q7O29CQUFHO29CQUFZL0IsVUFBVTRDLFFBQVE7Ozs7Ozs7MEJBRWxDLDhEQUFDVjtnQkFBS0MsVUFBVVQ7O2tDQUNkLDhEQUFDVTt3QkFBTUMsU0FBUTtrQ0FBVTs7Ozs7O2tDQUN6Qiw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQVVDLEtBQUtoQzt3QkFBWWlDLE1BQUs7Ozs7OztrQ0FDNUMsOERBQUNUO2tDQUFPOzs7Ozs7Ozs7Ozs7MEJBR1YsOERBQUNEOztvQkFBRztvQkFBVTVCLFFBQVF5QyxRQUFROzs7Ozs7Ozs7Ozs7O0FBRXBDO0dBL0dNL0M7O1FBU3VDRCwrREFBYUE7OztLQVRwREM7QUFpSE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJpbWl0aXZlcy5qcz9hN2VhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0UHJpbWl0aXZlc1dpdGhTaWduZXIgfSBmcm9tIFwiLi4vYWJpL2dldFByaW1pdGl2ZXNXaXRoU2lnbmVyXCI7XG5pbXBvcnQgeyBwcmltaXRpdmVzIH0gZnJvbSBcIi4uL2FiaS9wcmltaXRpdmVzXCI7XG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2hvb2tzL3VzZUFwcENvbnRleHRcIjtcblxuY29uc3QgUHJpbWl0aXZlcyA9ICgpID0+IHtcbiAgY29uc3RbaXNUcnVlLCBzZXRJc1RydWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NtYWxsVWludCwgc2V0U21hbGxVaW50XSA9IHVzZVN0YXRlKEJpZ0ludCgwKSk7XG4gIGNvbnN0IFtiaWdVaW50LCBzZXRCaWdVaW50XSA9IHVzZVN0YXRlKEJpZ0ludCgwKSk7XG4gIGNvbnN0IFtzbWFsbEJ5dGVzLCBzZXRTbWFsbEJ5dGVzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc21hbGxVaW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGJpZ1VpbnRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7Y29udGV4dFN0YXRlLCB1cGRhdGVDb250ZXh0U3RhdGV9ID0gdXNlQXBwQ29udGV4dCgpO1xuICBjb25zdCBjdXJyZW50QWNjb3VudCA9IGNvbnRleHRTdGF0ZT8uY3VycmVudEFjY291bnQ7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBpc1RydWUgPSBhd2FpdCBwcmltaXRpdmVzLmlzVHJ1ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImlzVHJ1ZTogXCIsIGlzVHJ1ZSk7XG4gICAgICAgIHNldElzVHJ1ZShpc1RydWUpO1xuXG4gICAgICAgIGNvbnN0IHNtYWxsVWludCA9IGF3YWl0IHByaW1pdGl2ZXMuc21hbGxVaW50KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic21hbGxVaW50OiBcIiwgdHlwZW9mIHNtYWxsVWludCk7XG4gICAgICAgIHNldFNtYWxsVWludChzbWFsbFVpbnQpO1xuXG4gICAgICAgIGNvbnN0IGJpZ1VpbnQgPSBhd2FpdCBwcmltaXRpdmVzLmJpZ1VpbnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiaWdVaW50OiBcIiwgYmlnVWludCk7XG4gICAgICAgIHNldEJpZ1VpbnQoYmlnVWludCk7XG5cbiAgICAgICAgY29uc3Qgc21hbGxCeXRlcyA9IGF3YWl0IHByaW1pdGl2ZXMuc21hbGxCeXRlcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsQnl0ZXM6IFwiLCBzbWFsbEJ5dGVzKTtcblxuXG4gICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU2V0VHJ1ZSA9IGFzeW5jKGlzVHJ1ZSkgPT57XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRUcnVlKGlzVHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXdTbWFsbFVpbnRTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRTbWFsbFVpbnQoXG4gICAgICAgIEJpZ0ludChcbiAgICAgICAgICBzbWFsbFVpbnRSZWYuY3VycmVudC52YWx1ZVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJ0eDogXCIsIHR4KTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdHgud2FpdCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV3QmlnVWludFN1Ym1pdCA9ICBhc3luYyAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRCaWdsVWludChcbiAgICAgICAgQmlnSW50KFxuICAgICAgICAgIGJpZ1VpbnRSZWYuY3VycmVudC52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8ZGl2PlxuICAgICAgPGgxPlByaW1pdGl2ZXM8L2gxPlxuXG4gICAgICA8aDI+QWRkcmVzczoge2N1cnJlbnRBY2NvdW50fTwvaDI+XG5cbiAgICAgIDxoMz5Cb29sOiB7aXNUcnVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMz5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZXRUcnVlKHRydWUpfT5zZXRUcnVlPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2V0VHJ1ZShmYWxzZSl9PnNldEZhbHNlPC9idXR0b24+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOZXdTbWFsbFVpbnRTdWJtaXR9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlNtYWxsVWludFwiPk5ldyBzbWFsbCB1aW50OjwvbGFiZWw+XG4gICAgICAgIHsvKiB1aW50OCBjYW4gbm90IGJlIGdyZWF0ZXIgdGhhbiAyNTUgKi99XG4gICAgICAgIDxpbnB1dCBuYW1lPVwiU21hbGxVaW50XCIgcmVmPXtzbWFsbFVpbnRSZWZ9IHR5cGU9XCJudW1iZXJcIiBtaW49ezB9IG1heD17MjU1fT48L2lucHV0PlxuICAgICAgICA8YnV0dG9uPlNldCBuZXcgc21hbGwgdWludDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8aDM+U21hbGxVaW50OiB7c21hbGxVaW50LnRvU3RyaW5nKCl9PC9oMz5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld0JpZ1VpbnRTdWJtaXR9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkJpZ1VpbnRcIj5OZXcgYmlnIHVpbnQ6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJCaWdVaW50XCIgcmVmPXtiaWdVaW50UmVmfSB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24+U2V0IG5ldyBiaWcgdWludDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8aDM+QmlnVWludDoge2JpZ1VpbnQudG9TdHJpbmcoKX08L2gzPlxuICAgIDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWl0aXZlczsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJnZXRQcmltaXRpdmVzV2l0aFNpZ25lciIsInByaW1pdGl2ZXMiLCJ1c2VBcHBDb250ZXh0IiwiUHJpbWl0aXZlcyIsImlzVHJ1ZSIsInNldElzVHJ1ZSIsInNtYWxsVWludCIsInNldFNtYWxsVWludCIsIkJpZ0ludCIsImJpZ1VpbnQiLCJzZXRCaWdVaW50Iiwic21hbGxCeXRlcyIsInNldFNtYWxsQnl0ZXMiLCJzbWFsbFVpbnRSZWYiLCJiaWdVaW50UmVmIiwiY29udGV4dFN0YXRlIiwidXBkYXRlQ29udGV4dFN0YXRlIiwiY3VycmVudEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVTZXRUcnVlIiwicHJpbWl0aXZlc1dpdGhTaWduZXIiLCJ0eCIsInNldFRydWUiLCJyZXNwb25zZSIsIndhaXQiLCJoYW5kbGVOZXdTbWFsbFVpbnRTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiaGFuZGxlTmV3QmlnVWludFN1Ym1pdCIsInNldEJpZ2xVaW50IiwiZGl2IiwiaDEiLCJoMiIsImgzIiwiYnV0dG9uIiwib25DbGljayIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwibmFtZSIsInJlZiIsInR5cGUiLCJtaW4iLCJtYXgiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/primitives.js\n"));

/***/ })

});