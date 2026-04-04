/**
 * EventTypesSection – 9 kompakte, klickbare Event-Badges
 * Klick scrollt zu Booking und wählt den Event-Typ vor
 */
import { EVENT_TYPES, type EventTypeValue } from "../data/content";

interface Props {
  onEventSelect: (eventType: EventTypeValue) => void;
}

const iconMap: Record<EventTypeValue, React.ReactNode> = {
  stadtfest: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="20" width="32" height="12" rx="2" fill="currentColor" fillOpacity={0.06} />
      <path d="M4 20h32" strokeWidth={2} />
      <path d="M6 20l4-10h20l4 10" fill="currentColor" fillOpacity={0.04} strokeWidth={1.4} />
      <line x1="10" y1="10" x2="10" y2="20" strokeWidth={1.2} opacity={0.4} />
      <line x1="30" y1="10" x2="30" y2="20" strokeWidth={1.2} opacity={0.4} />
      <circle cx="15" cy="12" r="1" fill="currentColor" fillOpacity={0.3} stroke="none" />
      <circle cx="20" cy="11.5" r="1" fill="currentColor" fillOpacity={0.35} stroke="none" />
      <circle cx="25" cy="12" r="1" fill="currentColor" fillOpacity={0.3} stroke="none" />
      <line x1="20" y1="16" x2="20" y2="20" strokeWidth={1.4} />
      <circle cx="20" cy="15" r="2" fill="currentColor" fillOpacity={0.1} strokeWidth={1.4} />
    </svg>
  ),
  firmenfeier: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="24" height="8" rx="1.5" fill="currentColor" fillOpacity={0.06} />
      <path d="M8 6h24" strokeWidth={1.8} />
      <line x1="20" y1="8" x2="20" y2="14" strokeWidth={1.2} />
      <circle cx="20" cy="7.5" r="1.5" fill="currentColor" fillOpacity={0.15} strokeWidth={1.2} />
      <rect x="4" y="22" width="12" height="1.5" rx="0.75" fill="currentColor" fillOpacity={0.15} strokeWidth={1.3} />
      <line x1="7" y1="23.5" x2="7" y2="30" strokeWidth={1.3} />
      <line x1="13" y1="23.5" x2="13" y2="30" strokeWidth={1.3} />
      <rect x="24" y="22" width="12" height="1.5" rx="0.75" fill="currentColor" fillOpacity={0.15} strokeWidth={1.3} />
      <line x1="27" y1="23.5" x2="27" y2="30" strokeWidth={1.3} />
      <line x1="33" y1="23.5" x2="33" y2="30" strokeWidth={1.3} />
      <path d="M9 22v-3l1-2h0l1 2v3" strokeWidth={1} fill="currentColor" fillOpacity={0.1} />
      <path d="M29 22v-3l1-2h0l1 2v3" strokeWidth={1} fill="currentColor" fillOpacity={0.1} />
      <line x1="2" y1="30" x2="38" y2="30" strokeWidth={1.2} opacity={0.3} />
    </svg>
  ),
  festival: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="16" width="32" height="4" rx="1.5" fill="currentColor" fillOpacity={0.06} />
      <path d="M4 16h32" strokeWidth={2} />
      <path d="M14 2l-5 14" strokeWidth={1} opacity={0.15} />
      <path d="M14 2l5 14" strokeWidth={1} opacity={0.15} />
      <path d="M26 2l-5 14" strokeWidth={1} opacity={0.15} />
      <path d="M26 2l5 14" strokeWidth={1} opacity={0.15} />
      <circle cx="14" cy="2" r="1.5" fill="currentColor" fillOpacity={0.2} stroke="none" />
      <circle cx="26" cy="2" r="1.5" fill="currentColor" fillOpacity={0.2} stroke="none" />
      <circle cx="20" cy="10" r="2" fill="currentColor" fillOpacity={0.15} strokeWidth={1.4} />
      <line x1="20" y1="12" x2="20" y2="16" strokeWidth={1.5} />
      <path d="M7 26v-4" strokeWidth={2.2} opacity={0.4} />
      <path d="M12 25v-5" strokeWidth={2.2} opacity={0.5} />
      <path d="M17 26v-6" strokeWidth={2.2} opacity={0.45} />
      <path d="M23 26v-6" strokeWidth={2.2} opacity={0.45} />
      <path d="M28 25v-5" strokeWidth={2.2} opacity={0.5} />
      <circle cx="7" cy="29" r="2" fill="currentColor" fillOpacity={0.1} stroke="none" />
      <circle cx="12" cy="28.5" r="2.2" fill="currentColor" fillOpacity={0.08} stroke="none" />
      <circle cx="17" cy="29" r="2" fill="currentColor" fillOpacity={0.1} stroke="none" />
      <circle cx="23" cy="29" r="2" fill="currentColor" fillOpacity={0.1} stroke="none" />
      <circle cx="28" cy="28.5" r="2.2" fill="currentColor" fillOpacity={0.08} stroke="none" />
    </svg>
  ),
  openair: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="30" cy="8" r="4.5" fill="currentColor" fillOpacity={0.1} strokeWidth={1.5} />
      <line x1="30" y1="1" x2="30" y2="2.5" strokeWidth={1.4} />
      <line x1="36" y1="8" x2="37.5" y2="8" strokeWidth={1.3} />
      <line x1="34.2" y1="3.8" x2="35.5" y2="2.5" strokeWidth={1.2} />
      <line x1="34.2" y1="12.2" x2="35.5" y2="13.5" strokeWidth={1.2} />
      <line x1="25.8" y1="3.8" x2="24.5" y2="2.5" strokeWidth={1.2} />
      <rect x="4" y="22" width="32" height="10" rx="2" fill="currentColor" fillOpacity={0.05} />
      <path d="M4 22h32" strokeWidth={2} />
      <path d="M6 22l3-7h22l3 7" strokeWidth={1.4} fill="currentColor" fillOpacity={0.03} />
      <path d="M17 18v-5" strokeWidth={1.3} />
      <circle cx="15.5" cy="18" r="1.5" fill="currentColor" fillOpacity={0.15} />
      <path d="M24 17v-5" strokeWidth={1.3} />
      <circle cx="22.5" cy="17" r="1.5" fill="currentColor" fillOpacity={0.15} />
      <path d="M17 13c2-1.5 5-1.5 7 0" strokeWidth={1} opacity={0.4} />
    </svg>
  ),
  schlagerabend: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="13" y="4" width="14" height="18" rx="7" fill="currentColor" fillOpacity={0.07} strokeWidth={1.8} />
      <line x1="13" y1="10" x2="27" y2="10" strokeWidth={0.8} opacity={0.2} />
      <line x1="13" y1="14" x2="27" y2="14" strokeWidth={0.8} opacity={0.2} />
      <line x1="13" y1="18" x2="27" y2="18" strokeWidth={0.8} opacity={0.15} />
      <path d="M10 20c0 6 4 9 10 9s10-3 10-9" strokeWidth={1.6} />
      <line x1="20" y1="29" x2="20" y2="34" strokeWidth={2} />
      <line x1="14" y1="34" x2="26" y2="34" strokeWidth={2.5} />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" fillOpacity={0.25} stroke="none" />
      <line x1="8" y1="5.5" x2="8" y2="4.5" strokeWidth={1} opacity={0.3} />
      <line x1="5.8" y1="6.5" x2="5" y2="5.8" strokeWidth={1} opacity={0.25} />
      <line x1="10.2" y1="6.5" x2="11" y2="5.8" strokeWidth={1} opacity={0.25} />
      <circle cx="33" cy="6" r="1" fill="currentColor" fillOpacity={0.2} stroke="none" />
    </svg>
  ),
  mallorca: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 34c0.5-8 2-14 3.5-20" strokeWidth={2} />
      <path d="M15.5 14c-7-1-11 3-9 5.5" fill="currentColor" fillOpacity={0.07} strokeWidth={1.3} />
      <path d="M15.5 14c-5-5-3-12 1-12" fill="currentColor" fillOpacity={0.05} strokeWidth={1.3} />
      <path d="M15.5 14c3-7 8-9 10-5" fill="currentColor" fillOpacity={0.07} strokeWidth={1.3} />
      <path d="M15.5 14c7-2 10 1 9 5" fill="currentColor" fillOpacity={0.05} strokeWidth={1.3} />
      <path d="M2 34c3-2 6 0 9-2s6 0 9-2s6 0 9-2s6 0 9-2" strokeWidth={1.2} opacity={0.25} />
      <path d="M30 22v-8" strokeWidth={1.5} />
      <circle cx="28" cy="22" r="2.5" fill="currentColor" fillOpacity={0.15} strokeWidth={1.3} />
      <path d="M30 14c2-1 4 0 4 1.5" strokeWidth={1.2} />
      <circle cx="34" cy="5" r="2.5" fill="currentColor" fillOpacity={0.1} strokeWidth={1.2} />
      <line x1="34" y1="0.5" x2="34" y2="1.5" strokeWidth={1.1} />
      <line x1="37.5" y1="5" x2="38.5" y2="5" strokeWidth={1} />
    </svg>
  ),
  sommerfest: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="10" r="5" fill="currentColor" fillOpacity={0.1} strokeWidth={1.5} />
      <line x1="14" y1="2.5" x2="14" y2="4" strokeWidth={1.4} />
      <line x1="14" y1="16" x2="14" y2="17.5" strokeWidth={1.2} />
      <line x1="6.5" y1="10" x2="8" y2="10" strokeWidth={1.4} />
      <line x1="20" y1="10" x2="21.5" y2="10" strokeWidth={1.4} />
      <line x1="8.8" y1="4.8" x2="9.8" y2="5.8" strokeWidth={1.2} />
      <line x1="19.2" y1="4.8" x2="18.2" y2="5.8" strokeWidth={1.2} />
      <path d="M26 12h10" strokeWidth={1.8} />
      <path d="M26 12l5 9" strokeWidth={1.5} />
      <path d="M36 12l-5 9" strokeWidth={1.5} />
      <line x1="31" y1="21" x2="31" y2="28" strokeWidth={1.5} />
      <line x1="27" y1="28" x2="35" y2="28" strokeWidth={2} />
      <path d="M29 12c0-3 2-4.5 2-4.5s2 1.5 2 4.5" fill="currentColor" fillOpacity={0.15} strokeWidth={1.1} />
      <line x1="31" y1="7.5" x2="31" y2="12" strokeWidth={1} />
    </svg>
  ),
  karneval: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="12" fill="currentColor" fillOpacity={0.05} strokeWidth={1.8} />
      <path d="M12 12c2-8 6-10 8-10s6 2 8 10" fill="currentColor" fillOpacity={0.08} strokeWidth={1.5} />
      <circle cx="20" cy="1.5" r="2" fill="currentColor" fillOpacity={0.25} strokeWidth={1.2} />
      <circle cx="15.5" cy="18" r="1.8" fill="currentColor" fillOpacity={0.15} strokeWidth={1.2} />
      <circle cx="24.5" cy="18" r="1.8" fill="currentColor" fillOpacity={0.15} strokeWidth={1.2} />
      <circle cx="15.5" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="24.5" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="20" cy="22" r="2.2" fill="currentColor" fillOpacity={0.2} strokeWidth={1.3} />
      <path d="M15 27c2 2.5 5 3 7 2.5" strokeWidth={1.4} fill="none" />
      <circle cx="4" cy="6" r="1.3" fill="currentColor" fillOpacity={0.25} stroke="none" />
      <circle cx="36" cy="4" r="1" fill="currentColor" fillOpacity={0.2} stroke="none" />
      <circle cx="6" cy="32" r="1" fill="currentColor" fillOpacity={0.2} stroke="none" />
      <circle cx="35" cy="30" r="1.3" fill="currentColor" fillOpacity={0.25} stroke="none" />
    </svg>
  ),
  aftershow: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="26" cy="10" r="7" fill="currentColor" fillOpacity={0.05} strokeWidth={1.6} />
      <line x1="26" y1="1" x2="26" y2="3" strokeWidth={1.4} />
      <ellipse cx="26" cy="10" rx="7" ry="2.5" strokeWidth={0.7} opacity={0.2} />
      <ellipse cx="26" cy="10" rx="2.5" ry="7" strokeWidth={0.7} opacity={0.2} />
      <line x1="18" y1="6" x2="15" y2="3" strokeWidth={0.9} opacity={0.2} />
      <line x1="34" y1="6" x2="37" y2="3" strokeWidth={0.9} opacity={0.2} />
      <circle cx="15" cy="3" r="0.8" fill="currentColor" fillOpacity={0.2} stroke="none" />
      <circle cx="37" cy="3" r="0.8" fill="currentColor" fillOpacity={0.2} stroke="none" />
      <rect x="4" y="14" width="10" height="16" rx="2" fill="currentColor" fillOpacity={0.06} strokeWidth={1.5} />
      <line x1="4" y1="18" x2="14" y2="18" strokeWidth={1} opacity={0.2} />
      <path d="M4 14c0-2 2-3 5-3s5 1 5 3" fill="currentColor" fillOpacity={0.1} strokeWidth={1.2} />
      <path d="M14 18c3 0 3 5 0 5" strokeWidth={1.4} fill="none" />
      <line x1="4" y1="30" x2="14" y2="30" strokeWidth={1.8} />
      <circle cx="34" cy="24" r="1" fill="currentColor" fillOpacity={0.2} stroke="none" />
    </svg>
  ),
};

