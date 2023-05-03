{/* "Header" portion of the webpage, outlines the navigation bar. Includes handling for tracking active selection. */}
function Header(props) {
  const handleClick = (page) => {
    props.setActivePage(page);
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/chrismacarthur" target="_blank">
              <img src="/images/github.png" alt="GitHub" height="20" width="20" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chris-macarthur/" target="_blank">
              <img src="/images/linkedin.png" alt="LinkedIn" height="20" width="20" />
            </a>
          </li>
          <li id="nav-title">chrismacarthur.dev</li>
          <li><a href="#about-me" onClick={() => handleClick("about")}>About</a></li>
          <li><a href="#portfolio" onClick={() => handleClick("portfolio")}>Projects</a></li>
          <li><a href="#essays" onClick={() => handleClick("essays")}>Essays</a></li>
        </ul>
      </nav>
    </header>
  );
}


{/* "AboutMe" portion of the webpage, outlines the contetns of a short biography and a portrait. */}
function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img id="portrait" src="/images/portrait.png" alt="portrait" />
      <p>
        Hey! My name is Chris MacArthur, I recently completed my Bachelor of Computer Science degree 
        from The University of New Brunswick.
      </p>
    </section>
  );
}


{/* "Portfolio" portion of the webpage, TBA. */}
function Portfolio() {
  return (
    <section id="portfolio">
      <br /><br /><br /><br /><br /><br />
      <h2>Under Construction..</h2>
      <p>
        Eventually, this website will act as a hub for programming projects I have worked on, essays 
        that I am especially proud of, and potentially more. For now, enjoy my face on the 
        'About' tab.
      </p>
    </section>
  );
}


{/* "Essays" portion of the webpage, TBA. */}
function Essays() {
  return (
    <section id="essays">
      <br /><br /><br /><br /><br /><br />
      <h2>Under Construction..</h2>
      <p>
        Eventually, this website will act as a hub for programming projects I have worked on, essays 
        that I am especially proud of, and potentially more. For now, enjoy my face on the 
        'About' tab.
      </p>
    </section>
  );
}

{/* Main function used to determine the <main> body of the SPA, depending on the active nav bar selection */}
function Main(props) {
  return (
    <main>
      {props.activePage === "about" && <AboutMe />}
      {props.activePage === "portfolio" && <Portfolio />}
      {props.activePage === "essays" && <Essays />}
    </main>
  );
}

{/* Outlines a short footer, for styling purposes. */}
function Footer() {
  return (
    <footer></footer>
  );
}

{/* The central function used to construct the active web components. Responds to props.activePage. */}
function App() {
  const [activePage, setActivePage] = React.useState("about");
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