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
          <li><a href="#intro" onClick={() => handleClick("intro")}>Home</a></li>
          <li><a href="#about" onClick={() => handleClick("about")}>About</a></li>
          <li><a href="#projects" onClick={() => handleClick("projects")}>Projects</a></li>
          <li><a href="#essays" onClick={() => handleClick("essays")}>Essays</a></li>
          <li id="breaker"></li>
          <li id="nav-title">chrismacarthur.dev</li>
        </ul>
      </nav>
    </header>
  );
}

{/* "Intro" portion of the webpage, outlines the website's purpose and previous roles. */}
function Intro() {

  {/* State variables to track the status of previous role content. */}
  const [isAppDevActive, setIsAppDevActive] = React.useState(false);
  const [isIMActive, setIsIMActive] = React.useState(false);

  const toggleAppDevCollapse = () => {
    setIsAppDevActive(!isAppDevActive);
  };

  const toggleIMCollapse = () => {
    setIsIMActive(!isIMActive);
  };

  return (
    <section id="intro">
      <h2>Welcome!</h2>
      <p>
        I'm Chris, thanks for checking out my website! Here, you'll find details on some of the programming projects I've worked on,
        previews of my writing, and some general details about what I'm interested in.
      </p>
      <hr className="divider" />

      <h3>Previous Roles</h3>
      <h4
        onClick={toggleAppDevCollapse}
        className={isAppDevActive ? "active" : ""}
        style={{ cursor: "pointer" }}
      >
        Application Developer
        <span className={`arrow ${isAppDevActive ? "up" : "down"}`}></span>
      </h4>
      <div className={`role-content ${isAppDevActive ? "active" : ""}`}>
        <h5>Internship</h5>
        <p>
          Deployed a full-scale .NET web application, collaborated with internal clients to meet software requirements,
          and adapted to evolving priorities.
          <br />
          <br />
          <b>Languages used:</b>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>C#</li>
          </ul>
          <b>Skills used:</b>
          <ul>
            <li>Communication</li>
            <li>Time management</li>
            <li>Adaptability</li>
          </ul>
        </p>
      </div>
      <h4
        onClick={toggleIMCollapse}
        className={isIMActive ? "active" : ""}
        style={{ cursor: "pointer" }}
      >
        Information Management Specialist
        <span className={`arrow ${isIMActive ? "up" : "down"}`}></span>
      </h4>
      <div className={`role-content ${isIMActive ? "active" : ""}`}>
        <h5>Internship</h5>
        <p>
          Assisted in the migration of legacy data storage systems to Microsoft SharePoint, sharing recommendations
          and ensuring retention guidelines remained in place.
          <br />
          <br />
          <b>Languages used:</b>
          <ul>
            <li>Powershell</li>
            <li>SQL</li>
            <li>Power Query</li>
          </ul>
          <b>Skills used:</b>
          <ul>
            <li>Leadership</li>
            <li>Business requirements</li>
            <li>Data analytics</li>
          </ul>
        </p>
      </div>
    </section>
  );
}




{/* "About" portion of the webpage, containing a short biography and a portrait. */}
function AboutMe() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img id="portrait" src="/images/portrait.png" alt="portrait" />
      <p>
        Hi! I'm Chris MacArthur. I recently completed my Bachelor of Computer Science degree 
        from the University of New Brunswick, and I'm looking forward to whatever challenge awaits me next.<br/><br/>
        Here's a few things I enjoy:
        <dl>
          <dt><b>Software-Related Interests:</b></dt>
          <dd>Full-stack development and projects that involve end-to-end invention, like this website!</dd>
          <dd>Software security, studying threat prevention, and keeping up-to-date with the latest 
            cybersecurity advancements.
          </dd>
          <dd>Working with data sets and accessing public APIs to craft personal applets.<br/><br/></dd>
          <dt><b>Hobbies and Other Interests:</b></dt>
          <dd>Listening to music, collecting vinyl records, and documenting lesser known musical work.</dd>
          <dd>Reading fiction, writing non-fiction, and all things in the realm of investigative journalism.</dd>
        </dl>
      </p>
    </section>
  );
}


{/* "Portfolio" portion of the webpage, TBA. */}
function Projects() {
  return (
    <section id="projects">
      <h2>Under Construction..</h2>
      <p>
        Eventually, this website will act as a hub for programming projects I have worked on, essays 
        that I am especially proud of, and more. Stay posted!
      </p>
    </section>
  );
}


{/* "Essays" portion of the webpage, TBA. */}
function Essays() {
  return (
    <section id="essays">
      <h2>Under Construction..</h2>
      <p>
        Eventually, this website will act as a hub for programming projects I have worked on, essays 
        that I am especially proud of, and more. Stay posted!
      </p>
    </section>
  );
}

{/* Main function used to determine the <main> body of the SPA, depending on the active nav bar selection */}
function Main(props) {
  return (
    <main>
      {props.activePage === "intro" && <Intro />}
      {props.activePage === "about" && <AboutMe />}
      {props.activePage === "projects" && <Projects />}
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

  {/* Sets the default <Main> content to the Intro function (loading from base URL 'https://chrismacarthur.dev/'). */}
  const [activePage, setActivePage] = React.useState("intro");

  {/* Checks the hash portion of the URL (#portfolio) to set the appropriate content when loading from section.
  '[]' as our second argument tells React to only mount this function once, as it is only required for an initial load. */}
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