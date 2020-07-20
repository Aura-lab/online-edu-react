module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/types/logintypes.js":
/*!****************************************!*\
  !*** ./components/types/logintypes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "student": "0",
  "teacher": "1",
  "manager": "2"
});

/***/ }),

/***/ "./lib/user.js":
/*!*********************!*\
  !*** ./lib/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_types_logintypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/types/logintypes */ "./components/types/logintypes.js");

const _token = 'token';
const _loginType = 'loginType';

class User {
  // return an authorisation token
  // return {string} token to insert in the request header
  static getToken() {
    return localStorage.getItem(_token);
  }

  static saveToken(value) {
    return localStorage.setItem(_token, value);
  }

  static deleteToken() {
    return localStorage.removeItem(_token);
  } //delete logintype


  static deleteLoginType() {
    return localStorage.removeItem(_loginType);
  }
  /***
   * 
   *return a loginType
   */


  static getLoginType() {
    return localStorage.getItem(_loginType);
  }
  /**
   * save token
   */


  static saveLoginType(value) {
    return localStorage.setItem(_loginType, _components_types_logintypes__WEBPACK_IMPORTED_MODULE_0__["default"][value]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/user */ "./lib/user.js");
/* harmony import */ var _components_types_logintypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/types/logintypes */ "./components/types/logintypes.js");
var _jsxFileName = "C:\\Users\\111\\Desktop\\E-edu\\edu-sys\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Homepage() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let isLogin = false;
    if (_lib_user__WEBPACK_IMPORTED_MODULE_2__["default"].getToken()) isLogin = true;

