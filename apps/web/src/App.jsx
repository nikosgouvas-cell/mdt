const stats = [
  { label: "Cases this week", value: "24" },
  { label: "Pending decisions", value: "7" },
  { label: "Median time to decision", value: "3 days" },
  { label: "Doctors participating", value: "12" },
];

const cases = [
  {
    id: "GI-2026-013",
    patient: "ID-483920",
    site: "Colon",
    stage: "T3N1",
    doctor: "Dr. Ahmed",
    status: "Scheduled",
  },
  {
    id: "GI-2026-014",
    patient: "ID-483934",
    site: "Pancreas",
    stage: "T2N0",
    doctor: "Dr. Lee",
    status: "Submitted",
  },
  {
    id: "GI-2026-015",
    patient: "ID-483941",
    site: "Rectum",
    stage: "T4N2",
    doctor: "Dr. Pereira",
    status: "Draft",
  },
];

const filters = [
  "Doctor",
  "Cancer type",
  "Stage",
  "MDT date",
  "Outcome",
  "Biomarker",
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">GI Cancer MDT Web App</p>
          <h1>Coordinate the weekly MDT workflow with clarity and auditability.</h1>
          <p className="subhead">
            Prototype UI for the MDT coordinator, doctors, and admin. This screen
            illustrates upcoming MDT cases, status tracking, searchable records,
            and audit-ready exports.
          </p>
        </div>
        <div className="hero-card">
          <h2>Quick actions</h2>
          <button type="button">Add new case</button>
          <button type="button" className="secondary">
            Upload Word template
          </button>
          <button type="button" className="secondary">
            Print MDT list
          </button>
        </div>
      </header>

      <section className="stats">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <p className="stat-label">{item.label}</p>
            <p className="stat-value">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="grid">
        <div className="card">
          <h2>Upcoming MDT (Wednesday)</h2>
          <p className="muted">
            Cases assigned to the next MDT meeting. Drag to reschedule or roll
            over.
          </p>
          <div className="table">
            <div className="row header">
              <span>Case ID</span>
              <span>Patient ID</span>
              <span>Site</span>
              <span>Stage</span>
              <span>Lead doctor</span>
              <span>Status</span>
            </div>
            {cases.map((item) => (
              <div className="row" key={item.id}>
                <span>{item.id}</span>
                <span>{item.patient}</span>
                <span>{item.site}</span>
                <span>{item.stage}</span>
                <span>{item.doctor}</span>
                <span className={`pill ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>New case intake</h2>
          <p className="muted">
            Fields will map directly to the uploaded Word template. Required
            fields appear with an asterisk.
          </p>
          <form className="form">
            <label>
              Patient ID *
              <input type="text" placeholder="ID number" />
            </label>
            <label>
              Cancer site *
              <input type="text" placeholder="e.g., Colon" />
            </label>
            <label>
              Stage (TNM) *
              <input type="text" placeholder="T3N1" />
            </label>
            <label>
              Lead doctor *
              <input type="text" placeholder="Assigned MDT doctor" />
            </label>
            <label>
              MDT date *
              <input type="date" />
            </label>
            <label>
              Notes
              <textarea rows="3" placeholder="Imaging, pathology, biomarkers" />
            </label>
            <button type="button">Save draft</button>
          </form>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Search & reporting</h2>
          <p className="muted">
            Build advanced filters and export results to CSV, Excel, or PDF.
          </p>
          <div className="filter-chips">
            {filters.map((filter) => (
              <span className="chip" key={filter}>
                {filter}
              </span>
            ))}
          </div>
          <div className="report-actions">
            <button type="button" className="secondary">
              Export CSV
            </button>
            <button type="button" className="secondary">
              Export Excel
            </button>
            <button type="button" className="secondary">
              Export PDF
            </button>
          </div>
        </div>

        <div className="card">
          <h2>Decision capture</h2>
          <p className="muted">
            MDT coordinator records the decision and prints on the Word template.
          </p>
          <form className="form">
            <label>
              Decision summary *
              <textarea rows="4" placeholder="Consensus decision" />
            </label>
            <label>
              Follow-up date
              <input type="date" />
            </label>
            <button type="button">Save decision</button>
          </form>
        </div>
      </section>

      <section className="card">
        <h2>Audit log snapshot</h2>
        <p className="muted">
          Every view, edit, and export is tracked with user and timestamp.
        </p>
        <ul className="audit">
          <li>
            <strong>09:02</strong> — Dr. Lee exported MDT list (GI-2026-014).
          </li>
          <li>
            <strong>09:15</strong> — Coordinator updated decision (GI-2026-013).
          </li>
          <li>
            <strong>09:21</strong> — Admin uploaded new Word template.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
