"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/primitives";
exports.ids = ["pages/primitives"];
exports.modules = {

/***/ "./abi/defaultProvider.js":
/*!********************************!*\
  !*** ./abi/defaultProvider.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_0__]);\nethers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst defaultProvider = new ethers__WEBPACK_IMPORTED_MODULE_0__.InfuraProvider(\"goerli\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hYmkvZGVmYXVsdFByb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1DLGtCQUFrQixJQUFJRCxrREFBY0EsQ0FBQ0UsUUFBdUI7QUFFbEUsaUVBQWVELGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldGhlcnMtdGVzdC8uL2FiaS9kZWZhdWx0UHJvdmlkZXIuanM/OTY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmZ1cmFQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcblxuY29uc3QgZGVmYXVsdFByb3ZpZGVyID0gbmV3IEluZnVyYVByb3ZpZGVyKHByb2Nlc3MuZW52Lm5ldHdvcmtOYW1lKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFByb3ZpZGVyOyJdLCJuYW1lcyI6WyJJbmZ1cmFQcm92aWRlciIsImRlZmF1bHRQcm92aWRlciIsInByb2Nlc3MiLCJlbnYiLCJuZXR3b3JrTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./abi/defaultProvider.js\n");

/***/ }),

/***/ "./abi/walletProvider.js":
/*!*******************************!*\
  !*** ./abi/walletProvider.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_0__]);\nethers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nlet walletProvider;\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (walletProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hYmkvd2FsbGV0UHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFFekMsSUFBSUM7QUFDSixJQUFJLEtBQXVFLEVBQUMsRUFFM0U7QUFFRCxpRUFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0aGVycy10ZXN0Ly4vYWJpL3dhbGxldFByb3ZpZGVyLmpzP2U3ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5sZXQgd2FsbGV0UHJvdmlkZXI7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3YWxsZXRQcm92aWRlciA9IG5ldyBCcm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2FsbGV0UHJvdmlkZXI7Il0sIm5hbWVzIjpbIkJyb3dzZXJQcm92aWRlciIsIndhbGxldFByb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./abi/walletProvider.js\n");

/***/ }),