export default function EventTypesSection({ onEventSelect }: Props) {
  return (
    <section id="events" className="py-20 md:py-28 bg-[#FBF5EE]">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-label">Einsatzbereiche</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 text-[#2F2A26]">
            Passend für Events, bei denen Stimmung zählt
          </h2>
          <p className="text-[#2F2A26]/50 text-base md:text-lg">
            Von Stadtfest bis Aftershow. Flexibel einsetzbar, publikumsnah und live erprobt.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-[680px] mx-auto mb-12">
          {EVENT_TYPES.map((event) => (
            <button
              key={event.value}
              onClick={() => onEventSelect(event.value)}
              aria-label={`${event.label} – Booking anfragen`}
              className="group bg-[#F8F6F3] rounded-2xl border border-[#EADFD4] px-3 py-5 md:px-4 md:py-6 text-center cursor-pointer hover:bg-white hover:border-[#F3CFC7] hover:shadow-md hover:shadow-[#E78372]/8 hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
              <div className="w-12 h-12 md:w-[3.75rem] md:h-[3.75rem] mx-auto mb-2 text-[#E78372] group-hover:scale-110 transition-transform duration-300">
                {iconMap[event.value]}
              </div>
              <h3 className="font-['Montserrat'] font-bold text-[#2F2A26] text-[11px] md:text-sm tracking-wide leading-tight">
                {event.label}
              </h3>
            </button>
          ))}
        </div>

        <div className="text-center">
          <a href="#booking" className="btn-primary text-base px-8 py-4">
            Jetzt für Ihr Event buchen
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
