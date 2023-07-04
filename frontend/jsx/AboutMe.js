{/* "About" component containing a short biography, personal interests, and music recommendation. */}
function AboutMe() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>
        Hi! I'm Chris MacArthur. I recently completed my Bachelor of Computer Science degree 
        from the University of New Brunswick, and I'm looking forward to whatever challenge awaits me next.
      </p>
      <div className="music-container">
        <a href="https://illwind.bandcamp.com/album/flashes" target="_blank">
          <img src="/images/record.png" alt="Music Recommendation" height="80" width="80" />
        </a>
        <p>
          Click the record to see what I'm listening to!
        </p>
      </div>

      <hr className="divider" />

      <h2>Interests</h2>
      <div id="hobbies" className="text-content">
        <h3>Software</h3>
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
        <h3>Hobbies</h3>
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