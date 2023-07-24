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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/getPrimitivesWithSigner */ \"./abi/getPrimitivesWithSigner.js\");\n/* harmony import */ var _abi_primitives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/primitives */ \"./abi/primitives.js\");\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useAppContext */ \"./hooks/useAppContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Primitives = ()=>{\n    _s();\n    const [isTrue, setIsTrue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [smallUint, setSmallUint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(BigInt(0));\n    const [bigUint, setBigUint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(BigInt(0));\n    const [smallBytes, setSmallBytes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [bigBytes, setBigBytes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const smallUintRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const bigUintRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const smallBytesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const bigBytesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { contextState , updateContextState  } = (0,_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const currentAccount = contextState === null || contextState === void 0 ? void 0 : contextState.currentAccount;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const isTrue = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.isTrue();\n                // console.log(\"isTrue: \", isTrue);\n                setIsTrue(isTrue);\n                const smallUint = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.smallUint();\n                // console.log(\"smallUint: \", typeof smallUint);\n                setSmallUint(smallUint);\n                const bigUint = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.bigUint();\n                // console.log(\"bigUint: \", bigUint);\n                setBigUint(bigUint);\n                const smallBytes = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.smallBytes();\n                console.log(\"smallBytes: \", smallBytes);\n                console.log(\"smallBytes type: \", typeof smallBytes);\n                setSmallBytes(smallBytes);\n                const bigBytes = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.bigBytes();\n                console.log(\"bigBytes: \", bigBytes);\n                console.log(\"bigBytes type: \", typeof bigBytes);\n                setBigBytes(bigBytes);\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    });\n    const handleSetTrue = async (isTrue)=>{\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setTrue(isTrue);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewSmallUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setSmallUint(BigInt(smallUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewBigUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setBiglUint(BigInt(bigUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Primitives\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Address: \",\n                    currentAccount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Bool: \",\n                    isTrue ? \"true\" : \"false\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(true),\n                children: \"setTrue\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(false),\n                children: \"setFalse\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"SmallUint: \",\n                    smallUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewSmallUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"SmallUint\",\n                        children: \"New small uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"SmallUint\",\n                        ref: smallUintRef,\n                        type: \"number\",\n                        min: 0,\n                        max: 255\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new small uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"BigUint: \",\n                    bigUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewBigUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"BigUint\",\n                        children: \"New big uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"BigUint\",\n                        ref: bigUintRef,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new big uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n        lineNumber: 98,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Primitives, \"CfF1Pbuzv73U2RgfOAhjjtLFTEo=\", false, function() {\n    return [\n        _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext\n    ];\n});\n_c = Primitives;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Primitives);\nvar _c;\n$RefreshReg$(_c, \"Primitives\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X05fRS8uL3BhZ2VzL3ByaW1pdGl2ZXMuanM/YTdlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFByaW1pdGl2ZXNXaXRoU2lnbmVyIH0gZnJvbSBcIi4uL2FiaS9nZXRQcmltaXRpdmVzV2l0aFNpZ25lclwiO1xuaW1wb3J0IHsgcHJpbWl0aXZlcyB9IGZyb20gXCIuLi9hYmkvcHJpbWl0aXZlc1wiO1xuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCIuLi9ob29rcy91c2VBcHBDb250ZXh0XCI7XG5cbmNvbnN0IFByaW1pdGl2ZXMgPSAoKSA9PiB7XG4gIGNvbnN0W2lzVHJ1ZSwgc2V0SXNUcnVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzbWFsbFVpbnQsIHNldFNtYWxsVWludF0gPSB1c2VTdGF0ZShCaWdJbnQoMCkpO1xuICBjb25zdCBbYmlnVWludCwgc2V0QmlnVWludF0gPSB1c2VTdGF0ZShCaWdJbnQoMCkpO1xuICBjb25zdCBbc21hbGxCeXRlcywgc2V0U21hbGxCeXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYmlnQnl0ZXMsIHNldEJpZ0J5dGVzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc21hbGxVaW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGJpZ1VpbnRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgc21hbGxCeXRlc1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBiaWdCeXRlc1JlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHtjb250ZXh0U3RhdGUsIHVwZGF0ZUNvbnRleHRTdGF0ZX0gPSB1c2VBcHBDb250ZXh0KCk7XG4gIGNvbnN0IGN1cnJlbnRBY2NvdW50ID0gY29udGV4dFN0YXRlPy5jdXJyZW50QWNjb3VudDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGlzVHJ1ZSA9IGF3YWl0IHByaW1pdGl2ZXMuaXNUcnVlKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXNUcnVlOiBcIiwgaXNUcnVlKTtcbiAgICAgICAgc2V0SXNUcnVlKGlzVHJ1ZSk7XG5cbiAgICAgICAgY29uc3Qgc21hbGxVaW50ID0gYXdhaXQgcHJpbWl0aXZlcy5zbWFsbFVpbnQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzbWFsbFVpbnQ6IFwiLCB0eXBlb2Ygc21hbGxVaW50KTtcbiAgICAgICAgc2V0U21hbGxVaW50KHNtYWxsVWludCk7XG5cbiAgICAgICAgY29uc3QgYmlnVWludCA9IGF3YWl0IHByaW1pdGl2ZXMuYmlnVWludCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJpZ1VpbnQ6IFwiLCBiaWdVaW50KTtcbiAgICAgICAgc2V0QmlnVWludChiaWdVaW50KTtcblxuICAgICAgICBjb25zdCBzbWFsbEJ5dGVzID0gYXdhaXQgcHJpbWl0aXZlcy5zbWFsbEJ5dGVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic21hbGxCeXRlczogXCIsIHNtYWxsQnl0ZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsQnl0ZXMgdHlwZTogXCIsIHR5cGVvZiBzbWFsbEJ5dGVzKTtcbiAgICAgICAgc2V0U21hbGxCeXRlcyhzbWFsbEJ5dGVzKTtcblxuICAgICAgICBjb25zdCBiaWdCeXRlcyA9IGF3YWl0IHByaW1pdGl2ZXMuYmlnQnl0ZXMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiaWdCeXRlczogXCIsIGJpZ0J5dGVzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiaWdCeXRlcyB0eXBlOiBcIiwgdHlwZW9mIGJpZ0J5dGVzKTtcbiAgICAgICAgc2V0QmlnQnl0ZXMoYmlnQnl0ZXMpO1xuXG4gICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU2V0VHJ1ZSA9IGFzeW5jKGlzVHJ1ZSkgPT57XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRUcnVlKGlzVHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXdTbWFsbFVpbnRTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRTbWFsbFVpbnQoXG4gICAgICAgIEJpZ0ludChcbiAgICAgICAgICBzbWFsbFVpbnRSZWYuY3VycmVudC52YWx1ZVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJ0eDogXCIsIHR4KTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdHgud2FpdCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV3QmlnVWludFN1Ym1pdCA9ICBhc3luYyAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRCaWdsVWludChcbiAgICAgICAgQmlnSW50KFxuICAgICAgICAgIGJpZ1VpbnRSZWYuY3VycmVudC52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8ZGl2PlxuICAgICAgPGgxPlByaW1pdGl2ZXM8L2gxPlxuXG4gICAgICA8aDI+QWRkcmVzczoge2N1cnJlbnRBY2NvdW50fTwvaDI+XG5cbiAgICAgIDxoMz5Cb29sOiB7aXNUcnVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMz5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZXRUcnVlKHRydWUpfT5zZXRUcnVlPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2V0VHJ1ZShmYWxzZSl9PnNldEZhbHNlPC9idXR0b24+XG5cbiAgICAgIDxoMz5TbWFsbFVpbnQ6IHtzbWFsbFVpbnQudG9TdHJpbmcoKX08L2gzPlxuXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmV3U21hbGxVaW50U3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJTbWFsbFVpbnRcIj5OZXcgc21hbGwgdWludDo8L2xhYmVsPlxuICAgICAgICB7LyogdWludDggY2FuIG5vdCBiZSBncmVhdGVyIHRoYW4gMjU1ICovfVxuICAgICAgICA8aW5wdXQgbmFtZT1cIlNtYWxsVWludFwiIHJlZj17c21hbGxVaW50UmVmfSB0eXBlPVwibnVtYmVyXCIgbWluPXswfSBtYXg9ezI1NX0+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbj5TZXQgbmV3IHNtYWxsIHVpbnQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGgzPkJpZ1VpbnQ6IHtiaWdVaW50LnRvU3RyaW5nKCl9PC9oMz5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld0JpZ1VpbnRTdWJtaXR9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkJpZ1VpbnRcIj5OZXcgYmlnIHVpbnQ6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJCaWdVaW50XCIgcmVmPXtiaWdVaW50UmVmfSB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24+U2V0IG5ldyBiaWcgdWludDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgPC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltaXRpdmVzOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImdldFByaW1pdGl2ZXNXaXRoU2lnbmVyIiwicHJpbWl0aXZlcyIsInVzZUFwcENvbnRleHQiLCJQcmltaXRpdmVzIiwiaXNUcnVlIiwic2V0SXNUcnVlIiwic21hbGxVaW50Iiwic2V0U21hbGxVaW50IiwiQmlnSW50IiwiYmlnVWludCIsInNldEJpZ1VpbnQiLCJzbWFsbEJ5dGVzIiwic2V0U21hbGxCeXRlcyIsImJpZ0J5dGVzIiwic2V0QmlnQnl0ZXMiLCJzbWFsbFVpbnRSZWYiLCJiaWdVaW50UmVmIiwic21hbGxCeXRlc1JlZiIsImJpZ0J5dGVzUmVmIiwiY29udGV4dFN0YXRlIiwidXBkYXRlQ29udGV4dFN0YXRlIiwiY3VycmVudEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVTZXRUcnVlIiwicHJpbWl0aXZlc1dpdGhTaWduZXIiLCJ0eCIsInNldFRydWUiLCJyZXNwb25zZSIsIndhaXQiLCJoYW5kbGVOZXdTbWFsbFVpbnRTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiaGFuZGxlTmV3QmlnVWludFN1Ym1pdCIsInNldEJpZ2xVaW50IiwiZGl2IiwiaDEiLCJoMiIsImgzIiwiYnV0dG9uIiwib25DbGljayIsInRvU3RyaW5nIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJuYW1lIiwicmVmIiwidHlwZSIsIm1pbiIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/primitives.js\n"));

/***/ })

});