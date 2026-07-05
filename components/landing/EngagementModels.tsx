"use client";

import { useEffect, useRef } from "react";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";

/* EngagementModels — JSX port of the legacy _landing.html "section3" pricing/
   engagement cards (kept verbatim in markup/classNames for 100% visual
   fidelity). Equal-height title/description sync (ported from
   LandingClient's legacy "equalize" logic, scoped here to just this
   component's own subtree) keeps the three cards visually aligned on
   desktop, and each card now reveals with a staggered scroll-triggered
   Slide instead of popping in instantly. */
export default function EngagementModels() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const equalize = () => {
      (["flexBoxTitle", "flexBoxDescription"] as const).forEach((cls) => {
        const els = Array.from(root.querySelectorAll<HTMLElement>(`.${cls}`));
        els.forEach((el) => (el.style.height = ""));
        if (window.innerWidth < 768) return; // cards stack on mobile -> natural height
        const max = els.reduce((m, el) => Math.max(m, el.offsetHeight), 0);
        if (max) els.forEach((el) => (el.style.height = max + "px"));
      });
    };

    const raf = requestAnimationFrame(equalize);
    window.addEventListener("resize", equalize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", equalize);
    };
  }, []);

  return (
    <div className="wrapperContainer wrapperDark clearfix section3" ref={ref}>
      <div className="container no-padd">
        <div className="row no-padd">
          <div className="fontRegular_24 colorWhite text-center">
            FLEXIBLE WAYS TO WORK WITH US
          </div>
          <h2 className="font_44 fontRegular top-buffer40 colorWhite text-center maxWidth_70">
            Choose the engagement model
            <br />
            that fits your team
          </h2>
          <div className="flexContainerBox top-buffer60">
            <div className="flexBox">
              <Slide asChild direction="up" offset={24} inView inViewOnce delay={0 * 80}>
                <div className="flexBoxItem item1 wrapperWhite1 colorWhite">
            <div className="mostPopular hidden wrapperBlue colorWhite font_14">
              Most popular
            </div>
            <div className="flexBoxIcon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="img-responsive" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJURVJNSU5BTF9FTkNSWVBUSU9OIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGRlZnM+PHN0eWxlPi5jbHMtMjkwNntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMjkwNiIgZD0iTTEwNCwyNnYtMmgwYzAtNC40Mi0zLjU4LTgtOC04aC0zNGMtNC40MiwwLTgsMy41OC04LDh2ODBjMCw0LjQyLDMuNTgsOCw4LDhoNHMyLDAsMiwwaDBzMTAsMCwxMCwwaDBzMiwwLDIsMGgwczEwLDAsMTAsMGgwczIsMCwyLDBoMHM0LDAsNCwwYzQuNDIsMCw4LTMuNTgsOC04di04aDB2LTJoMHYtNmgwdi0yaDB2LTZoMHYtMmgwVjI2aDBaTTYyLDE4aDM0YzMuMzEsMCw2LDIuNjksNiw2aDBzLTQ2LDAtNDYsMGgwYzAtMy4zMSwyLjY5LTYsNi02Wk02Niw5NGgtMTB2LTZoMTB2NlpNNjgsODhoMTB2NmgtMTB2LTZaTTY2LDk2djZoLTEwdi02aDEwWk02OCw5NmgxMHY2aC0xMHYtNlpNODAsOTZoMTB2NmgtMTB2LTZaTTgwLDk0di02aDEwdjZoLTEwWk04MCw4NnYtNmgxMHY2aC0xMFpNNzgsODZoLTEwdi02aDEwdjZaTTY2LDg2aC0xMHYtNmgxMHY2Wk02MiwxMTBjLTMuMzEsMC02LTIuNjktNi02aDEwdjZoLTRaTTY4LDExMHYtNmgxMHY2aC0xMFpNODAsMTEwdi02aDEwdjZoLTEwWk0xMDIsMTA0YzAsMy4zMS0yLjY5LDYtNiw2aC00di0xNGgxMHY4Wk0xMDIsOTRoLTEwdi02aDEwdjZaTTEwMiw4NmgtMTB2LTZoMTB2NlpNMTAyLDc4aC00NlYyNmg0NnY1MloiLz48cGF0aCBjbGFzcz0iY2xzLTI5MDYiIGQ9Ik0zNy43NSwzOGMzLjMxLDAsNiwyLjY5LDYsNnY0MGMwLDMuMzEtMi42OSw2LTYsNmgtMTR2MmgxNGM0LjQyLDAsOC0zLjU4LDgtOHYtNDBjMC00LjQyLTMuNTgtOC04LThoLTE0djJoMTRaIi8+PGcgY2xhc3M9ImJsaW5rLXNodXQiPjxwYXRoIGNsYXNzPSJjbHMtMjkwNiIgZD0iTTM1LjQsNDkuMWMtMS4wMy0xLjAzLTEuNTItMi4xNC0xLjQ3LTMuMy4wNi0xLjI5LjgxLTIuMzcsMS41LTIuOTRsLjY0Ljc3Yy0uNS40Mi0xLjEsMS4yNS0xLjE0LDIuMjItLjA0Ljg3LjM2LDEuNzMsMS4xOCwyLjU0bC0uNzEuNzFaIi8+PHBhdGggY2xhc3M9ImNscy0yOTA2IiBkPSJNMzUuNCw2My4xYy0xLjAzLTEuMDMtMS41Mi0yLjE0LTEuNDctMy4zLjA2LTEuMjkuODEtMi4zNywxLjUtMi45NGwuNjQuNzdjLS41LjQyLTEuMSwxLjI1LTEuMTQsMi4yMi0uMDQuODcuMzYsMS43MywxLjE4LDIuNTRsLS43MS43MVoiLz48L2c+PGcgY2xhc3M9ImJsaW5rLW9wZW4iPjxjaXJjbGUgY2xhc3M9ImNscy0yOTA2IiBjeD0iMzUuNzUiIGN5PSI0NiIgcj0iNCIvPjxjaXJjbGUgY2xhc3M9ImNscy0yOTA2IiBjeD0iMzUuNzUiIGN5PSI2MCIgcj0iNCIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTI5MDYiIGQ9Ik03OSw0MWMtNi4wOCwwLTExLDQuOTItMTEsMTFzNC45MiwxMSwxMSwxMSwxMS00LjkyLDExLTExLTQuOTItMTEtMTEtMTFaTTc5LDYxYy00Ljk2LDAtOS00LjA0LTktOXM0LjA0LTksOS05LDksNC4wNCw5LDktNC4wNCw5LTksOVoiLz48cGF0aCBjbGFzcz0iY2xzLTI5MDYiIGQ9Ik05OC4wNSw0Ny40N2gtMy4yMmMtLjM1LTEuMjEtLjgyLTIuMzctMS40My0zLjQ2bDIuMjUtMi4yNmMuMzgtLjM3LjU5LS44Ni41OS0xLjM5LDAtLjUzLS4yLTEuMDItLjU3LTEuMzlsLTMuNjQtMy42NGMtLjc2LS43Ni0yLS43Ny0yLjc3LDBsLTIuMjcsMi4yOGMtMS4wOS0uNi0yLjI1LTEuMDgtMy40Ny0xLjQzdi0zLjE5YzAtLjUzLS4yLTEuMDMtLjU4LTEuNC0uMzctLjM3LS44Ni0uNTgtMS4zOS0uNThoLTUuMTRjLTEuMDgsMC0xLjk2Ljg4LTEuOTYsMS45NXYzLjIyYy0xLjIxLjM1LTIuMzcuODItMy40NiwxLjQzbC0yLjI2LTIuMjVjLS4zNy0uMzgtLjg3LS41OS0xLjM5LS41OS0uNTYsMC0xLjAyLjItMS4zOS41N2wtMy42NCwzLjY0Yy0uNzYuNzYtLjc3LDIsMCwyLjc3bDIuMjgsMi4yN2MtLjYsMS4wOS0xLjA4LDIuMjUtMS40MywzLjQ3aC0zLjE5Yy0uNTQsMC0xLjAzLjItMS40LjU4LS4zNy4zNy0uNTguODYtLjU4LDEuMzl2NS4xNWMwLDEuMDguODgsMS45NiwxLjk1LDEuOTZoMy4yMmMuMzUsMS4yMS44MiwyLjM3LDEuNDMsMy40NmwtMi4yNSwyLjI2Yy0uMzguMzctLjU5Ljg3LS41OSwxLjM5LDAsLjUzLjIsMS4wMi41NywxLjM5bDMuNjQsMy42NGMuMzcuMzcuODYuNTcsMS4zOC41OGgwYy41MiwwLDEuMDEtLjIsMS4zOC0uNTdsMi4yNy0yLjI4YzEuMDkuNiwyLjI1LDEuMDgsMy40NywxLjQzdjMuMTljMCwuNTMuMiwxLjAzLjU4LDEuNC4zNy4zNy44Ni41OCwxLjM5LjU4aDUuMTRjMS4wOCwwLDEuOTYtLjg4LDEuOTYtMS45NXYtMy4yMmMxLjIxLS4zNSwyLjM3LS44MiwzLjQ2LTEuNDNsMi4yNiwyLjI1Yy4zNy4zOC44Ni41OSwxLjM5LjU5aC4wMWMuNTIsMCwxLjAxLS4yLDEuMzgtLjU3bDMuNjQtMy42NGMuMzctLjM3LjU3LS44Ni41OC0xLjM4LDAtLjUyLS4yLTEuMDItLjU3LTEuMzlsLTIuMjgtMi4yN2MuNi0xLjA5LDEuMDgtMi4yNSwxLjQzLTMuNDdoMy4xOWMuNTItLjAxLDEuMDMtLjIsMS40LS41OC4zNy0uMzcuNTgtLjg2LjU4LTEuMzl2LTUuMTRjMC0xLjA4LS44OC0xLjk2LTEuOTUtMS45NlpNOTAuNjEsMzYuNzRsMy42MiwzLjU5LTEuOTUsMS45NmMtMS0xLjM3LTIuMjEtMi41OC0zLjU5LTMuNThsMS45MS0xLjk3Wk03Ni40MiwzM2w1LjEtLjAzdjIuNzdjLS44Mi0uMTMtMS42Ni0uMjEtMi41Mi0uMjFzLTEuNzEuMDktMi41NC4yMmwtLjA0LTIuNzRaTTYzLjc0LDQwLjM5bDMuNTktMy42MiwxLjk2LDEuOTVjLTEuMzcsMS0yLjU4LDIuMjEtMy41OCwzLjU5bC0xLjk3LTEuOTFaTTYwLDU0LjU4bC0uMDMtNS4xaDIuNzdjLS4xMy44Mi0uMjEsMS42Ni0uMjEsMi41MnMuMDksMS43MS4yMiwyLjU0bC0yLjc0LjA0Wk02Ny4zOSw2Ny4yNmwtMy42Mi0zLjU5LDEuOTUtMS45NmMxLDEuMzcsMi4yMSwyLjU4LDMuNTksMy41OGwtMS45MSwxLjk3Wk04MS41OCw3MWwtNS4xLjAydi0yLjc3Yy44Mi4xMywxLjY2LjIxLDIuNTIuMjFzMS43MS0uMDksMi41NC0uMjJsLjA0LDIuNzVaTTk0LjI2LDYzLjYxbC0zLjU5LDMuNjItMS45Ni0xLjk1YzEuMzctMSwyLjU4LTIuMjEsMy41OC0zLjU5bDEuOTcsMS45MVpNNzksNjYuNDdjLTcuOTgsMC0xNC40Ny02LjQ5LTE0LjQ3LTE0LjQ3czYuNDktMTQuNDcsMTQuNDctMTQuNDcsMTQuNDcsNi40OSwxNC40NywxNC40Ny02LjQ5LDE0LjQ3LTE0LjQ3LDE0LjQ3Wk05NS4yNiw1NC41M2MuMTMtLjgzLjIxLTEuNjcuMjEtMi41M3MtLjA5LTEuNzEtLjIyLTIuNTRsMi43NS0uMDQuMDIsNS4xaC0yLjc3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMjkwNiIgZD0iTTc5LDUxLjRjLTEuNjUsMC0zLTEuMzUtMy0zdi0xLjMzYzAtMS42NSwxLjM1LTMsMy0zczMsMS4zNSwzLDN2MS4zM2MwLDEuNjUtMS4zNSwzLTMsM1pNNzksNDYuMDdjLS41NSwwLTEsLjQ1LTEsMXYxLjMzYzAsLjU1LjQ1LDEsMSwxczEtLjQ1LDEtMXYtMS4zM2MwLS41NS0uNDUtMS0xLTFaIi8+PHBhdGggY2xhc3M9ImNscy0yOTA2IiBkPSJNNzMsNTEuNDFjLS41NSwwLTEtLjQ1LTEtMXYtNS4zM2MwLS41NS40NS0xLDEtMXMxLC40NSwxLDF2NS4zM2MwLC41NS0uNDUsMS0xLDFaIi8+PHBhdGggY2xhc3M9ImNscy0yOTA2IiBkPSJNODUsNTEuNDFjLS41NSwwLTEtLjQ1LTEtMXYtNS4zM2MwLS41NS40NS0xLDEtMXMxLC40NSwxLDF2NS4zM2MwLC41NS0uNDUsMS0xLDFaIi8+PHBhdGggY2xhc3M9ImNscy0yOTA2IiBkPSJNNzUsNTkuOTJjLTEuNjUsMC0zLTEuMzUtMy0zdi0xLjMzYzAtMS42NSwxLjM1LTMsMy0zczMsMS4zNSwzLDN2MS4zM2MwLDEuNjUtMS4zNSwzLTMsM1pNNzUsNTQuNTljLS41NSwwLTEsLjQ1LTEsMXYxLjMzYzAsLjU1LjQ1LDEsMSwxczEtLjQ1LDEtMXYtMS4zM2MwLS41NS0uNDUtMS0xLTFaIi8+PHBhdGggY2xhc3M9ImNscy0yOTA2IiBkPSJNODEsNTkuOTNjLS41NSwwLTEtLjQ1LTEtMXYtNS4zM2MwLS41NS40NS0xLDEtMXMxLC40NSwxLDF2NS4zM2MwLC41NS0uNDUsMS0xLDFaIi8+PHBhdGggY2xhc3M9ImNscy0yOTA2IiBkPSJNODUsNTkuOTNjLS41NSwwLTEtLjQ1LTEtMXYtNS4zM2MwLS41NS40NS0xLDEtMXMxLC40NSwxLDF2NS4zM2MwLC41NS0uNDUsMS0xLDFaIi8+PC9zdmc+" />
            </div>
            <div className="flexBoxTitle font_24" style={{ height: "26px" }}>
              Fixed-scope projects
            </div>
            <div className="flexBoxDescription" style={{ height: "182px" }}>
              Best when requirements are well defined. We scope the work, agree on milestones and success metrics, and deliver tested, production-ready software for a fixed price.
            </div>
          </div>
          </Slide>
          <Slide asChild direction="up" offset={24} inView inViewOnce delay={1 * 80}>
          <div className="flexBoxItem item2 wrapperWhite1 colorWhite activeMostPopular">
            <div className="mostPopular hidden wrapperBlue colorWhite font_14">
              Most popular
            </div>
            <div className="flexBoxIcon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="img-responsive" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJFU1RBVEVfTUFOQUdFTUVOVCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im04OCw0NHYtOGgtMnY4YzAsMy4zMS0yLjY5LDYtNiw2aC0zMmMtMy4zMSwwLTYtMi42OS02LTZ2LThoLTJ2OGMwLDQuNDIsMy41OCw4LDgsOGgzMmM0LjQyLDAsOC0zLjU4LDgtOFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im00Niw3MmgtN2MtLjU1LDAtMSwuNDUtMSwxcy40NSwxLDEsMWg3Yy41NSwwLDEtLjQ1LDEtMXMtLjQ1LTEtMS0xWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTg5LDcyaC03Yy0uNTUsMC0xLC40NS0xLDFzLjQ1LDEsMSwxaDdjLjU1LDAsMS0uNDUsMS0xcy0uNDUtMS0xLTFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMTE2LDU4aC0xOGMtMi4yMSwwLTQsMS43OS00LDR2MjZjMCwyLjIxLDEuNzksNCw0LDRoMThjMi4yMSwwLDQtMS43OSw0LTR2LTI2YzAtMi4yMS0xLjc5LTQtNC00Wm0tMTQsMzJoLTRjLTEuMSwwLTItLjktMi0ydi0yaDZ2NFptMC02aC02di00aDZ2NFptMC02aC02di00aDZ2NFptOCwxMmgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTgsMTBjMCwxLjEtLjksMi0yLDJoLTR2LTRoNnYyWm0wLTRoLTZ2LTRoNnY0Wm0wLTZoLTZ2LTRoNnY0Wm0wLTZoLTIydi0xMGMwLTEuMS45LTIsMi0yaDE4YzEuMSwwLDIsLjksMiwydjEwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTMwLDU4SDEyYy0yLjIxLDAtNCwxLjc5LTQsNHYyNmMwLDIuMjEsMS43OSw0LDQsNGgxOGMyLjIxLDAsNC0xLjc5LDQtNHYtMjZjMC0yLjIxLTEuNzktNC00LTRabS0xNCwzMmgtNGMtMS4xLDAtMi0uOS0yLTJ2LTJoNnY0Wm0wLTZoLTZ2LTRoNnY0Wm0wLTZoLTZ2LTRoNnY0Wm04LDEyaC02di00aDZ2NFptMC02aC02di00aDZ2NFptMC02aC02di00aDZ2NFptOCwxMGMwLDEuMS0uOSwyLTIsMmgtNHYtNGg2djJabTAtNGgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTAtNkgxMHYtMTBjMC0xLjEuOS0yLDItMmgxOGMxLjEsMCwyLC45LDIsMnYxMFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03Myw1OGgtMThjLTIuMjEsMC00LDEuNzktNCw0djI2YzAsMi4yMSwxLjc5LDQsNCw0aDE4YzIuMjEsMCw0LTEuNzksNC00di0yNmMwLTIuMjEtMS43OS00LTQtNFptLTE0LDMyaC00Yy0xLjEsMC0yLS45LTItMnYtMmg2djRabTAtNmgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTgsMTJoLTZ2LTRoNnY0Wm0wLTZoLTZ2LTRoNnY0Wm0wLTZoLTZ2LTRoNnY0Wm04LDEwYzAsMS4xLS45LDItMiwyaC00di00aDZ2MlptMC00aC02di00aDZ2NFptMC02aC02di00aDZ2NFptMC02aC0yMnYtMTBjMC0xLjEuOS0yLDItMmgxOGMxLjEsMCwyLC45LDIsMnYxMFoiLz48ZyBjbGFzcz0iYmxpbmstc2h1dCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNjguNiw0Mi4zNWwtLjcxLS43MWMxLjAzLTEuMDMsMi4xMy0xLjUyLDMuMy0xLjQ3LDEuMjkuMDYsMi4zNy44MSwyLjk0LDEuNWwtLjc3LjY0Yy0uNDQtLjUyLTEuMjUtMS4xLTIuMjItMS4xNC0uODctLjA0LTEuNzMuMzYtMi41NCwxLjE4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTU0LjYsNDIuMzVsLS43MS0uNzFjMS4wMy0xLjAzLDIuMTItMS41MiwzLjMtMS40NywxLjI5LjA2LDIuMzcuODEsMi45NCwxLjVsLS43Ny42NGMtLjQ0LS41Mi0xLjI1LTEuMS0yLjIyLTEuMTQtLjg4LS4wNC0xLjcyLjM2LTIuNTQsMS4xOFoiLz48L2c+PGcgY2xhc3M9ImJsaW5rLW9wZW4iPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNzEiIGN5PSI0MiIgcj0iNCIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNTciIGN5PSI0MiIgcj0iNCIvPjwvZz48L3N2Zz4=" />
            </div>
            <div className="flexBoxTitle font_24" style={{ height: "26px" }}>
              Dedicated teams
            </div>
            <div className="flexBoxDescription" style={{ height: "182px" }}>
              We embed senior engineers into your roadmap as an extension of your team — owning architecture and delivery while you set the priorities sprint to sprint.
            </div>
          </div>
          </Slide>
          <Slide asChild direction="up" offset={24} inView inViewOnce delay={2 * 80}>
          <div className="flexBoxItem item3 wrapperWhite1 colorWhite">
            <div className="mostPopular hidden wrapperBlue colorWhite font_14">
              Most popular
            </div>
            <div className="flexBoxIcon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="img-responsive" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJERUVQX1BFUlNPTkFMSVpBVElPTiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO3N0cm9rZS13aWR0aDowcHg7fTwvc3R5bGU+PC9kZWZzPjxnIGNsYXNzPSJibGluay1zaHV0Ij48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im01Ni45Nyw1My44M2MtLjA2LDAtLjExLDAtLjE3LDAtMS4yOS0uMDYtMi4zNy0uODEtMi45NC0xLjVsLjc3LS42NGMuNDQuNTIsMS4yNSwxLjEsMi4yMiwxLjE0Ljg2LjA0LDEuNzMtLjM2LDIuNTUtMS4xOGwuNzEuNzFjLS45OC45OC0yLjAzLDEuNDctMy4xMywxLjQ3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTcwLjk3LDUzLjgzYy0uMDYsMC0uMTEsMC0uMTcsMC0xLjI5LS4wNi0yLjM3LS44MS0yLjk0LTEuNWwuNzctLjY0Yy40NC41MiwxLjI1LDEuMSwyLjIyLDEuMTQuODcuMDQsMS43My0uMzYsMi41NS0xLjE4bC43MS43MWMtLjk4Ljk4LTIuMDMsMS40Ny0zLjEzLDEuNDdaIi8+PC9nPjxnIGNsYXNzPSJibGluay1vcGVuIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjU3IiBjeT0iNTIiIHI9IjQiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjcxIiBjeT0iNTIiIHI9IjQiLz48L2c+PGcgY2xhc3M9ImJsaW5rLXNodXQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTExMi4zMiw4NS4xM2wtLjY0LS43N2MuNTItLjQ0LDEuMS0xLjI1LDEuMTQtMi4yMi4wNC0uODctLjM2LTEuNzItMS4xOC0yLjU0bC43MS0uNzFjMS4wMywxLjAzLDEuNTIsMi4xNCwxLjQ3LDMuMy0uMDYsMS4yOS0uODEsMi4zNy0xLjUsMi45NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xMTIuMzIsNzEuMTNsLS42NC0uNzdjLjUyLS40NCwxLjEtMS4yNSwxLjE0LTIuMjIuMDQtLjg3LS4zNi0xLjcyLTEuMTgtMi41NGwuNzEtLjcxYzEuMDMsMS4wMywxLjUyLDIuMTQsMS40NywzLjMtLjA2LDEuMjktLjgxLDIuMzctMS41LDIuOTRaIi8+PC9nPjxnIGNsYXNzPSJibGluay1vcGVuIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjExMiIgY3k9IjgyIiByPSI0Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSIxMTIiIGN5PSI2OCIgcj0iNCIvPjwvZz48ZyBjbGFzcz0iYmxpbmstc2h1dCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMTUuNjUsNDkuMWMtMS4wMy0xLjAzLTEuNTItMi4xNC0xLjQ3LTMuMy4wNi0xLjI5LjgxLTIuMzcsMS41LTIuOTRsLjY0Ljc3Yy0uNTIuNDQtMS4xLDEuMjUtMS4xNCwyLjIyLS4wNC44Ny4zNiwxLjcyLDEuMTgsMi41NGwtLjcxLjcxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTE1LjY1LDYzLjFjLTEuMDMtMS4wMy0xLjUyLTIuMTQtMS40Ny0zLjMuMDYtMS4yOS44MS0yLjM3LDEuNS0yLjk0bC42NC43N2MtLjUyLjQ0LTEuMSwxLjI1LTEuMTQsMi4yMi0uMDQuODcuMzYsMS43MiwxLjE4LDIuNTRsLS43MS43MVoiLz48L2c+PGcgY2xhc3M9ImJsaW5rLW9wZW4iPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMTYiIGN5PSI0NiIgcj0iNCIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMTYiIGN5PSI2MCIgcj0iNCIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xOCwzNmgtMTB2MmgxMGMzLjMxLDAsNiwyLjY5LDYsNnYyNmMwLDMuMzEtMi42OSw2LTYsNmgtMTB2MmgxMGM0LjQyLDAsOC0zLjU4LDgtOHYtMjZjMC00LjQyLTMuNTgtOC04LThaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMTEwLDUyaDEwdi0yaC0xMGMtNC40MiwwLTgsMy41OC04LDh2MjZjMCw0LjQyLDMuNTgsOCw4LDhoMTB2LTJoLTEwYy0zLjMxLDAtNi0yLjY5LTYtNnYtMjZjMC0zLjMxLDIuNjktNiw2LTZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMzcsNDZjLjU1LDAsMS0uNDUsMS0xdi03aDdjLjU1LDAsMS0uNDUsMS0xcy0uNDUtMS0xLTFoLThjLS41NSwwLTEsLjQ1LTEsMXY4YzAsLjU1LjQ1LDEsMSwxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTkxLDM2aC04Yy0uNTUsMC0xLC40NS0xLDFzLjQ1LDEsMSwxaDd2N2MwLC41NS40NSwxLDEsMXMxLS40NSwxLTF2LThjMC0uNTUtLjQ1LTEtMS0xWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTQ1LDkwaC03di03YzAtLjU1LS40NS0xLTEtMXMtMSwuNDUtMSwxdjhjMCwuNTUuNDUsMSwxLDFoOGMuNTUsMCwxLS40NSwxLTFzLS40NS0xLTEtMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im04NSw2NS44OXMwLDAsMCwwdi0xNS44OWMwLTQuNDItMy41OC04LTgtOGgtMjZjLTQuNDIsMC04LDMuNTgtOCw4djI4YzAsNC40MiwzLjU4LDgsOCw4aDE1LjUyYzIuNTMsMy42Miw2LjcyLDYsMTEuNDgsNiw3LjczLDAsMTQtNi4yNywxNC0xNCwwLTUuMTgtMi44Mi05LjY5LTctMTIuMTFabS0xOS42MywxOC4xMWgtMTQuMzZjLTMuMzEsMC02LTIuNjktNi02di0yOGMwLTMuMzEsMi42OS02LDYtNmgyNmMzLjMxLDAsNiwyLjY5LDYsNnYxNC45NHMwLDAsMCwwYy0xLjU1LS42LTMuMjQtLjk0LTUtLjk0LTcuNzMsMC0xNCw2LjI3LTE0LDE0LDAsMi4xNS41LDQuMTgsMS4zNiw2aDBabTEyLjY0LDZjLTYuNjIsMC0xMi01LjM4LTEyLTEyczUuMzgtMTIsMTItMTIsMTIsNS4zOCwxMiwxMi01LjM4LDEyLTEyLDEyWiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNzAuOTIiIHk9Ijc3IiB3aWR0aD0iMTQuMTUiIGhlaWdodD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI5LjQ4IDEwMi44KSByb3RhdGUoLTU3Ljk5KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTc3LDc0YzAtMS42Ni0xLjM0LTMtMy0zcy0zLDEuMzQtMywzLDEuMzQsMywzLDMsMy0xLjM0LDMtM1ptLTQsMGMwLS41NS40NS0xLDEtMXMxLC40NSwxLDEtLjQ1LDEtMSwxLTEtLjQ1LTEtMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im04Miw3OWMtMS42NiwwLTMsMS4zNC0zLDNzMS4zNCwzLDMsMywzLTEuMzQsMy0zLTEuMzQtMy0zLTNabTAsNGMtLjU1LDAtMS0uNDUtMS0xcy40NS0xLDEtMSwxLC40NSwxLDEtLjQ1LDEtMSwxWiIvPjwvc3ZnPg==" />
            </div>
            <div className="flexBoxTitle font_24" style={{ height: "26px" }}>
              Managed services
            </div>
            <div className="flexBoxDescription" style={{ height: "182px" }}>
              We run your production infrastructure with 24/7 monitoring, automated backups, security patching, and zero-downtime releases, so your team can focus on the product.
            </div>
          </div>
          </Slide>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}