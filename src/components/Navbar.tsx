import { useState, useEffect } from "react";
import { SITE, NAV_ITEMS } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Im Hero-Bereich auf Desktop: weiße Schrift auf Video. Mobile immer dunkel.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const isHeroArea = !scrolled && !isMobile;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMobile
            ? "bg-[#FFF8F1]/95 backdrop-blur-md border-b border-[#2F2A26]/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className={`font-['Montserrat'] font-extrabold text-lg md:text-xl tracking-tight transition-colors ${
              isHeroArea ? "text-white hover:text-[#F2C14E]" : "text-[#2F2A26] hover:text-[#E97A6A]"
            }`}
          >
            {SITE.bandName}
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? isHeroArea
                        ? "text-[#F2C14E] bg-white/10"
                        : "text-[#E97A6A] bg-[#E97A6A]/8"
                      : isHeroArea
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-[#2F2A26]/60 hover:text-[#2F2A26] hover:bg-[#2F2A26]/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isHeroArea ? "text-white/80 hover:bg-white/10" : "text-[#2F2A26]/70 hover:bg-[#2F2A26]/5"
            }`}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-[#2F2A26]/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bottom-0 z-50 lg:hidden bg-[#FFF8F1]/98 backdrop-blur-md overflow-y-auto">
            <div className="section-container py-8 flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                  className="block px-4 py-4 text-lg font-medium text-[#2F2A26]/80 hover:text-[#E97A6A] hover:bg-[#F6E7D8]/50 rounded-xl transition-all"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-[#2F2A26]/8">
                <a
                  href="#booking"
                  onClick={(e) => { e.preventDefault(); handleClick("#booking"); }}
                  className="btn-primary w-full text-center"
                >
                  Booking anfragen
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
