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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/getPrimitivesWithSigner */ \"./abi/getPrimitivesWithSigner.js\");\n/* harmony import */ var _abi_primitives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/primitives */ \"./abi/primitives.js\");\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useAppContext */ \"./hooks/useAppContext.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Primitives = ()=>{\n    _s();\n    const [isTrue, setIsTrue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [smallUint, setSmallUint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(BigInt(0));\n    const [bigUint, setBigUint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(BigInt(0));\n    const [smallBytes, setSmallBytes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [bigBytes, setBigBytes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [wallet, setWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const smallUintRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const bigUintRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const smallBytesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const bigBytesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { contextState , updateContextState  } = (0,_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const currentAccount = contextState === null || contextState === void 0 ? void 0 : contextState.currentAccount;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const isTrue = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.isTrue();\n                // console.log(\"isTrue: \", isTrue);\n                setIsTrue(isTrue);\n                const smallUint = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.smallUint();\n                // console.log(\"smallUint: \", typeof smallUint);\n                setSmallUint(smallUint);\n                const bigUint = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.bigUint();\n                // console.log(\"bigUint: \", bigUint);\n                setBigUint(bigUint);\n                const smallBytes = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.smallBytes();\n                console.log(\"smallBytes: \", smallBytes);\n                console.log(\"smallBytes type: \", typeof smallBytes);\n                setSmallBytes(smallBytes);\n                const bigBytes = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.bigBytes();\n                console.log(\"bigBytes: \", bigBytes);\n                console.log(\"bigBytes type: \", typeof bigBytes);\n                setBigBytes(bigBytes);\n                const wallet = await _abi_primitives__WEBPACK_IMPORTED_MODULE_3__.primitives.wallet();\n                console.log(\"wallet: \", wallet);\n                console.log(\"wallet type: \", typeof wallet);\n                setWallet(wallet);\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    });\n    const handleSetTrue = async (isTrue)=>{\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setTrue(isTrue);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewSmallUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setSmallUint(BigInt(smallUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewBigUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setBiglUint(BigInt(bigUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewSmallBytesSubmit = async (event)=>{\n        event.preventDefault();\n        const utf8Encode = new TextEncoder();\n        //конвертируем строку в массив байтов\n        const bytesArr = utf8Encode.encode(smallBytesRef.current.value);\n        console.log(\"bytesArr: \", bytesArr);\n        const bytes = (0,ethers__WEBPACK_IMPORTED_MODULE_5__.hexlify)(bytesArr);\n        console.log(\"bytes: \", bytes);\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setSmallBytes(bytes);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(\"response: \", response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewBigBytesSubmit = async (event)=>{\n        event.preventDefault();\n        const utf8Encode = new TextEncoder();\n        //конвертируем строку в массив байтов\n        const bytesArr = utf8Encode.encode(bigBytesRef.current.value);\n        console.log(\"bytesArr: \", bytesArr);\n        const bytes = (0,ethers__WEBPACK_IMPORTED_MODULE_5__.hexlify)(bytesArr);\n        console.log(\"bytes: \", bytes);\n        try {\n            const primitivesWithSigner = await (0,_abi_getPrimitivesWithSigner__WEBPACK_IMPORTED_MODULE_2__.getPrimitivesWithSigner)();\n            const tx = await primitivesWithSigner.setBigBytes(bytes);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(\"response: \", response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Primitives\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Address: \",\n                    currentAccount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Bool: \",\n                    isTrue ? \"true\" : \"false\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(true),\n                children: \"setTrue\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(false),\n                children: \"setFalse\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"SmallUint: \",\n                    smallUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewSmallUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"SmallUint\",\n                        children: \"New small uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"SmallUint\",\n                        ref: smallUintRef,\n                        type: \"number\",\n                        min: 0,\n                        max: 255\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 163,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new small uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"BigUint: \",\n                    bigUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewBigUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"BigUint\",\n                        children: \"New big uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"BigUint\",\n                        ref: bigUintRef,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new big uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 172,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"SmallBytes: \",\n                    smallBytes\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 175,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewSmallBytesSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"SmallBytes\",\n                        children: \"New small bytes:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"SmallBytes\",\n                        type: \"text\",\n                        ref: smallBytesRef\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new small bytes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 180,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"BigBytes: \",\n                    bigBytes\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewBigBytesSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"BigBytes\",\n                        children: \"New big bytes:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 186,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"BigBytes\",\n                        ref: bigBytesRef,\n                        type: \"teaxt\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 187,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new big bytes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 188,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n        lineNumber: 147,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Primitives, \"HhfXYgXNUJ/dNswoInd3wtTc8fU=\", false, function() {\n    return [\n        _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext\n    ];\n});\n_c = Primitives;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Primitives);\nvar _c;\n$RefreshReg$(_c, \"Primitives\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQUtDLFVBQVVqQjs7a0NBQ2QsOERBQUNrQjt3QkFBTUMsU0FBUTtrQ0FBVTs7Ozs7O2tDQUN6Qiw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQVVDLEtBQUsxQzt3QkFBWTJDLE1BQUs7Ozs7OztrQ0FDNUMsOERBQUNWO2tDQUFPOzs7Ozs7Ozs7Ozs7MEJBR1YsOERBQUNEOztvQkFBRztvQkFBYXZDOzs7Ozs7OzBCQUVqQiw4REFBQzJDO2dCQUFLQyxVQUFVZjs7a0NBQ2QsOERBQUNnQjt3QkFBTUMsU0FBUTtrQ0FBYTs7Ozs7O2tDQUM1Qiw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQWFFLE1BQUs7d0JBQU9ELEtBQUt6Qzs7Ozs7O2tDQUMxQyw4REFBQ2dDO2tDQUFPOzs7Ozs7Ozs7Ozs7MEJBR1YsOERBQUNEOztvQkFBRztvQkFBV3JDOzs7Ozs7OzBCQUVmLDhEQUFDeUM7Z0JBQUtDLFVBQVVUOztrQ0FDZCw4REFBQ1U7d0JBQU1DLFNBQVE7a0NBQVc7Ozs7OztrQ0FDMUIsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFXQyxLQUFLeEM7d0JBQWF5QyxNQUFLOzs7Ozs7a0NBQzlDLDhEQUFDVjtrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2hCO0dBeExNaEQ7O1FBYXVDRiwrREFBYUE7OztLQWJwREU7QUEwTE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJpbWl0aXZlcy5qcz9hN2VhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0UHJpbWl0aXZlc1dpdGhTaWduZXIgfSBmcm9tIFwiLi4vYWJpL2dldFByaW1pdGl2ZXNXaXRoU2lnbmVyXCI7XG5pbXBvcnQgeyBwcmltaXRpdmVzIH0gZnJvbSBcIi4uL2FiaS9wcmltaXRpdmVzXCI7XG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2hvb2tzL3VzZUFwcENvbnRleHRcIjtcbmltcG9ydCB7IGhleGxpZnkgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmNvbnN0IFByaW1pdGl2ZXMgPSAoKSA9PiB7XG4gIGNvbnN0W2lzVHJ1ZSwgc2V0SXNUcnVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzbWFsbFVpbnQsIHNldFNtYWxsVWludF0gPSB1c2VTdGF0ZShCaWdJbnQoMCkpO1xuICBjb25zdCBbYmlnVWludCwgc2V0QmlnVWludF0gPSB1c2VTdGF0ZShCaWdJbnQoMCkpO1xuICBjb25zdCBbc21hbGxCeXRlcywgc2V0U21hbGxCeXRlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2JpZ0J5dGVzLCBzZXRCaWdCeXRlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3dhbGxldCwgc2V0V2FsbGV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHNtYWxsVWludFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBiaWdVaW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHNtYWxsQnl0ZXNSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYmlnQnl0ZXNSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7Y29udGV4dFN0YXRlLCB1cGRhdGVDb250ZXh0U3RhdGV9ID0gdXNlQXBwQ29udGV4dCgpO1xuICBjb25zdCBjdXJyZW50QWNjb3VudCA9IGNvbnRleHRTdGF0ZT8uY3VycmVudEFjY291bnQ7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBpc1RydWUgPSBhd2FpdCBwcmltaXRpdmVzLmlzVHJ1ZSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlzVHJ1ZTogXCIsIGlzVHJ1ZSk7XG4gICAgICAgIHNldElzVHJ1ZShpc1RydWUpO1xuXG4gICAgICAgIGNvbnN0IHNtYWxsVWludCA9IGF3YWl0IHByaW1pdGl2ZXMuc21hbGxVaW50KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic21hbGxVaW50OiBcIiwgdHlwZW9mIHNtYWxsVWludCk7XG4gICAgICAgIHNldFNtYWxsVWludChzbWFsbFVpbnQpO1xuXG4gICAgICAgIGNvbnN0IGJpZ1VpbnQgPSBhd2FpdCBwcmltaXRpdmVzLmJpZ1VpbnQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJiaWdVaW50OiBcIiwgYmlnVWludCk7XG4gICAgICAgIHNldEJpZ1VpbnQoYmlnVWludCk7XG5cbiAgICAgICAgY29uc3Qgc21hbGxCeXRlcyA9IGF3YWl0IHByaW1pdGl2ZXMuc21hbGxCeXRlcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsQnl0ZXM6IFwiLCBzbWFsbEJ5dGVzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzbWFsbEJ5dGVzIHR5cGU6IFwiLCB0eXBlb2Ygc21hbGxCeXRlcyk7XG4gICAgICAgIHNldFNtYWxsQnl0ZXMoc21hbGxCeXRlcyk7XG5cbiAgICAgICAgY29uc3QgYmlnQnl0ZXMgPSBhd2FpdCBwcmltaXRpdmVzLmJpZ0J5dGVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmlnQnl0ZXM6IFwiLCBiaWdCeXRlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmlnQnl0ZXMgdHlwZTogXCIsIHR5cGVvZiBiaWdCeXRlcyk7XG4gICAgICAgIHNldEJpZ0J5dGVzKGJpZ0J5dGVzKTtcblxuICAgICAgICBjb25zdCB3YWxsZXQgPSBhd2FpdCBwcmltaXRpdmVzLndhbGxldCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndhbGxldDogXCIsIHdhbGxldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FsbGV0IHR5cGU6IFwiLCB0eXBlb2Ygd2FsbGV0KTtcbiAgICAgICAgc2V0V2FsbGV0KHdhbGxldCk7XG5cbiAgICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVTZXRUcnVlID0gYXN5bmMoaXNUcnVlKSA9PntcbiAgICB0cnl7XG4gICAgICBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IGF3YWl0IGdldFByaW1pdGl2ZXNXaXRoU2lnbmVyKCk7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHByaW1pdGl2ZXNXaXRoU2lnbmVyLnNldFRydWUoaXNUcnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidHg6IFwiLCB0eCk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHR4LndhaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU5ld1NtYWxsVWludFN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnl7XG4gICAgICBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IGF3YWl0IGdldFByaW1pdGl2ZXNXaXRoU2lnbmVyKCk7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHByaW1pdGl2ZXNXaXRoU2lnbmVyLnNldFNtYWxsVWludChcbiAgICAgICAgQmlnSW50KFxuICAgICAgICAgIHNtYWxsVWludFJlZi5jdXJyZW50LnZhbHVlXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXdCaWdVaW50U3VibWl0ID0gIGFzeW5jIChldmVudCkgPT57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnl7XG4gICAgICBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IGF3YWl0IGdldFByaW1pdGl2ZXNXaXRoU2lnbmVyKCk7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHByaW1pdGl2ZXNXaXRoU2lnbmVyLnNldEJpZ2xVaW50KFxuICAgICAgICBCaWdJbnQoXG4gICAgICAgICAgYmlnVWludFJlZi5jdXJyZW50LnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGNvbnNvbGUubG9nKFwidHg6IFwiLCB0eCk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHR4LndhaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV3U21hbGxCeXRlc1N1Ym1pdCA9IGFzeW5jIChldmVudCkgPT57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHV0ZjhFbmNvZGUgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICAvL9C60L7QvdCy0LXRgNGC0LjRgNGD0LXQvCDRgdGC0YDQvtC60YMg0LIg0LzQsNGB0YHQuNCyINCx0LDQudGC0L7QslxuICAgIGNvbnN0IGJ5dGVzQXJyID0gdXRmOEVuY29kZS5lbmNvZGUoc21hbGxCeXRlc1JlZi5jdXJyZW50LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhcImJ5dGVzQXJyOiBcIixieXRlc0Fycik7XG4gICAgY29uc3QgYnl0ZXMgPSBoZXhsaWZ5KGJ5dGVzQXJyKTtcbiAgICBjb25zb2xlLmxvZyhcImJ5dGVzOiBcIiwgYnl0ZXMpO1xuXG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRTbWFsbEJ5dGVzKGJ5dGVzKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidHg6IFwiLCB0eCk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHR4LndhaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV3QmlnQnl0ZXNTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdXRmOEVuY29kZSA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgIC8v0LrQvtC90LLQtdGA0YLQuNGA0YPQtdC8INGB0YLRgNC+0LrRgyDQsiDQvNCw0YHRgdC40LIg0LHQsNC50YLQvtCyXG4gICAgY29uc3QgYnl0ZXNBcnIgPSB1dGY4RW5jb2RlLmVuY29kZShiaWdCeXRlc1JlZi5jdXJyZW50LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhcImJ5dGVzQXJyOiBcIixieXRlc0Fycik7XG4gICAgY29uc3QgYnl0ZXMgPSBoZXhsaWZ5KGJ5dGVzQXJyKTtcbiAgICBjb25zb2xlLmxvZyhcImJ5dGVzOiBcIiwgYnl0ZXMpO1xuXG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRCaWdCeXRlcyhieXRlcyk7XG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPGRpdj5cbiAgICAgIDxoMT5QcmltaXRpdmVzPC9oMT5cblxuICAgICAgPGgyPkFkZHJlc3M6IHtjdXJyZW50QWNjb3VudH08L2gyPlxuXG4gICAgICA8aDM+Qm9vbDoge2lzVHJ1ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvaDM+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2V0VHJ1ZSh0cnVlKX0+c2V0VHJ1ZTwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNldFRydWUoZmFsc2UpfT5zZXRGYWxzZTwvYnV0dG9uPlxuXG4gICAgICA8aDM+U21hbGxVaW50OiB7c21hbGxVaW50LnRvU3RyaW5nKCl9PC9oMz5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld1NtYWxsVWludFN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiU21hbGxVaW50XCI+TmV3IHNtYWxsIHVpbnQ6PC9sYWJlbD5cbiAgICAgICAgey8qIHVpbnQ4IGNhbiBub3QgYmUgZ3JlYXRlciB0aGFuIDI1NSAqL31cbiAgICAgICAgPGlucHV0IG5hbWU9XCJTbWFsbFVpbnRcIiByZWY9e3NtYWxsVWludFJlZn0gdHlwZT1cIm51bWJlclwiIG1pbj17MH0gbWF4PXsyNTV9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24+U2V0IG5ldyBzbWFsbCB1aW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxoMz5CaWdVaW50OiB7YmlnVWludC50b1N0cmluZygpfTwvaDM+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOZXdCaWdVaW50U3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJCaWdVaW50XCI+TmV3IGJpZyB1aW50OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwiQmlnVWludFwiIHJlZj17YmlnVWludFJlZn0gdHlwZT1cInRleHRcIj48L2lucHV0PlxuICAgICAgICA8YnV0dG9uPlNldCBuZXcgYmlnIHVpbnQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGgzPlNtYWxsQnl0ZXM6IHtzbWFsbEJ5dGVzfTwvaDM+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOZXdTbWFsbEJ5dGVzU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJTbWFsbEJ5dGVzXCI+TmV3IHNtYWxsIGJ5dGVzOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwiU21hbGxCeXRlc1wiIHR5cGU9XCJ0ZXh0XCIgcmVmPXtzbWFsbEJ5dGVzUmVmfT48L2lucHV0PlxuICAgICAgICA8YnV0dG9uPlNldCBuZXcgc21hbGwgYnl0ZXM8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGgzPkJpZ0J5dGVzOiB7YmlnQnl0ZXN9PC9oMz5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld0JpZ0J5dGVzU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJCaWdCeXRlc1wiPk5ldyBiaWcgYnl0ZXM6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJCaWdCeXRlc1wiIHJlZj17YmlnQnl0ZXNSZWZ9IHR5cGU9XCJ0ZWF4dFwiPjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24+U2V0IG5ldyBiaWcgYnl0ZXM8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1pdGl2ZXM7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiZ2V0UHJpbWl0aXZlc1dpdGhTaWduZXIiLCJwcmltaXRpdmVzIiwidXNlQXBwQ29udGV4dCIsImhleGxpZnkiLCJQcmltaXRpdmVzIiwiaXNUcnVlIiwic2V0SXNUcnVlIiwic21hbGxVaW50Iiwic2V0U21hbGxVaW50IiwiQmlnSW50IiwiYmlnVWludCIsInNldEJpZ1VpbnQiLCJzbWFsbEJ5dGVzIiwic2V0U21hbGxCeXRlcyIsImJpZ0J5dGVzIiwic2V0QmlnQnl0ZXMiLCJ3YWxsZXQiLCJzZXRXYWxsZXQiLCJzbWFsbFVpbnRSZWYiLCJiaWdVaW50UmVmIiwic21hbGxCeXRlc1JlZiIsImJpZ0J5dGVzUmVmIiwiY29udGV4dFN0YXRlIiwidXBkYXRlQ29udGV4dFN0YXRlIiwiY3VycmVudEFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVTZXRUcnVlIiwicHJpbWl0aXZlc1dpdGhTaWduZXIiLCJ0eCIsInNldFRydWUiLCJyZXNwb25zZSIsIndhaXQiLCJoYW5kbGVOZXdTbWFsbFVpbnRTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiaGFuZGxlTmV3QmlnVWludFN1Ym1pdCIsInNldEJpZ2xVaW50IiwiaGFuZGxlTmV3U21hbGxCeXRlc1N1Ym1pdCIsInV0ZjhFbmNvZGUiLCJUZXh0RW5jb2RlciIsImJ5dGVzQXJyIiwiZW5jb2RlIiwiYnl0ZXMiLCJoYW5kbGVOZXdCaWdCeXRlc1N1Ym1pdCIsImRpdiIsImgxIiwiaDIiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0b1N0cmluZyIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwibmFtZSIsInJlZiIsInR5cGUiLCJtaW4iLCJtYXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/primitives.js\n"));

/***/ })

});