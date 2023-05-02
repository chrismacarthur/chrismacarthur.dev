"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
{/* "Header" portion of the webpage, outlines the navigation bar. Includes handling for tracking active selection. */}
function Header(props) {
  var handleClick = function handleClick(page) {
    props.setActivePage(page);
  };
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/chrismacarthur",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/images/github.png",
    alt: "GitHub",
    height: "20",
    width: "20"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/chris-macarthur/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/images/linkedin.png",
    alt: "LinkedIn",
    height: "20",
    width: "20"
  }))), /*#__PURE__*/React.createElement("li", {
    id: "nav-title"
  }, "chrismacarthur.dev"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#about-me",
    onClick: function onClick() {
      return handleClick("about");
    }
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#portfolio",
    onClick: function onClick() {
      return handleClick("portfolio");
    }
  }, "Projects")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#essays",
    onClick: function onClick() {
      return handleClick("essays");
    }
  }, "Essays")))));
}
{/* "AboutMe" portion of the webpage, outlines the contetns of a short biography and a portrait. */}
function AboutMe() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about-me"
  }, /*#__PURE__*/React.createElement("h2", null, "About Me"), /*#__PURE__*/React.createElement("img", {
    id: "portrait",
    src: "/images/portrait.png",
    alt: "portrait"
  }), /*#__PURE__*/React.createElement("p", null, "Hey! My name is Chris MacArthur, I am a fourth year Bachelor of Computer Science student at the University of New Brunswick."));
}
{/* "Portfolio" portion of the webpage, TBA. */}
function Portfolio() {
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, "Under Construction.."), /*#__PURE__*/React.createElement("p", null, "Eventually, this website will act as a hub for programming projects I have worked on, essays that I am especially proud of, and potentially more. For now, enjoy my face."));
}
{/* "Essays" portion of the webpage, TBA. */}
function Essays() {
  return /*#__PURE__*/React.createElement("section", {
    id: "essays"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, "Under Construction.."), /*#__PURE__*/React.createElement("p", null, "Eventually, this website will act as a hub for programming projects I have worked on, essays that I am especially proud of, and potentially more. For now, enjoy my face."));
}
{/* Main function used to determine the <main> body of the SPA, depending on the active nav bar selection */}
function Main(props) {
  return /*#__PURE__*/React.createElement("main", null, props.activePage === "about" && /*#__PURE__*/React.createElement(AboutMe, null), props.activePage === "portfolio" && /*#__PURE__*/React.createElement(Portfolio, null), props.activePage === "essays" && /*#__PURE__*/React.createElement(Essays, null));
}
{/* Outlines a short footer, for styling purposes. */}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null);
}
{/* The central function used to construct the active web components. Responds to props.activePage. */}
function App() {
  var _React$useState = React.useState("about"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activePage = _React$useState2[0],
    setActivePage = _React$useState2[1];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    setActivePage: setActivePage
  }), /*#__PURE__*/React.createElement(Main, {
    activePage: activePage
  }), /*#__PURE__*/React.createElement(Footer, null));
}
{/* Responsible for mapping the Document Object Model (DOM) from our React front end to the browser's.
    This allows for dynamic loading of the website's front end components without completely reloading the
    the web page. */}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));