{/* Function used to determine the <main> body of the SPA, depending on the active nav bar selection */}
function Main(props) {

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [props.activePage]);

  return (
    <main>
      {props.activePage === "intro" && <Intro />}
      {props.activePage === "about" && <AboutMe />}
      {props.activePage === "projects" && <Projects />}
      {props.activePage === "essays" && <Essays />}
    </main>
  );
}