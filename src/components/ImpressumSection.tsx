/**
 * Impressum – Gesetzlich vorgeschriebene Anbieterkennzeichnung
 * Gemäß § 5 TMG
 */

export default function ImpressumSection() {
  return (
    <section id="impressum" className="py-20 md:py-28 bg-[#FFF8F1]">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.location.hash = ""; window.scrollTo(0, 0); }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#E97A6A] hover:text-[#d4645a] mb-8 group transition-colors"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zurück zur Website
          </a>
          <span className="section-label">Rechtliches</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-10 text-[#2F2A26]">
            Impressum
          </h2>

          <div className="space-y-10 text-[#2F2A26]/70 text-sm md:text-base leading-relaxed">
            {/* Angaben gemäß § 5 TMG */}
            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                Angaben gemäß § 5 TMG
              </h3>
              <p className="font-semibold text-[#2F2A26]">FIESTA RECORDS GmbH</p>
              <p>Bonner Str. 324</p>
              <p>50968 Köln</p>
              <p className="mt-3">Handelsregister: HRB 21603</p>
              <p>Registergericht: Köln</p>
              <p className="mt-3">Vertreten durch:</p>
              <p>Marianne Biana Rosmiarek</p>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                Kontakt
              </h3>
              <p>Telefon: +49 221 3689000</p>
              <p>Telefax: +49 221 3689036</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@fiestarecords.de" className="text-[#E97A6A] hover:underline">
                  info@fiestarecords.de
                </a>
              </p>
            </div>

            {/* Umsatzsteuer-ID */}
            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                Umsatzsteuer-ID
              </h3>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </p>
              <p>DE 123 050 593</p>
            </div>

            {/* Berufshaftpflichtversicherung */}
            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                Angaben zur Berufshaftpflichtversicherung
              </h3>
              <p>Name und Sitz des Versicherers:</p>
              <p>GOTHAER, Köln</p>
            </div>

            {/* EU-Streitschlichtung */}
            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                EU-Streitschlichtung
              </h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E97A6A] hover:underline break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>

            {/* Verbraucherstreitbeilegung */}
            <div>
              <h3 className="text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h3>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
