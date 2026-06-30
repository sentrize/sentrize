import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sentrize collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Privacy Policy
              </div>
              <h1>Privacy Policy</h1>
              <p className="lead">How Sentrize collects, uses, and protects your information.</p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="Privacy Policy"
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
          <h3>Information we collect</h3>
          <p>
            We collect information you provide directly (such as contact details and project
            information) and limited technical data needed to operate our services and website.
          </p>
          <h3>How we use information</h3>
          <p>
            To provide and improve our services, communicate with you, meet legal and contractual
            obligations, and secure our systems.
          </p>
          <h3>Data security</h3>
          <p>
            We apply least-privilege access, encryption in transit and at rest, and
            infrastructure-as-code controls. Access to client data is limited to assigned personnel.
          </p>
          <h3>Data sharing</h3>
          <p>
            We do not sell your data. We share it only with processors necessary to deliver our
            services, under appropriate agreements.
          </p>
          <h3>Your rights</h3>
          <p>
            Depending on your jurisdiction, you may request access, correction, or deletion of your
            personal data. Contact us to exercise these rights.
          </p>
          <h3>Contact</h3>
          <p>Questions about this policy can be sent to [privacy email placeholder].</p>
        </div>
      </section>
    </>
  );
}
