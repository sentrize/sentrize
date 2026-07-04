"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";

const LOGOS = [
  { alt: "Cisco", src: "/assets/images/cisco-white.png" },
  { alt: "Bitdefender", src: "/assets/images/bitdefenderr-white.png" },
  { alt: "123 FormBuilder", src: "/assets/images/123formbuilder-white.png" },
  { alt: "EaseUS", src: "/assets/images/easeus-white.png" },
  { alt: "Mondly", src: "/assets/images/mondly-languages-white.png" },
  { alt: "Viewsonic", src: "/assets/images/viewsonic-white.png" },
];

// The client logo row scrolls as an infinite marquee, so the CSS animation
// needs a duplicated run of logos to loop seamlessly.
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS];

const HEADLINE = ["We build the software", "and cloud platforms", "your business runs on."];

/* Hero — JSX port of the legacy _landing.html "Home Banner" block (kept
   verbatim in markup/classNames for 100% visual fidelity), now a real
   component so it can carry animate-ui's SplittingText/Fade primitives and
   own the cursor-glow + hero-video interactions that used to live in
   LandingClient's effects. */
export default function Hero() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const playRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const on = (el: EventTarget | null, type: string, fn: EventListener) => {
      if (!el) return;
      el.addEventListener(type, fn);
      cleanups.push(() => el.removeEventListener(type, fn));
    };

    // Cursor glow behind the hero headline (desktop only)
    const banner = bannerRef.current;
    const glow = glowRef.current;
    if (banner && glow && window.innerWidth > 991) {
      const onMove: EventListener = (e) => {
        const me = e as MouseEvent;
        const r = banner.getBoundingClientRect();
        glow.style.setProperty("--mx", (((me.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
        glow.style.setProperty("--my", (((me.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
      };
      on(banner, "mousemove", onMove);
      on(banner, "mouseenter", () => (glow.style.opacity = "1"));
      on(banner, "mouseleave", () => (glow.style.opacity = "0"));
    }

    // Hero video (the modal itself renders further down the page, inside
    // LandingClient's remaining raw HTML — reached via document since it's
    // outside this component's own subtree).
    const VIDEO_ID = "2tJz42k1CA4";
    const POSTER = "/assets/images/homepage-img-video.png";
    const playBtn = playRef.current;
    const wrap = wrapRef.current;
    const video = document.querySelector<HTMLElement>("#video");
    const box = document.querySelector<HTMLElement>("#linkFullBox");
    const closeBtn = document.querySelector<HTMLElement>("#closeVideo");
    if (playBtn && box) {
      on(playBtn, "click", () => {
        box.innerHTML =
          '<iframe width="100%" height="388" src="https://www.youtube.com/embed/' +
          VIDEO_ID +
          '?autoplay=1&rel=0" title="Sentrize" frameborder="0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>';
        wrap?.classList.add("active");
        video?.classList.add("active");
      });
    }
    if (closeBtn && box) {
      on(closeBtn, "click", () => {
        box.innerHTML = '<img class="imgResponsive center-block" src="' + POSTER + '" alt="Sentrize">';
        wrap?.classList.remove("active");
        video?.classList.remove("active");
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="homePageContent">
      <div className="introPageBannerContainer wrapperRingBanner">
        <div className="wrapperRingBox">
          <div className="mouseGlowBox" id="banner" ref={bannerRef}>
            <div className="mouseGlow" id="glow" ref={glowRef} style={{ opacity: 0 }} />
            <div className="introPageBannerWrap ringBanner">
              <div className="container no-padd">
                <div className="introPageBannerBox clearfix">
                  <div className="introView">
                    <div className="modernCommerce">
                      <h1 className="introPageBannerTitle colorWhite font_52 fontBold">
                        <SplittingText
                          type="lines"
                          text={HEADLINE}
                          stagger={0.15}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                        />
                      </h1>
                      <Fade asChild delay={450}>
                        <div className="introChoose colorWhite">
                          Sentrize designs, builds, and operates digital products and cloud
                          infrastructure — pairing modern engineering practices with senior teams
                          who stay for the long haul.
                        </div>
                      </Fade>
                      <Fade asChild delay={600}>
                        <div className="introBtnActions clearfix top-buffer40 wrapFloatingFields">
                          <div className="left paddLR15 buffer15">
                            <Link href="/pricing" className="btn blue" id="introMobilDigital">
                              Start a project
                            </Link>
                          </div>
                          <div className="left paddLR15 buffer15">
                            <Link href="/contact" className="btn ghostWhite" id="introMobileRetail">
                              Talk to engineering
                            </Link>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
                <div className="wrapVideoBannerVideo videoWrap borderRadius32" ref={wrapRef}>
                  <div className="openVideo">
                    <div className="introPagePlayBox" ref={playRef}>
                      <div className="introPagePlay">
                        <div className="playImg">
                          <div className="playA" />
                          <div className="playB" />
                          <div className="playC" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper clearfix section1">
              <div className="clientsGrayBox">
                <div className="clientsGray">
                  <div className="clientsLogosBox">
                    <div className="clientsLogos clearfix">
                      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                        <div className="marquee-row">
                          <div className="marquee-track">
                            {MARQUEE_LOGOS.map((logo, i) => (
                              <div className="logoAll" key={`${logo.alt}-${i}`}>
                                <Link href="/success-stories">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img alt={logo.alt} className="img-responsive center-block" src={logo.src} />
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
