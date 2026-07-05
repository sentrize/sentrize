import type { CSSProperties } from "react";
import Link from "next/link";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";

/* PartnershipBanner — JSX port of the legacy _landing.html "section4" block
   (kept verbatim in markup/classNames for 100% visual fidelity). Static
   Server Component; the Fade primitive is a client component composed
   around the static content exactly like Footer.tsx does. */
export default function PartnershipBanner() {
  return (
    <div className="wrapperContainer wrapper wrapperFogWhite section4">
      <div className="container no-padd">
        <div className="row no-padd">
          <div className="imageContentContainer wrapperRoundCorner wrapperWhite">
            <Fade asChild inView inViewOnce inViewMargin="-80px">
              <div className="imageContentBox">
                <div className="imageBoxAll imageBox">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/images/beyond-payments-image.png" className="img-responsive" alt="" />
                </div>
                <div className="imageBoxAll contentBox">
                  <div className="font_20 colorBlue">
                    AN ENGINEERING PARTNER, NOT A VENDOR
                  </div>
                  <h3 className="font_32 top-buffer20">
                    Beyond delivery - engineering as a long-term partnership
                  </h3>
                  <div className="font_16 top-buffer40">
                    We don&apos;t just ship code and walk away. Backed by a senior team and over a decade of delivery experience, we help you architect, scale, and optimize systems that keep performing as you grow.
                  </div>
                  <div className="top-buffer40">
                    <Link href="/blog" className="ctaLink ctaDark"><svg aria-hidden="true" className="ctaLinkSVG" width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                    <g className="ctaLinkSVGExpand" style={{ "--blob-radius": "10px", "--blob-stretch-distance": "30px" } as CSSProperties}>
                      <path className="ctaLinkSVGExpandArcLeft" d="M 10 0 a 10 10 0 1 0 0 20 h 1 v -20 Z"></path>
                      <path className="ctaLinkSVGExpandArcRight" d="M 40 0 a 10 10 0 1 1 0 20 h -1 v -20 z" transform="translate(-30,0)"></path>
                      <g className="ctaLinkSVGExpandBlob" style={{ transformOrigin: "10px 0px" }} transform="translate(10 0) scale(0,1) translate(10 0)">
                        <path className="ctaLinkSVGExpandBlobTop" d="M 10 0 c 7 0, 10 7.5, 15 7.5 s 8 -7.5, 15 -7.5 v 10 h -30 Z" style={{ transformOrigin: "10px 0px" }}></path>
                        <path className="ctaLinkSVGExpandBlobBottom" d="M 10 20 c 7 0, 10 -7.5, 15 -7.5 s 8 7.5, 15 7.5 v -10 h -30 Z" style={{ transformOrigin: "10px 20px" }}></path>
                        <rect className="ctaLinkSVGExpandBlobCenter" x="10" y="0" width="30" height="20" style={{ transformOrigin: "10px 10px" }}></rect>
                      </g>
                    </g>
                    <path className="ctaLinkSVGArrow" d="M8.55225 5.5166L13.0354 9.9998L8.55225 14.483" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg> <span className="ctaLinkText f-text--regular">Explore our work</span></Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
