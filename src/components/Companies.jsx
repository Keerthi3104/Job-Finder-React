function Companies() {
  const companies = [
    {
      name: "Google",
      icon: "G",
    },
    {
      name: "Microsoft",
      icon: "M",
    },
    {
      name: "Amazon",
      icon: "A",
    },
    {
      name: "TCS",
      icon: "T",
    },
    {
      name: "Infosys",
      icon: "I",
    },
    {
      name: "Zoho",
      icon: "Z",
    },
  ];

  return (
    <section className="companies-section" id="companies">
      <div className="section-heading center">
        <div>
          <p>TOP EMPLOYERS</p>
          <h2>Companies Hiring</h2>
        </div>
      </div>

      <div className="company-grid">
        {companies.map((company) => (
          <div className="company-card" key={company.name}>
            <div className="company-big-logo">{company.icon}</div>

            <h3>{company.name}</h3>

            <p>Hiring now</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Companies;
