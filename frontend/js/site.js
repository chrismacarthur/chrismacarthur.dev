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
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "",
    onClick: function onClick() {
      return handleClick("intro");
    }
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    onClick: function onClick() {
      return handleClick("about");
    }
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    onClick: function onClick() {
      return handleClick("projects");
    }
  }, "Projects")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#essays",
    onClick: function onClick() {
      return handleClick("essays");
    }
  }, "Essays")), /*#__PURE__*/React.createElement("li", {
    id: "breaker"
  }), /*#__PURE__*/React.createElement("li", {
    id: "nav-title"
  }, "chrismacarthur.dev"))));
}
{/* "Intro" portion of the webpage, outlines the website's purpose and displays a portrait. */}
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    id: "intro"
  }, /*#__PURE__*/React.createElement("h2", null, "Welcome!"), /*#__PURE__*/React.createElement("p", null, "I'm Chris, and thanks for checking out my website. Here, you'll find details on some of the programming projects I've worked on, previews of my writing, and some general details about what I'm interested in."));
}
{/* "About" portion of the webpage, containing a short biography and a portrait. */}
function AboutMe() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about"
  }, /*#__PURE__*/React.createElement("h2", null, "About Me"), /*#__PURE__*/React.createElement("img", {
    id: "portrait",
    src: "/images/portrait.png",
    alt: "portrait"
  }), /*#__PURE__*/React.createElement("p", null, "Hi! I'm Chris MacArthur. I recently completed my Bachelor of Computer Science degree from the University of New Brunswick, and I'm looking forward to whatever challenge awaits me next.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Here's a few things I enjoy:", /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, /*#__PURE__*/React.createElement("b", null, "Software-Related Interests:")), /*#__PURE__*/React.createElement("dd", null, "Full-stack development and projects that involve end-to-end invention, like this website!"), /*#__PURE__*/React.createElement("dd", null, "Software security, studying threat prevention, and keeping up-to-date with the latest cybersecurity advancements."), /*#__PURE__*/React.createElement("dd", null, "Working with data sets and accessing public APIs to craft personal applets.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("dt", null, /*#__PURE__*/React.createElement("b", null, "Hobbies and Other Interests:")), /*#__PURE__*/React.createElement("dd", null, "Listening to music, collecting vinyl records, and documenting lesser known musical work."), /*#__PURE__*/React.createElement("dd", null, "Reading fiction, writing non-fiction, and all things in the realm of investigative journalism."))));
}
{/* "Portfolio" portion of the webpage, TBA. */}
function Projects() {
  return /*#__PURE__*/React.createElement("section", {
    id: "projects"
  }, /*#__PURE__*/React.createElement("h2", null, "Under Construction.."), /*#__PURE__*/React.createElement("p", null, "Eventually, this website will act as a hub for programming projects I have worked on, essays that I am especially proud of, and more. Stay posted!"));
}
{/* "Essays" portion of the webpage, TBA. */}
function Essays() {
  return /*#__PURE__*/React.createElement("section", {
    id: "essays"
  }, /*#__PURE__*/React.createElement("h2", null, "Under Construction.."), /*#__PURE__*/React.createElement("p", null, "Eventually, this website will act as a hub for programming projects I have worked on, essays that I am especially proud of, and more. Stay posted!"));
}
{/* Main function used to determine the <main> body of the SPA, depending on the active nav bar selection */}
function Main(props) {
  return /*#__PURE__*/React.createElement("main", null, props.activePage === "intro" && /*#__PURE__*/React.createElement(Intro, null), props.activePage === "about" && /*#__PURE__*/React.createElement(AboutMe, null), props.activePage === "projects" && /*#__PURE__*/React.createElement(Projects, null), props.activePage === "essays" && /*#__PURE__*/React.createElement(Essays, null));
}
{/* Outlines a short footer, for styling purposes. */}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null);
}
{/* The central function used to construct the active web components. Responds to props.activePage. */}
function App() {
  {/* Sets the default <Main> content to the Intro function (loading from base URL 'https://chrismacarthur.dev/'). */}
  var _React$useState = React.useState("intro"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activePage = _React$useState2[0],
    setActivePage = _React$useState2[1];
  {/* Checks the hash portion of the URL (#portfolio) to set the appropriate content when loading from section.
   '[]' as our second argument tells React to only mount this function once, as it is only required for an initial load. */}
  React.useEffect(function () {
    var hash = window.location.hash.substring(1);
    if (["about", "projects", "essays"].includes(hash)) {
      setActivePage(hash);
    }
  }, []);
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