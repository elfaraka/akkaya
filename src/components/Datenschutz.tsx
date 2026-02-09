import { ArrowLeft } from 'lucide-react';

const Datenschutz = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">Datenschutzerklärung</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          
          <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Allgemeine Hinweise</h3>
          <p className="mb-6 text-slate-700">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
          <p className="mb-4 text-slate-700">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <p className="mb-4 text-slate-700">
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
            es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">2. Hosting</h2>
          <p className="mb-6 text-slate-700">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
            [Name des Hosting-Anbieters, z.B. "Externes Hosting"]
          </p>
          <p className="mb-6 text-slate-700">
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
            erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei 
            kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine 
            Website generiert werden, handeln.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Datenschutz</h3>
          <p className="mb-6 text-slate-700">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir 
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
          <p className="mb-6 text-slate-700">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            [Firmenname]<br />
            [Straße und Hausnummer]<br />
            [PLZ und Ort]<br /><br />
            Telefon: +49 (0) 123 456789<br />
            E-Mail: info@rohrleitungsbau.de
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Speicherdauer</h3>
          <p className="mb-6 text-slate-700">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
            wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
            Datenverarbeitung entfällt.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Rechtsgrundlage</h3>
          <p className="mb-6 text-slate-700">
            Im Folgenden erfahren Sie die Rechtsgrundlagen der Datenverarbeitung gemäß Art. 6 Abs. 1 
            DSGVO, Art. 9 Abs. 2 DSGVO und Art. 10 DSGVO.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">4. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Server-Log-Dateien</h3>
          <p className="mb-6 text-slate-700">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Kontaktformular</h3>
          <p className="mb-6 text-slate-700">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p className="mb-6 text-slate-700">
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
            aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
            Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">5. Ihre Rechte</h2>
          <p className="mb-6 text-slate-700">
            Sie haben unter anderem folgende Rechte:
          </p>
          <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
            <li>Recht auf Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">6. Analyse-Tools und Werbung</h2>
          <p className="mb-6 text-slate-700">
            Diese Website verwendet keine Analyse-Tools oder Werbe-Tracking.
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

export default Datenschutz;