/***/ "./pages/primitives.js":
/*!*****************************!*\
  !*** ./pages/primitives.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/defaultProvider */ \"./abi/defaultProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _abi_walletProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abi/walletProvider */ \"./abi/walletProvider.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_1__, _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__, _abi_walletProvider__WEBPACK_IMPORTED_MODULE_4__]);\n([ethers__WEBPACK_IMPORTED_MODULE_1__, _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__, _abi_walletProvider__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst Primitives = ()=>{\n    const [isTrue, setIsTrue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [smallUint, setSmallUint] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(BigInt(0));\n    const [bigUint, setBigUint] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(BigInt(0));\n    const smallUintRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const bigUintRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const primitives = new ethers__WEBPACK_IMPORTED_MODULE_1__.Contract(\"0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462\", [{\"inputs\":[],\"name\":\"bigBytes\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bigUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTrue\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_bigBytes\",\"type\":\"bytes32\"}],\"name\":\"setBigBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_bigInt\",\"type\":\"int256\"}],\"name\":\"setBiglInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigUint\",\"type\":\"uint256\"}],\"name\":\"setBiglUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes1\",\"name\":\"_smallBytes\",\"type\":\"bytes1\"}],\"name\":\"setSmallBytes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int8\",\"name\":\"_smallInt\",\"type\":\"int8\"}],\"name\":\"setSmallInt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_smallUint\",\"type\":\"uint8\"}],\"name\":\"setSmallUint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_isTrue\",\"type\":\"bool\"}],\"name\":\"setTrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_wallet\",\"type\":\"address\"}],\"name\":\"setWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallBytes\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"\",\"type\":\"bytes1\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallInt\",\"outputs\":[{\"internalType\":\"int8\",\"name\":\"\",\"type\":\"int8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"smallUint\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}], _abi_defaultProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const getPrimitivesWithSigner = async ()=>{\n        const signer = await _abi_walletProvider__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getSigner();\n        const primitivesWithSigner = primitives.connect(signer);\n        // const primitivesWithSigner = new Contract(process.env.primitivesAddress, process.env.abi, signer);\n        return primitivesWithSigner;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                const isTrue = await primitives.isTrue();\n                console.log(\"isTrue: \", isTrue);\n                setIsTrue(isTrue);\n                const smallUint = await primitives.smallUint();\n                console.log(\"smallUint: \", typeof smallUint);\n                setSmallUint(smallUint);\n                const bigUint = await primitives.bigUint();\n                console.log(\"bigUint: \", bigUint);\n                setBigUint(bigUint);\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    });\n    const handleSetTrue = async (isTrue)=>{\n        try {\n            const primitivesWithSigner = await getPrimitivesWithSigner();\n            const tx = await primitivesWithSigner.setTrue(isTrue);\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewSmallUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await getPrimitivesWithSigner();\n            const tx = await primitivesWithSigner.setSmallUint(BigInt(smallUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleNewBigUintSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const primitivesWithSigner = await getPrimitivesWithSigner();\n            const tx = await primitivesWithSigner.setBiglUint(BigInt(bigUintRef.current.value));\n            console.log(\"tx: \", tx);\n            const response = await tx.wait();\n            console.log(response);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Primitives\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Bool: \",\n                    isTrue ? \"true\" : \"false\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(true),\n                children: \"setTrue\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleSetTrue(false),\n                children: \"setFalse\"\n            }, void 0, false, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewSmallUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"SmallUint\",\n                        children: \"New small uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"SmallUint\",\n                        ref: smallUintRef,\n                        type: \"number\",\n                        min: 0,\n                        max: 255\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new small uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"SmallUint: \",\n                    smallUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewBigUintSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"BigUint\",\n                        children: \"New big uint:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"BigUint\",\n                        ref: bigUintRef,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Set new big uint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"BigUint: \",\n                    bigUint.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/roman/Desktop/MCS/ethers/ethers-test/pages/primitives.js\",\n        lineNumber: 95,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Primitives);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVwQyw4REFBQ3FDO2dCQUFPQyxTQUFTLElBQU1oQixjQUFjLElBQUk7MEJBQUc7Ozs7OzswQkFFNUMsOERBQUNlO2dCQUFPQyxTQUFTLElBQU1oQixjQUFjLEtBQUs7MEJBQUc7Ozs7OzswQkFFN0MsOERBQUNpQjtnQkFBS0MsVUFBVWI7O2tDQUNkLDhEQUFDYzt3QkFBTUMsU0FBUTtrQ0FBWTs7Ozs7O2tDQUUzQiw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQVlDLEtBQUt0Qzt3QkFBY3VDLE1BQUs7d0JBQVNDLEtBQUs7d0JBQUdDLEtBQUs7Ozs7OztrQ0FDdEUsOERBQUNYO2tDQUFPOzs7Ozs7Ozs7Ozs7MEJBR1YsOERBQUNEOztvQkFBRztvQkFBWWxDLFVBQVUrQyxRQUFROzs7Ozs7OzBCQUVsQyw4REFBQ1Y7Z0JBQUtDLFVBQVVSOztrQ0FDZCw4REFBQ1M7d0JBQU1DLFNBQVE7a0NBQVU7Ozs7OztrQ0FDekIsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFVQyxLQUFLckM7d0JBQVlzQyxNQUFLOzs7Ozs7a0NBQzVDLDhEQUFDVDtrQ0FBTzs7Ozs7Ozs7Ozs7OzBCQUdWLDhEQUFDRDs7b0JBQUc7b0JBQVUvQixRQUFRNEMsUUFBUTs7Ozs7Ozs7Ozs7OztBQUVwQztBQUVBLGlFQUFlbEQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0aGVycy10ZXN0Ly4vcGFnZXMvcHJpbWl0aXZlcy5qcz9hN2VhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyYWN0IH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IGRlZmF1bHRQcm92aWRlciBmcm9tIFwiLi4vYWJpL2RlZmF1bHRQcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2FsbGV0UHJvdmlkZXIgZnJvbSBcIi4uL2FiaS93YWxsZXRQcm92aWRlclwiXG5cbmNvbnN0IFByaW1pdGl2ZXMgPSAoKSA9PiB7XG4gIGNvbnN0W2lzVHJ1ZSwgc2V0SXNUcnVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzbWFsbFVpbnQsIHNldFNtYWxsVWludF0gPSB1c2VTdGF0ZShCaWdJbnQoMCkpO1xuICBjb25zdCBbYmlnVWludCwgc2V0QmlnVWludF0gPSB1c2VTdGF0ZShCaWdJbnQoMCkpO1xuXG4gIGNvbnN0IHNtYWxsVWludFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBiaWdVaW50UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgcHJpbWl0aXZlcyA9IG5ldyBDb250cmFjdChcbiAgICBwcm9jZXNzLmVudi5wcmltaXRpdmVzQWRkcmVzcyxcbiAgICBwcm9jZXNzLmVudi5hYmksXG4gICAgZGVmYXVsdFByb3ZpZGVyXG4gICk7XG5cbiAgY29uc3QgZ2V0UHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhc3luYygpID0+e1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHdhbGxldFByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IHByaW1pdGl2ZXNXaXRoU2lnbmVyID0gcHJpbWl0aXZlcy5jb25uZWN0KHNpZ25lcik7XG4gICAgLy8gY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBuZXcgQ29udHJhY3QocHJvY2Vzcy5lbnYucHJpbWl0aXZlc0FkZHJlc3MsIHByb2Nlc3MuZW52LmFiaSwgc2lnbmVyKTtcbiAgICByZXR1cm4gcHJpbWl0aXZlc1dpdGhTaWduZXI7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgaXNUcnVlID0gYXdhaXQgcHJpbWl0aXZlcy5pc1RydWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpc1RydWU6IFwiLCBpc1RydWUpO1xuICAgICAgICBzZXRJc1RydWUoaXNUcnVlKTtcblxuICAgICAgICBjb25zdCBzbWFsbFVpbnQgPSBhd2FpdCBwcmltaXRpdmVzLnNtYWxsVWludCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNtYWxsVWludDogXCIsIHR5cGVvZiBzbWFsbFVpbnQpO1xuICAgICAgICBzZXRTbWFsbFVpbnQoc21hbGxVaW50KTtcblxuICAgICAgICBjb25zdCBiaWdVaW50ID0gYXdhaXQgcHJpbWl0aXZlcy5iaWdVaW50KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmlnVWludDogXCIsIGJpZ1VpbnQpO1xuICAgICAgICBzZXRCaWdVaW50KGJpZ1VpbnQpO1xuXG4gICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU2V0VHJ1ZSA9IGFzeW5jKGlzVHJ1ZSkgPT57XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRUcnVlKGlzVHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXdTbWFsbFVpbnRTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRTbWFsbFVpbnQoXG4gICAgICAgIEJpZ0ludChcbiAgICAgICAgICBzbWFsbFVpbnRSZWYuY3VycmVudC52YWx1ZVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJ0eDogXCIsIHR4KTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdHgud2FpdCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV3QmlnVWludFN1Ym1pdCA9ICBhc3luYyAoZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcHJpbWl0aXZlc1dpdGhTaWduZXIgPSBhd2FpdCBnZXRQcmltaXRpdmVzV2l0aFNpZ25lcigpO1xuICAgICAgY29uc3QgdHggPSBhd2FpdCBwcmltaXRpdmVzV2l0aFNpZ25lci5zZXRCaWdsVWludChcbiAgICAgICAgQmlnSW50KFxuICAgICAgICAgIGJpZ1VpbnRSZWYuY3VycmVudC52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgICBjb25zb2xlLmxvZyhcInR4OiBcIiwgdHgpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8ZGl2PlxuICAgICAgPGgxPlByaW1pdGl2ZXM8L2gxPlxuXG4gICAgICA8aDM+Qm9vbDoge2lzVHJ1ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvaDM+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2V0VHJ1ZSh0cnVlKX0+c2V0VHJ1ZTwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNldFRydWUoZmFsc2UpfT5zZXRGYWxzZTwvYnV0dG9uPlxuXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmV3U21hbGxVaW50U3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJTbWFsbFVpbnRcIj5OZXcgc21hbGwgdWludDo8L2xhYmVsPlxuICAgICAgICB7LyogdWludDggY2FuIG5vdCBiZSBncmVhdGVyIHRoYW4gMjU1ICovfVxuICAgICAgICA8aW5wdXQgbmFtZT1cIlNtYWxsVWludFwiIHJlZj17c21hbGxVaW50UmVmfSB0eXBlPVwibnVtYmVyXCIgbWluPXswfSBtYXg9ezI1NX0+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbj5TZXQgbmV3IHNtYWxsIHVpbnQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGgzPlNtYWxsVWludDoge3NtYWxsVWludC50b1N0cmluZygpfTwvaDM+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOZXdCaWdVaW50U3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJCaWdVaW50XCI+TmV3IGJpZyB1aW50OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwiQmlnVWludFwiIHJlZj17YmlnVWludFJlZn0gdHlwZT1cInRleHRcIj48L2lucHV0PlxuICAgICAgICA8YnV0dG9uPlNldCBuZXcgYmlnIHVpbnQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGgzPkJpZ1VpbnQ6IHtiaWdVaW50LnRvU3RyaW5nKCl9PC9oMz5cbiAgICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1pdGl2ZXM7Il0sIm5hbWVzIjpbIkNvbnRyYWN0IiwiZGVmYXVsdFByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ3YWxsZXRQcm92aWRlciIsIlByaW1pdGl2ZXMiLCJpc1RydWUiLCJzZXRJc1RydWUiLCJzbWFsbFVpbnQiLCJzZXRTbWFsbFVpbnQiLCJCaWdJbnQiLCJiaWdVaW50Iiwic2V0QmlnVWludCIsInNtYWxsVWludFJlZiIsImJpZ1VpbnRSZWYiLCJwcmltaXRpdmVzIiwicHJvY2VzcyIsImVudiIsInByaW1pdGl2ZXNBZGRyZXNzIiwiYWJpIiwiZ2V0UHJpbWl0aXZlc1dpdGhTaWduZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJwcmltaXRpdmVzV2l0aFNpZ25lciIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVTZXRUcnVlIiwidHgiLCJzZXRUcnVlIiwicmVzcG9uc2UiLCJ3YWl0IiwiaGFuZGxlTmV3U21hbGxVaW50U3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsImhhbmRsZU5ld0JpZ1VpbnRTdWJtaXQiLCJzZXRCaWdsVWludCIsImRpdiIsImgxIiwiaDMiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJuYW1lIiwicmVmIiwidHlwZSIsIm1pbiIsIm1heCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/primitives.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("ethers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/primitives.js"));
module.exports = __webpack_exports__;

})();