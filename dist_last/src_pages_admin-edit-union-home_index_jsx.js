"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_pages_admin-edit-union-home_index_jsx"],{

/***/ "./src/pages/admin-edit-union-home/index.jsx":
/*!***************************************************!*\
  !*** ./src/pages/admin-edit-union-home/index.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _components_overview_ComponentSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components-overview/ComponentSkeleton */ \"./src/pages/components-overview/ComponentSkeleton.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _rjsf_validator_ajv8__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rjsf/validator-ajv8 */ \"./node_modules/@rjsf/validator-ajv8/dist/validator-ajv8.esm.js\");\n/* harmony import */ var _rjsf_mui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rjsf/mui */ \"./node_modules/@rjsf/mui/dist/mui.esm.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\nvar pageBanner = {\n  title: \"Page Banner\",\n  type: \"object\",\n  properties: {\n    data: {\n      type: \"object\",\n      title: \" Page Banner Components\",\n      properties: {\n        heading: {\n          type: \"string\",\n          title: \"Banner Heading\"\n        },\n        description: {\n          type: \"string\",\n          title: \"Banner Description\"\n        },\n        searchURL: {\n          type: \"string\",\n          title: \"Search Action URL\"\n        },\n        bannerCarousel: {\n          type: \"array\",\n          title: \"Banner Background Carousel\",\n          items: {\n            type: \"string\"\n          }\n        }\n      }\n    }\n  }\n};\nvar categorySection = {\n  title: \"Section 1\",\n  type: \"object\",\n  properties: {\n    data: {\n      type: \"object\",\n      title: \"Section Components\",\n      properties: {\n        heading: {\n          type: \"string\",\n          title: \"Section Heading\"\n        }\n      }\n    }\n    // children: {\n    //   title: \"Children Components\",\n    //   type: \"array\",\n    //   items: {\n    //     type: \"object\",\n    //     properties: {\n    //       component: {\n    //         type: \"string\",\n    //       },\n\n    //       data: {\n    //         type: \"object\",\n    //         properties: {\n    //           data: {\n    //             type: \"array\",\n    //             items: {\n    //               type: \"object\",\n    //               properties: {\n    //                 thumbnail: {\n    //                   type: \"string\",\n    //                 },\n    //                 title: {\n    //                   type: \"string\",\n    //                 },\n    //                 link: {\n    //                   type: \"string\",\n    //                 },\n    //               },\n    //             },\n    //           },\n    //         },\n    //       },\n    //     },\n    //   },\n    // },\n  }\n};\n\nvar mapSection = {\n  title: \"Section 2\",\n  type: \"object\",\n  properties: {\n    data: {\n      type: \"object\",\n      title: \"Section Components\",\n      properties: {\n        heading: {\n          type: \"string\",\n          title: \"Section Heading\"\n        }\n      }\n    }\n  }\n};\nvar recentAddSection = {\n  title: \"Section 3\",\n  type: \"object\",\n  properties: {\n    data: {\n      type: \"object\",\n      title: \"Section Components\",\n      properties: {\n        heading: {\n          type: \"string\",\n          title: \"Section Heading\"\n        },\n        description: {\n          type: \"string\",\n          title: \"Section Description\"\n        }\n      }\n    }\n  }\n};\nvar schema = [pageBanner, categorySection, mapSection, recentAddSection];\nvar log = function log(type) {\n  return console.log.bind(console, type);\n};\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\nvar AdminEditSite = function AdminEditSite(props) {\n  var BASE_URL = \"http://localhost:3001\" || 0;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"\".concat(BASE_URL, \"/page/union-home\"), fetcher),\n    data = _useSWR.data,\n    mutate = _useSWR.mutate,\n    error = _useSWR.error,\n    isLoading = _useSWR.isLoading;\n  var sendUpdateData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newData) {\n      var noti;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            noti = react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.loading(\"Please wait for data to be updated ...\");\n            _context.next = 3;\n            return fetch(\"\".concat(BASE_URL, \"/page/union-home\"), {\n              method: \"POST\",\n              body: JSON.stringify(newData),\n              headers: {\n                \"Content-type\": \"application/json; charset=UTF-8\"\n              }\n            }).then(function (res) {\n              react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.update(noti, {\n                render: \"Data has been updated successfully\",\n                type: \"success\",\n                isLoading: false\n              });\n              console.log(res);\n            });\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return function sendUpdateData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  if (error) return \"An error has occurred.\";\n  if (isLoading) return \"Loading...\";\n  return /*#__PURE__*/React.createElement(_components_overview_ComponentSkeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/React.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, null), /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    container: true,\n    spacing: 3\n  }, /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    item: true,\n    xs: 12\n  }, schema.map(function (e, i) {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_rjsf_mui__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: i,\n      formData: data[i],\n      schema: e,\n      validator: _rjsf_validator_ajv8__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      onChange: log(\"changed\"),\n      onSubmit: function onSubmit(_ref2) {\n        var formData = _ref2.formData;\n        console.log(formData);\n        var newData = data;\n        data[i] = formData;\n        sendUpdateData(newData);\n      },\n      onError: log(\"errors\")\n    }), /*#__PURE__*/React.createElement(\"br\", null));\n  }))));\n};\nAdminEditSite.propTypes = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminEditSite);\n\n//# sourceURL=webpack:///./src/pages/admin-edit-union-home/index.jsx?");

/***/ }),

/***/ "./src/pages/components-overview/ComponentSkeleton.js":
/*!************************************************************!*\
  !*** ./src/pages/components-overview/ComponentSkeleton.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Skeleton/Skeleton.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _components_MainCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MainCard */ \"./src/components/MainCard.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n// material-ui\n\n\n// project import\n\n\n// ===============================|| COMPONENT - SKELETON ||=============================== //\n\nvar ComponentSkeleton = function ComponentSkeleton(_ref) {\n  var children = _ref.children;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    isLoading = _useState2[0],\n    setLoading = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setLoading(false);\n  }, []);\n  var skeletonCard = /*#__PURE__*/React.createElement(_components_MainCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      sx: {\n        width: {\n          xs: 120,\n          md: 180\n        }\n      }\n    }),\n    secondary: /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      animation: \"wave\",\n      variant: \"circular\",\n      width: 24,\n      height: 24\n    })\n  }, /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    spacing: 1\n  }, /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    sx: {\n      height: 64\n    },\n    animation: \"wave\",\n    variant: \"rectangular\"\n  }), /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n  return /*#__PURE__*/React.createElement(React.Fragment, null, isLoading && /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    container: true,\n    spacing: 3\n  }, /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12,\n    md: 6\n  }, skeletonCard), /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12,\n    md: 6\n  }, skeletonCard), /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12,\n    md: 6\n  }, skeletonCard), /*#__PURE__*/React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12,\n    md: 6\n  }, skeletonCard)), !isLoading && children);\n};\nComponentSkeleton.propTypes = {\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentSkeleton);\n\n//# sourceURL=webpack:///./src/pages/components-overview/ComponentSkeleton.js?");

/***/ })

}]);