import Link from "next/link";
import { FOOTER_COLS, BRAND } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="sf">
      <div className="sf__container">
        <div className="sf__grid">
          <div>
            <Link className="sf__brand" href="/">
              {BRAND}
              <span>.</span>
            </Link>
            <p className="sf__brand-text">
              Engineering, scaling, and operating digital products and cloud
              infrastructure for startups, SaaS companies, and enterprises.
            </p>
            <div className="sf__social">
              <a href="https://www.linkedin.com/company/sentrize" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://github.com/sentrize" target="_blank" rel="noopener">GitHub</a>
              <a href="https://x.com/sentrize" target="_blank" rel="noopener">X</a>
            </div>
          </div>
          {FOOTER_COLS.map((c) => (
            <div key={c.heading}>
              <h4>{c.heading}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="sf__bottom">
          <span>&copy; 2026 {BRAND}. All rights reserved.</span>
          <span>
            <Link href="/privacy-policy">Privacy</Link>
            {" · "}
            <Link href="/terms-of-service">Terms</Link>
            {" · "}
            <Link href="/sla-policy">SLA</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
