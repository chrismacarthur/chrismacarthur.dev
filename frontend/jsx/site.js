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
          <li id="nav-title">chrismacarthur.dev</li>
        </ul>
      </nav>
    </header>
  );
}

{/* "Intro" portion of the webpage, outlines the website's purpose and previous roles. */}
function Intro() {
  return (
    <section id="intro">
      <h2>Welcome!</h2>
      <p>
        I'm Chris, thanks for checking out my website! Here, you'll find details on programming projects I've done,
        previews of my writing, and some general information about what I'm interested in.
      </p>

      <hr className="divider" />

      <h3>Experience</h3>
      <div id="im-spec" className="text-content">
        <h4>Information Management Specialist</h4>
        <h5>Atlantic Canada Opportunities Agency</h5>
        <h5>Internship - 2022</h5>
        <p>
          Assisted in the migration of legacy data storage systems to Microsoft SharePoint, shared design recommendations
          and ensured retention guidelines were enforced.
        </p>
        <p>Languages</p>
        <div id="green" className="bubble">Powershell</div>
        <div id="green" className="bubble">SQL</div>
        <div id="green" className="bubble">Power Query</div>
        <p>Skills</p>
        <div id="green" className="bubble">Leadership</div>
        <div id="green" className="bubble">Business Requirements</div>
        <div id="green" className="bubble">Data Analytics</div>
      </div>
      <div id="app-dev" className="text-content">
        <h4>Application Developer</h4>
        <h5>Atlantic Canada Opportunities Agency</h5>
        <h5>Internship - 2021</h5>
        <p>
          Deployed a full-scale .NET web application, collaborated with internal clients to meet software requirements,
          and adapted to evolving priorities.
        </p>
        <p>Languages</p>
        <div id="blue" className="bubble">HTML</div>
        <div id="blue" className="bubble">CSS</div>
        <div id="blue" className="bubble">JavaScript</div>
        <div id="blue" className="bubble">C#</div>
        <p>Skills</p>
        <div id="blue" className="bubble">Communication</div>
        <div id="blue" className="bubble">Time Management</div>
        <div id="blue" className="bubble">Apaptability</div>
      </div>

      <hr className="divider" />

      <h3>Proficiencies</h3>
      <div id="more-skills" className="text-content">
        <p>Languages</p>
        <div id="orange" className="bubble">Java</div>
        <div id="orange" className="bubble">Python</div>
        <div id="orange" className="bubble">SQL</div>
        <p>Frameworks and Libraries</p>
        <div id="orange" className="bubble">Express.js</div>
        <div id="orange" className="bubble">React.js</div>
        <div id="orange" className="bubble">Pandas</div>
        <div id="orange" className="bubble">ThinkStats2</div>
        <div id="orange" className="bubble">NumPy</div>
        <div id="orange" className="bubble">.NET</div>
        <p>Skills</p>
        <div id="orange" className="bubble">Full-stack development</div>
        <div id="orange" className="bubble">UI Design</div>
        <div id="orange" className="bubble">Cloud Computing</div>
        <div id="orange" className="bubble">API Interaction</div>
        <div id="orange" className="bubble">Information Security</div>
      </div>
    </section>
  );
}


{/* "About" portion of the webpage, containing a short biography. */}
function AboutMe() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hi! I'm Chris MacArthur. I recently completed my Bachelor of Computer Science degree 
        from the University of New Brunswick, and I'm looking forward to whatever challenge awaits me next.
      </p>
      <div className="music-container">
        <a href="https://farmband.bandcamp.com/album/farm" target="_blank">
          <img src="/images/record.png" alt="Music Recommendation" height="80" width="80" />
        </a>
        <p>
          Click the record to see what I'm listening to!
        </p>
      </div>

      <hr className="divider" />

      <h3>Interests</h3>
      <div id="hobbies" className="text-content">
        <h4>Software</h4>
        <p>
          Full-stack development and projects that involve end-to-end invention, like this website!
        </p>
        <p>
          Software security, studying threat prevention, and keeping up-to-date with the latest cybersecurity advancements.
        </p>
        <p>
          Working with data sets and accessing public APIs to craft personal applets.
        </p>
      </div>
      <div id="hobbies" className="text-content">
        <h4>Hobbies</h4>
        <p>
          Listening to music, collecting vinyl records, and documenting lesser-known musical work.
        </p>
        <p>
          Reading fiction, writing non-fiction, and all things in the realm of investigative journalism.
        </p>
      </div>
    </section>
  );
}


