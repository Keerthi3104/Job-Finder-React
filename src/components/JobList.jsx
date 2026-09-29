import JobCard from "./JobCard";

function JobList({
  jobs,
  onViewDetails,
  onFavorite,
  onDelete,
  favorites,
  postedJobIds,
}) {
  if (jobs.length === 0) {
    return (
      <div className="no-jobs">
        <div>🔍</div>
        <h3>No Jobs Found</h3>
        <p>Try changing your search or filter.</p>
      </div>
    );
  }

  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onViewDetails={onViewDetails}
          onFavorite={onFavorite}
          onDelete={onDelete}
          isFavorite={favorites.includes(job.id)}
          isPosted={postedJobIds.includes(job.id)}
        />
      ))}
    </div>
  );
}

export default JobList;
