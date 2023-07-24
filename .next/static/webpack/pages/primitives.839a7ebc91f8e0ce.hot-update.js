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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/defaultProvider */ \"./abi/defaultProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _abi_walletProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/walletProvider */ \"./abi/walletProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Primitives = ()=>{\n    _s();\n    const [isTrue, setIsTrue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [smallUint, setSmallUint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(BigInt(0));\n    const [bigUint, setBigUint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(BigInt(0));\n    const smallUintRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const primitives = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(\"0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462\", [{\"inputs\":[],\"name\":\"bigBytes\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTrue\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_bigBytes\",\"type\":\"bytes32\"}],\"name\":\"setBigBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_bigInt\",\"type\":\"int256\"}],\"name\":\"setBiglInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigUint\",\"type\":\"uint256\"}],\"name\":\"setBiglUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes1\",\"name\":\"_smallBytes\",\"type\":\"bytes1\"}],\"name\":\"setSmallBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int8\",\"name\":\"_smallInt\",\"type\":\"int8\"}],\"name\":\"setSmallInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_smallUint\",\"type\":\"uint8\"}],\"name\":\"setSmallUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_isTrue\",\"type\":\"bool\"}],\"name\":\"setTrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_wallet\",\"type\":\"address\"}],\"name\":\"setWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallBytes\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"\",\"type\":\"bytes1\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallInt\",\"outputs\":[{\"internalType\":\"int8\",\"name\":\"\",\"type\":\"int8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallUint\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}], _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const getPrimitivesWithSigner = async ()=>{\n        const signer = await _abi_walletProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getSigner();\n        const primitivesWithSigner = primitives.connect(signer);\n        // const primitivesWithSigner = new Contract(process.env.primitivesAddress, process.env.abi, signer);\n        return primitivesWithSigner;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const isTrue = await primitives.isTrue();\n                console.log(\"isTrue: \", isTrue);\n                setIsTrue(isTrue);\n                const smallUint = await primitives.smallUint();\n                console.log(\"smallUint: \", typeof smallUint);\n                setSmallUint(smallUint);\n                const bigUint = await primitives.bigUint();\n                console.log(\"bigUint: \", bigUint);\n                setBigUint(bigUint);\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    });\n    const handleSetTrue = async (isTrue)=>{\n        try {\n            const primitivesWithSigner = await getPrimitivesWithSigner();\n            const tx = await primitivesWithSigner.setTrue(isTrue);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewSmallUintSubmit = async (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Primitives\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Bool: \",\n                    isTrue ? \"true\" : \"false\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(true),\n                children: \"setTrue\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(false),\n                children: \"setFalse\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewSmallUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"New small uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: smallUintRef,\n                        type: \"number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new small uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"SmallUint: \",\n                    smallUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"BigUint: \",\n                    bigUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n        lineNumber: 64,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Primitives, \"/irRGfj8uuAqATHZtyCC+7y5jR8=\");\n_c = Primitives;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Primitives);\nvar _c;\n$RefreshReg$(_c, \"Primitives\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcmltaXRpdmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDbUI7QUFDRDtBQUNGO0FBRWxELE1BQU1NLGFBQWEsSUFBTTs7SUFDdkIsTUFBSyxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQTtJQUNuQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUNPLE9BQU87SUFDbEQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDTyxPQUFPO0lBRTlDLE1BQU1HLGVBQWVYLDZDQUFNQTtJQUUzQixNQUFNWSxhQUFhLElBQUlmLDRDQUFRQSxDQUM3QmdCLDRDQUE2QixFQUM3QkEseWtGQUFlLEVBQ2ZmLDREQUFlQTtJQUdqQixNQUFNbUIsMEJBQTBCLFVBQVU7UUFDeEMsTUFBTUMsU0FBUyxNQUFNaEIscUVBQXdCO1FBQzdDLE1BQU1rQix1QkFBdUJSLFdBQVdTLE9BQU8sQ0FBQ0g7UUFDaEQscUdBQXFHO1FBQ3JHLE9BQU9FO0lBRVQ7SUFFQXJCLGdEQUFTQSxDQUFDLElBQU07UUFDYixXQUFZO1lBQ1gsSUFBRztnQkFDRCxNQUFNSyxTQUFTLE1BQU1RLFdBQVdSLE1BQU07Z0JBQ3RDa0IsUUFBUUMsR0FBRyxDQUFDLFlBQVluQjtnQkFDeEJDLFVBQVVEO2dCQUVWLE1BQU1FLFlBQVksTUFBTU0sV0FBV04sU0FBUztnQkFDNUNnQixRQUFRQyxHQUFHLENBQUMsZUFBZSxPQUFPakI7Z0JBQ2xDQyxhQUFhRDtnQkFFYixNQUFNRyxVQUFVLE1BQU1HLFdBQVdILE9BQU87Z0JBQ3hDYSxRQUFRQyxHQUFHLENBQUMsYUFBYWQ7Z0JBQ3pCQyxXQUFXRDtZQUViLEVBQUUsT0FBTWUsT0FBTTtnQkFDWkYsUUFBUUUsS0FBSyxDQUFDQTtZQUNoQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0IsT0FBTXJCLFNBQVU7UUFDcEMsSUFBRztZQUNELE1BQU1nQix1QkFBdUIsTUFBTUg7WUFDbkMsTUFBTVMsS0FBSyxNQUFNTixxQkFBcUJPLE9BQU8sQ0FBQ3ZCO1lBQzlDa0IsUUFBUUMsR0FBRyxDQUFDLFFBQVFHO1lBQ3BCLE1BQU1FLFdBQVcsTUFBTUYsR0FBR0csSUFBSTtZQUM5QlAsUUFBUUMsR0FBRyxDQUFDSztRQUNkLEVBQUUsT0FBTUosT0FBTTtZQUNaRixRQUFRRSxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNTSwyQkFBMkIsT0FBT0MsUUFBUztRQUMvQ0EsTUFBTUMsY0FBYztJQUN0QjtJQUVBLHFCQUFPLDhEQUFDQzs7MEJBQ0osOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztvQkFBRztvQkFBTy9CLFNBQVMsU0FBUyxPQUFPOzs7Ozs7OzBCQUNwQyw4REFBQ2dDO2dCQUFPQyxTQUFTLElBQU1aLGNBQWMsSUFBSTswQkFBRzs7Ozs7OzBCQUM1Qyw4REFBQ1c7Z0JBQU9DLFNBQVMsSUFBTVosY0FBYyxLQUFLOzBCQUFHOzs7Ozs7MEJBQzdDLDhEQUFDYTtnQkFBS0MsVUFBVVQ7O2tDQUNkLDhEQUFDVTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBTUMsS0FBSy9CO3dCQUFjZ0MsTUFBSzs7Ozs7O2tDQUMvQiw4REFBQ1A7a0NBQU87Ozs7Ozs7Ozs7OzswQkFFViw4REFBQ0Q7O29CQUFHO29CQUFZN0IsVUFBVXNDLFFBQVE7Ozs7Ozs7MEJBQ2xDLDhEQUFDVDs7b0JBQUc7b0JBQVUxQixRQUFRbUMsUUFBUTs7Ozs7Ozs7Ozs7OztBQUVwQztHQXZFTXpDO0tBQUFBO0FBeUVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ByaW1pdGl2ZXMuanM/YTdlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cmFjdCB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBkZWZhdWx0UHJvdmlkZXIgZnJvbSBcIi4uL2FiaS9kZWZhdWx0UHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdhbGxldFByb3ZpZGVyIGZyb20gXCIuLi9hYmkvd2FsbGV0UHJvdmlkZXJcIlxuXG5jb25zdCBQcmltaXRpdmVzID0gKCkgPT4ge1xuICBjb25zdFtpc1RydWUsIHNldElzVHJ1ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc21hbGxVaW50LCBzZXRTbWFsbFVpbnRdID0gdXNlU3RhdGUoQmlnSW50KDApKTtcbiAgY29uc3QgW2JpZ1VpbnQsIHNldEJpZ1VpbnRdID0gdXNlU3RhdGUoQmlnSW50KDApKTtcblxuICBjb25zdCBzbWFsbFVpbnRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBwcmltaXRpdmVzID0gbmV3IENvbnRyYWN0KFxuICAgIHByb2Nlc3MuZW52LnByaW1pdGl2ZXNBZGRyZXNzLFxuICAgIHByb2Nlc3MuZW52LmFiaSxcbiAgICBkZWZhdWx0UHJvdmlkZXJcbiAgKTtcblxuICBjb25zdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lciA9IGFzeW5jKCkgPT57XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgd2FsbGV0UHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBwcmltaXRpdmVzLmNvbm5lY3Qoc2lnbmVyKTtcbiAgICAvLyBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IG5ldyBDb250cmFjdChwcm9jZXNzLmVudi5wcmltaXRpdmVzQWRkcmVzcywgcHJvY2Vzcy5lbnYuYWJpLCBzaWduZXIpO1xuICAgIHJldHVybiBwcmltaXRpdmVzV2l0aFNpZ25lcjtcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBpc1RydWUgPSBhd2FpdCBwcmltaXRpdmVzLmlzVHJ1ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImlzVHJ1ZTogXCIsIGlzVHJ1ZSk7XG4gICAgICAgIHNldElzVHJ1ZShpc1RydWUpO1xuXG4gICAgICAgIGNvbnN0IHNtYWxsVWludCA9IGF3YWl0IHByaW1pdGl2ZXMuc21hbGxVaW50KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic21hbGxVaW50OiBcIiwgdHlwZW9mIHNtYWxsVWludCk7XG4gICAgICAgIHNldFNtYWxsVWludChzbWFsbFVpbnQpO1xuXG4gICAgICAgIGNvbnN0IGJpZ1VpbnQgPSBhd2FpdCBwcmltaXRpdmVzLmJpZ1VpbnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiaWdVaW50OiBcIiwgYmlnVWludCk7XG4gICAgICAgIHNldEJpZ1VpbnQoYmlnVWludCk7XG5cbiAgICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVTZXRUcnVlID0gYXN5bmMoaXNUcnVlKSA9PntcbiAgICB0cnl7XG4gICAgICBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IGF3YWl0IGdldFByaW1pdGl2ZXNXaXRoU2lnbmVyKCk7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHByaW1pdGl2ZXNXaXRoU2lnbmVyLnNldFRydWUoaXNUcnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidHg6IFwiLCB0eCk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHR4LndhaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU5ld1NtYWxsVWludFN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJldHVybiA8ZGl2PlxuICAgICAgPGgxPlByaW1pdGl2ZXM8L2gxPlxuICAgICAgPGgzPkJvb2w6IHtpc1RydWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gzPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZXRUcnVlKHRydWUpfT5zZXRUcnVlPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNldFRydWUoZmFsc2UpfT5zZXRGYWxzZTwvYnV0dG9uPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld1NtYWxsVWludFN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5OZXcgc21hbGwgdWludDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgcmVmPXtzbWFsbFVpbnRSZWZ9IHR5cGU9XCJudW1iZXJcIj48L2lucHV0PlxuICAgICAgICA8YnV0dG9uPlNldCBuZXcgc21hbGwgdWludDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGgzPlNtYWxsVWludDoge3NtYWxsVWludC50b1N0cmluZygpfTwvaDM+XG4gICAgICA8aDM+QmlnVWludDoge2JpZ1VpbnQudG9TdHJpbmcoKX08L2gzPlxuICAgIDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWl0aXZlczsiXSwibmFtZXMiOlsiQ29udHJhY3QiLCJkZWZhdWx0UHJvdmlkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIndhbGxldFByb3ZpZGVyIiwiUHJpbWl0aXZlcyIsImlzVHJ1ZSIsInNldElzVHJ1ZSIsInNtYWxsVWludCIsInNldFNtYWxsVWludCIsIkJpZ0ludCIsImJpZ1VpbnQiLCJzZXRCaWdVaW50Iiwic21hbGxVaW50UmVmIiwicHJpbWl0aXZlcyIsInByb2Nlc3MiLCJlbnYiLCJwcmltaXRpdmVzQWRkcmVzcyIsImFiaSIsImdldFByaW1pdGl2ZXNXaXRoU2lnbmVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwicHJpbWl0aXZlc1dpdGhTaWduZXIiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlU2V0VHJ1ZSIsInR4Iiwic2V0VHJ1ZSIsInJlc3BvbnNlIiwid2FpdCIsImhhbmRsZU5ld1NtYWxsVWludFN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJoMSIsImgzIiwiYnV0dG9uIiwib25DbGljayIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJyZWYiLCJ0eXBlIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/primitives.js\n"));

/***/ })

});