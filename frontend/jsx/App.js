{/* The central function used to construct the active web components. Responds to props.activePage. */}
function App() {

  {/* Sets the default <Main> content to the Intro function (loading from base URL "https://chrismacarthur.dev"). */}
  const [activePage, setActivePage] = React.useState("intro");

  {/* Checks the hash portion of the URL (#portfolio) to set the appropriate content when loading from section.
  "[]" as our second argument tells React to only mount this function once, as it is only required for an initial load. */}
  React.useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (["intro", "about", "projects", "essays"].includes(hash)) {
      setActivePage(hash);
    }
  }, []);

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <Main activePage={activePage} />
      <Footer />
    </div>
  );
}

{/* Responsible for mapping the Document Object Model (DOM) from our React front end to the browser's.
    This allows for dynamic loading of the website's front end components without completely reloading the
    the web page. */}
ReactDOM.render(<App />, document.getElementById("root"));