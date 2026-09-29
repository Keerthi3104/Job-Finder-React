function Navbar({ darkMode, setDarkMode, onPostJob, savedCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        Job<span>Finder</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#jobs">Jobs</a>
        <a href="#saved">Saved</a>
        <a href="#companies">Companies</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-actions">
        <a href="#saved" className="saved-nav">
          ❤️ {savedCount}
        </a>

        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="post-btn" onClick={onPostJob}>
          + Post a Job
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
