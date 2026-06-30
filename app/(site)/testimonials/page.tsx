import type { Metadata } from "next";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What founders, CTOs, and engineering leaders say about building and scaling with Sentrize.",
};

const LOGOS = [
  "Northwind Logistics",
  "Meridian Health",
  "Vantage Payments",
  "Cobalt Retail Group",
  "Lumen Analytics",
  "Atlas Manufacturing",
  "Harbor Financial",
  "Brightway Insurance",
  "Verdant Energy",
  "Solstice Media",
  "Quanta Robotics",
  "Irongate Security",
  "Pinnacle EdTech",
  "Cascade Telecom",
  "Aurora Biotech",
  "Keystone Retail",
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="hero hero--centered glow">
        <div className="container">
          <span className="eyebrow">Testimonials</span>
          <h1>What it is like to build with Sentrize</h1>
          <p className="lead">Long-term partnerships are the clearest measure of the work we do — here is what founders, CTOs, and engineering leaders say.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ maxWidth: "640px", margin: "0 auto" }}>
            <span className="eyebrow">Testimonials</span>
            <h2>In their words</h2>
          </div>
          <div className="grid grid-2" style={{ marginTop: "40px" }}>
            <div className="quote">
              <p>“We came to Sentrize with a monolith that took 40 minutes to deploy and broke under any real traffic. Eighteen months later we ship multiple times a day on Kubernetes with zero downtime.”</p>
              <cite>Daniel Okafor<span>Founder & CEO · B2B SaaS</span></cite>
            </div>
            <div className="quote">
              <p>“Their engineers pushed back on our architecture in week one and were right. Our p95 latency dropped from 1.8s to under 300ms.”</p>
              <cite>Priya Venkataraman<span>CTO · E-commerce platform</span></cite>
            </div>
            <div className="quote">
              <p>“Migrating 200+ microservices to AWS without a single customer-facing outage seemed impossible. Our support team didn't even know the date had passed.”</p>
              <cite>Marcus Hale<span>VP Engineering · Enterprise fintech</span></cite>
            </div>
            <div className="quote">
              <p>“We needed SOC 2 readiness in a quarter with no internal security function. Sentrize built our posture and walked us through the audit. We passed first time.”</p>
              <cite>Elena Sørensen<span>CISO · Healthtech</span></cite>
            </div>
            <div className="quote">
              <p>“Their React Native app shipped on iOS and Android from one codebase, on schedule, with a 99.7% crash-free rate. Our previous vendor never got us to launch.”</p>
              <cite>Tobias Reinhardt<span>Head of Product · Marketplace</span></cite>
            </div>
            <div className="quote">
              <p>“Our cloud bill was growing faster than revenue. Sentrize re-architected autoscaling and cut monthly AWS spend by 38% — with better performance.”</p>
              <cite>Amara Diallo<span>Director of Operations · Logistics SaaS</span></cite>
            </div>
            <div className="quote">
              <p>“They documented everything, trained my team, and made themselves replaceable. That's rare and it earned my trust.”</p>
              <cite>Jonathan Wells<span>CTO · Insurtech scale-up</span></cite>
            </div>
            <div className="quote">
              <p>“Sentrize delivered observability that catches issues before our customers do. We've held our uptime commitments every quarter since.”</p>
              <cite>Sofia Marchetti<span>VP Engineering · Payments</span></cite>
            </div>
            <div className="quote">
              <p>“The AI automation work paid for itself in five months — it eliminated roughly 30 hours of manual data entry per week across the ops team.”</p>
              <cite>Kwame Boateng<span>Operations Director · B2B services</span></cite>
            </div>
            <div className="quote">
              <p>“With Sentrize I talk to the people writing the code. The quality rivals the big consultancies and the responsiveness is in a different league.”</p>
              <cite>Rachel Lindqvist<span>Founder · EdTech</span></cite>
            </div>
            <div className="quote">
              <p>“They rebuilt the CRM/ERP integration three previous teams gave up on. Data flows in real time instead of overnight batches.”</p>
              <cite>David Nakamura<span>Head of Product · Manufacturing</span></cite>
            </div>
            <div className="quote">
              <p>“Infrastructure-as-code changed how we operate. Every environment is reproducible from Terraform and onboarding takes a day instead of a week.”</p>
              <cite>Isabella Costa<span>VP Engineering · Cloud-native SaaS</span></cite>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container center">
          <span className="eyebrow">Trusted by</span>
          <h2 style={{ fontSize: "1.6rem" }}>Trusted by teams building serious software</h2>
        </div>
        <div className="marquee" style={{ marginTop: "30px" }}>
          <ul className="logos marquee__track">
            {LOGOS.concat(LOGOS).map((name, i) => (
              <li className="logo-chip" key={i}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <Cta />
    </>
  );
}
