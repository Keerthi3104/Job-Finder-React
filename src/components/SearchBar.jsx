function SearchBar({
  search,
  setSearch,
  location,
  setLocation,
  type,
  setType,
}) {
  return (
    <div className="search-box">
      <div className="search-input">
        🔍
        <input
          type="text"
          placeholder="Job title or keyword"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="search-input">
        📍
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="All">All Jobs</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
        <option value="Remote">Remote</option>
      </select>
    </div>
  );
}

export default SearchBar;
