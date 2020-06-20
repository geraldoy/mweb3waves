/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/reducers/root.js
var reducers_root_namespaceObject = {};
__webpack_require__.r(reducers_root_namespaceObject);
__webpack_require__.d(reducers_root_namespaceObject, "INIT_APP", function() { return INIT_APP; });
__webpack_require__.d(reducers_root_namespaceObject, "changeMobileMenuState", function() { return root_changeMobileMenuState; });
__webpack_require__.d(reducers_root_namespaceObject, "default", function() { return reducers_root; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/@hot-loader/react-dom/index.js");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__("./node_modules/react-redux/es/index.js");

// CONCATENATED MODULE: ./src/styled-components/global/GlobalStyle.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n   body {\n        font-family: 'Montserrat', sans-serif;\n        padding: 0;\n        margin: 0;\n        background-color: ", ";\n   }\n\n   a {\n        text-decoration: none;\n        &:hover {\n            text-decoration: none;\n            outline: 0;\n        }\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    img {\n        border: 0px;\n    }\n\n    ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    button {\n        background: none;\n        border: 0;\n        color: inherit;\n        cursor: pointer;\n        padding: 0;\n    }\n    input, button {\n        &:focus {\n            outline: none;\n        }\n        font: inherit;\n    }\n    textarea {\n        resize: none;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ var GlobalStyle = (Object(styled_components_browser_esm["b" /* createGlobalStyle */])(_templateObject(), function (_ref) {
  var colors = _ref.theme.colors;
  return colors.gray[1];
}));
// CONCATENATED MODULE: ./src/styled-components/global/index.js

// EXTERNAL MODULE: ./node_modules/react-hot-loader/root.js
var root = __webpack_require__("./node_modules/react-hot-loader/root.js");

// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js
var index_esm = __webpack_require__("./node_modules/styled-system/dist/index.esm.js");

// CONCATENATED MODULE: ./src/components/shared/Box.jsx


var Box = styled_components_browser_esm["d" /* default */].div({
  boxSizing: 'border-box'
}, index_esm["x" /* space */], index_esm["z" /* width */], index_esm["n" /* height */], index_esm["l" /* fontSize */], index_esm["e" /* color */], index_esm["c" /* background */], index_esm["v" /* position */], index_esm["A" /* zIndex */], index_esm["y" /* top */], index_esm["p" /* left */], index_esm["w" /* right */], index_esm["d" /* bottom */], index_esm["h" /* flex */], index_esm["g" /* display */], index_esm["i" /* flexBasis */], index_esm["s" /* minWidth */], index_esm["u" /* overflow */]);
Box.displayName = 'Box';
/* harmony default export */ var shared_Box = (Box);
// CONCATENATED MODULE: ./src/components/shared/Flex.jsx



var Flex = Object(styled_components_browser_esm["d" /* default */])(shared_Box)({
  display: 'flex'
}, index_esm["k" /* flexWrap */], index_esm["j" /* flexDirection */], index_esm["a" /* alignItems */], index_esm["o" /* justifyContent */], index_esm["b" /* alignSelf */], index_esm["h" /* flex */], index_esm["t" /* order */]);
Flex.displayName = 'Flex';
/* harmony default export */ var shared_Flex = (Flex);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js + 7 modules
var CSSTransition = __webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js");

// CONCATENATED MODULE: ./src/components/layout/Hamburger.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = Hamburger_taggedTemplateLiteral(["\n            ", " {\n                opacity: 0;\n                width: 20px;\n                &:first-child,\n                &:last-child {\n                    opacity: 1;\n                    top: 5px;\n                }\n                &:first-child {\n                    transform: rotate(45deg);\n                }\n                &:last-child {\n                    transform: rotate(-45deg);\n                }\n            }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Hamburger_taggedTemplateLiteral(["\n    z-index: 1;\n    cursor: pointer;\n    position: relative;\n    ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Hamburger_templateObject() {
  var data = Hamburger_taggedTemplateLiteral(["\n    height: 2px;\n    margin-bottom: 6px;\n    left: 0;\n    transition: all linear 350ms;\n"]);

  Hamburger_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Hamburger_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var DEFAULT_BACKGROUND = '#000';
var LineMenu = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  as: 'span'
})(Hamburger_templateObject());
var HamburgerStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  as: 'button'
})(_templateObject2(), function (_ref) {
  var isActive = _ref.isActive;
  return isActive && Object(styled_components_browser_esm["c" /* css */])(_templateObject3(), LineMenu);
});

var Hamburger_Hamburger = function Hamburger(_ref2) {
  var onClick = _ref2.onClick,
      bg = _ref2.bg,
      isActive = _ref2.isActive,
      rest = _objectWithoutProperties(_ref2, ["onClick", "bg", "isActive"]);

  return /*#__PURE__*/react_default.a.createElement(HamburgerStyled, _extends({
    onClick: onClick,
    isActive: isActive
  }, rest), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/react_default.a.createElement(LineMenu, {
    top: "0px",
    width: "15px",
    bg: bg
  }), /*#__PURE__*/react_default.a.createElement(LineMenu, {
    top: "8px",
    width: "27px",
    bg: bg
  }), /*#__PURE__*/react_default.a.createElement(LineMenu, {
    top: "16px",
    width: "38px",
    bg: bg
  })));
};

Hamburger_Hamburger.defaultProps = {
  bg: DEFAULT_BACKGROUND
};
/* harmony default export */ var layout_Hamburger = (Hamburger_Hamburger);
// EXTERNAL MODULE: ./node_modules/react-responsive/dist/react-responsive.js
var react_responsive = __webpack_require__("./node_modules/react-responsive/dist/react-responsive.js");
var react_responsive_default = /*#__PURE__*/__webpack_require__.n(react_responsive);

// CONCATENATED MODULE: ./src/components/layout/header-controls/iconColor.js
function _templateObject4() {
  var data = iconColor_taggedTemplateLiteral(["\n    cursor: pointer;\n    path {\n        ", ";\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function iconColor_templateObject3() {
  var data = iconColor_taggedTemplateLiteral(["\n    cursor: pointer;\n    rect {\n        ", ";\n    }\n"]);

  iconColor_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function iconColor_templateObject2() {
  var data = iconColor_taggedTemplateLiteral(["\n        fill: ", ";\n    "]);

  iconColor_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function iconColor_templateObject() {
  var data = iconColor_taggedTemplateLiteral(["\n    ", "\n"]);

  iconColor_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function iconColor_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var getColor = function getColor(isActive, colors) {
  return isActive ? colors.blue[0] : colors.gray[2];
};

var fill = Object(styled_components_browser_esm["c" /* css */])(iconColor_templateObject(), function (_ref) {
  var isActive = _ref.isActive,
      colors = _ref.theme.colors;
  return Object(styled_components_browser_esm["c" /* css */])(iconColor_templateObject2(), getColor(isActive, colors));
});
var logoColor = Object(styled_components_browser_esm["c" /* css */])(iconColor_templateObject3(), fill);
var iconColor = Object(styled_components_browser_esm["c" /* css */])(_templateObject4(), fill);
// CONCATENATED MODULE: ./src/components/layout/header-controls/LogoIcon.jsx
function LogoIcon_templateObject() {
  var data = LogoIcon_taggedTemplateLiteral(["\n    ", "\n"]);

  LogoIcon_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function LogoIcon_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function LogoIcon_extends() { LogoIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LogoIcon_extends.apply(this, arguments); }

function LogoIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LogoIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LogoIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var LogoIcon_LogoIcon = function LogoIcon(_ref) {
  var isActive = _ref.isActive,
      rest = LogoIcon_objectWithoutProperties(_ref, ["isActive"]);

  return /*#__PURE__*/react_default.a.createElement("svg", LogoIcon_extends({
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Logo_coupon"
  }, /*#__PURE__*/react_default.a.createElement("rect", {
    id: "Rectangle",
    width: "48",
    height: "48",
    rx: "12",
    fill: "#2EB4FF"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Combined Shape",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39.4177 22.9688C39.2132 23.3445 38.9624 23.6891 38.6717 23.9934C38.9624 24.2979 39.2137 24.6424 39.4177 25.018C40.031 26.1484 40.1653 27.457 39.7946 28.7016C39.4694 29.7939 39.0262 30.8598 38.4768 31.8709C37.6528 33.3824 36.0877 34.3316 34.3753 34.3652C34.3616 34.9785 34.229 35.5906 33.9819 36.1613C33.5581 37.1404 32.813 37.9582 31.8833 38.4639C30.8717 39.0141 29.8058 39.4572 28.7142 39.7824C28.2572 39.9182 27.7882 39.9867 27.3194 39.9867C26.0802 39.9867 24.8985 39.5012 24.0199 38.6684C23.8801 38.8039 23.7313 38.9316 23.5736 39.0498C22.7549 39.6623 21.7419 40 20.7208 40C20.2726 40 19.8255 39.9363 19.3928 39.8113C18.22 39.4691 17.0836 38.9945 16.0125 38.4008C14.7271 37.6863 13.838 36.3922 13.6337 34.9385C13.6073 34.7502 13.5929 34.5627 13.5893 34.3752C13.4079 34.3709 13.2272 34.3559 13.0505 34.3303C11.5768 34.1189 10.2689 33.2129 9.55349 31.9064C8.98023 30.8592 8.52084 29.7496 8.18743 28.6072C7.77179 27.1768 8.05696 25.6141 8.94819 24.4256C9.06285 24.273 9.18531 24.1291 9.31598 23.993C9.18609 23.8576 9.06402 23.7139 8.95015 23.5627C8.05735 22.373 7.77238 20.8102 8.18821 19.3813C8.52318 18.2336 8.9814 17.124 9.55173 16.0822C10.2689 14.7752 11.576 13.868 13.0497 13.6561C13.2468 13.6285 13.4423 13.6129 13.6349 13.6104C13.6505 13.0008 13.7831 12.3926 14.0288 11.825C14.4527 10.8465 15.1972 10.0289 16.1269 9.52305C17.1385 8.97285 18.2043 8.52949 19.296 8.2043C19.753 8.06875 20.222 8 20.6907 8C21.9376 8 23.1248 8.49141 24.0051 9.33223C24.8856 8.49141 26.0725 8 27.3194 8C27.7882 8 28.2572 8.06875 28.7134 8.2043C29.8058 8.52949 30.8717 8.97285 31.8825 9.52227C32.813 10.0289 33.5581 10.8465 33.9819 11.8254C34.229 12.3963 34.3616 13.0082 34.3753 13.6215C36.0877 13.6555 37.6528 14.6045 38.476 16.115C39.0262 17.127 39.4694 18.193 39.7946 19.2848C40.1653 20.5301 40.031 21.8383 39.4177 22.9688ZM34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z",
    fill: "white"
  }), /*#__PURE__*/react_default.a.createElement("g", {
    id: "_x23_000000ff copy 2"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.6053 19.1556C23.9087 18.885 24.4414 18.9758 24.6132 19.3619C24.962 20.262 25.3046 21.1652 25.6513 22.066C25.6573 22.0964 25.6847 22.107 25.7118 22.107C26.5792 22.1688 27.4461 22.2423 28.3136 22.307C28.5622 22.3125 28.8091 22.4552 28.9216 22.6906C29.0608 22.955 29.014 23.3216 28.7862 23.5172C28.0867 24.1164 27.3935 24.7236 26.6957 25.3247C26.6762 25.342 26.6569 25.3599 26.6436 25.3828C26.8409 26.2766 27.0615 27.1663 27.268 28.0584C27.4242 28.5058 27.058 29.0335 26.5979 28.9983C26.4391 28.9963 26.3006 28.9062 26.1741 28.8158C25.4901 28.3656 24.8056 27.9152 24.1209 27.4655C24.0625 27.4283 24.0075 27.3817 23.9419 27.3597C23.1657 27.8464 22.4015 28.3554 21.6274 28.8463C21.4146 28.9788 21.1319 28.9765 20.9228 28.837C20.7023 28.7004 20.5669 28.4184 20.6186 28.1526C20.8417 27.1992 21.0926 26.2493 21.3056 25.294C20.6767 24.7301 20.0383 24.1778 19.4063 23.6177C19.2634 23.4968 19.108 23.3705 19.046 23.1824C18.8941 22.8042 19.1342 22.3116 19.532 22.2526C20.4783 22.1693 21.4312 22.1343 22.3752 22.0438C22.7017 21.2312 23.0158 20.412 23.3387 19.5968C23.3989 19.4337 23.4681 19.2645 23.6053 19.1556Z",
    fill: "white"
  }))));
};

/* harmony default export */ var header_controls_LogoIcon = (Object(styled_components_browser_esm["d" /* default */])(LogoIcon_LogoIcon)(LogoIcon_templateObject(), logoColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/Logo.jsx
function Logo_extends() { Logo_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Logo_extends.apply(this, arguments); }

function Logo_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Logo_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Logo_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Logo_templateObject3() {
  var data = Logo_taggedTemplateLiteral(["\n    cursor: pointer;\n"]);

  Logo_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Logo_templateObject2() {
  var data = Logo_taggedTemplateLiteral(["\n    font-weight: 900;\n"]);

  Logo_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Logo_templateObject() {
  var data = Logo_taggedTemplateLiteral(["\n    white-space: nowrap;\n"]);

  Logo_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Logo_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Title = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  as: 'span',
  display: 'block'
})(Logo_templateObject());
Title.defaultProps = {
  color: 'blue.0',
  fontSize: '22px'
};
var Bold = styled_components_browser_esm["d" /* default */].b(Logo_templateObject2());
var Pointer = styled_components_browser_esm["d" /* default */].div(Logo_templateObject3());

var Logo_Logo = function Logo(_ref) {
  var isActive = _ref.isActive,
      size = _ref.size,
      rest = Logo_objectWithoutProperties(_ref, ["isActive", "size"]);

  var iconSize = size === 'small' ? '33' : '48';
  var fontSize = size === 'small' ? '16px' : '22px';
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, Logo_extends({}, rest, {
    as: Pointer
  }), /*#__PURE__*/react_default.a.createElement(header_controls_LogoIcon, {
    isActive: isActive,
    width: iconSize,
    height: iconSize
  }), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "9px"
  }, /*#__PURE__*/react_default.a.createElement(Title, {
    color: isActive ? 'blue.0' : 'gray.2',
    fontSize: fontSize
  }, /*#__PURE__*/react_default.a.createElement(Bold, null, "Coupon"), ' ', "Bazaar"), /*#__PURE__*/react_default.a.createElement(Title, {
    color: isActive ? 'blue.0' : 'gray.2',
    fontSize: fontSize
  }, "Market")));
};

/* harmony default export */ var header_controls_Logo = (Logo_Logo);
// CONCATENATED MODULE: ./src/components/layout/header-controls/MenuItem.jsx
function MenuItem_extends() { MenuItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MenuItem_extends.apply(this, arguments); }

function MenuItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MenuItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MenuItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MenuItem_templateObject() {
  var data = MenuItem_taggedTemplateLiteral(["\n    letter-spacing: 0.65625px;\n    font-size: 14px;\n    line-height: 17px;\n    white-space: nowrap;\n    cursor: pointer;\n    &:hover {\n        color: ", ";\n    }\n    ", "\n"]);

  MenuItem_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function MenuItem_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MenuItemStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs(function (_ref) {
  var active = _ref.active,
      color = _ref.color;
  return {
    as: 'span',
    color: active ? 'blue.0' : color || 'gray.2'
  };
})(MenuItem_templateObject(), function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.blue[0];
}, index_esm["m" /* fontWeight */]);

var MenuItem_MenuItem = function MenuItem(_ref3) {
  var children = _ref3.children,
      active = _ref3.active,
      onClick = _ref3.onClick,
      rest = MenuItem_objectWithoutProperties(_ref3, ["children", "active", "onClick"]);

  return /*#__PURE__*/react_default.a.createElement(MenuItemStyled, MenuItem_extends({
    active: active,
    onClick: onClick
  }, rest), children);
};

MenuItem_MenuItem.defaultProps = {
  fontWeight: '500'
};
/* harmony default export */ var header_controls_MenuItem = (MenuItem_MenuItem);
// CONCATENATED MODULE: ./src/components/layout/header-controls/HeaderLayout.jsx
function HeaderLayout_templateObject() {
  var data = HeaderLayout_taggedTemplateLiteral(["\n    box-shadow: 0px 2px 10px #edeef0;\n    width: 100%;\n    z-index: 1;\n"]);

  HeaderLayout_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function HeaderLayout_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var HeaderLayout = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  bg: 'gray.0'
})(HeaderLayout_templateObject());
HeaderLayout.defaultProps = {
  position: 'relative'
};
/* harmony default export */ var header_controls_HeaderLayout = (HeaderLayout);
// CONCATENATED MODULE: ./src/components/layout/header-controls/SearchIcon.jsx
function SearchIcon_templateObject() {
  var data = SearchIcon_taggedTemplateLiteral(["\n    ", "\n"]);

  SearchIcon_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function SearchIcon_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function SearchIcon_extends() { SearchIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SearchIcon_extends.apply(this, arguments); }

function SearchIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SearchIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SearchIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var SearchIcon_SearchIcon = function SearchIcon(_ref) {
  var isActive = _ref.isActive,
      rest = SearchIcon_objectWithoutProperties(_ref, ["isActive"]);

  return /*#__PURE__*/react_default.a.createElement("svg", SearchIcon_extends({
    width: "18",
    height: "18",
    viewBox: "0 0 54 54",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/react_default.a.createElement("g", {
    id: "search_icon"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M40.4072 38.1233L53.5329 51.2461C54.1557 51.8687 54.1557 52.8984 53.5329 53.5211C53.2216 53.8443 52.8024 54 52.3952 54C51.988 54 51.5689 53.8324 51.2575 53.5211L38.1317 40.3982C34.0838 43.9184 28.8024 46.0497 23.0299 46.0497C10.3353 46.0497 0 35.7166 0 23.0248C0 10.333 10.3234 0 23.0299 0C35.7246 0 46.0599 10.3211 46.0599 23.0248C46.0599 28.796 43.9281 34.0763 40.4072 38.1233ZM23.018 3.23282C12.1078 3.23282 3.22156 12.1051 3.22156 23.0248C3.22156 33.9446 12.1078 42.8288 23.018 42.8288C33.9401 42.8288 42.8144 33.9326 42.8144 23.0248C42.8144 12.1171 33.9401 3.23282 23.018 3.23282Z",
    fill: "#2EB4FF"
  })));
};

/* harmony default export */ var header_controls_SearchIcon = (Object(styled_components_browser_esm["d" /* default */])(SearchIcon_SearchIcon)(SearchIcon_templateObject(), iconColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/ShopIcon.jsx
function ShopIcon_templateObject() {
  var data = ShopIcon_taggedTemplateLiteral(["\n    ", "\n"]);

  ShopIcon_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ShopIcon_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ShopIcon_extends() { ShopIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ShopIcon_extends.apply(this, arguments); }

function ShopIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ShopIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ShopIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ShopIcon_ShopIcon = function ShopIcon(_ref) {
  var isActive = _ref.isActive,
      rest = ShopIcon_objectWithoutProperties(_ref, ["isActive"]);

  return /*#__PURE__*/react_default.a.createElement("svg", ShopIcon_extends({
    width: "22",
    height: "19",
    viewBox: "0 0 22 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/react_default.a.createElement("g", {
    id: "shopping-basket-button"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.3486 6.91099L11.9083 0.394914C11.7064 0.197457 11.4037 0 11.1009 0C10.7982 0 10.4954 0.0987285 10.2936 0.394914L5.85321 6.91099H1.00917C0.40367 6.91099 0 7.30591 0 7.89828V8.19447L2.52294 17.3762C2.72477 18.166 3.53211 18.8571 4.44037 18.8571H17.5596C18.4679 18.8571 19.2752 18.2648 19.4771 17.3762L22 8.19447V7.89828C22 7.30591 21.5963 6.91099 20.9908 6.91099H16.3486ZM8.07339 6.91099L11.1009 2.56694L14.1284 6.91099H8.07339ZM9.08257 12.8347C9.08257 13.9207 9.99083 14.8093 11.1009 14.8093C12.211 14.8093 13.1193 13.9207 13.1193 12.8347C13.1193 11.7487 12.211 10.8601 11.1009 10.8601C9.99083 10.8601 9.08257 11.7487 9.08257 12.8347Z",
    fill: "#2EB4FF"
  })));
};

/* harmony default export */ var header_controls_ShopIcon = (Object(styled_components_browser_esm["d" /* default */])(ShopIcon_ShopIcon)(ShopIcon_templateObject(), iconColor));
// CONCATENATED MODULE: ./src/components/layout/header-controls/TriangleIcon.jsx
function TriangleIcon_extends() { TriangleIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TriangleIcon_extends.apply(this, arguments); }



var TriangleIcon_TriangleIcon = function TriangleIcon(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", TriangleIcon_extends({
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 8L0 0L12 0L6 8Z",
    fill: "#2EB4FF"
  }));
};

/* harmony default export */ var header_controls_TriangleIcon = (TriangleIcon_TriangleIcon);
// CONCATENATED MODULE: ./src/components/layout/header-controls/RoundMarkIcon.jsx
function RoundMarkIcon_extends() { RoundMarkIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RoundMarkIcon_extends.apply(this, arguments); }



var RoundMarkIcon_RoundMarkIcon = function RoundMarkIcon(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", RoundMarkIcon_extends({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z",
    fill: "#50E3C2"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    d: "M5 9.57228L7.98288 12.6069L12.8237 6",
    stroke: "white",
    strokeWidth: "2"
  }));
};

/* harmony default export */ var header_controls_RoundMarkIcon = (RoundMarkIcon_RoundMarkIcon);
// CONCATENATED MODULE: ./src/components/layout/header-controls/language-icons/English.jsx
function English_extends() { English_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return English_extends.apply(this, arguments); }



var English_Eng = function Eng(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", English_extends({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Mask",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z",
    fill: "#00247D"
  }), /*#__PURE__*/react_default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "20",
    height: "20"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Mask_2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z",
    fill: "white"
  })), /*#__PURE__*/react_default.a.createElement("g", {
    mask: "url(#mask0)"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group_2"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group_3"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.2867 20.193V17.0943L13.5688 9.50252L5.67535 9.50252L20.7665 20.193H24.2867Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.2867 18.0274L12.2539 9.50257H9.6228L24.2867 19.8906V18.0274Z",
    fill: "#CF1B2B"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_3",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.83191 9.50254L-4.3956 18.3083V20.1929H0.634238L15.7269 9.5024L7.83191 9.50254Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.7784 9.50252L-3.28708 20.193H-2.88559H-0.680081L14.411 9.50252H11.7784Z",
    fill: "#CF1B2B"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_5",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.7679 0.339315L5.67682 11.0298L13.5703 11.0298L24.2867 3.43797V0.339315H20.7679Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_6",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.0814 0.339315L6.99179 11.0298H9.62294L24.2868 0.641731V0.339315H22.0814Z",
    fill: "#CF1B2B"
  })), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_7",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5801 11.1391H15.6044L0.611001 0.439515C-1.11146 0.705215 -2.59441 1.71271 -3.51648 3.13208L10.5799 13.1868V11.1391H10.5801Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_8",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M-2.85713 2.36817L10.7893 12.0879V10.9794H11.8681L-1.70927 1.31866C-2.13479 1.61785 -2.52033 1.97088 -2.85713 2.36817Z",
    fill: "#CF1B2B"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_9",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.3955 6.3736L13.7882 6.3736L13.7882 0.219727L6.21172 0.219727V6.3736L-4.3956 6.3736L-4.3956 14.0658H6.21172V20.2197L13.7883 20.2197V14.0658H24.3956V6.3736H24.3955Z",
    fill: "#EEEEEE"
  }), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group_4"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_10",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.2102 20.193H7.68146L7.68146 0.339436H12.2102L12.2102 20.193Z",
    fill: "#CF1B2B"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_11",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.2867 12.5569L-4.39507 12.5569L-4.39507 7.97527L24.2867 7.97527V12.5569Z",
    fill: "#CF1B2B"
  }))))));
};

/* harmony default export */ var English = (English_Eng);
// CONCATENATED MODULE: ./src/components/layout/header-controls/language-icons/index.js

/* harmony default export */ var language_icons = ({
  english: English
});
// CONCATENATED MODULE: ./src/components/layout/header-controls/LanguageSelect.jsx





var langugeShortNames = {
  english: 'Eng'
};

var LanguageSelect_LanguageSelect = function LanguageSelect(_ref) {
  var language = _ref.language;
  var Component = language_icons[language];
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(Component, null), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    px: "5px"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_MenuItem, {
    active: false
  }, langugeShortNames[language])), /*#__PURE__*/react_default.a.createElement(header_controls_TriangleIcon, null));
};

/* harmony default export */ var header_controls_LanguageSelect = (LanguageSelect_LanguageSelect);
// CONCATENATED MODULE: ./src/components/layout/header-controls/CloseIcon.jsx
function CloseIcon_extends() { CloseIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CloseIcon_extends.apply(this, arguments); }



var CloseIcon_CloseIcon = function CloseIcon(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", CloseIcon_extends({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group 12 Copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path 5",
    d: "M16 1L1 16.2989",
    stroke: "#2EB4FF",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path 5_2",
    d: "M1 1L16.8371 16.2989",
    stroke: "#2EB4FF",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/* harmony default export */ var header_controls_CloseIcon = (CloseIcon_CloseIcon);
// CONCATENATED MODULE: ./src/components/layout/header-controls/index.js









// CONCATENATED MODULE: ./src/components/layout/HeaderLine.jsx





var menuIndent = {
  0: '16px',
  xl: '46px'
};

var HeaderLine_DesktopHeader = function DesktopHeader(_ref) {
  var links = _ref.links,
      activeUrl = _ref.activeUrl,
      setActiveUrl = _ref.setActiveUrl,
      userLinks = _ref.userLinks,
      tabletResolution = _ref.tabletResolution,
      mobileResolution = _ref.mobileResolution,
      changeMobileMenuState = _ref.changeMobileMenuState,
      menuOpened = _ref.menuOpened;
  var onMenuClick = Object(react["useCallback"])(function () {
    return changeMobileMenuState(!menuOpened);
  }, [menuOpened]);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: tabletResolution
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pr: "22px",
    position: "relative",
    top: {
      sm: '4px'
    }
  }, /*#__PURE__*/react_default.a.createElement(layout_Hamburger, {
    bg: "blue.0",
    height: "100%",
    onClick: onMenuClick
  }))), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: mobileResolution
  }, /*#__PURE__*/react_default.a.createElement(header_controls_Logo, {
    justifyContent: "center",
    alignItems: "center",
    isActive: true
  })), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flex: 1,
    justifyContent: {
      0: 'flex-end',
      lg: 'center'
    },
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, null, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: tabletResolution
  }, links.map(function (_ref2, index) {
    var url = _ref2.url,
        title = _ref2.title;
    return /*#__PURE__*/react_default.a.createElement(shared_Box, {
      key: url,
      as: "span",
      pl: index !== 0 && menuIndent
    }, /*#__PURE__*/react_default.a.createElement("a", {
      href: url
    }, /*#__PURE__*/react_default.a.createElement(header_controls_MenuItem, {
      active: activeUrl.indexOf(url) >= 0,
      onClick: function onClick() {
        return setActiveUrl(url);
      }
    }, title)));
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: menuIndent,
    pr: {
      0: '32px',
      lg: 0
    }
  }, /*#__PURE__*/react_default.a.createElement(header_controls_LanguageSelect, {
    language: "english"
  })))), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    alignItems: "center"
  }, userLinks.map(function (_ref3, index) {
    var url = _ref3.url,
        title = _ref3.title;
    return /*#__PURE__*/react_default.a.createElement(react["Fragment"], {
      key: url
    }, index !== 0 && /*#__PURE__*/react_default.a.createElement(shared_Box, {
      width: "1px",
      as: "span",
      mx: "6px",
      height: "13px",
      bg: "gray.2"
    }), /*#__PURE__*/react_default.a.createElement("a", {
      href: url
    }, /*#__PURE__*/react_default.a.createElement(header_controls_MenuItem, {
      active: activeUrl.indexOf(url) >= 0,
      onClick: function onClick() {
        return setActiveUrl(url);
      }
    }, title)));
  }), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    pl: "30px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    position: "relative"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_ShopIcon, null), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    position: "absolute",
    top: "-12px",
    right: "-12px"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_RoundMarkIcon, null))), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: mobileResolution
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "20px"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_SearchIcon, null))))));
};

