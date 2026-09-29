function JobDetails({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="job-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="company-logo large">{job.company.charAt(0)}</div>

        <h2>{job.title}</h2>

        <p className="modal-company">{job.company}</p>

        <div className="modal-info">
          <span>📍 {job.location}</span>
          <span>💼 {job.type}</span>
          <span>💰 {job.salary}</span>
          <span>🎓 {job.experience}</span>
        </div>

        <h3>About the Job</h3>

        <p className="description">{job.description}</p>

        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
}

export default JobDetails;
