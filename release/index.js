/**
 * angular2-data-table v"4.1.0" (https://github.com/swimlane/angular2-data-table)
 * Copyright 2016
 * Licensed under MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/platform-browser"), require("rxjs/Rx"), require("@angular/common"), require("@angular/platform-browser-dynamic"));
	else if(typeof define === 'function' && define.amd)
		define("angular2-data-table", ["@angular/core", "@angular/platform-browser", "rxjs/Rx", "@angular/common", "@angular/platform-browser-dynamic"], factory);
	else if(typeof exports === 'object')
		exports["angular2-data-table"] = factory(require("@angular/core"), require("@angular/platform-browser"), require("rxjs/Rx"), require("@angular/common"), require("@angular/platform-browser-dynamic"));
	else
		root["angular2-data-table"] = factory(root["@angular/core"], root["@angular/platform-browser"], root["rxjs/Rx"], root["@angular/common"], root["@angular/platform-browser-dynamic"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/core/src/facade/lang.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (immutable) */ exports["scheduleMicroTask"] = scheduleMicroTask;
/* harmony export (binding) */ __webpack_require__.d(exports, "global", function() { return _global; });
/* harmony export (immutable) */ exports["getTypeNameForDebugging"] = getTypeNameForDebugging;
/* harmony export (immutable) */ exports["isPresent"] = isPresent;
/* harmony export (immutable) */ exports["isBlank"] = isBlank;
/* harmony export (immutable) */ exports["isBoolean"] = isBoolean;
/* harmony export (immutable) */ exports["isNumber"] = isNumber;
/* harmony export (immutable) */ exports["isString"] = isString;
/* harmony export (immutable) */ exports["isFunction"] = isFunction;
/* harmony export (immutable) */ exports["isType"] = isType;
/* harmony export (immutable) */ exports["isStringMap"] = isStringMap;
/* harmony export (immutable) */ exports["isStrictStringMap"] = isStrictStringMap;
/* harmony export (immutable) */ exports["isArray"] = isArray;
/* harmony export (immutable) */ exports["isDate"] = isDate;
/* harmony export (immutable) */ exports["noop"] = noop;
/* harmony export (immutable) */ exports["stringify"] = stringify;
/* harmony export (binding) */ __webpack_require__.d(exports, "StringWrapper", function() { return StringWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StringJoiner", function() { return StringJoiner; });
/* harmony export (binding) */ __webpack_require__.d(exports, "NumberWrapper", function() { return NumberWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "RegExp", function() { return RegExp; });
/* harmony export (binding) */ __webpack_require__.d(exports, "FunctionWrapper", function() { return FunctionWrapper; });
/* harmony export (immutable) */ exports["looseIdentical"] = looseIdentical;
/* harmony export (immutable) */ exports["getMapKey"] = getMapKey;
/* harmony export (immutable) */ exports["normalizeBlank"] = normalizeBlank;
/* harmony export (immutable) */ exports["normalizeBool"] = normalizeBool;
/* harmony export (immutable) */ exports["isJsObject"] = isJsObject;
/* harmony export (immutable) */ exports["print"] = print;
/* harmony export (immutable) */ exports["warn"] = warn;
/* harmony export (binding) */ __webpack_require__.d(exports, "Json", function() { return Json; });
/* harmony export (immutable) */ exports["setValueOnPath"] = setValueOnPath;
/* harmony export (immutable) */ exports["getSymbolIterator"] = getSymbolIterator;
/* harmony export (immutable) */ exports["evalExpression"] = evalExpression;
/* harmony export (immutable) */ exports["isPrimitive"] = isPrimitive;
/* harmony export (immutable) */ exports["hasConstructor"] = hasConstructor;
/* harmony export (immutable) */ exports["escape"] = escape;
/* harmony export (immutable) */ exports["escapeRegExp"] = escapeRegExp;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = self;
    }
    else {
        globalScope = global;
    }
}
else {
    globalScope = window;
}
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var _global = globalScope;

function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}
// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert = function assert(condition) {
    // TODO: to be fixed properly via #2830, noop for now
};
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isBlank(obj) {
    return obj === undefined || obj === null;
}
function isBoolean(obj) {
    return typeof obj === 'boolean';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isString(obj) {
    return typeof obj === 'string';
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isType(obj) {
    return isFunction(obj);
}
function isStringMap(obj) {
    return typeof obj === 'object' && obj !== null;
}
var STRING_MAP_PROTO = Object.getPrototypeOf({});
function isStrictStringMap(obj) {
    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}
function isArray(obj) {
    return Array.isArray(obj);
}
function isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
}
function noop() { }
function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token === undefined || token === null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return token.overriddenName;
    }
    if (token.name) {
        return token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
var StringWrapper = (function () {
    function StringWrapper() {
    }
    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
    StringWrapper.equals = function (s, s2) { return s === s2; };
    StringWrapper.stripLeft = function (s, charVal) {
        if (s && s.length) {
            var pos = 0;
            for (var i = 0; i < s.length; i++) {
                if (s[i] != charVal)
                    break;
                pos++;
            }
            s = s.substring(pos);
        }
        return s;
    };
    StringWrapper.stripRight = function (s, charVal) {
        if (s && s.length) {
            var pos = s.length;
            for (var i = s.length - 1; i >= 0; i--) {
                if (s[i] != charVal)
                    break;
                pos--;
            }
            s = s.substring(0, pos);
        }
        return s;
    };
    StringWrapper.replace = function (s, from, replace) {
        return s.replace(from, replace);
    };
    StringWrapper.replaceAll = function (s, from, replace) {
        return s.replace(from, replace);
    };
    StringWrapper.slice = function (s, from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = null; }
        return s.slice(from, to === null ? undefined : to);
    };
    StringWrapper.replaceAllMapped = function (s, from, cb) {
        return s.replace(from, function () {
            var matches = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                matches[_i - 0] = arguments[_i];
            }
            // Remove offset & string from the result array
            matches.splice(-2, 2);
            // The callback receives match, p1, ..., pn
            return cb(matches);
        });
    };
    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
    StringWrapper.compare = function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return StringWrapper;
}());
var StringJoiner = (function () {
    function StringJoiner(parts) {
        if (parts === void 0) { parts = []; }
        this.parts = parts;
    }
    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
    StringJoiner.prototype.toString = function () { return this.parts.join(''); };
    return StringJoiner;
}());
var NumberWrapper = (function () {
    function NumberWrapper() {
    }
    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
    NumberWrapper.equal = function (a, b) { return a === b; };
    NumberWrapper.parseIntAutoRadix = function (text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    };
    NumberWrapper.parseInt = function (text, radix) {
        if (radix == 10) {
            if (/^(\-|\+)?[0-9]+$/.test(text)) {
                return parseInt(text, radix);
            }
        }
        else if (radix == 16) {
            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                return parseInt(text, radix);
            }
        }
        else {
            var result = parseInt(text, radix);
            if (!isNaN(result)) {
                return result;
            }
        }
        throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
    };
    Object.defineProperty(NumberWrapper, "NaN", {
        get: function () { return NaN; },
        enumerable: true,
        configurable: true
    });
    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
    NumberWrapper.isNaN = function (value) { return isNaN(value); };
    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
    return NumberWrapper;
}());
var RegExp = _global.RegExp;
var FunctionWrapper = (function () {
    function FunctionWrapper() {
    }
    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
    FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
    return FunctionWrapper;
}());
// JS has NaN !== NaN
function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
function getMapKey(value) {
    return value;
}
function normalizeBlank(obj) {
    return isBlank(obj) ? null : obj;
}
function normalizeBool(obj) {
    return isBlank(obj) ? false : obj;
}
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
function print(obj) {
    console.log(obj);
}
function warn(obj) {
    console.warn(obj);
}
// Can't be all uppercase as our transpiler would think it is a special directive...
var Json = (function () {
    function Json() {
    }
    Json.parse = function (s) { return _global.JSON.parse(s); };
    Json.stringify = function (data) {
        // Dart doesn't take 3 arguments
        return _global.JSON.stringify(data, null, 2);
    };
    return Json;
}());
function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
        var name = parts.shift();
        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
            obj = obj[name];
        }
        else {
            obj = obj[name] = {};
        }
    }
    if (obj === undefined || obj === null) {
        obj = {};
    }
    obj[parts.shift()] = value;
}
var _symbolIterator = null;
function getSymbolIterator() {
    if (isBlank(_symbolIterator)) {
        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
            _symbolIterator = Symbol.iterator;
        }
        else {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    Map.prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}
function evalExpression(sourceUrl, expr, declarations, vars) {
    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
    var fnArgNames = [];
    var fnArgValues = [];
    for (var argName in vars) {
        fnArgNames.push(argName);
        fnArgValues.push(vars[argName]);
    }
    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
}
function isPrimitive(obj) {
    return !isJsObject(obj);
}
function hasConstructor(value, type) {
    return value.constructor === type;
}
function escape(s) {
    return _global.encodeURI(s);
}
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=lang.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ },

/***/ "./node_modules/@angular/http/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__("./node_modules/@angular/http/src/index.js");
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BrowserXhr", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "JSONPBackend", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "JSONPConnection", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CookieXSRFStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "XHRBackend", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "XHRConnection", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BaseRequestOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "RequestOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BaseResponseOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ResponseOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ReadyState", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "RequestMethod", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ResponseContentType", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ResponseType", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Headers", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Http", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Jsonp", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "HttpModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "JsonpModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Connection", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ConnectionBackend", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "XSRFStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Request", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Response", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "QueryEncoder", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "URLSearchParams", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["z"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the http package.
 */

//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/backends/browser_jsonp.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* unused harmony export JSONP_HOME */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BrowserJsonp; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    if (_jsonpConnections === null) {
        _jsonpConnections = __WEBPACK_IMPORTED_MODULE_1__facade_lang__["f" /* global */][JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = [];
    return BrowserJsonp;
}());
//# sourceMappingURL=browser_jsonp.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/backends/browser_xhr.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BrowserXhr; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = [];
    return BrowserXhr;
}());
//# sourceMappingURL=browser_xhr.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/backends/jsonp_backend.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_response_options__ = __webpack_require__("./node_modules/@angular/http/src/base_response_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__facade_lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_response__ = __webpack_require__("./node_modules/@angular/http/src/static_response.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__browser_jsonp__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_jsonp.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return JSONPConnection; });
/* unused harmony export JSONPConnection_ */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return JSONPBackend_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};








var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Abstract base class for an in-flight JSONP request.
 *
 * @experimental
 */
var JSONPConnection = (function () {
    function JSONPConnection() {
    }
    return JSONPConnection;
}());
var JSONPConnection_ = (function (_super) {
    __extends(JSONPConnection_, _super);
    function JSONPConnection_(req, _dom, baseResponseOptions) {
        var _this = this;
        _super.call(this);
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (responseObserver) {
            _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = __WEBPACK_IMPORTED_MODULE_4__facade_lang__["e" /* StringWrapper */].replace(url, '=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Cancelled)
                    return;
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["b" /* ResponseOptions */]({ body: JSONP_ERR_NO_CALLBACK, type: __WEBPACK_IMPORTED_MODULE_3__enums__["d" /* ResponseType */].Error, url: url });
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["d" /* isPresent */])(baseResponseOptions)) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new __WEBPACK_IMPORTED_MODULE_6__static_response__["a" /* Response */](responseOptions_1));
                    return;
                }
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["b" /* ResponseOptions */]({ body: _this._responseData, url: url });
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["d" /* isPresent */])(_this.baseResponseOptions)) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new __WEBPACK_IMPORTED_MODULE_6__static_response__["a" /* Response */](responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Cancelled)
                    return;
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Done;
                _dom.cleanup(script);
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["b" /* ResponseOptions */]({ body: error.message, type: __WEBPACK_IMPORTED_MODULE_3__enums__["d" /* ResponseType */].Error });
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["d" /* isPresent */])(baseResponseOptions)) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new __WEBPACK_IMPORTED_MODULE_6__static_response__["a" /* Response */](responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["d" /* isPresent */])(script)) {
                    _this._dom.cleanup(script);
                }
            };
        });
    }
    JSONPConnection_.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ReadyState */].Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection_;
}(JSONPConnection));
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @experimental
 */
var JSONPBackend = (function (_super) {
    __extends(JSONPBackend, _super);
    function JSONPBackend() {
        _super.apply(this, arguments);
    }
    return JSONPBackend;
}(__WEBPACK_IMPORTED_MODULE_5__interfaces__["b" /* ConnectionBackend */]));
var JSONPBackend_ = (function (_super) {
    __extends(JSONPBackend_, _super);
    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
        _super.call(this);
        this._browserJSONP = _browserJSONP;
        this._baseResponseOptions = _baseResponseOptions;
    }
    JSONPBackend_.prototype.createConnection = function (request) {
        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend_.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JSONPBackend_.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_7__browser_jsonp__["a" /* BrowserJsonp */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__base_response_options__["b" /* ResponseOptions */], },
    ];
    return JSONPBackend_;
}(JSONPBackend));
//# sourceMappingURL=jsonp_backend.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/backends/xhr_backend.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_response_options__ = __webpack_require__("./node_modules/@angular/http/src/base_response_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facade_lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_utils__ = __webpack_require__("./node_modules/@angular/http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_response__ = __webpack_require__("./node_modules/@angular/http/src/static_response.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__browser_xhr__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_xhr.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return XHRBackend; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @experimental
 */
var XHRConnection = (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(__WEBPACK_IMPORTED_MODULE_4__enums__["b" /* RequestMethod */][req.method].toUpperCase(), req.url);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["d" /* isPresent */])(req.withCredentials)) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
                // by IE10)
                var body = _xhr.response === undefined ? _xhr.responseText : _xhr.response;
                // Implicitly strip a potential XSSI prefix.
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["a" /* isString */])(body))
                    body = body.replace(XSSI_PREFIX, '');
                var headers = __WEBPACK_IMPORTED_MODULE_6__headers__["a" /* Headers */].fromResponseHeaderString(_xhr.getAllResponseHeaders());
                var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__http_utils__["d" /* getResponseURL */])(_xhr);
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_3__base_response_options__["b" /* ResponseOptions */]({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["d" /* isPresent */])(baseResponseOptions)) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new __WEBPACK_IMPORTED_MODULE_9__static_response__["a" /* Response */](responseOptions);
                response.ok = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__http_utils__["e" /* isSuccess */])(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_3__base_response_options__["b" /* ResponseOptions */]({
                    body: err,
                    type: __WEBPACK_IMPORTED_MODULE_4__enums__["d" /* ResponseType */].Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["d" /* isPresent */])(baseResponseOptions)) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new __WEBPACK_IMPORTED_MODULE_9__static_response__["a" /* Response */](responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["d" /* isPresent */])(req.headers)) {
                req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            }
            // Select the correct buffer type to store the response
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["d" /* isPresent */])(req.responseType) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["d" /* isPresent */])(_xhr.responseType)) {
                switch (req.responseType) {
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["c" /* ResponseContentType */].ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["c" /* ResponseContentType */].Json:
                        _xhr.responseType = 'json';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["c" /* ResponseContentType */].Text:
                        _xhr.responseType = 'text';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["c" /* ResponseContentType */].Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO #9100 */, _xhr /** TODO #9100 */) {
        // Skip if a custom Content-Type header is provided
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["d" /* isPresent */])(req.headers) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["d" /* isPresent */])(req.headers.get('Content-Type'))) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].NONE:
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See {@link https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)}
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @experimental
 */
var CookieXSRFStrategy = (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["__platform_browser_private__"].getDOM().getCookie(this._cookieName);
        if (xsrfToken && !req.headers.has(this._headerName)) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @experimental
 */
var XHRBackend = (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_10__browser_xhr__["a" /* BrowserXhr */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__base_response_options__["b" /* ResponseOptions */], },
        { type: __WEBPACK_IMPORTED_MODULE_8__interfaces__["c" /* XSRFStrategy */], },
    ];
    return XHRBackend;
}());
//# sourceMappingURL=xhr_backend.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/base_request_options.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_facade_lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_utils__ = __webpack_require__("./node_modules/@angular/http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__url_search_params__ = __webpack_require__("./node_modules/@angular/http/src/url_search_params.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BaseRequestOptions; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * var options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * var req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @experimental
 */
var RequestOptions = (function () {
    function RequestOptions(_a) {
        var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search, withCredentials = _b.withCredentials, responseType = _b.responseType;
        this.method = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(method) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__http_utils__["c" /* normalizeMethodName */])(method) : null;
        this.headers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(headers) ? headers : null;
        this.body = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(body) ? body : null;
        this.url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(url) ? url : null;
        this.search = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(search) ?
            (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isString */])(search) ? new __WEBPACK_IMPORTED_MODULE_5__url_search_params__["b" /* URLSearchParams */]((search)) : (search)) :
            null;
        this.withCredentials = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(withCredentials) ? withCredentials : null;
        this.responseType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(responseType) ? responseType : null;
    }
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * var options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * var req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.method) ? options.method : this.method,
            headers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.headers) ? options.headers : this.headers,
            body: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.body) ? options.body : this.body,
            url: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.url) ? options.url : this.url,
            search: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.search) ?
                (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isString */])(options.search) ? new __WEBPACK_IMPORTED_MODULE_5__url_search_params__["b" /* URLSearchParams */]((options.search)) :
                    (options.search).clone()) :
                this.search,
            withCredentials: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.withCredentials) ?
                options.withCredentials :
                this.withCredentials,
            responseType: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.responseType) ? options.responseType :
                this.responseType
        });
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * var options = new BaseRequestOptions();
 * var req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @experimental
 */
var BaseRequestOptions = (function (_super) {
    __extends(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        _super.call(this, { method: __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Get, headers: new __WEBPACK_IMPORTED_MODULE_3__headers__["a" /* Headers */]() });
    }
    BaseRequestOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = [];
    return BaseRequestOptions;
}(RequestOptions));
//# sourceMappingURL=base_request_options.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/base_response_options.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_facade_lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BaseResponseOptions; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @experimental
 */
var ResponseOptions = (function () {
    function ResponseOptions(_a) {
        var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
        this.body = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(body) ? body : null;
        this.status = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(status) ? status : null;
        this.headers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(headers) ? headers : null;
        this.statusText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(statusText) ? statusText : null;
        this.type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(type) ? type : null;
        this.url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(url) ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.body) ? options.body : this.body,
            status: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.status) ? options.status : this.status,
            headers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.headers) ? options.headers : this.headers,
            statusText: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.statusText) ? options.statusText :
                this.statusText,
            type: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.type) ? options.type : this.type,
            url: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(options.url) ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @experimental
 */
var BaseResponseOptions = (function (_super) {
    __extends(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        _super.call(this, { status: 200, statusText: 'Ok', type: __WEBPACK_IMPORTED_MODULE_2__enums__["d" /* ResponseType */].Default, headers: new __WEBPACK_IMPORTED_MODULE_3__headers__["a" /* Headers */]() });
    }
    BaseResponseOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = [];
    return BaseResponseOptions;
}(ResponseOptions));
//# sourceMappingURL=base_response_options.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/body.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_facade_lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_utils__ = __webpack_require__("./node_modules/@angular/http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url_search_params__ = __webpack_require__("./node_modules/@angular/http/src/url_search_params.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Body; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_facade_lang__["a" /* isString */])(this._body)) {
            return __WEBPACK_IMPORTED_MODULE_0__src_facade_lang__["b" /* Json */].parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return __WEBPACK_IMPORTED_MODULE_0__src_facade_lang__["b" /* Json */].parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     */
    Body.prototype.text = function () {
        if (this._body instanceof __WEBPACK_IMPORTED_MODULE_2__url_search_params__["b" /* URLSearchParams */]) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            return String.fromCharCode.apply(null, new Uint16Array(this._body));
        }
        if (this._body === null) {
            return '';
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__http_utils__["a" /* isJsObject */])(this._body)) {
            return __WEBPACK_IMPORTED_MODULE_0__src_facade_lang__["b" /* Json */].stringify(this._body);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__http_utils__["b" /* stringToArrayBuffer */])(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());
