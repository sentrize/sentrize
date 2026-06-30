import Link from "next/link";
import { NAV, BRAND } from "@/lib/site";

export default function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={overlay ? "sh sh--overlay" : "sh"}>
      <div className="sh__container">
        <nav className="sh__nav" aria-label="Primary">
          <Link className="sh__brand" href="/">
            {BRAND}
            <span>.</span>
          </Link>
          <button className="sh__toggle" aria-label="Menu" aria-expanded="false">
            {"☰"}
          </button>
          <ul className="sh__menu">
            {NAV.map((g) => (
              <li className="sh__item has-mega" key={g.label}>
                <Link className="sh__link" href={g.top}>
                  {g.label}
                </Link>
                <div className={g.links.length > 6 ? "sh__mega sh__mega--wide" : "sh__mega"}>
                  {g.links.map((l) => (
                    <Link href={l.href} key={l.label}>
                      {l.label}
                      {l.sub ? <small>{l.sub}</small> : null}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <span className="sh__spacer" />
          <span className="sh__cta">
            <Link className="sh__btn sh__btn--ghost" href="/contact">
              Talk to engineering
            </Link>
            <Link className="sh__btn sh__btn--primary" href="/contact">
              Start a project
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
