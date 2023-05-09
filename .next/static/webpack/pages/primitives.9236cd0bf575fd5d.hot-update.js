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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/defaultProvider */ \"./abi/defaultProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _abi_walletProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/walletProvider */ \"./abi/walletProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Primitives = ()=>{\n    _s();\n    const [isTrue, setIsTrue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const primitives = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(\"0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462\", [{\"inputs\":[],\"name\":\"bigBytes\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTrue\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_bigBytes\",\"type\":\"bytes32\"}],\"name\":\"setBigBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_bigInt\",\"type\":\"int256\"}],\"name\":\"setBiglInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigUint\",\"type\":\"uint256\"}],\"name\":\"setBiglUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes1\",\"name\":\"_smallBytes\",\"type\":\"bytes1\"}],\"name\":\"setSmallBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int8\",\"name\":\"_smallInt\",\"type\":\"int8\"}],\"name\":\"setSmallInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_smallUint\",\"type\":\"uint8\"}],\"name\":\"setSmallUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_isTrue\",\"type\":\"bool\"}],\"name\":\"setTrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_wallet\",\"type\":\"address\"}],\"name\":\"setWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallBytes\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"\",\"type\":\"bytes1\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallInt\",\"outputs\":[{\"internalType\":\"int8\",\"name\":\"\",\"type\":\"int8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallUint\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}], _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const getPrimitivesWithSigner = async ()=>{\n        const signer = await _abi_walletProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getSigner();\n        const primitivesWithSigner = primitives.connect(signer);\n        // const primitivesWithSigner = new Contract(process.env.primitivesAddress, process.env.abi, signer);\n        return primitivesWithSigner;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const isTrue = await primitives.isTrue();\n                console.log(\"isTrue: \", isTrue);\n                setIsTrue(isTrue);\n                const smallUint = await primitives.smallUint();\n                console.log(\"smallUint: \", smallUint);\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    });\n    const handleSetTrue = async (isTrue)=>{\n        try {\n            const primitivesWithSigner = await getPrimitivesWithSigner();\n            const tx = await primitivesWithSigner.setTrue(isTrue);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Primitives\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Bool: \",\n                    isTrue ? \"true\" : \"false\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(true),\n                children: \"setTrue\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(false),\n                children: \"setFalse\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n        lineNumber: 49,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Primitives, \"9LToiHJeg/xS6+S1OHR1Q19wM4U=\");\n_c = Primitives;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Primitives);\nvar _c;\n$RefreshReg$(_c, \"Primitives\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcmltaXRpdmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDbUI7QUFDVDtBQUNNO0FBRWxELE1BQU1LLGFBQWEsSUFBTTs7SUFDdkIsTUFBSyxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQTtJQUNuQyxNQUFNSyxhQUFhLElBQUlSLDRDQUFRQSxDQUM3QlMsNENBQTZCLEVBQzdCQSx5a0ZBQWUsRUFDZlIsNERBQWVBO0lBR2pCLE1BQU1ZLDBCQUEwQixVQUFVO1FBQ3hDLE1BQU1DLFNBQVMsTUFBTVYscUVBQXdCO1FBQzdDLE1BQU1ZLHVCQUF1QlIsV0FBV1MsT0FBTyxDQUFDSDtRQUNoRCxxR0FBcUc7UUFDckcsT0FBT0U7SUFFVDtJQUVBZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2IsV0FBWTtZQUNYLElBQUc7Z0JBQ0QsTUFBTUksU0FBUyxNQUFNRSxXQUFXRixNQUFNO2dCQUN0Q1ksUUFBUUMsR0FBRyxDQUFDLFlBQVliO2dCQUN4QkMsVUFBVUQ7Z0JBRVYsTUFBTWMsWUFBWSxNQUFNWixXQUFXWSxTQUFTO2dCQUM1Q0YsUUFBUUMsR0FBRyxDQUFDLGVBQWVDO1lBQzdCLEVBQUUsT0FBTUMsT0FBTTtnQkFDWkgsUUFBUUcsS0FBSyxDQUFDQTtZQUNoQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0IsT0FBTWhCLFNBQVU7UUFDcEMsSUFBRztZQUNELE1BQU1VLHVCQUF1QixNQUFNSDtZQUNuQyxNQUFNVSxLQUFLLE1BQU1QLHFCQUFxQlEsT0FBTyxDQUFDbEI7WUFDOUNZLFFBQVFDLEdBQUcsQ0FBQyxRQUFRSTtZQUNwQixNQUFNRSxXQUFXLE1BQU1GLEdBQUdHLElBQUk7WUFDOUJSLFFBQVFDLEdBQUcsQ0FBQ007UUFDZCxFQUFFLE9BQU1KLE9BQU07WUFDWkgsUUFBUUcsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEscUJBQU8sOERBQUNNOzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUFHO29CQUFPdkIsU0FBUyxTQUFTLE9BQU87Ozs7Ozs7MEJBQ3BDLDhEQUFDd0I7Z0JBQU9DLFNBQVMsSUFBTVQsY0FBYyxJQUFJOzBCQUFHOzs7Ozs7MEJBQzVDLDhEQUFDUTtnQkFBT0MsU0FBUyxJQUFNVCxjQUFjLEtBQUs7MEJBQUc7Ozs7Ozs7Ozs7OztBQUVuRDtHQWpETWpCO0tBQUFBO0FBbUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ByaW1pdGl2ZXMuanM/YTdlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cmFjdCB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBkZWZhdWx0UHJvdmlkZXIgZnJvbSBcIi4uL2FiaS9kZWZhdWx0UHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3YWxsZXRQcm92aWRlciBmcm9tIFwiLi4vYWJpL3dhbGxldFByb3ZpZGVyXCJcblxuY29uc3QgUHJpbWl0aXZlcyA9ICgpID0+IHtcbiAgY29uc3RbaXNUcnVlLCBzZXRJc1RydWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgcHJpbWl0aXZlcyA9IG5ldyBDb250cmFjdChcbiAgICBwcm9jZXNzLmVudi5wcmltaXRpdmVzQWRkcmVzcyxcbiAgICBwcm9jZXNzLmVudi5hYmksXG4gICAgZGVmYXVsdFByb3ZpZGVyXG4gICk7XG5cbiAgY29uc3QgZ2V0UHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhc3luYygpID0+e1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHdhbGxldFByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IHByaW1pdGl2ZXNXaXRoU2lnbmVyID0gcHJpbWl0aXZlcy5jb25uZWN0KHNpZ25lcik7XG4gICAgLy8gY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBuZXcgQ29udHJhY3QocHJvY2Vzcy5lbnYucHJpbWl0aXZlc0FkZHJlc3MsIHByb2Nlc3MuZW52LmFiaSwgc2lnbmVyKTtcbiAgICByZXR1cm4gcHJpbWl0aXZlc1dpdGhTaWduZXI7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgaXNUcnVlID0gYXdhaXQgcHJpbWl0aXZlcy5pc1RydWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpc1RydWU6IFwiLCBpc1RydWUpO1xuICAgICAgICBzZXRJc1RydWUoaXNUcnVlKTtcblxuICAgICAgICBjb25zdCBzbWFsbFVpbnQgPSBhd2FpdCBwcmltaXRpdmVzLnNtYWxsVWludCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsVWludDogXCIsIHNtYWxsVWludCk7XG4gICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU2V0VHJ1ZSA9IGFzeW5jKGlzVHJ1ZSkgPT57XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRUcnVlKGlzVHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPGRpdj5cbiAgICAgIDxoMT5QcmltaXRpdmVzPC9oMT5cbiAgICAgIDxoMz5Cb29sOiB7aXNUcnVlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2V0VHJ1ZSh0cnVlKX0+c2V0VHJ1ZTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZXRUcnVlKGZhbHNlKX0+c2V0RmFsc2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1pdGl2ZXM7Il0sIm5hbWVzIjpbIkNvbnRyYWN0IiwiZGVmYXVsdFByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ3YWxsZXRQcm92aWRlciIsIlByaW1pdGl2ZXMiLCJpc1RydWUiLCJzZXRJc1RydWUiLCJwcmltaXRpdmVzIiwicHJvY2VzcyIsImVudiIsInByaW1pdGl2ZXNBZGRyZXNzIiwiYWJpIiwiZ2V0UHJpbWl0aXZlc1dpdGhTaWduZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJwcmltaXRpdmVzV2l0aFNpZ25lciIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwic21hbGxVaW50IiwiZXJyb3IiLCJoYW5kbGVTZXRUcnVlIiwidHgiLCJzZXRUcnVlIiwicmVzcG9uc2UiLCJ3YWl0IiwiZGl2IiwiaDEiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/primitives.js\n"));

/***/ })

});