function JobCard({
  job,
  onViewDetails,
  onFavorite,
  onDelete,
  isFavorite,
  isPosted,
}) {
  return (
    <div className="job-card">
      <div className="job-top">
        <div className="company-logo">{job.company.charAt(0)}</div>

        <button className="favorite-btn" onClick={() => onFavorite(job.id)}>
          {isFavorite ? "❤️" : "♡"}
        </button>
      </div>

      <div className="job-category">{job.category}</div>

      <h3>{job.title}</h3>

      <p className="company-name">{job.company}</p>

      <div className="job-info">
        <span>📍 {job.location}</span>
        <span>💼 {job.type}</span>
      </div>

      <div className="job-bottom">
        <div>
          <strong>{job.salary}</strong>
          <small>{job.experience}</small>
        </div>

        <button className="view-btn" onClick={() => onViewDetails(job)}>
          View Details
        </button>
      </div>

      {isPosted && (
        <button className="delete-job" onClick={() => onDelete(job.id)}>
          Delete
        </button>
      )}
    </div>
  );
}

export default JobCard;
