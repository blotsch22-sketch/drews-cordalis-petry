import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BackgroundPattern from "./components/BackgroundPattern";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import MusicSection from "./components/MusicSection";
import ReferencesSection from "./components/ReferencesSection";
import EventTypesSection from "./components/EventTypesSection";
import BookingSection from "./components/BookingSection";
import ImpressumSection from "./components/ImpressumSection";
import DatenschutzSection from "./components/DatenschutzSection";
import Footer from "./components/Footer";
import type { EventTypeValue } from "./data/content";

type Page = "home" | "impressum" | "datenschutz";

function useHashRoute(): Page {
  const [page, setPage] = useState<Page>(() => {
    const h = window.location.hash;
    if (h === "#/impressum") return "impressum";
    if (h === "#/datenschutz") return "datenschutz";
    return "home";
  });

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      if (h === "#/impressum") { setPage("impressum"); window.scrollTo(0, 0); }
      else if (h === "#/datenschutz") { setPage("datenschutz"); window.scrollTo(0, 0); }
      else setPage("home");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return page;
}

export default function App() {
  const [selectedEventType, setSelectedEventType] = useState<EventTypeValue | "">("");
  const page = useHashRoute();

  const handleEventSelect = (eventType: EventTypeValue) => {
    setSelectedEventType(eventType);
    setTimeout(() => {
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F1] relative">
      <BackgroundPattern />
      <Navbar />

      {page === "home" && (
        <main className="relative z-10">
          <HeroSection />
          <BioSection />
          <MusicSection />
          <ReferencesSection />
          <EventTypesSection onEventSelect={handleEventSelect} />
          <BookingSection selectedEventType={selectedEventType} onEventTypeChange={setSelectedEventType} />
        </main>
      )}

      {page === "impressum" && (
        <main className="relative z-10 pt-20">
          <ImpressumSection />
        </main>
      )}

      {page === "datenschutz" && (
        <main className="relative z-10 pt-20">
          <DatenschutzSection />
        </main>
      )}

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
