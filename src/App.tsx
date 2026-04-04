import { useState } from "react";
import Navbar from "./components/Navbar";
import BackgroundPattern from "./components/BackgroundPattern";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import MusicSection from "./components/MusicSection";
import ReferencesSection from "./components/ReferencesSection";
import EventTypesSection from "./components/EventTypesSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import type { EventTypeValue } from "./data/content";

export default function App() {
  const [selectedEventType, setSelectedEventType] = useState<EventTypeValue | "">("");

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
      <main className="relative z-10">
        <HeroSection />
        <BioSection />
        <MusicSection />
        <ReferencesSection />
        <EventTypesSection onEventSelect={handleEventSelect} />
        <BookingSection selectedEventType={selectedEventType} onEventTypeChange={setSelectedEventType} />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
