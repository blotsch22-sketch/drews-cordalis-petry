import { useEffect, useState } from "react";
import { HERO } from "../data/content";
export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const canLoadYouTube = true; // Stummes Hintergrundvideo = berechtigtes Interesse, kein Consent nötig

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!HERO.backgroundVideoId || !canLoadYouTube) return;

    const initPlayer = () => {
      // Nur initialisieren wenn das Element existiert und noch kein iframe drin ist
      const el = document.getElementById("hero-video");
      if (!el || el.tagName === "IFRAME") return;

      new (window as any).YT.Player("hero-video", {
        videoId: HERO.backgroundVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playlist: HERO.backgroundVideoId,
          modestbranding: 1,
          iv_load_policy: 3,
          disablekb: 1,
          playsinline: 1,
          start: 4,
          vq: "hd2160",
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.setPlaybackQuality("hd2160");
            event.target.playVideo();
            setVideoReady(true);
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              event.target.seekTo(4);
              event.target.playVideo();
            }
          },
        },
      });
    };

    // YouTube API schon geladen? Direkt initialisieren. Sonst Script laden.
    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!existing) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      delete (window as any).onYouTubeIframeAPIReady;
    };
  }, [canLoadYouTube]);

  const videoBlock = !canLoadYouTube ? null : (
    <>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none bg-[#2F2A26]">
        <div
          className="relative w-full"
          style={{
            aspectRatio: "16/9",
            maxHeight: "100vh",
            maxWidth: "calc(100vh * 16 / 9)",
            minWidth: "100%",
            minHeight: "calc(100vw * 9 / 16)",
          }}
        >
          <div id="hero-video" className="absolute inset-0 w-full h-full" />
        </div>
      </div>
      <div
        className={`absolute inset-0 bg-[#2F2A26] transition-opacity duration-[2000ms] ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />
    </>
  );

  if (isMobile) {
    return (
      <section id="hero">
        {/* Abstand oben */}
        <div className="h-20 bg-[#FFF8F1]" />

        {/* Video mit Text */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#FFF8F1] to-transparent z-10 pointer-events-none" />

          <div className="relative w-full aspect-video bg-[#2F2A26] overflow-hidden">
            {HERO.backgroundVideoId && videoBlock}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-5">
              <h1 className="text-3xl font-extrabold leading-[1.1] mb-2 tracking-tight text-white text-center">
                {HERO.headline}
                <br />
                <span className="gold-gradient">{HERO.headlineAccent}</span>
              </h1>
              <p className="text-xs text-white/80 leading-relaxed max-w-xs mx-auto text-center font-light">
                {HERO.subline}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FFF8F1] to-transparent z-10 pointer-events-none" />
        </div>

        {/* Buttons */}
        <div className="bg-[#FFF8F1] px-5 pt-6 pb-10">
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            <a href="#booking" className="btn-primary text-base px-8 py-4 w-full text-center">
              {HERO.ctaPrimary}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#referenzen" className="btn-secondary text-base px-8 py-4 w-full text-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {HERO.backgroundVideoId ? videoBlock : HERO.backgroundImage ? (
          <img src={HERO.backgroundImage} alt="DREWS CORDALIS PETRY Live" className="w-full h-full object-cover" loading="eager" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#2F2A26] via-[#3d3530] to-[#2F2A26]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F2A26]/50 via-[#2F2A26]/30 to-[#FFF8F1]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#E97A6A]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#F2C14E]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative section-container text-center py-32 pt-40">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6 tracking-tight text-white">
            {HERO.headline}
            <br />
            <span className="gold-gradient">{HERO.headlineAccent}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto mb-10 font-light">
            {HERO.subline}
          </p>

          <div className="flex flex-row gap-4 justify-center">
            <a href="#booking" className="btn-hero-primary text-base px-8 py-4">
              {HERO.ctaPrimary}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#referenzen" className="btn-hero-secondary text-base px-8 py-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
