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
      image_url: "./images/essay0.jpg",
      image_height: "top",
      component: Essay0,
    },
    {
      title: "The Expansion of Expression",
      image_url: "./images/essay1.jpg",
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