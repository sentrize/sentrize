import type { Metadata } from "next";
import Metrics from "@/components/Metrics";
import Cta from "@/components/Cta";
import { METRICS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Sentrize team: 120+ engineers and specialists across 40+ countries delivering production software, cloud, and DevOps.",
};

const PEOPLE: { img: string; name: string; role: string; bio: string }[] = [
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=560&h=560&q=80",
    name: "Sofia Marchetti",
    role: "Chief Executive Officer",
    bio: "Founded the company in 2014 after a decade leading delivery for enterprise software consultancies. Sets our standard for long-term client partnerships.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=560&h=560&q=80",
    name: "Rahul Desai",
    role: "Chief Technology Officer",
    bio: "Guides technical strategy across application and infrastructure work, with deep experience in Node.js, TypeScript, and distributed systems on AWS.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=560&h=560&q=80",
    name: "Klara Novak",
    role: "Head of Cloud & DevOps",
    bio: "Architect behind our 99.99% uptime record. Focuses on Terraform, Kubernetes, and CI/CD pipelines that let teams ship safely many times a day.",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=560&h=560&q=80",
    name: "Benjamin Asante",
    role: "Lead Software Architect",
    bio: "Owns system design on our most complex engagements, scaling Laravel and React applications from prototype to production load.",
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=560&h=560&q=80",
    name: "Yuki Tanaka",
    role: "Head of Security",
    bio: "Runs our security and compliance practice, guiding clients through SOC 2, GDPR, and HIPAA with least-privilege IAM and secure-by-default pipelines.",
  },
  {
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=560&h=560&q=80",
    name: "Olivia Brandt",
    role: "Head of Design & Product",
    bio: "Leads product discovery and design, translating business goals into interfaces engineering can build efficiently.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="hero hero--centered glow">
        <div className="container">
          <span className="eyebrow">Our team</span>
          <h1>The engineers behind the systems</h1>
          <p className="lead">
            120+ engineers and specialists across 40+ countries, led by people who have built and
            operated software at scale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {PEOPLE.map((p) => (
              <div className="card reveal" key={p.name}>
                <div className="person__media">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <h3 style={{ marginBottom: 2 }}>{p.name}</h3>
                <div className="person__role">{p.role}</div>
                <p>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Metrics items={METRICS.slice(0, 4)} dark />

      <Cta
        heading="Want to build with us?"
        text="We are hiring engineers who care about doing things properly."
      />
    </>
  );
}
