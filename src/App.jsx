import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import PostJob from "./components/PostJob";
import SavedJobs from "./components/SavedJobs";
import Companies from "./components/Companies";
import About from "./components/About";
import Footer from "./components/Footer";

import { jobs as initialJobs } from "./data/jobs";

import "./App.css";

function App() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobFinderJobs");

    return savedJobs ? JSON.parse(savedJobs) : initialJobs;
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("jobFinderFavorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [search, setSearch] = useState("");

  const [location, setLocation] = useState("");

  const [type, setType] = useState("All");

  const [selectedJob, setSelectedJob] = useState(null);

  const [showPostJob, setShowPostJob] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [postedJobIds, setPostedJobIds] = useState(() => {
    const saved = localStorage.getItem("postedJobIds");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobFinderJobs", JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem("jobFinderFavorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("postedJobIds", JSON.stringify(postedJobIds));
  }, [postedJobIds]);

  const handleAddJob = (newJob) => {
    setJobs((previousJobs) => [newJob, ...previousJobs]);

    setPostedJobIds((previousIds) => [newJob.id, ...previousIds]);
  };

  const handleDeleteJob = (id) => {
    setJobs((previousJobs) => previousJobs.filter((job) => job.id !== id));

    setPostedJobIds((previousIds) =>
      previousIds.filter((jobId) => jobId !== id),
    );

    setFavorites((previousFavorites) =>
      previousFavorites.filter((jobId) => jobId !== id),
    );
  };

  const handleFavorite = (id) => {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(id)) {
        return previousFavorites.filter((jobId) => jobId !== id);
      }

      return [...previousFavorites, id];
    });
  };

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    const locationText = location.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText);

    const matchesLocation = job.location.toLowerCase().includes(locationText);

    const matchesType = type === "All" || job.type === type;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onPostJob={() => setShowPostJob(true)}
        savedCount={favorites.length}
      />

      <Hero
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
      />

      <Stats
        totalJobs={jobs.length}
        savedJobs={favorites.length}
        companies={6}
      />

      <section className="jobs-section" id="jobs">
        <div className="section-heading">
          <div>
            <p>EXPLORE OPPORTUNITIES</p>
            <h2>Latest Job Openings</h2>
          </div>

          <span>{filteredJobs.length} jobs found</span>
        </div>

        <JobList
          jobs={filteredJobs}
          onViewDetails={setSelectedJob}
          onFavorite={handleFavorite}
          onDelete={handleDeleteJob}
          favorites={favorites}
          postedJobIds={postedJobIds}
        />
      </section>

      <SavedJobs
        jobs={jobs}
        favorites={favorites}
        onViewDetails={setSelectedJob}
        onFavorite={handleFavorite}
      />

      <Companies />

      <About />

      <Footer />

      <JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />

      <PostJob
        isOpen={showPostJob}
        onClose={() => setShowPostJob(false)}
        onAddJob={handleAddJob}
      />
    </div>
  );
}

export default App;