/* harmony default export */ var HeaderLine = (HeaderLine_DesktopHeader);
// CONCATENATED MODULE: ./src/components/layout/links.js
var headerLinks = [{
  url: '#featured',
  title: 'Featured'
}, {
  url: '#things_to_do',
  title: 'Things to do'
}, {
  url: '#beauty_spas',
  title: 'Beauty & Spas'
}, {
  url: '#local',
  title: 'Local'
}];
var links_userLinks = [{
  url: '#login',
  title: 'Login'
}];
var companyLinks = [{
  url: '#company1',
  title: 'About'
}, {
  url: '#company2',
  title: 'Blog'
}, {
  url: '#company3',
  title: 'Press'
}, {
  url: '#company4',
  title: 'Investor Relations'
}, {
  url: '#company5',
  title: 'Management Team'
}, {
  url: '#company6',
  title: 'In Your Community'
}];
var workLinks = [{
  url: '#work1',
  title: 'Join the Coupon Bazaar'
}, {
  url: '#work2',
  title: 'Run a Groupon Deal'
}, {
  url: '#work3',
  title: 'Learn About Groupon Merchant'
}, {
  url: '#work4',
  title: 'Affiliate Program'
}, {
  url: '#work5',
  title: 'Vendor Code of Conduct'
}];
var moreLinks = [{
  url: '#more1',
  title: 'Customer Support'
}, {
  url: '#more2',
  title: 'Refund Policies'
}, {
  url: '#more3',
  title: 'FAQ'
}, {
  url: '#more4',
  title: 'Miles & Points'
}];
var mainLinks = [].concat(headerLinks, [{
  url: '#main1',
  title: 'Goods'
}, {
  url: '#main2',
  title: 'Coupons'
}, {
  url: '#main3',
  title: 'Contacts'
}]);
// CONCATENATED MODULE: ./src/components/layout/LogoCopyright.jsx



var YEAR = new Date().getFullYear();

var LogoCopyright_LogoCopyright = function LogoCopyright(_ref) {
  var size = _ref.size;
  return /*#__PURE__*/react_default.a.createElement(shared_Box, null, /*#__PURE__*/react_default.a.createElement(header_controls_Logo, {
    isActive: true,
    size: size
  }), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    as: "span",
    color: "gray.2",
    fontSize: "12px",
    pt: "10px"
  }, "\xA9", ' ', YEAR, ' ', "Groupon, Inc. All Rights Reserved"));
};

/* harmony default export */ var layout_LogoCopyright = (LogoCopyright_LogoCopyright);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Facebook.jsx
function Facebook_extends() { Facebook_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Facebook_extends.apply(this, arguments); }



var Facebook_Facebook = function Facebook(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Facebook_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "facebook copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Oval",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9004 27.8008C21.5774 27.8008 27.8008 21.5774 27.8008 13.9004C27.8008 6.22342 21.5774 0 13.9004 0C6.22342 0 0 6.22342 0 13.9004C0 21.5774 6.22342 27.8008 13.9004 27.8008Z",
    fill: "#3B5998"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.4352 13.362H15.2515V21.3623H11.9429V13.362H10.3694V10.5504H11.9429V8.73102C11.9429 7.42994 12.561 5.39258 15.281 5.39258L17.7317 5.40283V8.13197H15.9535C15.6619 8.13197 15.2517 8.27769 15.2517 8.89835V10.5531H17.7243L17.4352 13.362Z",
    fill: "white"
  })));
};

/* harmony default export */ var social_icons_Facebook = (Facebook_Facebook);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Linkedin.jsx
function Linkedin_extends() { Linkedin_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Linkedin_extends.apply(this, arguments); }



var Linkedin_Linkedin = function Linkedin(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Linkedin_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "linkedin copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9673 0C21.6817 0 27.9347 6.25388 27.9347 13.9674C27.9347 21.6809 21.6817 27.9347 13.9673 27.9347C6.25292 27.9347 0 21.6808 0 13.9674C0 6.25397 6.25301 0 13.9673 0Z",
    fill: "#0E76A8"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.4756 8.29303C10.4756 9.01585 9.88899 9.60251 9.16617 9.60251C8.44335 9.60251 7.85669 9.01594 7.85669 8.29312C7.85669 7.5703 8.44335 6.98364 9.16617 6.98364C9.88899 6.98364 10.4756 7.5702 10.4756 8.29303ZM18.0599 10.1717C16.7906 10.1717 15.6549 10.6352 14.8492 11.6584V10.445H12.2242V19.1912H14.8492V14.4615C14.8492 13.4619 15.765 12.4868 16.912 12.4868C18.059 12.4868 18.3419 13.4619 18.3419 14.437V19.1903H20.9573V14.2424C20.9572 10.8055 19.3301 10.1717 18.0599 10.1717ZM7.87069 19.1911H10.4861V10.4737H7.87069V19.1911Z",
    fill: "white"
  })));
};

/* harmony default export */ var social_icons_Linkedin = (Linkedin_Linkedin);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Telegram.jsx
function Telegram_extends() { Telegram_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Telegram_extends.apply(this, arguments); }



var Telegram_Telegram = function Telegram(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Telegram_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "telegram copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Oval",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9998 27.9997C21.7317 27.9997 27.9997 21.7317 27.9997 13.9998C27.9997 6.26794 21.7317 0 13.9998 0C6.26794 0 0 6.26794 0 13.9998C0 21.7317 6.26794 27.9997 13.9998 27.9997Z",
    fill: "#41B4E6"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.6404 16.0397L18.9673 20.8165L22.161 7.18359L5.83911 13.6039L10.8057 15.2489L19.8697 9.16897L12.6404 16.0397Z",
    fill: "white"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8057 15.2489L12.1659 20.1436L12.6404 16.0397L19.8697 9.16895L10.8057 15.2489Z",
    fill: "#D2D2D7"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_3",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.6965 17.5921L12.1658 20.1436L12.6403 16.0397L14.6965 17.5921Z",
    fill: "#B9B9BE"
  })));
};

/* harmony default export */ var social_icons_Telegram = (Telegram_Telegram);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Twitter.jsx
function Twitter_extends() { Twitter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Twitter_extends.apply(this, arguments); }



var Twitter_Twitter = function Twitter(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Twitter_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Group 16 Copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Oval",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z",
    fill: "#03A9F4"
  }), /*#__PURE__*/react_default.a.createElement("g", {
    id: "icons8-twitter"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 9.41918C21.4483 9.66164 20.8559 9.82328 20.231 9.89925C20.8657 9.52425 21.3555 8.92619 21.585 8.21983C20.9894 8.56735 20.3303 8.82112 19.6305 8.95528C19.0706 8.3653 18.2716 8 17.3862 8C15.6872 8 14.3088 9.35614 14.3088 11.0291C14.3088 11.2651 14.3364 11.4962 14.3885 11.7193C11.8318 11.5932 9.5632 10.3858 8.04644 8.5528C7.77954 9.00054 7.62981 9.52425 7.62981 10.0787C7.62981 11.1293 8.17175 12.0555 8.99848 12.6002C8.49398 12.5857 8.01877 12.445 7.60378 12.222C7.60378 12.2317 7.60378 12.2446 7.60378 12.2575C7.60378 13.7268 8.66486 14.9504 10.071 15.2301C9.81382 15.2996 9.54204 15.3384 9.26212 15.3384C9.06358 15.3384 8.86991 15.3157 8.68276 15.2818C9.07334 16.4828 10.2093 17.3605 11.5568 17.3863C10.5022 18.1977 9.17587 18.6843 7.73397 18.6843C7.48497 18.6843 7.24086 18.6697 7 18.6406C8.36378 19.4973 9.98145 20 11.7179 20C17.3781 20 20.4751 15.3836 20.4751 11.3782C20.4751 11.2473 20.4702 11.1164 20.4637 10.9887C21.0675 10.5636 21.5883 10.0302 22 9.41918Z",
    fill: "white"
  }))));
};

/* harmony default export */ var social_icons_Twitter = (Twitter_Twitter);
// CONCATENATED MODULE: ./src/components/layout/social-icons/Whatsapp.jsx
function Whatsapp_extends() { Whatsapp_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Whatsapp_extends.apply(this, arguments); }



var Whatsapp_WhatsApp = function WhatsApp(props) {
  return /*#__PURE__*/react_default.a.createElement("svg", Whatsapp_extends({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react_default.a.createElement("g", {
    id: "whatsapp copy"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.0035 0H13.9965C6.27725 0 0 6.279 0 14C0 17.0625 0.987 19.901 2.66525 22.2057L0.9205 27.4067L6.30175 25.6865C8.5155 27.153 11.1562 28 14.0035 28C21.7227 28 28 21.7192 28 14C28 6.28075 21.7227 0 14.0035 0Z",
    fill: "#4CAF50"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Path_2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.1497 19.7697C21.812 20.7234 20.4715 21.5144 19.4022 21.7454C18.6707 21.9012 17.7152 22.0254 14.4987 20.6919C10.3845 18.9874 7.73497 14.8067 7.52847 14.5354C7.33072 14.2642 5.86597 12.3217 5.86597 10.3127C5.86597 8.3037 6.88622 7.32545 7.29747 6.90545C7.63522 6.5607 8.19347 6.4032 8.72897 6.4032C8.90222 6.4032 9.05797 6.41195 9.19797 6.41895C9.60922 6.43645 9.81572 6.46095 10.087 7.1102C10.4247 7.92395 11.2472 9.93295 11.3452 10.1394C11.445 10.3459 11.5447 10.6259 11.4047 10.8972C11.2735 11.1772 11.158 11.3014 10.9515 11.5394C10.745 11.7774 10.549 11.9594 10.3425 12.2149C10.1535 12.4372 9.93997 12.6752 10.178 13.0864C10.416 13.4889 11.2385 14.8312 12.4495 15.9092C14.0122 17.3004 15.2792 17.7449 15.7325 17.9339C16.0702 18.0739 16.4727 18.0407 16.7195 17.7782C17.0327 17.4404 17.4195 16.8804 17.8132 16.3292C18.0932 15.9337 18.4467 15.8847 18.8177 16.0247C19.1957 16.1559 21.196 17.1447 21.6072 17.3494C22.0185 17.5559 22.2897 17.6539 22.3895 17.8272C22.4875 18.0004 22.4875 18.8142 22.1497 19.7697Z",
    fill: "#FAFAFA"
  })));
};

/* harmony default export */ var Whatsapp = (Whatsapp_WhatsApp);
// CONCATENATED MODULE: ./src/components/layout/social-icons/index.js





// CONCATENATED MODULE: ./src/components/layout/SocialButtons.jsx




var SocialButtons_SocialButtons = function SocialButtons() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Box, null, /*#__PURE__*/react_default.a.createElement(social_icons_Facebook, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "20px"
  }, /*#__PURE__*/react_default.a.createElement(social_icons_Twitter, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "20px"
  }, /*#__PURE__*/react_default.a.createElement(Whatsapp, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "20px"
  }, /*#__PURE__*/react_default.a.createElement(social_icons_Linkedin, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "20px"
  }, /*#__PURE__*/react_default.a.createElement(social_icons_Telegram, null)));
};

/* harmony default export */ var layout_SocialButtons = (SocialButtons_SocialButtons);
// CONCATENATED MODULE: ./src/components/layout/MobileMenu.jsx
function MobileMenu_extends() { MobileMenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MobileMenu_extends.apply(this, arguments); }

function MobileMenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MobileMenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MobileMenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MobileMenu_templateObject() {
  var data = MobileMenu_taggedTemplateLiteral(["\n    left: 0px;\n    z-index: 10;\n    padding: 20px;\n    overflow-y: auto;\n    svg {\n        cursor: pointer;\n    }\n    &.", "-enter {\n        transform: translateX(-600px);\n        opacity: 0;\n    }\n    &.", "-enter-active {\n        transform: translateX(0px);\n        opacity: 1;\n        transition: all ", "ms ease-out;\n    }\n\n    &.", "-exit {\n        transform: translateX(0px);\n        opacity: 1;\n    }\n    &.", "-exit-active {\n        transform: translateX(-600px);\n        opacity: 0;\n        transition: all ", "ms ease-out;\n    }\n"]);

  MobileMenu_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function MobileMenu_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var menuAnimation = {
  classNames: 'mobile-menu',
  timeout: 350
};
var Container = Object(styled_components_browser_esm["d" /* default */])(shared_Box)(MobileMenu_templateObject(), menuAnimation.classNames, menuAnimation.classNames, menuAnimation.timeout, menuAnimation.classNames, menuAnimation.classNames, menuAnimation.timeout);
Container.defaultProps = {
  bg: 'gray.0',
  position: 'relative',
  width: '100%',
  height: '100%'
};
var textProps = {
  fontSize: '14px',
  lineHeight: '17px',
  fontWeight: '600'
};

var MobileMenu_GroupLinks = function GroupLinks(_ref) {
  var title = _ref.title,
      links = _ref.links,
      rest = MobileMenu_objectWithoutProperties(_ref, ["title", "links"]);

  return /*#__PURE__*/react_default.a.createElement(shared_Box, rest, title && /*#__PURE__*/react_default.a.createElement(shared_Text, MobileMenu_extends({
    letterSpacing: "0.65625px"
  }, textProps, {
    pb: "17px"
  }), title), /*#__PURE__*/react_default.a.createElement(shared_Box, null, links.map(function (_ref2) {
    var linkTitle = _ref2.title,
        url = _ref2.url;
    return /*#__PURE__*/react_default.a.createElement("a", {
      key: url,
      href: url
    }, /*#__PURE__*/react_default.a.createElement(shared_Text, MobileMenu_extends({
      color: "blue.0"
    }, textProps, {
      pb: "17px"
    }), linkTitle));
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "100%",
    height: "1px",
    bg: "gray.3"
  }));
};

var MobileMenu_MobileMenu = function MobileMenu(_ref3) {
  var onClose = _ref3.onClose,
      rest = MobileMenu_objectWithoutProperties(_ref3, ["onClose"]);

  Object(react["useEffect"])(function () {
    return function () {
      return onClose();
    };
  }, []);
  return /*#__PURE__*/react_default.a.createElement(Container, rest, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_CloseIcon, {
    onClick: onClose
  })), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    links: headerLinks
  }), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    title: "Company",
    links: companyLinks,
    pt: "20px"
  }), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    title: "Work with Coupon Bazaar",
    links: workLinks,
    pt: "20px"
  }), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    title: "More",
    links: moreLinks,
    pt: "20px"
  }), /*#__PURE__*/react_default.a.createElement(MobileMenu_GroupLinks, {
    title: "Main",
    links: mainLinks,
    pt: "20px"
  }), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flexDirection: "column",
    py: "20px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "20px"
  }, /*#__PURE__*/react_default.a.createElement(layout_LogoCopyright, {
    size: "small"
  })), /*#__PURE__*/react_default.a.createElement(shared_Flex, null, /*#__PURE__*/react_default.a.createElement(layout_SocialButtons, null))));
};

/* harmony default export */ var layout_MobileMenu = (MobileMenu_MobileMenu);
// CONCATENATED MODULE: ./src/components/layout/Overlay.jsx
function Overlay_templateObject() {
  var data = Overlay_taggedTemplateLiteral(["\n    &.", "-enter {\n        opacity: 0;\n    }\n    &.", "-enter-active {\n        opacity: 1;\n        transition: opacity ", "ms ease-out;\n    }\n\n    &.", "-exit {\n        opacity: 1;\n    }\n    &.", "-exit-active {\n        opacity: 0;\n        transition: opacity ", "ms ease-out;\n    }\n"]);

  Overlay_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Overlay_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var overlayAnimation = {
  classNames: 'overlay',
  timeout: 350
};
var Overlay = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  bg: 'rgba(0,0,0,.5)',
  bottom: '0px',
  left: '0px',
  position: 'fixed',
  right: '0px',
  zIndex: 9
})(Overlay_templateObject(), overlayAnimation.classNames, overlayAnimation.classNames, overlayAnimation.timeout, overlayAnimation.classNames, overlayAnimation.classNames, overlayAnimation.timeout);
/* harmony default export */ var layout_Overlay = (Overlay);
// CONCATENATED MODULE: ./src/components/layout/index.js






// CONCATENATED MODULE: ./src/components/shared/Modal.jsx
function Modal_extends() { Modal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Modal_extends.apply(this, arguments); }

function Modal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Modal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Modal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Modal_templateObject() {
  var data = Modal_taggedTemplateLiteral(["\n    margin: 0 auto;\n    top: 0;\n    z-index: 15;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, 0);\n    top: 10%;\n    &.modal-enter {\n        transform: translate(-50%, -50%);\n        opacity: 0;\n    }\n    &.modal-enter-active {\n        transform: translate(-50%, 0);\n        opacity: 1;\n        transition: all ", "ms ease-out;\n    }\n\n    &.modal-exit {\n        transform: translate(-50%, 0);\n        opacity: 1;\n    }\n    &.modal-exit-active {\n        transform: translate(-50%, -50%);\n        opacity: 0;\n        transition: all ", "ms ease-out;\n    }\n"]);

  Modal_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Modal_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var timeout = overlayAnimation.timeout;
var modalContainer = document.getElementById('modal');
var Modal_Container = Object(styled_components_browser_esm["d" /* default */])(shared_Box)(Modal_templateObject(), timeout, timeout);

var Modal_Modal = function Modal(_ref) {
  var children = _ref.children,
      open = _ref.open,
      onClose = _ref.onClose,
      rest = Modal_objectWithoutProperties(_ref, ["children", "open", "onClose"]);

  return react_dom_default.a.createPortal( /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(CSSTransition["a" /* default */], {
    "in": open,
    timeout: timeout,
    classNames: "modal",
    unmountOnExit: true
  }, /*#__PURE__*/react_default.a.createElement(Modal_Container, rest, children)), /*#__PURE__*/react_default.a.createElement(CSSTransition["a" /* default */], Modal_extends({
    "in": open
  }, overlayAnimation, {
    unmountOnExit: true
  }), /*#__PURE__*/react_default.a.createElement(layout_Overlay, {
    top: "0px",
    onClick: onClose
  }))), modalContainer);
};

/* harmony default export */ var shared_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./src/components/shared/Text.jsx
function Text_templateObject() {
  var data = Text_taggedTemplateLiteral(["\n    display: block;\n    ", "\n"]);

  Text_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Text_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var enhanceStyledComponent = Object(index_esm["f" /* compose */])(index_esm["r" /* lineHeight */], index_esm["m" /* fontWeight */], index_esm["q" /* letterSpacing */]);
var Text = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  as: 'span'
})(Text_templateObject(), enhanceStyledComponent);
/* harmony default export */ var shared_Text = (Text);
// CONCATENATED MODULE: ./src/components/shared/index.js




// EXTERNAL MODULE: ./node_modules/react-lines-ellipsis/lib/index.js
var lib = __webpack_require__("./node_modules/react-lines-ellipsis/lib/index.js");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__("./node_modules/memoize-one/dist/memoize-one.esm.js");

// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/Star.jsx


var Star_Star = function Star(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/react_default.a.createElement("svg", {
    width: "16",
    height: "15",
    viewBox: "0 0 16 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Star",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z",
    fill: active ? '#FFC300' : '#9FA0A2'
  }));
};

/* harmony default export */ var coupon_controls_Star = (Star_Star);
// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/Rating.jsx



var stars = [1, 2, 3, 4, 5];

var Rating_Rating = function Rating(_ref) {
  var value = _ref.value,
      children = _ref.children;
  var ceilValue = Math.ceil(value);
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, null, /*#__PURE__*/react_default.a.createElement(shared_Box, null, stars.map(function (val, ind) {
    return /*#__PURE__*/react_default.a.createElement(shared_Box, {
      key: val,
      pl: ind !== 0 && '6px',
      as: "span"
    }, /*#__PURE__*/react_default.a.createElement(coupon_controls_Star, {
      active: val <= ceilValue
    }));
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    fontSize: "12px",
    pl: "8px"
  }, children));
};

/* harmony default export */ var coupon_controls_Rating = (Rating_Rating);
// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/Price.jsx
function Price_templateObject() {
  var data = Price_taggedTemplateLiteral(["\n    padding: 0 6px;\n    position: relative;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 22px;\n    letter-spacing: 0.4375px;\n"]);

  Price_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Price_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var PriceStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box)(Price_templateObject());

var Price_Price = function Price(_ref) {
  var children = _ref.children,
      isOld = _ref.isOld,
      term = _ref.term;
  return /*#__PURE__*/react_default.a.createElement(PriceStyled, {
    color: !isOld ? 'green.1' : undefined
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    as: "span",
    pr: "2px"
  }, term), children, isOld && /*#__PURE__*/react_default.a.createElement(shared_Box, {
    bg: "red.0",
    position: "absolute",
    top: "50%",
    left: "0px",
    right: "0px",
    height: "1px"
  }));
};

/* harmony default export */ var coupon_controls_Price = (Price_Price);
// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/Discount.jsx
function Discount_templateObject() {
  var data = Discount_taggedTemplateLiteral(["\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    span {\n        font-weight: 600;\n        font-size: 14px;\n        line-height: 17px;\n        text-align: center;\n        letter-spacing: 0.65625px;\n    }\n"]);

  Discount_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Discount_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var DiscountStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box).attrs({
  bg: 'green.0'
})(Discount_templateObject());

var Discount_Discount = function Discount(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react_default.a.createElement(DiscountStyled, null, /*#__PURE__*/react_default.a.createElement("span", null, children));
};

/* harmony default export */ var coupon_controls_Discount = (Discount_Discount);
// CONCATENATED MODULE: ./src/components/coupon/coupon-controls/index.js



// CONCATENATED MODULE: ./src/components/coupon/Coupon.jsx
function Coupon_extends() { Coupon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Coupon_extends.apply(this, arguments); }

function Coupon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Coupon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Coupon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var isEmpty = Object(memoize_one_esm["a" /* default */])(function (val) {
  return val === undefined || val === 0;
});

var Coupon_Coupon = function Coupon(_ref) {
  var name = _ref.name,
      title = _ref.title,
      image = _ref.image,
      rating = _ref.rating,
      ratings = _ref.ratings,
      longDescription = _ref.longDescription,
      couponTerm = _ref.couponTerm,
      priceTerm = _ref.priceTerm,
      oldPrice = _ref.oldPrice,
      newPrice = _ref.newPrice,
      discount = _ref.discount,
      onClick = _ref.onClick,
      couponPrice = _ref.couponPrice,
      rest = Coupon_objectWithoutProperties(_ref, ["name", "title", "image", "rating", "ratings", "longDescription", "couponTerm", "priceTerm", "oldPrice", "newPrice", "discount", "onClick", "couponPrice"]);

  return /*#__PURE__*/react_default.a.createElement(shared_Box, Coupon_extends({
    bg: "gray.0",
    width: "300px",
    height: "300px",
    position: "relative",
    onClick: onClick
  }, rest), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    position: "relative"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    height: "117px",
    style: {
      backgroundImage: "url(".concat(image, ")"),
      backgroundSize: 'cover'
    }
  }), !isEmpty(discount) && /*#__PURE__*/react_default.a.createElement(shared_Box, {
    position: "absolute",
    top: "20px",
    right: "10px"
  }, /*#__PURE__*/react_default.a.createElement(coupon_controls_Discount, null, "".concat(discount, "%")))), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    px: "20px",
    pt: "10px"
  }, !isEmpty(rating) && /*#__PURE__*/react_default.a.createElement(coupon_controls_Rating, {
    value: rating
  }, "".concat(rating, " (").concat(ratings, " ratings)")), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    letterSpacing: "0.4375px",
    lineHeight: "22px",
    fontWeight: "bold",
    pt: "10px",
    fontSize: "14px"
  }, name), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    fontWeight: "200",
    pt: "8px",
    fontSize: "12px"
  }, /*#__PURE__*/react_default.a.createElement(lib_default.a, {
    text: longDescription,
    maxLine: "2",
    ellipsis: "...",
    trimRight: true,
    basedOn: "letters"
  })), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    fontWeight: "normal",
    pt: "8px",
    fontSize: "12px"
  }, title), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    position: "absolute",
    bottom: "20px",
    width: "100%",
    pr: "40px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Text, {
    color: "blue.0",
    letterSpacing: "0.4375px",
    lineHeight: "22px",
    fontWeight: "bold",
    fontSize: "14px",
    flex: 1
  }, "".concat(couponPrice, " ").concat(couponTerm)), oldPrice !== newPrice && /*#__PURE__*/react_default.a.createElement(coupon_controls_Price, {
    term: priceTerm,
    isOld: true
  }, oldPrice), /*#__PURE__*/react_default.a.createElement(coupon_controls_Price, {
    term: priceTerm
  }, newPrice))));
};

Coupon_Coupon.defaultProps = {
  priceTerm: '$'
};
/* harmony default export */ var coupon_Coupon = (Object(react["memo"])(Coupon_Coupon));
// CONCATENATED MODULE: ./src/components/coupon/index.js

/* harmony default export */ var components_coupon = (coupon_Coupon);
// CONCATENATED MODULE: ./src/containers/Coupons.jsx
function Coupons_extends() { Coupons_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Coupons_extends.apply(this, arguments); }

function Coupons_templateObject() {
  var data = Coupons_taggedTemplateLiteral(["\n    cursor: pointer;\n    transition: box-shadow linear 200ms;\n    &:hover {\n        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);\n    }\n"]);

  Coupons_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Coupons_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Card = Object(styled_components_browser_esm["d" /* default */])(shared_Box)(Coupons_templateObject());

var Coupons_Coupons = function Coupons(_ref) {
  var onDialogOpen = _ref.onDialogOpen,
      coupons = _ref.coupons;
  return coupons.map(function (coupon) {
    return /*#__PURE__*/react_default.a.createElement(shared_Box, {
      key: coupon.id,
      p: "20px",
      width: {
        0: '100%',
        md: 'initial'
      }
    }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
      as: Card
    }, /*#__PURE__*/react_default.a.createElement(components_coupon, Coupons_extends({
      width: {
        0: '100%',
        md: '300px'
      },
      height: "300px"
    }, coupon, {
      onClick: function onClick() {
        return onDialogOpen(coupon);
      }
    }))));
  });
};

