import { useState } from "react";
import { REFERENCES } from "../data/content";
import type { ReferenceClip } from "../data/content";
function ClipCard({ clip }: { clip: ReferenceClip }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${clip.youtubeId}/maxresdefault.jpg`;

  return (
    <div className="card group">
      <div className="relative aspect-video overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${clip.youtubeId}?autoplay=1&rel=0`}
            title={`${clip.title} – ${clip.show}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        ) : (
          <>
            <img
              src={thumbnail}
              alt={`${clip.title} – ${clip.show}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2F2A26]/60 via-transparent to-transparent" />

            {/* Show badge top-left */}
            <div className="absolute top-3 left-3">
              <span className="bg-white/90 backdrop-blur-sm text-[#2F2A26] text-[11px] font-semibold font-['Montserrat'] px-2.5 py-1 rounded-full shadow-sm">
                {clip.show}
              </span>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setPlaying(true)}
                className="w-14 h-14 rounded-full bg-[#E97A6A] flex items-center justify-center shadow-lg shadow-[#E97A6A]/25 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                aria-label={`${clip.title} abspielen`}
              >
                <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Title bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md">
                {clip.title}
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ReferencesSection() {
  return (
    <section id="referenzen" className="py-24 md:py-32 bg-[#F6E7D8]/40">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{REFERENCES.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            {REFERENCES.headline}
          </h2>
          <p className="text-[#2F2A26]/55 text-base md:text-lg leading-relaxed">
            {REFERENCES.subline}
          </p>
        </div>

        {/* Video Clip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REFERENCES.clips.map((clip, i) => (
            <ClipCard key={i} clip={clip} />
          ))}
        </div>

        {/* Quote */}
        {REFERENCES.quote && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative">
              <svg className="w-10 h-10 text-[#E97A6A]/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <blockquote className="text-lg md:text-xl text-[#2F2A26] leading-relaxed italic mb-4 font-medium">
                &bdquo;{REFERENCES.quote.text}&ldquo;
              </blockquote>
              <cite className="text-sm text-[#E97A6A] not-italic font-semibold">
                — {REFERENCES.quote.author}
              </cite>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
