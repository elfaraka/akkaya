import { ArrowLeft } from 'lucide-react';

const Impressum = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">Impressum</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="mb-6 text-slate-700">
            [Firmenname]<br />
            [Straße und Hausnummer]<br />
            [PLZ und Ort]<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Kontakt</h2>
          <p className="mb-6 text-slate-700">
            Telefon: +49 157 34370201<br />
            E-Mail: info@akkaya-st.de
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Vertreten durch</h2>
          <p className="mb-6 text-slate-700">
            [Name des Geschäftsführers/Inhabers]
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Umsatzsteuer-ID</h2>
          <p className="mb-6 text-slate-700">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [USt-IdNr.]
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Handelsregister</h2>
          <p className="mb-6 text-slate-700">
            Registergericht: [Amtsgericht]<br />
            Registernummer: [HRB-Nummer]
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="mb-6 text-slate-700">
            Berufsbezeichnung: [z.B. Meisterbetrieb]<br />
            Zuständige Kammer: [z.B. Handwerkskammer]<br />
            Verliehen in: Deutschland
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">EU-Streitschlichtung</h2>
          <p className="mb-6 text-slate-700">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a><br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p className="mb-6 text-slate-700">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Haftung für Inhalte</h2>
          <p className="mb-6 text-slate-700">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
            Tätigkeit hinweisen.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Haftung für Links</h2>
          <p className="mb-6 text-slate-700">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
            Seiten verantwortlich.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Urheberrecht</h2>
          <p className="mb-6 text-slate-700">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
            Zustimmung des jeweiligen Autors bzw. Erstellers.
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

export default Impressum;
