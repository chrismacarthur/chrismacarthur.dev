{/* "Intro" component that outlines previous roles and experience. */}
function Intro() {
  return (
    <section id="intro">
      <h1>Welcome!</h1>
      <p>
        I'm Chris, thanks for checking out my website! Here, you'll find details on programming projects I've done,
        previews of my writing, and some general information about what I'm interested in.
      </p>

      <hr className="divider" />

      <div id="im-spec" className="text-content">
        <h3>Information Management Specialist</h3>
        <h4>Atlantic Canada Opportunities Agency</h4>
        <h4>Internship - 2022</h4>
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
        <h3>Application Developer</h3>
        <h4>Atlantic Canada Opportunities Agency</h4>
        <h4>Internship - 2021</h4>
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

      <h2>Additional Experience</h2>
      <div id="more-skills" className="text-content">
        <p>Operating Systems</p>
        <div id="orange" className="bubble">Windows</div>
        <div id="orange" className="bubble">Linux</div>
        <p>Proficient Languages</p>
        <div id="orange" className="bubble">Java</div>
        <div id="orange" className="bubble">Python</div>
        <div id="orange" className="bubble">C#</div>
        <div id="orange" className="bubble">HTML</div>
        <div id="orange" className="bubble">CSS</div>
        <div id="orange" className="bubble">JavaScript</div>
        <p>Familiar Languages</p>
        <div id="orange" className="bubble">TypeScript</div>
        <div id="orange" className="bubble">SQL</div>
        <div id="orange" className="bubble">Power Query</div>
        <div id="orange" className="bubble">Powershell</div>
        <p>Frameworks and Libraries</p>
        <div id="orange" className="bubble">Express.js</div>
        <div id="orange" className="bubble">React.js</div>
        <div id="orange" className="bubble">Pandas</div>
        <div id="orange" className="bubble">ThinkStats2</div>
        <div id="orange" className="bubble">NumPy</div>
        <div id="orange" className="bubble">.NET</div>
        <p>Concepts</p>
        <div id="orange" className="bubble">Full-stack Development</div>
        <div id="orange" className="bubble">UI Design</div>
        <div id="orange" className="bubble">DevOps</div>
        <div id="orange" className="bubble">Cloud Computing</div>
        <div id="orange" className="bubble">RESTful Services</div>
        <div id="orange" className="bubble">API Interaction</div>
        <div id="orange" className="bubble">Information Security</div>
      </div>
    </section>
  );
}