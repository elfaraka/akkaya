import { ArrowLeft } from 'lucide-react';

const Cookies = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <a 
            href="/" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Zurück zur Startseite
          </a>
          <h1 className="text-4xl md:text-5xl font-bold">Cookie-Richtlinie</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Was sind Cookies?</h2>
          <p className="mb-6 text-slate-700">
            Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät gespeichert 
            werden, wenn Sie eine Website besuchen. Sie werden häufig verwendet, um Websites 
            effizienter zu gestalten und Informationen an die Eigentümer der Website zu übermitteln.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Wie verwenden wir Cookies?</h2>
          <p className="mb-6 text-slate-700">
            Diese Website verwendet Cookies, um Ihr Online-Erlebnis zu verbessern. Wenn Sie unsere 
            Website zum ersten Mal besuchen, werden Sie aufgefordert, der Verwendung von Cookies 
            zuzustimmen.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Welche Arten von Cookies verwenden wir?</h2>
          
          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Notwendige Cookies</h3>
          <p className="mb-6 text-slate-700">
            Diese Cookies sind für das Funktionieren der Website unerlässlich. Sie ermöglichen es 
            Ihnen, durch die Website zu navigieren und ihre Funktionen zu nutzen. Ohne diese Cookies 
            können bestimmte Dienste nicht bereitgestellt werden.
          </p>
          <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
            <li>Session-Cookies: Temporäre Cookies, die nach dem Schließen des Browsers gelöscht werden</li>
            <li>Sicherheits-Cookies: Zur Authentifizierung und zum Schutz vor Missbrauch</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Funktionale Cookies</h3>
          <p className="mb-6 text-slate-700">
            Diese Cookies ermöglichen es der Website, sich an Ihre Entscheidungen zu erinnern 
            (wie Ihren Benutzernamen, Ihre Sprache oder die Region, in der Sie sich befinden) und 
            erweiterte, personalisiertere Funktionen bereitzustellen.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Analyse-Cookies</h3>
          <p className="mb-6 text-slate-700">
            Derzeit werden auf dieser Website keine Analyse-Cookies verwendet. Sollte sich dies 
            ändern, werden Sie entsprechend informiert und um Ihre Zustimmung gebeten.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Marketing-Cookies</h3>
          <p className="mb-6 text-slate-700">
            Diese Website verwendet keine Marketing- oder Werbe-Cookies.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Speicherdauer</h2>
          <p className="mb-6 text-slate-700">
            Die Speicherdauer von Cookies variiert je nach Art:
          </p>
          <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
            <li><strong>Session-Cookies:</strong> Werden beim Schließen des Browsers automatisch gelöscht</li>
            <li><strong>Persistente Cookies:</strong> Bleiben für einen festgelegten Zeitraum auf Ihrem Gerät gespeichert</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Wie können Sie Cookies verwalten?</h2>
          <p className="mb-6 text-slate-700">
            Sie haben verschiedene Möglichkeiten, Cookies zu verwalten und zu löschen:
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Browser-Einstellungen</h3>
          <p className="mb-6 text-slate-700">
            Die meisten Webbrowser akzeptieren Cookies automatisch, aber Sie können Ihre 
            Browser-Einstellungen in der Regel so ändern, dass Cookies abgelehnt werden. Hier sind 
            Links zu Cookie-Einstellungen für gängige Browser:
          </p>
          <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Auswirkungen der Cookie-Ablehnung</h3>
          <p className="mb-6 text-slate-700">
            Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität dieser Website 
            beeinträchtigen kann. Einige Bereiche der Website funktionieren möglicherweise nicht 
            ordnungsgemäß, wenn Cookies deaktiviert sind.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Ihre Zustimmung</h2>
          <p className="mb-6 text-slate-700">
            Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß dieser 
            Cookie-Richtlinie zu. Sie können Ihre Zustimmung jederzeit widerrufen, indem Sie die 
            Cookies in Ihrem Browser löschen oder die Cookie-Einstellungen ändern.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Änderungen dieser Richtlinie</h2>
          <p className="mb-6 text-slate-700">
            Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Wir empfehlen Ihnen, 
            diese Seite regelmäßig zu besuchen, um über Änderungen informiert zu bleiben.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Kontakt</h2>
          <p className="mb-6 text-slate-700">
            Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte:<br /><br />
            E-Mail: info@akkaya.tech<br />
            Telefon: +49 157 34370201
          </p>

          <p className="text-sm text-slate-500 mt-10">
            Letzte Aktualisierung: Februar 2026
          </p>

        </div>

        {/* Back to top button */}
        <div className="mt-12 text-center">
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Nach oben
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
