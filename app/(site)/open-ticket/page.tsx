import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open a Ticket",
  description: "Submit a support ticket and get tracked, prioritized help from our team.",
};

export default function OpenTicketPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Open a Ticket
              </div>
              <span className="eyebrow">Support</span>
              <h1>Open a Ticket</h1>
              <p className="lead">
                Submit a ticket and get prioritized help. Urgent production issues are acknowledged
                within minutes.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="Open a Ticket"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <form className="card">
              <div className="grid grid-2">
                <div className="field">
                  <label>Your name</label>
                  <input className="input" />
                </div>
                <div className="field">
                  <label>Account email</label>
                  <input className="input" type="email" />
                </div>
              </div>
              <div className="grid grid-2">
                <div className="field">
                  <label>Priority</label>
                  <select className="input">
                    <option>Low — question</option>
                    <option>Normal — issue</option>
                    <option>High — degraded service</option>
                    <option>Urgent — production down</option>
                  </select>
                </div>
                <div className="field">
                  <label>Affected service</label>
                  <input className="input" />
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <input className="input" />
              </div>
              <div className="field">
                <label>Describe the issue</label>
                <textarea
                  className="input"
                  placeholder="What happened, what you expected, and any error messages"
                />
              </div>
              <button className="btn btn--primary btn--lg" type="submit">Submit ticket</button>
            </form>
          </div>
          <div>
            <h3>Response targets</h3>
            <ul className="checks">
              <li>Urgent (production down): minutes</li>
              <li>High (degraded service): &lt; 1 hour</li>
              <li>Normal (issue): same business day</li>
              <li>Low (question): 1–2 business days</li>
            </ul>
            <p className="muted">
              See the full <Link href="/sla-policy">SLA policy</Link> for details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
