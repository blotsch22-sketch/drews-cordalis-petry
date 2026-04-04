import { useState, useEffect, type FormEvent } from "react";
import { BOOKING, EVENT_TYPES, type EventTypeValue } from "../data/content";

interface BookingProps {
  selectedEventType?: EventTypeValue | "";
  onEventTypeChange?: (value: EventTypeValue | "") => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
  privacy: boolean;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  message: "",
  privacy: false,
};

export default function BookingSection({ selectedEventType = "", onEventTypeChange }: BookingProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  // Sync external selectedEventType into form
  useEffect(() => {
    if (selectedEventType) {
      setForm((prev) => ({ ...prev, eventType: selectedEventType }));
    }
  }, [selectedEventType]);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Bitte Name eingeben";
    if (!form.email.trim()) newErrors.email = "Bitte E-Mail eingeben";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Bitte gültige E-Mail eingeben";
    if (!form.message.trim()) newErrors.message = "Bitte Nachricht eingeben";
    if (!form.privacy) newErrors.privacy = "Bitte Datenschutz bestätigen";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white border ${
      errors[field] ? "border-red-400" : "border-[#2F2A26]/10"
    } rounded-lg px-4 py-3 text-[#2F2A26] text-sm placeholder-[#2F2A26]/30 focus:outline-none focus:border-[#E97A6A]/50 focus:ring-2 focus:ring-[#E97A6A]/10 transition-all`;

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#FFF8F1] relative">
      {/* Warm accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E97A6A]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{BOOKING.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            {BOOKING.headline}
          </h2>
          <p className="text-[#2F2A26]/55 text-base md:text-lg leading-relaxed">
            {BOOKING.subline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card p-8 md:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E97A6A]/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-[#E97A6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2F2A26] mb-3">Anfrage gesendet</h3>
                <p className="text-[#2F2A26]/55 mb-6">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 48 Stunden bei Ihnen.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm">
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#2F2A26]/45 mb-1.5 uppercase tracking-wider font-['Montserrat']">
                      Name *
                    </label>
                    <input id="name" type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Ihr Name" className={inputClass("name")} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#2F2A26]/45 mb-1.5 uppercase tracking-wider font-['Montserrat']">
                      E-Mail *
                    </label>
                    <input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="ihre@email.de" className={inputClass("email")} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#2F2A26]/45 mb-1.5 uppercase tracking-wider font-['Montserrat']">
                      Telefon
                    </label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+49 ..." className={inputClass("phone")} />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-xs font-semibold text-[#2F2A26]/45 mb-1.5 uppercase tracking-wider font-['Montserrat']">
                      Wunschtermin
                    </label>
                    <input id="date" type="date" value={form.date} onChange={(e) => updateField("date", e.target.value)} className={inputClass("date")} />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-xs font-semibold text-[#2F2A26]/45 mb-1.5 uppercase tracking-wider font-['Montserrat']">
                    Art der Veranstaltung
                  </label>
                  <select id="eventType" value={form.eventType} onChange={(e) => { updateField("eventType", e.target.value); onEventTypeChange?.(e.target.value as EventTypeValue | ""); }} className={`${inputClass("eventType")} appearance-none`}>
                    <option value="">Bitte auswählen</option>
                    {EVENT_TYPES.map((et) => (
                      <option key={et.value} value={et.value}>{et.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#2F2A26]/45 mb-1.5 uppercase tracking-wider font-['Montserrat']">
                    Nachricht *
                  </label>
                  <textarea id="message" rows={4} value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Erzählen Sie uns von Ihrem Event..." className={`${inputClass("message")} resize-none`} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={form.privacy} onChange={(e) => updateField("privacy", e.target.checked)} className="mt-0.5 w-4 h-4 rounded border-[#2F2A26]/15 bg-white text-[#E97A6A] focus:ring-[#E97A6A]/30 focus:ring-offset-0 cursor-pointer accent-[#E97A6A]" />
                  <span className="text-xs text-[#2F2A26]/40 leading-relaxed group-hover:text-[#2F2A26]/60 transition-colors">
                    Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *
                  </span>
                </label>
                {errors.privacy && <p className="text-red-500 text-xs">{errors.privacy}</p>}

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Anfrage absenden
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-5">
            {BOOKING.contacts.map((contact, i) => (
              <div key={i} className="card p-6">
                <span className="section-label text-[0.65rem] mb-3">{contact.role}</span>
                <h3 className="text-lg font-bold text-[#2F2A26] mb-0.5">{contact.name}</h3>
                <p className="text-[#2F2A26]/35 text-sm mb-4">{contact.company}</p>
                <div className="space-y-2.5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 text-sm text-[#2F2A26]/55 hover:text-[#E97A6A] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F6E7D8]/70 group-hover:bg-[#E97A6A]/10 flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 text-sm text-[#2F2A26]/55 hover:text-[#E97A6A] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F6E7D8]/70 group-hover:bg-[#E97A6A]/10 flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="p-5 rounded-xl bg-[#F2C14E]/10 border border-[#F2C14E]/20">
              <p className="text-sm text-[#2F2A26]/50 leading-relaxed">
                <strong className="text-[#E97A6A]">Schnellanfrage?</strong>{" "}
                Schreiben Sie uns direkt per E-Mail oder rufen Sie an. Wir melden uns in der Regel innerhalb von 48 Stunden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