//# sourceMappingURL=body.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/enums.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ResponseContentType; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @experimental
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @experimental
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @experimental
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @experimental
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @experimental
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));
//# sourceMappingURL=enums.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/facade/collection.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapWrapper; });
/* unused harmony export StringMapWrapper */
/* unused harmony export ListWrapper */
/* unused harmony export isListLikeIterable */
/* unused harmony export areIterablesEqual */
/* unused harmony export iterateListLike */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// Safari and Internet Explorer do not support the iterable parameter to the
// Map constructor.  We work around that by manually adding the items.
var createMapFromPairs = (function () {
    try {
        if (new Map([[1, 2]]).size === 1) {
            return function createMapFromPairs(pairs) { return new Map(pairs); };
        }
    }
    catch (e) {
    }
    return function createMapAndPopulateFromPairs(pairs) {
        var map = new Map();
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            map.set(pair[0], pair[1]);
        }
        return map;
    };
})();
var createMapFromMap = (function () {
    try {
        if (new Map(new Map())) {
            return function createMapFromMap(m) { return new Map(m); };
        }
    }
    catch (e) {
    }
    return function createMapAndPopulateFromMap(m) {
        var map = new Map();
        m.forEach(function (v, k) { map.set(k, v); });
        return map;
    };
})();
var _clearValues = (function () {
    if ((new Map()).keys().next) {
        return function _clearValues(m) {
            var keyIterator = m.keys();
            var k;
            while (!((k = keyIterator.next()).done)) {
                m.set(k.value, null);
            }
        };
    }
    else {
        return function _clearValuesWithForeEach(m) {
            m.forEach(function (v, k) { m.set(k, null); });
        };
    }
})();
// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
var _arrayFromMap = (function () {
    try {
        if ((new Map()).values().next) {
            return function createArrayFromMap(m, getValues) {
                return getValues ? Array.from(m.values()) : Array.from(m.keys());
            };
        }
    }
    catch (e) {
    }
    return function createArrayFromMapWithForeach(m, getValues) {
        var res = new Array(m.size), i = 0;
        m.forEach(function (v, k) {
            res[i] = getValues ? v : k;
            i++;
        });
        return res;
    };
})();
var MapWrapper = (function () {
    function MapWrapper() {
    }
    MapWrapper.createFromStringMap = function (stringMap) {
        var result = new Map();
        for (var prop in stringMap) {
            result.set(prop, stringMap[prop]);
        }
        return result;
    };
    MapWrapper.toStringMap = function (m) {
        var r = {};
        m.forEach(function (v, k) { return r[k] = v; });
        return r;
    };
    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
    MapWrapper.iterable = function (m) { return m; };
    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
    return MapWrapper;
}());
/**
 * Wraps Javascript Objects
 */
var StringMapWrapper = (function () {
    function StringMapWrapper() {
    }
    StringMapWrapper.merge = function (m1, m2) {
        var m = {};
        for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
            var k = _a[_i];
            m[k] = m1[k];
        }
        for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
            var k = _c[_b];
            m[k] = m2[k];
        }
        return m;
    };
    StringMapWrapper.equals = function (m1, m2) {
        var k1 = Object.keys(m1);
        var k2 = Object.keys(m2);
        if (k1.length != k2.length) {
            return false;
        }
        for (var i = 0; i < k1.length; i++) {
            var key = k1[i];
            if (m1[key] !== m2[key]) {
                return false;
            }
        }
        return true;
    };
    return StringMapWrapper;
}());
var ListWrapper = (function () {
    function ListWrapper() {
    }
    // JS has no way to express a statically fixed size list, but dart does so we
    // keep both methods.
    ListWrapper.createFixedSize = function (size) { return new Array(size); };
    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
    ListWrapper.clone = function (array) { return array.slice(0); };
    ListWrapper.forEachWithIndex = function (array, fn) {
        for (var i = 0; i < array.length; i++) {
            fn(array[i], i);
        }
    };
    ListWrapper.first = function (array) {
        if (!array)
            return null;
        return array[0];
    };
    ListWrapper.last = function (array) {
        if (!array || array.length == 0)
            return null;
        return array[array.length - 1];
    };
    ListWrapper.indexOf = function (array, value, startIndex) {
        if (startIndex === void 0) { startIndex = 0; }
        return array.indexOf(value, startIndex);
    };
    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
    ListWrapper.reversed = function (array) {
        var a = ListWrapper.clone(array);
        return a.reverse();
    };
    ListWrapper.concat = function (a, b) { return a.concat(b); };
    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
    ListWrapper.removeAt = function (list, index) {
        var res = list[index];
        list.splice(index, 1);
        return res;
    };
    ListWrapper.removeAll = function (list, items) {
        for (var i = 0; i < items.length; ++i) {
            var index = list.indexOf(items[i]);
            list.splice(index, 1);
        }
    };
    ListWrapper.remove = function (list, el) {
        var index = list.indexOf(el);
        if (index > -1) {
            list.splice(index, 1);
            return true;
        }
        return false;
    };
    ListWrapper.clear = function (list) { list.length = 0; };
    ListWrapper.isEmpty = function (list) { return list.length == 0; };
    ListWrapper.fill = function (list, value, start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = null; }
        list.fill(value, start, end === null ? list.length : end);
    };
    ListWrapper.equals = function (a, b) {
        if (a.length != b.length)
            return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    };
    ListWrapper.slice = function (l, from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = null; }
        return l.slice(from, to === null ? undefined : to);
    };
    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
    ListWrapper.sort = function (l, compareFn) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* isPresent */])(compareFn)) {
            l.sort(compareFn);
        }
        else {
            l.sort();
        }
    };
    ListWrapper.toString = function (l) { return l.toString(); };
    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
    ListWrapper.maximum = function (list, predicate) {
        if (list.length == 0) {
            return null;
        }
        var solution = null;
        var maxValue = -Infinity;
        for (var index = 0; index < list.length; index++) {
            var candidate = list[index];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["g" /* isBlank */])(candidate)) {
                continue;
            }
            var candidateValue = predicate(candidate);
            if (candidateValue > maxValue) {
                solution = candidate;
                maxValue = candidateValue;
            }
        }
        return solution;
    };
    ListWrapper.flatten = function (list) {
        var target = [];
        _flattenArray(list, target);
        return target;
    };
    ListWrapper.addAll = function (list, source) {
        for (var i = 0; i < source.length; i++) {
            list.push(source[i]);
        }
    };
    return ListWrapper;
}());
function _flattenArray(source, target) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* isPresent */])(source)) {
        for (var i = 0; i < source.length; i++) {
            var item = source[i];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["h" /* isArray */])(item)) {
                _flattenArray(item, target);
            }
            else {
                target.push(item);
            }
        }
    }
    return target;
}
function isListLikeIterable(obj) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["c" /* isJsObject */])(obj))
        return false;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["h" /* isArray */])(obj) ||
        (!(obj instanceof Map) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["i" /* getSymbolIterator */])() in obj); // JS Iterable have a Symbol.iterator prop
}
function areIterablesEqual(a, b, comparator) {
    var iterator1 = a[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["i" /* getSymbolIterator */])()]();
    var iterator2 = b[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["i" /* getSymbolIterator */])()]();
    while (true) {
        var item1 = iterator1.next();
        var item2 = iterator2.next();
        if (item1.done && item2.done)
            return true;
        if (item1.done || item2.done)
            return false;
        if (!comparator(item1.value, item2.value))
            return false;
    }
}
function iterateListLike(obj, fn) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["h" /* isArray */])(obj)) {
        for (var i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        var iterator = obj[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["i" /* getSymbolIterator */])()]();
        var item;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}
//# sourceMappingURL=collection.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/facade/lang.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export scheduleMicroTask */
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return _global; });
/* unused harmony export getTypeNameForDebugging */
/* harmony export (immutable) */ exports["d"] = isPresent;
/* harmony export (immutable) */ exports["g"] = isBlank;
/* unused harmony export isBoolean */
/* unused harmony export isNumber */
/* harmony export (immutable) */ exports["a"] = isString;
/* unused harmony export isFunction */
/* unused harmony export isType */
/* unused harmony export isStringMap */
/* unused harmony export isStrictStringMap */
/* harmony export (immutable) */ exports["h"] = isArray;
/* unused harmony export isDate */
/* unused harmony export noop */
/* unused harmony export stringify */
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return StringWrapper; });
/* unused harmony export StringJoiner */
/* unused harmony export NumberWrapper */
/* unused harmony export RegExp */
/* unused harmony export FunctionWrapper */
/* unused harmony export looseIdentical */
/* unused harmony export getMapKey */
/* unused harmony export normalizeBlank */
/* unused harmony export normalizeBool */
/* harmony export (immutable) */ exports["c"] = isJsObject;
/* unused harmony export print */
/* unused harmony export warn */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Json; });
/* unused harmony export setValueOnPath */
/* harmony export (immutable) */ exports["i"] = getSymbolIterator;
/* unused harmony export evalExpression */
/* unused harmony export isPrimitive */
/* unused harmony export hasConstructor */
/* unused harmony export escape */
/* unused harmony export escapeRegExp */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = self;
    }
    else {
        globalScope = global;
    }
}
else {
    globalScope = window;
}
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var _global = globalScope;

function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}
// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert = function assert(condition) {
    // TODO: to be fixed properly via #2830, noop for now
};
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isBlank(obj) {
    return obj === undefined || obj === null;
}
function isBoolean(obj) {
    return typeof obj === 'boolean';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isString(obj) {
    return typeof obj === 'string';
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isType(obj) {
    return isFunction(obj);
}
function isStringMap(obj) {
    return typeof obj === 'object' && obj !== null;
}
var STRING_MAP_PROTO = Object.getPrototypeOf({});
function isStrictStringMap(obj) {
    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}
function isArray(obj) {
    return Array.isArray(obj);
}
function isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
}
function noop() { }
function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token === undefined || token === null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return token.overriddenName;
    }
    if (token.name) {
        return token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
var StringWrapper = (function () {
    function StringWrapper() {
    }
    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
    StringWrapper.equals = function (s, s2) { return s === s2; };
    StringWrapper.stripLeft = function (s, charVal) {
        if (s && s.length) {
            var pos = 0;
            for (var i = 0; i < s.length; i++) {
                if (s[i] != charVal)
                    break;
                pos++;
            }
            s = s.substring(pos);
        }
        return s;
    };
    StringWrapper.stripRight = function (s, charVal) {
        if (s && s.length) {
            var pos = s.length;
            for (var i = s.length - 1; i >= 0; i--) {
                if (s[i] != charVal)
                    break;
                pos--;
            }
            s = s.substring(0, pos);
        }
        return s;
    };
    StringWrapper.replace = function (s, from, replace) {
        return s.replace(from, replace);
    };
    StringWrapper.replaceAll = function (s, from, replace) {
        return s.replace(from, replace);
    };
    StringWrapper.slice = function (s, from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = null; }
        return s.slice(from, to === null ? undefined : to);
    };
    StringWrapper.replaceAllMapped = function (s, from, cb) {
        return s.replace(from, function () {
            var matches = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                matches[_i - 0] = arguments[_i];
            }
            // Remove offset & string from the result array
            matches.splice(-2, 2);
            // The callback receives match, p1, ..., pn
            return cb(matches);
        });
    };
    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
    StringWrapper.compare = function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return StringWrapper;
}());
var StringJoiner = (function () {
    function StringJoiner(parts) {
        if (parts === void 0) { parts = []; }
        this.parts = parts;
    }
    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
    StringJoiner.prototype.toString = function () { return this.parts.join(''); };
    return StringJoiner;
}());
var NumberWrapper = (function () {
    function NumberWrapper() {
    }
    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
    NumberWrapper.equal = function (a, b) { return a === b; };
    NumberWrapper.parseIntAutoRadix = function (text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    };
    NumberWrapper.parseInt = function (text, radix) {
        if (radix == 10) {
            if (/^(\-|\+)?[0-9]+$/.test(text)) {
                return parseInt(text, radix);
            }
        }
        else if (radix == 16) {
            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                return parseInt(text, radix);
            }
        }
        else {
            var result = parseInt(text, radix);
            if (!isNaN(result)) {
                return result;
            }
        }
        throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
    };
    Object.defineProperty(NumberWrapper, "NaN", {
        get: function () { return NaN; },
        enumerable: true,
        configurable: true
    });
    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
    NumberWrapper.isNaN = function (value) { return isNaN(value); };
    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
    return NumberWrapper;
}());
var RegExp = _global.RegExp;
var FunctionWrapper = (function () {
    function FunctionWrapper() {
    }
    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
    FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
    return FunctionWrapper;
}());
// JS has NaN !== NaN
function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
function getMapKey(value) {
    return value;
}
function normalizeBlank(obj) {
    return isBlank(obj) ? null : obj;
}
function normalizeBool(obj) {
    return isBlank(obj) ? false : obj;
}
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
function print(obj) {
    console.log(obj);
}
function warn(obj) {
    console.warn(obj);
}
// Can't be all uppercase as our transpiler would think it is a special directive...
var Json = (function () {
    function Json() {
    }
    Json.parse = function (s) { return _global.JSON.parse(s); };
    Json.stringify = function (data) {
        // Dart doesn't take 3 arguments
        return _global.JSON.stringify(data, null, 2);
    };
    return Json;
}());
function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
        var name = parts.shift();
        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
            obj = obj[name];
        }
        else {
            obj = obj[name] = {};
        }
    }
    if (obj === undefined || obj === null) {
        obj = {};
    }
    obj[parts.shift()] = value;
}
var _symbolIterator = null;
function getSymbolIterator() {
    if (isBlank(_symbolIterator)) {
        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
            _symbolIterator = Symbol.iterator;
        }
        else {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    Map.prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}
function evalExpression(sourceUrl, expr, declarations, vars) {
    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
    var fnArgNames = [];
    var fnArgValues = [];
    for (var argName in vars) {
        fnArgNames.push(argName);
        fnArgValues.push(vars[argName]);
    }
    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
}
function isPrimitive(obj) {
    return !isJsObject(obj);
}
function hasConstructor(value, type) {
    return value.constructor === type;
}
function escape(s) {
    return _global.encodeURI(s);
}
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=lang.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ },

/***/ "./node_modules/@angular/http/src/headers.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_facade_collection__ = __webpack_require__("./node_modules/@angular/http/src/facade/collection.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Headers; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @experimental
 */
var Headers = (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers._headers.forEach(function (value, name) {
                var lcName = name.toLowerCase();
                _this._headers.set(lcName, value);
                _this.mayBeSetNormalizedName(name);
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var value = headers[name];
            var lcName = name.toLowerCase();
            _this._headers.set(lcName, Array.isArray(value) ? value : [value]);
            _this.mayBeSetNormalizedName(name);
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        this.set(name, values === null ? [value] : values.concat([value]));
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return __WEBPACK_IMPORTED_MODULE_0__src_facade_collection__["a" /* MapWrapper */].values(this._normalizedNames); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        var strValue = Array.isArray(value) ? value.join(',') : value;
        this._headers.set(name.toLowerCase(), [strValue]);
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return __WEBPACK_IMPORTED_MODULE_0__src_facade_collection__["a" /* MapWrapper */].values(this._headers); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());
//# sourceMappingURL=headers.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/http.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_facade_lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_request_options__ = __webpack_require__("./node_modules/@angular/http/src/base_request_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_request__ = __webpack_require__("./node_modules/@angular/http/src/static_request.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Jsonp; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(providedOpts)) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["b" /* RequestOptions */]({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["d" /* isPresent */])(method)) {
        return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["b" /* RequestOptions */]({ method: method, url: url }));
    }
    else {
        return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["b" /* RequestOptions */]({ url: url }));
    }
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import 'rxjs/add/operator/map'
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @experimental
 */
var Http = (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isString */])(url)) {
            responseObservable = httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get, url)));
        }
        else if (url instanceof __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */]) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["b" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["b" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["b" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Options, url)));
    };
    Http.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Http.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_4__interfaces__["b" /* ConnectionBackend */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__base_request_options__["b" /* RequestOptions */], },
    ];
    return Http;
}());
/**
 * @experimental
 */
var Jsonp = (function (_super) {
    __extends(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        _super.call(this, backend, defaultOptions);
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isString */])(url)) {
            url =
                new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get, url));
        }
        if (url instanceof __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */]) {
            if (url.method !== __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_4__interfaces__["b" /* ConnectionBackend */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__base_request_options__["b" /* RequestOptions */], },
    ];
    return Jsonp;
}(Http));
//# sourceMappingURL=http.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/http_module.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backends_browser_jsonp__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_jsonp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backends_browser_xhr__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_xhr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__ = __webpack_require__("./node_modules/@angular/http/src/backends/jsonp_backend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__ = __webpack_require__("./node_modules/@angular/http/src/backends/xhr_backend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_request_options__ = __webpack_require__("./node_modules/@angular/http/src/base_request_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_response_options__ = __webpack_require__("./node_modules/@angular/http/src/base_response_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http__ = __webpack_require__("./node_modules/@angular/http/src/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* unused harmony export _createDefaultCookieXSRFStrategy */
/* unused harmony export httpFactory */
/* unused harmony export jsonpFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return JsonpModule; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









function _createDefaultCookieXSRFStrategy() {
    return new __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["a" /* CookieXSRFStrategy */]();
}
function httpFactory(xhrBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_7__http__["a" /* Http */](xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_7__http__["b" /* Jsonp */](jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @experimental
 */
var HttpModule = (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: __WEBPACK_IMPORTED_MODULE_7__http__["a" /* Http */], useFactory: httpFactory, deps: [__WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* RequestOptions */]] },
                        __WEBPACK_IMPORTED_MODULE_2__backends_browser_xhr__["a" /* BrowserXhr */],
                        { provide: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* BaseRequestOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["b" /* ResponseOptions */], useClass: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["a" /* BaseResponseOptions */] },
                        __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["b" /* XHRBackend */],
                        { provide: __WEBPACK_IMPORTED_MODULE_8__interfaces__["c" /* XSRFStrategy */], useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = [];
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @experimental
 */
var JsonpModule = (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: __WEBPACK_IMPORTED_MODULE_7__http__["b" /* Jsonp */], useFactory: jsonpFactory, deps: [__WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["a" /* JSONPBackend */], __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* RequestOptions */]] },
                        __WEBPACK_IMPORTED_MODULE_1__backends_browser_jsonp__["a" /* BrowserJsonp */],
                        { provide: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* BaseRequestOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["b" /* ResponseOptions */], useClass: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["a" /* BaseResponseOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["a" /* JSONPBackend */], useClass: __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["c" /* JSONPBackend_ */] },
                    ],
                },] },
    ];
    /** @nocollapse */
    JsonpModule.ctorParameters = [];
    return JsonpModule;
}());
//# sourceMappingURL=http_module.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/http_utils.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_facade_lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_facade_lang__["c"]; });
/* harmony export (immutable) */ exports["c"] = normalizeMethodName;
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return isSuccess; });
/* harmony export (immutable) */ exports["d"] = getResponseURL;
/* harmony export (immutable) */ exports["b"] = stringToArrayBuffer;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function normalizeMethodName(method) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_facade_lang__["a" /* isString */])(method)) {
        var originalMethod = method;
        method = method
            .replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); });
        method = __WEBPACK_IMPORTED_MODULE_1__enums__["b" /* RequestMethod */][method];
        if (typeof method !== 'number')
            throw new Error("Invalid request method. The method \"" + originalMethod + "\" is not supported.");
    }
    return method;
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

