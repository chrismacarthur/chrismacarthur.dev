"use strict";

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
    href: "#intro",
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
    id: "nav-title"
  }, "chrismacarthur.dev"))));
}