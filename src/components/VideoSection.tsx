import { useState } from "react";
import { VIDEOS } from "../data/content";

function VideoCard({ video }: { video: (typeof VIDEOS.items)[0] }) {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = video.thumbnail
    || (video.youtubeId ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg` : "");

  return (
    <div className="card group">
      <div className="relative aspect-video overflow-hidden">
        {playing && video.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        ) : (
          <>
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#F6E7D8] to-[#FFF8F1] flex items-center justify-center">
                <svg className="w-16 h-16 text-[#E97A6A]/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            {/* Play overlay */}
            <div className="absolute inset-0 bg-[#2F2A26]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => video.youtubeId && setPlaying(true)}
                className="w-16 h-16 rounded-full bg-[#E97A6A] flex items-center justify-center shadow-lg shadow-[#E97A6A]/20 hover:scale-110 transition-transform"
                aria-label={`${video.title} abspielen`}
              >
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            {/* Always-visible play icon on mobile */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity lg:hidden">
              <div className="w-14 h-14 rounded-full bg-[#E97A6A]/90 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-[#2F2A26] mb-1">{video.title}</h3>
        <p className="text-[#2F2A26]/65 text-sm leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section id="videos" className="py-24 md:py-32 bg-[#FFF8F1]">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{VIDEOS.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            {VIDEOS.headline}
          </h2>
          <p className="text-[#2F2A26]/70 text-base md:text-lg leading-relaxed">
            {VIDEOS.subline}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.items.map((video, i) => (
            <VideoCard key={i} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
