/**
 * Datenschutzerklärung – Vollständig DSGVO-konform
 * Quelle: e-recht24.de, angepasst für FIESTA RECORDS GmbH
 */
export default function DatenschutzSection() {

  const h3Class = "text-lg font-bold text-[#2F2A26] mb-3 font-['Montserrat']";
  const h4Class = "text-base font-bold text-[#2F2A26] mb-2 font-['Montserrat']";
  const linkClass = "text-[#E97A6A] hover:underline break-all";

  return (
    <section id="datenschutz" className="py-20 md:py-28 bg-[#FBF5EE]">
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
            Datenschutzerklärung
          </h2>

          <div className="space-y-10 text-[#2F2A26]/70 text-sm md:text-base leading-relaxed">

            {/* 1. Datenschutz auf einen Blick */}
            <div>
              <h3 className={h3Class}>1. Datenschutz auf einen Blick</h3>

              <h4 className={h4Class}>Allgemeine Hinweise</h4>
              <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

              <h4 className={h4Class}>Datenerfassung auf dieser Website</h4>
              <p className="mb-2"><strong className="text-[#2F2A26]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>

              <p className="mb-2"><strong className="text-[#2F2A26]">Wie erfassen wir Ihre Daten?</strong></p>
              <p className="mb-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

              <p className="mb-2"><strong className="text-[#2F2A26]">Wofür nutzen wir Ihre Daten?</strong></p>
              <p className="mb-4">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.</p>

              <p className="mb-2"><strong className="text-[#2F2A26]">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
              <p className="mb-4">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

            </div>

            {/* 2. Hosting */}
            <div>
              <h3 className={h3Class}>2. Hosting</h3>
              <p className="mb-4">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

              <h4 className={h4Class}>Cloudflare</h4>
              <p className="mb-4">Anbieter ist die Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA (nachfolgend Cloudflare). Wenn Sie unsere Website besuchen, werden Ihre Anfragen über die Server von Cloudflare geleitet. Dabei können technische Daten wie Ihre IP-Adresse, Browsertyp und Zugriffszeit erfasst werden. Details entnehmen Sie der Datenschutzerklärung von Cloudflare: <a href="https://www.cloudflare.com/de-de/privacypolicy/" target="_blank" rel="noopener noreferrer" className={linkClass}>https://www.cloudflare.com/de-de/privacypolicy/</a>. Die Verwendung von Cloudflare erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst sicheren und zuverlässigen Bereitstellung unserer Website. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.</p>

              <h4 className={h4Class}>Auftragsverarbeitung</h4>
              <p>Cloudflare verarbeitet Daten in unserem Auftrag auf Grundlage eines Data Processing Addendum (DPA), das den Anforderungen der DSGVO entspricht.</p>
            </div>

            {/* 3. Allgemeine Hinweise */}
            <div>
              <h3 className={h3Class}>3. Allgemeine Hinweise und Pflichtinformationen</h3>

              <h4 className={h4Class}>Datenschutz</h4>
              <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

              <h4 className={h4Class}>Hinweis zur verantwortlichen Stelle</h4>
              <div className="bg-white rounded-xl p-5 border border-[#2F2A26]/8 mb-4">
                <p className="font-semibold text-[#2F2A26]">FIESTA RECORDS GmbH</p>
                <p>Marianne Biana Rosmiarek</p>
                <p>Bonner Straße 324</p>
                <p>D-50968 Köln</p>
                <p className="mt-2">Telefon: +49 221 3689000</p>
                <p>E-Mail: <a href="mailto:info@fiestarecords.de" className={linkClass}>info@fiestarecords.de</a></p>
              </div>
              <p className="mb-4">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.) entscheidet.</p>

              <h4 className={h4Class}>Speicherdauer</h4>
              <p className="mb-4">Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>

              <h4 className={h4Class}>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h4>
              <p className="mb-4">Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.</p>

              <h4 className={h4Class}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
              <p className="mb-4">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

              <h4 className={h4Class}>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h4>
              <p className="mb-4 text-xs uppercase tracking-wide leading-relaxed text-[#2F2A26]/60">Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen (Widerspruch nach Art. 21 Abs. 2 DSGVO).</p>

              <h4 className={h4Class}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
              <p className="mb-4">Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.</p>

              <h4 className={h4Class}>Recht auf Datenübertragbarkeit</h4>
              <p className="mb-4">Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.</p>

              <h4 className={h4Class}>Auskunft, Löschung und Berichtigung</h4>
              <p className="mb-4">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.</p>

              <h4 className={h4Class}>Recht auf Einschränkung der Verarbeitung</h4>
              <p className="mb-2">Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 mb-4">
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten.</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht.</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen.</li>
                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben.</li>
              </ul>

              <h4 className={h4Class}>SSL- bzw. TLS-Verschlüsselung</h4>
              <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
            </div>

            {/* 4. Datenerfassung auf dieser Website */}
            <div>
              <h3 className={h3Class}>4. Datenerfassung auf dieser Website</h3>

              <h4 className={h4Class}>Kontaktformular</h4>
              <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular (Name, E-Mail-Adresse, Nachricht, ggf. Wunschtermin und Veranstaltungsart) zwecks Bearbeitung der Anfrage bei uns gespeichert. Ihre Daten werden dabei über unseren Hosting-Anbieter Cloudflare verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen). Die von Ihnen eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern oder der Zweck für die Datenspeicherung entfällt.</p>

              <h4 className={h4Class}>Anfrage per E-Mail, Telefon oder Telefax</h4>
              <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten verbleiben bei uns, bis der Zweck entfällt oder Sie uns zur Löschung auffordern.</p>
            </div>

            {/* 5. Plugins und Tools */}
            <div>
              <h3 className={h3Class}>5. Eingebettete Inhalte und Plugins</h3>

              <h4 className={h4Class}>YouTube mit erweitertem Datenschutz</h4>
              <p className="mb-4">Diese Website bindet Videos der Website YouTube ein. Betreiber ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Wir nutzen YouTube teilweise im erweiterten Datenschutzmodus (youtube-nocookie.com). Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei können Cookies und ähnliche Technologien auf Ihrem Endgerät gespeichert werden. Daten können an Google in die USA übertragen werden; die Datenübertragung wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Das im Hintergrund abgespielte, stumme Video wird auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer ansprechenden Darstellung) eingebunden. Für interaktive Videos, die Sie durch Klick starten, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG (Einwilligung durch aktives Laden). Weitere Informationen: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className={linkClass}>https://policies.google.com/privacy?hl=de</a></p>

              <h4 className={h4Class}>Google Fonts (lokales Hosting)</h4>
              <p className="mb-4">Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts. Die Schriftarten sind lokal auf unserem Server gespeichert. Eine Verbindung zu Servern von Google findet dabei nicht statt. Es werden keine personenbezogenen Daten an Google übermittelt.</p>

              <h4 className={h4Class}>Spotify</h4>
              <p>Auf dieser Website sind Funktionen des Musik-Dienstes Spotify eingebunden. Anbieter ist die Spotify AB, Birger Jarlsgatan 61, 113 56 Stockholm in Schweden. Beim Laden der Spotify-Widgets wird eine direkte Verbindung zwischen Ihrem Browser und den Servern von Spotify hergestellt. Dabei können Cookies und ähnliche Technologien auf Ihrem Endgerät gespeichert werden, auch durch Drittanbieter wie Google Analytics. Spotify verarbeitet dabei Ihre IP-Adresse und weitere Nutzungsdaten. Daten können in die USA oder andere Drittstaaten übertragen werden. Die Einbindung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG (Einwilligung). Durch das aktive Laden der Spotify-Inhalte auf dieser Website erteilen Sie Ihre Einwilligung. Weitere Informationen: <a href="https://www.spotify.com/de/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className={linkClass}>https://www.spotify.com/de/legal/privacy-policy/</a></p>
            </div>

            {/* Quelle */}
            <p className="text-xs text-[#2F2A26]/60">
              Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:underline">https://www.e-recht24.de</a>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
