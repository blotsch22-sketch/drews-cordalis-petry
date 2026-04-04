import { MUSIC } from "../data/content";

export default function MusicSection() {
  return (
    <section id="musik" className="py-24 md:py-32 bg-[#F6E7D8]/40">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{MUSIC.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            {MUSIC.headline}
          </h2>
          <p className="text-[#2F2A26]/55 text-base md:text-lg leading-relaxed">
            {MUSIC.subline}
          </p>
        </div>

        {/* Spotify Album Player */}
        {MUSIC.spotifyAlbumId && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="card p-5 md:p-6">
              <iframe
                src={`https://open.spotify.com/embed/album/${MUSIC.spotifyAlbumId}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Album Player"
                className="rounded-lg"
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>
        )}

        {/* Release Cards – gleiche Höhe durch flex-col + grow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {MUSIC.releases.map((release, i) => (
            <div key={i} className="card group flex flex-col">
              <div className="p-5 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-[#E97A6A] font-semibold font-['Montserrat'] tracking-wide">
                    {release.year}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#2F2A26]/15" />
                  <span className="text-xs text-[#2F2A26]/35">Album: Das Beste</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#2F2A26] mb-2">{release.title}</h3>

                {/* Description – feste Mindesthöhe für Gleichlauf */}
                <p className="text-[#2F2A26]/45 text-sm leading-relaxed mb-4 min-h-[3.5rem]">
                  {release.description}
                </p>

                {/* Spotify Track Player – pushed nach unten durch flex-grow */}
                <div className="mt-auto">
                  {release.spotifyTrackId && (
                    <div className="mb-4">
                      <iframe
                        src={`https://open.spotify.com/embed/track/${release.spotifyTrackId}?utm_source=generator&theme=0`}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title={release.title}
                        className="rounded-lg"
                        style={{ borderRadius: "12px" }}
                      />
                    </div>
                  )}

                  {/* Streaming Links */}
                  <div className="flex flex-wrap gap-2">
                    {release.streamingLinks.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-[#2F2A26]/45 hover:text-[#E97A6A] bg-[#F6E7D8]/60 hover:bg-[#E97A6A]/10 px-3 py-1.5 rounded-full transition-all"
                      >
                        {link.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
