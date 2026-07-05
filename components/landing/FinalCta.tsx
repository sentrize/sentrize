import Link from "next/link";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";

export default function FinalCta() {
  return (
    <Fade asChild inView inViewOnce inViewMargin="-80px">
    <div className="wrapGetContainer boxRotateWrap">
      <div className="boxRotate">
        <div className="container no-padd">
          <div className="row clearfix borderRadius32">
            <div className="footerGetLeft text">
              <div>
                <div className="getStartedTextBox text-center">
                  <h2 className="black buffer0 h1_52">Ready to build your next product with confidence?</h2>
                  <div className="black fontRegular_20 top-buffer10">Tell us what you&apos;re building and we&apos;ll show you the fastest reliable path to production.</div>
                </div>
              </div>
            </div>
            <div className="footerGetRight top-buffer30">
              <div>
                <div className="getStartedBtnBox text-center">
                  <Link className="btn normal ghostDarkGray" href="/contact">Talk to engineering</Link>
                  <Link className="btn normal blue" href="/pricing">Start a project</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
}