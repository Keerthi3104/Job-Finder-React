function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>
            Job<span>Finder</span>
          </h2>

          <p>Discover opportunities. Build your future.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#jobs">Jobs</a>
            <a href="#companies">Companies</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
          </div>

          <div>
            <h4>Connect</h4>
            <a href="#linkedin">LinkedIn</a>
            <a href="#github">GitHub</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 JobFinder. Built with React.js ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;
