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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/defaultProvider */ \"./abi/defaultProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _abi_walletProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/walletProvider */ \"./abi/walletProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Primitives = ()=>{\n    _s();\n    const [isTrue, setIsTrue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [smallUint, setSmallUint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(BigInt(0));\n    const [bigUint, setBigUint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(BigInt(0));\n    const smallUintRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const bigUintRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const primitives = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(\"0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462\", [{\"inputs\":[],\"name\":\"bigBytes\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTrue\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_bigBytes\",\"type\":\"bytes32\"}],\"name\":\"setBigBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_bigInt\",\"type\":\"int256\"}],\"name\":\"setBiglInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigUint\",\"type\":\"uint256\"}],\"name\":\"setBiglUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes1\",\"name\":\"_smallBytes\",\"type\":\"bytes1\"}],\"name\":\"setSmallBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int8\",\"name\":\"_smallInt\",\"type\":\"int8\"}],\"name\":\"setSmallInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_smallUint\",\"type\":\"uint8\"}],\"name\":\"setSmallUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_isTrue\",\"type\":\"bool\"}],\"name\":\"setTrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_wallet\",\"type\":\"address\"}],\"name\":\"setWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallBytes\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"\",\"type\":\"bytes1\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallInt\",\"outputs\":[{\"internalType\":\"int8\",\"name\":\"\",\"type\":\"int8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallUint\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}], _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const getPrimitivesWithSigner = async ()=>{\n        const signer = await _abi_walletProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getSigner();\n        const primitivesWithSigner = primitives.connect(signer);\n        // const primitivesWithSigner = new Contract(process.env.primitivesAddress, process.env.abi, signer);\n        return primitivesWithSigner;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const isTrue = await primitives.isTrue();\n                console.log(\"isTrue: \", isTrue);\n                setIsTrue(isTrue);\n                const smallUint = await primitives.smallUint();\n                console.log(\"smallUint: \", typeof smallUint);\n                setSmallUint(smallUint);\n                const bigUint = await primitives.bigUint();\n                console.log(\"bigUint: \", bigUint);\n                setBigUint(bigUint);\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    });\n    const handleSetTrue = async (isTrue)=>{\n        try {\n            const primitivesWithSigner = await getPrimitivesWithSigner();\n            const tx = await primitivesWithSigner.setTrue(isTrue);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewSmallUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await getPrimitivesWithSigner();\n            const tx = await primitivesWithSigner.setSmallUint(BigInt(smallUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewBigUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await getPrimitivesWithSigner();\n            const tx = await primitivesWithSigner.setBigUint(BigInt(bigUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Primitives\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Bool: \",\n                    isTrue ? \"true\" : \"false\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(true),\n                children: \"setTrue\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(false),\n                children: \"setFalse\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewSmallUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"SmallUint\",\n                        children: \"New small uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"SmallUint\",\n                        ref: smallUintRef,\n                        type: \"number\",\n                        min: 0,\n                        max: 255\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new small uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"SmallUint: \",\n                    smallUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewBigUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"BigUint\",\n                        children: \"New big uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"BigUint\",\n                        ref: bigUintRef,\n                        type: \"number\",\n                        min: 0\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new big uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"BigUint: \",\n                    bigUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n        lineNumber: 95,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Primitives, \"BGLnfAkeSY9j7Oo+yjjce/VgWcY=\");\n_c = Primitives;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Primitives);\nvar _c;\n$RefreshReg$(_c, \"Primitives\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ29DO2dCQUFPQyxTQUFTLElBQU1mLGNBQWMsSUFBSTswQkFBRzs7Ozs7OzBCQUU1Qyw4REFBQ2M7Z0JBQU9DLFNBQVMsSUFBTWYsY0FBYyxLQUFLOzBCQUFHOzs7Ozs7MEJBRTdDLDhEQUFDZ0I7Z0JBQUtDLFVBQVVaOztrQ0FDZCw4REFBQ2E7d0JBQU1DLFNBQVE7a0NBQVk7Ozs7OztrQ0FFM0IsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFZQyxLQUFLckM7d0JBQWNzQyxNQUFLO3dCQUFTQyxLQUFLO3dCQUFHQyxLQUFLOzs7Ozs7a0NBQ3RFLDhEQUFDWDtrQ0FBTzs7Ozs7Ozs7Ozs7OzBCQUdWLDhEQUFDRDs7b0JBQUc7b0JBQVlqQyxVQUFVOEMsUUFBUTs7Ozs7OzswQkFFbEMsOERBQUNWO2dCQUFLQyxVQUFVUDs7a0NBQ2QsOERBQUNRO3dCQUFNQyxTQUFRO2tDQUFVOzs7Ozs7a0NBQ3pCLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBVUMsS0FBS3BDO3dCQUFZcUMsTUFBSzt3QkFBU0MsS0FBSzs7Ozs7O2tDQUMxRCw4REFBQ1Y7a0NBQU87Ozs7Ozs7Ozs7OzswQkFHViw4REFBQ0Q7O29CQUFHO29CQUFVOUIsUUFBUTJDLFFBQVE7Ozs7Ozs7Ozs7Ozs7QUFFcEM7R0FuSE1qRDtLQUFBQTtBQXFITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcmltaXRpdmVzLmpzP2E3ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJhY3QgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgZGVmYXVsdFByb3ZpZGVyIGZyb20gXCIuLi9hYmkvZGVmYXVsdFByb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3YWxsZXRQcm92aWRlciBmcm9tIFwiLi4vYWJpL3dhbGxldFByb3ZpZGVyXCJcblxuY29uc3QgUHJpbWl0aXZlcyA9ICgpID0+IHtcbiAgY29uc3RbaXNUcnVlLCBzZXRJc1RydWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NtYWxsVWludCwgc2V0U21hbGxVaW50XSA9IHVzZVN0YXRlKEJpZ0ludCgwKSk7XG4gIGNvbnN0IFtiaWdVaW50LCBzZXRCaWdVaW50XSA9IHVzZVN0YXRlKEJpZ0ludCgwKSk7XG5cbiAgY29uc3Qgc21hbGxVaW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGJpZ1VpbnRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBwcmltaXRpdmVzID0gbmV3IENvbnRyYWN0KFxuICAgIHByb2Nlc3MuZW52LnByaW1pdGl2ZXNBZGRyZXNzLFxuICAgIHByb2Nlc3MuZW52LmFiaSxcbiAgICBkZWZhdWx0UHJvdmlkZXJcbiAgKTtcblxuICBjb25zdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lciA9IGFzeW5jKCkgPT57XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgd2FsbGV0UHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBwcmltaXRpdmVzLmNvbm5lY3Qoc2lnbmVyKTtcbiAgICAvLyBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IG5ldyBDb250cmFjdChwcm9jZXNzLmVudi5wcmltaXRpdmVzQWRkcmVzcywgcHJvY2Vzcy5lbnYuYWJpLCBzaWduZXIpO1xuICAgIHJldHVybiBwcmltaXRpdmVzV2l0aFNpZ25lcjtcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBpc1RydWUgPSBhd2FpdCBwcmltaXRpdmVzLmlzVHJ1ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImlzVHJ1ZTogXCIsIGlzVHJ1ZSk7XG4gICAgICAgIHNldElzVHJ1ZShpc1RydWUpO1xuXG4gICAgICAgIGNvbnN0IHNtYWxsVWludCA9IGF3YWl0IHByaW1pdGl2ZXMuc21hbGxVaW50KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic21hbGxVaW50OiBcIiwgdHlwZW9mIHNtYWxsVWludCk7XG4gICAgICAgIHNldFNtYWxsVWludChzbWFsbFVpbnQpO1xuXG4gICAgICAgIGNvbnN0IGJpZ1VpbnQgPSBhd2FpdCBwcmltaXRpdmVzLmJpZ1VpbnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiaWdVaW50OiBcIiwgYmlnVWludCk7XG4gICAgICAgIHNldEJpZ1VpbnQoYmlnVWludCk7XG5cbiAgICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVTZXRUcnVlID0gYXN5bmMoaXNUcnVlKSA9PntcbiAgICB0cnl7XG4gICAgICBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IGF3YWl0IGdldFByaW1pdGl2ZXNXaXRoU2lnbmVyKCk7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHByaW1pdGl2ZXNXaXRoU2lnbmVyLnNldFRydWUoaXNUcnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidHg6IFwiLCB0eCk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHR4LndhaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU5ld1NtYWxsVWludFN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnl7XG4gICAgICBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IGF3YWl0IGdldFByaW1pdGl2ZXNXaXRoU2lnbmVyKCk7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHByaW1pdGl2ZXNXaXRoU2lnbmVyLnNldFNtYWxsVWludChcbiAgICAgICAgQmlnSW50KFxuICAgICAgICAgIHNtYWxsVWludFJlZi5jdXJyZW50LnZhbHVlXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXdCaWdVaW50U3VibWl0ID0gIGFzeW5jIChldmVudCkgPT57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnl7XG4gICAgICBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IGF3YWl0IGdldFByaW1pdGl2ZXNXaXRoU2lnbmVyKCk7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHByaW1pdGl2ZXNXaXRoU2lnbmVyLnNldEJpZ1VpbnQoXG4gICAgICAgIEJpZ0ludChcbiAgICAgICAgICBiaWdVaW50UmVmLmN1cnJlbnQudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgY29uc29sZS5sb2coXCJ0eDogXCIsIHR4KTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdHgud2FpdCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPGRpdj5cbiAgICAgIDxoMT5QcmltaXRpdmVzPC9oMT5cblxuICAgICAgPGgzPkJvb2w6IHtpc1RydWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gzPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNldFRydWUodHJ1ZSl9PnNldFRydWU8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZXRUcnVlKGZhbHNlKX0+c2V0RmFsc2U8L2J1dHRvbj5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld1NtYWxsVWludFN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiU21hbGxVaW50XCI+TmV3IHNtYWxsIHVpbnQ6PC9sYWJlbD5cbiAgICAgICAgey8qIHVpbnQ4IGNhbiBub3QgYmUgZ3JlYXRlciB0aGFuIDI1NSAqL31cbiAgICAgICAgPGlucHV0IG5hbWU9XCJTbWFsbFVpbnRcIiByZWY9e3NtYWxsVWludFJlZn0gdHlwZT1cIm51bWJlclwiIG1pbj17MH0gbWF4PXsyNTV9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24+U2V0IG5ldyBzbWFsbCB1aW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxoMz5TbWFsbFVpbnQ6IHtzbWFsbFVpbnQudG9TdHJpbmcoKX08L2gzPlxuXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmV3QmlnVWludFN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiQmlnVWludFwiPk5ldyBiaWcgdWludDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cIkJpZ1VpbnRcIiByZWY9e2JpZ1VpbnRSZWZ9IHR5cGU9XCJudW1iZXJcIiBtaW49ezB9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24+U2V0IG5ldyBiaWcgdWludDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8aDM+QmlnVWludDoge2JpZ1VpbnQudG9TdHJpbmcoKX08L2gzPlxuICAgIDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWl0aXZlczsiXSwibmFtZXMiOlsiQ29udHJhY3QiLCJkZWZhdWx0UHJvdmlkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIndhbGxldFByb3ZpZGVyIiwiUHJpbWl0aXZlcyIsImlzVHJ1ZSIsInNldElzVHJ1ZSIsInNtYWxsVWludCIsInNldFNtYWxsVWludCIsIkJpZ0ludCIsImJpZ1VpbnQiLCJzZXRCaWdVaW50Iiwic21hbGxVaW50UmVmIiwiYmlnVWludFJlZiIsInByaW1pdGl2ZXMiLCJwcm9jZXNzIiwiZW52IiwicHJpbWl0aXZlc0FkZHJlc3MiLCJhYmkiLCJnZXRQcmltaXRpdmVzV2l0aFNpZ25lciIsInNpZ25lciIsImdldFNpZ25lciIsInByaW1pdGl2ZXNXaXRoU2lnbmVyIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZVNldFRydWUiLCJ0eCIsInNldFRydWUiLCJyZXNwb25zZSIsIndhaXQiLCJoYW5kbGVOZXdTbWFsbFVpbnRTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiaGFuZGxlTmV3QmlnVWludFN1Ym1pdCIsImRpdiIsImgxIiwiaDMiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJuYW1lIiwicmVmIiwidHlwZSIsIm1pbiIsIm1heCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/primitives.js\n"));

/***/ })

});