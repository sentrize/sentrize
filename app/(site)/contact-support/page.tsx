import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Support",
  description: "Reach the Sentrize support team for help with your services and infrastructure.",
};

export default function ContactSupportPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Contact Support
              </div>
              <span className="eyebrow">Support</span>
              <h1>Contact Support</h1>
              <p className="lead">
                Existing client? Reach our support team directly, or open a ticket for tracked,
                prioritized help.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="Contact Support"
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
                  <label>Name</label>
                  <input className="input" type="text" />
                </div>
                <div className="field">
                  <label>Work email</label>
                  <input className="input" type="email" />
                </div>
              </div>
              <div className="grid grid-2">
                <div className="field">
                  <label>Company</label>
                  <input className="input" type="text" />
                </div>
                <div className="field">
                  <label>Service interested in</label>
                  <select className="input">
                    <option>Software Development</option>
                    <option>SaaS Development</option>
                    <option>Web / Mobile</option>
                    <option>Cloud & DevOps</option>
                    <option>AWS / Kubernetes</option>
                    <option>Security & Compliance</option>
                    <option>AI & Automation</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>Budget range</label>
                <select className="input">
                  <option>Under $25k</option>
                  <option>$25k–$75k</option>
                  <option>$75k–$200k</option>
                  <option>$200k+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field">
                <label>Message</label>
                <textarea
                  className="input"
                  placeholder="Tell us about your project, current stack, and goals"
                />
              </div>
              <button className="btn btn--primary btn--lg" type="submit">Send message</button>
            </form>
          </div>
          <div>
            <h3>Other ways to get help</h3>
            <ul className="checks">
              <li>Open a tracked ticket in the <Link href="/open-ticket">support portal</Link></li>
              <li>Check the <Link href="/service-status">service status page</Link></li>
              <li>Search the <Link href="/knowledge-base">knowledge base</Link></li>
              <li>Review your <Link href="/sla-policy">SLA commitments</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
