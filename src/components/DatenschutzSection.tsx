/**
 * Datenschutzerklärung – DSGVO-konform
 */
import { useConsent } from "./CookieConsent";

export default function DatenschutzSection() {
  const { revokeConsent, consent, hasDecided } = useConsent();

  return (
    <section id="datenschutz" className="py-20 md:py-28 bg-[#FBF5EE]">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <span className="section-label">Rechtliches</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-10 text-[#2F2A26]">
            Datenschutzerklärung
          </h2>

          <div className="space-y-10 text-[#2F2A26]/70 text-sm md:text-base leading-relaxed">

            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                1. Datenschutz auf einen Blick
              </h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                2. Verantwortliche Stelle
              </h3>
              <div className="bg-white rounded-xl p-5 border border-[#2F2A26]/8">
                <p className="font-semibold text-[#2F2A26]">FIESTA RECORDS GmbH</p>
                <p>Bonner Str. 324, 50968 Köln</p>
                <p className="mt-2">Telefon: +49 221 3689000</p>
                <p>E-Mail: info@fiestarecords.de</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                3. Datenerfassung auf dieser Website
              </h3>
              <p className="mb-3">
                <strong className="text-[#2F2A26]">Technisch notwendige Cookies:</strong>{" "}
                Diese Website verwendet ein technisch notwendiges Cookie, um Ihre Cookie-Einstellungen zu speichern.
                Dieses Cookie enthält keine personenbezogenen Daten und wird in Ihrem Browser gespeichert.
              </p>
              <p>
                <strong className="text-[#2F2A26]">Server-Log-Dateien:</strong>{" "}
                Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien,
                die Ihr Browser automatisch übermittelt (Browsertyp, Betriebssystem, Referrer URL, IP-Adresse,
                Uhrzeit der Serveranfrage). Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                4. Eingebettete Inhalte von Drittanbietern
              </h3>
              <p className="mb-3">
                Diese Website bindet Inhalte von Drittanbietern ein. Diese Inhalte werden erst nach Ihrer
                ausdrücklichen Zustimmung geladen (Zwei-Klick-Lösung).
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#2F2A26] mb-1">YouTube (Google Ireland Limited)</p>
                  <p>
                    Wir nutzen YouTube für die Einbindung von Videos. Beim Laden von YouTube-Inhalten werden
                    Daten an Google übermittelt und Cookies gesetzt. Weitere Informationen finden Sie in der{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E97A6A] hover:underline">
                      Datenschutzerklärung von Google
                    </a>.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#2F2A26] mb-1">Spotify (Spotify AB)</p>
                  <p>
                    Wir nutzen Spotify für die Einbindung von Musik-Playern. Beim Laden von Spotify-Inhalten werden
                    Daten an Spotify übermittelt und Cookies gesetzt. Weitere Informationen finden Sie in der{" "}
                    <a href="https://www.spotify.com/de/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#E97A6A] hover:underline">
                      Datenschutzerklärung von Spotify
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                5. Kontaktformular
              </h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail,
                Telefon, Nachricht) zur Bearbeitung der Anfrage bei uns gespeichert. Die Verarbeitung erfolgt
                auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse). Ihre Daten werden nicht an Dritte weitergegeben und
                nach Abschluss der Bearbeitung gelöscht.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                6. Ihre Rechte
              </h3>
              <p className="mb-3">Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerruf erteilter Einwilligungen</li>
                <li>Beschwerde bei der zuständigen Aufsichtsbehörde</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                7. SSL-/TLS-Verschlüsselung
              </h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.
                Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
                von „http://" auf „https://" wechselt.
              </p>
            </div>

            {/* Cookie-Einstellungen widerrufen */}
            <div className="bg-white rounded-xl p-5 border border-[#2F2A26]/8">
              <h3 className="text-lg font-bold text-[#2F2A26] mb-2 font-['Montserrat']">
                Cookie-Einstellungen ändern
              </h3>
              <p className="text-sm text-[#2F2A26]/55 mb-3">
                Aktueller Status: Marketing-Cookies sind{" "}
                <strong>{consent.marketing ? "akzeptiert" : "abgelehnt"}</strong>.
                {!hasDecided && " (Keine Auswahl getroffen)"}
              </p>
              <button
                onClick={revokeConsent}
                className="btn-secondary text-xs px-4 py-2"
              >
                Cookie-Einstellungen zurücksetzen
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
