import SearchBar from "./SearchBar";

function Hero({ search, setSearch, location, setLocation, type, setType }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">🚀 Your next opportunity starts here</div>

        <h1>
          Find Your
          <span> Dream Job</span>
        </h1>

        <p>
          Discover exciting opportunities from companies looking for talented
          people like you.
        </p>

        <SearchBar
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          type={type}
          setType={setType}
        />
      </div>

      <div className="floating-card card-one">💼 500+ Jobs</div>

      <div className="floating-card card-two">⭐ Top Companies</div>
    </section>
  );
}

export default Hero;