//# sourceMappingURL=http_utils.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__backends_browser_xhr__ = __webpack_require__("./node_modules/@angular/http/src/backends/browser_xhr.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__backends_browser_xhr__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__backends_jsonp_backend__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backends_jsonp_backend__ = __webpack_require__("./node_modules/@angular/http/src/backends/jsonp_backend.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__backends_jsonp_backend__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__ = __webpack_require__("./node_modules/@angular/http/src/backends/xhr_backend.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__base_request_options__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__base_request_options__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_request_options__ = __webpack_require__("./node_modules/@angular/http/src/base_request_options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_response_options__ = __webpack_require__("./node_modules/@angular/http/src/base_response_options.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__base_response_options__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__base_response_options__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "o", function() { return __WEBPACK_IMPORTED_MODULE_6__headers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http__ = __webpack_require__("./node_modules/@angular/http/src/http.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "p", function() { return __WEBPACK_IMPORTED_MODULE_7__http__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__http__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_module__ = __webpack_require__("./node_modules/@angular/http/src/http_module.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "r", function() { return __WEBPACK_IMPORTED_MODULE_8__http_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__http_module__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interfaces__ = __webpack_require__("./node_modules/@angular/http/src/interfaces.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "t", function() { return __WEBPACK_IMPORTED_MODULE_9__interfaces__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "u", function() { return __WEBPACK_IMPORTED_MODULE_9__interfaces__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "v", function() { return __WEBPACK_IMPORTED_MODULE_9__interfaces__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_request__ = __webpack_require__("./node_modules/@angular/http/src/static_request.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "w", function() { return __WEBPACK_IMPORTED_MODULE_10__static_request__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_response__ = __webpack_require__("./node_modules/@angular/http/src/static_response.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "x", function() { return __WEBPACK_IMPORTED_MODULE_11__static_response__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__url_search_params__ = __webpack_require__("./node_modules/@angular/http/src/url_search_params.js");
/* harmony reexport (binding) */ __webpack_require__.d(exports, "y", function() { return __WEBPACK_IMPORTED_MODULE_12__url_search_params__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "z", function() { return __WEBPACK_IMPORTED_MODULE_12__url_search_params__["b"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/interfaces.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return XSRFStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @experimental
 */
var ConnectionBackend = (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @experimental
 */
var Connection = (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @experimental
 */
var XSRFStrategy = (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());
//# sourceMappingURL=interfaces.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/static_request.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_facade_lang__ = __webpack_require__("./node_modules/@angular/http/src/facade/lang.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__body__ = __webpack_require__("./node_modules/@angular/http/src/body.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums__ = __webpack_require__("./node_modules/@angular/http/src/enums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headers__ = __webpack_require__("./node_modules/@angular/http/src/headers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_utils__ = __webpack_require__("./node_modules/@angular/http/src/http_utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__url_search_params__ = __webpack_require__("./node_modules/@angular/http/src/url_search_params.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Request; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @experimental
 */
var Request = (function (_super) {
    __extends(Request, _super);
    function Request(requestOptions) {
        _super.call(this);
        // TODO: assert that url is present
        var url = requestOptions.url;
        this.url = requestOptions.url;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_facade_lang__["d" /* isPresent */])(requestOptions.search)) {
            var search = requestOptions.search.toString();
            if (search.length > 0) {
                var prefix = '?';
                if (__WEBPACK_IMPORTED_MODULE_0__src_facade_lang__["e" /* StringWrapper */].contains(this.url, '?')) {
                    prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                this.url = url + prefix + search;
            }
        }
        this._body = requestOptions.body;
        this.method = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__http_utils__["c" /* normalizeMethodName */])(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        // TODO(jeffbcross): implement behavior
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__headers__["a" /* Headers */](requestOptions.headers);
        this.contentType = this.detectContentType();
        this.withCredentials = requestOptions.withCredentials;
        this.responseType = requestOptions.responseType;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].JSON;
            case 'application/x-www-form-urlencoded':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM;
            case 'multipart/form-data':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].TEXT;
            case 'application/octet-stream':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].NONE;
        }
        else if (this._body instanceof __WEBPACK_IMPORTED_MODULE_5__url_search_params__["b" /* URLSearchParams */]) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM;
        }
        else if (this._body instanceof FormData) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM_DATA;
        }
        else if (this._body instanceof Blob) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].BLOB;
        }
        else if (this._body instanceof ArrayBuffer) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body == 'object') {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].JSON;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].JSON:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM_DATA:
                return this._body;
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].TEXT:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].BLOB:
                return this.blob();
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(__WEBPACK_IMPORTED_MODULE_1__body__["a" /* Body */]));
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w['FormData'] || noop;
var Blob = w['Blob'] || noop;
var ArrayBuffer = w['ArrayBuffer'] || noop;
//# sourceMappingURL=static_request.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/static_response.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body__ = __webpack_require__("./node_modules/@angular/http/src/body.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Response; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @experimental
 */
var Response = (function (_super) {
    __extends(Response, _super);
    function Response(responseOptions) {
        _super.call(this);
        this._body = responseOptions.body;
        this.status = responseOptions.status;
        this.ok = (this.status >= 200 && this.status <= 299);
        this.statusText = responseOptions.statusText;
        this.headers = responseOptions.headers;
        this.type = responseOptions.type;
        this.url = responseOptions.url;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(__WEBPACK_IMPORTED_MODULE_0__body__["a" /* Body */]));
//# sourceMappingURL=static_response.js.map

/***/ },

/***/ "./node_modules/@angular/http/src/url_search_params.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return URLSearchParams; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @experimental
 **/
var QueryEncoder = (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @experimental
 */
var URLSearchParams = (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());
//# sourceMappingURL=url_search_params.js.map

/***/ },

/***/ "./node_modules/angular2-universal/browser/browser.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./node_modules/angular2-universal/browser/env.js"));
__export(__webpack_require__("./node_modules/angular2-universal/browser/universal-module.js"));
__export(__webpack_require__("./node_modules/angular2-universal/common/index.js"));


/***/ },

/***/ "./node_modules/angular2-universal/browser/env.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

exports.isBrowser = true;
exports.isNode = false;


/***/ },

/***/ "./node_modules/angular2-universal/browser/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var browserUniversal = __webpack_require__("./node_modules/angular2-universal/browser/browser.js");
__export(__webpack_require__("./node_modules/angular2-universal/browser/browser.js"));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = browserUniversal;


/***/ },

/***/ "./node_modules/angular2-universal/browser/universal-module.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var platform_browser_dynamic_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(1);
var prebootClient;
try {
    prebootClient = __webpack_require__("./node_modules/preboot/__build/src/browser/preboot_browser.js");
    prebootClient = (prebootClient && prebootClient.prebootClient) || prebootClient;
}
catch (e) { }
function _randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 25));
}
function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
}
var OpaqueToken = (function () {
    function OpaqueToken(_desc) {
        this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
    OpaqueToken = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String])
    ], OpaqueToken);
    return OpaqueToken;
}());
exports.OpaqueToken = OpaqueToken;
var SharedStylesHost = platform_browser_1.__platform_browser_private__.SharedStylesHost;
exports.UNIVERSAL_CACHE = new OpaqueToken('UNIVERSAL_CACHE');
var UniversalModule = (function () {
    function UniversalModule(sharedStylesHost) {
        var domStyles = document.head.querySelectorAll('style');
        var styles = Array.prototype.slice.call(domStyles)
            .filter(function (style) { return style.innerText.indexOf('_ng') !== -1; })
            .map(function (style) { return style.innerText; });
        styles.forEach(function (style) {
            sharedStylesHost._stylesSet.add(style);
            sharedStylesHost._styles.push(style);
        });
    }
    UniversalModule.withConfig = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: UniversalModule,
            providers: []
        };
    };
    UniversalModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            providers: [
                {
                    provide: exports.UNIVERSAL_CACHE,
                    useFactory: function () {
                        var _win = window;
                        var CACHE = Object.assign({}, _win.UNIVERSAL_CACHE || {});
                        delete _win.UNIVERSAL_CACHE;
                        return CACHE;
                    }
                },
                {
                    provide: core_1.APP_ID,
                    useFactory: function () {
                        var _win = window;
                        var CACHE = _win.UNIVERSAL_CACHE || {};
                        var appId = null;
                        if (CACHE.APP_ID) {
                            appId = CACHE.APP_ID;
                        }
                        else {
                            appId = _appIdRandomProviderFactory();
                        }
                        return appId;
                    },
                    deps: []
                },
                {
                    multi: true,
                    provide: core_1.APP_BOOTSTRAP_LISTENER,
                    useValue: function () {
                        var _win = window;
                        if (_win && prebootClient) {
                            setTimeout(function () { return prebootClient().complete(); });
                        }
                    }
                }
            ]
        }),
        __param(0, core_1.Inject(SharedStylesHost)), 
        __metadata('design:paramtypes', [Object])
    ], UniversalModule);
    return UniversalModule;
}());
exports.UniversalModule = UniversalModule;
function platformUniversalDynamic(extraProviders) {
    var platform = core_1.createPlatformFactory(platform_browser_dynamic_1.platformBrowserDynamic, 'universalBrowserDynamic', [])(extraProviders);
    return platform;
}
exports.platformUniversalDynamic = platformUniversalDynamic;
;


/***/ },

/***/ "./node_modules/angular2-universal/common/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

exports.zoneProps = new WeakMap();
var ZoneStore = (function () {
    function ZoneStore(props) {
        if (props === void 0) { props = Object.create(null); }
        var store = new Map();
        try {
            Object.keys(props).forEach(function (prop) {
                store.set(prop, props[prop]);
            });
        }
        catch (e) {
            console.log('e', e);
        }
        exports.zoneProps.set(this, store);
        this.zone = Zone.current.fork({
            name: 'ZoneStore',
            properties: { 'ZoneStore': this }
        });
    }
    ZoneStore.prototype.clear = function () {
        exports.zoneProps.get(this).clear();
    };
    ZoneStore.prototype.setMap = function (obj) {
        var props = exports.zoneProps.get(this);
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var prop = obj_1[_i];
            props.set(prop, obj);
        }
    };
    ZoneStore.prototype.get = function (key) {
        var props = exports.zoneProps.get(this);
        if (this.has(key)) {
            return props.get(key);
        }
    };
    ZoneStore.prototype.set = function (key, value) {
        var props = exports.zoneProps.get(this);
        if (this.has(key)) {
            props.set(key, value);
            return this;
        }
    };
    ZoneStore.prototype.has = function (key) {
        var props = exports.zoneProps.get(this);
        return props.has && props.has(key);
    };
    return ZoneStore;
}());
exports.ZoneStore = ZoneStore;


/***/ },

/***/ "./node_modules/preboot/__build/src/browser/preboot_browser.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * This is the entry point for the client side preboot library. At a high level, this library
 * is used to facilitate the switch from the server view to the client view. Specifically that
 * means:
 *
 *    1. Replay stored server view events on client view
 *    2. Switch buffer from server view to client view
 *    3. Reset focus on client view
 */

// the idea here is that preboot is a global value on the window that is used by the client
var preboot = prebootClient();
// wrapper function used to contain all the preboot client functionality
function prebootClient() {
    // used to cache map from server node key to associated client node
    var clientNodeCache = {};
    /**
     * External code call this to kick off the switch from server to client
     */
    function complete(opts) {
        opts = opts || {};
        var theWindow = (opts.window || window);
        var prebootData = theWindow.prebootData || {};
        var apps = prebootData.apps || [];
        // loop through each of the preboot apps
        apps.forEach(function (appData) { return completeApp(opts, appData); });
        // once all events have been replayed and buffers switched, then we cleanup preboot
        if (!opts.noCleanup) {
            cleanup(theWindow, prebootData);
        }
    }
    /**
     * Complete a particular app
     * @param opts
     * @param appData
     */
    function completeApp(opts, appData) {
        opts = opts || {};
        appData = (appData || {});
        var theWindow = (opts.window || window);
        var root = (appData.root || {});
        var events = appData.events || [];
        // if a specific app root set and it doesn't equal the server selector, then don't do anything
        if (opts.appRoot && opts.appRoot !== root.serverSelector) {
            return;
        }
        // some client side frameworks (like Angular 1 w UI Router) will replace
        // elements, so we need to re-get client root just to be safe
        root.clientNode = theWindow.document.querySelector(root.clientSelector);
        // replay all the events from the server view onto the client view
        events.forEach(function (event) { return replayEvent(appData, event); });
        // if we are buffering, switch the buffers
        switchBuffer(theWindow, appData);
    }
    /**
     * Replay a particular event. The trick here is finding the appropriate client
     * node where the event is to be dispatched that matches up with the server node
     * where the event came from originally.
     */
    function replayEvent(appData, prebootEvent) {
        appData = (appData || {});
        prebootEvent = (prebootEvent || {});
        var event = prebootEvent.event;
        var serverNode = prebootEvent.node || {};
        var nodeKey = prebootEvent.nodeKey;
        var clientNode = findClientNode({
            root: appData.root,
            node: serverNode,
            nodeKey: nodeKey
        });
        // if client node can't be found, log a warning
        if (!clientNode) {
            console.warn('Trying to dispatch event ' + event.type +
                ' to node ' + nodeKey + ' but could not find client node. ' +
                'Server node is: ');
            console.log(serverNode);
            return;
        }
        // now dispatch events and whatnot to the client node
        clientNode.checked = serverNode.checked ? true : undefined;
        clientNode.selected = serverNode.selected ? true : undefined;
        clientNode.value = serverNode.value;
        clientNode.dispatchEvent(event);
    }
    /**
     * Hide the server buffer and show the client buffer
     */
    function switchBuffer(window, appData) {
        appData = (appData || {});
        var root = (appData.root || {});
        var serverView = root.serverNode;
        var clientView = root.clientNode;
        // if no client view or the server view is the body or client
        // and server view are the same, then don't do anything and return
        if (!clientView || !serverView || serverView === clientView || serverView.nodeName === 'BODY') {
            return;
        }
        // do a try-catch for case where serverView is an object but NOT of type Element
        try {
            // get the server view display mode
            var display = window
                .getComputedStyle(serverView)
                .getPropertyValue('display') || 'block';
            // first remove the server view
            serverView.remove ?
                serverView.remove() :
                serverView.style.display = 'none';
            // now add the client view
            clientView.style.display = display;
        }
        catch (ex) {
            console.error(ex);
        }
    }
    /**
     * This function does three things to cleanup preboot:
     *    1. Set focus (and selection if a text box/text area) within a form element
     *    2. Remove existing event listeners
     *    3. Delete data from memory
     */
    function cleanup(window, prebootData) {
        prebootData = prebootData || {};
        var listeners = prebootData.listeners || [];
        // set focus on the active node AFTER a small delay to ensure buffer switched
        setTimeout(function () {
            setFocus(prebootData.activeNode);
        }, 1);
        // remove all event listeners
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
            var listener = listeners_1[_i];
            listener.node.removeEventListener(listener.eventName, listener.handler);
        }
        // remove the freeze overlay if it exists
        removeOverlay(window);
        // finally clear out the data stored for each app
        prebootData.apps = [];
        clientNodeCache = {};
    }
    /**
     * Remove the overlay if it exists
     */
    function removeOverlay(window) {
        var prebootOverlay = window.document.body.querySelector('#prebootOverlay');
        if (prebootOverlay) {
            prebootOverlay.style.display = 'none';
        }
    }
    /**
     * Set focus on a given active node element
     */
    function setFocus(activeNode) {
        // only do something if there is an active node
        if (!activeNode || !activeNode.node || !activeNode.nodeKey) {
            return;
        }
        // find the client node in the new client view
        var clientNode = findClientNode(activeNode);
        if (clientNode) {
            // set focus on the client node
            clientNode.focus();
            // set selection if a modern browser (i.e. IE9+, etc.)
            var selection = activeNode.selection;
            if (clientNode.setSelectionRange && selection) {
                clientNode.setSelectionRange(selection.start, selection.end, selection.direction);
            }
        }
    }
    /**
     * Given a node from the server rendered view, find the equivalent
     * node in the client rendered view. We do this by the following approach:
     *      1. take the name of the server node tag (ex. div or h1 or input)
     *      2. add either id (ex. div#myid) or class names (ex. div.class1.class2)
     *      3. use that value as a selector to get all the matching client nodes
     *      4. loop through all client nodes found and for each generate a key value
     *      5. compare the client key to the server key; once there is a match, we have our client node
     *
     * NOTE: this only works when the client view is almost exactly the same as the server
     * view. we will need an improvement here in the future to account for situations
     * where the client view is different in structure from the server view
     */
    function findClientNode(serverNodeContext) {
        serverNodeContext = (serverNodeContext || {});
        var serverNode = serverNodeContext.node;
        var root = serverNodeContext.root;
        // if no server or client root, don't do anything
        if (!root || !root.serverNode || !root.clientNode) {
            return null;
        }
        // we use the string of the node to compare to the client node & as key in cache
        var serverNodeKey = serverNodeContext.nodeKey || getNodeKey(serverNodeContext);
        // if client node already in cache, return it
        if (clientNodeCache[serverNodeKey]) {
            return clientNodeCache[serverNodeKey];
        }
        // get the selector for client nodes
        var className = (serverNode.className || '').replace('ng-binding', '').trim();
        var selector = serverNode.tagName;
        if (serverNode.id) {
            selector += '#' + serverNode.id;
        }
        else if (className) {
            selector += '.' + className.replace(/ /g, '.');
        }
        // select all possible client nodes and look through them to try and find a match
        var rootClientNode = root.clientNode;
        var clientNodes = rootClientNode.querySelectorAll(selector) || [];
        // if nothing found, then just try the tag name as a final option
        if (!clientNodes.length) {
            clientNodes = rootClientNode.querySelectorAll(serverNode.tagName) || [];
        }
        for (var _i = 0, clientNodes_1 = clientNodes; _i < clientNodes_1.length; _i++) {
            var clientNode = clientNodes_1[_i];
            // get the key for the client node
            var clientNodeKey = getNodeKey({ root: root, node: clientNode });
            // if the client node key is exact match for the server node key, then we found the client node
            if (clientNodeKey === serverNodeKey) {
                clientNodeCache[serverNodeKey] = clientNode;
                return clientNode;
            }
        }
        // if we get here and there is one clientNode, use it as a fallback
        if (clientNodes.length === 1) {
            clientNodeCache[serverNodeKey] = clientNodes[0];
            return clientNodes[0];
        }
        // if we get here it means we couldn't find the client node so give the user a warning
        console.warn('No matching client node found for ' + serverNodeKey +
            '. You can fix this by assigning this element a unique id attribute.');
        return null;
    }
    /**
     * Attempt to generate key from node position in the DOM
     *
     * NOTE: this function is duplicated in preboot_inline.ts and must be
     * kept in sync. It is duplicated for right now since we are trying
     * to keep all inline code separated and distinct (i.e. without imports)
     */
    function getNodeKey(nodeContext) {
        var ancestors = [];
        var root = nodeContext.root;
        var node = nodeContext.node;
        var temp = node;
        // walk up the tree from the target node up to the root
        while (temp && temp !== root.serverNode && temp !== root.clientNode) {
            ancestors.push(temp);
            temp = temp.parentNode;
        }
        // note: if temp doesn't exist here it means root node wasn't found
        if (temp) {
            ancestors.push(temp);
        }
        // now go backwards starting from the root, appending the appName to unique identify the node later..
        var name = node.nodeName || 'unknown';
        var key = name + '_' + root.serverSelector;
        var len = ancestors.length;
        for (var i = (len - 1); i >= 0; i--) {
            temp = ancestors[i];
            if (temp.childNodes && i > 0) {
                for (var j = 0; j < temp.childNodes.length; j++) {
                    if (temp.childNodes[j] === ancestors[i - 1]) {
                        key += '_s' + (j + 1);
                        break;
                    }
                }
            }
        }
        return key;
    }
    return {
        complete: complete,
        completeApp: completeApp,
        replayEvent: replayEvent,
        switchBuffer: switchBuffer,
        removeOverlay: removeOverlay,
        cleanup: cleanup,
        setFocus: setFocus,
        findClientNode: findClientNode,
        getNodeKey: getNodeKey
    };
}
exports.prebootClient = prebootClient;


