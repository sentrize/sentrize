/* VideoModal — JSX port of the legacy _landing.html video-lightbox shell.
   Purely static markup: Hero.tsx wires up the open/close interactions
   against these exact ids (#video, #linkFullBox, #closeVideo) via
   document.querySelector from its own effect, so this stays a plain
   Server Component with no logic of its own. */
export default function VideoModal() {
  return (
    <div id="video">
      <div className="videoBox borderRadius32">
        <div id="closeVideo" className="siteClose siteCloseWhite">
          Close
        </div>
        <div id="linkFullBox" className="videoIframe top-buffer20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="imgResponsive center-block" src="/assets/images/homepage-img-video.png" alt="Sentrize" />
        </div>
      </div>
    </div>
  );
}