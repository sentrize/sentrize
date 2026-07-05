"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";

// Repeated "Learn more" arrow icon from the legacy markup, factored out
// since it was duplicated identically four times (same pattern as
// Capabilities.tsx's CtaArrow).
function CtaArrow() {
  return (
    <svg
      aria-hidden="true"
      className="ctaLinkSVG"
      width={50}
      height={20}
      viewBox="0 0 50 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className="ctaLinkSVGExpand"
        style={{ "--blob-radius": "10px", "--blob-stretch-distance": "30px" } as CSSProperties}
      >
        <path className="ctaLinkSVGExpandArcLeft" d="M 10 0 a 10 10 0 1 0 0 20 h 1 v -20 Z" />
        <path
          className="ctaLinkSVGExpandArcRight"
          d="M 40 0 a 10 10 0 1 1 0 20 h -1 v -20 z"
          transform="translate(-30,0)"
        />
        <g
          className="ctaLinkSVGExpandBlob"
          style={{ transformOrigin: "10px 0px" }}
          transform="translate(10 0) scale(0,1) translate(10 0)"
        >
          <path
            className="ctaLinkSVGExpandBlobTop"
            d="M 10 0 c 7 0, 10 7.5, 15 7.5 s 8 -7.5, 15 -7.5 v 10 h -30 Z"
            style={{ transformOrigin: "10px 0px" }}
          />
          <path
            className="ctaLinkSVGExpandBlobBottom"
            d="M 10 20 c 7 0, 10 -7.5, 15 -7.5 s 8 7.5, 15 7.5 v -10 h -30 Z"
            style={{ transformOrigin: "10px 20px" }}
          />
          <rect
            className="ctaLinkSVGExpandBlobCenter"
            x={10}
            y={0}
            width={30}
            height={20}
            style={{ transformOrigin: "10px 10px" }}
          />
        </g>
      </g>
      <path
        className="ctaLinkSVGArrow"
        d="M8.55225 5.5166L13.0354 9.9998L8.55225 14.483"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Selectors scoped to this component's own root (the legacy EQ_GROUPS entries
// for section6 were ".section6 .flexContainerBox .flexBoxTitle" /
// "...flexBoxDescription" — i.e. one shared max-height computed across BOTH
// flexContainerBox rows, not per-row). Since our ref is already the section6
// root, the ".section6" prefix is implicit here.
const EQ_SELECTORS = [".flexContainerBox .flexBoxTitle", ".flexContainerBox .flexBoxDescription"];

/* WhyUsStats — JSX port of the legacy _landing.html "section6" stat/feature
   grid (kept verbatim in markup/classNames for 100% visual fidelity). Ported
   from LandingClient's shared EQ_GROUPS/equalize effect (which used to
   compute one max height across all 4 titles and all 4 descriptions in this
   section) into a self-contained effect, and added Slide-in-view entrances
   for the 4 stat cards. */
export default function WhyUsStats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const equalize = () => {
      EQ_SELECTORS.forEach((sel) => {
        const els = Array.from(root.querySelectorAll<HTMLElement>(sel));
        els.forEach((el) => (el.style.height = ""));
        if (window.innerWidth < 768) return; // cards stack on mobile -> natural height
        const max = els.reduce((m, el) => Math.max(m, el.offsetHeight), 0);
        if (max) els.forEach((el) => (el.style.height = max + "px"));
      });
    };

    const raf = requestAnimationFrame(equalize);
    window.addEventListener("resize", equalize);
    window.addEventListener("load", equalize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", equalize);
      window.removeEventListener("load", equalize);
    };
  }, []);

  return (
    <div className="wrapperContainer section6 wrapperDark wrapperBottomGridWhite" ref={ref}>
  <div className="container no-padd">
    <div className="row no-padd">
      <h2 className="font_44 fontRegular colorWhite text-center maxWidth_70">
        Why teams keep building with us
      </h2>
      <div className="wrapFlexContainerBox top-buffer60">
        <div className="flexContainerBox">
          <div className="flexBox">
            <Slide asChild direction="up" offset={24} inView inViewOnce delay={0}>
            <div className="flexBoxItem item1 wrapperWhite2 colorWhite">
              <div className="flexItemContent colorWhite font_14">
                <div className="flexItem flexItemLeft">
                  <div className="flexItemMiddle">
                    <div className="font_52 fontSemiBold colorWhite">
                      500+
                    </div>
                    <div className="font_16 colorWhite top-buffer10">
                      PROJECTS DELIVERED
                    </div>
                  </div>
                </div>
                <div className="flexItem flexItemRight">
                  <div className="font_32 colorWhite">
                    <div className="flexBoxTitle" style={{ height: "70px" }}>
                      Proven delivery
                    </div>
                  </div>
                  <div className="flexBoxDescription font_16 colorWhite top-buffer20" style={{ height: "52px" }}>
                    Production systems shipped across 23+ countries.
                  </div>
                  <div className="flexBoxLink">
                    <div className="top-buffer40">
                      <Link href="/services" className="ctaLink ctaWhite">
                        <CtaArrow />
                        <span className="ctaLinkText f-text--regular">Learn more</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Slide>
            <Slide asChild direction="up" offset={24} inView inViewOnce delay={80}>
            <div className="flexBoxItem item2 wrapperWhite2 colorWhite">
              <div className="flexItemContent colorWhite font_14">
                <div className="flexItemSingle">
                  <div className="flexBoxTitle font_32 colorWhite" style={{ height: "70px" }}>
                    <div>
                      99.99%
                    </div>
                    <div>
                      Enterprise reliability
                    </div>
                  </div>
                  <div className="flexBoxDescription font_16 colorWhite top-buffer20" style={{ height: "52px" }}>
                    SLA-backed uptime with 24/7 monitoring and alerting.
                  </div>
                  <div className="flexBoxLink">
                    <div className="top-buffer40">
                      <Link href="/about" className="ctaLink ctaWhite">
                        <CtaArrow />
                        <span className="ctaLinkText f-text--regular">Learn more</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Slide>
          </div>
        </div>
        <div className="flexContainerBox">
          <div className="flexBox">
            <Slide asChild direction="up" offset={24} inView inViewOnce delay={160}>
            <div className="flexBoxItem item1 wrapperWhite2 colorWhite">
              <div className="flexItemContent colorWhite font_14">
                <div className="flexItem flexItemLeft">
                  <div className="flexItemMiddle">
                    <div className="font_52 fontSemiBold colorWhite">
                      Real-time
                    </div>
                    <div className="font_16 colorWhite top-buffer10">
                      OBSERVABILITY
                    </div>
                  </div>
                </div>
                <div className="flexItem flexItemRight">
                  <div className="flexBoxTitle font_32 colorWhite" style={{ height: "70px" }}>
                    <div className="flexBoxTitle" style={{ height: "70px" }}>
                      Full visibility
                    </div>
                  </div>
                  <div className="flexBoxDescription font_16 colorWhite top-buffer20" style={{ height: "52px" }}>
                    Metrics, logging, and tracing on every service we run.
                  </div>
                  <div className="flexBoxLink">
                    <div className="top-buffer40">
                      <Link href="/services" className="ctaLink ctaWhite">
                        <CtaArrow />
                        <span className="ctaLinkText f-text--regular">Learn more</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Slide>
            <Slide asChild direction="up" offset={24} inView inViewOnce delay={240}>
            <div className="flexBoxItem item2 wrapperWhite2 colorWhite">
              <div className="flexItemContent colorWhite font_14">
                <div className="flexItemSingle">
                  <div className="flexBoxTitle font_32 colorWhite" style={{ height: "70px" }}>
                    <div>
                      100%
                    </div>
                    <div>
                      code ownership
                    </div>
                  </div>
                  <div className="flexBoxDescription font_16 colorWhite top-buffer20" style={{ height: "52px" }}>
                    You own all source code, infrastructure, and IP — no lock-in.
                  </div>
                  <div className="flexBoxLink">
                    <div className="top-buffer40">
                      <Link href="/services" className="ctaLink ctaWhite">
                        <CtaArrow />
                        <span className="ctaLinkText f-text--regular">Learn more</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}