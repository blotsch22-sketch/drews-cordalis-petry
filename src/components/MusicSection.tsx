import { useState } from "react";
import { MUSIC } from "../data/content";

function SpotifyTrackCard({
  title,
  artist = "DREWS CORDALIS PETRY",
  onLoad,
  compact = false,
}: {
  title: string;
  artist?: string;
  onLoad: () => void;
  compact?: boolean;
}) {
  return (
    <button
      onClick={onLoad}
      className={`w-full flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#282828] rounded-xl transition-colors group cursor-pointer ${compact ? "p-2.5" : "p-4"}`}
    >
      {/* Album art */}
      <img
        src="/images/album-cover.jpg"
        alt="Das Beste – Album Cover"
        className={`${compact ? "w-12 h-12" : "w-14 h-14"} rounded-lg object-cover flex-shrink-0`}
      />

      {/* Song info */}
      <div className="flex-1 text-left min-w-0">
        <p className={`font-semibold text-white truncate ${compact ? "text-xs" : "text-sm"}`}>{title}</p>
        <p className={`text-white/50 truncate ${compact ? "text-[10px]" : "text-xs"}`}>{artist}</p>
      </div>

      {/* Play button */}
      <div className={`${compact ? "w-8 h-8" : "w-10 h-10"} rounded-full bg-[#1DB954] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg`}>
        <svg className={`${compact ? "w-3.5 h-3.5" : "w-4 h-4"} text-black ml-0.5`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </button>
  );
}

function SpotifyAlbumCard({
  title,
  artist = "DREWS CORDALIS PETRY",
  subtitle = "Das Beste · 2025",
  onLoad,
}: {
  title: string;
  artist?: string;
  subtitle?: string;
  onLoad: () => void;
}) {
  return (
    <button
      onClick={onLoad}
      className="w-full bg-[#1a1a1a] hover:bg-[#282828] rounded-xl p-5 transition-colors group cursor-pointer"
    >
      <div className="flex items-center gap-4">
        {/* Album cover */}
        <img
          src="/images/album-cover.jpg"
          alt="Das Beste – Album Cover"
          className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
        />

        {/* Album info */}
        <div className="flex-1 text-left">
          <p className="text-lg font-bold text-white">{title}</p>
          <p className="text-sm text-white/60">{artist}</p>
          <p className="text-xs text-white/35 mt-0.5">{subtitle}</p>
        </div>

        {/* Play button */}
        <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg">
          <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <p className="text-[10px] text-white/25 mt-3 text-left">
        Klick lädt Spotify-Inhalte. Dabei werden Daten an Spotify übermittelt.
      </p>
    </button>
  );
}

export default function MusicSection() {
  const [albumLoaded, setAlbumLoaded] = useState(false);
  const [loadedTracks, setLoadedTracks] = useState<Set<number>>(new Set());

  const handleTrackLoad = (index: number) => {
    setLoadedTracks((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

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
              {albumLoaded ? (
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
              ) : (
                <SpotifyAlbumCard
                  title="Das Beste"
                  onLoad={() => setAlbumLoaded(true)}
                />
              )}
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
                      {loadedTracks.has(i) ? (
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
                      ) : (
                        <SpotifyTrackCard
                          title={release.title}
                          onLoad={() => handleTrackLoad(i)}
                          compact
                        />
                      )}
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
