/**
 * CookieConsent – DSGVO-konformer Cookie-Banner
 * Blockiert YouTube/Spotify Embeds bis Nutzer zustimmt
 */
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface ConsentState {
  necessary: boolean;
  marketing: boolean; // YouTube, Spotify etc.
}

interface ConsentContextType {
  consent: ConsentState;
  hasDecided: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  revokeConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType>({
  consent: { necessary: true, marketing: false },
  hasDecided: false,
  acceptAll: () => {},
  acceptNecessary: () => {},
  revokeConsent: () => {},
});

export function useConsent() {
  return useContext(ConsentContext);
}

const STORAGE_KEY = "cookie-consent";

function loadConsent(): { consent: ConsentState; hasDecided: boolean } {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { consent: parsed, hasDecided: true };
    }
  } catch {}
  return { consent: { necessary: true, marketing: false }, hasDecided: false };
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>({ necessary: true, marketing: false });
  const [hasDecided, setHasDecided] = useState(false);

  useEffect(() => {
    const { consent: loaded, hasDecided: decided } = loadConsent();
    setConsent(loaded);
    setHasDecided(decided);
  }, []);

  const acceptAll = () => {
    const c = { necessary: true, marketing: true };
    setConsent(c);
    setHasDecided(true);
    saveConsent(c);
  };

  const acceptNecessary = () => {
    const c = { necessary: true, marketing: false };
    setConsent(c);
    setHasDecided(true);
    saveConsent(c);
  };

  const revokeConsent = () => {
    localStorage.removeItem(STORAGE_KEY);
    setConsent({ necessary: true, marketing: false });
    setHasDecided(false);
  };

  return (
    <ConsentContext.Provider value={{ consent, hasDecided, acceptAll, acceptNecessary, revokeConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function CookieBanner() {
  const { hasDecided, acceptAll, acceptNecessary } = useConsent();

  if (hasDecided) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-[#2F2A26]/10 p-5 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex-1">
            <h3 className="font-['Montserrat'] font-bold text-[#2F2A26] text-sm mb-1">
              Cookie-Einstellungen
            </h3>
            <p className="text-xs text-[#2F2A26]/55 leading-relaxed">
              Diese Website nutzt technisch notwendige Cookies. Für eingebettete Inhalte von YouTube und Spotify
              benötigen wir Ihre Zustimmung, da diese Dienste Cookies setzen und Daten verarbeiten können.{" "}
              <a href="#datenschutz" className="text-[#E97A6A] hover:underline">Mehr erfahren</a>
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={acceptNecessary}
              className="btn-secondary text-xs px-4 py-2.5"
            >
              Nur notwendige
            </button>
            <button
              onClick={acceptAll}
              className="btn-primary text-xs px-4 py-2.5"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * EmbedPlaceholder – Wird angezeigt wenn Marketing-Cookies nicht akzeptiert
 * Zwei-Klick-Lösung: Nutzer muss zuerst zustimmen
 */
export function EmbedPlaceholder({ service, onAccept }: { service: string; onAccept: () => void }) {
  return (
    <div className="w-full h-full min-h-[200px] bg-[#F6E7D8]/50 rounded-lg flex flex-col items-center justify-center p-6 text-center border border-[#2F2A26]/8">
      <div className="w-12 h-12 rounded-full bg-[#E97A6A]/10 flex items-center justify-center mb-3">
        <svg className="w-6 h-6 text-[#E97A6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>
      <p className="text-sm font-semibold text-[#2F2A26] mb-1">
        {service}-Inhalt blockiert
      </p>
      <p className="text-xs text-[#2F2A26]/50 mb-4 max-w-xs">
        Beim Laden werden Daten an {service} übermittelt und Cookies gesetzt.{" "}
        <a href="#datenschutz" className="text-[#E97A6A] hover:underline">Datenschutzinfo</a>
      </p>
      <button
        onClick={onAccept}
        className="btn-primary text-xs px-5 py-2"
      >
        {service}-Inhalte laden
      </button>
    </div>
  );
}
