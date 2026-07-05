"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";

/* RoadmapCapabilities — JSX port of the legacy _landing.html "section7" block
   (kept verbatim in markup/classNames for 100% visual fidelity). Owns its own
   equal-height effect for the six .flexBoxTitle/.flexBoxDescription pairs
   (a port of LandingClient's former ".section7" EQ_GROUPS entries, now scoped
   to this component's own ref instead of the whole landing document) and
   wraps each capability card in the Slide primitive for a staggered reveal. */
export default function RoadmapCapabilities() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const equalize = () => {
      [".flexBoxTitle", ".flexBoxDescription"].forEach((sel) => {
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
    <div className="wrapperContainer section7 noBottomBuffer" ref={ref}>
  <div className="container no-padd">
    <div className="row no-padd">
      <h2 className="font_44 fontRegular text-center maxWidth_70">
        Power your roadmap with the
        <br />
        Sentrize engineering team
      </h2>
      <div className="flexContainerBox top-buffer60">
        <div className="flexBox">
          <Slide asChild direction="up" offset={24} inView inViewOnce delay={0 * 80}>
          <div className="flexBoxItem item1 wrapperWhite9">
            <div className="flexItemContent font_14">
              <div className="flexItemSingle">
                <div className="flexBoxIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="img-responsive" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJTSU5HTEVfU09VUkNFX1BST1ZJREVSIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGcgY2xhc3M9ImJsaW5rLXNodXQiPjxwYXRoIGQ9Im01NS45Nyw1OS40OGMtLjA2LDAtLjExLDAtLjE3LDAtMS4yOS0uMDYtMi4zNy0uODEtMi45NC0xLjVsLjc3LS42NGMuNDIuNSwxLjI1LDEuMSwyLjIyLDEuMTQuODkuMDQsMS43My0uMzYsMi41NC0xLjE4bC43MS43MWMtLjk4Ljk4LTIuMDMsMS40Ny0zLjEzLDEuNDdaIi8+PHBhdGggZD0ibTcxLjk3LDU5LjQ4Yy0uMDYsMC0uMTEsMC0uMTcsMC0xLjI5LS4wNi0yLjM3LS44MS0yLjk0LTEuNWwuNzctLjY0Yy40NC41MiwxLjI1LDEuMSwyLjIyLDEuMTQuODYuMDQsMS43Mi0uMzYsMi41NC0xLjE4bC43MS43MWMtLjk4Ljk4LTIuMDMsMS40Ny0zLjEzLDEuNDdaIi8+PC9nPjxnIGNsYXNzPSJibGluay1vcGVuIj48Y2lyY2xlIGN4PSI1NiIgY3k9IjU3LjY2IiByPSI0Ii8+PGNpcmNsZSBjeD0iNzIiIGN5PSI1Ny42NiIgcj0iNCIvPjwvZz48cGF0aCBkPSJtNjQsMzVjLTE2LjU3LDAtMzAsMTMuNDMtMzAsMzBzMTMuNDMsMzAsMzAsMzAsMzAtMTMuNDMsMzAtMzAtMTMuNDMtMzAtMzAtMzBabS04LjgxLDMuNDNjLTMuMDIsMi41MS01LjU3LDYuMjctNy4zNSwxMC44NGgtNi45OWMzLjQzLTUuMDMsOC40Ni04Ljg5LDE0LjM0LTEwLjg0Wm0tMTUuNTgsMTIuODRoNy41MmMtMS4yNSwzLjgyLTEuOTksOC4xMi0yLjA5LDEyLjY3aC05LjAxYy4xNy00LjU5LDEuNDUtOC45LDMuNTgtMTIuNjdabS0zLjU5LDE0LjY3aDkuMDFjLjA5LDQuNTUuODIsOC44NSwyLjA1LDEyLjY3aC03LjU0Yy0yLjExLTMuNzgtMy4zNy04LjA5LTMuNTItMTIuNjdabTQuNzUsMTQuNjdoNy4wMmMxLjc5LDQuNjMsNC4zNSw4LjQyLDcuNCwxMC45Ni01LjkzLTEuOTctMTAuOTktNS44Ny0xNC40Mi0xMC45NlptMjIuMjMsMTIuMzNjLTUuNDQtLjUyLTEwLjIxLTUuMjktMTMuMDktMTIuMzNoMTMuMDl2MTIuMzNabTAtMTQuMzNoLTEzLjgzYy0xLjI4LTMuNzgtMi4wNC04LjA5LTIuMTQtMTIuNjdoMTUuOTZ2MTIuNjdabTAtMTQuNjdoLTE1Ljk2Yy4xLTQuNTkuODgtOC45LDIuMTctMTIuNjdoMTMuNzl2MTIuNjdabTAtMTQuNjdoLTEzLjA0YzIuODgtNi45OCw3LjYyLTExLjcsMTMuMDQtMTIuMjJ2MTIuMjJabTI4Ljk3LDE0LjY3aC05LjAxYy0uMS00LjU2LS44NC04Ljg1LTIuMDktMTIuNjdoNy41MmMyLjEzLDMuNzcsMy40MSw4LjA4LDMuNTgsMTIuNjdabS00LjgyLTE0LjY3aC02Ljk5Yy0xLjc5LTQuNTgtNC4zMy04LjMzLTcuMzUtMTAuODQsNS44OSwxLjk2LDEwLjkxLDUuODEsMTQuMzQsMTAuODRabS0yMi4xNS0xMi4yMmM1LjQyLjUyLDEwLjE2LDUuMjQsMTMuMDQsMTIuMjJoLTEzLjA0di0xMi4yMlptMCwxNC4yMmgxMy43OWMxLjI5LDMuNzcsMi4wNyw4LjA4LDIuMTcsMTIuNjdoLTE1Ljk2di0xMi42N1ptMCwxNC42N2gxNS45N2MtLjA5LDQuNTktLjg2LDguOS0yLjE0LDEyLjY3aC0xMy44M3YtMTIuNjdabTAsMjd2LTEyLjMzaDEzLjA5Yy0yLjg4LDcuMDQtNy42NCwxMS44MS0xMy4wOSwxMi4zM1ptNy44MS0xLjM3YzMuMDUtMi41Myw1LjYxLTYuMzMsNy40LTEwLjk2aDcuMDJjLTMuNDMsNS4wOS04LjQ5LDguOTgtMTQuNDIsMTAuOTZabTguMS0xMi45NmMxLjIzLTMuODIsMS45Ny04LjEyLDIuMDUtMTIuNjdoOS4wMWMtLjE1LDQuNTktMS40MSw4LjktMy41MiwxMi42N2gtNy41NFoiLz48cGF0aCBkPSJtMjUsMjcuNDNjMC0uMy4wNi0uNTkuMTYtLjg1bDEwLjEzLDEwLjEzYy4yLjIuNDUuMjkuNzEuMjlzLjUxLS4xLjcxLS4yOWMuMzktLjM5LjM5LTEuMDIsMC0xLjQxbC0xMC4xMy0xMC4xM2MuMjctLjEuNTUtLjE2Ljg1LS4xNmg4LjU3di0yaC04LjU3Yy0yLjQ0LDAtNC40MywxLjk5LTQuNDMsNC40M3Y4LjU3aDJ2LTguNTdaIi8+PHBhdGggZD0ibTEwMS44MywyM2gtOS44M3MwLDIsMCwyaDkuNTlzMCwwLDAsMGwtMTAuMjksMTAuMjljLS4zOS4zOS0uMzksMS4wMiwwLDEuNDEuMi4yLjQ1LjI5LjcxLjI5cy41MS0uMS43MS0uMjlsMTAuMjktMTAuMjlzMCwwLDAtLjAxdjkuNTloMnYtOS44M2MwLTEuNzUtMS40Mi0zLjE3LTMuMTctMy4xN1oiLz48cGF0aCBkPSJtMTAzLDEwMS41OXMwLDAsMC0uMDFsLTEwLjI5LTEwLjI5Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEsMHMtLjM5LDEuMDIsMCwxLjQxbDEwLjI5LDEwLjI5czAsMCwuMDEsMGgtOS41OXYyaDkuODNjMS43NSwwLDMuMTctMS40MiwzLjE3LTMuMTd2LTkuODNoLTJ2OS41OVoiLz48cGF0aCBkPSJtMzUuMjksOTEuMjlsLTEwLjI5LDEwLjI5czAsMCwwLC4wMXYtOS41OWgtMnY5LjgzYzAsMS43NSwxLjQyLDMuMTcsMy4xNywzLjE3aDkuODNzMC0yLDAtMmgtOS41OXMwLDAsLjAxLDBsMTAuMjktMTAuMjljLjM5LS4zOS4zOS0xLjAyLDAtMS40MXMtMS4wMi0uMzktMS40MSwwWiIvPjwvc3ZnPg==" />
                </div>
                <div className="flexBoxTitle font_24 fontMedium" style={{ height: "53px" }}>
                  Scale with confidence
                </div>
                <div className="flexBoxDescription top-buffer10" style={{ height: "78px" }}>
                  Grow into new markets and traffic peaks on cloud-native infrastructure that scales automatically while we handle the operational complexity.
                </div>
                <div className="flexBoxLink">
                  <div className="top-buffer20">
                    <Link href="/services" className="ctaLink"><svg aria-hidden="true" className="ctaLinkSVG" width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                    <g className="ctaLinkSVGExpand" style={{ "--blob-radius": "10px", "--blob-stretch-distance": "30px" } as CSSProperties}>
                      <path className="ctaLinkSVGExpandArcLeft" d="M 10 0 a 10 10 0 1 0 0 20 h 1 v -20 Z"></path>
                      <path className="ctaLinkSVGExpandArcRight" d="M 40 0 a 10 10 0 1 1 0 20 h -1 v -20 z" transform="translate(-30,0)"></path>
                      <g className="ctaLinkSVGExpandBlob" style={{ transformOrigin: "10px 0px" }} transform="translate(10 0) scale(0,1) translate(10 0)">
                        <path className="ctaLinkSVGExpandBlobTop" d="M 10 0 c 7 0, 10 7.5, 15 7.5 s 8 -7.5, 15 -7.5 v 10 h -30 Z" style={{ transformOrigin: "10px 0px" }}></path>
                        <path className="ctaLinkSVGExpandBlobBottom" d="M 10 20 c 7 0, 10 -7.5, 15 -7.5 s 8 7.5, 15 7.5 v -10 h -30 Z" style={{ transformOrigin: "10px 20px" }}></path>
                        <rect className="ctaLinkSVGExpandBlobCenter" x="10" y="0" width="30" height="20" style={{ transformOrigin: "10px 10px" }}></rect>
                      </g>
                    </g>
                    <path className="ctaLinkSVGArrow" d="M8.55225 5.5166L13.0354 9.9998L8.55225 14.483" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg> <span className="ctaLinkText f-text--regular">Learn more</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Slide>
          <Slide asChild direction="up" offset={24} inView inViewOnce delay={1 * 80}>
          <div className="flexBoxItem item2 wrapperWhite9">
            <div className="flexItemContent font_14">
              <div className="flexItemSingle">
                <div className="flexBoxIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="img-responsive" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMSUZFX0VYUEVDVEFOQ1lfMDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMDtzdHJva2Utd2lkdGg6MHB4O308L3N0eWxlPjwvZGVmcz48ZyBjbGFzcz0iYmxpbmstc2h1dCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzEuOTcsMzkuODJjLS4wNiwwLS4xMSwwLS4xNywwLTEuMjktLjA2LTIuMzctLjgxLTIuOTQtMS41bC43Ny0uNjRjLjQ0LjUyLDEuMjUsMS4xLDIuMjIsMS4xNC44Ni4wNCwxLjczLS4zNiwyLjU1LTEuMThsLjcxLjcxYy0uOTguOTgtMi4wMywxLjQ3LTMuMTMsMS40N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04NS45NywzOS44MmMtLjA2LDAtLjExLDAtLjE3LDAtMS4yOS0uMDYtMi4zNy0uODEtMi45NC0xLjVsLjc3LS42NGMuNDQuNTIsMS4yNSwxLjEsMi4yMiwxLjE0Ljg2LjA0LDEuNzMtLjM2LDIuNTUtMS4xOGwuNzEuNzFjLS45OC45OC0yLjAzLDEuNDctMy4xMywxLjQ3WiIvPjwvZz48ZyBjbGFzcz0iYmxpbmstb3BlbiI+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI3MiIgY3k9IjM4IiByPSI0Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI4NiIgY3k9IjM4IiByPSI0Ii8+PC9nPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI4Ny4wOCA1MC45NCA4Ny4wOCA1MC45NCA4Ny4wOCA1MC45NSA4Ny4wOCA1MC45NCIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTk2LDI0bC00MCwuMDdjLTQuNDIsMC04LDMuNTEtOCw3LjkzdjE1LjdzMCwwLDAsMGMtMi4yOC0xLjEtNC43NS0xLjY3LTcuMjMtMS42Ny00LjI4LDAtOC41NywxLjY1LTExLjg1LDQuOTUtNi41Nyw2LjU5LTYuNTcsMTcuMjEsMCwyMy44MSw5LjcsOS43NCwxOS40LDE5LjQ4LDI5LjA5LDI5LjIybDIyLjg1LTIzaDE1LjEzYzQuNDIsMCw4LTMuNTgsOC04VjMyYzAtNC40Mi0zLjU4LTgtOC04Wk01OC4wMiwxMDEuMTJsLTEuNTEtMS41MS0yNi4xNS0yNi4yNmMtNS43NS01Ljc3LTUuNzUtMTUuMTcsMC0yMC45NCwyLjc5LTIuOCw2LjQ5LTQuMzUsMTAuNDEtNC4zNXM3LjYyLDEuNTQsMTAuNDEsNC4zNWw1LjM1LDUuMzgsMS40NCwxLjQ0LDEuNDQtMS40NCw1LjM5LTUuNDFjMi43OS0yLjgsNi40OS00LjM1LDEwLjQxLTQuMzVzNy42MiwxLjU0LDEwLjQxLDQuMzVjNS43NCw1Ljc3LDUuNzQsMTUuMTYsMCwyMC45NGwtMjcuNjIsMjcuOFpNMTAyLDczYzAsMy4zMS0yLjY5LDYtNiw2aC0xMy4xNGw0LjIyLTQuMjVjNi41Ni02LjYsNi41Ny0xNy4yMSwwLTIzLjgxLTMuMjgtMy4zLTcuNTctNC45NC0xMS44NS00Ljk0cy04LjU3LDEuNjUtMTEuODUsNC45NWwtNS4zOSw1LjQxLTUuMzUtNS4zOGMtLjgyLS44Mi0xLjctMS41NC0yLjYzLTIuMTYsMCwwLDAsMCwwLDB2LTE2LjgyYzAtMy4yNywyLjY5LTUuOTMsNi01LjkzbDQwLS4wN2MzLjMxLDAsNiwyLjY5LDYsNnY0MVpNNDguODksNDguMTZjLjM2LjIuNzIuNCwxLjA2LjYzLS4zNS0uMjMtLjctLjQzLTEuMDYtLjYzWiIvPjwvc3ZnPg==" />
                </div>
                <div className="flexBoxTitle font_24 fontMedium" style={{ height: "53px" }}>
                  Maximize product
                  <br />
                  reliability
                </div>
                <div className="flexBoxDescription top-buffer10" style={{ height: "78px" }}>
                  Focus on building great products while we keep them fast, observable, and available with SLA-backed uptime.
                </div>
                <div className="flexBoxLink">
                  <div className="top-buffer20">
                    <Link href="/services" className="ctaLink"><svg aria-hidden="true" className="ctaLinkSVG" width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                    <g className="ctaLinkSVGExpand" style={{ "--blob-radius": "10px", "--blob-stretch-distance": "30px" } as CSSProperties}>
                      <path className="ctaLinkSVGExpandArcLeft" d="M 10 0 a 10 10 0 1 0 0 20 h 1 v -20 Z"></path>
                      <path className="ctaLinkSVGExpandArcRight" d="M 40 0 a 10 10 0 1 1 0 20 h -1 v -20 z" transform="translate(-30,0)"></path>
                      <g className="ctaLinkSVGExpandBlob" style={{ transformOrigin: "10px 0px" }} transform="translate(10 0) scale(0,1) translate(10 0)">
                        <path className="ctaLinkSVGExpandBlobTop" d="M 10 0 c 7 0, 10 7.5, 15 7.5 s 8 -7.5, 15 -7.5 v 10 h -30 Z" style={{ transformOrigin: "10px 0px" }}></path>
                        <path className="ctaLinkSVGExpandBlobBottom" d="M 10 20 c 7 0, 10 -7.5, 15 -7.5 s 8 7.5, 15 7.5 v -10 h -30 Z" style={{ transformOrigin: "10px 20px" }}></path>
                        <rect className="ctaLinkSVGExpandBlobCenter" x="10" y="0" width="30" height="20" style={{ transformOrigin: "10px 10px" }}></rect>
                      </g>
                    </g>
                    <path className="ctaLinkSVGArrow" d="M8.55225 5.5166L13.0354 9.9998L8.55225 14.483" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg> <span className="ctaLinkText f-text--regular">Learn more</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Slide>
          <Slide asChild direction="up" offset={24} inView inViewOnce delay={2 * 80}>
          <div className="flexBoxItem item3 wrapperWhite9">
            <div className="flexItemContent font_14">
              <div className="flexItemSingle">
                <div className="flexBoxIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="img-responsive" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJDQUxFTkRBUiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7c3Ryb2tlLXdpZHRoOjBweDt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImJsaW5rLXNodXQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTIwLjE1LDQ5LjFjLTEuMDMtMS4wMy0xLjUyLTIuMTQtMS40Ny0zLjMuMDYtMS4yOS44MS0yLjM3LDEuNS0yLjk0bC42NC43N2MtLjUyLjQ0LTEuMSwxLjI1LTEuMTQsMi4yMi0uMDQuODcuMzYsMS43MiwxLjE4LDIuNTRsLS43MS43MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0yMC4xNSw2My4xYy0xLjAzLTEuMDMtMS41Mi0yLjE0LTEuNDctMy4zLjA2LTEuMjkuODEtMi4zNywxLjUtMi45NGwuNjQuNzdjLS41Mi40NC0xLjEsMS4yNS0xLjE0LDIuMjItLjA0Ljg3LjM2LDEuNzIsMS4xOCwyLjU0bC0uNzEuNzFaIi8+PC9nPjxnIGNsYXNzPSJibGluay1vcGVuIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjIwLjUiIGN5PSI0NiIgcj0iNCIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMjAuNSIgY3k9IjYwIiByPSI0Ii8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTIyLjUsMzZoLTE0djJoMTRjMy4zMSwwLDYsMi42OSw2LDZ2NDBjMCwzLjMxLTIuNjksNi02LDZoLTE0djJoMTRjNC40MiwwLDgtMy41OCw4LTh2LTQwYzAtNC40Mi0zLjU4LTgtOC04WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTEwOC40NSw1OC45MXYtMTEuMTRjMC00LjQyLTMuNTgtOC04LThoLTcuMDR2LTIuNzdjMC0uNTUtLjQ1LTEtMS0xcy0xLC40NS0xLDF2Mi43N2gtMjJ2LTIuNzdjMC0uNTUtLjQ1LTEtMS0xcy0xLC40NS0xLDF2Mi43N2gtNi45NmMtNC40MiwwLTgsMy41OC04LDh2MzYuMjNjMCw0LjQyLDMuNTgsOCw4LDhoNDBjLjM2LDAsLjctLjAzLDEuMDUtLjA4LjUuMDQsMSwuMDgsMS41MS4wOCw5LjM5LDAsMTctNy42MSwxNy0xNywwLTcuNDgtNC44NC0xMy44Mi0xMS41NS0xNi4wOVptLTU0LTExLjE0YzAtMy4zMSwyLjY5LTYsNi02aDYuOTZ2MS4yM2MwLC41NS40NSwxLDEsMXMxLS40NSwxLTF2LTEuMjNoMjJ2MS4yM2MwLC41NS40NSwxLDEsMXMxLS40NSwxLTF2LTEuMjNoNy4wNGMzLjMxLDAsNiwyLjY5LDYsNnYyaC01MnYtMlptNiw0Mi4yM2MtMy4zMSwwLTYtMi42OS02LTZ2LTMyLjIzaDUydjYuNThjLTEuMTEtLjIzLTIuMjctLjM1LTMuNDUtLjM1LTYuMDksMC0xMS40MiwzLjIxLTE0LjQyLDguMDMsMCwwLDAsMCwwLDAtLjA1LDAtLjA5LS4wMy0uMTMtLjAzaC00Yy0uNTUsMC0xLC40NS0xLDFzLjQ1LDEsMSwxaDMuMDdjLS45NywyLjE0LTEuNTIsNC41LTEuNTIsN3MuNTUsNC44NiwxLjUyLDdoMHMtMy4wNywwLTMuMDcsMGMtLjU1LDAtMSwuNDUtMSwxcy40NSwxLDEsMWg0cy4wOS0uMDIuMTMtLjAzYzAsMCwwLDAsMCwwLDEuNTgsMi41MywzLjc5LDQuNjIsNi40Myw2LjAzaC0zNC41NlptNDIuNTUsMGMtOC4yNywwLTE1LTYuNzMtMTUtMTVzNi43My0xNSwxNS0xNSwxNSw2LjczLDE1LDE1LTYuNzMsMTUtMTUsMTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzYuNDUsNThoLTRjLS41NSwwLTEsLjQ1LTEsMXMuNDUsMSwxLDFoNGMuNTUsMCwxLS40NSwxLTFzLS40NS0xLTEtMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im04NC40NSw2MGg0Yy41NSwwLDEtLjQ1LDEtMXMtLjQ1LTEtMS0xaC00Yy0uNTUsMC0xLC40NS0xLDFzLjQ1LDEsMSwxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTY0LjQ1LDY2aC00Yy0uNTUsMC0xLC40NS0xLDFzLjQ1LDEsMSwxaDRjLjU1LDAsMS0uNDUsMS0xcy0uNDUtMS0xLTFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzYuNDUsNjZoLTRjLS41NSwwLTEsLjQ1LTEsMXMuNDUsMSwxLDFoNGMuNTUsMCwxLS40NSwxLTFzLS40NS0xLTEtMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im02NC40NSw3NGgtNGMtLjU1LDAtMSwuNDUtMSwxcy40NSwxLDEsMWg0Yy41NSwwLDEtLjQ1LDEtMXMtLjQ1LTEtMS0xWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTc2LjQ1LDc0aC00Yy0uNTUsMC0xLC40NS0xLDFzLjQ1LDEsMSwxaDRjLjU1LDAsMS0uNDUsMS0xcy0uNDUtMS0xLTFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNjQuNDUsODJoLTRjLS41NSwwLTEsLjQ1LTEsMXMuNDUsMSwxLDFoNGMuNTUsMCwxLS40NSwxLTFzLS40NS0xLTEtMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03Ni40NSw4MmgtNGMtLjU1LDAtMSwuNDUtMSwxcy40NSwxLDEsMWg0Yy41NSwwLDEtLjQ1LDEtMXMtLjQ1LTEtMS0xWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTg0LjQ1LDc0Yy0uNTUsMC0xLC40NS0xLDFzLjQ1LDEsMSwxaDEuNmMtLjAyLS4zMy0uMDUtLjY2LS4wNS0xcy4wMy0uNjcuMDUtMWgtMS42WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTExMCw3NGgtN3YtN2MwLS41NS0uNDUtMS0xLTFzLTEsLjQ1LTEsMXY5aDljLjU1LDAsMS0uNDUsMS0xcy0uNDUtMS0xLTFaIi8+PC9zdmc+" />
                </div>
                <div className="flexBoxTitle font_24 fontMedium" style={{ height: "53px" }}>
                  Accelerate time
                  <br />
                  to market
                </div>
                <div className="flexBoxDescription top-buffer10" style={{ height: "78px" }}>
                  To win against competitors you need to ship fast. Senior engineers and automated pipelines get you to production sooner.
                </div>
                <div className="flexBoxLink">
                  <div className="top-buffer20">
                    <Link href="/services" className="ctaLink"><svg aria-hidden="true" className="ctaLinkSVG" width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                    <g className="ctaLinkSVGExpand" style={{ "--blob-radius": "10px", "--blob-stretch-distance": "30px" } as CSSProperties}>
                      <path className="ctaLinkSVGExpandArcLeft" d="M 10 0 a 10 10 0 1 0 0 20 h 1 v -20 Z"></path>
                      <path className="ctaLinkSVGExpandArcRight" d="M 40 0 a 10 10 0 1 1 0 20 h -1 v -20 z" transform="translate(-30,0)"></path>
                      <g className="ctaLinkSVGExpandBlob" style={{ transformOrigin: "10px 0px" }} transform="translate(10 0) scale(0,1) translate(10 0)">
                        <path className="ctaLinkSVGExpandBlobTop" d="M 10 0 c 7 0, 10 7.5, 15 7.5 s 8 -7.5, 15 -7.5 v 10 h -30 Z" style={{ transformOrigin: "10px 0px" }}></path>
                        <path className="ctaLinkSVGExpandBlobBottom" d="M 10 20 c 7 0, 10 -7.5, 15 -7.5 s 8 7.5, 15 7.5 v -10 h -30 Z" style={{ transformOrigin: "10px 20px" }}></path>
                        <rect className="ctaLinkSVGExpandBlobCenter" x="10" y="0" width="30" height="20" style={{ transformOrigin: "10px 10px" }}></rect>
                      </g>
                    </g>
                    <path className="ctaLinkSVGArrow" d="M8.55225 5.5166L13.0354 9.9998L8.55225 14.483" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg> <span className="ctaLinkText f-text--regular">Learn more</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Slide>
          <Slide asChild direction="up" offset={24} inView inViewOnce delay={3 * 80}>
          <div className="flexBoxItem item4 wrapperWhite9">
            <div className="flexItemContent font_14">
              <div className="flexItemSingle">
                <div className="flexBoxIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="img-responsive" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJFU1RBVEVfTUFOQUdFTUVOVCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxwYXRoIGQ9Im04OCw0NHYtOGgtMnY4YzAsMy4zMS0yLjY5LDYtNiw2aC0zMmMtMy4zMSwwLTYtMi42OS02LTZ2LThoLTJ2OGMwLDQuNDIsMy41OCw4LDgsOGgzMmM0LjQyLDAsOC0zLjU4LDgtOFoiLz48cGF0aCBkPSJtNDYsNzJoLTdjLS41NSwwLTEsLjQ1LTEsMXMuNDUsMSwxLDFoN2MuNTUsMCwxLS40NSwxLTFzLS40NS0xLTEtMVoiLz48cGF0aCBkPSJtODksNzJoLTdjLS41NSwwLTEsLjQ1LTEsMXMuNDUsMSwxLDFoN2MuNTUsMCwxLS40NSwxLTFzLS40NS0xLTEtMVoiLz48cGF0aCBkPSJtMTE2LDU4aC0xOGMtMi4yMSwwLTQsMS43OS00LDR2MjZjMCwyLjIxLDEuNzksNCw0LDRoMThjMi4yMSwwLDQtMS43OSw0LTR2LTI2YzAtMi4yMS0xLjc5LTQtNC00Wm0tMTQsMzJoLTRjLTEuMSwwLTItLjktMi0ydi0yaDZ2NFptMC02aC02di00aDZ2NFptMC02aC02di00aDZ2NFptOCwxMmgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTgsMTBjMCwxLjEtLjksMi0yLDJoLTR2LTRoNnYyWm0wLTRoLTZ2LTRoNnY0Wm0wLTZoLTZ2LTRoNnY0Wm0wLTZoLTIydi0xMGMwLTEuMS45LTIsMi0yaDE4YzEuMSwwLDIsLjksMiwydjEwWiIvPjxwYXRoIGQ9Im0zMCw1OEgxMmMtMi4yMSwwLTQsMS43OS00LDR2MjZjMCwyLjIxLDEuNzksNCw0LDRoMThjMi4yMSwwLDQtMS43OSw0LTR2LTI2YzAtMi4yMS0xLjc5LTQtNC00Wm0tMTQsMzJoLTRjLTEuMSwwLTItLjktMi0ydi0yaDZ2NFptMC02aC02di00aDZ2NFptMC02aC02di00aDZ2NFptOCwxMmgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTgsMTBjMCwxLjEtLjksMi0yLDJoLTR2LTRoNnYyWm0wLTRoLTZ2LTRoNnY0Wm0wLTZoLTZ2LTRoNnY0Wm0wLTZIMTB2LTEwYzAtMS4xLjktMiwyLTJoMThjMS4xLDAsMiwuOSwyLDJ2MTBaIi8+PHBhdGggZD0ibTczLDU4aC0xOGMtMi4yMSwwLTQsMS43OS00LDR2MjZjMCwyLjIxLDEuNzksNCw0LDRoMThjMi4yMSwwLDQtMS43OSw0LTR2LTI2YzAtMi4yMS0xLjc5LTQtNC00Wm0tMTQsMzJoLTRjLTEuMSwwLTItLjktMi0ydi0yaDZ2NFptMC02aC02di00aDZ2NFptMC02aC02di00aDZ2NFptOCwxMmgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTAtNmgtNnYtNGg2djRabTgsMTBjMCwxLjEtLjksMi0yLDJoLTR2LTRoNnYyWm0wLTRoLTZ2LTRoNnY0Wm0wLTZoLTZ2LTRoNnY0Wm0wLTZoLTIydi0xMGMwLTEuMS45LTIsMi0yaDE4YzEuMSwwLDIsLjksMiwydjEwWiIvPjxnIGNsYXNzPSJibGluay1zaHV0Ij48cGF0aCBkPSJtNjguNiw0Mi4zNWwtLjcxLS43MWMxLjAzLTEuMDMsMi4xMy0xLjUyLDMuMy0xLjQ3LDEuMjkuMDYsMi4zNy44MSwyLjk0LDEuNWwtLjc3LjY0Yy0uNDQtLjUyLTEuMjUtMS4xLTIuMjItMS4xNC0uODctLjA0LTEuNzMuMzYtMi41NCwxLjE4WiIvPjxwYXRoIGQ9Im01NC42LDQyLjM1bC0uNzEtLjcxYzEuMDMtMS4wMywyLjEyLTEuNTIsMy4zLTEuNDcsMS4yOS4wNiwyLjM3LjgxLDIuOTQsMS41bC0uNzcuNjRjLS40NC0uNTItMS4yNS0xLjEtMi4yMi0xLjE0LS44OC0uMDQtMS43Mi4zNi0yLjU0LDEuMThaIi8+PC9nPjxnIGNsYXNzPSJibGluay1vcGVuIj48Y2lyY2xlIGN4PSI3MSIgY3k9IjQyIiByPSI0Ii8+PGNpcmNsZSBjeD0iNTciIGN5PSI0MiIgcj0iNCIvPjwvZz48L3N2Zz4=" />
                </div>
                <div className="flexBoxTitle font_24 fontMedium" style={{ height: "53px" }}>
                  Reduce technical debt
                </div>
                <div className="flexBoxDescription top-buffer10" style={{ height: "78px" }}>
                  Pay down legacy complexity with refactoring, automated testing, and architecture your team can maintain and extend.
                </div>
                <div className="flexBoxLink">
                  <div className="top-buffer20">
                    <Link href="/services" className="ctaLink"><svg aria-hidden="true" className="ctaLinkSVG" width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                    <g className="ctaLinkSVGExpand" style={{ "--blob-radius": "10px", "--blob-stretch-distance": "30px" } as CSSProperties}>
                      <path className="ctaLinkSVGExpandArcLeft" d="M 10 0 a 10 10 0 1 0 0 20 h 1 v -20 Z"></path>
                      <path className="ctaLinkSVGExpandArcRight" d="M 40 0 a 10 10 0 1 1 0 20 h -1 v -20 z" transform="translate(-30,0)"></path>
                      <g className="ctaLinkSVGExpandBlob" style={{ transformOrigin: "10px 0px" }} transform="translate(10 0) scale(0,1) translate(10 0)">
                        <path className="ctaLinkSVGExpandBlobTop" d="M 10 0 c 7 0, 10 7.5, 15 7.5 s 8 -7.5, 15 -7.5 v 10 h -30 Z" style={{ transformOrigin: "10px 0px" }}></path>
                        <path className="ctaLinkSVGExpandBlobBottom" d="M 10 20 c 7 0, 10 -7.5, 15 -7.5 s 8 7.5, 15 7.5 v -10 h -30 Z" style={{ transformOrigin: "10px 20px" }}></path>
                        <rect className="ctaLinkSVGExpandBlobCenter" x="10" y="0" width="30" height="20" style={{ transformOrigin: "10px 10px" }}></rect>
                      </g>
                    </g>
                    <path className="ctaLinkSVGArrow" d="M8.55225 5.5166L13.0354 9.9998L8.55225 14.483" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg> <span className="ctaLinkText f-text--regular">Learn more</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Slide>
          <Slide asChild direction="up" offset={24} inView inViewOnce delay={4 * 80}>
          <div className="flexBoxItem item5 wrapperWhite9">
            <div className="flexItemContent font_14">
              <div className="flexItemSingle">
                <div className="flexBoxIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="img-responsive" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJORVRXT1JLX01BTkFHRU1FTlRfU1lTVEVNIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMDA7c3Ryb2tlLXdpZHRoOjBweDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTguMDksNDNoLTEwLjA5djJoMTAuMDljMy4yNiwwLDUuOTEsMi42NSw1LjkxLDUuOTF2MjYuMThjMCwzLjI2LTIuNjUsNS45MS01LjkxLDUuOTFoLTEwLjA5djJoMTAuMDljNC4zNywwLDcuOTEtMy41NCw3LjkxLTcuOTF2LTI2LjE4YzAtNC4zNy0zLjU0LTcuOTEtNy45MS03LjkxWiIvPjxnIGNsYXNzPSJibGluay1zaHV0Ij48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNS42NSw1Ni4xYy0xLjAzLTEuMDMtMS41Mi0yLjE0LTEuNDctMy4zLjA2LTEuMjkuODEtMi4zNywxLjUtMi45NGwuNjQuNzdjLS41LjQyLTEuMSwxLjI1LTEuMTQsMi4yMi0uMDQuODcuMzYsMS43MywxLjE4LDIuNTRsLS43MS43MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNS42NSw3MC4xYy0xLjAzLTEuMDMtMS41Mi0yLjE0LTEuNDctMy4zLjA2LTEuMjkuODEtMi4zNywxLjUtMi45NGwuNjQuNzdjLS41LjQyLTEuMSwxLjI1LTEuMTQsMi4yMi0uMDQuODcuMzYsMS43MywxLjE4LDIuNTRsLS43MS43MVoiLz48L2c+PGcgY2xhc3M9ImJsaW5rLW9wZW4iPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMTYiIGN5PSI1MyIgcj0iNCIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMTYiIGN5PSI2NyIgcj0iNCIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NS45NCw0NmMxLjY2LDAsMy0xLjM0LDMtM3MtMS4zNC0zLTMtMy0zLDEuMzQtMywzLDEuMzQsMywzLDNaTTQ1Ljk0LDQyYy41NSwwLDEsLjQ1LDEsMXMtLjQ1LDEtMSwxLTEtLjQ1LTEtMSwuNDUtMSwxLTFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTMuOTQsNDZjMS42NiwwLDMtMS4zNCwzLTNzLTEuMzQtMy0zLTMtMywxLjM0LTMsMywxLjM0LDMsMywzWk01My45NCw0MmMuNTUsMCwxLC40NSwxLDFzLS40NSwxLTEsMS0xLS40NS0xLTEsLjQ1LTEsMS0xWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYxLjk0LDQ2YzEuNjYsMCwzLTEuMzQsMy0zcy0xLjM0LTMtMy0zLTMsMS4zNC0zLDMsMS4zNCwzLDMsM1pNNjEuOTQsNDJjLjU1LDAsMSwuNDUsMSwxcy0uNDUsMS0xLDEtMS0uNDUtMS0xLC40NS0xLDEtMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02NCw1NGMtOC44NCwwLTE2LDcuMTYtMTYsMTZzNy4xNiwxNiwxNiwxNiwxNi03LjE2LDE2LTE2LTcuMTYtMTYtMTYtMTZaTTY0LDU2YzIuOTMsMCw1LjU2LDIuODUsNi45OSw3aC0xMy45N2MxLjQzLTQuMTUsNC4wNS03LDYuOTktN1pNNzEuNTYsNjVjLjM2LDEuNTYuNTcsMy4yNS41Nyw1cy0uMjEsMy40NC0uNTcsNWgtMTUuMTFjLS4zNi0xLjU2LS41Ny0zLjI1LS41Ny01cy4yMS0zLjQ0LjU3LTVoMTUuMTFaTTU3LjY2LDU3LjUzYy0xLjE2LDEuNDctMi4xLDMuMzQtMi43Niw1LjQ3aC0zLjAxYzEuMzUtMi4zMywzLjM2LTQuMjQsNS43Ny01LjQ3Wk01MCw3MGMwLTEuNzYuMzQtMy40NC45NC01aDMuNDVjLS4zMywxLjU3LS41MSwzLjI1LS41MSw1cy4xOCwzLjQzLjUxLDVoLTMuNDVjLS42LTEuNTYtLjk0LTMuMjQtLjk0LTVaTTUxLjg5LDc3aDMuMDFjLjY2LDIuMTMsMS42LDQsMi43Niw1LjQ3LTIuNDEtMS4yMy00LjQxLTMuMTMtNS43Ny01LjQ3Wk02NCw4NGMtMi45MywwLTUuNTYtMi44NS02Ljk5LTdoMTMuOTdjLTEuNDMsNC4xNS00LjA1LDctNi45OSw3Wk03MC4zNCw4Mi40N2MxLjE2LTEuNDcsMi4xLTMuMzQsMi43Ni01LjQ3aDMuMDFjLTEuMzUsMi4zMy0zLjM2LDQuMjQtNS43Nyw1LjQ3Wk03OCw3MGMwLDEuNzYtLjM0LDMuNDQtLjk0LDVoLTMuNDVjLjMzLTEuNTcuNTEtMy4yNS41MS01cy0uMTgtMy40My0uNTEtNWgzLjQ1Yy42LDEuNTYuOTQsMy4yNC45NCw1Wk03My4wOSw2M2MtLjY2LTIuMTMtMS42LTQtMi43Ni01LjQ3LDIuNDEsMS4yMyw0LjQyLDMuMTMsNS43Nyw1LjQ3aC0zLjAxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExMiw0OGg0YzIuMjEsMCw0LTEuNzksNC00di00YzAtMi4yMS0xLjc5LTQtNC00aC00Yy0yLjIxLDAtNCwxLjc5LTQsNHYxaC0xLjExYy00LjQyLDAtOCwzLjU4LTgsOHYxNGgtNy44OXYtMTljMC00LjQyLTMuNTgtOC04LThoLTM4Yy00LjQyLDAtOCwzLjU4LTgsOHY0MGMwLDQuNDIsMy41OCw4LDgsOGgzOGM0LjQyLDAsOC0zLjU4LDgtOHYtMTloNy44OXYxNGMwLDQuNDIsMy41OCw4LDgsOGgxLjExdjFjMCwyLjIxLDEuNzksNCw0LDRoNGMyLjIxLDAsNC0xLjc5LDQtNHYtNGMwLTIuMjEtMS43OS00LTQtNGgtNGMtMi4yMSwwLTQsMS43OS00LDR2MWgtMS4xMWMtMy4zMSwwLTYtMi42OS02LTZ2LTE0aDcuMTF2MWMwLDIuMjEsMS43OSw0LDQsNGg0YzIuMjEsMCw0LTEuNzksNC00di00YzAtMi4yMS0xLjc5LTQtNC00aC00Yy0yLjIxLDAtNCwxLjc5LTQsNHYxaC03LjExdi0xNGMwLTMuMzEsMi42OS02LDYtNmgxLjExdjFjMCwyLjIxLDEuNzksNCw0LDRaTTExMCw0MGMwLTEuMS45LTIsMi0yaDRjMS4xLDAsMiwuOSwyLDJ2NGMwLDEuMS0uOSwyLTIsMmgtNGMtMS4xLDAtMi0uOS0yLTJ2LTRaTTQ1LDM4aDM4YzMuMzEsMCw2LDIuNjksNiw2djRoLTUwdi00YzAtMy4zMSwyLjY5LTYsNi02Wk04Myw5MGgtMzhjLTMuMzEsMC02LTIuNjktNi02di0zNGg1MHYzNGMwLDMuMzEtMi42OSw2LTYsNlpNMTEwLDg0YzAtMS4xLjktMiwyLTJoNGMxLjEsMCwyLC45LDIsMnY0YzAsMS4xLS45LDItMiwyaC00Yy0xLjEsMC0yLS45LTItMnYtNFpNMTEwLDYyYzAtMS4xLjktMiwyLTJoNGMxLjEsMCwyLC45LDIsMnY0YzAsMS4xLS45LDItMiwyaC00Yy0xLjEsMC0yLS45LTItMnYtNFoiLz48L3N2Zz4=" />
                </div>
                <div className="flexBoxTitle font_24 fontMedium" style={{ height: "53px" }}>
                  Strengthen security &amp; compliance
                </div>
                <div className="flexBoxDescription top-buffer10" style={{ height: "78px" }}>
                  Harden your applications and infrastructure with security built into the build, and support for SOC 2, GDPR, and HIPAA requirements.
                </div>
                <div className="flexBoxLink">
                  <div className="top-buffer20">
                    <a href="https://www.avangatenetwork.com/" className="ctaLink" target="_blank" rel="noopener"><svg aria-hidden="true" className="ctaLinkSVG" width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                    <g className="ctaLinkSVGExpand" style={{ "--blob-radius": "10px", "--blob-stretch-distance": "30px" } as CSSProperties}>
                      <path className="ctaLinkSVGExpandArcLeft" d="M 10 0 a 10 10 0 1 0 0 20 h 1 v -20 Z"></path>
                      <path className="ctaLinkSVGExpandArcRight" d="M 40 0 a 10 10 0 1 1 0 20 h -1 v -20 z" transform="translate(-30,0)"></path>
                      <g className="ctaLinkSVGExpandBlob" style={{ transformOrigin: "10px 0px" }} transform="translate(10 0) scale(0,1) translate(10 0)">
                        <path className="ctaLinkSVGExpandBlobTop" d="M 10 0 c 7 0, 10 7.5, 15 7.5 s 8 -7.5, 15 -7.5 v 10 h -30 Z" style={{ transformOrigin: "10px 0px" }}></path>
                        <path className="ctaLinkSVGExpandBlobBottom" d="M 10 20 c 7 0, 10 -7.5, 15 -7.5 s 8 7.5, 15 7.5 v -10 h -30 Z" style={{ transformOrigin: "10px 20px" }}></path>
                        <rect className="ctaLinkSVGExpandBlobCenter" x="10" y="0" width="30" height="20" style={{ transformOrigin: "10px 10px" }}></rect>
                      </g>
                    </g>
                    <path className="ctaLinkSVGArrow" d="M8.55225 5.5166L13.0354 9.9998L8.55225 14.483" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg> <span className="ctaLinkText f-text--regular">Learn more</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Slide>
          <Slide asChild direction="up" offset={24} inView inViewOnce delay={5 * 80}>
          <div className="flexBoxItem item6 wrapperWhite9">
            <div className="flexItemContent font_14">
              <div className="flexItemSingle">
                <div className="flexBoxIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="img-responsive" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJUV09fV0FZX0NPTlZFUlNBVElPTiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxnIGNsYXNzPSJibGluay1zaHV0Ij48cGF0aCBkPSJtOTcuNiw0NC4zNWwtLjcxLS43MWMxLjAzLTEuMDMsMi4xMy0xLjUyLDMuMy0xLjQ3LDEuMjkuMDYsMi4zNy44MSwyLjk0LDEuNWwtLjc3LjY0Yy0uNDQtLjUyLTEuMjUtMS4xLTIuMjItMS4xNC0uODYtLjA0LTEuNzMuMzYtMi41NCwxLjE4WiIvPjxwYXRoIGQ9Im04My42LDQ0LjM1bC0uNzEtLjcxYzEuMDMtMS4wMywyLjE0LTEuNTIsMy4zLTEuNDcsMS4yOS4wNiwyLjM3LjgxLDIuOTQsMS41bC0uNzcuNjRjLS40NC0uNTItMS4yNS0xLjEtMi4yMi0xLjE0LS44Ny0uMDQtMS43My4zNi0yLjU1LDEuMThaIi8+PC9nPjxnIGNsYXNzPSJibGluay1vcGVuIj48Y2lyY2xlIGN4PSIxMDAiIGN5PSI0NCIgcj0iNCIvPjxjaXJjbGUgY3g9Ijg2IiBjeT0iNDQiIHI9IjQiLz48L2c+PHBhdGggZD0ibTQ0LDc0aC0yNGMtNC40MiwwLTgsMy41OC04LDh2MTBoMnYtMTBjMC0zLjMxLDIuNjktNiw2LTZoMjRjMy4zMSwwLDYsMi42OSw2LDZ2MTBoMnYtMTBjMC00LjQyLTMuNTgtOC04LThaIi8+PHBhdGggZD0ibTExNCwzNnYxMGMwLDMuMzEtMi42OSw2LTYsNmgtMjRjLTMuMzEsMC02LTIuNjktNi02di0xMGgtMnYxMGMwLDQuNDIsMy41OCw4LDgsOGgyNGM0LjQyLDAsOC0zLjU4LDgtOHYtMTBoLTJaIi8+PHJlY3QgeD0iMTYiIHk9IjQ0IiB3aWR0aD0iMzQiIGhlaWdodD0iMiIvPjxyZWN0IHg9IjU0IiB5PSI0NCIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IHg9IjE2IiB5PSI1MiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjIiLz48cmVjdCB4PSIzNCIgeT0iNTIiIHdpZHRoPSIxOCIgaGVpZ2h0PSIyIi8+PHBhdGggZD0ibTY2LDU0di0xMGMwLTQuNDItMy41OC04LTgtOEgxNmMtNC40MiwwLTgsMy41OC04LDh2MjMuNjhjMCwuOTUuNTcsMS44LDEuNDUsMi4xNi4yOS4xMi41OS4xOC44OS4xOC42MSwwLDEuMjEtLjI0LDEuNjUtLjY5bDYuNDgtNi40N2MuNTMtLjU0LDEuMjYtLjg1LDItLjg1aDM3LjUzYzQuNDIsMCw4LTMuNTgsOC04Wm0tOCw2SDIwLjQ3Yy0xLjI4LDAtMi41My41My0zLjQyLDEuNDRsLTYuNDgsNi40N2MtLjE0LjE0LS4yOS4xMS0uMzYuMDctLjA5LS4wNC0uMjEtLjEyLS4yMS0uMzF2LTIzLjY4YzAtMy4zMSwyLjY5LTYsNi02aDQyYzMuMzEsMCw2LDIuNjksNiw2djEwYzAsMy4zMS0yLjY5LDYtNiw2WiIvPjxyZWN0IHg9IjcwIiB5PSI3NCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiLz48cmVjdCB4PSI5MiIgeT0iNzQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyIi8+PHJlY3QgeD0iNzAiIHk9IjgyIiB3aWR0aD0iNiIgaGVpZ2h0PSIyIi8+PHJlY3QgeD0iODAiIHk9IjgyIiB3aWR0aD0iMjYiIGhlaWdodD0iMiIvPjxwYXRoIGQ9Im0xMTguNTUsNTguMmMtLjg4LS4zNi0xLjg4LS4xNS0yLjU0LjUybC02LjQ4LDYuNDdjLS41MS41Mi0xLjI1LjgxLTIuMDQuODFoLTEuNXMwLDAsMCwwaC0zNmMtNC40MiwwLTgsMy41OC04LDh2MTBjMCw0LjQyLDMuNTgsOCw4LDhoNDJjNC40MiwwLDgtMy41OCw4LTh2LTIzLjY0YzAtLjk1LS41Ny0xLjgtMS40NS0yLjE2Wm0tLjU1LDE1Ljh2MTBjMCwzLjMxLTIuNjksNi02LDZoLTQyYy0zLjMxLDAtNi0yLjY5LTYtNnYtMTBjMC0zLjMxLDIuNjktNiw2LTZoMjZ2LjAzczExLjUtLjAzLDExLjUtLjAzYzEuMzIsMCwyLjU4LS41MiwzLjQ1LTEuNDFsNi40OC02LjQ3Yy4xNC0uMTQuMjktLjExLjM2LS4wNy4wOS4wNC4yMS4xMi4yMS4zMXYxMy42NFoiLz48ZyBjbGFzcz0iYmxpbmstc2h1dCI+PHBhdGggZD0ibTI3Ljk3LDg1LjgzYy0uMDYsMC0uMTEsMC0uMTcsMC0xLjI5LS4wNi0yLjM3LS44MS0yLjk0LTEuNWwuNzctLjY0Yy40NC41MiwxLjI1LDEuMSwyLjIyLDEuMTQuODUuMDQsMS43Mi0uMzYsMi41NC0xLjE4bC43MS43MWMtLjk4Ljk4LTIuMDMsMS40Ny0zLjEzLDEuNDdaIi8+PHBhdGggZD0ibTQxLjk3LDg1LjgzYy0uMDYsMC0uMTEsMC0uMTcsMC0xLjI5LS4wNi0yLjM3LS44MS0yLjk0LTEuNWwuNzctLjY0Yy40NC41MiwxLjI1LDEuMSwyLjIyLDEuMTQuODYuMDQsMS43My0uMzYsMi41NS0xLjE4bC43MS43MWMtLjk4Ljk4LTIuMDMsMS40Ny0zLjEzLDEuNDdaIi8+PC9nPjxnIGNsYXNzPSJibGluay1vcGVuIj48Y2lyY2xlIGN4PSIyOCIgY3k9Ijg0IiByPSI0Ii8+PGNpcmNsZSBjeD0iNDIiIGN5PSI4NCIgcj0iNCIvPjwvZz48L3N2Zz4=" />
                </div>
                <div className="flexBoxTitle font_24 fontMedium" style={{ height: "53px" }}>
                  Partner with a trusted engineering team
                </div>
                <div className="flexBoxDescription top-buffer10" style={{ height: "78px" }}>
                  Since 2014, we&apos;ve helped startups, SaaS companies, and enterprises build and run software that holds up in production.
                </div>
                <div className="flexBoxLink">
                  <div className="top-buffer20">
                    <Link href="/partners" className="ctaLink"><svg aria-hidden="true" className="ctaLinkSVG" width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                    <g className="ctaLinkSVGExpand" style={{ "--blob-radius": "10px", "--blob-stretch-distance": "30px" } as CSSProperties}>
                      <path className="ctaLinkSVGExpandArcLeft" d="M 10 0 a 10 10 0 1 0 0 20 h 1 v -20 Z"></path>
                      <path className="ctaLinkSVGExpandArcRight" d="M 40 0 a 10 10 0 1 1 0 20 h -1 v -20 z" transform="translate(-30,0)"></path>
                      <g className="ctaLinkSVGExpandBlob" style={{ transformOrigin: "10px 0px" }} transform="translate(10 0) scale(0,1) translate(10 0)">
                        <path className="ctaLinkSVGExpandBlobTop" d="M 10 0 c 7 0, 10 7.5, 15 7.5 s 8 -7.5, 15 -7.5 v 10 h -30 Z" style={{ transformOrigin: "10px 0px" }}></path>
                        <path className="ctaLinkSVGExpandBlobBottom" d="M 10 20 c 7 0, 10 -7.5, 15 -7.5 s 8 7.5, 15 7.5 v -10 h -30 Z" style={{ transformOrigin: "10px 20px" }}></path>
                        <rect className="ctaLinkSVGExpandBlobCenter" x="10" y="0" width="30" height="20" style={{ transformOrigin: "10px 10px" }}></rect>
                      </g>
                    </g>
                    <path className="ctaLinkSVGArrow" d="M8.55225 5.5166L13.0354 9.9998L8.55225 14.483" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg> <span className="ctaLinkText f-text--regular">Learn more</span></Link>
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
  );
}