/* harmony default export */ var containers_Coupons = (Coupons_Coupons);
// CONCATENATED MODULE: ./src/styled-components/theme/index.js
var theme = {
  breakpoints: {
    sm: '620px',
    md: '768px',
    lg: '1024px',
    xl: '1200px'
  },
  colors: {
    black: ['#333'],
    blue: ['#2EB4FF'],
    gray: ['#fff', '#F7F8FA', '#A0A6C3', '#D8D8D8'],
    red: ['#FF0000'],
    green: ['#B3FFDE', '#2d9c29']
  }
};
/* harmony default export */ var styled_components_theme = (theme);
// CONCATENATED MODULE: ./src/components/service/useAppDialogs.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useAppDialogs() {
  var _useState = Object(react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dialogOpened = _useState2[0],
      changeDialogState = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      resultOpened = _useState4[0],
      changeResultState = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      formOpened = _useState6[0],
      changeFormState = _useState6[1];

  var _useState7 = Object(react["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedCoupon = _useState8[0],
      selectCoupon = _useState8[1];

  var _useMemo = Object(react["useMemo"])(function () {
    return [function (coupon) {
      selectCoupon(coupon);
      changeDialogState(true);
    }, function () {
      return changeDialogState(false);
    }, function () {
      return changeResultState(true);
    }, function () {
      return changeResultState(false);
    }, function () {
      return changeFormState(true);
    }, function () {
      return changeFormState(false);
    }];
  }, []),
      _useMemo2 = _slicedToArray(_useMemo, 6),
      onDialogOpen = _useMemo2[0],
      onDialogClose = _useMemo2[1],
      onResultOpen = _useMemo2[2],
      onResultClose = _useMemo2[3],
      onFormOpened = _useMemo2[4],
      onFormClose = _useMemo2[5];

  return {
    selectedCoupon: selectedCoupon,
    dialog: [dialogOpened, onDialogOpen, onDialogClose],
    result: [resultOpened, onResultOpen, onResultClose],
    form: [formOpened, onFormOpened, onFormClose]
  };
}

/* harmony default export */ var service_useAppDialogs = (useAppDialogs);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__("./node_modules/redux/es/redux.js");

// CONCATENATED MODULE: ./src/components/service/useDispatchedActions.js



function useDispatchedActions(actions) {
  var dispatch = Object(es["b" /* useDispatch */])();
  var dispatchedActions = Object(react["useMemo"])(function () {
    return Object(redux["bindActionCreators"])(actions, dispatch);
  }, []);
  return dispatchedActions;
}
// CONCATENATED MODULE: ./src/components/service/index.js


// CONCATENATED MODULE: ./src/libs/redux-actions/createReducer.js
function createReducer(initialState, handlers) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (Object.keys(handlers).find(function (x) {
      return x === action.type;
    })) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}
// CONCATENATED MODULE: ./src/libs/redux-actions/makeActionCreator.js
function makeActionCreator(type) {
  for (var _len = arguments.length, argNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    argNames[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var action = {
      type: type
    };
    argNames.forEach(function (_, index) {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}
// CONCATENATED MODULE: ./src/libs/redux-actions/toFetchConst.js
var fetchConst = function fetchConst(constant) {
  return {
    CLEAR: "".concat(constant, "_CLEAR"),
    ERROR: "".concat(constant, "_ERROR"),
    REQUEST: "".concat(constant, "_REQUEST"),
    SUCCESS: "".concat(constant, "_SUCCESS")
  };
};

/* harmony default export */ var toFetchConst = (fetchConst);
// CONCATENATED MODULE: ./src/libs/redux-actions/pipeReducers.js
var pipeReducers = function pipeReducers() {
  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (state, action) {
    return reducers.reduce(function (next, reducer) {
      return reducer(next, action);
    }, state);
  };
};

/* harmony default export */ var redux_actions_pipeReducers = (pipeReducers);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.module.js
var immer_module = __webpack_require__("./node_modules/immer/dist/immer.module.js");

// CONCATENATED MODULE: ./src/libs/redux-actions/createImmutableReducer.js

function createImmutableReducer(initialState, handlers) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (Object.keys(handlers).find(function (x) {
      return x === action.type;
    })) {
      return Object(immer_module["a" /* default */])(state, function (draftState) {
        handlers[action.type](draftState, action);
      });
    }

    return state;
  };
}
// EXTERNAL MODULE: ./node_modules/ramda/es/is.js
var is = __webpack_require__("./node_modules/ramda/es/is.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/assocPath.js + 3 modules
var assocPath = __webpack_require__("./node_modules/ramda/es/assocPath.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/concat.js + 17 modules
var concat = __webpack_require__("./node_modules/ramda/es/concat.js");

// CONCATENATED MODULE: ./src/libs/service/pipe.js
var pipe = function pipe(value) {
  for (var _len = arguments.length, functions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    functions[_key - 1] = arguments[_key];
  }

  return functions.reduce(function (newValue, func) {
    return func(newValue);
  }, value);
};

var pipeF = function pipeF() {
  for (var _len2 = arguments.length, functions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    functions[_key2] = arguments[_key2];
  }

  return function (value) {
    return pipe.apply(void 0, [value].concat(functions));
  };
};
/* harmony default export */ var service_pipe = (pipe);
// CONCATENATED MODULE: ./src/libs/service/index.js

// CONCATENATED MODULE: ./src/libs/redux-actions/fetchReducer.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var fetchReducer_fetchReducer = function fetchReducer(fetchType) {
  return function (key, initialValue) {
    var _createReducer;

    var initialState = {};
    var isArray = Object(is["a" /* default */])(Array, initialValue);
    return createReducer(initialState, (_createReducer = {}, _defineProperty(_createReducer, fetchType.REQUEST, Object(assocPath["a" /* default */])([key, 'isFetching'], true)), _defineProperty(_createReducer, fetchType.SUCCESS, function (state, _ref) {
      var response = _ref.response;
      return service_pipe(Object(assocPath["a" /* default */])([key, 'data'], isArray ? Object(concat["a" /* default */])(state[key].data, response) : response, state), Object(assocPath["a" /* default */])([key, 'isFetching'], false));
    }), _defineProperty(_createReducer, fetchType.ERROR, Object(assocPath["a" /* default */])([key, 'isFetching'], false)), _defineProperty(_createReducer, fetchType.CLEAR, function (state) {
      return service_pipe(Object(assocPath["a" /* default */])([key, 'data'], initialValue, state), Object(assocPath["a" /* default */])([key, 'isFetching'], false));
    }), _createReducer));
  };
};

/* harmony default export */ var redux_actions_fetchReducer = (fetchReducer_fetchReducer);
// CONCATENATED MODULE: ./src/libs/redux-actions/fetchReducerKey.js
function fetchReducerKey_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fetchReducerKey(key, initialValue) {
  return fetchReducerKey_defineProperty({}, key, {
    data: initialValue,
    isFetching: false
  });
}
// CONCATENATED MODULE: ./src/libs/redux-actions/fetchKey.js
var fetchKey = function fetchKey(key, initialValue) {
  return function (fetchReducerFn) {
    return fetchReducerFn(key, initialValue);
  };
};

/* harmony default export */ var redux_actions_fetchKey = (fetchKey);
// CONCATENATED MODULE: ./src/libs/redux-actions/index.js








// CONCATENATED MODULE: ./src/reducers/root.js
function root_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var root_initialState = {
  modalMenuOpen: false
};
var INIT_APP = 'INIT_APP';
var CHANGE_MOBILE_MENU_STATE = 'CHANGE_MOBILE_MENU_STATE';
var root_changeMobileMenuState = makeActionCreator(CHANGE_MOBILE_MENU_STATE, 'isOpen');
/* harmony default export */ var reducers_root = (createImmutableReducer(root_initialState, root_defineProperty({}, CHANGE_MOBILE_MENU_STATE, function (state, _ref) {
  var isOpen = _ref.isOpen;
  state.modalMenuOpen = isOpen;
})));
// CONCATENATED MODULE: ./src/containers/Header.jsx
function Header_extends() { Header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Header_extends.apply(this, arguments); }

function Header_slicedToArray(arr, i) { return Header_arrayWithHoles(arr) || Header_iterableToArrayLimit(arr, i) || Header_unsupportedIterableToArray(arr, i) || Header_nonIterableRest(); }

function Header_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Header_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Header_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Header_arrayLikeToArray(o, minLen); }

function Header_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Header_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Header_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var breakpoints = styled_components_theme.breakpoints;
var menuHeight = {
  0: '114px',
  sm: '131px'
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.root.modalMenuOpen
  };
};

var Header_Header = function Header() {
  var _useState = Object(react["useState"])(''),
      _useState2 = Header_slicedToArray(_useState, 2),
      activeUrl = _useState2[0],
      setActiveUrl = _useState2[1];

  Object(react["useEffect"])(function () {
    setActiveUrl(window.location.href);
  }, []);

  var _useSelector = Object(es["c" /* useSelector */])(mapStateToProps),
      isOpen = _useSelector.isOpen;

  var _useDispatchedActions = useDispatchedActions(reducers_root_namespaceObject),
      changeMobileMenuState = _useDispatchedActions.changeMobileMenuState;

  var onCloseMenu = Object(react["useCallback"])(function () {
    return changeMobileMenuState(false);
  });
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(header_controls_HeaderLayout, {
    height: menuHeight,
    position: "fixed"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    alignItems: {
      0: 'flex-start',
      sm: 'center'
    },
    height: "100%",
    px: {
      0: '20px',
      lg: '39px',
      xl: '114px'
    },
    pt: {
      0: '14px',
      sm: '0px'
    },
    flexDirection: {
      0: 'column',
      sm: 'row'
    }
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    width: "100%",
    justifyContent: "center"
  }, /*#__PURE__*/react_default.a.createElement(HeaderLine, {
    activeUrl: activeUrl,
    links: headerLinks,
    userLinks: links_userLinks,
    setActiveUrl: setActiveUrl,
    changeMobileMenuState: changeMobileMenuState,
    tabletResolution: breakpoints.lg,
    mobileResolution: breakpoints.sm,
    menuOpened: isOpen
  })), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    width: "100%",
    pt: "10px"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_Logo, {
    isActive: true,
    size: "small"
  }), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(header_controls_SearchIcon, null)))))), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "100%",
    height: menuHeight
  }), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: breakpoints.lg
  }, /*#__PURE__*/react_default.a.createElement(CSSTransition["a" /* default */], Header_extends({
    unmountOnExit: true
  }, menuAnimation, {
    "in": isOpen
  }), /*#__PURE__*/react_default.a.createElement(layout_MobileMenu, {
    top: "0px",
    onClose: onCloseMenu,
    position: "fixed"
  })), /*#__PURE__*/react_default.a.createElement(CSSTransition["a" /* default */], Header_extends({
    unmountOnExit: true
  }, overlayAnimation, {
    "in": isOpen
  }), /*#__PURE__*/react_default.a.createElement(layout_Overlay, {
    onClick: onCloseMenu,
    top: "0px"
  }))));
};

/* harmony default export */ var containers_Header = (Object(react["memo"])(Header_Header));
// CONCATENATED MODULE: ./src/containers/Footer.jsx






var Footer_breakpoints = styled_components_theme.breakpoints;

var Footer_GroupLinks = function GroupLinks(_ref) {
  var title = _ref.title,
      links = _ref.links;
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/react_default.a.createElement(shared_Text, {
    as: "span",
    fontWeight: "bold",
    letterSpacing: "0.66px",
    fontSize: "14px"
  }, title), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pt: "10px"
  }, links.map(function (_ref2) {
    var url = _ref2.url,
        linkTitle = _ref2.title;
    return /*#__PURE__*/react_default.a.createElement("a", {
      key: url,
      href: url
    }, /*#__PURE__*/react_default.a.createElement(shared_Text, {
      color: "gray.2",
      lineHeight: "24px",
      fontSize: "14px"
    }, linkTitle));
  })));
};

var Footer_Footer = function Footer() {
  return /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    flexDirection: "column",
    bg: "gray.0",
    px: "40px"
  }, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    py: "48px",
    justifyContent: {
      xl: 'center'
    }
  }, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.xl
  }, /*#__PURE__*/react_default.a.createElement(layout_LogoCopyright, null)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: {
      xl: '54px'
    }
  }, /*#__PURE__*/react_default.a.createElement(Footer_GroupLinks, {
    title: "Company",
    links: companyLinks
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "54px"
  }, /*#__PURE__*/react_default.a.createElement(Footer_GroupLinks, {
    title: "Work with Coupon Bazaar",
    links: workLinks
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "54px"
  }, /*#__PURE__*/react_default.a.createElement(Footer_GroupLinks, {
    title: "More",
    links: moreLinks
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "54px"
  }, /*#__PURE__*/react_default.a.createElement(Footer_GroupLinks, {
    title: "Main",
    links: mainLinks
  })), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.xl
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    pl: "54px"
  }, /*#__PURE__*/react_default.a.createElement(layout_SocialButtons, null))))), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: Footer_breakpoints.xl
  }, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "100%",
    height: "1px",
    bg: "gray.3"
  })), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    pt: "35px",
    pb: "50px",
    flexDirection: {
      0: 'column',
      sm: 'row'
    }
  }, /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    minWidth: Footer_breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(layout_LogoCopyright, null)), /*#__PURE__*/react_default.a.createElement(react_responsive_default.a, {
    maxWidth: Footer_breakpoints.sm
  }, /*#__PURE__*/react_default.a.createElement(layout_LogoCopyright, {
    size: "small"
  })), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    pl: {
      0: '0',
      sm: '100px'
    },
    pt: {
      0: '20px',
      sm: '0'
    }
  }, /*#__PURE__*/react_default.a.createElement(layout_SocialButtons, null)))));
};

/* harmony default export */ var containers_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/containers/index.js



// CONCATENATED MODULE: ./src/components/modal/controls/Button.jsx
function Button_templateObject() {
  var data = Button_taggedTemplateLiteral([""]);

  Button_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Button_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Button = Object(styled_components_browser_esm["d" /* default */])(shared_Text).attrs({
  as: 'button',
  letterSpacing: '0.4375px',
  lineHeight: '22px',
  fontWeight: 'bold',
  p: '10px',
  fontSize: '18px'
})(Button_templateObject());
/* harmony default export */ var controls_Button = (Button);
// CONCATENATED MODULE: ./src/components/modal/controls/Footer.jsx
function Footer_templateObject2() {
  var data = Footer_taggedTemplateLiteral([""]);

  Footer_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Footer_templateObject() {
  var data = Footer_taggedTemplateLiteral(["\n    border-top: 1px solid ", ";\n"]);

  Footer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Footer_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Border = styled_components_browser_esm["d" /* default */].div(Footer_templateObject(), function (_ref) {
  var colors = _ref.theme.colors;
  return colors.gray[2];
});
var controls_Footer_Footer = Object(styled_components_browser_esm["d" /* default */])(shared_Flex).attrs({
  as: Border,
  bg: 'gray.0',
  justifyContent: 'flex-end',
  px: '10px'
})(Footer_templateObject2());
/* harmony default export */ var controls_Footer = (controls_Footer_Footer);
// CONCATENATED MODULE: ./src/components/modal/controls/SmallLogo.jsx
function SmallLogo_templateObject() {
  var data = SmallLogo_taggedTemplateLiteral(["\n    svg {\n        width: 32px;\n        height: 32px;\n    }\n    span {\n        font-size: 14px;\n    }\n"]);

  SmallLogo_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function SmallLogo_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var SmallLogo = Object(styled_components_browser_esm["d" /* default */])(header_controls_Logo)(SmallLogo_templateObject());
/* harmony default export */ var controls_SmallLogo = (SmallLogo);
// CONCATENATED MODULE: ./src/components/modal/controls/Input.jsx
function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Input_templateObject() {
  var data = Input_taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n    &:focus {\n        border-color: #66afe9;\n        outline: 0;\n        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    }\n"]);

  Input_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Input_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var InputStyled = Object(styled_components_browser_esm["d" /* default */])(shared_Box)(Input_templateObject());
InputStyled.defaultProps = {
  height: '34px'
};

var Input_Input = function Input(_ref) {
  var title = _ref.title,
      control = _ref.control,
      forwardRef = _ref.forwardRef,
      error = _ref.error,
      props = Input_objectWithoutProperties(_ref, ["title", "control", "forwardRef", "error"]);

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(shared_Text, {
    color: error ? 'red.0' : 'black.0',
    fontWeight: "500"
  }, title), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    mt: "4px"
  }, /*#__PURE__*/react_default.a.createElement(InputStyled, Input_extends({
    as: control
  }, props, {
    ref: forwardRef
  }))));
};

Input_Input.defaultProps = {
  control: 'input'
};
/* harmony default export */ var controls_Input = (Input_Input);
// CONCATENATED MODULE: ./src/components/modal/controls/index.js




// CONCATENATED MODULE: ./src/components/modal/Dialog.jsx





var Dialog_Dialog = function Dialog(_ref) {
  var coupon = _ref.coupon,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;
  return /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "600px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    bg: "gray.0",
    p: "16px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    flex: 1
  }, /*#__PURE__*/react_default.a.createElement(components_coupon, coupon)), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: "16px"
  }, /*#__PURE__*/react_default.a.createElement(controls_SmallLogo, null), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "22px",
    fontWeight: "bold",
    pt: "10px",
    fontSize: "22px"
  }, "Lorem Impusm is dummy text"), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "18px",
    pt: "10px",
    fontSize: "14px"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"))), /*#__PURE__*/react_default.a.createElement(controls_Footer, null, /*#__PURE__*/react_default.a.createElement(controls_Button, {
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react_default.a.createElement(controls_Button, {
    color: "blue.0",
    onClick: onSubmit
  }, "Buy")));
};

/* harmony default export */ var modal_Dialog = (Dialog_Dialog);
// CONCATENATED MODULE: ./src/components/modal/Result.jsx




var Result_Result = function Result(_ref) {
  var onClose = _ref.onClose;
  return /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: "600px"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    bg: "gray.0",
    p: "16px",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/react_default.a.createElement(controls_SmallLogo, null), /*#__PURE__*/react_default.a.createElement(shared_Text, {
    lineHeight: "22px",
    pt: "10px",
    fontSize: "18px"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), /*#__PURE__*/react_default.a.createElement(controls_Footer, null, /*#__PURE__*/react_default.a.createElement(controls_Button, {
    onClick: onClose
  }, "Cancel")));
};

/* harmony default export */ var modal_Result = (Result_Result);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/react-hook-form.es.js
var react_hook_form_es = __webpack_require__("./node_modules/react-hook-form/dist/react-hook-form.es.js");

// CONCATENATED MODULE: ./src/components/modal/Form.jsx
function Form_templateObject() {
  var data = Form_taggedTemplateLiteral(["\n    overflow-y: auto;\n    ", "\n    @media (min-height: 800px) {\n        height: initial;\n        @media (max-width: ", ") {\n            height: 700px;\n        }\n    }\n"]);

  Form_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Form_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var HEIGHTS = [300, 400, 500, 600, 700];
var FORM_PARAMETER = 150;
var HeightProps = styled_components_browser_esm["d" /* default */].div(Form_templateObject(), HEIGHTS.reduce(function (accum, val) {
  return "".concat(accum, "\n        @media (min-height: ").concat(val, "px) {\n            height: ").concat(val - FORM_PARAMETER, "px;\n        }\n    ");
}, ''), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.sm;
});

var Form_Form = function Form(_ref2) {
  var onClose = _ref2.onClose,
      onSubmit = _ref2.onSubmit;

  var _useForm = Object(react_hook_form_es["a" /* default */])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  return /*#__PURE__*/react_default.a.createElement(shared_Box, {
    width: {
      0: '100%',
      lg: '800px'
    },
    as: "form",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    bg: "gray.0"
  }, /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    p: "10px",
    justifyContent: "center"
  }, /*#__PURE__*/react_default.a.createElement(controls_SmallLogo, null)), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    bg: "gray.0",
    p: "16px",
    flexDirection: {
      0: 'column',
      sm: 'row'
    },
    as: HeightProps
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    flex: 1
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "image",
    title: "Image url",
    forwardRef: register({
      required: true
    }),
    error: errors.image
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "number",
    name: "oldPrice",
    title: "Old price",
    forwardRef: register({
      required: true
    }),
    error: errors.oldPrice
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    type: "number",
    name: "newPrice",
    title: "New price",
    forwardRef: register({
      required: true
    }),
    error: errors.newPrice
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "name",
    title: "Name",
    forwardRef: register({
      required: true
    }),
    error: errors.name
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "shortDescription",
    height: "150px",
    width: "100%",
    control: "textarea",
    title: "Short description",
    forwardRef: register({
      required: true
    }),
    error: errors.shortDescription
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "title",
    title: "Title",
    forwardRef: register({
      required: true
    }),
    error: errors.title
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "couponTerm",
    title: "Coupon term",
    forwardRef: register({
      required: true
    }),
    error: errors.couponTerm
  }))), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pl: {
      sm: '16px'
    },
    flex: 1
  }, /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "longTitle",
    title: "Long title",
    forwardRef: register({
      required: true
    }),
    error: errors.longTitle
  })), /*#__PURE__*/react_default.a.createElement(shared_Box, {
    pb: "8px"
  }, /*#__PURE__*/react_default.a.createElement(controls_Input, {
    name: "longDescription",
    height: "150px",
    width: "100%",
    control: "textarea",
    title: "Long description",
    forwardRef: register({
      required: true
    }),
    error: errors.longDescription
  }))))), /*#__PURE__*/react_default.a.createElement(controls_Footer, null, /*#__PURE__*/react_default.a.createElement(controls_Button, {
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react_default.a.createElement(controls_Button, {
    color: "blue.0",
    type: "submit"
  }, "Add item")));
};

/* harmony default export */ var modal_Form = (Form_Form);
// CONCATENATED MODULE: ./src/components/modal/index.js



// CONCATENATED MODULE: ./src/api/response.js
var response_coupons = [{
  id: 1,
  rating: 3,
  ratings: 195,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: '360 Orbit Cinema',
  coupon_price: 3,
  coupon_term: 'WAVES',
  old_price: '44',
  new_price: '49',
  price_term: '$',
  discount: 50,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/f083cab4bf636dbe751636671a40dbd0-full.png'
}, {
  id: 2,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 3,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 4,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 5,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 6,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 7,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 8,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 9,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 10,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 11,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}, {
  id: 12,
  rating: 2,
  ratings: 442,
  title: 'Cinema',
  short_description: 'The best, bla bla bla',
  name: 'Amazing thing',
  coupon_price: 100,
  coupon_term: 'WAVES',
  old_price: '25',
  new_price: '64',
  price_term: '$',
  discount: 10,
  long_title: 'Lorem Impusm...',
  long_description: 'Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...Lorem Impusm...',
  status: 'purchased',
  image: 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
}];
// CONCATENATED MODULE: ./src/libs/objects/arrayToCamelCase.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { arrayToCamelCase_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function arrayToCamelCase_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var toCamelCaseString = function toCamelCaseString(key) {
  return key.replace(/_(.)/g, function (_, group) {
    return group.toUpperCase();
  });
};

var setValueToKey = function setValueToKey(value, obj) {
  return function (key) {
    return _objectSpread(_objectSpread({}, obj), {}, arrayToCamelCase_defineProperty({}, key, value));
  };
};

var arrayToCamelCase_objectToCamelCase = function objectToCamelCase(obj) {
  return Object.keys(obj).reduce(function (accum, key) {
    return service_pipe(key, toCamelCaseString, setValueToKey(obj[key], accum));
  }, {});
};
/* harmony default export */ var arrayToCamelCase = (function (data) {
  return data.map(function (x) {
    return arrayToCamelCase_objectToCamelCase(x);
  });
});
// CONCATENATED MODULE: ./src/libs/objects/index.js

// CONCATENATED MODULE: ./src/api/index.js



var api_getCoupons = function getCoupons() {
  return new Promise(function (resolve) {
    return service_pipe(response_coupons, arrayToCamelCase, resolve);
  });
};
// CONCATENATED MODULE: ./src/App.jsx
function App_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function App_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { App_ownKeys(Object(source), true).forEach(function (key) { App_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { App_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function App_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || App_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return App_arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }

function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }

function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function App_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var App_App = function App() {
  var _useAppDialogs = service_useAppDialogs(),
      selectedCoupon = _useAppDialogs.selectedCoupon,
      _useAppDialogs$dialog = App_slicedToArray(_useAppDialogs.dialog, 3),
      dialogOpened = _useAppDialogs$dialog[0],
      onDialogOpen = _useAppDialogs$dialog[1],
      onDialogClose = _useAppDialogs$dialog[2],
      _useAppDialogs$result = App_slicedToArray(_useAppDialogs.result, 3),
      resultOpened = _useAppDialogs$result[0],
      onResultOpen = _useAppDialogs$result[1],
      onResultClose = _useAppDialogs$result[2],
      _useAppDialogs$form = App_slicedToArray(_useAppDialogs.form, 3),
      formOpened = _useAppDialogs$form[0],
      onFormOpen = _useAppDialogs$form[1],
      onFormClose = _useAppDialogs$form[2];

  var _useState = Object(react["useState"])([]),
      _useState2 = App_slicedToArray(_useState, 2),
      coupons = _useState2[0],
      updateCoupons = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = App_slicedToArray(_useState3, 2),
      userCoupons = _useState4[0],
      updateUserCoupons = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = App_slicedToArray(_useState5, 2),
      filterActive = _useState6[0],
      changeFilterState = _useState6[1];

  Object(react["useEffect"])(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return api_getCoupons();

              case 2:
                response = _context.sent;
                updateCoupons(response);
                updateUserCoupons([response[0]]);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, []);
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(containers_Header, {
    onCreateCoupon: onFormOpen,
    filterActive: filterActive,
    onChangeFilterState: changeFilterState
  }), /*#__PURE__*/react_default.a.createElement(shared_Flex, {
    justifyContent: "center",
    p: {
      0: '10px',
      md: '20px'
    },
    flexWrap: "wrap"
  }, /*#__PURE__*/react_default.a.createElement(containers_Coupons, {
    onDialogOpen: onDialogOpen,
    coupons: filterActive ? userCoupons : coupons
  })), /*#__PURE__*/react_default.a.createElement(shared_Modal, {
    open: dialogOpened,
    onClose: onDialogClose
  }, /*#__PURE__*/react_default.a.createElement(modal_Dialog, {
    coupon: selectedCoupon,
    onClose: onDialogClose,
    onSubmit: function onSubmit() {
      onDialogClose();
      onResultOpen();
    }
  })), /*#__PURE__*/react_default.a.createElement(shared_Modal, {
    open: resultOpened,
    onClose: onResultClose
  }, /*#__PURE__*/react_default.a.createElement(modal_Result, {
    onClose: onResultClose
  })), /*#__PURE__*/react_default.a.createElement(shared_Modal, {
    open: formOpened,
    onClose: onFormClose,
    width: {
      0: '100%',
      lg: 'initial'
    },
    mx: "10px"
  }, /*#__PURE__*/react_default.a.createElement(modal_Form, {
    onClose: onFormClose,
    onSubmit: function onSubmit(data) {
      var fn = filterActive ? updateUserCoupons : updateCoupons;
      var entity = filterActive ? userCoupons : coupons;
      fn([].concat(_toConsumableArray(entity), [App_objectSpread(App_objectSpread({}, data), {}, {
        id: new Date().valueOf()
      })]));
      onFormClose();
      onResultOpen();
    }
  })), /*#__PURE__*/react_default.a.createElement(containers_Footer, null));
};

/* harmony default export */ var src_App = (Object(root["hot"])(App_App));
// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/developmentOnly.js
var developmentOnly = __webpack_require__("./node_modules/redux-devtools-extension/developmentOnly.js");

// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js + 2 modules
var redux_saga_core_npm_proxy_esm = __webpack_require__("./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/isNil.js
var isNil = __webpack_require__("./node_modules/ramda/es/isNil.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/not.js
var not = __webpack_require__("./node_modules/ramda/es/not.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/append.js + 1 modules
var append = __webpack_require__("./node_modules/ramda/es/append.js");

// EXTERNAL MODULE: ./node_modules/ramda/es/filter.js + 11 modules
var filter = __webpack_require__("./node_modules/ramda/es/filter.js");

// CONCATENATED MODULE: ./src/store/configureStore.js
function configureStore_toConsumableArray(arr) { return configureStore_arrayWithoutHoles(arr) || configureStore_iterableToArray(arr) || configureStore_unsupportedIterableToArray(arr) || configureStore_nonIterableSpread(); }

function configureStore_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function configureStore_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return configureStore_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return configureStore_arrayLikeToArray(o, minLen); }

function configureStore_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function configureStore_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return configureStore_arrayLikeToArray(arr); }

function configureStore_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var sagaMiddleware = Object(redux_saga_core_npm_proxy_esm["a" /* default */])();
var notNil = pipeF(isNil["a" /* default */], not["a" /* default */]);
function configureStore(_ref) {
  var routerMiddleware = _ref.routerMiddleware,
      rootReducer = _ref.rootReducer,
      rootSaga = _ref.rootSaga,
      middlewares = _ref.middlewares;
  var middlewareList = service_pipe([routerMiddleware], function (x) {
    return [].concat(configureStore_toConsumableArray(x), configureStore_toConsumableArray(middlewares || []));
  }, Object(append["a" /* default */])(rootSaga && sagaMiddleware), Object(filter["a" /* default */])(notNil));
  var store = Object(redux["createStore"])(rootReducer, Object(developmentOnly["composeWithDevTools"])(redux["applyMiddleware"].apply(void 0, configureStore_toConsumableArray(middlewareList))));

  if (rootSaga) {
    sagaMiddleware.run(rootSaga);
  }

  store.dispatch({
    type: INIT_APP
  });
  return store;
}
// CONCATENATED MODULE: ./src/reducers/coupons.js

var coupons_initialState = {};
/* harmony default export */ var reducers_coupons = (createImmutableReducer(coupons_initialState, {}));
// CONCATENATED MODULE: ./src/reducers/index.js



/* harmony default export */ var reducers = (function () {
  return Object(redux["combineReducers"])({
    coupons: reducers_coupons,
    root: reducers_root
  });
});
// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 1 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__("./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

// EXTERNAL MODULE: ./node_modules/@waves/waves-transactions/dist/index.js
var dist = __webpack_require__("./node_modules/@waves/waves-transactions/dist/index.js");

// EXTERNAL MODULE: ./node_modules/@waves/waves-crypto/dist/index.js
var waves_crypto_dist = __webpack_require__("./node_modules/@waves/waves-crypto/dist/index.js");

// CONCATENATED MODULE: ./src/sagas/service/wavesInit.js
var _marked = /*#__PURE__*/regeneratorRuntime.mark(wavesInit);

/* eslint-disable no-alert */



var dappaddress = '3N5HzCuVFaprA1w6eo9MdFmkCG77foHZu6a';
var baseUri = 'https://testnodes.wavesnodes.com';
window.wc = {
  stringToUint8Array: waves_crypto_dist["stringToUint8Array"],
  sha256: waves_crypto_dist["sha256"],
  base58encode: waves_crypto_dist["base58encode"]
};
window.wt = {
  nodeInteraction: dist["nodeInteraction"],
  invokeScript: dist["invokeScript"],
  broadcast: dist["broadcast"],
  waitForTx: dist["waitForTx"]
};
function wavesInit() {
  var v, _window, WavesKeeper, authData, keeperApi, state, auth;

  return regeneratorRuntime.wrap(function wavesInit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(dist["nodeInteraction"].accountData, dappaddress, baseUri);

        case 3:
          v = _context.sent;
          window.dAppData = v;
          window.dAppDataKeys = Object.keys(v);
          console.log('dApp Account data:');
          console.log(v);
          console.log(JSON.stringify(v));
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return");

        case 15:
          _window = window, WavesKeeper = _window.WavesKeeper;

          if (WavesKeeper) {
            _context.next = 19;
            break;
          }

          alert('To Auth WavesKeeper should be installed.');
          return _context.abrupt("return");

        case 19:
          authData = {
            data: 'Auth on my \'Coupon Bazaar\' site'
          };
          _context.prev = 20;
          _context.next = 23;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(WavesKeeper.initialPromise);

        case 23:
          keeperApi = _context.sent;
          _context.next = 26;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(keeperApi.publicState);

        case 26:
          state = _context.sent;
          console.log('Waves Keeper data:'); // displaying the result in the console

          console.log(state);
          return _context.abrupt("return");

        case 32:
          _context.prev = 32;
          _context.t1 = _context["catch"](20);
          console.error(_context.t1);

        case 35:
          _context.prev = 35;
          _context.next = 38;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(WavesKeeper.auth, authData);

        case 38:
          auth = _context.sent;
          console.log(auth);
          return _context.abrupt("return");

        case 43:
          _context.prev = 43;
          _context.t2 = _context["catch"](35);
          console.error(_context.t2);

        case 46:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 11], [20, 32], [35, 43]]);
}
// CONCATENATED MODULE: ./src/sagas/service/index.js

