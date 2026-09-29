function PostJob({ isOpen, onClose, onAddJob }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newJob = {
      id: Date.now(),
      title: form.title.value,
      company: form.company.value,
      location: form.location.value,
      type: form.type.value,
      salary: form.salary.value,
      experience: form.experience.value,
      category: form.category.value,
      description: form.description.value,
    };

    onAddJob(newJob);

    form.reset();

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="job-modal post-job-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Post a New Job</h2>

        <p>Create a job opening and find talented candidates.</p>

        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Job Title" required />

          <input name="company" placeholder="Company Name" required />

          <input name="location" placeholder="Location" required />

          <select name="type" required>
            <option value="">Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>

          <input name="salary" placeholder="Salary e.g. ₹4 - ₹7 LPA" required />

          <input
            name="experience"
            placeholder="Experience e.g. 0 - 2 Years"
            required
          />

          <select name="category" required>
            <option value="">Category</option>
            <option>Development</option>
            <option>Design</option>
            <option>Testing</option>
            <option>Data</option>
          </select>

          <textarea
            name="description"
            placeholder="Job Description"
            rows="5"
            required
          />

          <button type="submit" className="apply-btn">
            Publish Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
