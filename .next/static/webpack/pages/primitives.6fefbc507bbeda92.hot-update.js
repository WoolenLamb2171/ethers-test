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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/defaultProvider */ \"./abi/defaultProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _abi_walletProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/walletProvider */ \"./abi/walletProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Primitives = ()=>{\n    _s();\n    const [isTrue, setIsTrue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [smallUint, setSmallUint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(BigInt(0));\n    const [bigUint, setBigUint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(BigInt(0));\n    const primitives = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(\"0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462\", [{\"inputs\":[],\"name\":\"bigBytes\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTrue\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_bigBytes\",\"type\":\"bytes32\"}],\"name\":\"setBigBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_bigInt\",\"type\":\"int256\"}],\"name\":\"setBiglInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigUint\",\"type\":\"uint256\"}],\"name\":\"setBiglUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes1\",\"name\":\"_smallBytes\",\"type\":\"bytes1\"}],\"name\":\"setSmallBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int8\",\"name\":\"_smallInt\",\"type\":\"int8\"}],\"name\":\"setSmallInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_smallUint\",\"type\":\"uint8\"}],\"name\":\"setSmallUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_isTrue\",\"type\":\"bool\"}],\"name\":\"setTrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_wallet\",\"type\":\"address\"}],\"name\":\"setWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallBytes\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"\",\"type\":\"bytes1\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallInt\",\"outputs\":[{\"internalType\":\"int8\",\"name\":\"\",\"type\":\"int8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallUint\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}], _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const getPrimitivesWithSigner = async ()=>{\n        const signer = await _abi_walletProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getSigner();\n        const primitivesWithSigner = primitives.connect(signer);\n        // const primitivesWithSigner = new Contract(process.env.primitivesAddress, process.env.abi, signer);\n        return primitivesWithSigner;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const isTrue = await primitives.isTrue();\n                console.log(\"isTrue: \", isTrue);\n                setIsTrue(isTrue);\n                const smallUint = await primitives.smallUint();\n                console.log(\"smallUint: \", typeof smallUint);\n                setSmallUint(smallUint);\n                const bigUint = await primitives.bigUint();\n                console.log(\"bigUint: \", bigUint);\n                setBigUint(bigUint);\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    });\n    const handleSetTrue = async (isTrue)=>{\n        try {\n            const primitivesWithSigner = await getPrimitivesWithSigner();\n            const tx = await primitivesWithSigner.setTrue(isTrue);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Primitives\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Bool: \",\n                    isTrue ? \"true\" : \"false\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(true),\n                children: \"setTrue\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(false),\n                children: \"setFalse\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"SmallUint: \",\n                    smallUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"BigUint: \",\n                    bigUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n        lineNumber: 56,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Primitives, \"3980Y+ZfbEIjFXiY5XKuu5VP9wU=\");\n_c = Primitives;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Primitives);\nvar _c;\n$RefreshReg$(_c, \"Primitives\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcmltaXRpdmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDbUI7QUFDVDtBQUNNO0FBRWxELE1BQU1LLGFBQWEsSUFBTTs7SUFDdkIsTUFBSyxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQTtJQUNuQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUNPLE9BQU87SUFDbEQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDTyxPQUFPO0lBQzlDLE1BQU1HLGFBQWEsSUFBSWIsNENBQVFBLENBQzdCYyw0Q0FBNkIsRUFDN0JBLHlrRkFBZSxFQUNmYiw0REFBZUE7SUFHakIsTUFBTWlCLDBCQUEwQixVQUFVO1FBQ3hDLE1BQU1DLFNBQVMsTUFBTWYscUVBQXdCO1FBQzdDLE1BQU1pQix1QkFBdUJSLFdBQVdTLE9BQU8sQ0FBQ0g7UUFDaEQscUdBQXFHO1FBQ3JHLE9BQU9FO0lBRVQ7SUFFQW5CLGdEQUFTQSxDQUFDLElBQU07UUFDYixXQUFZO1lBQ1gsSUFBRztnQkFDRCxNQUFNSSxTQUFTLE1BQU1PLFdBQVdQLE1BQU07Z0JBQ3RDaUIsUUFBUUMsR0FBRyxDQUFDLFlBQVlsQjtnQkFDeEJDLFVBQVVEO2dCQUVWLE1BQU1FLFlBQVksTUFBTUssV0FBV0wsU0FBUztnQkFDNUNlLFFBQVFDLEdBQUcsQ0FBQyxlQUFlLE9BQU9oQjtnQkFDbENDLGFBQWFEO2dCQUViLE1BQU1HLFVBQVUsTUFBTUUsV0FBV0YsT0FBTztnQkFDeENZLFFBQVFDLEdBQUcsQ0FBQyxhQUFhYjtnQkFDekJDLFdBQVdEO1lBQ2IsRUFBRSxPQUFNYyxPQUFNO2dCQUNaRixRQUFRRSxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLGdCQUFnQixPQUFNcEIsU0FBVTtRQUNwQyxJQUFHO1lBQ0QsTUFBTWUsdUJBQXVCLE1BQU1IO1lBQ25DLE1BQU1TLEtBQUssTUFBTU4scUJBQXFCTyxPQUFPLENBQUN0QjtZQUM5Q2lCLFFBQVFDLEdBQUcsQ0FBQyxRQUFRRztZQUNwQixNQUFNRSxXQUFXLE1BQU1GLEdBQUdHLElBQUk7WUFDOUJQLFFBQVFDLEdBQUcsQ0FBQ0s7UUFDZCxFQUFFLE9BQU1KLE9BQU07WUFDWkYsUUFBUUUsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEscUJBQU8sOERBQUNNOzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUFHO29CQUFPM0IsU0FBUyxTQUFTLE9BQU87Ozs7Ozs7MEJBQ3BDLDhEQUFDNEI7Z0JBQU9DLFNBQVMsSUFBTVQsY0FBYyxJQUFJOzBCQUFHOzs7Ozs7MEJBQzVDLDhEQUFDUTtnQkFBT0MsU0FBUyxJQUFNVCxjQUFjLEtBQUs7MEJBQUc7Ozs7OzswQkFDN0MsOERBQUNPOztvQkFBRztvQkFBWXpCLFVBQVU0QixRQUFROzs7Ozs7OzBCQUNsQyw4REFBQ0g7O29CQUFHO29CQUFVdEIsUUFBUXlCLFFBQVE7Ozs7Ozs7Ozs7Ozs7QUFFcEM7R0ExRE0vQjtLQUFBQTtBQTRETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcmltaXRpdmVzLmpzP2E3ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJhY3QgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgZGVmYXVsdFByb3ZpZGVyIGZyb20gXCIuLi9hYmkvZGVmYXVsdFByb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2FsbGV0UHJvdmlkZXIgZnJvbSBcIi4uL2FiaS93YWxsZXRQcm92aWRlclwiXG5cbmNvbnN0IFByaW1pdGl2ZXMgPSAoKSA9PiB7XG4gIGNvbnN0W2lzVHJ1ZSwgc2V0SXNUcnVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzbWFsbFVpbnQsIHNldFNtYWxsVWludF0gPSB1c2VTdGF0ZShCaWdJbnQoMCkpO1xuICBjb25zdCBbYmlnVWludCwgc2V0QmlnVWludF0gPSB1c2VTdGF0ZShCaWdJbnQoMCkpO1xuICBjb25zdCBwcmltaXRpdmVzID0gbmV3IENvbnRyYWN0KFxuICAgIHByb2Nlc3MuZW52LnByaW1pdGl2ZXNBZGRyZXNzLFxuICAgIHByb2Nlc3MuZW52LmFiaSxcbiAgICBkZWZhdWx0UHJvdmlkZXJcbiAgKTtcblxuICBjb25zdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lciA9IGFzeW5jKCkgPT57XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgd2FsbGV0UHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBwcmltaXRpdmVzLmNvbm5lY3Qoc2lnbmVyKTtcbiAgICAvLyBjb25zdCBwcmltaXRpdmVzV2l0aFNpZ25lciA9IG5ldyBDb250cmFjdChwcm9jZXNzLmVudi5wcmltaXRpdmVzQWRkcmVzcywgcHJvY2Vzcy5lbnYuYWJpLCBzaWduZXIpO1xuICAgIHJldHVybiBwcmltaXRpdmVzV2l0aFNpZ25lcjtcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBpc1RydWUgPSBhd2FpdCBwcmltaXRpdmVzLmlzVHJ1ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImlzVHJ1ZTogXCIsIGlzVHJ1ZSk7XG4gICAgICAgIHNldElzVHJ1ZShpc1RydWUpO1xuXG4gICAgICAgIGNvbnN0IHNtYWxsVWludCA9IGF3YWl0IHByaW1pdGl2ZXMuc21hbGxVaW50KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic21hbGxVaW50OiBcIiwgdHlwZW9mIHNtYWxsVWludCk7XG4gICAgICAgIHNldFNtYWxsVWludChzbWFsbFVpbnQpO1xuXG4gICAgICAgIGNvbnN0IGJpZ1VpbnQgPSBhd2FpdCBwcmltaXRpdmVzLmJpZ1VpbnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiaWdVaW50OiBcIiwgYmlnVWludCk7XG4gICAgICAgIHNldEJpZ1VpbnQoYmlnVWludCk7XG4gICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU2V0VHJ1ZSA9IGFzeW5jKGlzVHJ1ZSkgPT57XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRUcnVlKGlzVHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPGRpdj5cbiAgICAgIDxoMT5QcmltaXRpdmVzPC9oMT5cbiAgICAgIDxoMz5Cb29sOiB7aXNUcnVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2V0VHJ1ZSh0cnVlKX0+c2V0VHJ1ZTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZXRUcnVlKGZhbHNlKX0+c2V0RmFsc2U8L2J1dHRvbj5cbiAgICAgIDxoMz5TbWFsbFVpbnQ6IHtzbWFsbFVpbnQudG9TdHJpbmcoKX08L2gzPlxuICAgICAgPGgzPkJpZ1VpbnQ6IHtiaWdVaW50LnRvU3RyaW5nKCl9PC9oMz5cbiAgICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1pdGl2ZXM7Il0sIm5hbWVzIjpbIkNvbnRyYWN0IiwiZGVmYXVsdFByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ3YWxsZXRQcm92aWRlciIsIlByaW1pdGl2ZXMiLCJpc1RydWUiLCJzZXRJc1RydWUiLCJzbWFsbFVpbnQiLCJzZXRTbWFsbFVpbnQiLCJCaWdJbnQiLCJiaWdVaW50Iiwic2V0QmlnVWludCIsInByaW1pdGl2ZXMiLCJwcm9jZXNzIiwiZW52IiwicHJpbWl0aXZlc0FkZHJlc3MiLCJhYmkiLCJnZXRQcmltaXRpdmVzV2l0aFNpZ25lciIsInNpZ25lciIsImdldFNpZ25lciIsInByaW1pdGl2ZXNXaXRoU2lnbmVyIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZVNldFRydWUiLCJ0eCIsInNldFRydWUiLCJyZXNwb25zZSIsIndhaXQiLCJkaXYiLCJoMSIsImgzIiwiYnV0dG9uIiwib25DbGljayIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/primitives.js\n"));

/***/ })

});