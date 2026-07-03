import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sentrize to scope your software, cloud, or DevOps project. 24/7 support and fast response from our engineering team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section--tight" style={{ paddingTop: 120 }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Contact
          </div>
          <span className="eyebrow">Contact</span>
          <h1>Let us scope what you are building</h1>
          <p className="lead">
            Tell us about your project. A senior engineer — not a sales rep — reviews every inquiry
            and replies within one business day.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container split">
          <form className="card card--accent" data-validate noValidate>
            <p className="form-success" data-success aria-live="polite">
              Thanks — your message is on its way. We reply within one business day.
            </p>
            <div className="grid grid-2">
              <div className="field">
                <label htmlFor="cf-n">Name</label>
                <input className="input" id="cf-n" name="name" required />
                <div className="field__error">Please enter your name.</div>
              </div>
              <div className="field">
                <label htmlFor="cf-e">Work email</label>
                <input className="input" id="cf-e" name="email" type="email" required />
                <div className="field__error">Enter a valid email.</div>
              </div>
            </div>
            <div className="grid grid-2">
              <div className="field">
                <label htmlFor="cf-c">Company</label>
                <input className="input" id="cf-c" name="company" />
              </div>
              <div className="field">
                <label htmlFor="cf-s">Service</label>
                <select className="input" id="cf-s">
                  <option>Software Development</option>
                  <option>SaaS Development</option>
                  <option>Web / Mobile</option>
                  <option>Cloud &amp; DevOps</option>
                  <option>AWS / Kubernetes</option>
                  <option>Security &amp; Compliance</option>
                  <option>AI &amp; Automation</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-b">Budget range</label>
              <select className="input" id="cf-b">
                <option>Under $25k</option>
                <option>$25k–$75k</option>
                <option>$75k–$200k</option>
                <option>$200k+</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="cf-m">Message</label>
              <textarea
                className="input"
                id="cf-m"
                name="message"
                required
                placeholder="Tell us about your project, current stack, and goals"
              ></textarea>
              <div className="field__error">Please add a short message.</div>
            </div>
            <button className="btn btn--primary btn--lg" type="submit" style={{ width: "100%" }}>
              Send message
            </button>
            <p className="form-note">
              By submitting you agree to our privacy policy. We never share your details.
            </p>
          </form>
          <div>
            <div>
              <h3>Talk to us</h3>
              <ul className="checks" style={{ marginBottom: 24 }}>
                <li>Sales: sales@sentrize.com</li>
                <li>Support: support@sentrize.com</li>
                <li>Mon–Fri, 9:00–18:00 local · 24/7 production support for SLA clients</li>
              </ul>
              <h3>What happens next</h3>
              <div className="steps" style={{ marginTop: 14 }}>
                <div className="step">
                  <h3 style={{ fontSize: "1.05rem" }}>We review your brief</h3>
                  <p>A solutions lead confirms fit, usually within one business day.</p>
                </div>
                <div className="step">
                  <h3 style={{ fontSize: "1.05rem" }}>Discovery call</h3>
                  <p>A 30-45 minute call to align on goals, scope, and timeline.</p>
                </div>
                <div className="step">
                  <h3 style={{ fontSize: "1.05rem" }}>Written proposal</h3>
                  <p>Clear scope, estimate range, and delivery plan within a few business days.</p>
                </div>
                <div className="step">
                  <h3 style={{ fontSize: "1.05rem" }}>Kickoff</h3>
                  <p>On sign-off, onboarding begins within one week.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ maxWidth: 560, margin: "0 auto" }}>
            <span className="eyebrow">Offices</span>
            <h2>Global delivery, local presence</h2>
          </div>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            <div className="card">
              <h3>Sydney, Australia</h3>
              <p className="muted">Level 12, 580 George Street, Sydney NSW 2000</p>
            </div>
            <div className="card">
              <h3>London, United Kingdom</h3>
              <p className="muted">20 Farringdon Road, Clerkenwell, London EC1M 3HE</p>
            </div>
            <div className="card">
              <h3>Singapore</h3>
              <p className="muted">9 Battery Road, #15-01, Singapore 049910</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