/***/ },

/***/ "./node_modules/rxjs/Observable.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var toSubscriber_1 = __webpack_require__("./node_modules/rxjs/util/toSubscriber.js");
var observable_1 = __webpack_require__("./node_modules/rxjs/symbol/observable.js");
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this._subscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.$$observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ },

/***/ "./node_modules/rxjs/Observer.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ },

/***/ "./node_modules/rxjs/Subscriber.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/Subscription.js");
var Observer_1 = __webpack_require__("./node_modules/rxjs/Observer.js");
var rxSubscriber_1 = __webpack_require__("./node_modules/rxjs/symbol/rxSubscriber.js");
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parent, observerOrNext, error, complete) {
        _super.call(this);
        this._parent = _parent;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            context = observerOrNext;
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (isFunction_1.isFunction(context.unsubscribe)) {
                this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = this.unsubscribe.bind(this);
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parent = this._parent;
            if (!_parent.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parent, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._error) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parent.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parent.syncErrorValue = err;
                _parent.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._complete) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._complete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._complete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parent = this._parent;
        this._context = null;
        this._parent = null;
        _parent.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ },

/***/ "./node_modules/rxjs/Subscription.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isArray_1 = __webpack_require__("./node_modules/rxjs/util/isArray.js");
var isObject_1 = __webpack_require__("./node_modules/rxjs/util/isObject.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
var tryCatch_1 = __webpack_require__("./node_modules/rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
var UnsubscriptionError_1 = __webpack_require__("./node_modules/rxjs/util/UnsubscriptionError.js");
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        this.closed = true;
        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this._subscriptions = null;
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var sub = teardown;
        switch (typeof teardown) {
            case 'function':
                sub = new Subscription(teardown);
            case 'object':
                if (sub.closed || typeof sub.unsubscribe !== 'function') {
                    return sub;
                }
                else if (this.closed) {
                    sub.unsubscribe();
                    return sub;
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var childSub = new ChildSubscription(sub, this);
        this._subscriptions = this._subscriptions || [];
        this._subscriptions.push(childSub);
        return childSub;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        // HACK: This might be redundant because of the logic in `add()`
        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
            return;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
var ChildSubscription = (function (_super) {
    __extends(ChildSubscription, _super);
    function ChildSubscription(_innerSub, _parent) {
        _super.call(this);
        this._innerSub = _innerSub;
        this._parent = _parent;
    }
    ChildSubscription.prototype._unsubscribe = function () {
        var _a = this, _innerSub = _a._innerSub, _parent = _a._parent;
        _parent.remove(this);
        _innerSub.unsubscribe();
    };
    return ChildSubscription;
}(Subscription));
exports.ChildSubscription = ChildSubscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ },

/***/ "./node_modules/rxjs/symbol/observable.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.$$observable = getSymbolObservable(root_1.root);
//# sourceMappingURL=observable.js.map

/***/ },

/***/ "./node_modules/rxjs/symbol/rxSubscriber.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var Symbol = root_1.root.Symbol;
exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
//# sourceMappingURL=rxSubscriber.js.map

/***/ },

/***/ "./node_modules/rxjs/util/UnsubscriptionError.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },

/***/ "./node_modules/rxjs/util/errorObject.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ },

/***/ "./node_modules/rxjs/util/isArray.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ },

/***/ "./node_modules/rxjs/util/isFunction.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ },

/***/ "./node_modules/rxjs/util/isObject.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ },

/***/ "./node_modules/rxjs/util/root.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * window: browser in DOM main thread
 * self: browser in WebWorker
 * global: Node.js/other
 */
exports.root = (typeof window == 'object' && window.window === window && window
    || typeof self == 'object' && self.self === self && self
    || typeof global == 'object' && global.global === global && global);
if (!exports.root) {
    throw new Error('RxJS could not find any global context (window, self, global)');
}
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ },

/***/ "./node_modules/rxjs/util/toSubscriber.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
var rxSubscriber_1 = __webpack_require__("./node_modules/rxjs/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__("./node_modules/rxjs/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ },

/***/ "./node_modules/rxjs/util/tryCatch.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ },

/***/ "./node_modules/webpack/buildin/global.js":
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },

