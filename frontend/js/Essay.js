"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
{/* "Essays" portion of the webpage. */}
function Essays() {
  {/* Tracks essay selection and hover status. */}
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedEssayIndex = _React$useState2[0],
    setSelectedEssayIndex = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isEssayHovered = _React$useState4[0],
    setIsEssayHovered = _React$useState4[1];
  {/* Tracks the current "view" setting (classic, wide). */}
  var _React$useState5 = React.useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    currentView = _React$useState6[0],
    toggleView = _React$useState6[1];
  var view = currentView ? "wide" : "classic";
  {/* Tracks the current "mode" setting (dark, light). */}
  var _React$useState7 = React.useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    currentMode = _React$useState8[0],
    toggleMode = _React$useState8[1];
  var mode = currentMode ? "dark-mode" : "light-mode";
  {/* Tracks the status of the hover animation "essayTransition" in essay.css. */}
  var _React$useState9 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    isTransitioning = _React$useState10[0],
    setTransitioning = _React$useState10[1];
  var handleEssayClick = function handleEssayClick(index) {
    setSelectedEssayIndex(index);
  };
  var handleEssayHover = function handleEssayHover() {
    setIsEssayHovered(true);
  };
  var handleEssayLeave = function handleEssayLeave() {
    setIsEssayHovered(false);
  };
  var handleBack = function handleBack() {
    setSelectedEssayIndex(null);
  };
  var handleMode = function handleMode() {
    setTransitioning(true);
    toggleMode(!currentMode);
    setTimeout(function () {
      setTransitioning(false);
    }, 300);
  };
  var handleView = function handleView() {
    setTransitioning(true);
    toggleView(!currentView);
    setTimeout(function () {
      setTransitioning(false);
    }, 300);
  };
  var handleTransitionEnd = function handleTransitionEnd() {
    setTransitioning(false);
  };
  {/* Indexing information for displaying previews. */}
  var essays = [{
    title: "From Analog to Digital: Why the Album Is Here to Stay",
    image_url: "./images/shelf.jpg",
    image_height: "top",
    component: Essay0
  }, {
    title: "The Expansion of Expression",
    image_url: "./images/books.jpg",
    image_height: "top",
    component: Essay1
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "essays"
  }, selectedEssayIndex === null ? /*#__PURE__*/React.createElement("div", {
    className: "essay-header"
  }, /*#__PURE__*/React.createElement("h2", null, "Essays"), /*#__PURE__*/React.createElement("hr", {
    className: "divider"
  })) : /*#__PURE__*/React.createElement("div", {
    className: "essay-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "essay-options-left"
  }, /*#__PURE__*/React.createElement("button", {
    id: "essay-return",
    onClick: handleBack
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    "class": "essay-help"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "help-icon"
  }, "?"), /*#__PURE__*/React.createElement("div", {
    "class": "help-text"
  }, "Use the options on the right side of the screen to change the viewing format."))), /*#__PURE__*/React.createElement("div", {
    className: "essay-options-right"
  }, /*#__PURE__*/React.createElement("button", {
    id: "essay-mode",
    onClick: handleMode
  }, "Switch to ", currentMode ? "Light Mode" : "Dark Mode"), /*#__PURE__*/React.createElement("button", {
    id: "essay-view",
    onClick: handleView
  }, "Switch to ", currentView ? "Classic View" : "Wide View"))), selectedEssayIndex === null ? /*#__PURE__*/React.createElement("div", {
    className: "essay-list"
  }, essays.map(function (essay, index) {
    return /*#__PURE__*/React.createElement("div", {
      id: "essay-preview",
      className: "text-content ".concat(isEssayHovered && selectedEssayIndex !== index ? "hover" : ""),
      style: {
        backgroundImage: "url(".concat(essay.image_url, ")"),
        backgroundPosition: "".concat(essay.image_height),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
      key: index,
      onClick: function onClick() {
        return handleEssayClick(index);
      },
      onMouseEnter: function onMouseEnter() {
        return handleEssayHover(index);
      },
      onMouseLeave: function onMouseLeave() {
        return handleEssayLeave(index);
      }
    }, /*#__PURE__*/React.createElement("p", null, essay.title));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "".concat(mode, " ").concat(view, " ").concat(isTransitioning ? "essay-transition" : ""),
    onTransitionEnd: handleTransitionEnd
  }, React.createElement(essays[selectedEssayIndex].component)));
}