    if (!isLogin) {
      // login page did not create
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
    } else {
      const loginType = _lib_user__WEBPACK_IMPORTED_MODULE_2__["default"].getLoginType();

      if (loginType === _components_types_logintypes__WEBPACK_IMPORTED_MODULE_3__["default"].teacher) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/student");
      } else {
        console.log("create student selections");
      }
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\111\Desktop\E-edu\edu-sys\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90eXBlcy9sb2dpbnR5cGVzLmpzIiwid2VicGFjazovLy8uL2xpYi91c2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJfdG9rZW4iLCJfbG9naW5UeXBlIiwiVXNlciIsImdldFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVUb2tlbiIsInZhbHVlIiwic2V0SXRlbSIsImRlbGV0ZVRva2VuIiwicmVtb3ZlSXRlbSIsImRlbGV0ZUxvZ2luVHlwZSIsImdldExvZ2luVHlwZSIsInNhdmVMb2dpblR5cGUiLCJMb2dpblR5cGVzIiwiSG9tZXBhZ2UiLCJ1c2VFZmZlY3QiLCJpc0xvZ2luIiwiUm91dGVyIiwicHVzaCIsImxvZ2luVHlwZSIsIkxvZ2luVHlwZSIsInRlYWNoZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQWM7QUFDVixhQUFVLEdBREE7QUFFVixhQUFVLEdBRkE7QUFHVixhQUFVO0FBSEEsQ0FBZCxFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFHQSxNQUFNQSxNQUFNLEdBQUcsT0FBZjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxXQUFuQjs7QUFFQSxNQUFNQyxJQUFOLENBQVc7QUFDUDtBQUNBO0FBRUYsU0FBT0MsUUFBUCxHQUFpQjtBQUNiLFdBQU9DLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsTUFBckIsQ0FBUDtBQUNIOztBQUVELFNBQU9NLFNBQVAsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3BCLFdBQU9ILFlBQVksQ0FBQ0ksT0FBYixDQUFxQlIsTUFBckIsRUFBNkJPLEtBQTdCLENBQVA7QUFDSDs7QUFDRCxTQUFPRSxXQUFQLEdBQW9CO0FBQ2hCLFdBQU9MLFlBQVksQ0FBQ00sVUFBYixDQUF3QlYsTUFBeEIsQ0FBUDtBQUNILEdBYlEsQ0FjVDs7O0FBQ0EsU0FBT1csZUFBUCxHQUF3QjtBQUNwQixXQUFPUCxZQUFZLENBQUNNLFVBQWIsQ0FBd0JULFVBQXhCLENBQVA7QUFDSDtBQUVEOzs7Ozs7QUFJQSxTQUFPVyxZQUFQLEdBQXFCO0FBQ2pCLFdBQU9SLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkosVUFBckIsQ0FBUDtBQUNIO0FBQ0Q7Ozs7O0FBR0EsU0FBT1ksYUFBUCxDQUFxQk4sS0FBckIsRUFBMkI7QUFDdkIsV0FBT0gsWUFBWSxDQUFDSSxPQUFiLENBQXFCUCxVQUFyQixFQUFpQ2Esb0VBQVUsQ0FBQ1AsS0FBRCxDQUEzQyxDQUFQO0FBQ0g7O0FBL0JROztBQW1DSUwsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTYSxRQUFULEdBQW9CO0FBQ2hCQyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJQyxPQUFPLEdBQUcsS0FBZDtBQUNBLFFBQUlmLGlEQUFJLENBQUNDLFFBQUwsRUFBSixFQUFxQmMsT0FBTyxHQUFHLElBQVY7O0FBRXJCLFFBQUcsQ0FBQ0EsT0FBSixFQUFZO0FBQ1Q7QUFDQUMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDSCxLQUhBLE1BR0k7QUFDRCxZQUFNQyxTQUFTLEdBQUdsQixpREFBSSxDQUFDVSxZQUFMLEVBQWxCOztBQUNBLFVBQUdRLFNBQVMsS0FBS0Msb0VBQVMsQ0FBQ0MsT0FBM0IsRUFBb0M7QUFDbkNKLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxVQUFaO0FBQ0EsT0FGRCxNQUVLO0FBQ0RJLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0g7QUFDSjtBQUNILEdBZlEsQ0FBVDtBQWdCQSxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQUdIOztBQUVjVCx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIFwic3R1ZGVudFwiOlwiMFwiLFxyXG4gICAgXCJ0ZWFjaGVyXCI6XCIxXCIsXHJcbiAgICBcIm1hbmFnZXJcIjpcIjJcIlxyXG59IiwiaW1wb3J0IExvZ2luVHlwZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvdHlwZXMvbG9naW50eXBlc1wiXHJcblxyXG5cclxuY29uc3QgX3Rva2VuID0gJ3Rva2VuJztcclxuY29uc3QgX2xvZ2luVHlwZSA9ICdsb2dpblR5cGUnO1xyXG5cclxuY2xhc3MgVXNlciB7XHJcbiAgICAvLyByZXR1cm4gYW4gYXV0aG9yaXNhdGlvbiB0b2tlblxyXG4gICAgLy8gcmV0dXJuIHtzdHJpbmd9IHRva2VuIHRvIGluc2VydCBpbiB0aGUgcmVxdWVzdCBoZWFkZXJcclxuXHJcbiAgc3RhdGljIGdldFRva2VuKCl7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShfdG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNhdmVUb2tlbih2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oX3Rva2VuLCB2YWx1ZSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBkZWxldGVUb2tlbigpe1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oX3Rva2VuKTtcclxuICB9XHJcbiAgLy9kZWxldGUgbG9naW50eXBlXHJcbiAgc3RhdGljIGRlbGV0ZUxvZ2luVHlwZSgpe1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oX2xvZ2luVHlwZSk7XHJcbiAgfVxyXG5cclxuICAvKioqXHJcbiAgICogXHJcbiAgICpyZXR1cm4gYSBsb2dpblR5cGVcclxuICAgKi9cclxuICBzdGF0aWMgZ2V0TG9naW5UeXBlKCl7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShfbG9naW5UeXBlKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogc2F2ZSB0b2tlblxyXG4gICAqL1xyXG4gIHN0YXRpYyBzYXZlTG9naW5UeXBlKHZhbHVlKXtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKF9sb2dpblR5cGUsIExvZ2luVHlwZXNbdmFsdWVdKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyXHJcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vbGliL3VzZXJcIjtcclxuaW1wb3J0IExvZ2luVHlwZSBmcm9tIFwiLi4vY29tcG9uZW50cy90eXBlcy9sb2dpbnR5cGVzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lcGFnZSgpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzTG9naW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoVXNlci5nZXRUb2tlbigpKSBpc0xvZ2luID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYoIWlzTG9naW4pe1xyXG4gICAgICAgICAgIC8vIGxvZ2luIHBhZ2UgZGlkIG5vdCBjcmVhdGVcclxuICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgIGNvbnN0IGxvZ2luVHlwZSA9IFVzZXIuZ2V0TG9naW5UeXBlKCk7XHJcbiAgICAgICAgICAgaWYobG9naW5UeXBlID09PSBMb2dpblR5cGUudGVhY2hlcikge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9zdHVkZW50XCIpO1xyXG4gICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBzdHVkZW50IHNlbGVjdGlvbnNcIik7XHJcbiAgICAgICAgICAgfSAgIFxyXG4gICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD48L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==