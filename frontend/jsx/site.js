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


{/* "Essays" portion of the webpage, TBA. */}
function Essays() {
  return (
    <section id="essays">
      <h2>Essays</h2>
      <div class="essay-container">
        <div class="essay">
          TBA
          <div class="essay-description">
            Coming Soon!
          </div>
        </div>
      </div>
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