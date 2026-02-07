import { useMemo, useState } from "react";

const tabs = [
  "Dashboard",
  "Cases",
  "New Case",
  "Decisions",
  "Search",
  "Reports",
  "Settings"
];

const sampleCases = [
  {
    id: "MDT-2024-001",
    patient: "A. Ahmed",
    site: "Colorectal",
    stage: "cT3N1",
    lead: "Dr. Patel",
    meetingDate: "2024-02-14",
    status: "Listed",
    lastUpdated: "2024-02-07"
  },
  {
    id: "MDT-2024-002",
    patient: "J. Wang",
    site: "Pancreas/HPB",
    stage: "cT2N0",
    lead: "Dr. Nouri",
    meetingDate: "2024-02-14",
    status: "Ready",
    lastUpdated: "2024-02-06"
  },
  {
    id: "MDT-2024-003",
    patient: "L. Green",
    site: "Oesophago-gastric",
    stage: "cT1N0",
    lead: "Dr. Yusuf",
    meetingDate: "2024-02-21",
    status: "Deferred",
    lastUpdated: "2024-02-05"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("Coordinator");

  const filteredCases = useMemo(() => {
    const lowered = query.trim().toLowerCase();
    if (!lowered) return sampleCases;
    return sampleCases.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowered)
      )
    );
  }, [query]);

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <h1>GI Cancer MDT</h1>
          <p>Weekly MDT workflow, decisions, and reporting</p>
        </div>
        <div className="app__role">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option>Coordinator</option>
            <option>Doctor</option>
          </select>
        </div>
      </header>

      <nav className="app__tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="app__content">
        {activeTab === "Dashboard" && (
          <section className="grid">
            <div className="card">
              <h2>Upcoming MDT (Wed)</h2>
              <p className="metric">12 cases</p>
              <p>4 ready · 6 awaiting docs · 2 deferred</p>
              <button className="ghost">Print upcoming list</button>
            </div>
            <div className="card">
              <h2>Case readiness</h2>
              <p className="metric">83%</p>
              <p>Target: 85% (initial)</p>
              <div className="progress">
                <span style={{ width: "83%" }} />
              </div>
            </div>
            <div className="card">
              <h2>Decisions within 24h</h2>
              <p className="metric">91%</p>
              <p>Target: 95%</p>
              <div className="progress">
                <span style={{ width: "91%" }} />
              </div>
            </div>
          </section>
        )}

        {activeTab === "Cases" && (
          <section className="card">
            <header className="card__header">
              <div>
                <h2>Cases for upcoming MDT</h2>
                <p>Filter, open, and prepare cases for Wednesday.</p>
              </div>
              <div className="actions">
                <button className="ghost">Export CSV</button>
                <button>Print list</button>
              </div>
            </header>
            <table>
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Patient</th>
                  <th>Site</th>
                  <th>Stage</th>
                  <th>Lead clinician</th>
                  <th>Status</th>
                  <th>Meeting date</th>
                </tr>
              </thead>
              <tbody>
                {sampleCases.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.patient}</td>
                    <td>{item.site}</td>
                    <td>{item.stage}</td>
                    <td>{item.lead}</td>
                    <td>
                      <span className={`status status--${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.meetingDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeTab === "New Case" && (
          <section className="card">
            <header className="card__header">
              <div>
                <h2>New case intake</h2>
                <p>Fill the required fields from the fixed Word template.</p>
              </div>
              <div className="actions">
                <button className="ghost">Upload Word template</button>
                <button>Print on template</button>
              </div>
            </header>
            <form className="form">
              <div className="form__grid">
                <label>
                  Patient name
                  <input type="text" placeholder="e.g., A. Ahmed" />
                </label>
                <label>
                  Hospital number
                  <input type="text" placeholder="MRN / ID" />
                </label>
                <label>
                  Suspected site
                  <select>
                    <option>Colorectal</option>
                    <option>Oesophago-gastric</option>
                    <option>Pancreas/HPB</option>
                    <option>Liver</option>
                  </select>
                </label>
                <label>
                  Meeting date
                  <input type="date" />
                </label>
                <label>
                  Staging summary (structured)
                  <input type="text" placeholder="cT3N1" />
                </label>
                <label>
                  Staging notes (free-text)
                  <textarea rows="3" placeholder="Additional staging notes" />
                </label>
                <label>
                  ECOG / ASA
                  <input type="text" placeholder="ECOG 1 / ASA II" />
                </label>
                <label>
                  MDT question
                  <input type="text" placeholder="Key question for MDT" />
                </label>
              </div>
              <div className="form__attachments">
                <strong>Attachments</strong>
                <p>Upload imaging reports, pathology, and supporting PDFs.</p>
                <button type="button" className="ghost">
                  Add attachments
                </button>
              </div>
              <div className="form__actions">
                <button type="button" className="ghost">
                  Save draft
                </button>
                <button type="submit">Submit for MDT</button>
              </div>
            </form>
          </section>
        )}

        {activeTab === "Decisions" && (
          <section className="card">
            <header className="card__header">
              <div>
                <h2>MDT decision capture</h2>
                <p>Coordinator records decisions and prints official output.</p>
              </div>
              <div className="actions">
                <button className="ghost">Open case</button>
                <button>Print decision form</button>
              </div>
            </header>
            <form className="form">
              <div className="form__grid">
                <label>
                  Case ID
                  <input type="text" defaultValue="MDT-2024-002" />
                </label>
                <label>
                  Intent
                  <select>
                    <option>Curative</option>
                    <option>Palliative</option>
                  </select>
                </label>
                <label>
                  Stage (cTNM)
                  <input type="text" placeholder="cT2N0" />
                </label>
                <label>
                  Decision plan
                  <textarea rows="3" placeholder="Plan agreed by MDT" />
                </label>
                <label>
                  Action owner
                  <input type="text" placeholder="Lead clinician" />
                </label>
                <label>
                  Target timeframe
                  <input type="text" placeholder="e.g., within 14 days" />
                </label>
              </div>
              {role === "Doctor" && (
                <p className="note">
                  Doctors can view decisions but only the coordinator can edit or
                  update them.
                </p>
              )}
              <div className="form__actions">
                <button type="button" className="ghost">
                  Save draft
                </button>
                <button type="submit">Publish decision</button>
              </div>
            </form>
          </section>
        )}

        {activeTab === "Search" && (
          <section className="card">
            <header className="card__header">
              <div>
                <h2>Search database</h2>
                <p>Find cases and resubmit for re-discussion.</p>
              </div>
              <input
                className="search"
                type="search"
                value={query}
                placeholder="Search by patient, site, doctor, or stage"
                onChange={(event) => setQuery(event.target.value)}
              />
            </header>
            <div className="results">
              {filteredCases.map((item) => (
                <div key={item.id} className="result">
                  <div>
                    <strong>{item.patient}</strong>
                    <p>
                      {item.site} · {item.stage} · {item.lead}
                    </p>
                    <span className="muted">Last updated {item.lastUpdated}</span>
                  </div>
                  <div className="actions">
                    <button className="ghost">Open</button>
                    <button>Resubmit</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "Reports" && (
          <section className="grid">
            <div className="card">
              <h2>Reports</h2>
              <p>Generate monthly, quarterly, and yearly reports.</p>
              <div className="stack">
                <button>Monthly report</button>
                <button className="ghost">Quarterly report</button>
                <button className="ghost">Yearly report</button>
              </div>
            </div>
            <div className="card">
              <h2>Export</h2>
              <p>Export search results and KPIs.</p>
              <div className="stack">
                <button>Export CSV</button>
                <button className="ghost">Export Excel</button>
                <button className="ghost">Export PDF</button>
              </div>
            </div>
            <div className="card">
              <h2>KPIs at a glance</h2>
              <ul>
                <li>Case readiness: 83%</li>
                <li>Deferral rate: 8%</li>
                <li>Quorum achieved: 100%</li>
                <li>Decision within 24h: 91%</li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === "Settings" && (
          <section className="card">
            <header className="card__header">
              <div>
                <h2>Settings</h2>
                <p>Template management, users, and governance settings.</p>
              </div>
            </header>
            <div className="settings">
              <div>
                <h3>Word templates</h3>
                <p>Upload the fixed case intake and decision templates.</p>
                <button>Upload templates</button>
              </div>
              <div>
                <h3>User management</h3>
                <p>Invite new members using organizational email addresses.</p>
                <button className="ghost">Invite user</button>
              </div>
              <div>
                <h3>Governance</h3>
                <p>GDPR retention: 20 years.</p>
                <button className="ghost">Review audit log</button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
