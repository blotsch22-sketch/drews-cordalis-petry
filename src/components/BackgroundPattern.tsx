/**
 * BackgroundPattern – Dekoratives Hintergrund-Layer
 * Chaotische Wellenlinien (SVG) + Foto-Kreise (HTML/CSS für volle Kontrolle)
 */
import { useState, useEffect } from "react";

const photoCircles = [
  {
    top: "8%",
    left: "5%", mobileLeft: "10%",
    size: 240, mobileSize: 140,
    image: "/images/trio-1.webp", objectPosition: "center 30%",
  },
  {
    top: "6%",
    left: "58%", mobileLeft: "55%",
    size: 320, mobileSize: 140,
    image: "/images/trio-2-new.jpg", objectPosition: "center 20%",
  },
  {
    top: "52%",
    left: "12%", mobileLeft: "8%",
    size: 230, mobileSize: 130,
    image: "/images/trio-3.jpg", objectPosition: "center 25%",
  },
  {
    top: "50%",
    left: "55%", mobileLeft: "50%",
    size: 280, mobileSize: 130,
    image: "/images/trio-4-new.jpg", objectPosition: "center 30%",
  },
];

export default function BackgroundPattern() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* SVG Wellenlinien */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1100 750"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-40 80 C120 200, 300 50, 480 180 S700 30, 850 200 S1000 80, 1150 160" stroke="rgba(220, 165, 140, 1)" strokeWidth="1.5" />
        <path d="M1150 40 C950 180, 800 60, 600 220 S350 80, 200 250 S50 120, -50 300" stroke="rgba(210, 180, 130, 1)" strokeWidth="1" />
        <path d="M-30 350 C100 250, 250 420, 400 300 S600 450, 750 320 S950 480, 1150 350" stroke="rgba(220, 165, 140, 1)" strokeWidth="1.2" />
        <path d="M1150 280 C900 400, 750 250, 550 380 S300 220, 150 400 S-20 280, -60 450" stroke="rgba(210, 180, 130, 1)" strokeWidth="1" />
        <path d="M-50 550 C150 420, 280 600, 450 470 S650 620, 800 480 S1000 600, 1160 500" stroke="rgba(220, 165, 140, 1)" strokeWidth="1.5" />
        <path d="M1160 650 C950 520, 780 680, 600 530 S380 700, 200 560 S50 680, -60 580" stroke="rgba(210, 180, 130, 1)" strokeWidth="1" />
        <path d="M-40 30 C200 120, 350 -20, 550 100 S780 -10, 950 80 S1100 20, 1160 60" stroke="rgba(220, 165, 140, 1)" strokeWidth="1" />
        <path d="M-30 700 C180 620, 330 740, 520 650 S720 750, 880 670 S1050 730, 1160 680" stroke="rgba(210, 180, 130, 1)" strokeWidth="1.2" />
        <path d="M300 -20 C350 150, 250 300, 400 400 S300 550, 450 700 S350 750, 400 780" stroke="rgba(220, 165, 140, 1)" strokeWidth="1" />
        <path d="M800 -20 C750 120, 850 280, 700 380 S820 500, 680 620 S780 700, 720 780" stroke="rgba(210, 180, 130, 1)" strokeWidth="1" />

        {/* Lichtpunkte */}
        <circle cx="250" cy="150" r="3" fill="rgba(233, 122, 106, 0.2)" />
        <circle cx="700" cy="100" r="2.5" fill="rgba(242, 193, 78, 0.2)" />
        <circle cx="950" cy="170" r="3" fill="rgba(233, 122, 106, 0.18)" />
        <circle cx="420" cy="340" r="2" fill="rgba(242, 193, 78, 0.18)" />
        <circle cx="650" cy="420" r="3" fill="rgba(233, 122, 106, 0.18)" />
        <circle cx="170" cy="510" r="2.5" fill="rgba(242, 193, 78, 0.18)" />
        <circle cx="550" cy="600" r="2" fill="rgba(233, 122, 106, 0.2)" />
        <circle cx="1000" cy="500" r="2.5" fill="rgba(242, 193, 78, 0.18)" />
      </svg>

      {/* Foto-Kreise – responsive: kleiner und zentraler auf Mobile */}
      {photoCircles.map((c, i) => {
        const size = isMobile ? c.mobileSize : c.size;
        const left = isMobile ? c.mobileLeft : c.left;
        return (
        <div
          key={i}
          className="absolute rounded-full overflow-hidden"
          style={{
            top: c.top,
            left,
            width: size,
            height: size,
            boxShadow: "0 0 0 3px rgba(220, 165, 140, 0.35), 0 0 0 7px rgba(233, 122, 106, 0.1)",
          }}
        >
          <img
            src={c.image}
            alt=""
            className="w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: c.objectPosition,
              opacity: 0.75,
            }}
            loading="lazy"
          />
        </div>
        );
      })}
    </div>
  );
}