// CONCATENATED MODULE: ./src/sagas/initSaga.js
var initSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(init),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(initSaga);





function init() {
  return regeneratorRuntime.wrap(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* fork */])(wavesInit);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, initSaga_marked);
}

function initSaga() {
  return regeneratorRuntime.wrap(function initSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["d" /* takeLatest */])([INIT_APP], init);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
// CONCATENATED MODULE: ./src/sagas/index.js
var sagas_marked = /*#__PURE__*/regeneratorRuntime.mark(sagas_rootSaga);



function sagas_rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* all */])([initSaga()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, sagas_marked);
}
// CONCATENATED MODULE: ./src/store/index.js



/* harmony default export */ var src_store = (function () {
  return configureStore({
    rootReducer: reducers(),
    rootSaga: sagas_rootSaga
  });
});
// CONCATENATED MODULE: ./src/index.jsx








var src_store_0 = src_store();
react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {
  store: src_store_0
}, /*#__PURE__*/react_default.a.createElement(styled_components_browser_esm["a" /* ThemeProvider */], {
  theme: styled_components_theme
}, /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(GlobalStyle, null), /*#__PURE__*/react_default.a.createElement(src_App, null)))), document.getElementById('root'));

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__("./src/index.jsx");


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlZC1jb21wb25lbnRzL2dsb2JhbC9HbG9iYWxTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvRmxleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0hhbWJ1cmdlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9pY29uQ29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9Mb2dvSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9Mb2dvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL01lbnVJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL0hlYWRlckxheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9TZWFyY2hJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL1Nob3BJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL1RyaWFuZ2xlSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9Sb3VuZE1hcmtJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzL2xhbmd1YWdlLWljb25zL0VuZ2xpc2guanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvbGFuZ3VhZ2UtaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9MYW5ndWFnZVNlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci1jb250cm9scy9DbG9zZUljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXItY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlckxpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9saW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTG9nb0NvcHlyaWdodC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3NvY2lhbC1pY29ucy9GYWNlYm9vay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3NvY2lhbC1pY29ucy9MaW5rZWRpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3NvY2lhbC1pY29ucy9UZWxlZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3NvY2lhbC1pY29ucy9Ud2l0dGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvc29jaWFsLWljb25zL1doYXRzYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvc29jaWFsLWljb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Tb2NpYWxCdXR0b25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTW9iaWxlTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L092ZXJsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvTW9kYWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9UZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY291cG9uL2NvdXBvbi1jb250cm9scy9TdGFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLWNvbnRyb2xzL1JhdGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY291cG9uL2NvdXBvbi1jb250cm9scy9QcmljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY291cG9uL2NvdXBvbi1jb250cm9scy9EaXNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY291cG9uL2NvdXBvbi1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vQ291cG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb3Vwb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQ291cG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlZC1jb21wb25lbnRzL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlcnZpY2UvdXNlQXBwRGlhbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlL3VzZURpc3BhdGNoZWRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy9jcmVhdGVSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvbWFrZUFjdGlvbkNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy90b0ZldGNoQ29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy9waXBlUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvcmVkdXgtYWN0aW9ucy9jcmVhdGVJbW11dGFibGVSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3NlcnZpY2UvcGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9yZWR1eC1hY3Rpb25zL2ZldGNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9yZWR1eC1hY3Rpb25zL2ZldGNoUmVkdWNlcktleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9yZWR1eC1hY3Rpb25zL2ZldGNoS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL3JlZHV4LWFjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL2NvbnRyb2xzL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvY29udHJvbHMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9jb250cm9scy9TbWFsbExvZ28uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL2NvbnRyb2xzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9EaWFsb2cuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL1Jlc3VsdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9vYmplY3RzL2FycmF5VG9DYW1lbENhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NvdXBvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9zZXJ2aWNlL3dhdmVzSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvaW5pdFNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpP2MxYjQiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpP2E3YTkiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/Zjk5MCIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT8xZWViIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpPzZjOWUiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/MGRhNyIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT9iOThhIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT8zNTY4Iiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT9lNDZmIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/MzQxZCIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT8zNzVkIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpPzg4MWYiLCJ3ZWJwYWNrOi8vL2NyeXB0byAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzJjZjIiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb2xvcnMiLCJ0aGVtZSIsImdyYXkiLCJCb3giLCJzdHlsZWQiLCJkaXYiLCJib3hTaXppbmciLCJzcGFjZSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImZsZXgiLCJkaXNwbGF5IiwiZmxleEJhc2lzIiwibWluV2lkdGgiLCJvdmVyZmxvdyIsImRpc3BsYXlOYW1lIiwiRmxleCIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduU2VsZiIsIm9yZGVyIiwiREVGQVVMVF9CQUNLR1JPVU5EIiwiTGluZU1lbnUiLCJhdHRycyIsImFzIiwiSGFtYnVyZ2VyU3R5bGVkIiwiaXNBY3RpdmUiLCJjc3MiLCJIYW1idXJnZXIiLCJvbkNsaWNrIiwiYmciLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZ2V0Q29sb3IiLCJibHVlIiwiZmlsbCIsImxvZ29Db2xvciIsImljb25Db2xvciIsIkxvZ29JY29uIiwiVGl0bGUiLCJCb2xkIiwiYiIsIlBvaW50ZXIiLCJMb2dvIiwic2l6ZSIsImljb25TaXplIiwiTWVudUl0ZW1TdHlsZWQiLCJhY3RpdmUiLCJmb250V2VpZ2h0IiwiTWVudUl0ZW0iLCJjaGlsZHJlbiIsIkhlYWRlckxheW91dCIsIlNlYXJjaEljb24iLCJTaG9wSWNvbiIsIlRyaWFuZ2xlSWNvbiIsInByb3BzIiwiUm91bmRNYXJrSWNvbiIsIkVuZyIsImVuZ2xpc2giLCJFbmdsaXNoIiwibGFuZ3VnZVNob3J0TmFtZXMiLCJMYW5ndWFnZVNlbGVjdCIsImxhbmd1YWdlIiwiQ29tcG9uZW50IiwiSWNvbnMiLCJDbG9zZUljb24iLCJtZW51SW5kZW50IiwieGwiLCJEZXNrdG9wSGVhZGVyIiwibGlua3MiLCJhY3RpdmVVcmwiLCJzZXRBY3RpdmVVcmwiLCJ1c2VyTGlua3MiLCJ0YWJsZXRSZXNvbHV0aW9uIiwibW9iaWxlUmVzb2x1dGlvbiIsImNoYW5nZU1vYmlsZU1lbnVTdGF0ZSIsIm1lbnVPcGVuZWQiLCJvbk1lbnVDbGljayIsInVzZUNhbGxiYWNrIiwic20iLCJsZyIsIm1hcCIsImluZGV4IiwidXJsIiwidGl0bGUiLCJpbmRleE9mIiwiaGVhZGVyTGlua3MiLCJjb21wYW55TGlua3MiLCJ3b3JrTGlua3MiLCJtb3JlTGlua3MiLCJtYWluTGlua3MiLCJZRUFSIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiTG9nb0NvcHlyaWdodCIsIkZhY2Vib29rIiwiTGlua2VkaW4iLCJUZWxlZ3JhbSIsIlR3aXR0ZXIiLCJXaGF0c0FwcCIsIlNvY2lhbEJ1dHRvbnMiLCJtZW51QW5pbWF0aW9uIiwiY2xhc3NOYW1lcyIsInRpbWVvdXQiLCJDb250YWluZXIiLCJ0ZXh0UHJvcHMiLCJsaW5lSGVpZ2h0IiwiR3JvdXBMaW5rcyIsImxpbmtUaXRsZSIsIk1vYmlsZU1lbnUiLCJvbkNsb3NlIiwidXNlRWZmZWN0IiwiTElOS1MiLCJvdmVybGF5QW5pbWF0aW9uIiwiT3ZlcmxheSIsIm1vZGFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk1vZGFsIiwib3BlbiIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiZW5oYW5jZVN0eWxlZENvbXBvbmVudCIsImNvbXBvc2UiLCJsZXR0ZXJTcGFjaW5nIiwiVGV4dCIsIlN0YXIiLCJzdGFycyIsIlJhdGluZyIsInZhbHVlIiwiY2VpbFZhbHVlIiwiTWF0aCIsImNlaWwiLCJ2YWwiLCJpbmQiLCJQcmljZVN0eWxlZCIsIlByaWNlIiwiaXNPbGQiLCJ0ZXJtIiwidW5kZWZpbmVkIiwiRGlzY291bnRTdHlsZWQiLCJEaXNjb3VudCIsImlzRW1wdHkiLCJtZW1vaXplT25lIiwiQ291cG9uIiwibmFtZSIsImltYWdlIiwicmF0aW5nIiwicmF0aW5ncyIsImxvbmdEZXNjcmlwdGlvbiIsImNvdXBvblRlcm0iLCJwcmljZVRlcm0iLCJvbGRQcmljZSIsIm5ld1ByaWNlIiwiZGlzY291bnQiLCJjb3Vwb25QcmljZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwibWVtbyIsIkNhcmQiLCJDb3Vwb25zIiwib25EaWFsb2dPcGVuIiwiY291cG9ucyIsImNvdXBvbiIsImlkIiwibWQiLCJicmVha3BvaW50cyIsImJsYWNrIiwicmVkIiwiZ3JlZW4iLCJ1c2VBcHBEaWFsb2dzIiwidXNlU3RhdGUiLCJkaWFsb2dPcGVuZWQiLCJjaGFuZ2VEaWFsb2dTdGF0ZSIsInJlc3VsdE9wZW5lZCIsImNoYW5nZVJlc3VsdFN0YXRlIiwiZm9ybU9wZW5lZCIsImNoYW5nZUZvcm1TdGF0ZSIsInNlbGVjdGVkQ291cG9uIiwic2VsZWN0Q291cG9uIiwidXNlTWVtbyIsIm9uRGlhbG9nQ2xvc2UiLCJvblJlc3VsdE9wZW4iLCJvblJlc3VsdENsb3NlIiwib25Gb3JtT3BlbmVkIiwib25Gb3JtQ2xvc2UiLCJkaWFsb2ciLCJyZXN1bHQiLCJmb3JtIiwidXNlRGlzcGF0Y2hlZEFjdGlvbnMiLCJhY3Rpb25zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImRpc3BhdGNoZWRBY3Rpb25zIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY3JlYXRlUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImhhbmRsZXJzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImZpbmQiLCJ4IiwidHlwZSIsIm1ha2VBY3Rpb25DcmVhdG9yIiwiYXJnTmFtZXMiLCJhcmdzIiwiZm9yRWFjaCIsIl8iLCJmZXRjaENvbnN0IiwiY29uc3RhbnQiLCJDTEVBUiIsIkVSUk9SIiwiUkVRVUVTVCIsIlNVQ0NFU1MiLCJwaXBlUmVkdWNlcnMiLCJyZWR1Y2VycyIsInJlZHVjZSIsIm5leHQiLCJjcmVhdGVJbW11dGFibGVSZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0U3RhdGUiLCJwaXBlIiwiZnVuY3Rpb25zIiwibmV3VmFsdWUiLCJmdW5jIiwicGlwZUYiLCJmZXRjaFJlZHVjZXIiLCJmZXRjaFR5cGUiLCJrZXkiLCJpbml0aWFsVmFsdWUiLCJpc0FycmF5IiwiaXMiLCJBcnJheSIsImFzc29jUGF0aCIsInJlc3BvbnNlIiwiY29uY2F0IiwiZGF0YSIsImZldGNoUmVkdWNlcktleSIsImlzRmV0Y2hpbmciLCJmZXRjaEtleSIsImZldGNoUmVkdWNlckZuIiwibW9kYWxNZW51T3BlbiIsIklOSVRfQVBQIiwiQ0hBTkdFX01PQklMRV9NRU5VX1NUQVRFIiwiaXNPcGVuIiwibWVudUhlaWdodCIsIm1hcFN0YXRlVG9Qcm9wcyIsInJvb3QiLCJIZWFkZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VTZWxlY3RvciIsInJvb3RBY3Rpb25zIiwib25DbG9zZU1lbnUiLCJMYXlvdXQiLCJGb290ZXIiLCJCdXR0b24iLCJwIiwiQm9yZGVyIiwicHgiLCJTbWFsbExvZ28iLCJJbnB1dFN0eWxlZCIsIklucHV0IiwiY29udHJvbCIsImZvcndhcmRSZWYiLCJlcnJvciIsIkRpYWxvZyIsIm9uU3VibWl0IiwiUmVzdWx0IiwiSEVJR0hUUyIsIkZPUk1fUEFSQU1FVEVSIiwiSGVpZ2h0UHJvcHMiLCJhY2N1bSIsIkZvcm0iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJyZXF1aXJlZCIsInNob3J0RGVzY3JpcHRpb24iLCJsb25nVGl0bGUiLCJzaG9ydF9kZXNjcmlwdGlvbiIsImNvdXBvbl9wcmljZSIsImNvdXBvbl90ZXJtIiwib2xkX3ByaWNlIiwibmV3X3ByaWNlIiwicHJpY2VfdGVybSIsImxvbmdfdGl0bGUiLCJsb25nX2Rlc2NyaXB0aW9uIiwic3RhdHVzIiwidG9DYW1lbENhc2VTdHJpbmciLCJyZXBsYWNlIiwiZ3JvdXAiLCJ0b1VwcGVyQ2FzZSIsInNldFZhbHVlVG9LZXkiLCJvYmoiLCJvYmplY3RUb0NhbWVsQ2FzZSIsImdldENvdXBvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFycmF5VG9DYW1lbENhc2UiLCJBcHAiLCJvbkZvcm1PcGVuIiwidXBkYXRlQ291cG9ucyIsInVzZXJDb3Vwb25zIiwidXBkYXRlVXNlckNvdXBvbnMiLCJmaWx0ZXJBY3RpdmUiLCJjaGFuZ2VGaWx0ZXJTdGF0ZSIsImZldGNoRGF0YSIsImZuIiwiZW50aXR5IiwidmFsdWVPZiIsImhvdCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJub3ROaWwiLCJpc05pbCIsIm5vdCIsImNvbmZpZ3VyZVN0b3JlIiwicm91dGVyTWlkZGxld2FyZSIsInJvb3RSZWR1Y2VyIiwicm9vdFNhZ2EiLCJtaWRkbGV3YXJlcyIsIm1pZGRsZXdhcmVMaXN0IiwiYXBwZW5kIiwiZmlsdGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJjb21iaW5lUmVkdWNlcnMiLCJ3YXZlc0luaXQiLCJkYXBwYWRkcmVzcyIsImJhc2VVcmkiLCJ3YyIsInN0cmluZ1RvVWludDhBcnJheSIsInNoYTI1NiIsImJhc2U1OGVuY29kZSIsInd0Iiwibm9kZUludGVyYWN0aW9uIiwiaW52b2tlU2NyaXB0IiwiYnJvYWRjYXN0Iiwid2FpdEZvclR4IiwiY2FsbCIsImFjY291bnREYXRhIiwidiIsImRBcHBEYXRhIiwiZEFwcERhdGFLZXlzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJXYXZlc0tlZXBlciIsImFsZXJ0IiwiYXV0aERhdGEiLCJpbml0aWFsUHJvbWlzZSIsImtlZXBlckFwaSIsInB1YmxpY1N0YXRlIiwiYXV0aCIsImluaXQiLCJpbml0U2FnYSIsImZvcmsiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEM7O0FDSmY7QUFFQTtBQUNBO0FBRWU7QUFBQSxTQUNYM0MsY0FBYyxDQUFDO0FBQ1hFLGVBQVcsRUFBRUEsUUFBVyxFQURiO0FBRVhDLFlBQVEsRUFBUkEsY0FBUUE7QUFGRyxHQUFELENBREg7QUFBQSxDQUFmLEU7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1LLFdBQUssR0FBR1IsU0FBYyxFQUE1QjtBQUVBMU0sbUJBQVEsQ0FBQ3lQLE1BQVQsZUFDSSw4QkFBQyxzQkFBRDtBQUFVLE9BQUssRUFBRXZDLFdBQUtBO0FBQXRCLGdCQUNJLDhCQUFDLHNEQUFEO0FBQWUsT0FBSyxFQUFFcFYsdUJBQUtBO0FBQTNCLGdCQUNJLDJFQUNJLDhCQUFDLFdBQUQsT0FESixlQUVJLDhCQUFDLE9BQUQsT0FGSixDQURKLENBREosQ0FESixFQVNJOEgsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBVEosRTs7Ozs7OztBQ1pBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGU7Ozs7Ozs7QUNBQSxlOzs7Ozs7O0FDQUEsZTs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiYnVpbGQvanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMSwxXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiBjb2xvcnMuZ3JheVsxXX07XG4gICB9XG5cbiAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgaW5wdXQsIGJ1dHRvbiB7XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgIH1cbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5gO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICAgIGJhY2tncm91bmQsXG4gICAgY29sb3IsXG4gICAgZGlzcGxheSxcbiAgICBmb250U2l6ZSxcbiAgICBoZWlnaHQsXG4gICAgc3BhY2UsXG4gICAgd2lkdGgsXG4gICAgcG9zaXRpb24sXG4gICAgekluZGV4LFxuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIHJpZ2h0LFxuICAgIGJvdHRvbSxcbiAgICBmbGV4LFxuICAgIGZsZXhCYXNpcyxcbiAgICBtaW5XaWR0aCxcbiAgICBvdmVyZmxvdyxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXYoXG4gICAge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB9LFxuICAgIHNwYWNlLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBmb250U2l6ZSxcbiAgICBjb2xvcixcbiAgICBiYWNrZ3JvdW5kLFxuICAgIHBvc2l0aW9uLFxuICAgIHpJbmRleCxcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b20sXG4gICAgZmxleCxcbiAgICBkaXNwbGF5LFxuICAgIGZsZXhCYXNpcyxcbiAgICBtaW5XaWR0aCxcbiAgICBvdmVyZmxvdyxcbik7XG5cbkJveC5kaXNwbGF5TmFtZSA9ICdCb3gnO1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgZmxleFdyYXAsXG4gICAgZmxleERpcmVjdGlvbixcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50LFxuICAgIGFsaWduU2VsZixcbiAgICBmbGV4LFxuICAgIG9yZGVyLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IEZsZXggPSBzdHlsZWQoQm94KShcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICAgIGZsZXhXcmFwLFxuICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBhbGlnblNlbGYsXG4gICAgZmxleCxcbiAgICBvcmRlcixcbik7XG5cbkZsZXguZGlzcGxheU5hbWUgPSAnRmxleCc7XG5cbmV4cG9ydCBkZWZhdWx0IEZsZXg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IERFRkFVTFRfQkFDS0dST1VORCA9ICcjMDAwJztcblxuY29uc3QgTGluZU1lbnUgPSBzdHlsZWQoQm94KS5hdHRycyh7XG4gICAgYXM6ICdzcGFuJyxcbn0pYFxuICAgIGhlaWdodDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMzUwbXM7XG5gO1xuXG5jb25zdCBIYW1idXJnZXJTdHlsZWQgPSBzdHlsZWQoQm94KS5hdHRycyh7XG4gICAgYXM6ICdidXR0b24nLFxufSlgXG4gICAgei1pbmRleDogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICR7KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgJiYgY3NzYFxuICAgICAgICAgICAgJHtMaW5lTWVudX0ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9O1xuYDtcblxuY29uc3QgSGFtYnVyZ2VyID0gKHtcbiAgICBvbkNsaWNrLCBiZywgaXNBY3RpdmUsIC4uLnJlc3Rcbn0pID0+IChcbiAgICA8SGFtYnVyZ2VyU3R5bGVkIG9uQ2xpY2s9e29uQ2xpY2t9IGlzQWN0aXZlPXtpc0FjdGl2ZX0gey4uLnJlc3R9PlxuICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8TGluZU1lbnUgdG9wPVwiMHB4XCIgd2lkdGg9XCIxNXB4XCIgYmc9e2JnfSAvPlxuICAgICAgICAgICAgPExpbmVNZW51IHRvcD1cIjhweFwiIHdpZHRoPVwiMjdweFwiIGJnPXtiZ30gLz5cbiAgICAgICAgICAgIDxMaW5lTWVudSB0b3A9XCIxNnB4XCIgd2lkdGg9XCIzOHB4XCIgYmc9e2JnfSAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgPC9IYW1idXJnZXJTdHlsZWQ+XG4pO1xuXG5IYW1idXJnZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGJnOiBERUZBVUxUX0JBQ0tHUk9VTkQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXI7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldENvbG9yID0gKGlzQWN0aXZlLCBjb2xvcnMpID0+IChpc0FjdGl2ZSA/IGNvbG9ycy5ibHVlWzBdIDogY29sb3JzLmdyYXlbMl0pO1xuXG5jb25zdCBmaWxsID0gY3NzYFxuICAgICR7KHsgaXNBY3RpdmUsIHRoZW1lOiB7IGNvbG9ycyB9IH0pID0+IGNzc2BcbiAgICAgICAgZmlsbDogJHtnZXRDb2xvcihpc0FjdGl2ZSwgY29sb3JzKX07XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2dvQ29sb3IgPSBjc3NgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJlY3Qge1xuICAgICAgICAke2ZpbGx9O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBpY29uQ29sb3IgPSBjc3NgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhdGgge1xuICAgICAgICAke2ZpbGx9O1xuICAgIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGxvZ29Db2xvciB9IGZyb20gJy4vaWNvbkNvbG9yJztcblxuY29uc3QgTG9nb0ljb24gPSAoeyBpc0FjdGl2ZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjQ4XCJcbiAgICAgICAgaGVpZ2h0PVwiNDhcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgICA8ZyBpZD1cIkxvZ29fY291cG9uXCI+XG4gICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHJ4PVwiMTJcIiBmaWxsPVwiIzJFQjRGRlwiIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiQ29tYmluZWQgU2hhcGVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTM5LjQxNzcgMjIuOTY4OEMzOS4yMTMyIDIzLjM0NDUgMzguOTYyNCAyMy42ODkxIDM4LjY3MTcgMjMuOTkzNEMzOC45NjI0IDI0LjI5NzkgMzkuMjEzNyAyNC42NDI0IDM5LjQxNzcgMjUuMDE4QzQwLjAzMSAyNi4xNDg0IDQwLjE2NTMgMjcuNDU3IDM5Ljc5NDYgMjguNzAxNkMzOS40Njk0IDI5Ljc5MzkgMzkuMDI2MiAzMC44NTk4IDM4LjQ3NjggMzEuODcwOUMzNy42NTI4IDMzLjM4MjQgMzYuMDg3NyAzNC4zMzE2IDM0LjM3NTMgMzQuMzY1MkMzNC4zNjE2IDM0Ljk3ODUgMzQuMjI5IDM1LjU5MDYgMzMuOTgxOSAzNi4xNjEzQzMzLjU1ODEgMzcuMTQwNCAzMi44MTMgMzcuOTU4MiAzMS44ODMzIDM4LjQ2MzlDMzAuODcxNyAzOS4wMTQxIDI5LjgwNTggMzkuNDU3MiAyOC43MTQyIDM5Ljc4MjRDMjguMjU3MiAzOS45MTgyIDI3Ljc4ODIgMzkuOTg2NyAyNy4zMTk0IDM5Ljk4NjdDMjYuMDgwMiAzOS45ODY3IDI0Ljg5ODUgMzkuNTAxMiAyNC4wMTk5IDM4LjY2ODRDMjMuODgwMSAzOC44MDM5IDIzLjczMTMgMzguOTMxNiAyMy41NzM2IDM5LjA0OThDMjIuNzU0OSAzOS42NjIzIDIxLjc0MTkgNDAgMjAuNzIwOCA0MEMyMC4yNzI2IDQwIDE5LjgyNTUgMzkuOTM2MyAxOS4zOTI4IDM5LjgxMTNDMTguMjIgMzkuNDY5MSAxNy4wODM2IDM4Ljk5NDUgMTYuMDEyNSAzOC40MDA4QzE0LjcyNzEgMzcuNjg2MyAxMy44MzggMzYuMzkyMiAxMy42MzM3IDM0LjkzODVDMTMuNjA3MyAzNC43NTAyIDEzLjU5MjkgMzQuNTYyNyAxMy41ODkzIDM0LjM3NTJDMTMuNDA3OSAzNC4zNzA5IDEzLjIyNzIgMzQuMzU1OSAxMy4wNTA1IDM0LjMzMDNDMTEuNTc2OCAzNC4xMTg5IDEwLjI2ODkgMzMuMjEyOSA5LjU1MzQ5IDMxLjkwNjRDOC45ODAyMyAzMC44NTkyIDguNTIwODQgMjkuNzQ5NiA4LjE4NzQzIDI4LjYwNzJDNy43NzE3OSAyNy4xNzY4IDguMDU2OTYgMjUuNjE0MSA4Ljk0ODE5IDI0LjQyNTZDOS4wNjI4NSAyNC4yNzMgOS4xODUzMSAyNC4xMjkxIDkuMzE1OTggMjMuOTkzQzkuMTg2MDkgMjMuODU3NiA5LjA2NDAyIDIzLjcxMzkgOC45NTAxNSAyMy41NjI3QzguMDU3MzUgMjIuMzczIDcuNzcyMzggMjAuODEwMiA4LjE4ODIxIDE5LjM4MTNDOC41MjMxOCAxOC4yMzM2IDguOTgxNCAxNy4xMjQgOS41NTE3MyAxNi4wODIyQzEwLjI2ODkgMTQuNzc1MiAxMS41NzYgMTMuODY4IDEzLjA0OTcgMTMuNjU2MUMxMy4yNDY4IDEzLjYyODUgMTMuNDQyMyAxMy42MTI5IDEzLjYzNDkgMTMuNjEwNEMxMy42NTA1IDEzLjAwMDggMTMuNzgzMSAxMi4zOTI2IDE0LjAyODggMTEuODI1QzE0LjQ1MjcgMTAuODQ2NSAxNS4xOTcyIDEwLjAyODkgMTYuMTI2OSA5LjUyMzA1QzE3LjEzODUgOC45NzI4NSAxOC4yMDQzIDguNTI5NDkgMTkuMjk2IDguMjA0M0MxOS43NTMgOC4wNjg3NSAyMC4yMjIgOCAyMC42OTA3IDhDMjEuOTM3NiA4IDIzLjEyNDggOC40OTE0MSAyNC4wMDUxIDkuMzMyMjNDMjQuODg1NiA4LjQ5MTQxIDI2LjA3MjUgOCAyNy4zMTk0IDhDMjcuNzg4MiA4IDI4LjI1NzIgOC4wNjg3NSAyOC43MTM0IDguMjA0M0MyOS44MDU4IDguNTI5NDkgMzAuODcxNyA4Ljk3Mjg1IDMxLjg4MjUgOS41MjIyN0MzMi44MTMgMTAuMDI4OSAzMy41NTgxIDEwLjg0NjUgMzMuOTgxOSAxMS44MjU0QzM0LjIyOSAxMi4zOTYzIDM0LjM2MTYgMTMuMDA4MiAzNC4zNzUzIDEzLjYyMTVDMzYuMDg3NyAxMy42NTU1IDM3LjY1MjggMTQuNjA0NSAzOC40NzYgMTYuMTE1QzM5LjAyNjIgMTcuMTI3IDM5LjQ2OTQgMTguMTkzIDM5Ljc5NDYgMTkuMjg0OEM0MC4xNjUzIDIwLjUzMDEgNDAuMDMxIDIxLjgzODMgMzkuNDE3NyAyMi45Njg4Wk0zNCAyNEMzNCAyOS41MjI4IDI5LjUyMjggMzQgMjQgMzRDMTguNDc3MiAzNCAxNCAyOS41MjI4IDE0IDI0QzE0IDE4LjQ3NzIgMTguNDc3MiAxNCAyNCAxNEMyOS41MjI4IDE0IDM0IDE4LjQ3NzIgMzQgMjRaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnIGlkPVwiX3gyM18wMDAwMDBmZiBjb3B5IDJcIj5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIzLjYwNTMgMTkuMTU1NkMyMy45MDg3IDE4Ljg4NSAyNC40NDE0IDE4Ljk3NTggMjQuNjEzMiAxOS4zNjE5QzI0Ljk2MiAyMC4yNjIgMjUuMzA0NiAyMS4xNjUyIDI1LjY1MTMgMjIuMDY2QzI1LjY1NzMgMjIuMDk2NCAyNS42ODQ3IDIyLjEwNyAyNS43MTE4IDIyLjEwN0MyNi41NzkyIDIyLjE2ODggMjcuNDQ2MSAyMi4yNDIzIDI4LjMxMzYgMjIuMzA3QzI4LjU2MjIgMjIuMzEyNSAyOC44MDkxIDIyLjQ1NTIgMjguOTIxNiAyMi42OTA2QzI5LjA2MDggMjIuOTU1IDI5LjAxNCAyMy4zMjE2IDI4Ljc4NjIgMjMuNTE3MkMyOC4wODY3IDI0LjExNjQgMjcuMzkzNSAyNC43MjM2IDI2LjY5NTcgMjUuMzI0N0MyNi42NzYyIDI1LjM0MiAyNi42NTY5IDI1LjM1OTkgMjYuNjQzNiAyNS4zODI4QzI2Ljg0MDkgMjYuMjc2NiAyNy4wNjE1IDI3LjE2NjMgMjcuMjY4IDI4LjA1ODRDMjcuNDI0MiAyOC41MDU4IDI3LjA1OCAyOS4wMzM1IDI2LjU5NzkgMjguOTk4M0MyNi40MzkxIDI4Ljk5NjMgMjYuMzAwNiAyOC45MDYyIDI2LjE3NDEgMjguODE1OEMyNS40OTAxIDI4LjM2NTYgMjQuODA1NiAyNy45MTUyIDI0LjEyMDkgMjcuNDY1NUMyNC4wNjI1IDI3LjQyODMgMjQuMDA3NSAyNy4zODE3IDIzLjk0MTkgMjcuMzU5N0MyMy4xNjU3IDI3Ljg0NjQgMjIuNDAxNSAyOC4zNTU0IDIxLjYyNzQgMjguODQ2M0MyMS40MTQ2IDI4Ljk3ODggMjEuMTMxOSAyOC45NzY1IDIwLjkyMjggMjguODM3QzIwLjcwMjMgMjguNzAwNCAyMC41NjY5IDI4LjQxODQgMjAuNjE4NiAyOC4xNTI2QzIwLjg0MTcgMjcuMTk5MiAyMS4wOTI2IDI2LjI0OTMgMjEuMzA1NiAyNS4yOTRDMjAuNjc2NyAyNC43MzAxIDIwLjAzODMgMjQuMTc3OCAxOS40MDYzIDIzLjYxNzdDMTkuMjYzNCAyMy40OTY4IDE5LjEwOCAyMy4zNzA1IDE5LjA0NiAyMy4xODI0QzE4Ljg5NDEgMjIuODA0MiAxOS4xMzQyIDIyLjMxMTYgMTkuNTMyIDIyLjI1MjZDMjAuNDc4MyAyMi4xNjkzIDIxLjQzMTIgMjIuMTM0MyAyMi4zNzUyIDIyLjA0MzhDMjIuNzAxNyAyMS4yMzEyIDIzLjAxNTggMjAuNDEyIDIzLjMzODcgMTkuNTk2OEMyMy4zOTg5IDE5LjQzMzcgMjMuNDY4MSAxOS4yNjQ1IDIzLjYwNTMgMTkuMTU1NlpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChMb2dvSWNvbilgXG4gICAgJHtsb2dvQ29sb3J9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTG9nb0ljb24gZnJvbSAnLi9Mb2dvSWNvbic7XG5cbmltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkKEJveCkuYXR0cnMoe1xuICAgIGFzOiAnc3BhbicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbn0pYFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuXG5UaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICdibHVlLjAnLFxuICAgIGZvbnRTaXplOiAnMjJweCcsXG59O1xuXG5jb25zdCBCb2xkID0gc3R5bGVkLmJgXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbmA7XG5cbmNvbnN0IFBvaW50ZXIgPSBzdHlsZWQuZGl2YFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IExvZ28gPSAoeyBpc0FjdGl2ZSwgc2l6ZSwgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3QgaWNvblNpemUgPSBzaXplID09PSAnc21hbGwnID8gJzMzJyA6ICc0OCc7XG4gICAgY29uc3QgZm9udFNpemUgPSBzaXplID09PSAnc21hbGwnID8gJzE2cHgnIDogJzIycHgnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggey4uLnJlc3R9IGFzPXtQb2ludGVyfT5cbiAgICAgICAgICAgIDxMb2dvSWNvbiBpc0FjdGl2ZT17aXNBY3RpdmV9IHdpZHRoPXtpY29uU2l6ZX0gaGVpZ2h0PXtpY29uU2l6ZX0gLz5cbiAgICAgICAgICAgIDxCb3ggcGw9XCI5cHhcIj5cbiAgICAgICAgICAgICAgICA8VGl0bGUgY29sb3I9e2lzQWN0aXZlID8gJ2JsdWUuMCcgOiAnZ3JheS4yJ30gZm9udFNpemU9e2ZvbnRTaXplfT5cbiAgICAgICAgICAgICAgICAgICAgPEJvbGQ+Q291cG9uPC9Cb2xkPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICBCYXphYXJcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjb2xvcj17aXNBY3RpdmUgPyAnYmx1ZS4wJyA6ICdncmF5LjInfSBmb250U2l6ZT17Zm9udFNpemV9PlxuICAgICAgICAgICAgICAgICAgICBNYXJrZXRcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGZvbnRXZWlnaHQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuY29uc3QgTWVudUl0ZW1TdHlsZWQgPSBzdHlsZWQoQm94KS5hdHRycygoeyBhY3RpdmUsIGNvbG9yIH0pID0+ICh7XG4gICAgYXM6ICdzcGFuJyxcbiAgICBjb2xvcjogYWN0aXZlID8gJ2JsdWUuMCcgOiBjb2xvciB8fCAnZ3JheS4yJyxcbn0pKWBcbiAgICBsZXR0ZXItc3BhY2luZzogMC42NTYyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWU6IHsgY29sb3JzIH0gfSkgPT4gY29sb3JzLmJsdWVbMF19O1xuICAgIH1cbiAgICAke2ZvbnRXZWlnaHR9XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9ICh7XG4gICAgY2hpbGRyZW4sIGFjdGl2ZSwgb25DbGljaywgLi4ucmVzdFxufSkgPT4gKFxuICAgIDxNZW51SXRlbVN0eWxlZCBhY3RpdmU9e2FjdGl2ZX0gb25DbGljaz17b25DbGlja30gey4uLnJlc3R9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9NZW51SXRlbVN0eWxlZD5cbik7XG5cbk1lbnVJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmNvbnN0IEhlYWRlckxheW91dCA9IHN0eWxlZChCb3gpLmF0dHJzKHtcbiAgICBiZzogJ2dyYXkuMCcsXG59KWBcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggI2VkZWVmMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuYDtcblxuSGVhZGVyTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckxheW91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgaWNvbkNvbG9yIH0gZnJvbSAnLi9pY29uQ29sb3InO1xuXG5jb25zdCBTZWFyY2hJY29uID0gKHsgaXNBY3RpdmUsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxzdmdcbiAgICAgICAgd2lkdGg9XCIxOFwiXG4gICAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA1NCA1NFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgICAgPGcgaWQ9XCJzZWFyY2hfaWNvblwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlNoYXBlXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk00MC40MDcyIDM4LjEyMzNMNTMuNTMyOSA1MS4yNDYxQzU0LjE1NTcgNTEuODY4NyA1NC4xNTU3IDUyLjg5ODQgNTMuNTMyOSA1My41MjExQzUzLjIyMTYgNTMuODQ0MyA1Mi44MDI0IDU0IDUyLjM5NTIgNTRDNTEuOTg4IDU0IDUxLjU2ODkgNTMuODMyNCA1MS4yNTc1IDUzLjUyMTFMMzguMTMxNyA0MC4zOTgyQzM0LjA4MzggNDMuOTE4NCAyOC44MDI0IDQ2LjA0OTcgMjMuMDI5OSA0Ni4wNDk3QzEwLjMzNTMgNDYuMDQ5NyAwIDM1LjcxNjYgMCAyMy4wMjQ4QzAgMTAuMzMzIDEwLjMyMzQgMCAyMy4wMjk5IDBDMzUuNzI0NiAwIDQ2LjA1OTkgMTAuMzIxMSA0Ni4wNTk5IDIzLjAyNDhDNDYuMDU5OSAyOC43OTYgNDMuOTI4MSAzNC4wNzYzIDQwLjQwNzIgMzguMTIzM1pNMjMuMDE4IDMuMjMyODJDMTIuMTA3OCAzLjIzMjgyIDMuMjIxNTYgMTIuMTA1MSAzLjIyMTU2IDIzLjAyNDhDMy4yMjE1NiAzMy45NDQ2IDEyLjEwNzggNDIuODI4OCAyMy4wMTggNDIuODI4OEMzMy45NDAxIDQyLjgyODggNDIuODE0NCAzMy45MzI2IDQyLjgxNDQgMjMuMDI0OEM0Mi44MTQ0IDEyLjExNzEgMzMuOTQwMSAzLjIzMjgyIDIzLjAxOCAzLjIzMjgyWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMyRUI0RkZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKFNlYXJjaEljb24pYFxuICAgICR7aWNvbkNvbG9yfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgaWNvbkNvbG9yIH0gZnJvbSAnLi9pY29uQ29sb3InO1xuXG5jb25zdCBTaG9wSWNvbiA9ICh7IGlzQWN0aXZlLCAuLi5yZXN0IH0pID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMjJcIlxuICAgICAgICBoZWlnaHQ9XCIxOVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjIgMTlcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICAgIDxnIGlkPVwic2hvcHBpbmctYmFza2V0LWJ1dHRvblwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlNoYXBlXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNi4zNDg2IDYuOTEwOTlMMTEuOTA4MyAwLjM5NDkxNEMxMS43MDY0IDAuMTk3NDU3IDExLjQwMzcgMCAxMS4xMDA5IDBDMTAuNzk4MiAwIDEwLjQ5NTQgMC4wOTg3Mjg1IDEwLjI5MzYgMC4zOTQ5MTRMNS44NTMyMSA2LjkxMDk5SDEuMDA5MTdDMC40MDM2NyA2LjkxMDk5IDAgNy4zMDU5MSAwIDcuODk4MjhWOC4xOTQ0N0wyLjUyMjk0IDE3LjM3NjJDMi43MjQ3NyAxOC4xNjYgMy41MzIxMSAxOC44NTcxIDQuNDQwMzcgMTguODU3MUgxNy41NTk2QzE4LjQ2NzkgMTguODU3MSAxOS4yNzUyIDE4LjI2NDggMTkuNDc3MSAxNy4zNzYyTDIyIDguMTk0NDdWNy44OTgyOEMyMiA3LjMwNTkxIDIxLjU5NjMgNi45MTA5OSAyMC45OTA4IDYuOTEwOTlIMTYuMzQ4NlpNOC4wNzMzOSA2LjkxMDk5TDExLjEwMDkgMi41NjY5NEwxNC4xMjg0IDYuOTEwOTlIOC4wNzMzOVpNOS4wODI1NyAxMi44MzQ3QzkuMDgyNTcgMTMuOTIwNyA5Ljk5MDgzIDE0LjgwOTMgMTEuMTAwOSAxNC44MDkzQzEyLjIxMSAxNC44MDkzIDEzLjExOTMgMTMuOTIwNyAxMy4xMTkzIDEyLjgzNDdDMTMuMTE5MyAxMS43NDg3IDEyLjIxMSAxMC44NjAxIDExLjEwMDkgMTAuODYwMUM5Ljk5MDgzIDEwLjg2MDEgOS4wODI1NyAxMS43NDg3IDkuMDgyNTcgMTIuODM0N1pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMkVCNEZGXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChTaG9wSWNvbilgXG4gICAgJHtpY29uQ29sb3J9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVHJpYW5nbGVJY29uID0gcHJvcHMgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjhcIiB2aWV3Qm94PVwiMCAwIDEyIDhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYgOEwwIDBMMTIgMEw2IDhaXCIgZmlsbD1cIiMyRUI0RkZcIiAvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGVJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUm91bmRNYXJrSWNvbiA9IHByb3BzID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTkgMThDMTMuOTcwNiAxOCAxOCAxMy45NzA2IDE4IDlDMTggNC4wMjk0NCAxMy45NzA2IDAgOSAwQzQuMDI5NDQgMCAwIDQuMDI5NDQgMCA5QzAgMTMuOTcwNiA0LjAyOTQ0IDE4IDkgMThaXCJcbiAgICAgICAgICAgIGZpbGw9XCIjNTBFM0MyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGggZD1cIk01IDkuNTcyMjhMNy45ODI4OCAxMi42MDY5TDEyLjgyMzcgNlwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlV2lkdGg9XCIyXCIgLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdW5kTWFya0ljb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBFbmcgPSBwcm9wcyA9PiAoXG4gICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgICAgPGcgaWQ9XCJHcm91cFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIk1hc2tcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEwIDIwQzE1LjUyMjggMjAgMjAgMTUuNTIyOCAyMCAxMEMyMCA0LjQ3NzE1IDE1LjUyMjggMCAxMCAwQzQuNDc3MTUgMCAwIDQuNDc3MTUgMCAxMEMwIDE1LjUyMjggNC40NzcxNSAyMCAxMCAyMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAyNDdEXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWFza1xuICAgICAgICAgICAgICAgIGlkPVwibWFzazBcIlxuICAgICAgICAgICAgICAgIG1hc2stdHlwZT1cImFscGhhXCJcbiAgICAgICAgICAgICAgICBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgeD1cIjBcIlxuICAgICAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJNYXNrXzJcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEwIDIwQzE1LjUyMjggMjAgMjAgMTUuNTIyOCAyMCAxMEMyMCA0LjQ3NzE1IDE1LjUyMjggMCAxMCAwQzQuNDc3MTUgMCAwIDQuNDc3MTUgMCAxMEMwIDE1LjUyMjggNC40NzcxNSAyMCAxMCAyMFpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21hc2s+XG4gICAgICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMClcIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIkdyb3VwXzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMjg2NyAyMC4xOTNWMTcuMDk0M0wxMy41Njg4IDkuNTAyNTJMNS42NzUzNSA5LjUwMjUyTDIwLjc2NjUgMjAuMTkzSDI0LjI4NjdaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0VFRUVFRVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMjg2NyAxOC4wMjc0TDEyLjI1MzkgOS41MDI1N0g5LjYyMjhMMjQuMjg2NyAxOS44OTA2VjE4LjAyNzRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNy44MzE5MSA5LjUwMjU0TC00LjM5NTYgMTguMzA4M1YyMC4xOTI5SDAuNjM0MjM4TDE1LjcyNjkgOS41MDI0TDcuODMxOTEgOS41MDI1NFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUVFRUVFXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF80XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMS43Nzg0IDkuNTAyNTJMLTMuMjg3MDggMjAuMTkzSC0yLjg4NTU5SC0wLjY4MDA4MUwxNC40MTEgOS41MDI1MkgxMS43Nzg0WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNDRjFCMkJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIwLjc2NzkgMC4zMzkzMTVMNS42NzY4MiAxMS4wMjk4TDEzLjU3MDMgMTEuMDI5OEwyNC4yODY3IDMuNDM3OTdWMC4zMzkzMTVIMjAuNzY3OVpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUVFRUVFXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF82XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yMi4wODE0IDAuMzM5MzE1TDYuOTkxNzkgMTEuMDI5OEg5LjYyMjk0TDI0LjI4NjggMC42NDE3MzFWMC4zMzkzMTVIMjIuMDgxNFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjQ0YxQjJCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF83XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC41ODAxIDExLjEzOTFIMTUuNjA0NEwwLjYxMTAwMSAwLjQzOTUxNUMtMS4xMTE0NiAwLjcwNTIxNSAtMi41OTQ0MSAxLjcxMjcxIC0zLjUxNjQ4IDMuMTMyMDhMMTAuNTc5OSAxMy4xODY4VjExLjEzOTFIMTAuNTgwMVpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNFRUVFRUVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTS0yLjg1NzEzIDIuMzY4MTdMMTAuNzg5MyAxMi4wODc5VjEwLjk3OTRIMTEuODY4MUwtMS43MDkyNyAxLjMxODY2Qy0yLjEzNDc5IDEuNjE3ODUgLTIuNTIwMzMgMS45NzA4OCAtMi44NTcxMyAyLjM2ODE3WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjQuMzk1NSA2LjM3MzZMMTMuNzg4MiA2LjM3MzZMMTMuNzg4MiAwLjIxOTcyN0w2LjIxMTcyIDAuMjE5NzI3VjYuMzczNkwtNC4zOTU2IDYuMzczNkwtNC4zOTU2IDE0LjA2NThINi4yMTE3MlYyMC4yMTk3TDEzLjc4ODMgMjAuMjE5N1YxNC4wNjU4SDI0LjM5NTZWNi4zNzM2SDI0LjM5NTVaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUVFRUVFXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF80XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuMjEwMiAyMC4xOTNINy42ODE0Nkw3LjY4MTQ2IDAuMzM5NDM2SDEyLjIxMDJMMTIuMjEwMiAyMC4xOTNaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI0LjI4NjcgMTIuNTU2OUwtNC4zOTUwNyAxMi41NTY5TC00LjM5NTA3IDcuOTc1MjdMMjQuMjg2NyA3Ljk3NTI3VjEyLjU1NjlaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0NGMUIyQlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbmc7XG4iLCJpbXBvcnQgRW5nbGlzaCBmcm9tICcuL0VuZ2xpc2gnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZW5nbGlzaDogRW5nbGlzaCxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSWNvbnMgZnJvbSAnLi9sYW5ndWFnZS1pY29ucyc7XG5pbXBvcnQgVHJpYW5nbGVJY29uIGZyb20gJy4vVHJpYW5nbGVJY29uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJztcblxuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuY29uc3QgbGFuZ3VnZVNob3J0TmFtZXMgPSB7XG4gICAgZW5nbGlzaDogJ0VuZycsXG59O1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdCA9ICh7IGxhbmd1YWdlIH0pID0+IHtcbiAgICBjb25zdCBDb21wb25lbnQgPSBJY29uc1tsYW5ndWFnZV07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICAgICAgPEJveCBweD1cIjVweFwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhY3RpdmU9e2ZhbHNlfT57bGFuZ3VnZVNob3J0TmFtZXNbbGFuZ3VhZ2VdfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxUcmlhbmdsZUljb24gLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVNlbGVjdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENsb3NlSWNvbiA9IHByb3BzID0+IChcbiAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTggMThcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgICA8ZyBpZD1cIkdyb3VwIDEyIENvcHlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoIDVcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTYgMUwxIDE2LjI5ODlcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMyRUI0RkZcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aCA1XzJcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMSAxTDE2LjgzNzEgMTYuMjk4OVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzJFQjRGRlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VJY29uO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvIH0gZnJvbSAnLi9Mb2dvJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVudUl0ZW0gfSBmcm9tICcuL01lbnVJdGVtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyTGF5b3V0IH0gZnJvbSAnLi9IZWFkZXJMYXlvdXQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hJY29uIH0gZnJvbSAnLi9TZWFyY2hJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2hvcEljb24gfSBmcm9tICcuL1Nob3BJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJpYW5nbGVJY29uIH0gZnJvbSAnLi9UcmlhbmdsZUljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3VuZE1hcmtJY29uIH0gZnJvbSAnLi9Sb3VuZE1hcmtJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGFuZ3VhZ2VTZWxlY3QgfSBmcm9tICcuL0xhbmd1YWdlU2VsZWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VJY29uIH0gZnJvbSAnLi9DbG9zZUljb24nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xuXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2hlYWRlci1jb250cm9scyc7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJy4vSGFtYnVyZ2VyJztcblxuaW1wb3J0IHsgRmxleCwgQm94IH0gZnJvbSAnLi4vc2hhcmVkJztcblxuY29uc3QgbWVudUluZGVudCA9IHtcbiAgICAwOiAnMTZweCcsXG4gICAgeGw6ICc0NnB4Jyxcbn07XG5cbmNvbnN0IERlc2t0b3BIZWFkZXIgPSAoe1xuICAgIGxpbmtzLFxuICAgIGFjdGl2ZVVybCxcbiAgICBzZXRBY3RpdmVVcmwsXG4gICAgdXNlckxpbmtzLFxuICAgIHRhYmxldFJlc29sdXRpb24sXG4gICAgbW9iaWxlUmVzb2x1dGlvbixcbiAgICBjaGFuZ2VNb2JpbGVNZW51U3RhdGUsXG4gICAgbWVudU9wZW5lZCxcbn0pID0+IHtcbiAgICBjb25zdCBvbk1lbnVDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IGNoYW5nZU1vYmlsZU1lbnVTdGF0ZSghbWVudU9wZW5lZCksIFttZW51T3BlbmVkXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1heFdpZHRoPXt0YWJsZXRSZXNvbHV0aW9ufT5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHByPVwiMjJweFwiXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0b3A9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAnNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxIYW1idXJnZXIgYmc9XCJibHVlLjBcIiBoZWlnaHQ9XCIxMDAlXCIgb25DbGljaz17b25NZW51Q2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICA8TWVkaWFRdWVyeSBtaW5XaWR0aD17bW9iaWxlUmVzb2x1dGlvbn0+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xzLkxvZ28ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgaXNBY3RpdmUgLz5cbiAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cbiAgICAgICAgICAgIDxGbGV4IGZsZXg9ezF9IGp1c3RpZnlDb250ZW50PXt7IDA6ICdmbGV4LWVuZCcsIGxnOiAnY2VudGVyJyB9fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXt0YWJsZXRSZXNvbHV0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKHsgdXJsLCB0aXRsZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXt1cmx9IGFzPVwic3BhblwiIHBsPXtpbmRleCAhPT0gMCAmJiBtZW51SW5kZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5NZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlVXJsLmluZGV4T2YodXJsKSA+PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVVybCh1cmwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbHMuTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggcGw9e21lbnVJbmRlbnR9IHByPXt7IDA6ICczMnB4JywgbGc6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuTGFuZ3VhZ2VTZWxlY3QgbGFuZ3VhZ2U9XCJlbmdsaXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHt1c2VyTGlua3MubWFwKCh7IHVybCwgdGl0bGUgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjFweFwiIGFzPVwic3BhblwiIG14PVwiNnB4XCIgaGVpZ2h0PVwiMTNweFwiIGJnPVwiZ3JheS4yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5NZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZVVybC5pbmRleE9mKHVybCkgPj0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVXJsKHVybCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250cm9scy5NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8RmxleCBwbD1cIjMwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuU2hvcEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD1cIi0xMnB4XCIgcmlnaHQ9XCItMTJweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5Sb3VuZE1hcmtJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXttb2JpbGVSZXNvbHV0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGw9XCIyMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLlNlYXJjaEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcEhlYWRlcjtcbiIsImV4cG9ydCBjb25zdCBoZWFkZXJMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIHVybDogJyNmZWF0dXJlZCcsXG4gICAgICAgIHRpdGxlOiAnRmVhdHVyZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjdGhpbmdzX3RvX2RvJyxcbiAgICAgICAgdGl0bGU6ICdUaGluZ3MgdG8gZG8nLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjYmVhdXR5X3NwYXMnLFxuICAgICAgICB0aXRsZTogJ0JlYXV0eSAmIFNwYXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjbG9jYWwnLFxuICAgICAgICB0aXRsZTogJ0xvY2FsJyxcbiAgICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHVzZXJMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIHVybDogJyNsb2dpbicsXG4gICAgICAgIHRpdGxlOiAnTG9naW4nLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY29tcGFueUxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdXJsOiAnI2NvbXBhbnkxJyxcbiAgICAgICAgdGl0bGU6ICdBYm91dCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNjb21wYW55MicsXG4gICAgICAgIHRpdGxlOiAnQmxvZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNjb21wYW55MycsXG4gICAgICAgIHRpdGxlOiAnUHJlc3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjY29tcGFueTQnLFxuICAgICAgICB0aXRsZTogJ0ludmVzdG9yIFJlbGF0aW9ucycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNjb21wYW55NScsXG4gICAgICAgIHRpdGxlOiAnTWFuYWdlbWVudCBUZWFtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI2NvbXBhbnk2JyxcbiAgICAgICAgdGl0bGU6ICdJbiBZb3VyIENvbW11bml0eScsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB3b3JrTGlua3MgPSBbXG4gICAge1xuICAgICAgICB1cmw6ICcjd29yazEnLFxuICAgICAgICB0aXRsZTogJ0pvaW4gdGhlIENvdXBvbiBCYXphYXInLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjd29yazInLFxuICAgICAgICB0aXRsZTogJ1J1biBhIEdyb3Vwb24gRGVhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyN3b3JrMycsXG4gICAgICAgIHRpdGxlOiAnTGVhcm4gQWJvdXQgR3JvdXBvbiBNZXJjaGFudCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyN3b3JrNCcsXG4gICAgICAgIHRpdGxlOiAnQWZmaWxpYXRlIFByb2dyYW0nLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjd29yazUnLFxuICAgICAgICB0aXRsZTogJ1ZlbmRvciBDb2RlIG9mIENvbmR1Y3QnLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbW9yZUxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdXJsOiAnI21vcmUxJyxcbiAgICAgICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdXJsOiAnI21vcmUyJyxcbiAgICAgICAgdGl0bGU6ICdSZWZ1bmQgUG9saWNpZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1cmw6ICcjbW9yZTMnLFxuICAgICAgICB0aXRsZTogJ0ZBUScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNtb3JlNCcsXG4gICAgICAgIHRpdGxlOiAnTWlsZXMgJiBQb2ludHMnLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbWFpbkxpbmtzID0gW1xuICAgIC4uLmhlYWRlckxpbmtzLFxuICAgIHtcbiAgICAgICAgdXJsOiAnI21haW4xJyxcbiAgICAgICAgdGl0bGU6ICdHb29kcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNtYWluMicsXG4gICAgICAgIHRpdGxlOiAnQ291cG9ucycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogJyNtYWluMycsXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdHMnLFxuICAgIH0sXG5dO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICogYXMgQ29udHJvbHMgZnJvbSAnLi9oZWFkZXItY29udHJvbHMnO1xuXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5jb25zdCBZRUFSID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBMb2dvQ29weXJpZ2h0ID0gKHsgc2l6ZSB9KSA9PiAoXG4gICAgPEJveD5cbiAgICAgICAgPENvbnRyb2xzLkxvZ28gaXNBY3RpdmUgc2l6ZT17c2l6ZX0gLz5cbiAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgY29sb3I9XCJncmF5LjJcIiBmb250U2l6ZT1cIjEycHhcIiBwdD1cIjEwcHhcIj5cbiAgICAgICAgICAgIMKpXG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAge1lFQVJ9XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgR3JvdXBvbiwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkXG4gICAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ29Db3B5cmlnaHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGYWNlYm9vayA9IHByb3BzID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMjggMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8ZyBpZD1cImZhY2Vib29rIGNvcHlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJPdmFsXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMy45MDA0IDI3LjgwMDhDMjEuNTc3NCAyNy44MDA4IDI3LjgwMDggMjEuNTc3NCAyNy44MDA4IDEzLjkwMDRDMjcuODAwOCA2LjIyMzQyIDIxLjU3NzQgMCAxMy45MDA0IDBDNi4yMjM0MiAwIDAgNi4yMjM0MiAwIDEzLjkwMDRDMCAyMS41Nzc0IDYuMjIzNDIgMjcuODAwOCAxMy45MDA0IDI3LjgwMDhaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzNCNTk5OFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTE3LjQzNTIgMTMuMzYySDE1LjI1MTVWMjEuMzYyM0gxMS45NDI5VjEzLjM2MkgxMC4zNjk0VjEwLjU1MDRIMTEuOTQyOVY4LjczMTAyQzExLjk0MjkgNy40Mjk5NCAxMi41NjEgNS4zOTI1OCAxNS4yODEgNS4zOTI1OEwxNy43MzE3IDUuNDAyODNWOC4xMzE5N0gxNS45NTM1QzE1LjY2MTkgOC4xMzE5NyAxNS4yNTE3IDguMjc3NjkgMTUuMjUxNyA4Ljg5ODM1VjEwLjU1MzFIMTcuNzI0M0wxNy40MzUyIDEzLjM2MlpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGYWNlYm9vaztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExpbmtlZGluID0gcHJvcHMgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCIgdmlld0JveD1cIjAgMCAyOCAyOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30+XG4gICAgICAgIDxnIGlkPVwibGlua2VkaW4gY29weVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjk2NzMgMEMyMS42ODE3IDAgMjcuOTM0NyA2LjI1Mzg4IDI3LjkzNDcgMTMuOTY3NEMyNy45MzQ3IDIxLjY4MDkgMjEuNjgxNyAyNy45MzQ3IDEzLjk2NzMgMjcuOTM0N0M2LjI1MjkyIDI3LjkzNDcgMCAyMS42ODA4IDAgMTMuOTY3NEMwIDYuMjUzOTcgNi4yNTMwMSAwIDEzLjk2NzMgMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMEU3NkE4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiU2hhcGVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEwLjQ3NTYgOC4yOTMwM0MxMC40NzU2IDkuMDE1ODUgOS44ODg5OSA5LjYwMjUxIDkuMTY2MTcgOS42MDI1MUM4LjQ0MzM1IDkuNjAyNTEgNy44NTY2OSA5LjAxNTk0IDcuODU2NjkgOC4yOTMxMkM3Ljg1NjY5IDcuNTcwMyA4LjQ0MzM1IDYuOTgzNjQgOS4xNjYxNyA2Ljk4MzY0QzkuODg4OTkgNi45ODM2NCAxMC40NzU2IDcuNTcwMiAxMC40NzU2IDguMjkzMDNaTTE4LjA1OTkgMTAuMTcxN0MxNi43OTA2IDEwLjE3MTcgMTUuNjU0OSAxMC42MzUyIDE0Ljg0OTIgMTEuNjU4NFYxMC40NDVIMTIuMjI0MlYxOS4xOTEySDE0Ljg0OTJWMTQuNDYxNUMxNC44NDkyIDEzLjQ2MTkgMTUuNzY1IDEyLjQ4NjggMTYuOTEyIDEyLjQ4NjhDMTguMDU5IDEyLjQ4NjggMTguMzQxOSAxMy40NjE5IDE4LjM0MTkgMTQuNDM3VjE5LjE5MDNIMjAuOTU3M1YxNC4yNDI0QzIwLjk1NzIgMTAuODA1NSAxOS4zMzAxIDEwLjE3MTcgMTguMDU5OSAxMC4xNzE3Wk03Ljg3MDY5IDE5LjE5MTFIMTAuNDg2MVYxMC40NzM3SDcuODcwNjlWMTkuMTkxMVpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRlbGVncmFtID0gcHJvcHMgPT4gKFxuICAgIDxzdmdcbiAgICAgICAgd2lkdGg9XCIyOFwiXG4gICAgICAgIGhlaWdodD1cIjI4XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyOCAyOFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICAgIDxnIGlkPVwidGVsZWdyYW0gY29weVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIk92YWxcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEzLjk5OTggMjcuOTk5N0MyMS43MzE3IDI3Ljk5OTcgMjcuOTk5NyAyMS43MzE3IDI3Ljk5OTcgMTMuOTk5OEMyNy45OTk3IDYuMjY3OTQgMjEuNzMxNyAwIDEzLjk5OTggMEM2LjI2Nzk0IDAgMCA2LjI2Nzk0IDAgMTMuOTk5OEMwIDIxLjczMTcgNi4yNjc5NCAyNy45OTk3IDEzLjk5OTggMjcuOTk5N1pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjNDFCNEU2XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUGF0aFwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTIuNjQwNCAxNi4wMzk3TDE4Ljk2NzMgMjAuODE2NUwyMi4xNjEgNy4xODM1OUw1LjgzOTExIDEzLjYwMzlMMTAuODA1NyAxNS4yNDg5TDE5Ljg2OTcgOS4xNjg5N0wxMi42NDA0IDE2LjAzOTdaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzJcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTEwLjgwNTcgMTUuMjQ4OUwxMi4xNjU5IDIwLjE0MzZMMTIuNjQwNCAxNi4wMzk3TDE5Ljg2OTcgOS4xNjg5NUwxMC44MDU3IDE1LjI0ODlaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI0QyRDJEN1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIlBhdGhfM1wiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuNjk2NSAxNy41OTIxTDEyLjE2NTggMjAuMTQzNkwxMi42NDAzIDE2LjAzOTdMMTQuNjk2NSAxNy41OTIxWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNCOUI5QkVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVsZWdyYW07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUd2l0dGVyID0gcHJvcHMgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCIgdmlld0JveD1cIjAgMCAyOCAyOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30+XG4gICAgICAgIDxnIGlkPVwiR3JvdXAgMTYgQ29weVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cIk92YWxcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTE0IDI4QzIxLjczMiAyOCAyOCAyMS43MzIgMjggMTRDMjggNi4yNjgwMSAyMS43MzIgMCAxNCAwQzYuMjY4MDEgMCAwIDYuMjY4MDEgMCAxNEMwIDIxLjczMiA2LjI2ODAxIDI4IDE0IDI4WlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwM0E5RjRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnIGlkPVwiaWNvbnM4LXR3aXR0ZXJcIj5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIyIDkuNDE5MThDMjEuNDQ4MyA5LjY2MTY0IDIwLjg1NTkgOS44MjMyOCAyMC4yMzEgOS44OTkyNUMyMC44NjU3IDkuNTI0MjUgMjEuMzU1NSA4LjkyNjE5IDIxLjU4NSA4LjIxOTgzQzIwLjk4OTQgOC41NjczNSAyMC4zMzAzIDguODIxMTIgMTkuNjMwNSA4Ljk1NTI4QzE5LjA3MDYgOC4zNjUzIDE4LjI3MTYgOCAxNy4zODYyIDhDMTUuNjg3MiA4IDE0LjMwODggOS4zNTYxNCAxNC4zMDg4IDExLjAyOTFDMTQuMzA4OCAxMS4yNjUxIDE0LjMzNjQgMTEuNDk2MiAxNC4zODg1IDExLjcxOTNDMTEuODMxOCAxMS41OTMyIDkuNTYzMiAxMC4zODU4IDguMDQ2NDQgOC41NTI4QzcuNzc5NTQgOS4wMDA1NCA3LjYyOTgxIDkuNTI0MjUgNy42Mjk4MSAxMC4wNzg3QzcuNjI5ODEgMTEuMTI5MyA4LjE3MTc1IDEyLjA1NTUgOC45OTg0OCAxMi42MDAyQzguNDkzOTggMTIuNTg1NyA4LjAxODc3IDEyLjQ0NSA3LjYwMzc4IDEyLjIyMkM3LjYwMzc4IDEyLjIzMTcgNy42MDM3OCAxMi4yNDQ2IDcuNjAzNzggMTIuMjU3NUM3LjYwMzc4IDEzLjcyNjggOC42NjQ4NiAxNC45NTA0IDEwLjA3MSAxNS4yMzAxQzkuODEzODIgMTUuMjk5NiA5LjU0MjA0IDE1LjMzODQgOS4yNjIxMiAxNS4zMzg0QzkuMDYzNTggMTUuMzM4NCA4Ljg2OTkxIDE1LjMxNTcgOC42ODI3NiAxNS4yODE4QzkuMDczMzQgMTYuNDgyOCAxMC4yMDkzIDE3LjM2MDUgMTEuNTU2OCAxNy4zODYzQzEwLjUwMjIgMTguMTk3NyA5LjE3NTg3IDE4LjY4NDMgNy43MzM5NyAxOC42ODQzQzcuNDg0OTcgMTguNjg0MyA3LjI0MDg2IDE4LjY2OTcgNyAxOC42NDA2QzguMzYzNzggMTkuNDk3MyA5Ljk4MTQ1IDIwIDExLjcxNzkgMjBDMTcuMzc4MSAyMCAyMC40NzUxIDE1LjM4MzYgMjAuNDc1MSAxMS4zNzgyQzIwLjQ3NTEgMTEuMjQ3MyAyMC40NzAyIDExLjExNjQgMjAuNDYzNyAxMC45ODg3QzIxLjA2NzUgMTAuNTYzNiAyMS41ODgzIDEwLjAzMDIgMjIgOS40MTkxOFpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFR3aXR0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBXaGF0c0FwcCA9IHByb3BzID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMjggMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8ZyBpZD1cIndoYXRzYXBwIGNvcHlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNC4wMDM1IDBIMTMuOTk2NUM2LjI3NzI1IDAgMCA2LjI3OSAwIDE0QzAgMTcuMDYyNSAwLjk4NyAxOS45MDEgMi42NjUyNSAyMi4yMDU3TDAuOTIwNSAyNy40MDY3TDYuMzAxNzUgMjUuNjg2NUM4LjUxNTUgMjcuMTUzIDExLjE1NjIgMjggMTQuMDAzNSAyOEMyMS43MjI3IDI4IDI4IDIxLjcxOTIgMjggMTRDMjggNi4yODA3NSAyMS43MjI3IDAgMTQuMDAzNSAwWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0Q0FGNTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzJcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIyLjE0OTcgMTkuNzY5N0MyMS44MTIgMjAuNzIzNCAyMC40NzE1IDIxLjUxNDQgMTkuNDAyMiAyMS43NDU0QzE4LjY3MDcgMjEuOTAxMiAxNy43MTUyIDIyLjAyNTQgMTQuNDk4NyAyMC42OTE5QzEwLjM4NDUgMTguOTg3NCA3LjczNDk3IDE0LjgwNjcgNy41Mjg0NyAxNC41MzU0QzcuMzMwNzIgMTQuMjY0MiA1Ljg2NTk3IDEyLjMyMTcgNS44NjU5NyAxMC4zMTI3QzUuODY1OTcgOC4zMDM3IDYuODg2MjIgNy4zMjU0NSA3LjI5NzQ3IDYuOTA1NDVDNy42MzUyMiA2LjU2MDcgOC4xOTM0NyA2LjQwMzIgOC43Mjg5NyA2LjQwMzJDOC45MDIyMiA2LjQwMzIgOS4wNTc5NyA2LjQxMTk1IDkuMTk3OTcgNi40MTg5NUM5LjYwOTIyIDYuNDM2NDUgOS44MTU3MiA2LjQ2MDk1IDEwLjA4NyA3LjExMDJDMTAuNDI0NyA3LjkyMzk1IDExLjI0NzIgOS45MzI5NSAxMS4zNDUyIDEwLjEzOTRDMTEuNDQ1IDEwLjM0NTkgMTEuNTQ0NyAxMC42MjU5IDExLjQwNDcgMTAuODk3MkMxMS4yNzM1IDExLjE3NzIgMTEuMTU4IDExLjMwMTQgMTAuOTUxNSAxMS41Mzk0QzEwLjc0NSAxMS43Nzc0IDEwLjU0OSAxMS45NTk0IDEwLjM0MjUgMTIuMjE0OUMxMC4xNTM1IDEyLjQzNzIgOS45Mzk5NyAxMi42NzUyIDEwLjE3OCAxMy4wODY0QzEwLjQxNiAxMy40ODg5IDExLjIzODUgMTQuODMxMiAxMi40NDk1IDE1LjkwOTJDMTQuMDEyMiAxNy4zMDA0IDE1LjI3OTIgMTcuNzQ0OSAxNS43MzI1IDE3LjkzMzlDMTYuMDcwMiAxOC4wNzM5IDE2LjQ3MjcgMTguMDQwNyAxNi43MTk1IDE3Ljc3ODJDMTcuMDMyNyAxNy40NDA0IDE3LjQxOTUgMTYuODgwNCAxNy44MTMyIDE2LjMyOTJDMTguMDkzMiAxNS45MzM3IDE4LjQ0NjcgMTUuODg0NyAxOC44MTc3IDE2LjAyNDdDMTkuMTk1NyAxNi4xNTU5IDIxLjE5NiAxNy4xNDQ3IDIxLjYwNzIgMTcuMzQ5NEMyMi4wMTg1IDE3LjU1NTkgMjIuMjg5NyAxNy42NTM5IDIyLjM4OTUgMTcuODI3MkMyMi40ODc1IDE4LjAwMDQgMjIuNDg3NSAxOC44MTQyIDIyLjE0OTcgMTkuNzY5N1pcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFGQUZBXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdoYXRzQXBwO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9vayB9IGZyb20gJy4vRmFjZWJvb2snO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRpbiB9IGZyb20gJy4vTGlua2VkaW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZWxlZ3JhbSB9IGZyb20gJy4vVGVsZWdyYW0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2hhdHNhcHAgfSBmcm9tICcuL1doYXRzYXBwJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAqIGFzIEljb25zIGZyb20gJy4vc29jaWFsLWljb25zJztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vc2hhcmVkJztcblxuY29uc3QgU29jaWFsQnV0dG9ucyA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEljb25zLkZhY2Vib29rIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHBsPVwiMjBweFwiPlxuICAgICAgICAgICAgPEljb25zLlR3aXR0ZXIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcGw9XCIyMHB4XCI+XG4gICAgICAgICAgICA8SWNvbnMuV2hhdHNhcHAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcGw9XCIyMHB4XCI+XG4gICAgICAgICAgICA8SWNvbnMuTGlua2VkaW4gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcGw9XCIyMHB4XCI+XG4gICAgICAgICAgICA8SWNvbnMuVGVsZWdyYW0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxCdXR0b25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2hlYWRlci1jb250cm9scyc7XG5pbXBvcnQgKiBhcyBMSU5LUyBmcm9tICcuL2xpbmtzJztcbmltcG9ydCBMb2dvQ29weXJpZ2h0IGZyb20gJy4vTG9nb0NvcHlyaWdodCc7XG5pbXBvcnQgU29jaWFsQnV0dG9ucyBmcm9tICcuL1NvY2lhbEJ1dHRvbnMnO1xuXG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5leHBvcnQgY29uc3QgbWVudUFuaW1hdGlvbiA9IHtcbiAgICBjbGFzc05hbWVzOiAnbW9iaWxlLW1lbnUnLFxuICAgIHRpbWVvdXQ6IDM1MCxcbn07XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgc3ZnIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAmLiR7bWVudUFuaW1hdGlvbi5jbGFzc05hbWVzfS1lbnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjAwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAmLiR7bWVudUFuaW1hdGlvbi5jbGFzc05hbWVzfS1lbnRlci1hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7bWVudUFuaW1hdGlvbi50aW1lb3V0fW1zIGVhc2Utb3V0O1xuICAgIH1cblxuICAgICYuJHttZW51QW5pbWF0aW9uLmNsYXNzTmFtZXN9LWV4aXQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgJi4ke21lbnVBbmltYXRpb24uY2xhc3NOYW1lc30tZXhpdC1hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7bWVudUFuaW1hdGlvbi50aW1lb3V0fW1zIGVhc2Utb3V0O1xuICAgIH1cbmA7XG5cbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYmc6ICdncmF5LjAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG59O1xuXG5jb25zdCB0ZXh0UHJvcHMgPSB7XG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMTdweCcsXG4gICAgZm9udFdlaWdodDogJzYwMCcsXG59O1xuXG5jb25zdCBHcm91cExpbmtzID0gKHsgdGl0bGUsIGxpbmtzLCAuLi5yZXN0IH0pID0+IChcbiAgICA8Qm94IHsuLi5yZXN0fT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICAgIDxUZXh0IGxldHRlclNwYWNpbmc9XCIwLjY1NjI1cHhcIiB7Li4udGV4dFByb3BzfSBwYj1cIjE3cHhcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICB7bGlua3MubWFwKCh7IHRpdGxlOiBsaW5rVGl0bGUsIHVybCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGEga2V5PXt1cmx9IGhyZWY9e3VybH0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiYmx1ZS4wXCIgey4uLnRleHRQcm9wc30gcGI9XCIxN3B4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjFweFwiIGJnPVwiZ3JheS4zXCIgLz5cbiAgICA8L0JveD5cbik7XG5cbmNvbnN0IE1vYmlsZU1lbnUgPSAoeyBvbkNsb3NlLCAuLi5yZXN0IH0pID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4gb25DbG9zZSgpLCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lciB7Li4ucmVzdH0+XG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xzLkNsb3NlSWNvbiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEdyb3VwTGlua3MgbGlua3M9e0xJTktTLmhlYWRlckxpbmtzfSAvPlxuICAgICAgICAgICAgPEdyb3VwTGlua3MgdGl0bGU9XCJDb21wYW55XCIgbGlua3M9e0xJTktTLmNvbXBhbnlMaW5rc30gcHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgIDxHcm91cExpbmtzIHRpdGxlPVwiV29yayB3aXRoIENvdXBvbiBCYXphYXJcIiBsaW5rcz17TElOS1Mud29ya0xpbmtzfSBwdD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgPEdyb3VwTGlua3MgdGl0bGU9XCJNb3JlXCIgbGlua3M9e0xJTktTLm1vcmVMaW5rc30gcHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgIDxHcm91cExpbmtzIHRpdGxlPVwiTWFpblwiIGxpbmtzPXtMSU5LUy5tYWluTGlua3N9IHB0PVwiMjBweFwiIC8+XG4gICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcHk9XCIyMHB4XCI+XG4gICAgICAgICAgICAgICAgPEJveCBwYj1cIjIwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvZ29Db3B5cmlnaHQgc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEJ1dHRvbnMgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmV4cG9ydCBjb25zdCBvdmVybGF5QW5pbWF0aW9uID0ge1xuICAgIGNsYXNzTmFtZXM6ICdvdmVybGF5JyxcbiAgICB0aW1lb3V0OiAzNTAsXG59O1xuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkKEJveCkuYXR0cnMoe1xuICAgIGJnOiAncmdiYSgwLDAsMCwuNSknLFxuICAgIGJvdHRvbTogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgcmlnaHQ6ICcwcHgnLFxuICAgIHpJbmRleDogOSxcbn0pYFxuICAgICYuJHtvdmVybGF5QW5pbWF0aW9uLmNsYXNzTmFtZXN9LWVudGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgJi4ke292ZXJsYXlBbmltYXRpb24uY2xhc3NOYW1lc30tZW50ZXItYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke292ZXJsYXlBbmltYXRpb24udGltZW91dH1tcyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAmLiR7b3ZlcmxheUFuaW1hdGlvbi5jbGFzc05hbWVzfS1leGl0IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgJi4ke292ZXJsYXlBbmltYXRpb24uY2xhc3NOYW1lc30tZXhpdC1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7b3ZlcmxheUFuaW1hdGlvbi50aW1lb3V0fW1zIGVhc2Utb3V0O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXk7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEhhbWJ1cmdlciB9IGZyb20gJy4vSGFtYnVyZ2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyTGluZSB9IGZyb20gJy4vSGVhZGVyTGluZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vYmlsZU1lbnUsIG1lbnVBbmltYXRpb24gfSBmcm9tICcuL01vYmlsZU1lbnUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPdmVybGF5LCBvdmVybGF5QW5pbWF0aW9uIH0gZnJvbSAnLi9PdmVybGF5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nb0NvcHlyaWdodCB9IGZyb20gJy4vTG9nb0NvcHlyaWdodCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNvY2lhbEJ1dHRvbnMgfSBmcm9tICcuL1NvY2lhbEJ1dHRvbnMnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuXG5pbXBvcnQgeyBvdmVybGF5QW5pbWF0aW9uLCBPdmVybGF5IH0gZnJvbSAnLi4vbGF5b3V0JztcblxuY29uc3QgeyB0aW1lb3V0IH0gPSBvdmVybGF5QW5pbWF0aW9uO1xuXG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQm94KWBcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB0b3A6IDEwJTtcbiAgICAmLm1vZGFsLWVudGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgICYubW9kYWwtZW50ZXItYWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAke3RpbWVvdXR9bXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJi5tb2RhbC1leGl0IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICYubW9kYWwtZXhpdC1hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7dGltZW91dH1tcyBlYXNlLW91dDtcbiAgICB9XG5gO1xuXG5jb25zdCBNb2RhbCA9ICh7XG4gICAgY2hpbGRyZW4sIG9wZW4sIG9uQ2xvc2UsIC4uLnJlc3Rcbn0pID0+XG4gICAgUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gaW49e29wZW59IHRpbWVvdXQ9e3RpbWVvdXR9IGNsYXNzTmFtZXM9XCJtb2RhbFwiIHVubW91bnRPbkV4aXQ+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciB7Li4ucmVzdH0+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gaW49e29wZW59IHsuLi5vdmVybGF5QW5pbWF0aW9ufSB1bm1vdW50T25FeGl0PlxuICAgICAgICAgICAgICAgIDxPdmVybGF5IHRvcD1cIjBweFwiIG9uQ2xpY2s9e29uQ2xvc2V9IC8+XG4gICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgIDwvPixcbiAgICAgICAgbW9kYWxDb250YWluZXIsXG4gICAgKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgbGluZUhlaWdodCwgZm9udFdlaWdodCwgbGV0dGVyU3BhY2luZywgY29tcG9zZSxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4nO1xuXG5jb25zdCBlbmhhbmNlU3R5bGVkQ29tcG9uZW50ID0gY29tcG9zZShcbiAgICBsaW5lSGVpZ2h0LFxuICAgIGZvbnRXZWlnaHQsXG4gICAgbGV0dGVyU3BhY2luZyxcbik7XG5jb25zdCBUZXh0ID0gc3R5bGVkKEJveCkuYXR0cnMoeyBhczogJ3NwYW4nIH0pYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICR7ZW5oYW5jZVN0eWxlZENvbXBvbmVudH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gJy4vQm94JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxleCB9IGZyb20gJy4vRmxleCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHQgfSBmcm9tICcuL1RleHQnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhciA9ICh7IGFjdGl2ZSB9KSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDE2IDE1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cIlN0YXJcIlxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTggMTJMMy4yOTc3MiAxNC40NzIxTDQuMTk1NzcgOS4yMzYwN0wwLjM5MTU0OCA1LjUyNzg2TDUuNjQ4ODYgNC43NjM5M0w4IDBMMTAuMzUxMSA0Ljc2MzkzTDE1LjYwODUgNS41Mjc4NkwxMS44MDQyIDkuMjM2MDdMMTIuNzAyMyAxNC40NzIxTDggMTJaXCJcbiAgICAgICAgICAgIGZpbGw9e2FjdGl2ZSA/ICcjRkZDMzAwJyA6ICcjOUZBMEEyJ31cbiAgICAgICAgLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU3RhciBmcm9tICcuL1N0YXInO1xuXG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5jb25zdCBzdGFycyA9IFsxLCAyLCAzLCA0LCA1XTtcblxuY29uc3QgUmF0aW5nID0gKHsgdmFsdWUsIGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBjZWlsVmFsdWUgPSBNYXRoLmNlaWwodmFsdWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIHtzdGFycy5tYXAoKHZhbCwgaW5kKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXt2YWx9IHBsPXtpbmQgIT09IDAgJiYgJzZweCd9IGFzPVwic3BhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXIgYWN0aXZlPXt2YWwgPD0gY2VpbFZhbHVlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBmb250U2l6ZT1cIjEycHhcIiBwbD1cIjhweFwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuY29uc3QgUHJpY2VTdHlsZWQgPSBzdHlsZWQoQm94KWBcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNDM3NXB4O1xuYDtcblxuY29uc3QgUHJpY2UgPSAoeyBjaGlsZHJlbiwgaXNPbGQsIHRlcm0gfSkgPT4gKFxuICAgIDxQcmljZVN0eWxlZCBjb2xvcj17IWlzT2xkID8gJ2dyZWVuLjEnIDogdW5kZWZpbmVkfT5cbiAgICAgICAgPEJveCBhcz1cInNwYW5cIiBwcj1cIjJweFwiPlxuICAgICAgICAgICAge3Rlcm19XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtpc09sZCAmJiAoXG4gICAgICAgICAgICA8Qm94IGJnPVwicmVkLjBcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgdG9wPVwiNTAlXCIgbGVmdD1cIjBweFwiIHJpZ2h0PVwiMHB4XCIgaGVpZ2h0PVwiMXB4XCIgLz5cbiAgICAgICAgKX1cbiAgICA8L1ByaWNlU3R5bGVkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmNvbnN0IERpc2NvdW50U3R5bGVkID0gc3R5bGVkKEJveCkuYXR0cnMoe1xuICAgIGJnOiAnZ3JlZW4uMCcsXG59KWBcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42NTYyNXB4O1xuICAgIH1cbmA7XG5cbmNvbnN0IERpc2NvdW50ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxEaXNjb3VudFN0eWxlZD5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L0Rpc2NvdW50U3R5bGVkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzY291bnQ7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJhdGluZyB9IGZyb20gJy4vUmF0aW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJpY2UgfSBmcm9tICcuL1ByaWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY291bnQgfSBmcm9tICcuL0Rpc2NvdW50JztcblxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluZXNFbGxpcHNpcyBmcm9tICdyZWFjdC1saW5lcy1lbGxpcHNpcyc7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5cbmltcG9ydCB7IFJhdGluZywgUHJpY2UsIERpc2NvdW50IH0gZnJvbSAnLi9jb3Vwb24tY29udHJvbHMnO1xuXG5pbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5jb25zdCBpc0VtcHR5ID0gbWVtb2l6ZU9uZSh2YWwgPT4gdmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSAwKTtcblxuY29uc3QgQ291cG9uID0gKHtcbiAgICBuYW1lLFxuICAgIHRpdGxlLFxuICAgIGltYWdlLFxuICAgIHJhdGluZyxcbiAgICByYXRpbmdzLFxuICAgIGxvbmdEZXNjcmlwdGlvbixcbiAgICBjb3Vwb25UZXJtLFxuICAgIHByaWNlVGVybSxcbiAgICBvbGRQcmljZSxcbiAgICBuZXdQcmljZSxcbiAgICBkaXNjb3VudCxcbiAgICBvbkNsaWNrLFxuICAgIGNvdXBvblByaWNlLFxuICAgIC4uLnJlc3Rcbn0pID0+IChcbiAgICA8Qm94IGJnPVwiZ3JheS4wXCIgd2lkdGg9XCIzMDBweFwiIGhlaWdodD1cIjMwMHB4XCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5yZXN0fT5cbiAgICAgICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTE3cHhcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaXNFbXB0eShkaXNjb3VudCkgJiYgKFxuICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD1cIjIwcHhcIiByaWdodD1cIjEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPERpc2NvdW50PntgJHtkaXNjb3VudH0lYH08L0Rpc2NvdW50PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcHg9XCIyMHB4XCIgcHQ9XCIxMHB4XCI+XG4gICAgICAgICAgICB7IWlzRW1wdHkocmF0aW5nKSAmJiA8UmF0aW5nIHZhbHVlPXtyYXRpbmd9PntgJHtyYXRpbmd9ICgke3JhdGluZ3N9IHJhdGluZ3MpYH08L1JhdGluZz59XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIwLjQzNzVweFwiXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICBwdD1cIjEwcHhcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTRweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiMThweFwiIGZvbnRXZWlnaHQ9XCIyMDBcIiBwdD1cIjhweFwiIGZvbnRTaXplPVwiMTJweFwiPlxuICAgICAgICAgICAgICAgIDxMaW5lc0VsbGlwc2lzXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2xvbmdEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbWF4TGluZT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBlbGxpcHNpcz1cIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgIHRyaW1SaWdodFxuICAgICAgICAgICAgICAgICAgICBiYXNlZE9uPVwibGV0dGVyc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIxOHB4XCIgZm9udFdlaWdodD1cIm5vcm1hbFwiIHB0PVwiOHB4XCIgZm9udFNpemU9XCIxMnB4XCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPEZsZXggcG9zaXRpb249XCJhYnNvbHV0ZVwiIGJvdHRvbT1cIjIwcHhcIiB3aWR0aD1cIjEwMCVcIiBwcj1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWUuMFwiXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIwLjQzNzVweFwiXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIyMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjE0cHhcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Ake2NvdXBvblByaWNlfSAke2NvdXBvblRlcm19YH1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAge29sZFByaWNlICE9PSBuZXdQcmljZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZSB0ZXJtPXtwcmljZVRlcm19IGlzT2xkPlxuICAgICAgICAgICAgICAgICAgICAgICAge29sZFByaWNlfVxuICAgICAgICAgICAgICAgICAgICA8L1ByaWNlPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFByaWNlIHRlcm09e3ByaWNlVGVybX0+e25ld1ByaWNlfTwvUHJpY2U+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuKTtcblxuQ291cG9uLmRlZmF1bHRQcm9wcyA9IHsgcHJpY2VUZXJtOiAnJCcgfTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDb3Vwb24pO1xuIiwiaW1wb3J0IENvdXBvbiBmcm9tICcuL0NvdXBvbic7XG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IENvdXBvbiBmcm9tICcuLi9jb21wb25lbnRzL2NvdXBvbic7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZCc7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBsaW5lYXIgMjAwbXM7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB9XG5gO1xuXG5jb25zdCBDb3Vwb25zID0gKHsgb25EaWFsb2dPcGVuLCBjb3Vwb25zIH0pID0+XG4gICAgY291cG9ucy5tYXAoY291cG9uID0+IChcbiAgICAgICAgPEJveCBrZXk9e2NvdXBvbi5pZH0gcD1cIjIwcHhcIiB3aWR0aD17eyAwOiAnMTAwJScsIG1kOiAnaW5pdGlhbCcgfX0+XG4gICAgICAgICAgICA8Qm94IGFzPXtDYXJkfT5cbiAgICAgICAgICAgICAgICA8Q291cG9uXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt7IDA6ICcxMDAlJywgbWQ6ICczMDBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICB7Li4uY291cG9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRpYWxvZ09wZW4oY291cG9uKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICkpO1xuXG5leHBvcnQgZGVmYXVsdCBDb3Vwb25zO1xuIiwiY29uc3QgdGhlbWUgPSB7XG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgc206ICc2MjBweCcsXG4gICAgICAgIG1kOiAnNzY4cHgnLFxuICAgICAgICBsZzogJzEwMjRweCcsXG4gICAgICAgIHhsOiAnMTIwMHB4JyxcbiAgICB9LFxuICAgIGNvbG9yczoge1xuICAgICAgICBibGFjazogWycjMzMzJ10sXG4gICAgICAgIGJsdWU6IFsnIzJFQjRGRiddLFxuICAgICAgICBncmF5OiBbJyNmZmYnLCAnI0Y3RjhGQScsICcjQTBBNkMzJywgJyNEOEQ4RDgnXSxcbiAgICAgICAgcmVkOiBbJyNGRjAwMDAnXSxcbiAgICAgICAgZ3JlZW46IFsnI0IzRkZERScsICcjMmQ5YzI5J10sXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZUFwcERpYWxvZ3MoKSB7XG4gICAgY29uc3QgW2RpYWxvZ09wZW5lZCwgY2hhbmdlRGlhbG9nU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtyZXN1bHRPcGVuZWQsIGNoYW5nZVJlc3VsdFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZm9ybU9wZW5lZCwgY2hhbmdlRm9ybVN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRDb3Vwb24sIHNlbGVjdENvdXBvbl0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgW1xuICAgICAgICBvbkRpYWxvZ09wZW4sXG4gICAgICAgIG9uRGlhbG9nQ2xvc2UsXG4gICAgICAgIG9uUmVzdWx0T3BlbixcbiAgICAgICAgb25SZXN1bHRDbG9zZSxcbiAgICAgICAgb25Gb3JtT3BlbmVkLFxuICAgICAgICBvbkZvcm1DbG9zZSxcbiAgICBdID0gdXNlTWVtbyhcbiAgICAgICAgKCkgPT4gW1xuICAgICAgICAgICAgKGNvdXBvbikgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdENvdXBvbihjb3Vwb24pO1xuICAgICAgICAgICAgICAgIGNoYW5nZURpYWxvZ1N0YXRlKHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IGNoYW5nZURpYWxvZ1N0YXRlKGZhbHNlKSxcbiAgICAgICAgICAgICgpID0+IGNoYW5nZVJlc3VsdFN0YXRlKHRydWUpLFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlUmVzdWx0U3RhdGUoZmFsc2UpLFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlRm9ybVN0YXRlKHRydWUpLFxuICAgICAgICAgICAgKCkgPT4gY2hhbmdlRm9ybVN0YXRlKGZhbHNlKSxcbiAgICAgICAgXSxcbiAgICAgICAgW10sXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkQ291cG9uLFxuICAgICAgICBkaWFsb2c6IFtkaWFsb2dPcGVuZWQsIG9uRGlhbG9nT3Blbiwgb25EaWFsb2dDbG9zZV0sXG4gICAgICAgIHJlc3VsdDogW3Jlc3VsdE9wZW5lZCwgb25SZXN1bHRPcGVuLCBvblJlc3VsdENsb3NlXSxcbiAgICAgICAgZm9ybTogW2Zvcm1PcGVuZWQsIG9uRm9ybU9wZW5lZCwgb25Gb3JtQ2xvc2VdLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFwcERpYWxvZ3M7XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURpc3BhdGNoZWRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBkaXNwYXRjaGVkQWN0aW9ucyA9IHVzZU1lbW8oKCkgPT4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKSwgW10pO1xuICAgIHJldHVybiBkaXNwYXRjaGVkQWN0aW9ucztcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQXBwRGlhbG9ncyB9IGZyb20gJy4vdXNlQXBwRGlhbG9ncyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZURpc3BhdGNoZWRBY3Rpb25zIH0gZnJvbSAnLi91c2VEaXNwYXRjaGVkQWN0aW9ucyc7XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIGhhbmRsZXJzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoaGFuZGxlcnMpLmZpbmQoeCA9PiB4ID09PSBhY3Rpb24udHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyc1thY3Rpb24udHlwZV0oc3RhdGUsIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUFjdGlvbkNyZWF0b3IodHlwZSwgLi4uYXJnTmFtZXMpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0geyB0eXBlIH07XG4gICAgICAgIGFyZ05hbWVzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBhY3Rpb25bYXJnTmFtZXNbaW5kZXhdXSA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9O1xufVxuIiwiY29uc3QgZmV0Y2hDb25zdCA9IGNvbnN0YW50ID0+ICh7XG4gICAgQ0xFQVI6IGAke2NvbnN0YW50fV9DTEVBUmAsXG4gICAgRVJST1I6IGAke2NvbnN0YW50fV9FUlJPUmAsXG4gICAgUkVRVUVTVDogYCR7Y29uc3RhbnR9X1JFUVVFU1RgLFxuICAgIFNVQ0NFU1M6IGAke2NvbnN0YW50fV9TVUNDRVNTYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaENvbnN0O1xuIiwiY29uc3QgcGlwZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICByZWR1Y2Vycy5yZWR1Y2UoKG5leHQsIHJlZHVjZXIpID0+IHJlZHVjZXIobmV4dCwgYWN0aW9uKSwgc3RhdGUpO1xuXG5leHBvcnQgZGVmYXVsdCBwaXBlUmVkdWNlcnM7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbW11dGFibGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgaGFuZGxlcnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhoYW5kbGVycykuZmluZCh4ID0+IHggPT09IGFjdGlvbi50eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdFN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbYWN0aW9uLnR5cGVdKGRyYWZ0U3RhdGUsIGFjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbn1cbiIsImNvbnN0IHBpcGUgPSAodmFsdWUsIC4uLmZ1bmN0aW9ucykgPT4gZnVuY3Rpb25zLnJlZHVjZSgobmV3VmFsdWUsIGZ1bmMpID0+IGZ1bmMobmV3VmFsdWUpLCB2YWx1ZSk7XG5cbmV4cG9ydCBjb25zdCBwaXBlRiA9ICguLi5mdW5jdGlvbnMpID0+IHZhbHVlID0+XG4gICAgcGlwZShcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIC4uLmZ1bmN0aW9ucyxcbiAgICApO1xuXG5leHBvcnQgZGVmYXVsdCBwaXBlO1xuIiwiaW1wb3J0IHsgYXNzb2NQYXRoLCBjb25jYXQsIGlzIH0gZnJvbSAncmFtZGEnO1xuXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJztcblxuaW1wb3J0IHsgcGlwZSB9IGZyb20gJy4uL3NlcnZpY2UnO1xuXG5jb25zdCBmZXRjaFJlZHVjZXIgPSBmZXRjaFR5cGUgPT4gKGtleSwgaW5pdGlhbFZhbHVlKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG4gICAgY29uc3QgaXNBcnJheSA9IGlzKEFycmF5LCBpbml0aWFsVmFsdWUpO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XG4gICAgICAgIFtmZXRjaFR5cGUuUkVRVUVTVF06IGFzc29jUGF0aChba2V5LCAnaXNGZXRjaGluZyddLCB0cnVlKSxcbiAgICAgICAgW2ZldGNoVHlwZS5TVUNDRVNTXTogKHN0YXRlLCB7IHJlc3BvbnNlIH0pID0+XG4gICAgICAgICAgICBwaXBlKFxuICAgICAgICAgICAgICAgIGFzc29jUGF0aChcbiAgICAgICAgICAgICAgICAgICAgW2tleSwgJ2RhdGEnXSxcbiAgICAgICAgICAgICAgICAgICAgaXNBcnJheSA/IGNvbmNhdChzdGF0ZVtrZXldLmRhdGEsIHJlc3BvbnNlKSA6IHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGFzc29jUGF0aChba2V5LCAnaXNGZXRjaGluZyddLCBmYWxzZSksXG4gICAgICAgICAgICApLFxuICAgICAgICBbZmV0Y2hUeXBlLkVSUk9SXTogYXNzb2NQYXRoKFtrZXksICdpc0ZldGNoaW5nJ10sIGZhbHNlKSxcbiAgICAgICAgW2ZldGNoVHlwZS5DTEVBUl06IHN0YXRlID0+XG4gICAgICAgICAgICBwaXBlKFxuICAgICAgICAgICAgICAgIGFzc29jUGF0aChba2V5LCAnZGF0YSddLCBpbml0aWFsVmFsdWUsIHN0YXRlKSxcbiAgICAgICAgICAgICAgICBhc3NvY1BhdGgoW2tleSwgJ2lzRmV0Y2hpbmcnXSwgZmFsc2UpLFxuICAgICAgICAgICAgKSxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoUmVkdWNlcjtcbiIsImV4cG9ydCBmdW5jdGlvbiBmZXRjaFJlZHVjZXJLZXkoa2V5LCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBba2V5XToge1xuICAgICAgICAgICAgZGF0YTogaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiIsImNvbnN0IGZldGNoS2V5ID0gKGtleSwgaW5pdGlhbFZhbHVlKSA9PiBmZXRjaFJlZHVjZXJGbiA9PiBmZXRjaFJlZHVjZXJGbihrZXksIGluaXRpYWxWYWx1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoS2V5O1xuIiwiZXhwb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJy4vY3JlYXRlUmVkdWNlcic7XG5leHBvcnQgeyBtYWtlQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4vbWFrZUFjdGlvbkNyZWF0b3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0ZldGNoQ29uc3QgfSBmcm9tICcuL3RvRmV0Y2hDb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBpcGVSZWR1Y2VycyB9IGZyb20gJy4vcGlwZVJlZHVjZXJzJztcbmV4cG9ydCB7IGNyZWF0ZUltbXV0YWJsZVJlZHVjZXIgfSBmcm9tICcuL2NyZWF0ZUltbXV0YWJsZVJlZHVjZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmZXRjaFJlZHVjZXIgfSBmcm9tICcuL2ZldGNoUmVkdWNlcic7XG5leHBvcnQgeyBmZXRjaFJlZHVjZXJLZXkgfSBmcm9tICcuL2ZldGNoUmVkdWNlcktleSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZldGNoS2V5IH0gZnJvbSAnLi9mZXRjaEtleSc7XG4iLCJpbXBvcnQgeyBjcmVhdGVJbW11dGFibGVSZWR1Y2VyLCBtYWtlQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL2xpYnMvcmVkdXgtYWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBtb2RhbE1lbnVPcGVuOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBJTklUX0FQUCA9ICdJTklUX0FQUCc7XG5jb25zdCBDSEFOR0VfTU9CSUxFX01FTlVfU1RBVEUgPSAnQ0hBTkdFX01PQklMRV9NRU5VX1NUQVRFJztcblxuZXhwb3J0IGNvbnN0IGNoYW5nZU1vYmlsZU1lbnVTdGF0ZSA9IG1ha2VBY3Rpb25DcmVhdG9yKENIQU5HRV9NT0JJTEVfTUVOVV9TVEFURSwgJ2lzT3BlbicpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbW11dGFibGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xuICAgIFtDSEFOR0VfTU9CSUxFX01FTlVfU1RBVEVdOiAoc3RhdGUsIHsgaXNPcGVuIH0pID0+IHtcbiAgICAgICAgc3RhdGUubW9kYWxNZW51T3BlbiA9IGlzT3BlbjtcbiAgICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgICB1c2VFZmZlY3QsIHVzZVN0YXRlLCBtZW1vLCB1c2VDYWxsYmFjayxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IHsgRmxleCwgQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQnO1xuaW1wb3J0ICogYXMgQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLWNvbnRyb2xzJztcbmltcG9ydCAqIGFzIExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVkLWNvbXBvbmVudHMvdGhlbWUnO1xuaW1wb3J0ICogYXMgTElOS1MgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGlua3MnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2hlZEFjdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2UnO1xuaW1wb3J0ICogYXMgcm9vdEFjdGlvbnMgZnJvbSAnLi4vcmVkdWNlcnMvcm9vdCc7XG5cbmNvbnN0IHsgYnJlYWtwb2ludHMgfSA9IHRoZW1lO1xuXG5jb25zdCBtZW51SGVpZ2h0ID0ge1xuICAgIDA6ICcxMTRweCcsXG4gICAgc206ICcxMzFweCcsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGlzT3Blbjogc3RhdGUucm9vdC5tb2RhbE1lbnVPcGVuLFxufSk7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlVXJsLCBzZXRBY3RpdmVVcmxdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdXNlU2VsZWN0b3IobWFwU3RhdGVUb1Byb3BzKTtcbiAgICBjb25zdCB7IGNoYW5nZU1vYmlsZU1lbnVTdGF0ZSB9ID0gdXNlRGlzcGF0Y2hlZEFjdGlvbnMocm9vdEFjdGlvbnMpO1xuXG4gICAgY29uc3Qgb25DbG9zZU1lbnUgPSB1c2VDYWxsYmFjaygoKSA9PiBjaGFuZ2VNb2JpbGVNZW51U3RhdGUoZmFsc2UpKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q29udHJvbHMuSGVhZGVyTGF5b3V0IGhlaWdodD17bWVudUhlaWdodH0gcG9zaXRpb249XCJmaXhlZFwiPlxuICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIHB4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZzogJzM5cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeGw6ICcxMTRweCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHB0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiAnMTRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc206ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuSGVhZGVyTGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVVybD17YWN0aXZlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzPXtMSU5LUy5oZWFkZXJMaW5rc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlua3M9e0xJTktTLnVzZXJMaW5rc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVcmw9e3NldEFjdGl2ZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb2JpbGVNZW51U3RhdGU9e2NoYW5nZU1vYmlsZU1lbnVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXRSZXNvbHV0aW9uPXticmVha3BvaW50cy5sZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVSZXNvbHV0aW9uPXticmVha3BvaW50cy5zbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51T3BlbmVkPXtpc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1heFdpZHRoPXticmVha3BvaW50cy5zbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCB3aWR0aD1cIjEwMCVcIiBwdD1cIjEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuTG9nbyBpc0FjdGl2ZSBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXg9ezF9IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5TZWFyY2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Db250cm9scy5IZWFkZXJMYXlvdXQ+XG4gICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD17bWVudUhlaWdodH0gLz5cbiAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IG1heFdpZHRoPXticmVha3BvaW50cy5sZ30+XG4gICAgICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gdW5tb3VudE9uRXhpdCB7Li4uTGF5b3V0Lm1lbnVBbmltYXRpb259IGluPXtpc09wZW59PlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0Lk1vYmlsZU1lbnUgdG9wPVwiMHB4XCIgb25DbG9zZT17b25DbG9zZU1lbnV9IHBvc2l0aW9uPVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICA8Q1NTVHJhbnNpdGlvbiB1bm1vdW50T25FeGl0IHsuLi5MYXlvdXQub3ZlcmxheUFuaW1hdGlvbn0gaW49e2lzT3Blbn0+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuT3ZlcmxheSBvbkNsaWNrPXtvbkNsb3NlTWVudX0gdG9wPVwiMHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhlYWRlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XG5cbmltcG9ydCB7IEJveCwgRmxleCwgVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkJztcbmltcG9ydCB7IFNvY2lhbEJ1dHRvbnMsIExvZ29Db3B5cmlnaHQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQge1xuICAgIGNvbXBhbnlMaW5rcywgbW9yZUxpbmtzLCB3b3JrTGlua3MsIG1haW5MaW5rcyxcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGlua3MnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlZC1jb21wb25lbnRzL3RoZW1lJztcblxuY29uc3QgeyBicmVha3BvaW50cyB9ID0gdGhlbWU7XG5cbmNvbnN0IEdyb3VwTGlua3MgPSAoeyB0aXRsZSwgbGlua3MgfSkgPT4gKFxuICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgZm9udFdlaWdodD1cImJvbGRcIiBsZXR0ZXJTcGFjaW5nPVwiMC42NnB4XCIgZm9udFNpemU9XCIxNHB4XCI+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEJveCBwdD1cIjEwcHhcIj5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKHsgdXJsLCB0aXRsZTogbGlua1RpdGxlIH0pID0+IChcbiAgICAgICAgICAgICAgICA8YSBrZXk9e3VybH0gaHJlZj17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmF5LjJcIiBsaW5lSGVpZ2h0PVwiMjRweFwiIGZvbnRTaXplPVwiMTRweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICA8L0ZsZXg+XG4pO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gICAgPEZsZXggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGJnPVwiZ3JheS4wXCIgcHg9XCI0MHB4XCI+XG4gICAgICAgIDxNZWRpYVF1ZXJ5IG1pbldpZHRoPXticmVha3BvaW50cy5zbX0+XG4gICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIHB5PVwiNDhweFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e3tcbiAgICAgICAgICAgICAgICAgICAgeGw6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWluV2lkdGg9e2JyZWFrcG9pbnRzLnhsfT5cbiAgICAgICAgICAgICAgICAgICAgPExvZ29Db3B5cmlnaHQgLz5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHBsPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB4bDogJzU0cHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyb3VwTGlua3MgdGl0bGU9XCJDb21wYW55XCIgbGlua3M9e2NvbXBhbnlMaW5rc30gLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHBsPVwiNTRweFwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JvdXBMaW5rcyB0aXRsZT1cIldvcmsgd2l0aCBDb3Vwb24gQmF6YWFyXCIgbGlua3M9e3dvcmtMaW5rc30gLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IHBsPVwiNTRweFwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JvdXBMaW5rcyB0aXRsZT1cIk1vcmVcIiBsaW5rcz17bW9yZUxpbmtzfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggcGw9XCI1NHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxHcm91cExpbmtzIHRpdGxlPVwiTWFpblwiIGxpbmtzPXttYWluTGlua3N9IC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWluV2lkdGg9e2JyZWFrcG9pbnRzLnhsfT5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggcGw9XCI1NHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsQnV0dG9ucyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgIDxNZWRpYVF1ZXJ5IG1heFdpZHRoPXticmVha3BvaW50cy54bH0+XG4gICAgICAgICAgICA8TWVkaWFRdWVyeSBtaW5XaWR0aD17YnJlYWtwb2ludHMuc219PlxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMXB4XCIgYmc9XCJncmF5LjNcIiAvPlxuICAgICAgICAgICAgPC9NZWRpYVF1ZXJ5PlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBwdD1cIjM1cHhcIlxuICAgICAgICAgICAgICAgIHBiPVwiNTBweFwiXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAwOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgc206ICdyb3cnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWluV2lkdGg9e2JyZWFrcG9pbnRzLnNtfT5cbiAgICAgICAgICAgICAgICAgICAgPExvZ29Db3B5cmlnaHQgLz5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICAgICAgPE1lZGlhUXVlcnkgbWF4V2lkdGg9e2JyZWFrcG9pbnRzLnNtfT5cbiAgICAgICAgICAgICAgICAgICAgPExvZ29Db3B5cmlnaHQgc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgcGw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBwdD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgMDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc206ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWxCdXR0b25zIC8+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgPC9GbGV4PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDb3Vwb25zIH0gZnJvbSAnLi9Db3Vwb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb290ZXIgfSBmcm9tICcuL0Zvb3Rlcic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChUZXh0KS5hdHRycyh7XG4gICAgYXM6ICdidXR0b24nLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjQzNzVweCcsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwOiAnMTBweCcsXG4gICAgZm9udFNpemU6ICcxOHB4Jyxcbn0pYGA7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuY29uc3QgQm9yZGVyID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHsoeyB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiBjb2xvcnMuZ3JheVsyXX07XG5gO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQoRmxleCkuYXR0cnMoe1xuICAgIGFzOiBCb3JkZXIsXG4gICAgYmc6ICdncmF5LjAnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIHB4OiAnMTBweCcsXG59KWBgO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4uLy4uL2xheW91dC9oZWFkZXItY29udHJvbHMnO1xuXG5jb25zdCBTbWFsbExvZ28gPSBzdHlsZWQoTG9nbylgXG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTbWFsbExvZ287XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IFRleHQsIEJveCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmNvbnN0IElucHV0U3R5bGVkID0gc3R5bGVkKEJveClgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xuICAgIH1cbmA7XG5cbklucHV0U3R5bGVkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICczNHB4Jyxcbn07XG5cbmNvbnN0IElucHV0ID0gKHtcbiAgICB0aXRsZSwgY29udHJvbCwgZm9yd2FyZFJlZiwgZXJyb3IsIC4uLnByb3BzXG59KSA9PiAoXG4gICAgPD5cbiAgICAgICAgPFRleHQgY29sb3I9e2Vycm9yID8gJ3JlZC4wJyA6ICdibGFjay4wJ30gZm9udFdlaWdodD1cIjUwMFwiPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgPEJveCBtdD1cIjRweFwiPlxuICAgICAgICAgICAgPElucHV0U3R5bGVkIGFzPXtjb250cm9sfSB7Li4ucHJvcHN9IHJlZj17Zm9yd2FyZFJlZn0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC8+XG4pO1xuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udHJvbDogJ2lucHV0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU21hbGxMb2dvIH0gZnJvbSAnLi9TbWFsbExvZ28nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dCB9IGZyb20gJy4vSW5wdXQnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICogYXMgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5cbmltcG9ydCB7IEJveCwgRmxleCwgVGV4dCB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgQ291cG9uIGZyb20gJy4uL2NvdXBvbic7XG5cbmNvbnN0IERpYWxvZyA9ICh7IGNvdXBvbiwgb25DbG9zZSwgb25TdWJtaXQgfSkgPT4gKFxuICAgIDxCb3ggd2lkdGg9XCI2MDBweFwiPlxuICAgICAgICA8RmxleCBiZz1cImdyYXkuMFwiIHA9XCIxNnB4XCI+XG4gICAgICAgICAgICA8Qm94IGZsZXg9ezF9PlxuICAgICAgICAgICAgICAgIDxDb3Vwb24gey4uLmNvdXBvbn0gLz5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8Qm94IHBsPVwiMTZweFwiPlxuICAgICAgICAgICAgICAgIDxDb250cm9scy5TbWFsbExvZ28gLz5cbiAgICAgICAgICAgICAgICA8VGV4dCBsaW5lSGVpZ2h0PVwiMjJweFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgcHQ9XCIxMHB4XCIgZm9udFNpemU9XCIyMnB4XCI+XG4gICAgICAgICAgICAgICAgICAgIExvcmVtIEltcHVzbSBpcyBkdW1teSB0ZXh0XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIxOHB4XCIgcHQ9XCIxMHB4XCIgZm9udFNpemU9XCIxNHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvclxuICAgICAgICAgICAgICAgICAgICBpbmNpZGlkdW50IHV0IGxhYm9yZVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgPENvbnRyb2xzLkZvb3Rlcj5cbiAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIGNvbG9yPVwiYmx1ZS4wXCIgb25DbGljaz17b25TdWJtaXR9PlxuICAgICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgIDwvQ29udHJvbHMuRm9vdGVyPlxuICAgIDwvQm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICogYXMgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5cbmltcG9ydCB7IEJveCwgRmxleCwgVGV4dCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IFJlc3VsdCA9ICh7IG9uQ2xvc2UgfSkgPT4gKFxuICAgIDxCb3ggd2lkdGg9XCI2MDBweFwiPlxuICAgICAgICA8RmxleCBiZz1cImdyYXkuMFwiIHA9XCIxNnB4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxDb250cm9scy5TbWFsbExvZ28gLz5cbiAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCIyMnB4XCIgcHQ9XCIxMHB4XCIgZm9udFNpemU9XCIxOHB4XCI+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yXG4gICAgICAgICAgICAgICAgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgIDxDb250cm9scy5Gb290ZXI+XG4gICAgICAgICAgICA8Q29udHJvbHMuQnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQ29udHJvbHMuQnV0dG9uPlxuICAgICAgICA8L0NvbnRyb2xzLkZvb3Rlcj5cbiAgICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuXG5pbXBvcnQgeyBCb3gsIEZsZXggfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5jb25zdCBIRUlHSFRTID0gWzMwMCwgNDAwLCA1MDAsIDYwMCwgNzAwXTtcbmNvbnN0IEZPUk1fUEFSQU1FVEVSID0gMTUwO1xuXG5jb25zdCBIZWlnaHRQcm9wcyA9IHN0eWxlZC5kaXZgXG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAke0hFSUdIVFMucmVkdWNlKFxuICAgICAgICAoYWNjdW0sIHZhbCkgPT5cbiAgICAgICAgICAgIGAke2FjY3VtfVxuICAgICAgICBAbWVkaWEgKG1pbi1oZWlnaHQ6ICR7dmFsfXB4KSB7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7dmFsIC0gRk9STV9QQVJBTUVURVJ9cHg7XG4gICAgICAgIH1cbiAgICBgLFxuICAgICAgICAnJyxcbiAgICApfVxuICAgIEBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5zbX0pIHtcbiAgICAgICAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBGb3JtID0gKHsgb25DbG9zZSwgb25TdWJtaXQgfSkgPT4ge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICB3aWR0aD17e1xuICAgICAgICAgICAgICAgIDA6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBsZzogJzgwMHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhcz1cImZvcm1cIlxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggYmc9XCJncmF5LjBcIj5cbiAgICAgICAgICAgICAgICA8RmxleCBwPVwiMTBweFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5TbWFsbExvZ28gLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBiZz1cImdyYXkuMFwiXG4gICAgICAgICAgICAgICAgICAgIHA9XCIxNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgMDogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogJ3JvdycsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFzPXtIZWlnaHRQcm9wc31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggZmxleD17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSW1hZ2UgdXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib2xkUHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk9sZCBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMub2xkUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubmV3UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBiPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaG9ydERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNob3J0IGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5zaG9ydERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMuSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291cG9uVGVybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ291cG9uIHRlcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmNvdXBvblRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBwbD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9uZ1RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb25nIHRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5sb25nVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9scy5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9uZ0Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvbmcgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmxvbmdEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8Q29udHJvbHMuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxDb250cm9scy5CdXR0b24gb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9Db250cm9scy5CdXR0b24+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xzLkJ1dHRvbiBjb2xvcj1cImJsdWUuMFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgQWRkIGl0ZW1cbiAgICAgICAgICAgICAgICA8L0NvbnRyb2xzLkJ1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udHJvbHMuRm9vdGVyPlxuICAgICAgICA8L0JveD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRGlhbG9nIH0gZnJvbSAnLi9EaWFsb2cnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXN1bHQgfSBmcm9tICcuL1Jlc3VsdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvcm0gfSBmcm9tICcuL0Zvcm0nO1xuIiwiZXhwb3J0IGNvbnN0IGNvdXBvbnMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgcmF0aW5nOiAzLFxuICAgICAgICByYXRpbmdzOiAxOTUsXG4gICAgICAgIHRpdGxlOiAnQ2luZW1hJyxcbiAgICAgICAgc2hvcnRfZGVzY3JpcHRpb246ICdUaGUgYmVzdCwgYmxhIGJsYSBibGEnLFxuICAgICAgICBuYW1lOiAnMzYwIE9yYml0IENpbmVtYScsXG4gICAgICAgIGNvdXBvbl9wcmljZTogMyxcbiAgICAgICAgY291cG9uX3Rlcm06ICdXQVZFUycsXG4gICAgICAgIG9sZF9wcmljZTogJzQ0JyxcbiAgICAgICAgbmV3X3ByaWNlOiAnNDknLFxuICAgICAgICBwcmljZV90ZXJtOiAnJCcsXG4gICAgICAgIGRpc2NvdW50OiA1MCxcbiAgICAgICAgbG9uZ190aXRsZTogJ0xvcmVtIEltcHVzbS4uLicsXG4gICAgICAgIGxvbmdfZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uJyxcbiAgICAgICAgc3RhdHVzOiAncHVyY2hhc2VkJyxcbiAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG4xLnNhdmVwaWNlLnJ1L3VwbG9hZHMvMjAxOS82LzUvZjA4M2NhYjRiZjYzNmRiZTc1MTYzNjY3MWE0MGRiZDAtZnVsbC5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgcmF0aW5nOiAyLFxuICAgICAgICByYXRpbmdzOiA0NDIsXG4gICAgICAgIHRpdGxlOiAnQ2luZW1hJyxcbiAgICAgICAgc2hvcnRfZGVzY3JpcHRpb246ICdUaGUgYmVzdCwgYmxhIGJsYSBibGEnLFxuICAgICAgICBuYW1lOiAnQW1hemluZyB0aGluZycsXG4gICAgICAgIGNvdXBvbl9wcmljZTogMTAwLFxuICAgICAgICBjb3Vwb25fdGVybTogJ1dBVkVTJyxcbiAgICAgICAgb2xkX3ByaWNlOiAnMjUnLFxuICAgICAgICBuZXdfcHJpY2U6ICc2NCcsXG4gICAgICAgIHByaWNlX3Rlcm06ICckJyxcbiAgICAgICAgZGlzY291bnQ6IDEwLFxuICAgICAgICBsb25nX3RpdGxlOiAnTG9yZW0gSW1wdXNtLi4uJyxcbiAgICAgICAgbG9uZ19kZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdMb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi4nLFxuICAgICAgICBzdGF0dXM6ICdwdXJjaGFzZWQnLFxuICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgICdodHRwczovL2NkbjEuc2F2ZXBpY2UucnUvdXBsb2Fkcy8yMDE5LzYvNS8zZWFmMWY5OWEzMmY4MDQ1ODQ3YWM5ZjAyZWI4MTM0NC1mdWxsLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICByYXRpbmc6IDIsXG4gICAgICAgIHJhdGluZ3M6IDQ0MixcbiAgICAgICAgdGl0bGU6ICdDaW5lbWEnLFxuICAgICAgICBzaG9ydF9kZXNjcmlwdGlvbjogJ1RoZSBiZXN0LCBibGEgYmxhIGJsYScsXG4gICAgICAgIG5hbWU6ICdBbWF6aW5nIHRoaW5nJyxcbiAgICAgICAgY291cG9uX3ByaWNlOiAxMDAsXG4gICAgICAgIGNvdXBvbl90ZXJtOiAnV0FWRVMnLFxuICAgICAgICBvbGRfcHJpY2U6ICcyNScsXG4gICAgICAgIG5ld19wcmljZTogJzY0JyxcbiAgICAgICAgcHJpY2VfdGVybTogJyQnLFxuICAgICAgICBkaXNjb3VudDogMTAsXG4gICAgICAgIGxvbmdfdGl0bGU6ICdMb3JlbSBJbXB1c20uLi4nLFxuICAgICAgICBsb25nX2Rlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0xvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLicsXG4gICAgICAgIHN0YXR1czogJ3B1cmNoYXNlZCcsXG4gICAgICAgIGltYWdlOlxuICAgICAgICAgICAgJ2h0dHBzOi8vY2RuMS5zYXZlcGljZS5ydS91cGxvYWRzLzIwMTkvNi81LzNlYWYxZjk5YTMyZjgwNDU4NDdhYzlmMDJlYjgxMzQ0LWZ1bGwucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHJhdGluZzogMixcbiAgICAgICAgcmF0aW5nczogNDQyLFxuICAgICAgICB0aXRsZTogJ0NpbmVtYScsXG4gICAgICAgIHNob3J0X2Rlc2NyaXB0aW9uOiAnVGhlIGJlc3QsIGJsYSBibGEgYmxhJyxcbiAgICAgICAgbmFtZTogJ0FtYXppbmcgdGhpbmcnLFxuICAgICAgICBjb3Vwb25fcHJpY2U6IDEwMCxcbiAgICAgICAgY291cG9uX3Rlcm06ICdXQVZFUycsXG4gICAgICAgIG9sZF9wcmljZTogJzI1JyxcbiAgICAgICAgbmV3X3ByaWNlOiAnNjQnLFxuICAgICAgICBwcmljZV90ZXJtOiAnJCcsXG4gICAgICAgIGRpc2NvdW50OiAxMCxcbiAgICAgICAgbG9uZ190aXRsZTogJ0xvcmVtIEltcHVzbS4uLicsXG4gICAgICAgIGxvbmdfZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uJyxcbiAgICAgICAgc3RhdHVzOiAncHVyY2hhc2VkJyxcbiAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG4xLnNhdmVwaWNlLnJ1L3VwbG9hZHMvMjAxOS82LzUvM2VhZjFmOTlhMzJmODA0NTg0N2FjOWYwMmViODEzNDQtZnVsbC5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgcmF0aW5nOiAyLFxuICAgICAgICByYXRpbmdzOiA0NDIsXG4gICAgICAgIHRpdGxlOiAnQ2luZW1hJyxcbiAgICAgICAgc2hvcnRfZGVzY3JpcHRpb246ICdUaGUgYmVzdCwgYmxhIGJsYSBibGEnLFxuICAgICAgICBuYW1lOiAnQW1hemluZyB0aGluZycsXG4gICAgICAgIGNvdXBvbl9wcmljZTogMTAwLFxuICAgICAgICBjb3Vwb25fdGVybTogJ1dBVkVTJyxcbiAgICAgICAgb2xkX3ByaWNlOiAnMjUnLFxuICAgICAgICBuZXdfcHJpY2U6ICc2NCcsXG4gICAgICAgIHByaWNlX3Rlcm06ICckJyxcbiAgICAgICAgZGlzY291bnQ6IDEwLFxuICAgICAgICBsb25nX3RpdGxlOiAnTG9yZW0gSW1wdXNtLi4uJyxcbiAgICAgICAgbG9uZ19kZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdMb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi4nLFxuICAgICAgICBzdGF0dXM6ICdwdXJjaGFzZWQnLFxuICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgICdodHRwczovL2NkbjEuc2F2ZXBpY2UucnUvdXBsb2Fkcy8yMDE5LzYvNS8zZWFmMWY5OWEzMmY4MDQ1ODQ3YWM5ZjAyZWI4MTM0NC1mdWxsLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICByYXRpbmc6IDIsXG4gICAgICAgIHJhdGluZ3M6IDQ0MixcbiAgICAgICAgdGl0bGU6ICdDaW5lbWEnLFxuICAgICAgICBzaG9ydF9kZXNjcmlwdGlvbjogJ1RoZSBiZXN0LCBibGEgYmxhIGJsYScsXG4gICAgICAgIG5hbWU6ICdBbWF6aW5nIHRoaW5nJyxcbiAgICAgICAgY291cG9uX3ByaWNlOiAxMDAsXG4gICAgICAgIGNvdXBvbl90ZXJtOiAnV0FWRVMnLFxuICAgICAgICBvbGRfcHJpY2U6ICcyNScsXG4gICAgICAgIG5ld19wcmljZTogJzY0JyxcbiAgICAgICAgcHJpY2VfdGVybTogJyQnLFxuICAgICAgICBkaXNjb3VudDogMTAsXG4gICAgICAgIGxvbmdfdGl0bGU6ICdMb3JlbSBJbXB1c20uLi4nLFxuICAgICAgICBsb25nX2Rlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0xvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLicsXG4gICAgICAgIHN0YXR1czogJ3B1cmNoYXNlZCcsXG4gICAgICAgIGltYWdlOlxuICAgICAgICAgICAgJ2h0dHBzOi8vY2RuMS5zYXZlcGljZS5ydS91cGxvYWRzLzIwMTkvNi81LzNlYWYxZjk5YTMyZjgwNDU4NDdhYzlmMDJlYjgxMzQ0LWZ1bGwucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIHJhdGluZzogMixcbiAgICAgICAgcmF0aW5nczogNDQyLFxuICAgICAgICB0aXRsZTogJ0NpbmVtYScsXG4gICAgICAgIHNob3J0X2Rlc2NyaXB0aW9uOiAnVGhlIGJlc3QsIGJsYSBibGEgYmxhJyxcbiAgICAgICAgbmFtZTogJ0FtYXppbmcgdGhpbmcnLFxuICAgICAgICBjb3Vwb25fcHJpY2U6IDEwMCxcbiAgICAgICAgY291cG9uX3Rlcm06ICdXQVZFUycsXG4gICAgICAgIG9sZF9wcmljZTogJzI1JyxcbiAgICAgICAgbmV3X3ByaWNlOiAnNjQnLFxuICAgICAgICBwcmljZV90ZXJtOiAnJCcsXG4gICAgICAgIGRpc2NvdW50OiAxMCxcbiAgICAgICAgbG9uZ190aXRsZTogJ0xvcmVtIEltcHVzbS4uLicsXG4gICAgICAgIGxvbmdfZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uTG9yZW0gSW1wdXNtLi4uJyxcbiAgICAgICAgc3RhdHVzOiAncHVyY2hhc2VkJyxcbiAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG4xLnNhdmVwaWNlLnJ1L3VwbG9hZHMvMjAxOS82LzUvM2VhZjFmOTlhMzJmODA0NTg0N2FjOWYwMmViODEzNDQtZnVsbC5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgcmF0aW5nOiAyLFxuICAgICAgICByYXRpbmdzOiA0NDIsXG4gICAgICAgIHRpdGxlOiAnQ2luZW1hJyxcbiAgICAgICAgc2hvcnRfZGVzY3JpcHRpb246ICdUaGUgYmVzdCwgYmxhIGJsYSBibGEnLFxuICAgICAgICBuYW1lOiAnQW1hemluZyB0aGluZycsXG4gICAgICAgIGNvdXBvbl9wcmljZTogMTAwLFxuICAgICAgICBjb3Vwb25fdGVybTogJ1dBVkVTJyxcbiAgICAgICAgb2xkX3ByaWNlOiAnMjUnLFxuICAgICAgICBuZXdfcHJpY2U6ICc2NCcsXG4gICAgICAgIHByaWNlX3Rlcm06ICckJyxcbiAgICAgICAgZGlzY291bnQ6IDEwLFxuICAgICAgICBsb25nX3RpdGxlOiAnTG9yZW0gSW1wdXNtLi4uJyxcbiAgICAgICAgbG9uZ19kZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdMb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi5Mb3JlbSBJbXB1c20uLi4nLFxuICAgICAgICBzdGF0dXM6ICdwdXJjaGFzZWQnLFxuICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgICdodHRwczovL2NkbjEuc2F2ZXBpY2UucnUvdXBsb2Fkcy8yMDE5LzYvNS8zZWFmMWY5OWEzMmY4MDQ1ODQ3YWM5ZjAyZWI4MTM0NC1mdWxsLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICByYXRpbmc6IDIsXG4gICAgICAgIHJhdGluZ3M6IDQ0MixcbiAgICAgICAgdGl0bGU6ICdDaW5lbWEnLFxuICAgICAgICBzaG9ydF9kZXNjcmlwdGlvbjogJ1RoZSBiZXN0LCBibGEgYmxhIGJsYScsXG4gICAgICAgIG5hbWU6ICdBbWF6aW5nIHRoaW5nJyxcbiAgICAgICAgY291cG9uX3ByaWNlOiAxMDAsXG4gICAgICAgIGNvdXBvbl90ZXJtOiAnV0FWRVMnLFxuICAgICAgICBvbGRfcHJpY2U6ICcyNScsXG4gICAgICAgIG5ld19wcmljZTogJzY0JyxcbiAgICAgICAgcHJpY2VfdGVybTogJyQnLFxuICAgICAgICBkaXNjb3VudDogMTAsXG4gICAgICAgIGxvbmdfdGl0bGU6ICdMb3JlbSBJbXB1c20uLi4nLFxuICAgICAgICBsb25nX2Rlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0xvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLicsXG4gICAgICAgIHN0YXR1czogJ3B1cmNoYXNlZCcsXG4gICAgICAgIGltYWdlOlxuICAgICAgICAgICAgJ2h0dHBzOi8vY2RuMS5zYXZlcGljZS5ydS91cGxvYWRzLzIwMTkvNi81LzNlYWYxZjk5YTMyZjgwNDU4NDdhYzlmMDJlYjgxMzQ0LWZ1bGwucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEwLFxuICAgICAgICByYXRpbmc6IDIsXG4gICAgICAgIHJhdGluZ3M6IDQ0MixcbiAgICAgICAgdGl0bGU6ICdDaW5lbWEnLFxuICAgICAgICBzaG9ydF9kZXNjcmlwdGlvbjogJ1RoZSBiZXN0LCBibGEgYmxhIGJsYScsXG4gICAgICAgIG5hbWU6ICdBbWF6aW5nIHRoaW5nJyxcbiAgICAgICAgY291cG9uX3ByaWNlOiAxMDAsXG4gICAgICAgIGNvdXBvbl90ZXJtOiAnV0FWRVMnLFxuICAgICAgICBvbGRfcHJpY2U6ICcyNScsXG4gICAgICAgIG5ld19wcmljZTogJzY0JyxcbiAgICAgICAgcHJpY2VfdGVybTogJyQnLFxuICAgICAgICBkaXNjb3VudDogMTAsXG4gICAgICAgIGxvbmdfdGl0bGU6ICdMb3JlbSBJbXB1c20uLi4nLFxuICAgICAgICBsb25nX2Rlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0xvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLicsXG4gICAgICAgIHN0YXR1czogJ3B1cmNoYXNlZCcsXG4gICAgICAgIGltYWdlOlxuICAgICAgICAgICAgJ2h0dHBzOi8vY2RuMS5zYXZlcGljZS5ydS91cGxvYWRzLzIwMTkvNi81LzNlYWYxZjk5YTMyZjgwNDU4NDdhYzlmMDJlYjgxMzQ0LWZ1bGwucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICByYXRpbmc6IDIsXG4gICAgICAgIHJhdGluZ3M6IDQ0MixcbiAgICAgICAgdGl0bGU6ICdDaW5lbWEnLFxuICAgICAgICBzaG9ydF9kZXNjcmlwdGlvbjogJ1RoZSBiZXN0LCBibGEgYmxhIGJsYScsXG4gICAgICAgIG5hbWU6ICdBbWF6aW5nIHRoaW5nJyxcbiAgICAgICAgY291cG9uX3ByaWNlOiAxMDAsXG4gICAgICAgIGNvdXBvbl90ZXJtOiAnV0FWRVMnLFxuICAgICAgICBvbGRfcHJpY2U6ICcyNScsXG4gICAgICAgIG5ld19wcmljZTogJzY0JyxcbiAgICAgICAgcHJpY2VfdGVybTogJyQnLFxuICAgICAgICBkaXNjb3VudDogMTAsXG4gICAgICAgIGxvbmdfdGl0bGU6ICdMb3JlbSBJbXB1c20uLi4nLFxuICAgICAgICBsb25nX2Rlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0xvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLicsXG4gICAgICAgIHN0YXR1czogJ3B1cmNoYXNlZCcsXG4gICAgICAgIGltYWdlOlxuICAgICAgICAgICAgJ2h0dHBzOi8vY2RuMS5zYXZlcGljZS5ydS91cGxvYWRzLzIwMTkvNi81LzNlYWYxZjk5YTMyZjgwNDU4NDdhYzlmMDJlYjgxMzQ0LWZ1bGwucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICByYXRpbmc6IDIsXG4gICAgICAgIHJhdGluZ3M6IDQ0MixcbiAgICAgICAgdGl0bGU6ICdDaW5lbWEnLFxuICAgICAgICBzaG9ydF9kZXNjcmlwdGlvbjogJ1RoZSBiZXN0LCBibGEgYmxhIGJsYScsXG4gICAgICAgIG5hbWU6ICdBbWF6aW5nIHRoaW5nJyxcbiAgICAgICAgY291cG9uX3ByaWNlOiAxMDAsXG4gICAgICAgIGNvdXBvbl90ZXJtOiAnV0FWRVMnLFxuICAgICAgICBvbGRfcHJpY2U6ICcyNScsXG4gICAgICAgIG5ld19wcmljZTogJzY0JyxcbiAgICAgICAgcHJpY2VfdGVybTogJyQnLFxuICAgICAgICBkaXNjb3VudDogMTAsXG4gICAgICAgIGxvbmdfdGl0bGU6ICdMb3JlbSBJbXB1c20uLi4nLFxuICAgICAgICBsb25nX2Rlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0xvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLkxvcmVtIEltcHVzbS4uLicsXG4gICAgICAgIHN0YXR1czogJ3B1cmNoYXNlZCcsXG4gICAgICAgIGltYWdlOlxuICAgICAgICAgICAgJ2h0dHBzOi8vY2RuMS5zYXZlcGljZS5ydS91cGxvYWRzLzIwMTkvNi81LzNlYWYxZjk5YTMyZjgwNDU4NDdhYzlmMDJlYjgxMzQ0LWZ1bGwucG5nJyxcbiAgICB9XG5dO1xuIiwiaW1wb3J0IHsgcGlwZSB9IGZyb20gJy4uL3NlcnZpY2UnO1xuXG5jb25zdCB0b0NhbWVsQ2FzZVN0cmluZyA9IGtleSA9PiBrZXkucmVwbGFjZSgvXyguKS9nLCAoXywgZ3JvdXApID0+IGdyb3VwLnRvVXBwZXJDYXNlKCkpO1xuY29uc3Qgc2V0VmFsdWVUb0tleSA9ICh2YWx1ZSwgb2JqKSA9PiBrZXkgPT4gKHsgLi4ub2JqLCBba2V5XTogdmFsdWUgfSk7XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUb0NhbWVsQ2FzZSA9IG9iaiA9PlxuICAgIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKFxuICAgICAgICAoYWNjdW0sIGtleSkgPT5cbiAgICAgICAgICAgIHBpcGUoXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHRvQ2FtZWxDYXNlU3RyaW5nLFxuICAgICAgICAgICAgICAgIHNldFZhbHVlVG9LZXkob2JqW2tleV0sIGFjY3VtKSxcbiAgICAgICAgICAgICksXG4gICAgICAgIHt9LFxuICAgICk7XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGEgPT4gZGF0YS5tYXAoeCA9PiBvYmplY3RUb0NhbWVsQ2FzZSh4KSk7XG4iLCJpbXBvcnQgeyBjb3Vwb25zIH0gZnJvbSAnLi9yZXNwb25zZSc7XG5cbmltcG9ydCB7IGFycmF5VG9DYW1lbENhc2UgfSBmcm9tICcuLi9saWJzL29iamVjdHMnO1xuaW1wb3J0IHsgcGlwZSB9IGZyb20gJy4uL2xpYnMvc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb3Vwb25zID0gKCkgPT5cbiAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAgICAgIHBpcGUoXG4gICAgICAgICAgICBjb3Vwb25zLFxuICAgICAgICAgICAgYXJyYXlUb0NhbWVsQ2FzZSxcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyL3Jvb3QnO1xuXG5pbXBvcnQgeyBGbGV4LCBNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQnO1xuaW1wb3J0IHsgQ291cG9ucywgSGVhZGVyLCBGb290ZXIgfSBmcm9tICcuL2NvbnRhaW5lcnMnO1xuaW1wb3J0IHsgRGlhbG9nLCBSZXN1bHQsIEZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHsgdXNlQXBwRGlhbG9ncyB9IGZyb20gJy4vY29tcG9uZW50cy9zZXJ2aWNlJztcbmltcG9ydCB7IGdldENvdXBvbnMgfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkQ291cG9uLFxuICAgICAgICBkaWFsb2c6IFtkaWFsb2dPcGVuZWQsIG9uRGlhbG9nT3Blbiwgb25EaWFsb2dDbG9zZV0sXG4gICAgICAgIHJlc3VsdDogW3Jlc3VsdE9wZW5lZCwgb25SZXN1bHRPcGVuLCBvblJlc3VsdENsb3NlXSxcbiAgICAgICAgZm9ybTogW2Zvcm1PcGVuZWQsIG9uRm9ybU9wZW4sIG9uRm9ybUNsb3NlXSxcbiAgICB9ID0gdXNlQXBwRGlhbG9ncygpO1xuXG4gICAgY29uc3QgW2NvdXBvbnMsIHVwZGF0ZUNvdXBvbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt1c2VyQ291cG9ucywgdXBkYXRlVXNlckNvdXBvbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmaWx0ZXJBY3RpdmUsIGNoYW5nZUZpbHRlclN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0Q291cG9ucygpO1xuICAgICAgICAgICAgdXBkYXRlQ291cG9ucyhyZXNwb25zZSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZVVzZXJDb3Vwb25zKFtyZXNwb25zZVswXV0pO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgb25DcmVhdGVDb3Vwb249e29uRm9ybU9wZW59XG4gICAgICAgICAgICAgICAgZmlsdGVyQWN0aXZlPXtmaWx0ZXJBY3RpdmV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VGaWx0ZXJTdGF0ZT17Y2hhbmdlRmlsdGVyU3RhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgcD17e1xuICAgICAgICAgICAgICAgICAgICAwOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1kOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb3Vwb25zXG4gICAgICAgICAgICAgICAgICAgIG9uRGlhbG9nT3Blbj17b25EaWFsb2dPcGVufVxuICAgICAgICAgICAgICAgICAgICBjb3Vwb25zPXtmaWx0ZXJBY3RpdmUgPyB1c2VyQ291cG9ucyA6IGNvdXBvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxNb2RhbCBvcGVuPXtkaWFsb2dPcGVuZWR9IG9uQ2xvc2U9e29uRGlhbG9nQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgY291cG9uPXtzZWxlY3RlZENvdXBvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17b25EaWFsb2dDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlhbG9nQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzdWx0T3BlbigpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPE1vZGFsIG9wZW49e3Jlc3VsdE9wZW5lZH0gb25DbG9zZT17b25SZXN1bHRDbG9zZX0+XG4gICAgICAgICAgICAgICAgPFJlc3VsdCBvbkNsb3NlPXtvblJlc3VsdENsb3NlfSAvPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIG9wZW49e2Zvcm1PcGVuZWR9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17b25Gb3JtQ2xvc2V9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3tcbiAgICAgICAgICAgICAgICAgICAgMDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBsZzogJ2luaXRpYWwnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbXg9XCIxMHB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkZvcm1DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmbiA9IGZpbHRlckFjdGl2ZSA/IHVwZGF0ZVVzZXJDb3Vwb25zIDogdXBkYXRlQ291cG9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IGZpbHRlckFjdGl2ZSA/IHVzZXJDb3Vwb25zIDogY291cG9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuKFsuLi5lbnRpdHksIHsgLi4uZGF0YSwgaWQ6IG5ldyBEYXRlKCkudmFsdWVPZigpIH1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9ybUNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlc3VsdE9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChBcHApO1xuIiwiaW1wb3J0IHtcbiAgICBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLFxufSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2RldmVsb3BtZW50T25seSc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQge1xuICAgIGlzTmlsLCBub3QsIGFwcGVuZCwgZmlsdGVyLFxufSBmcm9tICdyYW1kYSc7XG5cbmltcG9ydCB7IHBpcGUsIHBpcGVGIH0gZnJvbSAnLi4vbGlicy9zZXJ2aWNlJztcbmltcG9ydCB7IElOSVRfQVBQIH0gZnJvbSAnLi4vcmVkdWNlcnMvcm9vdCc7XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcblxuY29uc3Qgbm90TmlsID0gcGlwZUYoaXNOaWwsIG5vdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByb3V0ZXJNaWRkbGV3YXJlLCByb290UmVkdWNlciwgcm9vdFNhZ2EsIG1pZGRsZXdhcmVzLFxufSkge1xuICAgIGNvbnN0IG1pZGRsZXdhcmVMaXN0ID0gcGlwZShcbiAgICAgICAgW3JvdXRlck1pZGRsZXdhcmVdLFxuICAgICAgICB4ID0+IFsuLi54LCAuLi4obWlkZGxld2FyZXMgfHwgW10pXSxcbiAgICAgICAgYXBwZW5kKHJvb3RTYWdhICYmIHNhZ2FNaWRkbGV3YXJlKSxcbiAgICAgICAgZmlsdGVyKG5vdE5pbCksXG4gICAgKTtcblxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVMaXN0KSkpO1xuXG4gICAgaWYgKHJvb3RTYWdhKSB7XG4gICAgICAgIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gICAgfVxuXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBJTklUX0FQUCB9KTtcblxuICAgIHJldHVybiBzdG9yZTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUltbXV0YWJsZVJlZHVjZXIgfSBmcm9tICcuLi9saWJzL3JlZHV4LWFjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW1tdXRhYmxlUmVkdWNlcihpbml0aWFsU3RhdGUsIHt9KTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGNvdXBvbnMgZnJvbSAnLi9jb3Vwb25zJztcbmltcG9ydCByb290IGZyb20gJy4vcm9vdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+XG4gICAgY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgY291cG9ucyxcbiAgICAgICAgcm9vdCxcbiAgICB9KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG5pbXBvcnQge1xuICAgIGludm9rZVNjcmlwdCwgYnJvYWRjYXN0LCBub2RlSW50ZXJhY3Rpb24sIHdhaXRGb3JUeCxcbn0gZnJvbSAnQHdhdmVzL3dhdmVzLXRyYW5zYWN0aW9ucyc7XG5pbXBvcnQgeyBzdHJpbmdUb1VpbnQ4QXJyYXksIHNoYTI1NiwgYmFzZTU4ZW5jb2RlIH0gZnJvbSAnQHdhdmVzL3dhdmVzLWNyeXB0byc7XG5pbXBvcnQgeyBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuY29uc3QgZGFwcGFkZHJlc3MgPSAnM041SHpDdVZGYXByQTF3NmVvOU1kRm1rQ0c3N2ZvSFp1NmEnO1xuY29uc3QgYmFzZVVyaSA9ICdodHRwczovL3Rlc3Rub2Rlcy53YXZlc25vZGVzLmNvbSc7XG5cbndpbmRvdy53YyA9IHtcbiAgICBzdHJpbmdUb1VpbnQ4QXJyYXksXG4gICAgc2hhMjU2LFxuICAgIGJhc2U1OGVuY29kZSxcbn07XG53aW5kb3cud3QgPSB7XG4gICAgbm9kZUludGVyYWN0aW9uLFxuICAgIGludm9rZVNjcmlwdCxcbiAgICBicm9hZGNhc3QsXG4gICAgd2FpdEZvclR4LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHdhdmVzSW5pdCgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB2ID0geWllbGQgY2FsbChub2RlSW50ZXJhY3Rpb24uYWNjb3VudERhdGEsIGRhcHBhZGRyZXNzLCBiYXNlVXJpKTtcbiAgICAgICAgd2luZG93LmRBcHBEYXRhID0gdjtcbiAgXG4gICAgICAgIHdpbmRvdy5kQXBwRGF0YUtleXMgPSBPYmplY3Qua2V5cyh2KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RBcHAgQWNjb3VudCBkYXRhOicpO1xuICAgICAgICBjb25zb2xlLmxvZyh2KTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodikpO1xuICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFdhdmVzS2VlcGVyIH0gPSB3aW5kb3c7XG4gICAgaWYgKCFXYXZlc0tlZXBlcikge1xuICAgICAgICBhbGVydCgnVG8gQXV0aCBXYXZlc0tlZXBlciBzaG91bGQgYmUgaW5zdGFsbGVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXV0aERhdGEgPSB7IGRhdGE6ICdBdXRoIG9uIG15IFxcJ0NvdXBvbiBCYXphYXJcXCcgc2l0ZScgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGtlZXBlckFwaSA9IHlpZWxkIGNhbGwoV2F2ZXNLZWVwZXIuaW5pdGlhbFByb21pc2UpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHlpZWxkIGNhbGwoa2VlcGVyQXBpLnB1YmxpY1N0YXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1dhdmVzIEtlZXBlciBkYXRhOicpOyAvLyBkaXNwbGF5aW5nIHRoZSByZXN1bHQgaW4gdGhlIGNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhdXRoID0geWllbGQgY2FsbChXYXZlc0tlZXBlci5hdXRoLCBhdXRoRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGF1dGgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgd2F2ZXNJbml0IH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuaW1wb3J0ICogYXMgcm9vdEFjdGlvbnMgZnJvbSAnLi4vcmVkdWNlcnMvcm9vdCc7XG5cbmZ1bmN0aW9uKiBpbml0KCkge1xuICAgIHlpZWxkIGZvcmsod2F2ZXNJbml0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGluaXRTYWdhKCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QoW3Jvb3RBY3Rpb25zLklOSVRfQVBQXSwgaW5pdCk7XG59XG4iLCJpbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgaW5pdFNhZ2EgZnJvbSAnLi9pbml0U2FnYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW2luaXRTYWdhKCldKTtcbn1cbiIsImltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+XG4gICAgY29uZmlndXJlU3RvcmUoe1xuICAgICAgICByb290UmVkdWNlcjogcm9vdFJlZHVjZXIoKSxcbiAgICAgICAgcm9vdFNhZ2EsXG4gICAgfSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnLi9zdHlsZWQtY29tcG9uZW50cy9nbG9iYWwnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi9zdHlsZWQtY29tcG9uZW50cy90aGVtZSc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXG4pO1xuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==