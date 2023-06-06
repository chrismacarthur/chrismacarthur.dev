"use strict";

{/* Main function used to determine the <main> body of the SPA, depending on the active nav bar selection */}
function Main(props) {
  React.useEffect(function () {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, [props.activePage]);
  return /*#__PURE__*/React.createElement("main", null, props.activePage === "intro" && /*#__PURE__*/React.createElement(Intro, null), props.activePage === "about" && /*#__PURE__*/React.createElement(AboutMe, null), props.activePage === "projects" && /*#__PURE__*/React.createElement(Projects, null), props.activePage === "essays" && /*#__PURE__*/React.createElement(Essays, null));
}