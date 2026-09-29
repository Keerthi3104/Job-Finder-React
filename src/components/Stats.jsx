function Stats({ totalJobs, savedJobs, companies }) {
  return (
    <section className="stats">
      <div className="stat-card">
        <div className="stat-icon">💼</div>
        <div>
          <h2>{totalJobs}+</h2>
          <p>Available Jobs</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">❤️</div>
        <div>
          <h2>{savedJobs}</h2>
          <p>Saved Jobs</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">🏢</div>
        <div>
          <h2>{companies}+</h2>
          <p>Companies</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">🎯</div>
        <div>
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
