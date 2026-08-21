// Generated from the static Sentrize template by the migration converter.
import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";

export const metadata: Metadata = {
  title: { absolute: "Sentrize \u2014 the software and cloud platforms your business runs on" },
  description: "Sentrize designs, builds, and operates custom software and cloud platforms \u2014 from first commit to production and round-the-clock operations.",
  alternates: { canonical: "https://www.sentrize.com/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "\n      .wf-force-outline-none[tabindex=\"-1\"]:focus {\n        outline: none;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      @media (min-width: 992px) {\n        html.w-mod-js:not(.w-mod-ix) [data-w-id=\"a4afaaef-90f0-ffb4-f1f9-caad29e2841d\"] {\n          opacity: 0;\n        }\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      html.w-mod-js:not(.w-mod-ix3)\n        :is(\n          [text-paragraph-animation-start],\n          [text-paragraph-animation],\n          .home-anim-2,\n          .home-anim-frameworks._2nd,\n          .home-anim-3\n        ) {\n        visibility: hidden !important;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -o-font-smoothing: antialiased;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      /* Make Flowbase / Tippy tooltip text respect \\n */\n      .tippy-box .tippy-content {\n        white-space: pre-line;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      [text-letters-animation-start] {\n        opacity: 0.3;\n        color: #7fc8ff;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      /* ==============================================================\n     LAYER A \u2014 SET VISIBILITY (unchanged behaviour)\n     Show only the picked set's images + headline per breakpoint.\n     ============================================================== */\n      @media (min-width: 992px) {\n        [data-image-mobile-newton=\"true\"] {\n          display: none !important;\n        }\n\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-image-newton-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-image-newton-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-image-einstein-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-image-einstein-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-image-franklin-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-image-franklin-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-hero-headline=\"newton\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-hero-headline=\"einstein\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-hero-headline=\"franklin\"] {\n          display: none !important;\n        }\n      }\n\n      @media (max-width: 991px) {\n        [data-image-newton-anim-main=\"true\"] {\n          display: none !important;\n        }\n\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-image-newton-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-image-mobile-newton=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-image-einstein-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-image-einstein-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-image-franklin-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-image-franklin-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-hero-headline=\"newton\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-hero-headline=\"einstein\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-hero-headline=\"franklin\"] {\n          display: none !important;\n        }\n\n        html[data-hero-set=\"newton\"] [data-image-mobile-newton=\"true\"] {\n          display: block !important;\n        }\n      }\n\n      /* ==============================================================\n     LAYER B \u2014 LOAD-ANIMATION PRE-HIDE (hard-reload flicker fix)\n     Only the elements that animate IN on page load, scoped to the\n     ACTIVE set. visibility (not display) so layout is preserved and\n     the footer script can still measure sizes/positions.\n     ============================================================== */\n      html[data-hero-set=\"einstein\"] [data-image-einstein-anim=\"true\"],\n      html[data-hero-set=\"einstein\"] [data-image-einstein-anim-main=\"true\"],\n      html[data-hero-set=\"franklin\"] [data-image-franklin-anim-main=\"true\"] {\n        visibility: hidden;\n        /* LAYER C \u2014 FALLBACK: reveal after 2s in case the script never\n       takes over. 0s duration + forwards fill = a delayed, instant\n       switch back to visible at the normal Webflow position. */\n        animation: hero-reveal-fallback 0s linear 2s forwards;\n      }\n\n      /* The footer script stamps this class once GSAP is confirmed\n     loaded \u2014 kills the fallback so GSAP's inline styles win. */\n      html.hero-js [data-image-einstein-anim=\"true\"],\n      html.hero-js [data-image-einstein-anim-main=\"true\"],\n      html.hero-js [data-image-franklin-anim-main=\"true\"] {\n        animation: none;\n      }\n\n      @keyframes hero-reveal-fallback {\n        to {\n          visibility: visible;\n        }\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "" }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      .tippy-box[data-animation=\"fade\"][data-state=\"hidden\"] {\n        opacity: 0;\n      }\n\n      [data-tippy-root] {\n        max-width: calc(100vw - 10px);\n      }\n\n      .tippy-box {\n        position: relative;\n        background-color: #333;\n        color: #fff;\n        border-radius: 4px;\n        font-size: 14px;\n        line-height: 1.4;\n        white-space: normal;\n        outline: 0;\n        transition-property: transform, visibility, opacity;\n      }\n\n      .tippy-box[data-placement^=\"top\"] > .tippy-arrow {\n        bottom: 0;\n      }\n\n      .tippy-box[data-placement^=\"top\"] > .tippy-arrow:before {\n        bottom: -7px;\n        left: 0;\n        border-width: 8px 8px 0;\n        border-top-color: initial;\n        transform-origin: center top;\n      }\n\n      .tippy-box[data-placement^=\"bottom\"] > .tippy-arrow {\n        top: 0;\n      }\n\n      .tippy-box[data-placement^=\"bottom\"] > .tippy-arrow:before {\n        top: -7px;\n        left: 0;\n        border-width: 0 8px 8px;\n        border-bottom-color: initial;\n        transform-origin: center bottom;\n      }\n\n      .tippy-box[data-placement^=\"left\"] > .tippy-arrow {\n        right: 0;\n      }\n\n      .tippy-box[data-placement^=\"left\"] > .tippy-arrow:before {\n        border-width: 8px 0 8px 8px;\n        border-left-color: initial;\n        right: -7px;\n        transform-origin: center left;\n      }\n\n      .tippy-box[data-placement^=\"right\"] > .tippy-arrow {\n        left: 0;\n      }\n\n      .tippy-box[data-placement^=\"right\"] > .tippy-arrow:before {\n        left: -7px;\n        border-width: 8px 8px 8px 0;\n        border-right-color: initial;\n        transform-origin: center right;\n      }\n\n      .tippy-box[data-inertia][data-state=\"visible\"] {\n        transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);\n      }\n\n      .tippy-arrow {\n        width: 16px;\n        height: 16px;\n        color: #333;\n      }\n\n      .tippy-arrow:before {\n        content: \"\";\n        position: absolute;\n        border-color: transparent;\n        border-style: solid;\n      }\n\n      .tippy-content {\n        position: relative;\n        padding: 5px 9px;\n        z-index: 1;\n      }\n\n      .tippy-box[data-theme~=\"translucent\"] {\n        background-color: #000000b3;\n      }\n\n      .tippy-box[data-theme~=\"translucent\"] > .tippy-arrow {\n        width: 14px;\n        height: 14px;\n      }\n\n      .tippy-box[data-theme~=\"translucent\"][data-placement^=\"top\"] > .tippy-arrow:before {\n        border-width: 7px 7px 0;\n        border-top-color: #000000b3;\n      }\n\n      .tippy-box[data-theme~=\"translucent\"][data-placement^=\"bottom\"] > .tippy-arrow:before {\n        border-width: 0 7px 7px;\n        border-bottom-color: #000000b3;\n      }\n\n      .tippy-box[data-theme~=\"translucent\"][data-placement^=\"left\"] > .tippy-arrow:before {\n        border-width: 7px 0 7px 7px;\n        border-left-color: #000000b3;\n      }\n\n      .tippy-box[data-theme~=\"translucent\"][data-placement^=\"right\"] > .tippy-arrow:before {\n        border-width: 7px 7px 7px 0;\n        border-right-color: #000000b3;\n      }\n\n      .tippy-box[data-theme~=\"translucent\"] > .tippy-backdrop {\n        background-color: #000000b3;\n      }\n\n      .tippy-box[data-theme~=\"translucent\"] > .tippy-svg-arrow {\n        fill: #000000b3;\n      }\n\n      .tippy-box[data-theme~=\"material\"] {\n        background-color: #505355;\n        font-weight: 600;\n      }\n\n      .tippy-box[data-theme~=\"material\"][data-placement^=\"top\"] > .tippy-arrow:before {\n        border-top-color: #505355;\n      }\n\n      .tippy-box[data-theme~=\"material\"][data-placement^=\"bottom\"] > .tippy-arrow:before {\n        border-bottom-color: #505355;\n      }\n\n      .tippy-box[data-theme~=\"material\"][data-placement^=\"left\"] > .tippy-arrow:before {\n        border-left-color: #505355;\n      }\n\n      .tippy-box[data-theme~=\"material\"][data-placement^=\"right\"] > .tippy-arrow:before {\n        border-right-color: #505355;\n      }\n\n      .tippy-box[data-theme~=\"material\"] > .tippy-backdrop {\n        background-color: #505355;\n      }\n\n      .tippy-box[data-theme~=\"material\"] > .tippy-svg-arrow {\n        fill: #505355;\n      }\n\n      .tippy-box[data-theme~=\"light\"] {\n        color: #26323d;\n        box-shadow:\n          0 0 20px 4px #9aa1b126,\n          0 4px 80px -8px #24282f40,\n          0 4px 4px -2px #5b5e6926;\n        background-color: #fff;\n      }\n\n      .tippy-box[data-theme~=\"light\"][data-placement^=\"top\"] > .tippy-arrow:before {\n        border-top-color: #fff;\n      }\n\n      .tippy-box[data-theme~=\"light\"][data-placement^=\"bottom\"] > .tippy-arrow:before {\n        border-bottom-color: #fff;\n      }\n\n      .tippy-box[data-theme~=\"light\"][data-placement^=\"left\"] > .tippy-arrow:before {\n        border-left-color: #fff;\n      }\n\n      .tippy-box[data-theme~=\"light\"][data-placement^=\"right\"] > .tippy-arrow:before {\n        border-right-color: #fff;\n      }\n\n      .tippy-box[data-theme~=\"light\"] > .tippy-backdrop {\n        background-color: #fff;\n      }\n\n      .tippy-box[data-theme~=\"light\"] > .tippy-svg-arrow {\n        fill: #fff;\n      }\n\n      .tippy-box[data-animation=\"shift-toward\"][data-state=\"hidden\"] {\n        opacity: 0;\n      }\n\n      .tippy-box[data-animation=\"shift-toward\"][data-state=\"hidden\"][data-placement^=\"top\"] {\n        transform: translateY(-10px);\n      }\n\n      .tippy-box[data-animation=\"shift-toward\"][data-state=\"hidden\"][data-placement^=\"bottom\"] {\n        transform: translateY(10px);\n      }\n\n      .tippy-box[data-animation=\"shift-toward\"][data-state=\"hidden\"][data-placement^=\"left\"] {\n        transform: translate(-10px);\n      }\n\n      .tippy-box[data-animation=\"shift-toward\"][data-state=\"hidden\"][data-placement^=\"right\"] {\n        transform: translate(10px);\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"top\"] {\n        transform-origin: bottom;\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"top\"][data-state=\"visible\"] {\n        transform: perspective(700px);\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"top\"][data-state=\"hidden\"] {\n        transform: perspective(700px) translateY(8px) rotateX(60deg);\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"bottom\"] {\n        transform-origin: top;\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"bottom\"][data-state=\"visible\"] {\n        transform: perspective(700px);\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"bottom\"][data-state=\"hidden\"] {\n        transform: perspective(700px) translateY(-8px) rotateX(-60deg);\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"left\"] {\n        transform-origin: right;\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"left\"][data-state=\"visible\"] {\n        transform: perspective(700px);\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"left\"][data-state=\"hidden\"] {\n        transform: perspective(700px) translate(8px) rotateY(-60deg);\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"right\"] {\n        transform-origin: left;\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"right\"][data-state=\"visible\"] {\n        transform: perspective(700px);\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-placement^=\"right\"][data-state=\"hidden\"] {\n        transform: perspective(700px) translate(-8px) rotateY(60deg);\n      }\n\n      .tippy-box[data-animation=\"perspective\"][data-state=\"hidden\"],\n      .tippy-box[data-animation=\"shift-away\"][data-state=\"hidden\"] {\n        opacity: 0;\n      }\n\n      .tippy-box[data-animation=\"shift-away\"][data-state=\"hidden\"][data-placement^=\"top\"] {\n        transform: translateY(10px);\n      }\n\n      .tippy-box[data-animation=\"shift-away\"][data-state=\"hidden\"][data-placement^=\"bottom\"] {\n        transform: translateY(-10px);\n      }\n\n      .tippy-box[data-animation=\"shift-away\"][data-state=\"hidden\"][data-placement^=\"left\"] {\n        transform: translate(10px);\n      }\n\n      .tippy-box[data-animation=\"shift-away\"][data-state=\"hidden\"][data-placement^=\"right\"] {\n        transform: translate(-10px);\n      }\n\n      .tippy-box[data-animation=\"scale\"][data-placement^=\"top\"] {\n        transform-origin: bottom;\n      }\n\n      .tippy-box[data-animation=\"scale\"][data-placement^=\"bottom\"] {\n        transform-origin: top;\n      }\n\n      .tippy-box[data-animation=\"scale\"][data-placement^=\"left\"] {\n        transform-origin: right;\n      }\n\n      .tippy-box[data-animation=\"scale\"][data-placement^=\"right\"] {\n        transform-origin: left;\n      }\n\n      .tippy-box[data-animation=\"scale\"][data-state=\"hidden\"] {\n        transform: scale(0.5);\n        opacity: 0;\n      }\n\n      .tippy-box[data-placement^=\"top\"] > .tippy-svg-arrow {\n        bottom: 0;\n      }\n\n      .tippy-box[data-placement^=\"top\"] > .tippy-svg-arrow:after,\n      .tippy-box[data-placement^=\"top\"] > .tippy-svg-arrow > svg {\n        top: 16px;\n        transform: rotate(180deg);\n      }\n\n      .tippy-box[data-placement^=\"bottom\"] > .tippy-svg-arrow {\n        top: 0;\n      }\n\n      .tippy-box[data-placement^=\"bottom\"] > .tippy-svg-arrow > svg {\n        bottom: 16px;\n      }\n\n      .tippy-box[data-placement^=\"left\"] > .tippy-svg-arrow {\n        right: 0;\n      }\n\n      .tippy-box[data-placement^=\"left\"] > .tippy-svg-arrow:after,\n      .tippy-box[data-placement^=\"left\"] > .tippy-svg-arrow > svg {\n        transform: rotate(90deg);\n        top: calc(50% - 3px);\n        left: 11px;\n      }\n\n      .tippy-box[data-placement^=\"right\"] > .tippy-svg-arrow {\n        left: 0;\n      }\n\n      .tippy-box[data-placement^=\"right\"] > .tippy-svg-arrow:after,\n      .tippy-box[data-placement^=\"right\"] > .tippy-svg-arrow > svg {\n        transform: rotate(-90deg);\n        top: calc(50% - 3px);\n        right: 11px;\n      }\n\n      .tippy-svg-arrow {\n        width: 16px;\n        height: 16px;\n        fill: #333;\n        text-align: initial;\n      }\n\n      .tippy-svg-arrow,\n      .tippy-svg-arrow > svg {\n        position: absolute;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      .home_logos-wrapper .home_logos-item {\n        transition:\n          opacity 0.3s ease,\n          filter 0.3s ease;\n      }\n\n      .home_logos-wrapper:hover .home_logos-item {\n        opacity: 0.15;\n        filter: grayscale(1);\n      }\n\n      .home_logos-wrapper:hover .home_logos-item[data-has-link=\"true\"] {\n        opacity: 1;\n      }\n    " }} />
      <script dangerouslySetInnerHTML={{ __html: "(function () {\n        // Randomly pick one of the three hero sets, avoiding an immediate\n        // repeat within the same browser session (sessionStorage-backed).\n        // Runs synchronously in the <head> so data-hero-set is present\n        // before the first paint \u2014 the CSS below depends on that.\n        var sets = [\"newton\", \"einstein\", \"franklin\"];\n        var KEY = \"heroSet:last\";\n        var last = null;\n        try {\n          last = sessionStorage.getItem(KEY);\n        } catch (e) {}\n        function pick(excludeLast) {\n          var pool = excludeLast\n            ? sets.filter(function (s) {\n                return s !== last;\n              })\n            : sets;\n          if (!pool.length) pool = sets;\n          return pool[Math.floor(Math.random() * pool.length)];\n        }\n        function apply(set) {\n          document.documentElement.setAttribute(\"data-hero-set\", set);\n          last = set;\n          try {\n            sessionStorage.setItem(KEY, set);\n          } catch (e) {}\n        }\n        apply(pick(true));\n      })();" }} />
      <main className="main-wrapper">
        <section className="home_hero-section is-homepage-v3" data-section-hero="true">
          <img alt="" className="home_new-image is-einstein" data-image="einstein" data-image-einstein-anim="true" loading="lazy" sizes="(max-width: 3104px) 100vw, 3104px" src="/assets/images/einstein-smoke.avif" srcSet="/assets/images/einstein-smoke-p-500.avif   500w, /assets/images/einstein-smoke-p-800.avif   800w, /assets/images/einstein-smoke-p-1080.avif 1080w, /assets/images/einstein-smoke-p-1600.avif 1600w, /assets/images/einstein-smoke-p-2000.avif 2000w, /assets/images/einstein-smoke-p-2600.avif 2600w, /assets/images/einstein-smoke.avif        3104w" />
          <img alt="" className="home_new-image is-newton is-mobile" data-image="newton" data-image-mobile-newton="true" data-image-newton-anim-main="true" loading="lazy" src="/assets/images/newton-mobile.avif" />
          <img alt="" className="home_new-image is-newton" data-image="newton" data-image-newton-anim-main="true" loading="lazy" sizes="(max-width: 3088px) 100vw, 3088px" src="/assets/images/resting-newton.avif" srcSet="/assets/images/resting-newton-p-500.avif   500w, /assets/images/resting-newton-p-800.avif   800w, /assets/images/resting-newton-p-1080.avif 1080w, /assets/images/resting-newton-p-1600.avif 1600w, /assets/images/resting-newton-p-2000.avif 2000w, /assets/images/resting-newton-p-2600.avif 2600w, /assets/images/resting-newton.avif        3088w" />
          <img alt="" className="home_new-image is-franklin" data-image="franklin" data-image-franklin-anim-main="true" loading="lazy" sizes="(max-width: 2453px) 100vw, 2453px" src="/assets/images/franklin-main.avif" srcSet="/assets/images/franklin-main-p-500.avif   500w, /assets/images/franklin-main-p-800.avif   800w, /assets/images/franklin-main-p-1080.avif 1080w, /assets/images/franklin-main-p-1600.avif 1600w, /assets/images/franklin-main-p-2000.avif 2000w, /assets/images/franklin-main.avif        2453w" />
          <img alt="" className="home_new-image-right is-einstein" data-image="einstein" data-image-einstein-anim-main="true" loading="lazy" sizes="(max-width: 3191px) 100vw, 3191px" src="/assets/images/einstein-graphics.avif" srcSet="/assets/images/einstein-graphics-p-500.avif   500w, /assets/images/einstein-graphics-p-800.avif   800w, /assets/images/einstein-graphics-p-1080.avif 1080w, /assets/images/einstein-graphics-p-1600.avif 1600w, /assets/images/einstein-graphics-p-2000.avif 2000w, /assets/images/einstein-graphics-p-2600.avif 2600w, /assets/images/einstein-graphics.avif        3191w" />
          <img alt="" className="home_new-image-right is-newton" data-image="newton" data-image-newton-anim="true" loading="lazy" sizes="(max-width: 1122px) 100vw, 1122px" src="/assets/images/newton-rocket.avif" srcSet="/assets/images/newton-rocket-p-500.avif  500w, /assets/images/newton-rocket-p-800.avif  800w, /assets/images/newton-rocket.avif       1122w" />
          <img alt="" className="home_new-image-right is-franklin" data-image="franklin" data-image-franklin-anim="true" loading="lazy" sizes="(max-width: 2992px) 100vw, 2992px" src="/assets/images/franklin-bg.png" srcSet="/assets/images/franklin-bg-p-500.png   500w, /assets/images/franklin-bg-p-800.png   800w, /assets/images/franklin-bg-p-1080.png 1080w, /assets/images/franklin-bg-p-1600.png 1600w, /assets/images/franklin-bg-p-2000.png 2000w, /assets/images/franklin-bg-p-2600.png 2600w, /assets/images/franklin-bg.png        2992w" />
          <div className="hero-linear-gradient is-top" />
          <div className="hero-linear-gradient is-left" />
          <div className="hero-linear-gradient is-right" />
          <div className="hero-linear-gradient is-bottom" />
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home_content-wrap">
                <div className="home-hero-wrapper is-homepagev3">
                  <div className="hero-title-row">
                    <h1 className="t-heading-2-rg text-c-blue-light-400">
                      {"\n                      We build the software and"}
                      <br />
                    </h1>
                    <div className="lm_wrapper">
                      <div className="lm_icon-arrow w-embed">
                        <style dangerouslySetInnerHTML={{ __html: "\n                          .hero-title-row {\n                            position: relative;\n                            width: fit-content;\n                            margin-inline: auto;\n                          }\n\n                          .hero-title-row h1 {\n                            margin: 0;\n                          }\n\n                          .roll-link {\n                            display: inline-block;\n                            vertical-align: bottom;\n                          }\n\n                          .lm_wrapper {\n                            position: absolute;\n                            left: 100%;\n                            /* zaraz za ko\u0144cem nag\u0142\u00f3wka */\n                            top: 50%;\n                            /* \u015brodek wysoko\u015bci wiersza */\n                            transform: translateY(-50%);\n                            margin-left: 0.5rem;\n                            /* odst\u0119p od \"Engine\" */\n                            display: flex;\n                            align-items: center;\n                          }\n\n                          .lm_icon-arrow svg {\n                            display: block;\n                          }\n                        " }} />
                      </div>
                    </div>
                  </div>
                  <div className="hero-subline">
                    <div className="t-heading-2-rg text-c-cyan-mailbu" data-hero-headline="newton">
                      {"\n                      cloud platforms your business runs on.\n                    "}
                    </div>
                    <div className="t-heading-2-rg text-c-cyan-mailbu" data-hero-headline="einstein">
                      {"\n                      cloud platforms your business runs on.\n                    "}
                    </div>
                    <div className="t-heading-2-rg text-c-cyan-mailbu" data-hero-headline="franklin">
                      {"\n                      cloud platforms your business runs on.\n                    "}
                    </div>
                  </div>
                  <div className="spacer-24" />
                  <p className="t-paragraph-1-rg-twk">
                    {"\n                    Sentrize designs, builds, and operates digital products and cloud infrastructure \u2014 pairing modern\n                    engineering practices with senior teams who stay for the long haul.\n                  "}
                  </p>
                  <div className="hide w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                      .t-heading-1-rg.color-t-7fc8ff.homepage {\n                        text-shadow:\n                          rgba(127, 200, 255, 0) 0px 0px 24px,\n                          rgba(127, 200, 255, 0) 0px 0px 48px,\n                          rgba(127, 200, 255, 0) 0px 2px 12px;\n                        animation: glowIn 500ms ease-out 300ms forwards;\n                      }\n\n                      @keyframes glowIn {\n                        to {\n                          text-shadow:\n                            rgba(127, 200, 255, 0.4) 0px 0px 24px,\n                            rgba(127, 200, 255, 0.15) 0px 0px 48px,\n                            rgba(127, 200, 255, 0.11) 0px 2px 12px;\n                        }\n                      }\n                    " }} />
                  </div>
                  <div className="spacer-48" />
                  <div className="button-group is-center">
                    <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%225eb11c12-30fc-26e5-89c8-eef144d436ee%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="5eb11c12-30fc-26e5-89c8-eef144d436ee:cc338c70-b506-f985-732b-95e9d08eb22b" href="/pricing">
                      <div className="no-wrap-arrow">
                        {"Start a project"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                      {" "}
                    </a>
                    <a className="button-v2-full-width w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9 w-inline-block" data-wf--button--variant="secondary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%225eb11c12-30fc-26e5-89c8-eef144d436ef%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="5eb11c12-30fc-26e5-89c8-eef144d436ef:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Talk to engineering"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="home_logos-wrapper is-home-v3">
                  <div className="home_logos-list-wrapper hide-tablet w-dyn-list">
                    <div className="home_logos-list w-dyn-items" role="list">
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="Cisco" className="home_logo" loading="lazy" src="/assets/images/clients/cisco.png" style={{ height: "1.875rem", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="Bitdefender" className="home_logo" loading="lazy" src="/assets/images/clients/bitdefender.png" style={{ height: "1.875rem", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="123 FormBuilder" className="home_logo" loading="lazy" src="/assets/images/clients/123formbuilder.png" style={{ height: "1.875rem", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="EaseUS" className="home_logo" loading="lazy" src="/assets/images/clients/easeus.png" style={{ height: "1.875rem", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="Mondly" className="home_logo" loading="lazy" src="/assets/images/clients/mondly.png" style={{ height: "1.875rem", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="ViewSonic" className="home_logo" loading="lazy" src="/assets/images/clients/viewsonic.png" style={{ height: "1.875rem", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="logos-js w-embed w-script">
                    <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "(function () {\n                        function initHomeLogosHover() {\n                          // 1. Grab every \"Home Logos Wrapper\" on the page\n                          var wrappers = document.querySelectorAll(\".home_logos-wrapper\");\n                          if (!wrappers.length) return;\n\n                          // 2. Inject the hover styles once\n                          if (!document.getElementById(\"home-logos-hover-styles\")) {\n                            var style = document.createElement(\"style\");\n                            style.id = \"home-logos-hover-styles\";\n                            style.textContent = [\n                              /* Smooth transition for every logo item */\n                              \".home_logos-wrapper .home_logos-item {\",\n                              \"  transition: opacity .3s ease, filter .3s ease;\",\n                              \"}\",\n                              /* On wrapper hover: grey-out + dim ALL items */\n                              \".home_logos-wrapper:hover .home_logos-item {\",\n                              \"  opacity: .15;\",\n                              \"  filter: grayscale(1);\" /* delete this line to skip the grey-out */,\n                              \"}\",\n                              /* Items that DO have a link stay fully visible */\n                              '.home_logos-wrapper:hover .home_logos-item[data-has-link=\"true\"] {',\n                              \"  opacity: 1;\",\n                              /* '  filter: none;' */ /* uncomment to keep linked logos in full color */ \"}\",\n                            ].join(\"\\n\");\n                            document.head.appendChild(style);\n                          }\n\n                          // 3. Tag each item depending on whether it has a real link\n                          wrappers.forEach(function (wrapper) {\n                            var items = wrapper.querySelectorAll(\".home_logos-item\");\n                            items.forEach(function (item) {\n                              var hasLink = false;\n                              var anchors = item.querySelectorAll(\"a[href]\");\n                              for (var i = 0; i < anchors.length; i++) {\n                                var href = (anchors[i].getAttribute(\"href\") || \"\").trim();\n                                if (href && href !== \"#\") {\n                                  hasLink = true;\n                                  break;\n                                }\n                              }\n                              item.setAttribute(\"data-has-link\", hasLink ? \"true\" : \"false\");\n                            });\n                          });\n                        }\n\n                        // Run when the DOM is ready (Webflow-friendly)\n                        if (document.readyState === \"loading\") {\n                          document.addEventListener(\"DOMContentLoaded\", initHomeLogosHover);\n                        } else {\n                          initHomeLogosHover();\n                        }\n                      })();" }} />
                  </div>
                  <div className="logos-css w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                      /* Smooth fade for the caption */\n                      .hero-lc_logo-caption {\n                        transition: opacity 0.3s ease;\n                      }\n\n                      /* Reveal caption when hovering the item, the relative wrapper, or the link */\n                      .home_logos-item:hover .hero-lc_logo-caption,\n                      .home_logos-wrapper-relative:hover .hero-lc_logo-caption,\n                      .home_logos-link:hover ~ .hero-lc_logo-caption {\n                        opacity: 1;\n                      }\n                    " }} />
                  </div>
                </div>
                <div className="tablet-version is-logos-flex" data-w-id="5eb11c12-30fc-26e5-89c8-eef144d4370d">
                  <div className="tablet-logos-wrapper">
                    <div className="tablet-logos-marquee">
                      <div className="tablet-logos-marquee-track" style={{ willChange: "transform", transform: "translate3d(-23.5725%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)\n                            rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
                        <div className="tablet-logos-marquee-item w-dyn-list">
                          <div className="home_logos-list w-dyn-items" role="list">
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Cisco" className="home_logo" loading="lazy" src="/assets/images/clients/cisco.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Bitdefender" className="home_logo" loading="lazy" src="/assets/images/clients/bitdefender.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="123 FormBuilder" className="home_logo" loading="lazy" src="/assets/images/clients/123formbuilder.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="EaseUS" className="home_logo" loading="lazy" src="/assets/images/clients/easeus.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Mondly" className="home_logo" loading="lazy" src="/assets/images/clients/mondly.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="ViewSonic" className="home_logo" loading="lazy" src="/assets/images/clients/viewsonic.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                          </div>
                        </div>
                        <div className="tablet-logos-marquee-item w-dyn-list">
                          <div className="home_logos-list w-dyn-items" role="list">
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Cisco" className="home_logo" loading="lazy" src="/assets/images/clients/cisco.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Bitdefender" className="home_logo" loading="lazy" src="/assets/images/clients/bitdefender.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="123 FormBuilder" className="home_logo" loading="lazy" src="/assets/images/clients/123formbuilder.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="EaseUS" className="home_logo" loading="lazy" src="/assets/images/clients/easeus.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Mondly" className="home_logo" loading="lazy" src="/assets/images/clients/mondly.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="ViewSonic" className="home_logo" loading="lazy" src="/assets/images/clients/viewsonic.png" style={{ height: "1.875rem", width: "auto" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tablet-logos-wrapper">
                    <div className="tablet-logos-marquee is-reverse">
                      <div className="tablet-logos-marquee-track-reverse" style={{ willChange: "transform", transform: "translate3d(23.5725%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)\n                            rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-section-js w-embed w-script">
              <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "document.addEventListener(\"DOMContentLoaded\", function () {\n                  // ---------------------------------------------------------------\n                  // FALLBACK HANDSHAKE: if GSAP or ScrollTrigger failed to load,\n                  // bail out WITHOUT adding the hero-js class \u2014 the head CSS will\n                  // reveal the images at 2s. Only once both are confirmed present is\n                  // the fallback disarmed and control taken over.\n                  // ---------------------------------------------------------------\n                  if (!window.gsap || !window.ScrollTrigger) return;\n                  document.documentElement.classList.add(\"hero-js\");\n\n                  gsap.registerPlugin(ScrollTrigger);\n\n                  var hero = document.querySelector('[data-section-hero=\"true\"]');\n                  if (!hero) return;\n\n                  // Which set did the <head> script pick? Animate only that one \u2014\n                  // hidden elements measure as 0x0 and would break the distance math.\n                  var activeSet = document.documentElement.getAttribute(\"data-hero-set\") || \"newton\";\n\n                  function pick(name, selector) {\n                    return activeSet === name ? hero.querySelector(selector) : null;\n                  }\n\n                  var newton = pick(\"newton\", '[data-image-newton-anim=\"true\"]');\n                  var newtonMain = pick(\"newton\", '[data-image-newton-anim-main=\"true\"]');\n                  var einstein = pick(\"einstein\", '[data-image-einstein-anim=\"true\"]'); // the cloud\n                  var einsteinMain = pick(\"einstein\", '[data-image-einstein-anim-main=\"true\"]');\n                  var franklin = pick(\"franklin\", '[data-image-franklin-anim=\"true\"]');\n                  var franklinMain = pick(\"franklin\", '[data-image-franklin-anim-main=\"true\"]');\n\n                  if (!newton && !newtonMain && !einstein && !einsteinMain && !franklin && !franklinMain) return;\n\n                  // -----------------------------------------------------------------\n                  // Helper: how far the hero's top sits below the document top.\n                  // At scroll 0 this equals the space taken by the top-banner + navbar\n                  // above it. Used to offset the ScrollTrigger start so the animation\n                  // begins at the very first pixel of scroll.\n                  // -----------------------------------------------------------------\n                  function heroTopOffset() {\n                    return Math.round(hero.getBoundingClientRect().top + window.pageYOffset);\n                  }\n\n                  // The cloud's resting opacity, as set in Webflow. The intro must return\n                  // to THIS value, not to 1, or the image comes back too bright.\n                  var EINSTEIN_OPACITY = 0.65;\n\n                  var einsteinReturning = false; // true while the (load or re-entry) intro is playing\n\n                  // -----------------------------------------------------------------\n                  // Park the cloud completely out of sight. Called synchronously the\n                  // instant an intro is requested, and again as a zero-duration set at\n                  // position 0 of the intro timeline. y/rotation reset too, so it\n                  // re-enters level rather than still tilted from the exit.\n                  // FLICKER FIX: visibility:'visible' is set here \u2014 the element arrives\n                  // pre-hidden by the <head> CSS, and this is the safe moment to reveal\n                  // it (it is off-screen AND at opacity 0 in the very same set() call).\n                  // -----------------------------------------------------------------\n                  function parkEinsteinCloud() {\n                    if (!einstein) return;\n                    gsap.set(einstein, {\n                      x: -window.innerWidth, // far beyond the left edge\n                      y: 0,\n                      rotation: 0,\n                      opacity: 0, // belt and braces: invisible even if it pokes out\n                      visibility: \"visible\", // \u2190 reveal (pre-hidden by head CSS)\n                    });\n                  }\n\n                  // -----------------------------------------------------------------\n                  // Einstein EXIT \u2014 PAUSED timeline; its progress is driven by hand from\n                  // the scroll position (see onUpdate). ease:'none' so it maps linearly;\n                  // all the smoothing comes from the follower further down.\n                  // -----------------------------------------------------------------\n                  var einsteinExit = gsap.timeline({ paused: true });\n                  if (einstein) {\n                    einsteinExit.to(einstein, { y: \"80%\", rotation: -45, opacity: 0, ease: \"none\" }, 0);\n                  }\n                  if (einsteinMain) {\n                    einsteinExit.to(\n                      einsteinMain,\n                      {\n                        // push fully past the RIGHT edge, measured from the CURRENT left\n                        x: function () {\n                          return window.innerWidth - einsteinMain.getBoundingClientRect().left + 200;\n                        },\n                        rotation: -30,\n                        ease: \"none\",\n                      },\n                      0,\n                    );\n                  }\n\n                  // -----------------------------------------------------------------\n                  // Measure where einsteinMain naturally sits, so the intro knows how far\n                  // off-screen-left it has to start from. Only measured at rest.\n                  // -----------------------------------------------------------------\n                  var mainHomeLeft = 0,\n                    mainWidth = 0;\n                  function measureEinsteinMain() {\n                    if (!einsteinMain || einsteinReturning || einsteinExit.progress() !== 0) return;\n                    mainWidth = einsteinMain.offsetWidth; // layout width, ignores transforms\n                    mainHomeLeft =\n                      einsteinMain.getBoundingClientRect().left -\n                      (parseFloat(gsap.getProperty(einsteinMain, \"x\")) || 0);\n                  }\n                  measureEinsteinMain();\n                  window.addEventListener(\"load\", measureEinsteinMain); // images may size late\n                  window.addEventListener(\"resize\", measureEinsteinMain);\n\n                  function offscreenLeftX() {\n                    // fully past the left edge, + buffer so nothing pokes out at the start\n                    return -(mainHomeLeft + mainWidth + 200);\n                  }\n\n                  // -----------------------------------------------------------------\n                  // Einstein RE-ENTRY / LOAD INTRO. immediateRender:false everywhere\n                  // keeps the images untouched until this actually plays.\n                  // -----------------------------------------------------------------\n                  var einsteinIntro = gsap.timeline({ paused: true });\n                  if (einstein) {\n                    // FIRST thing the intro does: hide the cloud off-screen. A\n                    // zero-duration .set() rather than a callback on purpose \u2014\n                    // restart() suppresses callbacks at time 0 but always renders tweens.\n                    einsteinIntro.set(\n                      einstein,\n                      {\n                        x: function () {\n                          return -window.innerWidth;\n                        },\n                        y: 0,\n                        rotation: 0,\n                        opacity: 0,\n                        visibility: \"visible\", // FLICKER FIX: safe to reveal \u2014 off-screen + opacity 0\n                      },\n                      0,\n                    );\n                  }\n                  if (einsteinMain) {\n                    // Straight run from off-screen left to the home position.\n                    // Opacity is left alone so Webflow's own value survives.\n                    // FLICKER FIX: visibility:'visible' in the FROM state \u2014 the element\n                    // is revealed on the same tick it is placed off-screen, never at home.\n                    einsteinIntro.fromTo(\n                      einsteinMain,\n                      { x: offscreenLeftX, y: \"-50%\", rotation: 20, visibility: \"visible\" },\n                      {\n                        x: 0,\n                        y: 0,\n                        rotation: 0,\n                        duration: 3,\n                        ease: \"power3.out\",\n                        immediateRender: false,\n                      },\n                      0,\n                    );\n                  }\n                  if (einstein) {\n                    // Flies in from beyond the left edge at the halfway point of\n                    // einsteinMain's 3s move (3 / 2 = 1.5), fading 0 \u2192 Webflow's 65%.\n                    einsteinIntro.fromTo(\n                      einstein,\n                      {\n                        x: function () {\n                          return -window.innerWidth;\n                        },\n                        y: 0,\n                        rotation: 0,\n                        opacity: 0,\n                      },\n                      {\n                        x: 0,\n                        y: 0,\n                        rotation: 0,\n                        opacity: EINSTEIN_OPACITY,\n                        duration: 1,\n                        ease: \"power3.out\",\n                        immediateRender: false,\n                      },\n                      1.5,\n                    );\n                  }\n\n                  // When the intro finishes, hand Einstein back to the scroll and let the\n                  // exit re-record its start values from the fresh home position.\n                  einsteinIntro.eventCallback(\"onComplete\", function () {\n                    einsteinReturning = false;\n                    einsteinProxy.p = 0;\n                    einsteinExit.invalidate().progress(0);\n                    measureEinsteinMain();\n                  });\n\n                  // -----------------------------------------------------------------\n                  // ONE entry point for the intro \u2014 used by BOTH the first page load and\n                  // the scroll-back-up re-entry, so the two behave identically.\n                  // restart() renders time 0 synchronously, so by the time this function\n                  // returns, both elements are already positioned off-screen AND revealed\n                  // \u2014 all inside one JS task, no frame can paint in between.\n                  // -----------------------------------------------------------------\n                  function playEinsteinIntro() {\n                    einsteinReturning = true;\n                    gsap.killTweensOf(einsteinProxy); // stop the follower mid-flight\n                    parkEinsteinCloud(); // hide the cloud immediately + reveal element\n                    einsteinExit.invalidate(); // forget cached distances\n                    einsteinIntro.invalidate().restart(); // re-measure + play from the left\n                  }\n\n                  // -----------------------------------------------------------------\n                  // Smoothing follower: scroll sets a target, this eases toward it and\n                  // feeds the eased value into the exit timeline. Raise duration for\n                  // an even softer, laggier feel.\n                  // -----------------------------------------------------------------\n                  var einsteinProxy = { p: 0 };\n                  function driveEinsteinExit(target) {\n                    gsap.to(einsteinProxy, {\n                      p: target,\n                      duration: 1.2, // \u2190 smoothness dial\n                      ease: \"power3.out\",\n                      overwrite: true,\n                      onUpdate: function () {\n                        einsteinExit.progress(einsteinProxy.p);\n                      },\n                    });\n                  }\n\n                  // -----------------------------------------------------------------\n                  // NEWTON + FRANKLIN scrubbed timeline + the shared ScrollTrigger.\n                  // -----------------------------------------------------------------\n                  var tl = gsap.timeline({\n                    scrollTrigger: {\n                      trigger: hero,\n\n                      // Start at the very first pixel of scroll \u2014 offset by the hero's\n                      // distance from the document top (~150px of banner + navbar).\n                      start: function () {\n                        return \"top top+=\" + heroTopOffset();\n                      },\n\n                      // End after scrolling ~75% of the hero section's own height.\n                      // Tune the 0.75 multiplier: 0.70 = sooner, 0.80 = later.\n                      end: function () {\n                        return \"+=\" + hero.offsetHeight * 0.75;\n                      },\n\n                      scrub: 1, // Newton's + Franklin's smoothing\n                      invalidateOnRefresh: true, // re-measure on resize\n                      onUpdate: function (self) {\n                        if (!einsteinReturning) driveEinsteinExit(self.progress);\n                      },\n                      onEnterBack: function () {\n                        // scrolled back up into hero \u2192 play the intro\n                        playEinsteinIntro();\n                      },\n                      onLeave: function () {\n                        // scrolled back down mid-intro: abandon the half-played intro and\n                        // hand Einstein straight back to the scroll.\n                        if (!einsteinReturning) return;\n                        einsteinReturning = false;\n                        einsteinIntro.pause();\n                        einsteinExit.invalidate().progress(0); // re-record from live state \u2192 no jump\n                        einsteinProxy.p = 0;\n                        driveEinsteinExit(1);\n                      },\n                      // markers: true             // uncomment to debug start/end positions\n                    },\n                  });\n\n                  // Newton foreground: slide fully off the top + rotate to -30deg.\n                  if (newton) {\n                    tl.to(\n                      newton,\n                      {\n                        y: function () {\n                          return -(newton.getBoundingClientRect().bottom + 120);\n                        },\n                        rotation: -30,\n                        duration: 1,\n                        ease: \"none\",\n                      },\n                      0,\n                    );\n                  }\n                  // Newton parallax layer: rise by 3rem (spans the whole range)\n                  if (newtonMain) {\n                    tl.to(newtonMain, { y: \"-3rem\", duration: 1, ease: \"none\" }, 0);\n                  }\n\n                  // Franklin foreground: fade only \u2014 40% \u2192 100% over the first 40%.\n                  if (franklin) {\n                    tl.to(franklin, { opacity: 1, duration: 0.4, ease: \"none\" }, 0);\n                  }\n                  // Franklin main: partial exit \u2014 25% of the way toward the LEFT edge.\n                  if (franklinMain) {\n                    tl.to(\n                      franklinMain,\n                      {\n                        x: function () {\n                          return -franklinMain.getBoundingClientRect().right * 0.25;\n                        },\n                        duration: 1,\n                        ease: \"none\",\n                      },\n                      0,\n                    );\n                  }\n\n                  // -----------------------------------------------------------------\n                  // FRANKLIN LOAD INTRO (client request): slight move to the RIGHT on\n                  // load. Animates xPercent while the scroll owns x \u2014 the two channels\n                  // compose independently, so they can never conflict.\n                  // FLICKER FIX: the element arrives pre-hidden by the head CSS.\n                  // fromTo renders its FROM state immediately (synchronously, right\n                  // here), so the element is revealed already nudged -4% left \u2014 it can\n                  // never flash at its home position first. Tune -4 for the nudge size.\n                  // -----------------------------------------------------------------\n                  if (franklinMain) {\n                    gsap.fromTo(\n                      franklinMain,\n                      { xPercent: -4, visibility: \"visible\" },\n                      { xPercent: 0, duration: 1.4, ease: \"power3.out\" },\n                    );\n                  }\n\n                  // -----------------------------------------------------------------\n                  // EINSTEIN LOAD INTRO (client request): play the same intro once on\n                  // first page load, if the hero is still in view. If the page loads\n                  // already scrolled past the hero, the intro is skipped \u2014 but the\n                  // elements must STILL be revealed (they arrive pre-hidden by the head\n                  // CSS), placed straight into their scrolled-out exit state so nothing\n                  // flashes on screen; the scroll follower owns them from there.\n                  // -----------------------------------------------------------------\n                  if (activeSet === \"einstein\" && (einstein || einsteinMain)) {\n                    if (hero.getBoundingClientRect().bottom > 0) {\n                      // hero (at least partly) visible on load \u2192 full intro\n                      playEinsteinIntro();\n                    } else {\n                      // loaded past the hero \u2192 skip the intro, jump to the exited state,\n                      // then reveal. Both happen synchronously, so no flash is possible.\n                      einsteinProxy.p = 1;\n                      einsteinExit.progress(1);\n                      gsap.set([einstein, einsteinMain].filter(Boolean), { visibility: \"visible\" });\n                    }\n                  }\n                });" }} />
            </div>
            <div className="hero-heading-css w-embed">
              <style dangerouslySetInnerHTML={{ __html: "\n                .roll-link::after {\n                  content: \"\";\n                  display: inline-block;\n                  width: 30px;\n                  height: 30px;\n                  margin-left: 2rem;\n                  vertical-align: middle;\n                  background-color: #7dc8ff;\n                  -webkit-mask: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"%3E%3Cpath d=\"M8.65385 7.5V9.80769H18.5654L7.5 20.8731L9.12692 22.5L20.1923 11.4346V21.3462H22.5V7.5H8.65385Z\"/%3E%3C/svg%3E')\n                    no-repeat center / contain;\n                  mask: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"%3E%3Cpath d=\"M8.65385 7.5V9.80769H18.5654L7.5 20.8731L9.12692 22.5L20.1923 11.4346V21.3462H22.5V7.5H8.65385Z\"/%3E%3C/svg%3E')\n                    no-repeat center / contain;\n                  transition: transform 0.3s ease;\n                }\n\n                .roll-link:hover::after {\n                  transform: translateX(-0.75rem);\n                }\n\n                @media (max-width: 767px) {\n                  .roll-link::after {\n                    margin-left: 1rem;\n                  }\n\n                  .roll-link:hover::after {\n                    transform: translateX(-0.5rem);\n                  }\n                }\n              " }} />
            </div>
          </div>
        </section>
        <section aria-label="Capabilities" className="aadl_wrapper">
          <div className="aadl_pin">
            <header className="aadl_header">
              <h2 className="aadl_heading" id="w-node-_3405ee4e-7a32-0157-66cc-3f9eb8e587d1-b8e587ce">
                {"\n                An engineering partner "}
                <br className="aadl_heading-br" />
                {"built to scale your digital products\n              "}
              </h2>
            </header>
            <div className="aadl_body">
              <div className="platform-lc_mobile-pillbar">
                <div className="platform-lc_mobile-darken" />
                <div className="platform-lc_mobile-pillrow">
                  <div className="platform-lc_mobile-pill is-active" data-mobile-pill="build">
                    {"Software"}
                  </div>
                  <div className="platform-lc_mobile-pill" data-mobile-pill="test">
                    {"Web & Mobile"}
                  </div>
                  <div className="platform-lc_mobile-pill" data-mobile-pill="deploy">
                    {"SaaS"}
                  </div>
                  <div className="platform-lc_mobile-pill" data-mobile-pill="monitor">
                    {"Cloud & DevOps"}
                  </div>
                  <div className="platform-lc_mobile-pill" data-mobile-pill="iterate">
                    {"Security"}
                  </div>
                  <div className="platform-lc_mobile-pill" data-mobile-pill="govern">
                    {"Consulting"}
                  </div>
                </div>
              </div>
              <div className="aadl_wheel-wrap">
                <div className="aadl_connector" />
                <div className="aadl_wheel">
                  <a aria-label="Software" className="aadl_node w-button is-active" data-i="0" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e587e6" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e587e6" href="#">
                    <div className="aadl_pill">
                      <div className="aadl_ico">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                          <path d="M6.27581 13.3133C7.45238 12.1367 8.11377 10.5392 8.11377 8.87537C8.11377 7.21156 7.45181 5.61401 6.27581 4.4374L1.83796 0C0.661964 1.17661 0 2.77416 0 4.43797C0 6.10178 0.661964 7.69934 1.83796 8.87594L6.27524 13.3133H6.27581Z" fill="#7FC8FF" />
                          <path d="M15.5626 13.7247C14.3866 12.5487 12.7885 11.8867 11.1253 11.8867C9.46215 11.8867 7.86407 12.5487 6.6875 13.7247L11.1253 18.1627C12.3013 19.3387 13.8994 20.0007 15.5632 20.0007C17.227 20.0007 18.8245 19.3387 20.001 18.1627L15.5632 13.7247H15.5626Z" fill="#7FC8FF" />
                          <path d="M1.84635 18.1509C3.02292 19.3269 4.62043 19.9889 6.28419 19.9889V13.7129H0.0078125C0.00838365 15.3767 0.669777 16.9743 1.84635 18.1509Z" fill="#7FC8FF" />
                          <path d="M17.2747 7.16224C16.0981 5.9862 14.5006 5.32365 12.8363 5.32422C11.1725 5.32422 9.57501 5.9862 8.39844 7.16281L12.8363 11.6008L17.2747 7.16224Z" fill="#7FC8FF" />
                        </svg>
                      </div>
                      <div className="aadl_pill-text">
                        {"Software"}
                      </div>
                    </div>
                    {" "}
                  </a>
                  <a aria-label="Web & Mobile" className="aadl_node w-button" data-i="1" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e587eb" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e587eb" href="#">
                    <div className="aadl_pill">
                      <div className="aadl_ico">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                          <path d="M6.27581 13.3133C7.45238 12.1367 8.11377 10.5392 8.11377 8.87537C8.11377 7.21156 7.45181 5.61401 6.27581 4.4374L1.83796 0C0.661964 1.17661 0 2.77416 0 4.43797C0 6.10178 0.661964 7.69934 1.83796 8.87594L6.27524 13.3133H6.27581Z" fill="#7FC8FF" />
                          <path d="M15.5626 13.7247C14.3866 12.5487 12.7885 11.8867 11.1253 11.8867C9.46215 11.8867 7.86407 12.5487 6.6875 13.7247L11.1253 18.1627C12.3013 19.3387 13.8994 20.0007 15.5632 20.0007C17.227 20.0007 18.8245 19.3387 20.001 18.1627L15.5632 13.7247H15.5626Z" fill="#7FC8FF" />
                          <path d="M1.84635 18.1509C3.02292 19.3269 4.62043 19.9889 6.28419 19.9889V13.7129H0.0078125C0.00838365 15.3767 0.669777 16.9743 1.84635 18.1509Z" fill="#7FC8FF" />
                          <path d="M17.2747 7.16224C16.0981 5.9862 14.5006 5.32365 12.8363 5.32422C11.1725 5.32422 9.57501 5.9862 8.39844 7.16281L12.8363 11.6008L17.2747 7.16224Z" fill="#7FC8FF" />
                        </svg>
                      </div>
                      <div className="aadl_pill-text">
                        {"Web & Mobile"}
                      </div>
                    </div>
                    {" "}
                  </a>
                  <a aria-label="SaaS" className="aadl_node w-button" data-i="2" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e587f0" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e587f0" href="#">
                    <div className="aadl_pill">
                      <div className="aadl_ico">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                          <path d="M6.27581 13.3133C7.45238 12.1367 8.11377 10.5392 8.11377 8.87537C8.11377 7.21156 7.45181 5.61401 6.27581 4.4374L1.83796 0C0.661964 1.17661 0 2.77416 0 4.43797C0 6.10178 0.661964 7.69934 1.83796 8.87594L6.27524 13.3133H6.27581Z" fill="#7FC8FF" />
                          <path d="M15.5626 13.7247C14.3866 12.5487 12.7885 11.8867 11.1253 11.8867C9.46215 11.8867 7.86407 12.5487 6.6875 13.7247L11.1253 18.1627C12.3013 19.3387 13.8994 20.0007 15.5632 20.0007C17.227 20.0007 18.8245 19.3387 20.001 18.1627L15.5632 13.7247H15.5626Z" fill="#7FC8FF" />
                          <path d="M1.84635 18.1509C3.02292 19.3269 4.62043 19.9889 6.28419 19.9889V13.7129H0.0078125C0.00838365 15.3767 0.669777 16.9743 1.84635 18.1509Z" fill="#7FC8FF" />
                          <path d="M17.2747 7.16224C16.0981 5.9862 14.5006 5.32365 12.8363 5.32422C11.1725 5.32422 9.57501 5.9862 8.39844 7.16281L12.8363 11.6008L17.2747 7.16224Z" fill="#7FC8FF" />
                        </svg>
                      </div>
                      <div className="aadl_pill-text">
                        {"SaaS"}
                      </div>
                    </div>
                    {" "}
                  </a>
                  <a aria-label="Cloud & DevOps" className="aadl_node w-button" data-i="3" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e587f5" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e587f5" href="#">
                    <div className="aadl_pill">
                      <div className="aadl_ico">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                          <path d="M6.27581 13.3133C7.45238 12.1367 8.11377 10.5392 8.11377 8.87537C8.11377 7.21156 7.45181 5.61401 6.27581 4.4374L1.83796 0C0.661964 1.17661 0 2.77416 0 4.43797C0 6.10178 0.661964 7.69934 1.83796 8.87594L6.27524 13.3133H6.27581Z" fill="#7FC8FF" />
                          <path d="M15.5626 13.7247C14.3866 12.5487 12.7885 11.8867 11.1253 11.8867C9.46215 11.8867 7.86407 12.5487 6.6875 13.7247L11.1253 18.1627C12.3013 19.3387 13.8994 20.0007 15.5632 20.0007C17.227 20.0007 18.8245 19.3387 20.001 18.1627L15.5632 13.7247H15.5626Z" fill="#7FC8FF" />
                          <path d="M1.84635 18.1509C3.02292 19.3269 4.62043 19.9889 6.28419 19.9889V13.7129H0.0078125C0.00838365 15.3767 0.669777 16.9743 1.84635 18.1509Z" fill="#7FC8FF" />
                          <path d="M17.2747 7.16224C16.0981 5.9862 14.5006 5.32365 12.8363 5.32422C11.1725 5.32422 9.57501 5.9862 8.39844 7.16281L12.8363 11.6008L17.2747 7.16224Z" fill="#7FC8FF" />
                        </svg>
                      </div>
                      <div className="aadl_pill-text">
                        {"Cloud & DevOps"}
                      </div>
                    </div>
                    {" "}
                  </a>
                  <a aria-label="Security" className="aadl_node w-button" data-i="4" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e587fa" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e587fa" href="#">
                    <div className="aadl_pill">
                      <div className="aadl_ico">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                          <path d="M6.27581 13.3133C7.45238 12.1367 8.11377 10.5392 8.11377 8.87537C8.11377 7.21156 7.45181 5.61401 6.27581 4.4374L1.83796 0C0.661964 1.17661 0 2.77416 0 4.43797C0 6.10178 0.661964 7.69934 1.83796 8.87594L6.27524 13.3133H6.27581Z" fill="#7FC8FF" />
                          <path d="M15.5626 13.7247C14.3866 12.5487 12.7885 11.8867 11.1253 11.8867C9.46215 11.8867 7.86407 12.5487 6.6875 13.7247L11.1253 18.1627C12.3013 19.3387 13.8994 20.0007 15.5632 20.0007C17.227 20.0007 18.8245 19.3387 20.001 18.1627L15.5632 13.7247H15.5626Z" fill="#7FC8FF" />
                          <path d="M1.84635 18.1509C3.02292 19.3269 4.62043 19.9889 6.28419 19.9889V13.7129H0.0078125C0.00838365 15.3767 0.669777 16.9743 1.84635 18.1509Z" fill="#7FC8FF" />
                          <path d="M17.2747 7.16224C16.0981 5.9862 14.5006 5.32365 12.8363 5.32422C11.1725 5.32422 9.57501 5.9862 8.39844 7.16281L12.8363 11.6008L17.2747 7.16224Z" fill="#7FC8FF" />
                        </svg>
                      </div>
                      <div className="aadl_pill-text">
                        {"Security"}
                      </div>
                    </div>
                    {" "}
                  </a>
                  <a aria-label="Consulting" className="aadl_node w-button" data-i="5" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e587ff" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e587ff" href="#">
                    <div className="aadl_pill">
                      <div className="aadl_ico">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                          <path d="M6.27581 13.3133C7.45238 12.1367 8.11377 10.5392 8.11377 8.87537C8.11377 7.21156 7.45181 5.61401 6.27581 4.4374L1.83796 0C0.661964 1.17661 0 2.77416 0 4.43797C0 6.10178 0.661964 7.69934 1.83796 8.87594L6.27524 13.3133H6.27581Z" fill="#7FC8FF" />
                          <path d="M15.5626 13.7247C14.3866 12.5487 12.7885 11.8867 11.1253 11.8867C9.46215 11.8867 7.86407 12.5487 6.6875 13.7247L11.1253 18.1627C12.3013 19.3387 13.8994 20.0007 15.5632 20.0007C17.227 20.0007 18.8245 19.3387 20.001 18.1627L15.5632 13.7247H15.5626Z" fill="#7FC8FF" />
                          <path d="M1.84635 18.1509C3.02292 19.3269 4.62043 19.9889 6.28419 19.9889V13.7129H0.0078125C0.00838365 15.3767 0.669777 16.9743 1.84635 18.1509Z" fill="#7FC8FF" />
                          <path d="M17.2747 7.16224C16.0981 5.9862 14.5006 5.32365 12.8363 5.32422C11.1725 5.32422 9.57501 5.9862 8.39844 7.16281L12.8363 11.6008L17.2747 7.16224Z" fill="#7FC8FF" />
                        </svg>
                      </div>
                      <div className="aadl_pill-text">
                        {"Consulting"}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="aadl_copy">
                <div className="aadl_mprog">
                  <div className="aadl_mprog-label">
                    {"01 / 06 \u2014 Software"}
                  </div>
                  <div className="aadl_mprog-dots">
                    <a className="aadl_mprog-dot w-button is-active" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e58809" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e58809" href="#">
                      {"1"}
                    </a>
                    <a className="aadl_mprog-dot w-button" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e5880b" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e5880b" href="#">
                      {"2"}
                    </a>
                    <a className="aadl_mprog-dot w-button" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e5880d" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e5880d" href="#">
                      {"3"}
                    </a>
                    <a className="aadl_mprog-dot w-button" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e5880f" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e5880f" href="#">
                      {"4"}
                    </a>
                    <a className="aadl_mprog-dot w-button" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e58811" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e58811" href="#">
                      {"5"}
                    </a>
                    <a className="aadl_mprog-dot w-button" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%223405ee4e-7a32-0157-66cc-3f9eb8e587ce%22%2C%22instanceId%22%3A%2288a794d7-9da4-2b63-566a-91eab1c458de%22%7D%5D" data-wf-element-id="3405ee4e-7a32-0157-66cc-3f9eb8e58813" data-wf-native-id-path="88a794d7-9da4-2b63-566a-91eab1c458de:3405ee4e-7a32-0157-66cc-3f9eb8e58813" href="#">
                      {"6"}
                    </a>
                  </div>
                </div>
                <article className="aadl_panel is-active">
                  <h2 className="aadl_stage">
                    {"Custom software"}
                  </h2>
                  <p className="aadl_lead">
                    {"Tailored applications built around your workflows in Laravel, Node.js, and TypeScript \u2014 engineered for maintainability and growth."}
                  </p>
                  <div className="aadl_feats">
                    <div className="text-rich-text-v2-in-section w-richtext">
                      <ul role="list">
                        <li>
                          <strong>
                            {"Built"}
                          </strong>
                          <em>
                            {" around your workflows, not a template"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Engineered"}
                          </strong>
                          <em>
                            {" for maintainability and growth"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Delivered"}
                          </strong>
                          <em>
                            {" in Laravel, Node.js, and TypeScript"}
                          </em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="aadl_chips">
                    <a className="button-v2-full-width w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-inline-block" data-wf--button--variant="secondary---arrow-small" href="/services">
                      <div className="no-wrap-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </article>
                <figure className="aadl_shot aadl_shot--inline is-active">
                  <img alt="Custom software delivery interface" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-custom-software.svg" />
                </figure>
                <article className="aadl_panel">
                  <h2 className="aadl_stage">
                    {"Web & mobile apps"}
                  </h2>
                  <p className="aadl_lead">
                    {"Fast, accessible web and cross-platform mobile apps built with React, Next.js, and React Native, backed by reliable APIs."}
                  </p>
                  <div className="aadl_feats">
                    <div className="text-rich-text-v2-in-section w-richtext">
                      <ul role="list">
                        <li>
                          <strong>
                            {"Ship"}
                          </strong>
                          <em>
                            {" fast, accessible web apps with React and Next.js"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Reach"}
                          </strong>
                          <em>
                            {" iOS and Android from one React Native codebase"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Back"}
                          </strong>
                          <em>
                            {" every app with reliable APIs"}
                          </em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="aadl_chips">
                    <a className="button-v2-full-width w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-inline-block" data-wf--button--variant="secondary---arrow-small" href="/services">
                      <div className="no-wrap-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </article>
                <figure className="aadl_shot aadl_shot--inline">
                  <img alt="Web and mobile application preview" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-web-mobile.svg" />
                </figure>
                <article className="aadl_panel">
                  <h2 className="aadl_stage">
                    {"SaaS development"}
                  </h2>
                  <p className="aadl_lead">
                    {"End-to-end SaaS builds with multi-tenancy, subscription billing, and scalable architecture, from MVP to mature platform."}
                  </p>
                  <div className="aadl_feats">
                    <div className="text-rich-text-v2-in-section w-richtext">
                      <ul role="list">
                        <li>
                          <strong>
                            {"Launch"}
                          </strong>
                          <em>
                            {" multi-tenant products with subscription billing"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Scale"}
                          </strong>
                          <em>
                            {" from MVP to mature platform"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Own"}
                          </strong>
                          <em>
                            {" the architecture end to end"}
                          </em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="aadl_chips">
                    <a className="button-v2-full-width w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-inline-block" data-wf--button--variant="secondary---arrow-small" href="/services">
                      <div className="no-wrap-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </article>
                <figure className="aadl_shot aadl_shot--inline">
                  <img alt="SaaS operations dashboard" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-saas.svg" />
                </figure>
                <article className="aadl_panel">
                  <h2 className="aadl_stage">
                    {"Cloud & DevOps"}
                  </h2>
                  <p className="aadl_lead">
                    {"Cloud architecture on AWS with Docker, Kubernetes, and Terraform, plus CI/CD pipelines that ship reliable releases."}
                  </p>
                  <div className="aadl_feats">
                    <div className="text-rich-text-v2-in-section w-richtext">
                      <ul role="list">
                        <li>
                          <strong>
                            {"Architect"}
                          </strong>
                          <em>
                            {" on AWS with Docker, Kubernetes, and Terraform"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Automate"}
                          </strong>
                          <em>
                            {" releases with CI/CD pipelines"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Ship"}
                          </strong>
                          <em>
                            {" safely, many times a day"}
                          </em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="aadl_chips">
                    <a className="button-v2-full-width w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-inline-block" data-wf--button--variant="secondary---arrow-small" href="/services">
                      <div className="no-wrap-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </article>
                <figure className="aadl_shot aadl_shot--inline">
                  <img alt="Cloud and DevOps pipeline" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-devops.svg" />
                </figure>
                <article className="aadl_panel">
                  <h2 className="aadl_stage">
                    {"Security & compliance"}
                  </h2>
                  <p className="aadl_lead">
                    {"Threat modeling, dependency scanning, secrets management, and least-privilege access built into every engagement."}
                  </p>
                  <div className="aadl_feats">
                    <div className="text-rich-text-v2-in-section w-richtext">
                      <ul role="list">
                        <li>
                          <strong>
                            {"Model"}
                          </strong>
                          <em>
                            {" threats before they reach production"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Scan"}
                          </strong>
                          <em>
                            {" dependencies and manage secrets"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Enforce"}
                          </strong>
                          <em>
                            {" least-privilege access by default"}
                          </em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="aadl_chips">
                    <a className="button-v2-full-width w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-inline-block" data-wf--button--variant="secondary---arrow-small" href="/services">
                      <div className="no-wrap-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </article>
                <figure className="aadl_shot aadl_shot--inline">
                  <img alt="Security and compliance posture" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-security.svg" />
                </figure>
                <article className="aadl_panel">
                  <h2 className="aadl_stage">
                    {"Technical consulting"}
                  </h2>
                  <p className="aadl_lead">
                    {"Architecture reviews, technology decisions, and delivery guidance from engineers who have built and run systems at scale."}
                  </p>
                  <div className="aadl_feats">
                    <div className="text-rich-text-v2-in-section w-richtext">
                      <ul role="list">
                        <li>
                          <strong>
                            {"Review"}
                          </strong>
                          <em>
                            {" architecture with senior engineers"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Decide"}
                          </strong>
                          <em>
                            {" on technology with confidence"}
                          </em>
                        </li>
                        <li>
                          <strong>
                            {"Deliver"}
                          </strong>
                          <em>
                            {" with guidance from teams who run systems at scale"}
                          </em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="aadl_chips">
                    <a className="button-v2-full-width w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-inline-block" data-wf--button--variant="secondary---arrow-small" href="/partners">
                      <div className="no-wrap-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-variant-90138831-d415-6164-aeb5-dc3aa35bfced w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </article>
                <figure className="aadl_shot aadl_shot--inline">
                  <img alt="Architecture and roadmap board" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-consulting.svg" />
                </figure>
              </div>
              <div className="aadl_visual">
                <figure className="aadl_shot">
                  <img alt="Custom software delivery interface" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-custom-software.svg" />
                </figure>
                <figure className="aadl_shot">
                  <img alt="Web and mobile application preview" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-web-mobile.svg" />
                </figure>
                <figure className="aadl_shot">
                  <img alt="SaaS operations dashboard" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-saas.svg" />
                </figure>
                <figure className="aadl_shot">
                  <img alt="Cloud and DevOps pipeline" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-devops.svg" />
                </figure>
                <figure className="aadl_shot">
                  <img alt="Security and compliance posture" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-security.svg" />
                </figure>
                <figure className="aadl_shot">
                  <img alt="Architecture and roadmap board" className="aadl_ill" loading="lazy" src="/assets/images/panels/ui-consulting.svg" />
                </figure>
              </div>
            </div>
          </div>
          <div className="hide w-embed w-script">
            <style dangerouslySetInnerHTML={{ __html: "\n              .aadl_wrapper {\n                --line: #1a2231;\n                --line-soft: rgba(140, 170, 255, 0.14);\n                --blue: #a6c8ff;\n                --blue-bright: #5f96ff;\n                --text: #e8edf5;\n                --muted: #8b96a8;\n                --muted-2: #5b6678;\n                --D: 54vh;\n                --edge: 9.375rem;\n                --head-h: clamp(10.625rem, 20vh, 11.5625rem);\n                /* Single easing curve, matching the prototype \u2014 smooth in/out, no snap. */\n                --ease-out: cubic-bezier(0.6, 0, 0.15, 1);\n                --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);\n                --dur: 1.1s;\n                scroll-behavior: smooth;\n              }\n\n              .aadl_wrapper * {\n                box-sizing: border-box;\n              }\n\n              .aadl_wrapper button {\n                background: none;\n                border: none;\n                font: inherit;\n                padding: 0;\n                margin: 0;\n              }\n\n              .aadl_wrapper a {\n                text-decoration: none;\n              }\n\n              .aadl_wrapper .aadl_node {\n                font-size: 0;\n              }\n\n              /* ---------- the wheel ---------- */\n              .aadl_wrapper .aadl_wheel {\n                transform: rotate(var(--rot, 0deg));\n                transition: transform var(--dur) var(--ease-out);\n              }\n\n              .aadl_wrapper .aadl_wheel::before {\n                content: \"\";\n                position: absolute;\n                inset: 0;\n                border-radius: 50%;\n                padding: 1px;\n                background: linear-gradient(\n                  115deg,\n                  rgba(127, 200, 255, 0.95),\n                  rgba(127, 200, 255, 0.2) 35%,\n                  rgba(80, 125, 210, 0.18) 60%,\n                  rgba(127, 200, 255, 0.45) 100%\n                );\n                -webkit-mask:\n                  linear-gradient(#fff 0 0) content-box,\n                  linear-gradient(#fff 0 0);\n                -webkit-mask-composite: xor;\n                mask-composite: exclude;\n                filter: drop-shadow(0 0 5px rgba(127, 200, 255, 0.55)) drop-shadow(0 0 14px rgba(95, 155, 245, 0.3));\n                transform: rotate(calc(-1 * var(--rot, 0deg)));\n                transition: transform var(--dur) var(--ease-out);\n                pointer-events: none;\n              }\n\n              .aadl_wrapper .aadl_wheel::after {\n                content: \"\";\n                position: absolute;\n                inset: 6vh;\n                border-radius: 50%;\n                padding: 1px;\n                background: linear-gradient(\n                  140deg,\n                  rgba(127, 200, 255, 0.45),\n                  rgba(127, 200, 255, 0.06) 45%,\n                  rgba(80, 125, 210, 0.14) 75%,\n                  rgba(127, 200, 255, 0.22) 100%\n                );\n                -webkit-mask:\n                  linear-gradient(#fff 0 0) content-box,\n                  linear-gradient(#fff 0 0);\n                -webkit-mask-composite: xor;\n                mask-composite: exclude;\n                filter: drop-shadow(0 0 5px rgba(127, 200, 255, 0.4)) drop-shadow(0 0 12px rgba(95, 155, 245, 0.22));\n                transform: rotate(calc(-1 * var(--rot, 0deg)));\n                transition: transform var(--dur) var(--ease-out);\n                pointer-events: none;\n              }\n\n              /* node angles around the wheel */\n              .aadl_wrapper .aadl_wheel .aadl_node:nth-child(1) {\n                --a: 0deg;\n              }\n\n              .aadl_wrapper .aadl_wheel .aadl_node:nth-child(2) {\n                --a: 44deg;\n              }\n\n              .aadl_wrapper .aadl_wheel .aadl_node:nth-child(3) {\n                --a: 88deg;\n              }\n\n              .aadl_wrapper .aadl_wheel .aadl_node:nth-child(4) {\n                --a: 132deg;\n              }\n\n              .aadl_wrapper .aadl_wheel .aadl_node:nth-child(5) {\n                --a: 176deg;\n              }\n\n              .aadl_wrapper .aadl_wheel .aadl_node:nth-child(6) {\n                --a: 220deg;\n              }\n\n              .aadl_wrapper .aadl_node {\n                transform: rotate(var(--a)) translateX(calc(var(--D) / 2));\n              }\n\n              /* pill counter-rotates so its label always stays upright */\n              .aadl_wrapper .aadl_pill {\n                transform: translate(-50%, -50%) rotate(calc(-1 * var(--a) - var(--rot, 0deg)));\n                transition:\n                  transform var(--dur) var(--ease-out),\n                  padding 0.7s var(--ease-out),\n                  width 0.7s var(--ease-out),\n                  height 0.7s var(--ease-out),\n                  background 0.55s var(--ease-out) 0.1s,\n                  border-color 0.55s var(--ease-out) 0.1s,\n                  box-shadow 0.75s var(--ease-out) 0.15s,\n                  color 0.4s var(--ease-out);\n              }\n\n              .aadl_wrapper .aadl_pill-text {\n                transition:\n                  max-width 0.6s var(--ease-out),\n                  opacity 0.25s var(--ease-out);\n                max-width: 6.25rem;\n                overflow: hidden;\n              }\n\n              .aadl_wrapper .aadl_ico {\n                display: inline-flex;\n                max-width: 0;\n                opacity: 0;\n                overflow: hidden;\n                transition:\n                  max-width 0.5s var(--ease-out),\n                  opacity 0.3s var(--ease-out);\n              }\n\n              .aadl_wrapper .aadl_ico svg {\n                width: 1.25rem;\n                height: 1.25rem;\n                flex: none;\n                transform: scale(0.4);\n                transition: transform 0.55s var(--ease-out);\n              }\n\n              .aadl_wrapper .aadl_node:hover .aadl_pill {\n                color: var(--text);\n                border-color: rgba(140, 170, 255, 0.4);\n              }\n\n              .aadl_wrapper .aadl_node:focus-visible .aadl_pill {\n                outline: 2px solid var(--blue-bright);\n                outline-offset: 3px;\n              }\n\n              .aadl_wrapper .aadl_pill::after {\n                content: \"\";\n                position: absolute;\n                inset: -1px;\n                border-radius: 999px;\n                padding: 1px;\n                background: linear-gradient(\n                  135deg,\n                  #7fc8ff,\n                  rgba(127, 200, 255, 0.1) 45%,\n                  rgba(127, 200, 255, 0.06) 62%,\n                  rgba(127, 200, 255, 0.55) 100%\n                );\n                -webkit-mask:\n                  linear-gradient(#fff 0 0) content-box,\n                  linear-gradient(#fff 0 0);\n                -webkit-mask-composite: xor;\n                mask-composite: exclude;\n                opacity: 0;\n                transition: opacity 0.5s var(--ease-out) 0.15s;\n                pointer-events: none;\n              }\n\n              /* active stage collapses into the icon chip \u2014 its name moves to the panel header */\n              .aadl_wrapper .aadl_node.is-active .aadl_pill {\n                width: 3rem;\n                height: 3rem;\n                padding: 0;\n                background: radial-gradient(circle at 35% 30%, #16233a, #0b111d);\n                border-color: transparent;\n                pointer-events: none;\n              }\n\n              .aadl_wrapper .aadl_node.is-active .aadl_pill::after {\n                opacity: 1;\n              }\n\n              .aadl_wrapper .aadl_node.is-active .aadl_pill-text {\n                max-width: 0;\n                opacity: 0;\n              }\n\n              .aadl_wrapper .aadl_node.is-active .aadl_ico {\n                max-width: 1.25rem;\n                opacity: 1;\n                transition-delay: 0.3s;\n              }\n\n              .aadl_wrapper .aadl_node.is-active .aadl_ico svg {\n                transform: scale(1);\n                transition-delay: 0.3s;\n              }\n\n              /* connector: active chip -> panel, redrawn on every stage change */\n              .aadl_wrapper .aadl_connector {\n                animation: aadl-connector-draw 0.35s var(--ease-out) 1.1s backwards;\n              }\n\n              @keyframes aadl-connector-draw {\n                from {\n                  transform: translateY(-50%) scaleX(0);\n                  opacity: 0;\n                }\n\n                to {\n                  transform: translateY(-50%) scaleX(1);\n                  opacity: 1;\n                }\n              }\n\n              /* ---------- copy column: vertical carousel ---------- */\n              /* Inactive panels park below (later stages) or above (earlier stages) so the\n   enter/exit direction always follows the scroll direction:\n   scroll DOWN -> panels move UP;  scroll UP -> panels move DOWN. */\n              .aadl_wrapper .aadl_panel {\n                opacity: 0;\n                transform: translateY(2.75rem);\n                /* default: parked below */\n                pointer-events: none;\n                transition:\n                  opacity 0.25s var(--ease-out),\n                  transform 0.25s var(--ease-out);\n              }\n\n              .aadl_wrapper .aadl_panel.is-above {\n                transform: translateY(-2.75rem);\n              }\n\n              /* earlier stage: parked above */\n              .aadl_wrapper .aadl_panel.is-active {\n                opacity: 1;\n                transform: translateY(0);\n                pointer-events: auto;\n                transition:\n                  opacity 0.5s var(--ease-out) 0.075s,\n                  transform 0.5s var(--ease-out) 0.075s;\n              }\n\n              /* ---------- visual column: same carousel (centered on top:50%) ---------- */\n              .aadl_wrapper .aadl_shot {\n                opacity: 0;\n                transform: translateY(calc(-50% + 3rem)) scale(0.995);\n                /* below */\n                pointer-events: none;\n                transition:\n                  opacity 0.25s var(--ease-out),\n                  transform 0.25s var(--ease-out);\n              }\n\n              .aadl_wrapper .aadl_shot.is-above {\n                transform: translateY(calc(-50% - 3rem)) scale(0.995);\n              }\n\n              /* above */\n              .aadl_wrapper .aadl_shot.is-active {\n                opacity: 1;\n                transform: translateY(-50%) scale(1);\n                pointer-events: auto;\n                transition:\n                  opacity 0.55s var(--ease-out) 0.125s,\n                  transform 0.55s var(--ease-out) 0.125s;\n              }\n\n              .aadl_wrapper .aadl_shot::before {\n                content: \"\";\n                position: absolute;\n                inset: 0;\n                border-radius: inherit;\n                padding: 1px;\n                background: linear-gradient(\n                  180deg,\n                  rgba(127, 200, 255, 0.9) 0%,\n                  rgba(127, 200, 255, 0.25) 30%,\n                  rgba(90, 140, 220, 0.16) 68%,\n                  rgba(127, 200, 255, 0.5) 100%\n                );\n                -webkit-mask:\n                  linear-gradient(#fff 0 0) content-box,\n                  linear-gradient(#fff 0 0);\n                -webkit-mask-composite: xor;\n                mask-composite: exclude;\n                filter: drop-shadow(0 0 5px rgba(127, 200, 255, 0.35)) drop-shadow(0 0 14px rgba(95, 155, 245, 0.2));\n                pointer-events: none;\n              }\n\n              /* feature list + chips (kept for compatibility; harmless if unused) */\n              .aadl_wrapper .aadl_feats-item::before {\n                content: \"\";\n                position: absolute;\n                left: 2px;\n                top: 0.52em;\n                width: 6px;\n                height: 6px;\n                background: var(--blue);\n                border-radius: 50%;\n              }\n\n              .aadl_wrapper .aadl_feats-item b {\n                color: var(--text);\n                font-weight: 200;\n              }\n\n              .aadl_wrapper .aadl_chip {\n                transition:\n                  border-color 0.2s,\n                  background 0.2s;\n              }\n\n              .aadl_wrapper .aadl_chip:hover {\n                border-color: rgba(140, 170, 255, 0.45);\n                background: rgba(95, 150, 255, 0.06);\n              }\n\n              .aadl_wrapper .aadl_chip:focus-visible {\n                outline: 2px solid var(--blue-bright);\n                outline-offset: 2px;\n              }\n\n              /* inline shot \u2014 hidden by default, shown only on tablet/mobile */\n              .aadl_shot--inline {\n                display: none !important;\n              }\n\n              /* ---------- heading: allow wrap on all widths ----------\n   Designer's .aadl_heading uses `white-space:nowrap`, which overflows below\n   ~1400px. This lets it wrap so it never breaks out of the container. */\n              .aadl_wrapper .aadl_heading {\n                white-space: normal !important;\n              }\n\n              /* Two-line title on large screens (1440px+): the script injects a <br> after\n   \"Accelerating the\"; this toggles it \u2014 off (single flow) below 1440, on above. */\n              .aadl_wrapper .aadl_heading .aadl_heading-br {\n                display: none;\n              }\n\n              @media (min-width: 1440px) {\n                .aadl_wrapper .aadl_heading .aadl_heading-br {\n                  display: inline;\n                }\n              }\n\n              /* ---------- MOBILE / TABLET (max 991px) ---------- */\n              @media (max-width: 991px) {\n                .aadl_wrapper {\n                  height: auto !important;\n                  overflow: visible !important;\n                }\n\n                .aadl_wrapper .aadl_pin {\n                  position: static !important;\n                  height: auto !important;\n                  min-height: 0 !important;\n                  overflow: visible !important;\n                }\n\n                .aadl_wrapper .aadl_pin .aadl_header {\n                  position: static !important;\n                  display: block !important;\n                  grid-template-columns: none !important;\n                  padding: 2rem 1.5rem 1.25rem !important;\n                  pointer-events: auto !important;\n                }\n\n                .aadl_wrapper .aadl_pin .aadl_header .aadl_heading {\n                  text-align: left !important;\n                  justify-self: start !important;\n                  align-self: start !important;\n                  margin-left: 0 !important;\n                  margin-right: 0 !important;\n                  width: 100% !important;\n                  max-width: none !important;\n                  white-space: normal !important;\n                }\n\n                .aadl_wrapper .aadl_body {\n                  position: static !important;\n                  display: block !important;\n                  grid-template-columns: none !important;\n                  padding: 0 !important;\n                  top: auto !important;\n                }\n\n                .aadl_wrapper .aadl_wheel-wrap,\n                .aadl_wrapper .aadl_wheel-wrap .aadl_connector,\n                .aadl_wrapper .aadl_visual,\n                .aadl_wrapper .aadl_mprog {\n                  display: none !important;\n                }\n\n                /* pillbar: strip Designer's blue borders */\n                .platform-lc_mobile-pill {\n                  outline: none !important;\n                  cursor: pointer;\n                }\n\n                /* pillbar animates in/out as you scroll into / out of the section (the\n     .aadl-pill-hidden class is toggled by the script via an IntersectionObserver). */\n                .platform-lc_mobile-pillbar {\n                  transition:\n                    transform 0.45s var(--ease-out),\n                    opacity 0.35s var(--ease-out) !important;\n                  will-change: transform, opacity;\n                }\n\n                .platform-lc_mobile-pillbar.aadl-pill-hidden {\n                  transform: translateY(-105%) !important;\n                  opacity: 0 !important;\n                  pointer-events: none !important;\n                }\n\n                .aadl_wrapper .aadl_copy {\n                  position: static !important;\n                  display: block !important;\n                  height: auto !important;\n                  padding: 3rem 1.5rem 3rem !important;\n                }\n\n                /* Panel: dimmed by default, full opacity when active. `padding`/`gap` are left\n     to the Designer so they stay editable per breakpoint. */\n                .aadl_wrapper .aadl_panel {\n                  position: static !important;\n                  display: flex !important;\n                  transform: none !important;\n                  pointer-events: auto !important;\n                  inset: auto !important;\n                  justify-content: flex-start !important;\n                  scroll-margin-top: calc(var(--aadl-pill-h, 4.5rem) + 1.75rem) !important;\n                  opacity: 0.25 !important;\n                  transition: opacity 0.25s var(--ease-in-out) !important;\n                  cursor: pointer !important;\n                }\n\n                .aadl_wrapper .aadl_panel.is-active {\n                  opacity: 1 !important;\n                }\n\n                /* Section numbering (01, 02 \u2026) removed on tablet and below. */\n                .aadl_wrapper .aadl_panel::before {\n                  content: none !important;\n                }\n\n                .aadl_wrapper .aadl_stage {\n                  line-height: 1.05 !important;\n                  margin: 0 !important;\n                }\n\n                .aadl_wrapper .aadl_lead {\n                  max-width: none !important;\n                  color: var(--_v-2-colors---c-white--60-p, rgba(255, 255, 255, 0.6)) !important;\n                }\n\n                .aadl_wrapper .aadl_feats {\n                  display: none !important;\n                }\n\n                .aadl_wrapper .aadl_chips {\n                  display: flex !important;\n                  flex-wrap: wrap !important;\n                  column-gap: 0.5rem !important;\n                  row-gap: 0.5rem !important;\n                }\n\n                .aadl_wrapper .aadl_chip {\n                  font-size: 0.8125rem !important;\n                  padding: 0.625rem 1rem !important;\n                }\n\n                /* Inline shot (tablet + mobile): keep the SAME card frame as desktop \u2014\n     background, gradient border (::before), padding, radius and shadow are all\n     inherited from the base .aadl_shot rules. We only reflow it into the column,\n     force its height to follow the image (aspect-ratio:auto \u2192 no letterbox and\n     no empty space on the right), add spacing below, and dim the inactive ones.\n     position:relative keeps the ::before gradient border bound to this figure. */\n                .aadl_shot--inline {\n                  display: block !important;\n                  position: relative !important;\n                  transform: none !important;\n                  inset: auto !important;\n                  top: auto !important;\n                  right: auto !important;\n                  width: 100% !important;\n                  max-height: none !important;\n                  aspect-ratio: auto !important;\n                  margin: 2rem 0 2.5rem !important;\n                  opacity: 0.25 !important;\n                  transition: opacity 0.25s var(--ease-in-out) !important;\n                  pointer-events: auto !important;\n                  cursor: pointer;\n                }\n\n                .aadl_shot--inline.is-active {\n                  opacity: 1 !important;\n                }\n\n                .aadl_shot--inline .aadl_ill,\n                .aadl_shot--inline img {\n                  width: 100% !important;\n                  height: auto !important;\n                  object-fit: contain !important;\n                  display: block !important;\n                  margin: 0 !important;\n                }\n              }\n\n              /* ---------- SHORT / NARROW DESKTOP \u2014 keep the pinned design, stop the overlap ----------\n   The pinned layout puts the section title in an absolutely-positioned header\n   that reserves a FIXED height (--head-h). On narrow desktops the big title\n   wraps to two lines and grows taller than that reserve, so it overlapped the\n   stage copy; on short viewports the vertically-centred copy also overflowed and\n   the buttons got cut off.\n   Fix: on narrow (\u22641500px) OR short (\u2264860px) desktops, switch the pin to a flex\n   column. The header then takes its TRUE height (wraps freely, never overlaps)\n   and the body fills whatever height is left. Wide + tall desktops are untouched,\n   so the original design is unchanged where it already fits. */\n              /* ---------- DESKTOP (\u2265992px): make the pinned header self-sizing ----------\n   The pinned layout reserved a FIXED header height (--head-h). When the title\n   wraps to two lines (narrow screens, or the forced 1440px+ break) it grows\n   taller than that reserve and overlapped the stage copy. Turning the pin into\n   a flex column lets the header take its TRUE height and the body fill the rest\n   \u2014 no overlap at any width or height. */\n              @media (min-width: 992px) {\n                .aadl_wrapper .aadl_pin {\n                  display: flex !important;\n                  flex-direction: column !important;\n                }\n\n                .aadl_wrapper .aadl_pin .aadl_header {\n                  position: relative !important;\n                  inset: auto !important;\n                  top: auto !important;\n                  flex: 0 0 auto !important;\n                }\n\n                .aadl_wrapper .aadl_body {\n                  position: relative !important;\n                  inset: auto !important;\n                  top: auto !important;\n                  flex: 1 1 auto !important;\n                  min-height: 0 !important;\n                }\n\n                /* the visual never forces extra height */\n                .aadl_wrapper .aadl_shot {\n                  max-height: 80vh !important;\n                }\n              }\n\n              /* On genuinely short viewports also trim the header padding + section title a\n   touch and cap the visual, so the stage copy and its buttons fit without being\n   clipped. This is the only spot that touches a font-size (title only, never the\n   stage/lead) \u2014 delete this block if you'd rather size the title from Webflow. */\n              @media (min-width: 992px) and (max-height: 820px) {\n                .aadl_wrapper .aadl_pin .aadl_header {\n                  padding-top: 1.25rem !important;\n                  padding-bottom: 0 !important;\n                }\n\n                .aadl_wrapper .aadl_heading {\n                  font-size: clamp(1.6rem, 3vw, 2.5rem) !important;\n                  line-height: 1.12 !important;\n                }\n\n                .aadl_wrapper .aadl_shot {\n                  max-height: 64vh !important;\n                }\n              }\n\n              @media (prefers-reduced-motion: reduce) {\n                .aadl_wrapper {\n                  scroll-behavior: auto;\n                }\n\n                .aadl_wrapper .aadl_connector {\n                  animation: none;\n                }\n\n                .aadl_wrapper .aadl_wheel,\n                .aadl_wrapper .aadl_pill,\n                .aadl_wrapper .aadl_panel,\n                .aadl_wrapper .aadl_shot,\n                .aadl_wrapper .aadl_ico,\n                .aadl_wrapper .aadl_wheel::before,\n                .aadl_wrapper .aadl_wheel::after {\n                  transition: none;\n                }\n\n                .aadl_shot--inline {\n                  transition: none !important;\n                }\n              }\n            " }} />
            <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "(function () {\n                \"use strict\";\n\n                var STAGES = [\"Software\", \"Web & Mobile\", \"SaaS\", \"Cloud & DevOps\", \"Security\", \"Consulting\"];\n                var STEP = 44; // degrees between wheel nodes\n                var MOBILE_MQ = \"(max-width: 991px)\";\n                var MOBILE_LOCK_MS = 1500;\n\n                var sec = document.querySelector(\".aadl_wrapper\");\n                if (!sec) return;\n                // Guard against double-initialisation (e.g. the embed accidentally added\n                // twice). Two copies of this script would attach two sets of listeners and\n                // two IntersectionObservers to the same nodes, which is what makes the\n                // buttons/panels flicker as they enter.\n                if (sec.getAttribute(\"data-aadl-init\")) return;\n                sec.setAttribute(\"data-aadl-init\", \"1\");\n\n                var wheel = sec.querySelector(\".aadl_wheel\");\n                var nodes = [].slice.call(sec.querySelectorAll(\".aadl_node\"));\n                var panels = [].slice.call(sec.querySelectorAll(\".aadl_panel\"));\n                var shots = [].slice.call(sec.querySelectorAll(\".aadl_visual .aadl_shot\")); // desktop crossfade (6)\n                var mdots = [].slice.call(sec.querySelectorAll(\".aadl_mprog-dot\"));\n                var mlabel = sec.querySelector(\".aadl_mprog-label\");\n                var conn = sec.querySelector(\".aadl_connector\");\n                var pillbar = document.querySelector(\".platform-lc_mobile-pillbar\");\n                var pillrow = document.querySelector(\".platform-lc_mobile-pillrow\");\n                var mpills = [].slice.call(document.querySelectorAll(\".platform-lc_mobile-pill\"));\n                var reduce = matchMedia(\"(prefers-reduced-motion: reduce)\");\n                var mq = matchMedia(MOBILE_MQ);\n                var current = -1;\n                var inlineShots = [];\n\n                // --- Stage lock ---\n                // When the user taps a pill/panel we freeze the observer until the smooth\n                // scroll settles, so the IntersectionObserver can't briefly reassign the\n                // stage to whatever panel still fills the viewport mid-scroll (the\n                // \"flashes to the previous pill first\" bug).\n                var lockedIndex = null,\n                  lockTimer = null;\n                function lockStage(i, ms) {\n                  lockedIndex = i;\n                  if (lockTimer) clearTimeout(lockTimer);\n                  lockTimer = setTimeout(releaseStageLock, ms || MOBILE_LOCK_MS);\n                }\n                function releaseStageLock() {\n                  if (lockTimer) {\n                    clearTimeout(lockTimer);\n                    lockTimer = null;\n                  }\n                  lockedIndex = null;\n                }\n\n                // Wheel icon shown inside the active pill. The .aadl_ico elements built in the\n                // Webflow Designer are empty placeholders, so inject the SVG here (only when\n                // empty, so it won't double up if the markup already contains it).\n                var WHEEL_ICON =\n                  '<svg viewBox=\"0 0 20 20\" fill=\"none\" aria-hidden=\"true\"><path d=\"M6.27581 13.3133C7.45238 12.1367 8.11377 10.5392 8.11377 8.87537C8.11377 7.21156 7.45181 5.61401 6.27581 4.4374L1.83796 0C0.661964 1.17661 0 2.77416 0 4.43797C0 6.10178 0.661964 7.69934 1.83796 8.87594L6.27524 13.3133H6.27581Z\" fill=\"#7FC8FF\"></path><path d=\"M15.5626 13.7247C14.3866 12.5487 12.7885 11.8867 11.1253 11.8867C9.46215 11.8867 7.86407 12.5487 6.6875 13.7247L11.1253 18.1627C12.3013 19.3387 13.8994 20.0007 15.5632 20.0007C17.227 20.0007 18.8245 19.3387 20.001 18.1627L15.5632 13.7247H15.5626Z\" fill=\"#7FC8FF\"></path><path d=\"M1.84635 18.1509C3.02292 19.3269 4.62043 19.9889 6.28419 19.9889V13.7129H0.0078125C0.00838365 15.3767 0.669777 16.9743 1.84635 18.1509Z\" fill=\"#7FC8FF\"></path><path d=\"M17.2747 7.16224C16.0981 5.9862 14.5006 5.32365 12.8363 5.32422C11.1725 5.32422 9.57501 5.9862 8.39844 7.16281L12.8363 11.6008L17.2747 7.16224Z\" fill=\"#7FC8FF\"></path></svg>';\n                [].slice.call(sec.querySelectorAll(\".aadl_ico\")).forEach(function (el) {\n                  if (!el.querySelector(\"svg\")) el.innerHTML = WHEEL_ICON;\n                });\n\n                // Two-line title on large screens (1440px+). Inject a <br> after the first two\n                // words (\"Accelerating the\"); CSS shows it only at 1440px+ and hides it below.\n                var heading = sec.querySelector(\".aadl_heading\");\n                if (heading && !heading.querySelector(\".aadl_heading-br\")) {\n                  var htext = heading.textContent.replace(/\\s+/g, \" \").trim();\n                  var hparts = htext.match(/^(\\S+\\s+\\S+)\\s+([\\s\\S]+)$/); // first two words | the rest\n                  if (hparts) heading.innerHTML = hparts[1] + ' <br class=\"aadl_heading-br\">' + hparts[2];\n                }\n\n                // Measure the mobile pillbar so panels can leave room for it when a pill is\n                // tapped (scroll-margin-top), and refresh on resize.\n                function measurePillbar() {\n                  if (pillbar) {\n                    var h = pillbar.offsetHeight;\n                    if (h) sec.style.setProperty(\"--aadl-pill-h\", h + \"px\");\n                  }\n                }\n                measurePillbar();\n                addEventListener(\"resize\", measurePillbar);\n\n                // Fill empty pill labels from STAGES (Designer text wins when present) and\n                // strip the stray \"Button Text\" node Webflow injects into link elements.\n                nodes.forEach(function (n, i) {\n                  [].slice.call(n.childNodes).forEach(function (c) {\n                    if (c.nodeType === 3) n.removeChild(c);\n                  });\n                  var pt = n.querySelector(\".aadl_pill-text\");\n                  if (pt && !pt.textContent.trim()) pt.textContent = STAGES[i] || \"\";\n                });\n\n                // Inline shots power the stacked (tablet + mobile) layout. If the Webflow\n                // build already contains .aadl_shot--inline figures (one per panel), use them\n                // as-is. Only when none are present do we clone each desktop shot in under its\n                // panel. This prevents duplicated images when the inline shots are part of the\n                // markup you built in Webflow.\n                var existingInline = [].slice.call(sec.querySelectorAll(\".aadl_shot--inline\"));\n                if (existingInline.length === panels.length) {\n                  inlineShots = existingInline;\n                  inlineShots.forEach(function (s) {\n                    if (s) s.classList.remove(\"is-above\", \"is-below\");\n                  });\n                } else {\n                  panels.forEach(function (p, i) {\n                    if (shots[i] && p.parentNode) {\n                      var clone = shots[i].cloneNode(true);\n                      clone.classList.add(\"aadl_shot--inline\");\n                      clone.classList.remove(\"is-active\", \"is-above\", \"is-below\");\n                      p.parentNode.insertBefore(clone, p.nextSibling);\n                      inlineShots.push(clone);\n                    } else {\n                      inlineShots.push(null);\n                    }\n                  });\n                }\n\n                // --- Active state: desktop (drives wheel rotation + panel/shot carousel) ---\n                function setActiveDesktop(i) {\n                  if (i === current) return;\n                  current = i;\n                  if (wheel) wheel.style.setProperty(\"--rot\", -i * STEP + \"deg\");\n                  if (!reduce.matches && conn) {\n                    conn.style.animation = \"none\";\n                    void conn.offsetWidth;\n                    conn.style.animation = \"\";\n                  }\n                  nodes.forEach(function (n, idx) {\n                    n.classList.toggle(\"is-active\", idx === i);\n                  });\n                  // Carousel direction: earlier stages park above, later ones below, so the\n                  // enter/exit motion always matches the scroll direction.\n                  panels.forEach(function (el, idx) {\n                    el.classList.toggle(\"is-active\", idx === i);\n                    el.classList.toggle(\"is-above\", idx < i);\n                    el.classList.toggle(\"is-below\", idx > i);\n                  });\n                  shots.forEach(function (el, idx) {\n                    el.classList.toggle(\"is-active\", idx === i);\n                    el.classList.toggle(\"is-above\", idx < i);\n                    el.classList.toggle(\"is-below\", idx > i);\n                  });\n                  mdots.forEach(function (d, idx) {\n                    d.classList.toggle(\"is-active\", idx === i);\n                  });\n                  if (mlabel) mlabel.textContent = String(i + 1).padStart(2, \"0\") + \" / 06 \u2014 \" + STAGES[i];\n                }\n\n                // --- Active state: mobile (pills + inline shots) ---\n                function setActiveMobile(i) {\n                  if (i === current) return;\n                  current = i;\n                  mpills.forEach(function (p, idx) {\n                    p.classList.toggle(\"is-active\", idx === i);\n                  });\n                  panels.forEach(function (p, idx) {\n                    p.classList.toggle(\"is-active\", idx === i);\n                  });\n                  inlineShots.forEach(function (s, idx) {\n                    if (s) s.classList.toggle(\"is-active\", idx === i);\n                  });\n                  // Keep the active pill centered in the horizontally scrolling pillbar.\n                  if (pillrow) {\n                    var pill = mpills[i];\n                    if (pill) {\n                      pillrow.scrollTo({\n                        left: Math.max(0, pill.offsetLeft - pillrow.clientWidth / 2 + pill.offsetWidth / 2),\n                        behavior: reduce.matches ? \"auto\" : \"smooth\",\n                      });\n                    }\n                  }\n                }\n\n                // --- Desktop scroll handler: map scroll progress through the pinned section to a stage ---\n                function onScrollDesktop() {\n                  var total = sec.offsetHeight - innerHeight;\n                  if (total <= 0) {\n                    setActiveDesktop(0);\n                    return;\n                  }\n                  var p = Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / total));\n                  setActiveDesktop(Math.min(5, Math.floor(p * 6)));\n                }\n\n                // --- Jump handlers ---\n                function jumpDesktop(i) {\n                  var total = sec.offsetHeight - innerHeight;\n                  var top = sec.getBoundingClientRect().top + window.scrollY + total * ((i + 0.5) / 6);\n                  window.scrollTo({ top: top, behavior: reduce.matches ? \"auto\" : \"smooth\" });\n                }\n                // How much vertical space the sticky/fixed pillbar occupies at the top of the\n                // viewport (its sticky `top` offset + its own height). 0 if it isn't pinned.\n                function pillbarOffset() {\n                  if (!pillbar) return 0;\n                  var cs = getComputedStyle(pillbar);\n                  if (cs.position !== \"sticky\" && cs.position !== \"fixed\") return 0;\n                  var t = parseFloat(cs.top);\n                  if (isNaN(t)) t = 0;\n                  return t + pillbar.offsetHeight;\n                }\n                function jumpMobile(i) {\n                  if (i < 0 || i >= panels.length || !panels[i]) return;\n                  lockStage(i, MOBILE_LOCK_MS); // lock first so no observer flips it back mid-scroll\n                  setActiveMobile(i); // respond instantly so the tap visibly lands\n                  // Land the panel top just below the pillbar so .aadl_stage isn't covered.\n                  var y = panels[i].getBoundingClientRect().top + window.scrollY - pillbarOffset() - 24;\n                  window.scrollTo({ top: Math.max(0, y), behavior: reduce.matches ? \"auto\" : \"smooth\" });\n                }\n                function jumpUniversal(i) {\n                  if (mq.matches) jumpMobile(i);\n                  else jumpDesktop(i);\n                }\n\n                // Panels are only tappable on tablet and below (\u2264991px); on desktop the wheel\n                // drives stage changes and clicking a panel does nothing.\n                var mqPanelClick = matchMedia(\"(max-width: 991px)\");\n\n                // --- Wire clicks ---\n                nodes.forEach(function (n, idx) {\n                  n.addEventListener(\"click\", function (e) {\n                    e.preventDefault();\n                    jumpUniversal(idx);\n                  });\n                });\n                mdots.forEach(function (d, idx) {\n                  d.addEventListener(\"click\", function (e) {\n                    e.preventDefault();\n                    jumpUniversal(idx);\n                  });\n                });\n                if (pillrow) {\n                  pillrow.addEventListener(\"click\", function (e) {\n                    var pill = e.target.closest(\".platform-lc_mobile-pill\");\n                    if (!pill) return;\n                    var idx = mpills.indexOf(pill);\n                    if (idx > -1) {\n                      e.preventDefault();\n                      e.stopPropagation();\n                      jumpMobile(idx);\n                    }\n                  });\n                }\n                mpills.forEach(function (p, idx) {\n                  p.addEventListener(\"click\", function (e) {\n                    e.preventDefault();\n                    e.stopPropagation();\n                    jumpMobile(idx);\n                  });\n                });\n                panels.forEach(function (p, i) {\n                  p.addEventListener(\"click\", function (e) {\n                    if (!mqPanelClick.matches) return;\n                    if (e.target.closest(\"a,button\")) return;\n                    jumpUniversal(i);\n                  });\n                });\n                inlineShots.forEach(function (s, i) {\n                  if (!s) return;\n                  s.addEventListener(\"click\", function (e) {\n                    if (e.target.closest(\"a,button\")) return;\n                    jumpMobile(i);\n                  });\n                });\n                shots.forEach(function (s, i) {\n                  s.addEventListener(\"click\", function (e) {\n                    if (!mqPanelClick.matches) return;\n                    if (e.target.closest(\"a,button\")) return;\n                    jumpUniversal(i);\n                  });\n                });\n\n                // --- Preemptive lock ---\n                // Touch sequence is touchstart -> touchend -> click. If a swipe is still\n                // coasting when the finger lands on the pillbar, the observer could reassign\n                // the stage between touch and click. Lock on the first pointer signal.\n                [\"touchstart\", \"pointerdown\", \"mousedown\"].forEach(function (evt) {\n                  if (pillbar)\n                    pillbar.addEventListener(\n                      evt,\n                      function () {\n                        lockStage(current >= 0 ? current : 0, MOBILE_LOCK_MS);\n                      },\n                      { passive: true },\n                    );\n                });\n                if (\"onscrollend\" in window) addEventListener(\"scrollend\", releaseStageLock, { passive: true });\n                // A real drag/wheel is manual input and releases the lock (but not\n                // touchstart, which precedes the click that just took the lock).\n                [\"wheel\", \"touchmove\"].forEach(function (t) {\n                  addEventListener(t, releaseStageLock, { passive: true });\n                });\n\n                // --- Pillbar reveal ---\n                // The bar is visible the moment you're in the section (no fade-in at the top)\n                // and only slides/fades out at the very BOTTOM of the section \u2014 i.e. once the\n                // section's bottom edge has (almost) reached the top of the viewport.\n                if (pillbar) {\n                  var pillTick = false;\n                  function updatePillbar() {\n                    pillTick = false;\n                    var r = sec.getBoundingClientRect();\n                    var barH = pillbar.offsetHeight || 0;\n                    var atBottom = r.bottom <= barH + 8; // scrolled to the end of the section\n                    pillbar.classList.toggle(\"aadl-pill-hidden\", atBottom);\n                  }\n                  function onPillScroll() {\n                    if (!pillTick) {\n                      pillTick = true;\n                      requestAnimationFrame(updatePillbar);\n                    }\n                  }\n                  addEventListener(\"scroll\", onPillScroll, { passive: true });\n                  addEventListener(\"resize\", onPillScroll);\n                  updatePillbar();\n                }\n\n                // --- Init / responsive mode switching ---\n                var scrollHandler = null,\n                  io = null;\n\n                function setupMobile() {\n                  detachAll();\n                  if (\"IntersectionObserver\" in window) {\n                    // Asymmetric hot-zone (above the vertical middle) stops the boundary\n                    // between two panels from oscillating on every frame.\n                    io = new IntersectionObserver(\n                      function () {\n                        if (lockedIndex !== null) return; // locked during click-driven scroll\n                        var best = null,\n                          bestRatio = 0;\n                        panels.forEach(function (p) {\n                          var r = p.getBoundingClientRect();\n                          var visible = Math.max(0, Math.min(r.bottom, innerHeight) - Math.max(r.top, 0));\n                          var ratio = p.offsetHeight ? visible / p.offsetHeight : 0;\n                          if (ratio > bestRatio) {\n                            bestRatio = ratio;\n                            best = p;\n                          }\n                        });\n                        if (best) {\n                          var idx = panels.indexOf(best);\n                          if (idx > -1) setActiveMobile(idx);\n                        }\n                      },\n                      { rootMargin: \"-25% 0px -35% 0px\", threshold: [0, 0.15, 0.3, 0.5, 0.7, 0.9] },\n                    );\n                    panels.forEach(function (p) {\n                      io.observe(p);\n                    });\n                  }\n                }\n\n                function setupDesktop() {\n                  detachAll();\n                  scrollHandler = onScrollDesktop;\n                  addEventListener(\"scroll\", scrollHandler, { passive: true });\n                  addEventListener(\"resize\", scrollHandler);\n                  onScrollDesktop();\n                  if (current === -1) setActiveDesktop(0);\n                }\n\n                function detachAll() {\n                  if (io) {\n                    io.disconnect();\n                    io = null;\n                  }\n                  if (scrollHandler) {\n                    removeEventListener(\"scroll\", scrollHandler);\n                    removeEventListener(\"resize\", scrollHandler);\n                    scrollHandler = null;\n                  }\n                }\n\n                function applyMode() {\n                  releaseStageLock();\n                  current = -1;\n                  if (mq.matches) {\n                    // Reset desktop-only carousel classes before switching to mobile.\n                    panels.forEach(function (p) {\n                      p.classList.remove(\"is-above\", \"is-below\");\n                    });\n                    shots.forEach(function (s) {\n                      s.classList.remove(\"is-above\", \"is-below\", \"is-active\");\n                    });\n                    inlineShots.forEach(function (s) {\n                      if (s) s.classList.remove(\"is-above\", \"is-below\");\n                    });\n                    setupMobile();\n                    setActiveMobile(0);\n                  } else {\n                    setupDesktop();\n                  }\n                }\n                applyMode();\n                if (mq.addEventListener) mq.addEventListener(\"change\", applyMode);\n                else if (mq.addListener) mq.addListener(applyMode);\n              })();" }} />
          </div>
        </section>
        <div light-bg="true">
          <section className="home_frameworks-section">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="v2-home-frameworks-wrapper">
                  <div className="frameworks-heading-wrapper">
                    <div className="max-width-445 no-tablet">
                      <h3 className="t-heading-3-rg">
                        {"Choose the engagement model that fits your team"}
                      </h3>
                    </div>
                    <div className="heading-text-wrapper">
                      <div className="max-width-445 no-tablet">
                        <p className="t-paragraph-1-rg-twk">
                          {"\n                          Flexible ways to work with us \u2014 fixed scope, dedicated teams, or fully managed services.\n                        "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frameworks-3col-grid">
                    <a className="frameworks-col-wrapper w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd59f" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd59f" href="/pricing">
                      <img alt="" className="framework-image" loading="lazy" sizes="100vw" src="/assets/images/graph-2.avif" srcSet="/assets/images/graph-2-p-500.avif 500w, /assets/images/graph-2.avif 912w" />
                      <div className="spacer-32 _24-tablet" />
                      <div className="framework-content-wrapper">
                        <div>
                          <div className="home_card-logo">
                            <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/Frame-2147255016.svg" />
                            <div className="t-paragraph-1-rg">
                              {"Fixed-scope projects"}
                            </div>
                          </div>
                          <div className="spacer-24" />
                          <h5 className="t-heading-5-rg">
                            {"Best when requirements are well defined"}
                          </h5>
                          <div className="spacer-16 _8-landscape" />
                          <div className="t-paragraph-2-rg">
                            {"We scope the work, agree on milestones and success metrics, and deliver tested, production-ready software for a fixed price."}
                          </div>
                          <div className="spacer-24" />
                        </div>
                        <div className="button-arrow-no-hover">
                          <div className="t-label-1-rg">
                            {"Learn more"}
                          </div>
                          <div className="embed-icon link-arrow w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {" "}
                    </a>
                    <a className="frameworks-col-wrapper w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd5b3" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5b3" href="/pricing">
                      <img alt="" className="framework-image" loading="eager" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 912px" src="/assets/images/graph.avif" srcSet="/assets/images/graph-p-500.avif 500w, /assets/images/graph.avif 912w" />
                      <div className="spacer-32 _24-tablet" />
                      <div className="framework-content-wrapper">
                        <div>
                          <div className="home_card-logo">
                            <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/Frame-2147254707-1.svg" />
                            <div className="t-paragraph-1-rg">
                              {"Dedicated teams"}
                            </div>
                          </div>
                          <div className="spacer-24 _16-landscape" />
                          <h5 className="t-heading-5-rg">
                            {"An extension of your team, sprint to sprint"}
                          </h5>
                          <div className="spacer-16 _8-landscape" />
                          <div className="t-paragraph-2-rg">
                            {"We embed senior engineers into your roadmap \u2014 owning architecture and delivery while you set the priorities."}
                          </div>
                          <div className="spacer-24" />
                        </div>
                        <div className="button-arrow-no-hover">
                          <div className="t-label-1-rg">
                            {"Learn more"}
                          </div>
                          <div className="embed-icon link-arrow w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {" "}
                    </a>
                    <a className="frameworks-col-wrapper w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd5c7" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5c7" href="/pricing">
                      <img alt="" className="framework-image" loading="lazy" sizes="100vw" src="/assets/images/graph-1.avif" srcSet="/assets/images/graph-1-p-500.avif 500w, /assets/images/graph-1.avif 912w" />
                      <div className="spacer-32 _24-tablet" />
                      <div className="framework-content-wrapper">
                        <div>
                          <div className="home_card-logo">
                            <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/Frame-2147254720.svg" />
                            <div className="t-paragraph-1-rg">
                              {"Managed services"}
                            </div>
                          </div>
                          <div className="spacer-24" />
                          <h5 className="t-heading-5-rg">
                            {"We run your production infrastructure"}
                          </h5>
                        </div>
                        <div className="spacer-16 _8-landscape" />
                        <div className="t-paragraph-2-rg">
                          {"24/7 monitoring, automated backups, security patching, and zero-downtime releases \u2014 your team stays on the product."}
                        </div>
                        <div className="spacer-24" />
                        <div className="button-arrow-no-hover">
                          <div className="t-label-1-rg">
                            {"Learn more"}
                          </div>
                          <div className="embed-icon link-arrow w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hide w-embed">
              <style dangerouslySetInnerHTML={{ __html: "\n                .frameworks-col-wrapper:hover .link-arrow {\n                  transform: translateX(-0.75rem);\n                }\n\n                .frameworks-col-wrapper:hover .button-arrow-no-hover {\n                  color: var(--_v-2-colors---c-blue-dark--900);\n                }\n              " }} />
            </div>
          </section>
          <section className="home_usecases-section">
            <div className="full-width-line hide-mobile-landscape" />
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="v2-home-use-cases">
                  <div className="v2-use-cases-wrapper">
                    <div className="use-cases-heading-wrapper">
                      <div className="max-width-600">
                        <h2 className="t-heading-3-rg">
                          {"Built for ambitious technology teams"}
                        </h2>
                      </div>
                      <div className="hide-mobile-landscape">
                        <a className="button-v2-full-width w-variant-2e956572-b1af-5b84-be93-9608dcc82abe w-inline-block" data-wf--button--variant="primary---dark" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd5e7%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5e7:cc338c70-b506-f985-732b-95e9d08eb22b" href="/blog">
                          <div className="no-wrap-arrow">
                            {"Explore our work"}
                          </div>
                          <div className="embed-icon is-btn-arrow w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="use-cases-swiper is-v2 swiper-initialized swiper-horizontal swiper-backface-hidden">
                      <div aria-live="polite" className="swiper-wrapper v2-is-use-cases" id="swiper-wrapper-2397394267bcc82a" style={{ cursor: "grab", transitionDuration: "0ms", transform: "translate3d(-934px, 0px, 0px)", transitionDelay: "0ms" }}>
                        <a aria-label="1 / 5" className="swiper-slide v2-is-use-cases w-inline-block" data-swiper-slide-index="0" data-wf--use-case-element--variant="base" href="/services" role="group" style={{ width: "451px", marginRight: "16px" }}>
                          <div className="v2-use-cases-box">
                            <div className="use-case-logo t-label-1-rg">
                              {"SaaS & Software"}
                            </div>
                            <div className="flex-y-space-between">
                              <div>
                                <p className="t-heading-6-rg">
                                  {"Ship and scale your SaaS product"}
                                </p>
                                <div className="spacer-16 _8-landscape" />
                                <div className="t-paragraph-2-rg">
                                  {"Build multi-tenant SaaS with subscription billing, role-based access, and an architecture that scales \u2014 using React, Node.js, Laravel, and AWS."}
                                </div>
                                <div className="spacer-40 _32-landscape" />
                              </div>
                              <div className="button-arrow-no-hover is-black">
                                <div className="t-label-1-rg">
                                  {"Learn more"}
                                </div>
                                <div className="embed-icon link-arrow w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a aria-label="2 / 5" className="swiper-slide v2-is-use-cases w-inline-block swiper-slide-prev" data-swiper-slide-index="1" data-wf--use-case-element--variant="base" href="/services" role="group" style={{ width: "451px", marginRight: "16px" }}>
                          <div className="v2-use-cases-box">
                            <div className="use-case-logo t-label-1-rg">
                              {"Startups"}
                            </div>
                            <div className="flex-y-space-between">
                              <div>
                                <p className="t-heading-6-rg">
                                  {"Launch faster as a startup"}
                                </p>
                                <div className="spacer-16 _8-landscape" />
                                <div className="t-paragraph-2-rg">
                                  {"Get from idea to a tested MVP in weeks, with senior engineers who choose the simplest architecture that fits your stage and budget."}
                                </div>
                                <div className="spacer-40 _32-landscape" />
                              </div>
                              <div className="button-arrow-no-hover is-black">
                                <div className="t-label-1-rg">
                                  {"Learn more"}
                                </div>
                                <div className="embed-icon link-arrow w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a aria-label="3 / 5" className="swiper-slide v2-is-use-cases w-inline-block swiper-slide-active" data-swiper-slide-index="2" data-wf--use-case-element--variant="base" href="/services" role="group" style={{ width: "451px", marginRight: "16px" }}>
                          <div className="v2-use-cases-box">
                            <div className="use-case-logo t-label-1-rg">
                              {"E-commerce"}
                            </div>
                            <div className="flex-y-space-between">
                              <div>
                                <p className="t-heading-6-rg">
                                  {"Engineer high-traffic e-commerce"}
                                </p>
                                <div className="spacer-16 _8-landscape" />
                                <div className="t-paragraph-2-rg">
                                  {"Headless storefronts on Next.js with edge caching, performance tuning, and integrations that hold up through peak seasonal traffic."}
                                </div>
                                <div className="spacer-40 _32-landscape" />
                              </div>
                              <div className="button-arrow-no-hover is-black">
                                <div className="t-label-1-rg">
                                  {"Learn more"}
                                </div>
                                <div className="embed-icon link-arrow w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a aria-label="4 / 5" className="swiper-slide v2-is-use-cases w-inline-block swiper-slide-next" data-swiper-slide-index="3" data-wf--use-case-element--variant="base" href="/enterprise" role="group" style={{ width: "451px", marginRight: "16px" }}>
                          <div className="v2-use-cases-box">
                            <div className="use-case-logo t-label-1-rg">
                              {"Enterprises"}
                            </div>
                            <div className="flex-y-space-between">
                              <div>
                                <p className="t-heading-6-rg">
                                  {"Modernize enterprise systems"}
                                </p>
                                <div className="spacer-16 _8-landscape" />
                                <div className="t-paragraph-2-rg">
                                  {"Migrate legacy platforms to cloud-native architecture with infrastructure as code, observability, and zero-downtime releases."}
                                </div>
                                <div className="spacer-40 _32-landscape" />
                              </div>
                              <div className="button-arrow-no-hover is-black">
                                <div className="t-label-1-rg">
                                  {"Learn more"}
                                </div>
                                <div className="embed-icon link-arrow w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a aria-label="5 / 5" className="swiper-slide v2-is-use-cases w-inline-block" data-swiper-slide-index="4" data-wf--use-case-element--variant="base" href="/services" role="group" style={{ width: "451px", marginRight: "16px" }}>
                          <div className="v2-use-cases-box">
                            <div className="use-case-logo t-label-1-rg">
                              {"AI products"}
                            </div>
                            <div className="flex-y-space-between">
                              <div>
                                <p className="t-heading-6-rg">
                                  {"Turn AI ideas into products"}
                                </p>
                                <div className="spacer-16 _8-landscape" />
                                <div className="t-paragraph-2-rg">
                                  {"Integrate LLMs, automation, and intelligent workflows into your product through clean APIs, deployed on AWS with monitoring in place."}
                                </div>
                                <div className="spacer-40 _32-landscape" />
                              </div>
                              <div className="button-arrow-no-hover is-black">
                                <div className="t-label-1-rg">
                                  {"Learn more"}
                                </div>
                                <div className="embed-icon link-arrow w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <span aria-atomic="true" aria-live="assertive" className="swiper-notification" />
                    </div>
                    <div className="swiper-elements">
                      <div className="swiper-dots swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                        <span aria-label="Go to slide 1" className="swiper-dot" role="button" tabIndex={0} />
                        <span aria-label="Go to slide 2" className="swiper-dot" role="button" tabIndex={0} />
                        <span aria-current="true" aria-label="Go to slide 3" className="swiper-dot is-active" role="button" tabIndex={0} />
                        <span aria-label="Go to slide 4" className="swiper-dot" role="button" tabIndex={0} />
                        <span aria-label="Go to slide 5" className="swiper-dot" role="button" tabIndex={0} />
                      </div>
                      <div className="v2-swiper-buttons">
                        <button aria-label="Previous slide" className="swiper-btn-prev" tabIndex={0}>
                          <div className="embed-icon w-embed">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M-1.33514e-05 5.98687L5.98686 12L6.93215 11.0547L3.24288 7.36543L2.52078 6.66958H13.4967L13.4836 5.34355L2.49452 5.33041L3.15097 4.70022L6.91902 0.932166L5.98686 0L-1.33514e-05 5.98687Z" fill="#030710" />
                            </svg>
                          </div>
                        </button>
                        <button aria-label="Next slide" className="swiper-btn-next" tabIndex={0}>
                          <div className="embed-icon w-embed">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.4967 5.98687L7.50985 12L6.56455 11.0547L10.2538 7.36543L10.9759 6.66958H0L0.0131292 5.34355L11.0022 5.33041L10.3457 4.70022L6.57768 0.932166L7.50985 0L13.4967 5.98687Z" fill="#030710" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="hide w-embed w-script">
                      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const useCasesSwiper = new Swiper(\".use-cases-swiper\", {\n                          slidesPerView: 1,\n                          spaceBetween: 16,\n                          grabCursor: true,\n                          loop: true,\n                          simulateTouch: true,\n                          breakpoints: {\n                            768: {\n                              slidesPerView: 2,\n                            },\n                            992: {\n                              slidesPerView: 3,\n                            },\n                            1280: {\n                              slidesPerView: 3,\n                            },\n                          },\n                          navigation: {\n                            prevEl: \".swiper-btn-prev\",\n                            nextEl: \".swiper-btn-next\",\n                          },\n                          pagination: {\n                            el: \".swiper-dots\",\n                            bulletClass: \"swiper-dot\",\n                            bulletActiveClass: \"is-active\",\n                            clickable: true,\n                          },\n                        });" }} />
                    </div>
                    <div className="w-embed">
                      <style dangerouslySetInnerHTML={{ __html: "\n                        .swiper-slide:hover .v2-use-cases-box {\n                          background: white;\n                        }\n\n                        a[data-wf--use-case-element--variant=\"no-link\"] {\n                          cursor: default;\n                        }\n                      " }} />
                    </div>
                    <div className="show-landscape">
                      <a className="button-v2-full-width w-variant-2e956572-b1af-5b84-be93-9608dcc82abe w-inline-block" data-wf--button--variant="primary---dark" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd610%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd610:cc338c70-b506-f985-732b-95e9d08eb22b" href="/blog">
                        <div className="no-wrap-arrow">
                          {"Explore our work"}
                        </div>
                        <div className="embed-icon is-btn-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="use-cases-line">
                    <div className="line-circle-usecases" style={{ top: "16%" }} />
                  </div>
                  <div className="hide w-embed w-script">
                    <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "ScrollTrigger.create({\n                        trigger: \".use-cases-line\",\n                        start: \"top 50%\",\n                        end: \"bottom 50%\",\n                        onUpdate: (self) => {\n                          const circleHeight = document.querySelector(\".line-circle-usecases\").offsetHeight;\n                          const lineHeight = document.querySelector(\".use-cases-line\").offsetHeight;\n                          const maxPercent = ((lineHeight - circleHeight) / lineHeight) * 100;\n                          gsap.set(\".line-circle-usecases\", { top: `${16 + self.progress * (maxPercent - 16)}%` });\n                        },\n                      });" }} />
                  </div>
                  <div className="home-stats-wrapper">
                    <div className="max-width-809">
                      <h2 className="t-heading-2-rg">
                        {"Why teams keep building with us"}
                      </h2>
                    </div>
                    <div className="spacer-100 _80-landscape" />
                    <div className="stats-3col">
                      <div className="stats-box">
                        <div className="t-label-3-rg">
                          {"500+"}
                        </div>
                        <div className="t-label-1-rg is-opacity-60">
                          {"Projects delivered across 23+ countries"}
                        </div>
                      </div>
                      <div className="stats-box">
                        <div className="t-label-3-rg">
                          {"99.99%"}
                        </div>
                        <div className="t-label-1-rg is-opacity-60">
                          {"SLA-backed uptime with 24/7 monitoring and alerting"}
                        </div>
                      </div>
                      <div className="stats-box homepage">
                        <div className="div-block-7">
                          <div className="t-label-3-rg">
                            {"100%"}
                          </div>
                          <div className="t-label-1-rg is-opacity-60 homepage">
                            {"code "}
                            <br />
                            {"ownership"}
                          </div>
                        </div>
                        <div className="t-label-1-rg is-opacity-60">
                          {"You own all source code, infrastructure, and IP \u2014 no lock-in."}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="home_cta-section">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-cta-wrapper">
                <div className="home-cta-image-wrapper">
                  <div className="cta-tablet-bg" />
                  <div className="cta-image-wrapper">
                    <img alt="" className="home-cta-image" loading="eager" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1456&h=1092&q=80" srcSet="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&h=375&q=80 500w, https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1456&h=1092&q=80 1456w" />
                    <div className="cta-image-bg-desktop" />
                  </div>
                </div>
                <div className="home-cta-content-wrapper">
                  <div className="max-width-533">
                    <h2 className="t-heading-2-rg text-c-blue-light-900" text-letters-animation="">
                      {"\n                      Ready to build your next product with confidence?\n                    "}
                    </h2>
                  </div>
                  <div className="home-cta-content-absolute">
                    <div className="button-group v2">
                      <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd659%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd659:cc338c70-b506-f985-732b-95e9d08eb22b" href="/pricing">
                        <div className="no-wrap-arrow">
                          {"Start a project"}
                        </div>
                        <div className="embed-icon is-btn-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                        {" "}
                      </a>
                      <a className="button-v2-full-width w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9 w-inline-block" data-wf--button--variant="secondary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd65a%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd65a:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow">
                          {"Talk to engineering"}
                        </div>
                        <div className="embed-icon is-btn-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <p className="t-paragraph-1-rg-twk">
                      {"\n                      Tell us what you're building and we'll show you the fastest reliable path to production.\n                    "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <TemplateScripts wfPage="660189f45f9033dd87f82a27" scripts={["/assets/vendor/finsweet-scrolldisable.js", "/assets/vendor/flowbase-tooltip.min.js", "/assets/vendor/jquery-3.5.1.min.js", "/assets/js/sentrize-tonik.schunk.6739ee8d3353008c.js", "/assets/js/sentrize-tonik.schunk.d0183f7a3728c263.js", "/assets/js/sentrize-tonik.958e3bbd.b4492d9062963867.js", "/assets/vendor/gsap.min.js", "/assets/vendor/ScrollTrigger.min.js", "/assets/vendor/SplitText.min.js", "/assets/vendor/split-type.min.js"]} />
    </>
  );
}
