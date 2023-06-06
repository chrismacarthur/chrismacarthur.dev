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