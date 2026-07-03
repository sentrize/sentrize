"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/components/awsnav/nav-config";

export type Product = {
  vendor: string;
  name: string;
  rating: number | null;
  reviews: number;
  chips: string[];
  desc: string;
};

export type ProductTab = { label: string; products: Product[] };

function Stars({ rating }: { rating: number | null }) {
  if (rating === null) {
    return <span className="mkt-prod__stars mkt-prod__stars--empty">★★★★★</span>;
  }
  const full = Math.round(rating);
  return (
    <span className="mkt-prod__stars">
      {"★".repeat(full)}
      <span className="mkt-prod__stars--empty">{"★".repeat(5 - full)}</span>
    </span>
  );
}

/** "Most subscribed" category tabs + top-4 product cards. */
export default function ProductTabs({ tabs }: { tabs: ProductTab[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="mkt-tabs" role="tablist" aria-label="Product categories">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={cn("mkt-tab", i === active && "active")}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-4">
        {tabs[active].products.map((p, i) => (
          <article className="card mkt-prod" key={p.name}>
            <span className="mkt-prod__rank">Top {i + 1}</span>
            <div className="mkt-prod__vendor">
              <span className="mkt-prod__mark">{p.vendor.slice(0, 2).toUpperCase()}</span>
              Sold by: {p.vendor}
            </div>
            <h3>{p.name}</h3>
            <div className="mkt-prod__rating">
              <Stars rating={p.rating} />
              {p.rating !== null ? `${p.rating.toFixed(1)} (${p.reviews})` : `(${p.reviews})`}
            </div>
            <div className="mkt-chips">
              {p.chips.map((c) => (
                <span className="mkt-chip" key={c}>{c}</span>
              ))}
            </div>
            <p className="mkt-prod__desc">{p.desc}</p>
            <div className="mkt-prod__cta">
              <Link className="btn btn--ghost" href="/contact">Get Started</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
