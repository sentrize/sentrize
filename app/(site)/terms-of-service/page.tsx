import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of Sentrize services and website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Terms of Service
              </div>
              <h1>Terms of Service</h1>
              <p className="lead">The terms governing use of Sentrize services and website.</p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="Terms of Service"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <p className="muted">
            Last updated: 2026. This is a template — review with legal counsel before publishing.
          </p>
          <h3>Use of services</h3>
          <p>
            By using our website and services you agree to these terms and any engagement-specific
            agreement.
          </p>
          <h3>Engagements</h3>
          <p>
            Project scope, deliverables, timelines, and fees are defined in a separate written
            agreement that takes precedence over general terms.
          </p>
          <h3>Intellectual property</h3>
          <p>
            On full payment, project deliverables and related IP are assigned to the client as set
            out in the engagement agreement.
          </p>
          <h3>Confidentiality</h3>
          <p>
            Both parties protect confidential information disclosed during an engagement, under the
            terms of the applicable NDA or contract.
          </p>
          <h3>Liability</h3>
          <p>
            Our liability is limited as set out in the engagement agreement. Services are provided in
            line with the applicable SLA.
          </p>
          <h3>Contact</h3>
          <p>Questions about these terms can be sent to [legal email placeholder].</p>
        </div>
      </section>
    </>
  );
}
