import Link from "next/link";

export default function Cta({
  heading = "Ready to build your next product with confidence?",
  text = "Tell us what you're building and we'll map the fastest reliable path to production.",
  note,
}: {
  heading?: string;
  text?: string;
  note?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <h2>{heading}</h2>
          <p className="lead">{text}</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn--light btn--lg" href="/contact">
              Start a project
            </Link>
            <Link
              className="btn btn--ghost btn--lg"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
              href="/pricing"
            >
              View pricing
            </Link>
          </div>
          {note ? (
            <p className="muted" style={{ color: "#dfe1fb", marginTop: 14, fontSize: ".92rem" }}>
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