{/* "Projects" portion of the webpage, TBA. */}
function Projects() {
  return (
    <section id="projects">
      <h2>Under Construction..</h2>
      <p>
        Eventually, this section will act as a hub for programming projects I've worked on. Stay posted!
      </p>
    </section>
  );
}


{/* "Essays" portion of the webpage. */}
function Essays() {

  {/* Tracks essay selection and hover status. */}
  const [selectedEssayIndex, setSelectedEssayIndex] = React.useState(null);
  const [isEssayHovered, setIsEssayHovered] = React.useState(false);

  {/* Tracks the current "view" setting (classic, wide). */}
  const [currentView, toggleView] = React.useState(true);
  const view = currentView ? "wide" : "classic";

  {/* Tracks the current "mode" setting (dark, light). */}
  const [currentMode, toggleMode] = React.useState(true);
  const mode = currentMode ? "dark-mode" : "light-mode";

  {/* Tracks the status of the hover animation "essayTransition" in essay.css. */}
  const [isTransitioning, setTransitioning] = React.useState(false);

  const handleEssayClick = (index) => {
    setSelectedEssayIndex(index);
  };

  const handleEssayHover = () => {
    setIsEssayHovered(true);
  };

  const handleEssayLeave = () => {
    setIsEssayHovered(false);
  };

  const handleBack = () => {
    setSelectedEssayIndex(null);
  };

  const handleMode = () => {
    setTransitioning(true);
    toggleMode(!currentMode);

    setTimeout(() => {
      setTransitioning(false);
    }, 300);
  };

  const handleView = () => {
    setTransitioning(true);
    toggleView(!currentView);

    setTimeout(() => {
      setTransitioning(false);
    }, 300);
  };
  
  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  {/* Indexing information for displaying previews. */}
  const essays = [
    {
      title: "From Analog to Digital: Why the Album Is Here to Stay",
      image_url: "./images/shelf.jpg",
      image_height: "top",
      component: Essay0,
    },
    {
      title: "The Expansion of Expression",
      image_url: "./images/books.jpg",
      image_height: "top",
      component: Essay1,
    },
  ];

  return (
    <section id="essays">

      {/* Show page header if an essay isn't selected */}
      {selectedEssayIndex === null ? (
        <div className="essay-header">
          <h2>Essays</h2>
          <hr className="divider" />
        </div>
      ) : (
        <div className="essay-options">
          <div className="essay-options-left">
            <button id="essay-return" onClick={handleBack}>Back</button>
            <div class="essay-help">
            <span class="help-icon">?</span>
            <div class="help-text">
              Use the options on the right side of the screen to change the viewing format.
            </div>
          </div>

          </div>
          <div className="essay-options-right">
            <button id="essay-mode" onClick={handleMode}>Switch to {currentMode ? "Light Mode" : "Dark Mode"}</button>
            <button id="essay-view" onClick={handleView}>Switch to {currentView ? "Classic View" : "Wide View"}</button>
          </div>
        </div>
      )}

      {selectedEssayIndex === null ? (
        <div className="essay-list">
          {essays.map((essay, index) => (
            <div
              id="essay-preview"
              className={`text-content ${isEssayHovered && selectedEssayIndex !== index ? "hover" : ""}`}
              style={{
                backgroundImage: `url(${essay.image_url})`,
                backgroundPosition: `${essay.image_height}`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
              key={index}
              onClick={() => handleEssayClick(index)}
              onMouseEnter={() => handleEssayHover(index)}
              onMouseLeave={() => handleEssayLeave(index)}
            >
              <p>{essay.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div
        className={`${mode} ${view} ${isTransitioning ? "essay-transition" : ""}`}
        onTransitionEnd={handleTransitionEnd}
        > 
          {React.createElement(essays[selectedEssayIndex].component)}
        </div>
      )}
    </section>
  );
}


{/* Main function used to determine the <main> body of the SPA, depending on the active nav bar selection */}
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

{/* Outlines a short footer, for styling purposes. */}
function Footer() {
  return (
    <footer></footer>
  );
}

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