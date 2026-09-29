import JobCard from "./JobCard";

function SavedJobs({ jobs, favorites, onViewDetails, onFavorite }) {
  const savedJobs = jobs.filter((job) => favorites.includes(job.id));

  return (
    <section className="saved-section" id="saved">
      <div className="section-heading">
        <div>
          <p>YOUR COLLECTION</p>
          <h2>Saved Jobs ❤️</h2>
        </div>

        <span>{savedJobs.length} saved</span>
      </div>

      {savedJobs.length === 0 ? (
        <div className="empty-saved">
          <div>❤️</div>
          <h3>No saved jobs yet</h3>
          <p>Click the heart icon on a job to save it.</p>
        </div>
      ) : (
        <div className="job-grid">
          {savedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onViewDetails={onViewDetails}
              onFavorite={onFavorite}
              isFavorite={true}
              onDelete={() => {}}
              isPosted={false}
              favorites={favorites}
              postedJobIds={[]}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SavedJobs;