/***/ "./src/components/body/body-cell.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__("./src/utils/index.ts");
var types_1 = __webpack_require__("./src/types/index.ts");
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
var DataTableBodyCellComponent = (function () {
    function DataTableBodyCellComponent(element) {
        this.activate = new core_1.EventEmitter();
        this.isFocused = false;
        this.element = element.nativeElement;
    }
    Object.defineProperty(DataTableBodyCellComponent.prototype, "sorts", {
        get: function () {
            return this._sorts;
        },
        set: function (val) {
            this._sorts = val;
            this.calcSortDir = this.calcSortDir(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSortActive", {
        get: function () {
            return !this.sortDir;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSortAscending", {
        get: function () {
            return this.sortDir === types_1.SortDirection.asc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSortDescending", {
        get: function () {
            return this.sortDir === types_1.SortDirection.desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "height", {
        get: function () {
            var height = this.rowHeight;
            if (isNaN(height))
                return height;
            return height + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "value", {
        get: function () {
            if (!this.row || !this.column || !this.column.prop)
                return '';
            var val = utils_1.deepValueGetter(this.row, this.column.prop);
            var userPipe = this.column.pipe;
            if (userPipe)
                return userPipe.transform(val);
            if (val !== undefined)
                return val;
            return '';
        },
        enumerable: true,
        configurable: true
    });
    DataTableBodyCellComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    DataTableBodyCellComponent.prototype.onBlur = function () {
        this.isFocused = false;
    };
    DataTableBodyCellComponent.prototype.onClick = function (event) {
        this.activate.emit({
            type: 'click',
            event: event,
            row: this.row,
            column: this.column,
            value: this.value,
            cellElement: this.element
        });
    };
    DataTableBodyCellComponent.prototype.onDblClick = function (event) {
        this.activate.emit({
            type: 'dblclick',
            event: event,
            row: this.row,
            column: this.column,
            value: this.value,
            cellElement: this.element
        });
    };
    DataTableBodyCellComponent.prototype.onKeyDown = function (event) {
        var keyCode = event.keyCode;
        var isTargetCell = event.target === this.element;
        var isAction = keyCode === utils_1.Keys.return ||
            keyCode === utils_1.Keys.down ||
            keyCode === utils_1.Keys.up ||
            keyCode === utils_1.Keys.left ||
            keyCode === utils_1.Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                column: this.column,
                value: this.value,
                cellElement: this.element
            });
        }
    };
    DataTableBodyCellComponent.prototype.onCheckboxChange = function (event) {
        this.activate.emit({
            type: 'checkbox',
            event: event,
            row: this.row,
            column: this.column,
            value: this.value,
            cellElement: this.element
        });
    };
    DataTableBodyCellComponent.prototype.calcSortDir = function (sorts) {
        var _this = this;
        if (!sorts)
            return;
        var sort = sorts.find(function (s) {
            return s.prop === _this.column.prop;
        });
        if (sort)
            return sort.dir;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableBodyCellComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableBodyCellComponent.prototype, "column", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableBodyCellComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableBodyCellComponent.prototype, "isSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], DataTableBodyCellComponent.prototype, "sorts", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableBodyCellComponent.prototype, "activate", void 0);
    __decorate([
        core_1.HostBinding('class.active'), 
        __metadata('design:type', Boolean)
    ], DataTableBodyCellComponent.prototype, "isFocused", void 0);
    __decorate([
        core_1.HostBinding('class.sort-active'), 
        __metadata('design:type', Boolean)
    ], DataTableBodyCellComponent.prototype, "isSortActive", null);
    __decorate([
        core_1.HostBinding('class.sort-asc'), 
        __metadata('design:type', Boolean)
    ], DataTableBodyCellComponent.prototype, "isSortAscending", null);
    __decorate([
        core_1.HostBinding('class.sort-desc'), 
        __metadata('design:type', Boolean)
    ], DataTableBodyCellComponent.prototype, "isSortDescending", null);
    __decorate([
        core_1.HostBinding('style.width.px'), 
        __metadata('design:type', Number)
    ], DataTableBodyCellComponent.prototype, "width", null);
    __decorate([
        core_1.HostBinding('style.height'), 
        __metadata('design:type', Object)
    ], DataTableBodyCellComponent.prototype, "height", null);
    __decorate([
        core_1.HostListener('focus'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DataTableBodyCellComponent.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DataTableBodyCellComponent.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DataTableBodyCellComponent.prototype, "onClick", null);
    __decorate([
        core_1.HostListener('dblclick', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DataTableBodyCellComponent.prototype, "onDblClick", null);
    __decorate([
        core_1.HostListener('keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DataTableBodyCellComponent.prototype, "onKeyDown", null);
    DataTableBodyCellComponent = __decorate([
        core_1.Component({
            selector: 'datatable-body-cell',
            template: "\n    <div class=\"datatable-body-cell-label\">\n      <label\n        *ngIf=\"column.checkboxable\" \n        class=\"datatable-checkbox\">\n        <input \n          type=\"checkbox\"\n          [checked]=\"isSelected\"\n          (click)=\"onCheckboxChange($event)\" \n        />\n      </label>\n      <span\n        *ngIf=\"!column.cellTemplate\"\n        [innerHTML]=\"value\">\n      </span>\n      <template\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngOutletContext]=\"{ value: value, row: row, column: column }\">\n      </template>\n    </div>\n  ",
            host: {
                class: 'datatable-body-cell'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DataTableBodyCellComponent);
    return DataTableBodyCellComponent;
}());
exports.DataTableBodyCellComponent = DataTableBodyCellComponent;


/***/ },

/***/ "./src/components/body/body-row-wrapper.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
var DataTableRowWrapperComponent = (function () {
    function DataTableRowWrapperComponent() {
        this.expanded = false;
        this.rowContextmenu = new core_1.EventEmitter(false);
    }
    DataTableRowWrapperComponent.prototype.onContextmenu = function ($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableRowWrapperComponent.prototype, "rowDetailTemplate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableRowWrapperComponent.prototype, "detailRowHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableRowWrapperComponent.prototype, "expanded", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableRowWrapperComponent.prototype, "row", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DataTableRowWrapperComponent.prototype, "rowContextmenu", void 0);
    __decorate([
        core_1.HostListener('contextmenu', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DataTableRowWrapperComponent.prototype, "onContextmenu", null);
    DataTableRowWrapperComponent = __decorate([
        core_1.Component({
            selector: 'datatable-row-wrapper',
            template: "\n    <ng-content></ng-content>\n    <div \n      *ngIf=\"expanded\"\n      [style.height.px]=\"detailRowHeight\" \n      class=\"datatable-row-detail\">\n      <template\n        *ngIf=\"rowDetailTemplate\"\n        [ngTemplateOutlet]=\"rowDetailTemplate\"\n        [ngOutletContext]=\"{ row: row }\">\n      </template>\n    </div>\n  ",
            host: {
                class: 'datatable-row-wrapper'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableRowWrapperComponent);
    return DataTableRowWrapperComponent;
}());
exports.DataTableRowWrapperComponent = DataTableRowWrapperComponent;


/***/ },

/***/ "./src/components/body/body-row.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
var utils_1 = __webpack_require__("./src/utils/index.ts");
var DataTableBodyRowComponent = (function () {
    function DataTableBodyRowComponent(element) {
        this.activate = new core_1.EventEmitter();
        this.element = element.nativeElement;
    }
    Object.defineProperty(DataTableBodyRowComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (val) {
            this._columns = val;
            this.recalculateColumns(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "innerWidth", {
        get: function () {
            return this._innerWidth;
        },
        set: function (val) {
            this._innerWidth = val;
            this.recalculateColumns();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "isEvenRow", {
        get: function () {
            return this.row.$$index % 2 === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "isOddRow", {
        get: function () {
            return this.row.$$index % 2 !== 0;
        },
        enumerable: true,
        configurable: true
    });
    DataTableBodyRowComponent.prototype.trackByGroups = function (index, colGroup) {
        return colGroup.type;
    };
    DataTableBodyRowComponent.prototype.columnTrackingFn = function (index, column) {
        return column.$$id;
    };
    DataTableBodyRowComponent.prototype.stylesByGroup = function (group) {
        var widths = this.columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'left') {
            utils_1.translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            var bodyWidth = parseInt(this.innerWidth + '', 0);
            var totalDiff = widths.total - bodyWidth;
            var offsetDiff = totalDiff - offsetX;
            var offset = (offsetDiff + utils_1.scrollbarWidth) * -1;
            utils_1.translateXY(styles, offset, 0);
        }
        return styles;
    };
    DataTableBodyRowComponent.prototype.onActivate = function (event, index) {
        event.cellIndex = index;
        event.rowElement = this.element;
        this.activate.emit(event);
    };
    DataTableBodyRowComponent.prototype.onKeyDown = function (event) {
        var keyCode = event.keyCode;
        var isTargetRow = event.target === this.element;
        var isAction = keyCode === utils_1.Keys.return ||
            keyCode === utils_1.Keys.down ||
            keyCode === utils_1.Keys.up ||
            keyCode === utils_1.Keys.left ||
            keyCode === utils_1.Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                rowElement: this.element
            });
        }
    };
    DataTableBodyRowComponent.prototype.recalculateColumns = function (val) {
        if (val === void 0) { val = this.columns; }
        var colsByPin = utils_1.columnsByPin(val);
        this.columnsByPin = utils_1.columnsByPinArr(val);
        this.columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], DataTableBodyRowComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], DataTableBodyRowComponent.prototype, "innerWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableBodyRowComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableBodyRowComponent.prototype, "offsetX", void 0);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableBodyRowComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.HostBinding('class.active'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableBodyRowComponent.prototype, "isSelected", void 0);
    __decorate([
        core_1.HostBinding('class.datatable-row-even'), 
        __metadata('design:type', Boolean)
    ], DataTableBodyRowComponent.prototype, "isEvenRow", null);
    __decorate([
        core_1.HostBinding('class.datatable-row-odd'), 
        __metadata('design:type', Boolean)
    ], DataTableBodyRowComponent.prototype, "isOddRow", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableBodyRowComponent.prototype, "activate", void 0);
    __decorate([
        core_1.HostListener('keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DataTableBodyRowComponent.prototype, "onKeyDown", null);
    DataTableBodyRowComponent = __decorate([
        core_1.Component({
            selector: 'datatable-body-row',
            template: "\n    <div\n      *ngFor=\"let colGroup of columnsByPin; let i = index; trackBy: trackByGroups\"\n      class=\"datatable-row-{{colGroup.type}} datatable-row-group\"\n      [ngStyle]=\"stylesByGroup(colGroup.type)\">\n      <datatable-body-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [isSelected]=\"isSelected\"\n        [column]=\"column\"\n        [rowHeight]=\"rowHeight\"\n        (activate)=\"onActivate($event, ii)\">\n      </datatable-body-cell>\n    </div>\n  ",
            host: {
                class: 'datatable-body-row'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DataTableBodyRowComponent);
    return DataTableBodyRowComponent;
}());
exports.DataTableBodyRowComponent = DataTableBodyRowComponent;


/***/ },

/***/ "./src/components/body/body.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__("./src/utils/index.ts");
var types_1 = __webpack_require__("./src/types/index.ts");
var scroller_component_1 = __webpack_require__("./src/components/body/scroller.component.ts");
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
var DataTableBodyComponent = (function () {
    function DataTableBodyComponent() {
        this.selected = [];
        this.scroll = new core_1.EventEmitter();
        this.page = new core_1.EventEmitter();
        this.activate = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.detailToggle = new core_1.EventEmitter();
        this.rowContextmenu = new core_1.EventEmitter(false);
        this.rowHeightsCache = new utils_1.RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = function (index, row) {
            if (this.trackByProp) {
                return row.$$index + "-" + this.trackByProp;
            }
            else {
                return row.$$index;
            }
        }.bind(this);
    }
    Object.defineProperty(DataTableBodyComponent.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (val) {
            this._pageSize = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (val) {
            this._rows = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (val) {
            this._columns = val;
            var colsByPin = utils_1.columnsByPin(val);
            this.columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (val) {
            this._offset = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "rowCount", {
        get: function () {
            return this._rowCount;
        },
        set: function (val) {
            this._rowCount = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "bodyWidth", {
        get: function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            else {
                return '100%';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "bodyHeight", {
        get: function () {
            return this._bodyHeight;
        },
        set: function (val) {
            if (this.scrollbarV) {
                this._bodyHeight = val + 'px';
            }
            else {
                this._bodyHeight = 'auto';
            }
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "selectEnabled", {
        /**
         * Returns if selection is enabled.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DataTableBodyComponent
         */
        get: function () {
            return !!this.selectionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "scrollHeight", {
        /**
         * Property that would calculate the height of scroll bar
         * based on the row heights cache for virtual scroll. Other scenarios
         * calculate scroll height automatically (as height will be undefined).
         *
         * @readonly
         * @type {number}
         * @memberOf DataTableBodyComponent
         */
        get: function () {
            if (this.scrollbarV) {
                return this.rowHeightsCache.query(this.rowCount - 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the Y offset given a new offset.
     *
     * @param {number} [offset]
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.updateOffsetY = function (offset) {
        if (this.scrollbarV && offset) {
            // First get the row Index that we need to move to.
            var rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        this.scroller.setOffset(offset || 0);
    };
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     *
     * @param {*} event
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.onBodyScroll = function (event) {
        var scrollYPos = event.scrollYPos;
        var scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    };
    /**
     * Updates the page given a direction.
     *
     * @param {string} direction
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.updatePage = function (direction) {
        var offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.floor(offset);
        }
        else if (direction === 'down') {
            offset = Math.ceil(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset: offset });
        }
    };
    /**
     * Updates the rows in the view port
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.updateRows = function () {
        var _a = this.indexes, first = _a.first, last = _a.last;
        var rowIndex = first;
        var idx = 0;
        var temp = [];
        while (rowIndex < last && rowIndex < this.rowCount) {
            var row = this.rows[rowIndex];
            if (row) {
                row.$$index = rowIndex;
                temp[idx] = row;
            }
            idx++;
            rowIndex++;
        }
        this.temp = temp;
    };
    /**
     * Calculate row height based on the expanded state of the row.
     *
     * @param {*} row the row for which the height need to be calculated.
     * @returns {number} height of the row.
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.getRowHeight = function (row) {
        // Adding detail row height if its expanded.
        return this.rowHeight +
            (row.$$expanded === 1 ? this.detailRowHeight : 0);
    };
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param {*} row The row that needs to be placed in the 2D space.
     * @returns {*} Returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.getRowsStyles = function (row) {
        var rowHeight = this.getRowHeight(row);
        var styles = {
            height: rowHeight + 'px'
        };
        if (this.scrollbarV) {
            var idx = row ? row.$$index : 0;
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            var pos = this.rowHeightsCache.query(idx - 1);
            utils_1.translateXY(styles, 0, pos);
        }
        return styles;
    };
    /**
     * Hides the loading indicator
     *
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.hideIndicator = function () {
        var _this = this;
        setTimeout(function () { return _this.loadingIndicator = false; }, 500);
    };
    /**
     * Updates the index of the rows in the viewport
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.updateIndexes = function () {
        var first = 0;
        var last = 0;
        if (this.scrollbarV) {
            // Calculation of the first and last indexes will be based on where the
            // scrollY position would be at.  The last index would be the one
            // that shows up inside the view port the last.
            var height = parseInt(this.bodyHeight, 0);
            first = this.rowHeightsCache.getRowIndex(this.offsetY);
            last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
        }
        else {
            first = Math.max(this.offset * this.pageSize, 0);
            last = Math.min((first + this.pageSize), this.rowCount);
        }
        this.indexes = { first: first, last: last };
    };
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     *
     * @returns {void}
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.refreshRowHeightCache = function () {
        if (!this.scrollbarV)
            return;
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            this.rowHeightsCache.initCache(this.rows, this.rowHeight, this.detailRowHeight);
        }
    };
    /**
     * Gets the index for the view port
     *
     * @returns {number}
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.getAdjustedViewPortIndex = function () {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        var viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV) {
            var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    };
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     *
     * @param {*} row The row for which the expansion needs to be toggled.
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.toggleRowExpansion = function (row) {
        // Capture the row index of the first row that is visible on the viewport.
        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV) {
            var detailRowHeight = this.detailRowHeight * (row.$$expanded ? -1 : 1);
            this.rowHeightsCache.update(row.$$index, detailRowHeight);
        }
        // Update the toggled row and update the heights in the cache.
        row.$$expanded ^= 1;
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    };
    /**
     * Expand/Collapse all the rows no matter what their state is.
     *
     * @param {boolean} expanded When true, all rows are expanded and when false, all rows will be collapsed.
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.toggleAllRows = function (expanded) {
        var rowExpanded = expanded ? 1 : 0;
        // Capture the row index of the first row that is visible on the viewport.
        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            row.$$expanded = rowExpanded;
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.refreshRowHeightCache();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    };
    /**
     * Recalculates the table
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.recalcLayout = function () {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableBodyComponent.prototype, "scrollbarV", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableBodyComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableBodyComponent.prototype, "loadingIndicator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableBodyComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableBodyComponent.prototype, "offsetX", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableBodyComponent.prototype, "detailRowHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableBodyComponent.prototype, "emptyMessage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableBodyComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DataTableBodyComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableBodyComponent.prototype, "rowIdentity", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableBodyComponent.prototype, "rowDetailTemplate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableBodyComponent.prototype, "selectCheck", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableBodyComponent.prototype, "trackByProp", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], DataTableBodyComponent.prototype, "pageSize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], DataTableBodyComponent.prototype, "rows", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], DataTableBodyComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], DataTableBodyComponent.prototype, "offset", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], DataTableBodyComponent.prototype, "rowCount", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableBodyComponent.prototype, "innerWidth", void 0);
    __decorate([
        core_1.HostBinding('style.width'), 
        __metadata('design:type', String)
    ], DataTableBodyComponent.prototype, "bodyWidth", null);
    __decorate([
        core_1.Input(),
        core_1.HostBinding('style.height'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], DataTableBodyComponent.prototype, "bodyHeight", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "scroll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "activate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "detailToggle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DataTableBodyComponent.prototype, "rowContextmenu", void 0);
    __decorate([
        core_1.ViewChild(scroller_component_1.ScrollerComponent), 
        __metadata('design:type', scroller_component_1.ScrollerComponent)
    ], DataTableBodyComponent.prototype, "scroller", void 0);
    DataTableBodyComponent = __decorate([
        core_1.Component({
            selector: 'datatable-body',
            template: "\n    <datatable-selection\n      #selector\n      [selected]=\"selected\"\n      [rows]=\"temp\"\n      [selectCheck]=\"selectCheck\"\n      [selectEnabled]=\"selectEnabled\"\n      [selectionType]=\"selectionType\"\n      [rowIdentity]=\"rowIdentity\"\n      (select)=\"select.emit($event)\"\n      (activate)=\"activate.emit($event)\">\n      <datatable-progress\n        *ngIf=\"loadingIndicator\">\n      </datatable-progress>\n      <datatable-scroller\n        *ngIf=\"rows?.length\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [scrollHeight]=\"scrollHeight\"\n        [scrollWidth]=\"columnGroupWidths.total\"\n        (scroll)=\"onBodyScroll($event)\">\n        <datatable-row-wrapper\n          *ngFor=\"let row of temp; let i = index; trackBy: rowTrackingFn;\"\n          [ngStyle]=\"getRowsStyles(row)\"\n          [rowDetailTemplate]=\"rowDetailTemplate\"\n          [detailRowHeight]=\"detailRowHeight\"\n          [row]=\"row\"\n          [expanded]=\"row.$$expanded === 1\"\n          (rowContextmenu)=\"rowContextmenu.emit($event)\">\n          <datatable-body-row\n            tabindex=\"-1\"\n            [isSelected]=\"selector.getRowSelected(row)\"\n            [innerWidth]=\"innerWidth\"\n            [offsetX]=\"offsetX\"\n            [columns]=\"columns\"\n            [rowHeight]=\"rowHeight\"\n            [row]=\"row\"\n            (activate)=\"selector.onActivate($event, i)\">\n          </datatable-body-row>\n        </datatable-row-wrapper>\n      </datatable-scroller>\n      <div\n        class=\"empty-row\"\n        *ngIf=\"!rows?.length\"\n        [innerHTML]=\"emptyMessage\">\n      </div>\n    </datatable-selection>\n  ",
            host: {
                class: 'datatable-body'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableBodyComponent);
    return DataTableBodyComponent;
}());
exports.DataTableBodyComponent = DataTableBodyComponent;


/***/ },

/***/ "./src/components/body/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/components/body/body.component.ts"));
__export(__webpack_require__("./src/components/body/body-cell.component.ts"));
__export(__webpack_require__("./src/components/body/body-row.component.ts"));
__export(__webpack_require__("./src/components/body/progress-bar.component.ts"));
__export(__webpack_require__("./src/components/body/scroller.component.ts"));
__export(__webpack_require__("./src/components/body/body-row-wrapper.component.ts"));
__export(__webpack_require__("./src/components/body/selection.component.ts"));


/***/ },

/***/ "./src/components/body/progress-bar.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'datatable-progress',
            template: "\n    <div class=\"progress-linear\" role=\"progressbar\">\n      <div class=\"container\">\n        <div class=\"bar\"></div>\n      </div>\n    </div>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;


/***/ },

/***/ "./src/components/body/scroller.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
var ScrollerComponent = (function () {
    function ScrollerComponent(element, renderer) {
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new core_1.EventEmitter();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this.element = element.nativeElement;
    }
    ScrollerComponent.prototype.ngOnInit = function () {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            this.parentElement = this.element.parentElement.parentElement;
            this.onScrollListener = this.renderer.listen(this.parentElement, 'scroll', this.onScrolled.bind(this));
        }
    };
    ScrollerComponent.prototype.ngOnDestroy = function () {
        if (this.scrollbarV || this.scrollbarH) {
            this.onScrollListener();
        }
    };
    ScrollerComponent.prototype.setOffset = function (offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    };
    ScrollerComponent.prototype.onScrolled = function (event) {
        var dom = event.currentTarget;
        this.scrollYPos = dom.scrollTop;
        this.scrollXPos = dom.scrollLeft;
        requestAnimationFrame(this.updateOffset.bind(this));
    };
    ScrollerComponent.prototype.updateOffset = function () {
        var direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction: direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ScrollerComponent.prototype, "scrollbarV", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ScrollerComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ScrollerComponent.prototype, "scrollHeight", void 0);
    __decorate([
        core_1.HostBinding('style.width.px'),
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ScrollerComponent.prototype, "scrollWidth", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollerComponent.prototype, "scroll", void 0);
    ScrollerComponent = __decorate([
        core_1.Component({
            selector: 'datatable-scroller',
            template: "\n    <ng-content></ng-content>\n  ",
            host: {
                class: 'datatable-scroll'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ScrollerComponent);
    return ScrollerComponent;
}());
exports.ScrollerComponent = ScrollerComponent;


/***/ },

/***/ "./src/components/body/selection.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__("./src/utils/index.ts");
var types_1 = __webpack_require__("./src/types/index.ts");
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
var DataTableSelectionComponent = (function () {
    function DataTableSelectionComponent() {
        this.activate = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
    }
    DataTableSelectionComponent.prototype.selectRow = function (event, index, row) {
        if (!this.selectEnabled)
            return;
        var chkbox = this.selectionType === types_1.SelectionType.checkbox;
        var multi = this.selectionType === types_1.SelectionType.multi;
        var multiClick = this.selectionType == types_1.SelectionType.multiClick;
        var selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = utils_1.selectRowsBetween(this.selected.slice(), this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || multiClick || chkbox) {
                selected = utils_1.selectRows(this.selected.slice(), row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = utils_1.selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = utils_1.selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        (_a = this.selected).push.apply(_a, selected);
        this.prevIndex = index;
        this.select.emit({
            selected: selected
        });
        var _a;
    };
    DataTableSelectionComponent.prototype.onActivate = function (model, index) {
        var type = model.type, event = model.event, row = model.row;
        var chkbox = this.selectionType === types_1.SelectionType.checkbox;
        var select = (!chkbox && (type === 'click' || type === 'dblclick')) ||
            (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (event.keyCode === utils_1.Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    };
    DataTableSelectionComponent.prototype.onKeyboardFocus = function (model) {
        var keyCode = model.event.keyCode;
        var shouldFocus = keyCode === utils_1.Keys.up ||
            keyCode === utils_1.Keys.down ||
            keyCode === utils_1.Keys.right ||
            keyCode === utils_1.Keys.left;
        if (shouldFocus) {
            var isCellSelection = this.selectionType === types_1.SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    };
    DataTableSelectionComponent.prototype.focusRow = function (rowElement, keyCode) {
        var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    };
    DataTableSelectionComponent.prototype.getPrevNextRow = function (rowElement, keyCode) {
        var parentElement = rowElement.parentElement;
        if (parentElement) {
            var focusElement = void 0;
            if (keyCode === utils_1.Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === utils_1.Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    };
    DataTableSelectionComponent.prototype.focusCell = function (cellElement, rowElement, keyCode, cellIndex) {
        var nextCellElement;
        if (keyCode === utils_1.Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === utils_1.Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === utils_1.Keys.up || keyCode === utils_1.Keys.down) {
            var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                var children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    };
    DataTableSelectionComponent.prototype.getRowSelected = function (row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    };
    DataTableSelectionComponent.prototype.getRowSelectedIdx = function (row, selected) {
        var _this = this;
        if (!selected || !selected.length)
            return -1;
        var rowId = this.rowIdentity(row);
        return selected.findIndex(function (r) {
            var id = _this.rowIdentity(r);
            return id === rowId;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DataTableSelectionComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DataTableSelectionComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableSelectionComponent.prototype, "selectEnabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableSelectionComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableSelectionComponent.prototype, "rowIdentity", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableSelectionComponent.prototype, "selectCheck", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableSelectionComponent.prototype, "activate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableSelectionComponent.prototype, "select", void 0);
    DataTableSelectionComponent = __decorate([
        core_1.Component({
            selector: 'datatable-selection',
            template: "\n    <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableSelectionComponent);
    return DataTableSelectionComponent;
}());
exports.DataTableSelectionComponent = DataTableSelectionComponent;


/***/ },

/***/ "./src/components/columns/column-cell.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTableColumnCellDirective = (function () {
    function DataTableColumnCellDirective(template) {
        this.template = template;
    }
    ;
    DataTableColumnCellDirective = __decorate([
        core_1.Directive({ selector: '[ngx-datatable-cell-template]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], DataTableColumnCellDirective);
    return DataTableColumnCellDirective;
}());
exports.DataTableColumnCellDirective = DataTableColumnCellDirective;


/***/ },

/***/ "./src/components/columns/column-header.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTableColumnHeaderDirective = (function () {
    function DataTableColumnHeaderDirective(template) {
        this.template = template;
    }
    ;
    DataTableColumnHeaderDirective = __decorate([
        core_1.Directive({ selector: '[ngx-datatable-header-template]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], DataTableColumnHeaderDirective);
    return DataTableColumnHeaderDirective;
}());
exports.DataTableColumnHeaderDirective = DataTableColumnHeaderDirective;


/***/ },

/***/ "./src/components/columns/column.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var column_header_directive_1 = __webpack_require__("./src/components/columns/column-header.directive.ts");
var column_cell_directive_1 = __webpack_require__("./src/components/columns/column-cell.directive.ts");
var DataTableColumnDirective = (function () {
    function DataTableColumnDirective() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableColumnDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableColumnDirective.prototype, "prop", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableColumnDirective.prototype, "frozenLeft", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableColumnDirective.prototype, "frozenRight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableColumnDirective.prototype, "flexGrow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableColumnDirective.prototype, "resizeable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], DataTableColumnDirective.prototype, "comparator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableColumnDirective.prototype, "pipe", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableColumnDirective.prototype, "sortable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableColumnDirective.prototype, "draggable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableColumnDirective.prototype, "canAutoResize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableColumnDirective.prototype, "minWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableColumnDirective.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableColumnDirective.prototype, "maxWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableColumnDirective.prototype, "checkboxable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableColumnDirective.prototype, "headerCheckboxable", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(column_cell_directive_1.DataTableColumnCellDirective, { read: core_1.TemplateRef }), 
        __metadata('design:type', core_1.TemplateRef)
    ], DataTableColumnDirective.prototype, "cellTemplate", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(column_header_directive_1.DataTableColumnHeaderDirective, { read: core_1.TemplateRef }), 
        __metadata('design:type', core_1.TemplateRef)
    ], DataTableColumnDirective.prototype, "headerTemplate", void 0);
    DataTableColumnDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-column' }), 
        __metadata('design:paramtypes', [])
    ], DataTableColumnDirective);
    return DataTableColumnDirective;
}());
exports.DataTableColumnDirective = DataTableColumnDirective;


/***/ },

/***/ "./src/components/columns/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/components/columns/column.directive.ts"));
__export(__webpack_require__("./src/components/columns/column-header.directive.ts"));
__export(__webpack_require__("./src/components/columns/column-cell.directive.ts"));


/***/ },

/***/ "./src/components/datatable.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__("./src/utils/index.ts");
var types_1 = __webpack_require__("./src/types/index.ts");
var body_1 = __webpack_require__("./src/components/body/index.ts");
var columns_1 = __webpack_require__("./src/components/columns/index.ts");
var row_detail_1 = __webpack_require__("./src/components/row-detail/index.ts");
var utils_2 = __webpack_require__("./src/utils/index.ts");
var angular2_universal_1 = __webpack_require__("./node_modules/angular2-universal/browser/index.js");
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
var DatatableComponent = (function () {
    function DatatableComponent(element, differs) {
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         *
         * @type {any[]}
         * @memberOf DatatableComponent
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         *
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         *
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         *
         * @type {number}
         * @memberOf DatatableComponent
         */
        this.rowHeight = 30;
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         *
         * @type {number}
         * @memberOf DatatableComponent
         */
        this.detailRowHeight = 0;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         *
         * @type {ColumnMode}
         * @memberOf DatatableComponent
         */
        this.columnMode = types_1.ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         *
         * @type {*}
         * @memberOf DatatableComponent
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         *
         * @type {number}
         * @memberOf DatatableComponent
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         *
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         *
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        this.externalSorting = false;
        /**
         * The page size to be shown.
         * Default value: `undefined`
         *
         * @type {number}
         * @memberOf DatatableComponent
         */
        this.limit = undefined;
        /**
         * The current offset ( page - 1 ) shown.
         * Default value: `0`
         *
         * @type {number}
         * @memberOf DatatableComponent
         */
        this.offset = 0;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         *
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         *
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        this.reorderable = true;
        /**
         * The type of sorting
         *
         * @type {SortType}
         * @memberOf DatatableComponent
         */
        this.sortType = types_1.SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         *
         * @type {any[]}
         * @memberOf DatatableComponent
         */
        this.sorts = [];
        /**
         * Css class overrides
         *
         * @type {*}
         * @memberOf DatatableComponent
         */
        this.cssClasses = {
            sortAscending: 'icon-down',
            sortDescending: 'icon-up',
            pagerLeftArrow: 'icon-left',
            pagerRightArrow: 'icon-right',
            pagerPrevious: 'icon-prev',
            pagerNext: 'icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * @type {*}
         * @memberOf DatatableComponent
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total'
        };
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         *
         * @memberOf DatatableComponent
         */
        this.rowIdentity = (function (x) { return x; });
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
         */
        this.scroll = new core_1.EventEmitter();
        /**
         * A cell or row was focused via keyboard or mouse click.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
         */
        this.activate = new core_1.EventEmitter();
        /**
         * A cell or row was selected.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
         */
        this.select = new core_1.EventEmitter();
        /**
         * Column sort was invoked.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
         */
        this.sort = new core_1.EventEmitter();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
         */
        this.page = new core_1.EventEmitter();
        /**
         * Row detail row visbility was toggled.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
         */
        this.detailToggle = new core_1.EventEmitter();
        /**
         * Columns were re-ordered.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
         */
        this.reorder = new core_1.EventEmitter();
        /**
         * Column was resized.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
         */
        this.resize = new core_1.EventEmitter();
        /**
         * The context menu was invoked on a row.
         *
         * @memberOf DatatableComponent
         */
        this.rowContextmenu = new core_1.EventEmitter(false);
        this.offsetX = 0;
        this._count = 0;
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create(null);
    }
    Object.defineProperty(DatatableComponent.prototype, "rows", {
        /**
         * Gets the rows.
         *
         * @readonly
         * @type {*}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this._rows;
        },
        /**
         * Rows that are displayed in the table.
         *
         * @memberOf DatatableComponent
         */
        set: function (val) {
            // auto sort on new updates
            if (!this.externalSorting) {
                val = utils_1.sortRows(val, this.columns, this.sorts);
            }
            this._rows = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columns", {
        /**
         * Get the columns.
         *
         * @readonly
         * @type {any[]}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this._columns;
        },
        /**
         * Columns to be displayed.
         *
         * @memberOf DatatableComponent
         */
        set: function (val) {
            if (val) {
                utils_2.setColumnDefaults(val);
                this.recalculateColumns(val);
            }
            this._columns = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "count", {
        /**
         * Gets the count.
         *
         * @readonly
         * @type {number}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this._count;
        },
        /**
         * The total count of all rows.
         * Default value: `0`
         *
         * @type {number}
         * @memberOf DatatableComponent
         */
        set: function (val) {
            this._count = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedHeader", {
        /**
         * CSS class applied if the header height if fixed height.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            var headerHeight = this.headerHeight;
            return (typeof headerHeight === 'string') ?
                headerHeight !== 'auto' : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedRow", {
        /**
         * CSS class applied to the root element if
         * the row heights are fixed heights.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            var rowHeight = this.rowHeight;
            return (typeof rowHeight === 'string') ?
                rowHeight !== 'auto' : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isVertScroll", {
        /**
         * CSS class applied to root element if
         * vertical scrolling is enabled.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.scrollbarV;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isHorScroll", {
        /**
         * CSS class applied to the root element
         * if the horziontal scrolling is enabled.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.scrollbarH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSelectable", {
        /**
         * CSS class applied to root element is selectable.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.selectionType !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCheckboxSelection", {
        /**
         * CSS class applied to root is checkbox selection.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCellSelection", {
        /**
         * CSS class applied to root if cell selection.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.cell;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSingleSelection", {
        /**
         * CSS class applied to root if single select.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.single;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiSelection", {
        /**
         * CSS class added to root element if mulit select
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.multi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiClickSelection", {
        /**
         * CSS class added to root element if mulit click select
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.multiClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columnTemplates", {
        /**
         * Returns the column templates.
         *
         * @readonly
         * @type {QueryList<DataTableColumnDirective>}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this._columnTemplates;
        },
        /**
         * Column templates gathered from `ContentChildren`
         * if described in your markup.
         *
         * @memberOf DatatableComponent
         */
        set: function (val) {
            this._columnTemplates = val;
            if (val) {
                // only set this if results were brought back
                var arr = val.toArray();
                if (arr.length) {
                    // translate them to normal objects
                    this.columns = utils_2.translateTemplates(arr);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "rowDetailTemplateChild", {
        /**
         * Returns the row templates.
         *
         * @readonly
         * @type {DatatableRowDetailDirective}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this._rowDetailTemplateChild;
        },
        /**
         * Row Detail templates gathered from the ContentChild
         *
         * @memberOf DatatableComponent
         */
        set: function (val) {
            this._rowDetailTemplateChild = val;
            if (val)
                this.rowDetailTemplate = val.rowDetailTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "allRowsSelected", {
        /**
         * Returns if all rows are selected.
         *
         * @readonly
         * @private
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.selected &&
                this.rows &&
                this.selected.length === this.rows.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.ngOnInit = function () {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    };
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        setTimeout(function () { return _this.recalculate(); });
    };
    /**
     * Lifecycle hook that is called when Angular dirty checks a directive.
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.ngDoCheck = function () {
        if (this.rowDiffer.diff(this.rows)) {
            this.recalculatePages();
        }
    };
    /**
     * Toggle the expansion of the row
     *
     * @param rowIndex
     */
    DatatableComponent.prototype.toggleExpandRow = function (row) {
        // Should we write a guard here??
        this.bodyComponent.toggleRowExpansion(row);
    };
    /**
     * API method to expand all the rows.
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.expandAllRows = function () {
        this.bodyComponent.toggleAllRows(true);
    };
    /**
     * API method to collapse all the rows.
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.collapseAllRows = function () {
        this.bodyComponent.toggleAllRows(false);
    };
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.recalculate = function () {
        this.recalculateDims();
        this.recalculateColumns();
    };
    /**
     * Window resize handler to update sizes.
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onWindowResize = function () {
        this.recalculate();
    };
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     *
     * @param {any[]} [columns=this.columns]
     * @param {number} [forceIdx=false]
     * @param {boolean} [allowBleed=this.scrollH]
     * @returns {any[]}
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.recalculateColumns = function (columns, forceIdx, allowBleed) {
        if (columns === void 0) { columns = this.columns; }
        if (forceIdx === void 0) { forceIdx = -1; }
        if (allowBleed === void 0) { allowBleed = this.scrollbarH; }
        if (!columns)
            return;
        var width = this.innerWidth;
        if (this.scrollbarV) {
            width = width - utils_2.scrollbarWidth;
        }
        if (this.columnMode === types_1.ColumnMode.force) {
            utils_1.forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === types_1.ColumnMode.flex) {
            utils_1.adjustColumnWidths(columns, width);
        }
        return columns;
    };
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.recalculateDims = function () {
        if (angular2_universal_1.isBrowser) {
            var _a = this.element.getBoundingClientRect(), height = _a.height, width = _a.width;
            this.innerWidth = Math.floor(width);
            if (this.scrollbarV) {
                if (this.headerHeight)
                    height = height - this.headerHeight;
                if (this.footerHeight)
                    height = height - this.footerHeight;
                this.bodyHeight = height;
            }
            this.recalculatePages();
        }
    };
    /**
     * Recalculates the pages after a update.
     *
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.recalculatePages = function () {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    };
    /**
     * Body triggered a page event.
     *
     * @param {*} { offset }
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onBodyPage = function (_a) {
        var offset = _a.offset;
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    };
    /**
     * The body triggered a scroll event.
     *
     * @param {MouseEvent} event
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onBodyScroll = function (event) {
        this.offsetX = event.offsetX;
        this.scroll.emit(event);
    };
    /**
     * The footer triggered a page event.
     *
     * @param {*} event
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onFooterPage = function (event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    };
    /**
     * Recalculates the sizes of the page
     *
     * @param {any[]} [val=this.rows]
     * @returns {number}
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.calcPageSize = function (val) {
        if (val === void 0) { val = this.rows; }
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV) {
            var size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined)
            return this.limit;
        // otherwise use row length
        if (val)
            return val.length;
        // other empty :(
        return 0;
    };
    /**
     * Calculates the row count.
     *
     * @param {any[]} [val=this.rows]
     * @returns {number}
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.calcRowCount = function (val) {
        if (val === void 0) { val = this.rows; }
        if (!this.externalPaging) {
            if (!val)
                return 0;
            return val.length;
        }
        return this.count;
    };
    /**
     * The header triggered a column resize event.
     *
     * @param {*} { column, newValue }
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onColumnResize = function (_a) {
        var column = _a.column, newValue = _a.newValue;
        var idx;
        var cols = this.columns.map(function (c, i) {
            c = Object.assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        });
        this.recalculateColumns(cols, idx);
        this._columns = cols;
        this.resize.emit({
            column: column,
            newValue: newValue
        });
    };
    /**
     * The header triggered a column re-order event.
     *
     * @param {*} { column, newValue, prevValue }
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onColumnReorder = function (_a) {
        var column = _a.column, newValue = _a.newValue, prevValue = _a.prevValue;
        var cols = this.columns.map(function (c) {
            return Object.assign({}, c);
        });
        cols.splice(prevValue, 1);
        cols.splice(newValue, 0, column);
        this.columns = cols;
        this.reorder.emit({
            column: column,
            newValue: newValue,
            prevValue: prevValue
        });
    };
    /**
     * The header triggered a column sort event.
     *
     * @param {*} event
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onColumnSort = function (event) {
        var sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this._rows = utils_1.sortRows(this.rows, this.columns, sorts);
        }
        this.sorts = sorts;
        this.bodyComponent.updateOffsetY(0);
        this.sort.emit(event);
    };
    /**
     * Toggle all row selection
     *
     * @param {*} event
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onHeaderSelect = function (event) {
        // before we splice, chk if we currently have all selected
        var allSelected = this.selected.length === this.rows.length;
        // remove all existing either way
        this.selected.splice(0, this.selected.length);
        // do the opposite here
        if (!allSelected) {
            (_a = this.selected).push.apply(_a, this.rows);
        }
        this.select.emit({
            selected: this.selected
        });
        var _a;
    };
    /**
     * A row was selected from body
     *
     * @param {*} event
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onBodySelect = function (event) {
        this.select.emit(event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], DatatableComponent.prototype, "rows", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], DatatableComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatatableComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "scrollbarV", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatatableComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatatableComponent.prototype, "detailRowHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatatableComponent.prototype, "columnMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "headerHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatatableComponent.prototype, "footerHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "externalPaging", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "externalSorting", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatatableComponent.prototype, "limit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], DatatableComponent.prototype, "count", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatatableComponent.prototype, "offset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "loadingIndicator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatatableComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "reorderable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatatableComponent.prototype, "sortType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatatableComponent.prototype, "sorts", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef)
    ], DatatableComponent.prototype, "rowDetailTemplate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "cssClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "messages", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], DatatableComponent.prototype, "rowIdentity", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "selectCheck", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatatableComponent.prototype, "trackByProp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatatableComponent.prototype, "scroll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatatableComponent.prototype, "activate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatatableComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatatableComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatatableComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatatableComponent.prototype, "detailToggle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatatableComponent.prototype, "reorder", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatatableComponent.prototype, "resize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "rowContextmenu", void 0);
    __decorate([
        core_1.HostBinding('class.fixed-header'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isFixedHeader", null);
    __decorate([
        core_1.HostBinding('class.fixed-row'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isFixedRow", null);
    __decorate([
        core_1.HostBinding('class.scroll-vertical'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isVertScroll", null);
    __decorate([
        core_1.HostBinding('class.scroll-horz'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isHorScroll", null);
    __decorate([
        core_1.HostBinding('class.selectable'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isSelectable", null);
    __decorate([
        core_1.HostBinding('class.checkbox-selection'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isCheckboxSelection", null);
    __decorate([
        core_1.HostBinding('class.cell-selection'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isCellSelection", null);
    __decorate([
        core_1.HostBinding('class.single-selection'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isSingleSelection", null);
    __decorate([
        core_1.HostBinding('class.multi-selection'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isMultiSelection", null);
    __decorate([
        core_1.HostBinding('class.multi-click-selection'), 
        __metadata('design:type', Boolean)
    ], DatatableComponent.prototype, "isMultiClickSelection", null);
    __decorate([
        core_1.ContentChildren(columns_1.DataTableColumnDirective), 
        __metadata('design:type', core_1.QueryList), 
        __metadata('design:paramtypes', [core_1.QueryList])
    ], DatatableComponent.prototype, "columnTemplates", null);
    __decorate([
        core_1.ContentChild(row_detail_1.DatatableRowDetailDirective), 
        __metadata('design:type', row_detail_1.DatatableRowDetailDirective), 
        __metadata('design:paramtypes', [row_detail_1.DatatableRowDetailDirective])
    ], DatatableComponent.prototype, "rowDetailTemplateChild", null);
    __decorate([
        core_1.ViewChild(body_1.DataTableBodyComponent), 
        __metadata('design:type', body_1.DataTableBodyComponent)
    ], DatatableComponent.prototype, "bodyComponent", void 0);
    __decorate([
        core_1.HostListener('window:resize'),
        utils_2.throttleable(5), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DatatableComponent.prototype, "onWindowResize", null);
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'ngx-datatable',
            template: "\n    <div\n      visibility-observer\n      (visible)=\"recalculate()\">\n      <datatable-header\n        *ngIf=\"headerHeight\"\n        [sorts]=\"sorts\"\n        [sortType]=\"sortType\"\n        [scrollbarH]=\"scrollbarH\"\n        [innerWidth]=\"innerWidth\"\n        [offsetX]=\"offsetX\"\n        [columns]=\"columns\"\n        [headerHeight]=\"headerHeight\"\n        [reorderable]=\"reorderable\"\n        [sortAscendingIcon]=\"cssClasses.sortAscending\"\n        [sortDescendingIcon]=\"cssClasses.sortDescending\"\n        [allRowsSelected]=\"allRowsSelected\"\n        [selectionType]=\"selectionType\"\n        (sort)=\"onColumnSort($event)\"\n        (resize)=\"onColumnResize($event)\"\n        (reorder)=\"onColumnReorder($event)\"\n        (select)=\"onHeaderSelect($event)\">\n      </datatable-header>\n      <datatable-body\n        [rows]=\"rows\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [loadingIndicator]=\"loadingIndicator\"\n        [rowHeight]=\"rowHeight\"\n        [rowCount]=\"rowCount\"\n        [offset]=\"offset\"\n        [trackByProp]=\"trackByProp\"\n        [columns]=\"columns\"\n        [pageSize]=\"pageSize\"\n        [offsetX]=\"offsetX\"\n        [rowDetailTemplate]=\"rowDetailTemplate\"\n        [detailRowHeight]=\"detailRowHeight\"\n        [selected]=\"selected\"\n        [innerWidth]=\"innerWidth\"\n        [bodyHeight]=\"bodyHeight\"\n        [selectionType]=\"selectionType\"\n        [emptyMessage]=\"messages.emptyMessage\"\n        [rowIdentity]=\"rowIdentity\"\n        [selectCheck]=\"selectCheck\"\n        (page)=\"onBodyPage($event)\"\n        (activate)=\"activate.emit($event)\"\n        (rowContextmenu)=\"rowContextmenu.emit($event)\"\n        (select)=\"onBodySelect($event)\"\n        (detailToggle)=\"detailToggle.emit($event)\"\n        (scroll)=\"onBodyScroll($event)\">\n      </datatable-body>\n      <datatable-footer\n        *ngIf=\"footerHeight\"\n        [rowCount]=\"rowCount\"\n        [pageSize]=\"pageSize\"\n        [offset]=\"offset\"\n        [footerHeight]=\"footerHeight\"\n        [totalMessage]=\"messages.totalMessage\"\n        [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n        [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n        [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n        [pagerNextIcon]=\"cssClasses.pagerNext\"\n        (page)=\"onFooterPage($event)\">\n      </datatable-footer>\n    </div>\n  ",
            host: {
                class: 'datatable'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.KeyValueDiffers])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;


/***/ },

/***/ "./src/components/footer/footer.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTableFooterComponent = (function () {
    function DataTableFooterComponent() {
        this.page = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTableFooterComponent.prototype, "isVisible", {
        get: function () {
            return (this.rowCount / this.pageSize) > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableFooterComponent.prototype, "curPage", {
        get: function () {
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableFooterComponent.prototype, "footerHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableFooterComponent.prototype, "rowCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableFooterComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableFooterComponent.prototype, "offset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableFooterComponent.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableFooterComponent.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableFooterComponent.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableFooterComponent.prototype, "pagerNextIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableFooterComponent.prototype, "totalMessage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableFooterComponent.prototype, "page", void 0);
    DataTableFooterComponent = __decorate([
        core_1.Component({
            selector: 'datatable-footer',
            template: "\n    <div\n      [style.height.px]=\"footerHeight\">\n      <div class=\"page-count\">{{rowCount.toLocaleString()}} {{totalMessage}}</div>\n      <datatable-pager\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\">\n       </datatable-pager>\n     </div>\n  ",
            host: {
                class: 'datatable-footer'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableFooterComponent);
    return DataTableFooterComponent;
}());
exports.DataTableFooterComponent = DataTableFooterComponent;


/***/ },

/***/ "./src/components/footer/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/components/footer/footer.component.ts"));
__export(__webpack_require__("./src/components/footer/pager.component.ts"));


/***/ },

/***/ "./src/components/footer/pager.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTablePagerComponent = (function () {
    function DataTablePagerComponent() {
        this.change = new core_1.EventEmitter();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    Object.defineProperty(DataTablePagerComponent.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (val) {
            this._size = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (val) {
            this._count = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (val) {
            this._page = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "totalPages", {
        get: function () {
            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
            return Math.max(count || 0, 1);
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagerComponent.prototype.canPrevious = function () {
        return this.page > 1;
    };
    DataTablePagerComponent.prototype.canNext = function () {
        return this.page < this.totalPages;
    };
    DataTablePagerComponent.prototype.prevPage = function () {
        this.selectPage(this.page - 1);
    };
    DataTablePagerComponent.prototype.nextPage = function () {
        this.selectPage(this.page + 1);
    };
    DataTablePagerComponent.prototype.selectPage = function (page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page: page
            });
        }
    };
    DataTablePagerComponent.prototype.calcPages = function (page) {
        var pages = [];
        var startPage = 1;
        var endPage = this.totalPages;
        var maxSize = 5;
        var isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = ((Math.ceil(page / maxSize) - 1) * maxSize) + 1;
            endPage = Math.min(startPage + maxSize - 1, this.totalPages);
        }
        for (var num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTablePagerComponent.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTablePagerComponent.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTablePagerComponent.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTablePagerComponent.prototype, "pagerNextIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], DataTablePagerComponent.prototype, "size", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], DataTablePagerComponent.prototype, "count", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], DataTablePagerComponent.prototype, "page", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTablePagerComponent.prototype, "change", void 0);
    DataTablePagerComponent = __decorate([
        core_1.Component({
            selector: 'datatable-pager',
            template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(1)\">\n          <i class=\"{{pagerPreviousIcon}}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"prevPage()\">\n          <i class=\"{{pagerLeftArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li\n        class=\"pages\"\n        *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(pg.number)\">\n          {{pg.text}}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"nextPage()\">\n          <i class=\"{{pagerRightArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(totalPages)\">\n          <i class=\"{{pagerNextIcon}}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
            host: {
                class: 'datatable-pager'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], DataTablePagerComponent);
    return DataTablePagerComponent;
}());
exports.DataTablePagerComponent = DataTablePagerComponent;


/***/ },

/***/ "./src/components/header/header-cell.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var types_1 = __webpack_require__("./src/types/index.ts");
var utils_1 = __webpack_require__("./src/utils/index.ts");
var DataTableHeaderCellComponent = (function () {
    function DataTableHeaderCellComponent() {
        this.sort = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "sorts", {
        get: function () {
            return this._sorts;
        },
        set: function (val) {
            this._sorts = val;
            this.sortDir = this.calcSortDir(val);
            this.sortClass = this.calcSortClass(this.sortDir);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "columnCssClasses", {
        get: function () {
            var cls = 'datatable-header-cell';
            if (this.column.sortable)
                cls += ' sortable';
            if (this.column.resizeable)
                cls += ' resizeable';
            var sortDir = this.sortDir;
            if (sortDir) {
                cls += " sort-active sort-" + sortDir;
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "name", {
        get: function () {
            return this.column.name || this.column.prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "minWidth", {
        get: function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "maxWidth", {
        get: function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "isCheckboxable", {
        get: function () {
            return;
            this.column.checkboxable &&
                this.column.headerCheckboxable &&
                this.selectionType === types_1.SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeaderCellComponent.prototype.calcSortDir = function (sorts) {
        var _this = this;
        if (sorts && this.column) {
            var sort = sorts.find(function (s) {
                return s.prop === _this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    };
    DataTableHeaderCellComponent.prototype.onSort = function () {
        if (!this.column.sortable)
            return;
        var newValue = utils_1.nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue: newValue
        });
    };
    DataTableHeaderCellComponent.prototype.calcSortClass = function (sortDir) {
        if (sortDir === types_1.SortDirection.asc) {
            return "sort-asc " + this.sortAscendingIcon;
        }
        else if (sortDir === types_1.SortDirection.desc) {
            return "sort-desc " + this.sortDescendingIcon;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableHeaderCellComponent.prototype, "sortType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableHeaderCellComponent.prototype, "column", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableHeaderCellComponent.prototype, "sortAscendingIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DataTableHeaderCellComponent.prototype, "sortDescendingIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableHeaderCellComponent.prototype, "allRowsSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableHeaderCellComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableHeaderCellComponent.prototype, "headerHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], DataTableHeaderCellComponent.prototype, "sorts", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableHeaderCellComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableHeaderCellComponent.prototype, "select", void 0);
    __decorate([
        core_1.HostBinding('class'), 
        __metadata('design:type', Object)
    ], DataTableHeaderCellComponent.prototype, "columnCssClasses", null);
    __decorate([
        core_1.HostBinding('attr.title'), 
        __metadata('design:type', String)
    ], DataTableHeaderCellComponent.prototype, "name", null);
    __decorate([
        core_1.HostBinding('style.minWidth.px'), 
        __metadata('design:type', Number)
    ], DataTableHeaderCellComponent.prototype, "minWidth", null);
    __decorate([
        core_1.HostBinding('style.maxWidth.px'), 
        __metadata('design:type', Number)
    ], DataTableHeaderCellComponent.prototype, "maxWidth", null);
    __decorate([
        core_1.HostBinding('style.width.px'), 
        __metadata('design:type', Number)
    ], DataTableHeaderCellComponent.prototype, "width", null);
    DataTableHeaderCellComponent = __decorate([
        core_1.Component({
            selector: 'datatable-header-cell',
            template: "\n    <div>\n      <label\n        *ngIf=\"isCheckboxable\" \n        class=\"datatable-checkbox\">\n        <input \n          type=\"checkbox\"\n          [attr.checked]=\"allRowsSelected\"\n          (change)=\"select.emit(!allRowsSelected)\" \n        />\n      </label>\n      <span\n        class=\"datatable-header-cell-label draggable\"\n        *ngIf=\"!column.headerTemplate\"\n        (click)=\"onSort()\"\n        [innerHTML]=\"name\">\n      </span>\n      <template\n        *ngIf=\"column.headerTemplate\"\n        [ngTemplateOutlet]=\"column.headerTemplate\"\n        [ngOutletContext]=\"{ \n          column: column, \n          sortDir: sortDir\n        }\">\n      </template>\n      <span\n        class=\"sort-btn\"\n        [class]=\"sortClass\">\n      </span>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableHeaderCellComponent);
    return DataTableHeaderCellComponent;
}());
exports.DataTableHeaderCellComponent = DataTableHeaderCellComponent;


/***/ },

/***/ "./src/components/header/header.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var types_1 = __webpack_require__("./src/types/index.ts");
var utils_1 = __webpack_require__("./src/utils/index.ts");
var DataTableHeaderComponent = (function () {
    function DataTableHeaderComponent() {
        this.sort = new core_1.EventEmitter();
        this.reorder = new core_1.EventEmitter();
        this.resize = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerHeight", {
        get: function () {
            return this._headerHeight;
        },
        set: function (val) {
            if (val !== 'auto') {
                this._headerHeight = val + "px";
            }
            else {
                this._headerHeight = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (val) {
            this._columns = val;
            var colsByPin = utils_1.columnsByPin(val);
            this.columnsByPin = utils_1.columnsByPinArr(val);
            this.columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerWidth", {
        get: function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            return '100%';
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeaderComponent.prototype.trackByGroups = function (index, colGroup) {
        return colGroup.type;
    };
    DataTableHeaderComponent.prototype.columnTrackingFn = function (index, column) {
        return column.$$id;
    };
    DataTableHeaderComponent.prototype.onColumnResized = function (width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column: column,
            prevValue: column.width,
            newValue: width
        });
    };
    DataTableHeaderComponent.prototype.onColumnReordered = function (_a) {
        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, model = _a.model;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    };
    DataTableHeaderComponent.prototype.onSort = function (_a) {
        var column = _a.column, prevValue = _a.prevValue, newValue = _a.newValue;
        var sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts: sorts,
            column: column,
            prevValue: prevValue,
            newValue: newValue
        });
    };
    DataTableHeaderComponent.prototype.calcNewSorts = function (column, prevValue, newValue) {
        var idx = 0;
        var sorts = this.sorts.map(function (s, i) {
            s = Object.assign({}, s);
            if (s.prop === column.prop)
                idx = i;
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === types_1.SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    };
    DataTableHeaderComponent.prototype.stylesByGroup = function (group) {
        var widths = this.columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'center') {
            utils_1.translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            var totalDiff = widths.total - this.innerWidth;
            var offset = totalDiff * -1;
            utils_1.translateXY(styles, offset, 0);
        }
        return styles;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableHeaderComponent.prototype, "sortAscendingIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DataTableHeaderComponent.prototype, "sortDescendingIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableHeaderComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableHeaderComponent.prototype, "innerWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableHeaderComponent.prototype, "offsetX", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DataTableHeaderComponent.prototype, "sorts", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableHeaderComponent.prototype, "sortType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableHeaderComponent.prototype, "allRowsSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DataTableHeaderComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DataTableHeaderComponent.prototype, "reorderable", void 0);
    __decorate([
        core_1.HostBinding('style.height'),
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], DataTableHeaderComponent.prototype, "headerHeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], DataTableHeaderComponent.prototype, "columns", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableHeaderComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableHeaderComponent.prototype, "reorder", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableHeaderComponent.prototype, "resize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataTableHeaderComponent.prototype, "select", void 0);
    __decorate([
        core_1.HostBinding('style.width'), 
        __metadata('design:type', String)
    ], DataTableHeaderComponent.prototype, "headerWidth", null);
    DataTableHeaderComponent = __decorate([
        core_1.Component({
            selector: 'datatable-header',
            template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      [style.width.px]=\"columnGroupWidths.total\"\n      class=\"datatable-header-inner\">\n      <div\n        *ngFor=\"let colGroup of columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"stylesByGroup(colGroup.type)\">\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          (longPress)=\"drag = true\"\n          (longPressEnd)=\"drag = false\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && drag\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [headerHeight]=\"headerHeight\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\">\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
            host: {
                class: 'datatable-header'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableHeaderComponent);
    return DataTableHeaderComponent;
}());
exports.DataTableHeaderComponent = DataTableHeaderComponent;


/***/ },

/***/ "./src/components/header/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/components/header/header.component.ts"));
__export(__webpack_require__("./src/components/header/header-cell.component.ts"));


/***/ },

/***/ "./src/components/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/components/datatable.component.ts"));
__export(__webpack_require__("./src/components/header/index.ts"));
__export(__webpack_require__("./src/components/body/index.ts"));
__export(__webpack_require__("./src/components/footer/index.ts"));
__export(__webpack_require__("./src/components/columns/index.ts"));
__export(__webpack_require__("./src/components/row-detail/index.ts"));


/***/ },

/***/ "./src/components/row-detail/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/components/row-detail/row-detail.directive.ts"));
__export(__webpack_require__("./src/components/row-detail/row-detail-template.directive.ts"));


/***/ },

/***/ "./src/components/row-detail/row-detail-template.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DatatableRowDetailTemplateDirective = (function () {
    function DatatableRowDetailTemplateDirective(template) {
        this.template = template;
    }
    ;
    DatatableRowDetailTemplateDirective = __decorate([
        core_1.Directive({
            selector: '[ngx-datatable-row-detail-template]'
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], DatatableRowDetailTemplateDirective);
    return DatatableRowDetailTemplateDirective;
}());
exports.DatatableRowDetailTemplateDirective = DatatableRowDetailTemplateDirective;


/***/ },

/***/ "./src/components/row-detail/row-detail.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var row_detail_template_directive_1 = __webpack_require__("./src/components/row-detail/row-detail-template.directive.ts");
var DatatableRowDetailDirective = (function () {
    function DatatableRowDetailDirective() {
    }
    Object.defineProperty(DatatableRowDetailDirective.prototype, "rowDetailTemplate", {
        get: function () {
            return this.template;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ContentChild(row_detail_template_directive_1.DatatableRowDetailTemplateDirective, { read: core_1.TemplateRef }), 
        __metadata('design:type', core_1.TemplateRef)
    ], DatatableRowDetailDirective.prototype, "template", void 0);
    DatatableRowDetailDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-row-detail' }), 
        __metadata('design:paramtypes', [])
    ], DatatableRowDetailDirective);
    return DatatableRowDetailDirective;
}());
exports.DatatableRowDetailDirective = DatatableRowDetailDirective;


/***/ },

/***/ "./src/datatable.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
//import { UniversalModule } from 'angular2-universal';
var components_1 = __webpack_require__("./src/components/index.ts");
var directives_1 = __webpack_require__("./src/directives/index.ts");
var NgxDatatableModule = (function () {
    function NgxDatatableModule() {
    }
    NgxDatatableModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule //,
            ],
            declarations: [
                directives_1.VisibilityDirective,
                directives_1.DraggableDirective,
                directives_1.ResizeableDirective,
                directives_1.OrderableDirective,
                directives_1.LongPressDirective,
                components_1.ScrollerComponent,
                components_1.DatatableComponent,
                components_1.DataTableColumnDirective,
                components_1.DataTableHeaderComponent,
                components_1.DataTableHeaderCellComponent,
                components_1.DataTableBodyComponent,
                components_1.DataTableFooterComponent,
                components_1.DataTablePagerComponent,
                components_1.ProgressBarComponent,
                components_1.DataTableBodyRowComponent,
                components_1.DataTableRowWrapperComponent,
                components_1.DatatableRowDetailDirective,
                components_1.DatatableRowDetailTemplateDirective,
                components_1.DataTableBodyCellComponent,
                components_1.DataTableSelectionComponent,
                components_1.DataTableColumnHeaderDirective,
                components_1.DataTableColumnCellDirective
            ],
            exports: [
                components_1.DatatableComponent,
                components_1.DatatableRowDetailDirective,
                components_1.DatatableRowDetailTemplateDirective,
                components_1.DataTableColumnDirective,
                components_1.DataTableColumnHeaderDirective,
                components_1.DataTableColumnCellDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NgxDatatableModule);
    return NgxDatatableModule;
}());
exports.NgxDatatableModule = NgxDatatableModule;


/***/ },

/***/ "./src/directives/draggable.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Rx_1 = __webpack_require__(2);
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
var DraggableDirective = (function () {
    function DraggableDirective(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new core_1.EventEmitter();
        this.dragging = new core_1.EventEmitter();
        this.dragEnd = new core_1.EventEmitter();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    DraggableDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DraggableDirective.prototype.onMouseup = function (event) {
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.dragEnd.emit({
                event: event,
                element: this.element,
                model: this.dragModel
            });
        }
    };
    DraggableDirective.prototype.onMousedown = function (event) {
        var _this = this;
        if (event.target.classList.contains('draggable')) {
            event.preventDefault();
            this.isDragging = true;
            var mouseDownPos_1 = { x: event.clientX, y: event.clientY };
            this.subscription = Rx_1.Observable.fromEvent(document, 'mousemove')
                .subscribe(function (ev) { return _this.move(ev, mouseDownPos_1); });
            this.dragStart.emit({
                event: event,
                element: this.element,
                model: this.dragModel
            });
        }
    };
    DraggableDirective.prototype.move = function (event, mouseDownPos) {
        if (!this.dragging)
            return;
        var x = event.clientX - mouseDownPos.x;
        var y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = x + "px";
        if (this.dragY)
            this.element.style.top = y + "px";
        if (this.dragX || this.dragY) {
            this.element.classList.add('dragging');
            this.dragging.emit({
                event: event,
                element: this.element,
                model: this.dragModel
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DraggableDirective.prototype, "dragModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DraggableDirective.prototype, "dragX", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DraggableDirective.prototype, "dragY", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DraggableDirective.prototype, "dragStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DraggableDirective.prototype, "dragging", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DraggableDirective.prototype, "dragEnd", void 0);
    __decorate([
        core_1.HostListener('document:mouseup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DraggableDirective.prototype, "onMouseup", null);
    __decorate([
        core_1.HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DraggableDirective.prototype, "onMousedown", null);
    DraggableDirective = __decorate([
        core_1.Directive({ selector: '[draggable]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DraggableDirective);
    return DraggableDirective;
}());
exports.DraggableDirective = DraggableDirective;


/***/ },

/***/ "./src/directives/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/directives/draggable.directive.ts"));
__export(__webpack_require__("./src/directives/long-press.directive.ts"));
__export(__webpack_require__("./src/directives/orderable.directive.ts"));
__export(__webpack_require__("./src/directives/resizeable.directive.ts"));
__export(__webpack_require__("./src/directives/visibility.directive.ts"));


/***/ },

/***/ "./src/directives/long-press.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
var LongPressDirective = (function () {
    function LongPressDirective() {
        this.duration = 500;
        this.longPress = new core_1.EventEmitter();
        this.longPressing = new core_1.EventEmitter();
        this.longPressEnd = new core_1.EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    Object.defineProperty(LongPressDirective.prototype, "press", {
        get: function () { return this.pressing; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongPressDirective.prototype, "isLongPress", {
        get: function () { return this.isLongPressing; },
        enumerable: true,
        configurable: true
    });
    LongPressDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        // don't do right/middle clicks
        if (event.which !== 1)
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        this.timeout = setTimeout(function () {
            _this.isLongPressing = true;
            _this.longPress.emit(event);
            _this.loop(event);
        }, this.duration);
        this.loop(event);
    };
    LongPressDirective.prototype.onMouseMove = function (event) {
        if (this.pressing && !this.isLongPressing) {
            var xThres = Math.abs(event.clientX - this.mouseX) > 10;
            var yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    };
    LongPressDirective.prototype.loop = function (event) {
        var _this = this;
        if (this.isLongPressing) {
            this.timeout = setTimeout(function () {
                _this.longPressing.emit(event);
                _this.loop(event);
            }, 50);
        }
    };
    LongPressDirective.prototype.endPress = function () {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this.longPressEnd.emit(true);
    };
    LongPressDirective.prototype.onMouseUp = function () { this.endPress(); };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LongPressDirective.prototype, "duration", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LongPressDirective.prototype, "longPress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LongPressDirective.prototype, "longPressing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LongPressDirective.prototype, "longPressEnd", void 0);
    __decorate([
        core_1.HostBinding('class.press'), 
        __metadata('design:type', Boolean)
    ], LongPressDirective.prototype, "press", null);
    __decorate([
        core_1.HostBinding('class.longpress'), 
        __metadata('design:type', Boolean)
    ], LongPressDirective.prototype, "isLongPress", null);
    __decorate([
        core_1.HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], LongPressDirective.prototype, "onMouseDown", null);
    __decorate([
        core_1.HostListener('mousemove', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], LongPressDirective.prototype, "onMouseMove", null);
    __decorate([
        core_1.HostListener('mouseup'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], LongPressDirective.prototype, "onMouseUp", null);
    LongPressDirective = __decorate([
        core_1.Directive({ selector: '[long-press]' }), 
        __metadata('design:paramtypes', [])
    ], LongPressDirective);
    return LongPressDirective;
}());
exports.LongPressDirective = LongPressDirective;


/***/ },

/***/ "./src/directives/orderable.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var draggable_directive_1 = __webpack_require__("./src/directives/draggable.directive.ts");
var OrderableDirective = (function () {
    function OrderableDirective(differs) {
        this.reorder = new core_1.EventEmitter();
        this.differ = differs.find({}).create(null);
    }
    OrderableDirective.prototype.ngAfterContentInit = function () {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    };
    OrderableDirective.prototype.ngOnDestroy = function () {
        this.draggables.forEach(function (d) {
            d.dragStart.unsubscribe();
            d.dragEnd.unsubscribe();
        });
    };
    OrderableDirective.prototype.updateSubscriptions = function () {
        var _this = this;
        var diffs = this.differ.diff(this.draggables.toArray());
        if (diffs) {
            var subscribe = function (_a) {
                var currentValue = _a.currentValue, previousValue = _a.previousValue;
                unsubscribe_1({ previousValue: previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(_this.onDragStart.bind(_this));
                    currentValue.dragEnd.subscribe(_this.onDragEnd.bind(_this));
                }
            };
            var unsubscribe_1 = function (_a) {
                var previousValue = _a.previousValue;
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            };
            diffs.forEachAddedItem(subscribe.bind(this));
            diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe_1.bind(this));
        }
    };
    OrderableDirective.prototype.onDragStart = function () {
        this.positions = {};
        var i = 0;
        for (var _i = 0, _a = this.draggables.toArray(); _i < _a.length; _i++) {
            var dragger = _a[_i];
            var elm = dragger.element;
            this.positions[dragger.dragModel.prop] = {
                left: parseInt(elm.offsetLeft.toString(), 0),
                index: i++
            };
        }
    };
    OrderableDirective.prototype.onDragEnd = function (_a) {
        var element = _a.element, model = _a.model;
        var newPos = parseInt(element.offsetLeft.toString(), 0);
        var prevPos = this.positions[model.prop];
        var i = 0;
        for (var prop in this.positions) {
            var pos = this.positions[prop];
            var movedLeft = newPos < pos.left && prevPos.left > pos.left;
            var movedRight = newPos > pos.left && prevPos.left < pos.left;
            if (movedLeft || movedRight) {
                this.reorder.emit({
                    prevIndex: prevPos.index,
                    newIndex: i,
                    model: model
                });
            }
            i++;
        }
        element.style.left = 'auto';
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], OrderableDirective.prototype, "reorder", void 0);
    __decorate([
        core_1.ContentChildren(draggable_directive_1.DraggableDirective, { descendants: true }), 
        __metadata('design:type', core_1.QueryList)
    ], OrderableDirective.prototype, "draggables", void 0);
    OrderableDirective = __decorate([
        core_1.Directive({ selector: '[orderable]' }), 
        __metadata('design:paramtypes', [core_1.KeyValueDiffers])
    ], OrderableDirective);
    return OrderableDirective;
}());
exports.OrderableDirective = OrderableDirective;


/***/ },

/***/ "./src/directives/resizeable.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Rx_1 = __webpack_require__(2);
var lang_1 = __webpack_require__("./node_modules/@angular/core/src/facade/lang.js");
var KeyboardEvent = lang_1.global.KeyboardEvent;
var MouseEvent = lang_1.global.MouseEvent;
var ResizeableDirective = (function () {
    function ResizeableDirective(element) {
        this.resizeEnabled = true;
        this.resize = new core_1.EventEmitter();
        this.resizing = false;
        this.element = element.nativeElement;
        if (this.resizeEnabled) {
            var node = document.createElement('span');
            node.classList.add('resize-handle');
            this.element.appendChild(node);
        }
    }
    ResizeableDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ResizeableDirective.prototype.onMouseup = function () {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this.subscription.unsubscribe();
            this.resize.emit(this.element.clientWidth);
        }
    };
    ResizeableDirective.prototype.onMousedown = function (event) {
        var _this = this;
        var isHandle = (event.target).classList.contains('resize-handle');
        var initialWidth = this.element.clientWidth;
        var mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            this.subscription = Rx_1.Observable.fromEvent(document, 'mousemove')
                .subscribe(function (e) { return _this.move(e, initialWidth, mouseDownScreenX); });
        }
    };
    ResizeableDirective.prototype.move = function (event, initialWidth, mouseDownScreenX) {
        var movementX = event.screenX - mouseDownScreenX;
        var newWidth = initialWidth + movementX;
        var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = newWidth + "px";
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ResizeableDirective.prototype, "resizeEnabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ResizeableDirective.prototype, "minWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ResizeableDirective.prototype, "maxWidth", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ResizeableDirective.prototype, "resize", void 0);
    __decorate([
        core_1.HostListener('document:mouseup'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ResizeableDirective.prototype, "onMouseup", null);
    __decorate([
        core_1.HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ResizeableDirective.prototype, "onMousedown", null);
    ResizeableDirective = __decorate([
        core_1.Directive({
            selector: '[resizeable]',
            host: {
                '[class.resizeable]': 'resizeEnabled'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ResizeableDirective);
    return ResizeableDirective;
}());
exports.ResizeableDirective = ResizeableDirective;


/***/ },

/***/ "./src/directives/visibility.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibility-observer
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
var VisibilityDirective = (function () {
    function VisibilityDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new core_1.EventEmitter();
    }
    VisibilityDirective.prototype.ngOnInit = function () {
        this.runCheck();
    };
    VisibilityDirective.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
    };
    VisibilityDirective.prototype.onVisibilityChange = function () {
        var _this = this;
        // trigger zone recalc for columns
        this.zone.run(function () {
            _this.isVisible = true;
            _this.visible.emit(true);
        });
    };
    VisibilityDirective.prototype.runCheck = function () {
        var _this = this;
        var check = function () {
            // https://davidwalsh.name/offsetheight-visibility
            var _a = _this.element.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
            if (offsetHeight && offsetWidth) {
                clearTimeout(_this.timeout);
                _this.onVisibilityChange();
            }
            else {
                clearTimeout(_this.timeout);
                _this.zone.runOutsideAngular(function () {
                    _this.timeout = setTimeout(function () { return check(); }, 50);
                });
            }
        };
        setTimeout(function () { return check(); });
    };
    __decorate([
        core_1.HostBinding('class.visible'), 
        __metadata('design:type', Boolean)
    ], VisibilityDirective.prototype, "isVisible", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], VisibilityDirective.prototype, "visible", void 0);
    VisibilityDirective = __decorate([
        core_1.Directive({ selector: '[visibility-observer]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone])
    ], VisibilityDirective);
    return VisibilityDirective;
}());
exports.VisibilityDirective = VisibilityDirective;


/***/ },

/***/ "./src/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/datatable.module.ts"));
__export(__webpack_require__("./src/types/index.ts"));
__export(__webpack_require__("./src/components/index.ts"));


/***/ },

/***/ "./src/types/click.type.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

(function (ClickType) {
    ClickType[ClickType["single"] = 'single'] = "single";
    ClickType[ClickType["double"] = 'double'] = "double";
})(exports.ClickType || (exports.ClickType = {}));
var ClickType = exports.ClickType;


/***/ },

/***/ "./src/types/column-mode.type.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

(function (ColumnMode) {
    ColumnMode[ColumnMode["standard"] = 'standard'] = "standard";
    ColumnMode[ColumnMode["flex"] = 'flex'] = "flex";
    ColumnMode[ColumnMode["force"] = 'force'] = "force";
})(exports.ColumnMode || (exports.ColumnMode = {}));
var ColumnMode = exports.ColumnMode;


/***/ },

/***/ "./src/types/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/types/column-mode.type.ts"));
__export(__webpack_require__("./src/types/sort.type.ts"));
__export(__webpack_require__("./src/types/sort-direction.type.ts"));
__export(__webpack_require__("./src/types/selection.type.ts"));
__export(__webpack_require__("./src/types/click.type.ts"));


/***/ },

/***/ "./src/types/selection.type.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

(function (SelectionType) {
    SelectionType[SelectionType["single"] = 'single'] = "single";
    SelectionType[SelectionType["multi"] = 'multi'] = "multi";
    SelectionType[SelectionType["multiClick"] = 'multiClick'] = "multiClick";
    SelectionType[SelectionType["cell"] = 'cell'] = "cell";
    SelectionType[SelectionType["checkbox"] = 'checkbox'] = "checkbox";
})(exports.SelectionType || (exports.SelectionType = {}));
var SelectionType = exports.SelectionType;


/***/ },

/***/ "./src/types/sort-direction.type.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

(function (SortDirection) {
    SortDirection[SortDirection["asc"] = 'asc'] = "asc";
    SortDirection[SortDirection["desc"] = 'desc'] = "desc";
})(exports.SortDirection || (exports.SortDirection = {}));
var SortDirection = exports.SortDirection;


/***/ },

/***/ "./src/types/sort.type.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

(function (SortType) {
    SortType[SortType["single"] = 'single'] = "single";
    SortType[SortType["multi"] = 'multi'] = "multi";
})(exports.SortType || (exports.SortType = {}));
var SortType = exports.SortType;


/***/ },

/***/ "./src/utils/camel-case.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 * @param  {string} str
 * @return {string} camel case string
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
        return b.trim() + c.toUpperCase();
    });
    return str;
}
exports.camelCase = camelCase;
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 *
 * @export
 * @param {any} str
 * @returns string
 */
function deCamelCase(str) {
    return str
        .replace(/([A-Z])/g, function (match) { return (" " + match); })
        .replace(/^./, function (match) { return match.toUpperCase(); });
}
exports.deCamelCase = deCamelCase;


/***/ },

/***/ "./src/utils/column-helper.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var utils_1 = __webpack_require__("./src/utils/index.ts");
/**
 * Sets the column defaults
 *
 * @export
 * @param {any[]} columns
 * @returns
 */
function setColumnDefaults(columns) {
    if (!columns)
        return;
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var column = columns_1[_i];
        if (!column.$$id) {
            column.$$id = utils_1.id();
        }
        // translate name => prop
        if (!column.prop && column.name) {
            column.prop = utils_1.camelCase(column.name);
        }
        // format props if no name passed
        if (column.prop && !column.name) {
            column.name = utils_1.deCamelCase(column.prop);
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
    }
}
exports.setColumnDefaults = setColumnDefaults;
/**
 * Translates templates definitions to objects
 *
 * @export
 * @param {DataTableColumnDirective[]} templates
 * @returns {any[]}
 */
function translateTemplates(templates) {
    var result = [];
    for (var _i = 0, templates_1 = templates; _i < templates_1.length; _i++) {
        var temp = templates_1[_i];
        var col = {};
        var props = Object.getOwnPropertyNames(temp);
        for (var _a = 0, props_1 = props; _a < props_1.length; _a++) {
            var prop = props_1[_a];
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        result.push(col);
    }
    return result;
}
exports.translateTemplates = translateTemplates;


/***/ },

/***/ "./src/utils/column.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
 * Returns the columns by pin.
 * @param {array} cols
 */
function columnsByPin(cols) {
    var ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
            var col = cols_1[_i];
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
exports.columnsByPin = columnsByPin;
/**
 * Returns the widths of all group sets of a column
 * @param {object} groups
 * @param {array} all
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: columnTotalWidth(all)
    };
}
exports.columnGroupWidths = columnGroupWidths;
/**
 * Calculates the total width of all columns and their groups
 * @param {array} columns
 * @param {string} prop width to get
 */
function columnTotalWidth(columns, prop) {
    var totalWidth = 0;
    if (columns) {
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var c = columns_1[_i];
            var has = prop && c[prop];
            var width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
exports.columnTotalWidth = columnTotalWidth;
/**
 * Calculates the total width of all columns and their groups
 * @param {array} columns
 * @param {string} property width to get
 */
function columnsTotalWidth(columns, prop) {
    var totalWidth = 0;
    for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
        var column = columns_2[_i];
        var has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
exports.columnsTotalWidth = columnsTotalWidth;
function columnsByPinArr(val) {
    var colsByPinArr = [];
    var colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}
exports.columnsByPinArr = columnsByPinArr;


/***/ },

/***/ "./src/utils/deep-getter.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
 * Returns a deep object given a string. zoo['animal.type']
 * @param {object} obj
 * @param {string} path
 */
function deepValueGetter(obj, path) {
    if (!obj || !path)
        return obj;
    var current = obj;
    var split = path.split('.');
    if (split.length) {
        for (var i = 0, len = split.length; i < len; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null)
                return '';
        }
    }
    return current;
}
exports.deepValueGetter = deepValueGetter;


/***/ },

/***/ "./src/utils/id.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */
function id() {
    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
}
exports.id = id;


/***/ },

/***/ "./src/utils/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/utils/id.ts"));
__export(__webpack_require__("./src/utils/column.ts"));
__export(__webpack_require__("./src/utils/deep-getter.ts"));
__export(__webpack_require__("./src/utils/camel-case.ts"));
__export(__webpack_require__("./src/utils/keys.ts"));
__export(__webpack_require__("./src/utils/math.ts"));
__export(__webpack_require__("./src/utils/prefixes.ts"));
__export(__webpack_require__("./src/utils/scrollbar-width.ts"));
__export(__webpack_require__("./src/utils/selection.ts"));
__export(__webpack_require__("./src/utils/translate.ts"));
__export(__webpack_require__("./src/utils/throttle.ts"));
__export(__webpack_require__("./src/utils/sort.ts"));
__export(__webpack_require__("./src/utils/row-height-cache.ts"));
__export(__webpack_require__("./src/utils/column-helper.ts"));


/***/ },

/***/ "./src/utils/keys.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

(function (Keys) {
    Keys[Keys["up"] = 38] = "up";
    Keys[Keys["down"] = 40] = "down";
    Keys[Keys["return"] = 13] = "return";
    Keys[Keys["escape"] = 27] = "escape";
    Keys[Keys["left"] = 37] = "left";
    Keys[Keys["right"] = 39] = "right";
})(exports.Keys || (exports.Keys = {}));
var Keys = exports.Keys;


/***/ },

/***/ "./src/utils/math.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var column_1 = __webpack_require__("./src/utils/column.ts");
/**
 * Calculates the Total Flex Grow
 * @param {array}
 */
function getTotalFlexGrow(columns) {
    var totalFlexGrow = 0;
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var c = columns_1[_i];
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
exports.getTotalFlexGrow = getTotalFlexGrow;
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 * @param {array} all columns
 * @param {int} width
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    var columnsWidth = column_1.columnsTotalWidth(allColumns);
    var totalFlexGrow = getTotalFlexGrow(allColumns);
    var colsByGroup = column_1.columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
exports.adjustColumnWidths = adjustColumnWidths;
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 * @param {array} colsByGroup
 * @param {int} maxWidth
 * @param {int} totalFlexGrow
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (var attr in colsByGroup) {
        for (var _i = 0, _a = colsByGroup[attr]; _i < _a.length; _i++) {
            var column = _a[_i];
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow;
            }
            else {
                column.width = 0;
            }
        }
    }
    var hasMinWidth = {};
    var remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        var widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (var attr in colsByGroup) {
            for (var _b = 0, _c = colsByGroup[attr]; _b < _c.length; _b++) {
                var column = _c[_b];
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    var newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when nesc.
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proporation the widths given the min / max / noraml widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proporational widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the orginial width; not the newly proporatied widths.
 *
 * @param {array} allColumns
 * @param {int} expectedWidth
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth) {
    if (defaultColWidth === void 0) { defaultColWidth = 300; }
    var columnsToResize = allColumns
        .slice(startIdx + 1, allColumns.length)
        .filter(function (c) {
        return c.canAutoResize !== false;
    });
    for (var _i = 0, columnsToResize_1 = columnsToResize; _i < columnsToResize_1.length; _i++) {
        var column = columnsToResize_1[_i];
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    var additionWidthPerColumn = 0;
    var exceedsWindow = false;
    var contentWidth = getContentWidth(allColumns, defaultColWidth);
    var remainingWidth = expectedWidth - contentWidth;
    var columnsProcessed = [];
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (var _a = 0, columnsToResize_2 = columnsToResize; _a < columnsToResize_2.length; _a++) {
            var column = columnsToResize_2[_a];
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > 0 && columnsToResize.length !== 0);
}
exports.forceFillColumnWidths = forceFillColumnWidths;
/**
 * Remove the processed columns from the current active columns.
 *
 * @param columnsToResize  Array containing the columns that need to be resized.
 * @param columnsProcessed Array containing the columns that have already been processed.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (var _i = 0, columnsProcessed_1 = columnsProcessed; _i < columnsProcessed_1.length; _i++) {
        var column = columnsProcessed_1[_i];
        var index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 *
 * @param {array} allColumns
 * @param {number} [defaultColWidth=300]
 * @returns {number}
 */
function getContentWidth(allColumns, defaultColWidth) {
    if (defaultColWidth === void 0) { defaultColWidth = 300; }
    var contentWidth = 0;
    for (var _i = 0, allColumns_1 = allColumns; _i < allColumns_1.length; _i++) {
        var column = allColumns_1[_i];
        contentWidth += (column.width || defaultColWidth);
    }
    return contentWidth;
}


/***/ },

/***/ "./src/utils/prefixes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var camel_case_1 = __webpack_require__("./src/utils/camel-case.ts");
var cache = {};
// Get Prefix
// http://davidwalsh.name/vendor-prefix
var prefix = (function () {
    return { dom: "WebKit",
        lowercase: "webkit",
        css: "-webkit-",
        js: "Webkit" };
})();
function getVendorPrefixedName(property) {
    var name = camel_case_1.camelCase(property);
    return cache[name];
}
exports.getVendorPrefixedName = getVendorPrefixedName;


/***/ },

/***/ "./src/utils/row-height-cache.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
var RowHeightCache = (function () {
    function RowHeightCache() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     */
    RowHeightCache.prototype.clearCache = function () {
        this.treeArray = [];
    };
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    RowHeightCache.prototype.initCache = function (rows, rowHeight, detailRowHeight) {
        if (isNaN(rowHeight)) {
            throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number value: (" + rowHeight + ") when 'scrollbarV' is enabled.");
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (isNaN(detailRowHeight)) {
            throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number value: (" + detailRowHeight + ") when 'scrollbarV' is enabled.");
        }
        var n = rows.length;
        this.treeArray = new Array(n);
        for (var i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (var i = 0; i < n; ++i) {
            var currentRowHeight = rowHeight;
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            if (rows[i] && rows[i].$$expanded === 1) {
                currentRowHeight += detailRowHeight;
            }
            this.update(i, currentRowHeight);
        }
    };
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     *
     * @param scrollY - The scrollY position.
     * @returns {number} - Index representing the first row visible in the viewport
     */
    RowHeightCache.prototype.getRowIndex = function (scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    };
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     *
     *
     * @param atRowIndex Update the data at this index row in the grid.
     * @param byRowHeight Update by the rowHeight provided.
     */
    RowHeightCache.prototype.update = function (atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error("Update at index " + atRowIndex + " with value " + byRowHeight + " failed:\n        Row Height cache not initialized.");
        }
        var n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= (atRowIndex + 1);
        }
    };
    /**
     * Range Sum query from 1 to the rowIndex
     *
     * @param atIndex The row index until which the total height needs to be obtained.
     * @returns {number} The total height from row 1 to the rowIndex.
     */
    RowHeightCache.prototype.query = function (atIndex) {
        if (!this.treeArray.length) {
            throw new Error("query at index " + atIndex + " failed: Fenwick tree array not initialized.");
        }
        var sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    };
    /**
     * Find the total height between 2 row indexes
     * @param atIndexA The row index from
     * @param atIndexB The row index to
     * @returns {number} total pixel height between 2 row indexes.
     */
    RowHeightCache.prototype.queryBetween = function (atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    };
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     *
     * @param sum - The scrollY position.
     * @returns {number} - Index representing the first row visible in the viewport
     */
    RowHeightCache.prototype.calcRowIndex = function (sum) {
        if (!this.treeArray.length)
            return 0;
        var pos = -1;
        var dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        var highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            var nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    };
    return RowHeightCache;
}());
exports.RowHeightCache = RowHeightCache;


/***/ },

/***/ "./src/utils/scrollbar-width.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 * http://stackoverflow.com/a/13382873/888165
 * @return {int} width
 */
function getScrollBarWidth() {
    return 0;
}
exports.getScrollBarWidth = getScrollBarWidth;
;
exports.scrollbarWidth = getScrollBarWidth();


/***/ },

/***/ "./src/utils/selection.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

function selectRows(selected, row, comparefn) {
    var selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
exports.selectRows = selectRows;
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    var reverse = index < prevIndex;
    for (var i = 0, len = rows.length; i < len; i++) {
        var row = rows[i];
        var greater = i >= prevIndex && i <= index;
        var lesser = i <= prevIndex && i >= index;
        var range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: (prevIndex - index)
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            var idx = comparefn(row, selected);
            // if reverse shift selection (unselect) and the
            // row is already selected, remove it from selected
            if (reverse && idx > -1) {
                selected.splice(idx, 1);
                continue;
            }
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i < range.end) {
                if (idx === -1) {
                    selected.push(row);
                }
            }
        }
    }
    return selected;
}
exports.selectRowsBetween = selectRowsBetween;


/***/ },

/***/ "./src/utils/sort.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var types_1 = __webpack_require__("./src/types/index.ts");
var deep_getter_1 = __webpack_require__("./src/utils/deep-getter.ts");
/**
 * Gets the next sort direction
 * @param  {SortType}      sortType
 * @param  {SortDirection} currentSort
 * @return {SortDirection}
 */
function nextSortDir(sortType, current) {
    if (sortType === types_1.SortType.single) {
        if (current === types_1.SortDirection.asc) {
            return types_1.SortDirection.desc;
        }
        else {
            return types_1.SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return types_1.SortDirection.asc;
        }
        else if (current === types_1.SortDirection.asc) {
            return types_1.SortDirection.desc;
        }
        else if (current === types_1.SortDirection.desc) {
            return undefined;
        }
    }
}
exports.nextSortDir = nextSortDir;
;
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 * @param  {any}    a
 * @param  {any}    b
 * @return {number} position
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
exports.orderByComparator = orderByComparator;
/**
 * Sorts the rows
 *
 * @export
 * @param {any[]} rows
 * @param {any[]} columns
 * @param {any[]} dirs
 * @returns
 */
function sortRows(rows, columns, dirs) {
    if (!rows || !dirs || !dirs.length || !columns)
        return rows;
    var temp = rows.slice();
    var cols = columns.reduce(function (obj, col) {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }, {});
    return temp.sort(function (a, b) {
        for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
            var _a = dirs_1[_i], prop = _a.prop, dir = _a.dir;
            var propA = deep_getter_1.deepValueGetter(a, prop);
            var propB = deep_getter_1.deepValueGetter(b, prop);
            var compareFn = cols[prop] || orderByComparator;
            var comparison = dir !== types_1.SortDirection.desc ?
                compareFn(propA, propB) :
                -compareFn(propA, propB);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        // equal each other
        return 0;
    });
}
exports.sortRows = sortRows;


/***/ },

/***/ "./src/utils/throttle.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
 * Throttle a function
 *
 * @export
 * @param {*} func
 * @param {number} wait
 * @param {*} [options]
 * @returns
 */
function throttle(func, wait, options) {
    options = options || {};
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        var now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
exports.throttle = throttle;
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 *
 * @export
 * @param {number} duration
 * @param {*} [options]
 * @returns
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}
exports.throttleable = throttleable;


/***/ },

/***/ "./src/utils/translate.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";

var prefixes_1 = __webpack_require__("./src/utils/prefixes.ts");
var camel_case_1 = __webpack_require__("./src/utils/camel-case.ts");
// browser detection and prefixing tools
var transform = prefixes_1.getVendorPrefixedName('transform');
var backfaceVisibility = prefixes_1.getVendorPrefixedName('backfaceVisibility');
var hasCSSTransforms = !!prefixes_1.getVendorPrefixedName('transform');
var hasCSS3DTransforms = !!prefixes_1.getVendorPrefixedName('perspective');
var ua = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36";
var isSafari = (/Safari\//).test(ua) && !(/Chrome\//).test(ua);
function translateXY(styles, x, y) {
    if (hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = "translate3d(" + x + "px, " + y + "px, 0)";
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camel_case_1.camelCase(transform)] = "translate(" + x + "px, " + y + "px)";
        }
    }
    else {
        styles.top = y + "px";
        styles.left = x + "px";
    }
}
exports.translateXY = translateXY;


/***/ },

/***/ 0:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },

/***/ 1:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 3:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 4:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }

/******/ });
});
//# sourceMappingURL=index.map