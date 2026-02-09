import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Prüfen ob Cookie-Zustimmung bereits gespeichert ist
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Banner nach 1 Sekunde anzeigen (für bessere UX)
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  const acceptNecessaryOnly = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"></div>

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl border border-gray-200">
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center">
                  <Cookie className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                  Wir verwenden Cookies
                </h3>
              </div>
              <button
                onClick={declineCookies}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Schließen"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <p className="text-slate-600 mb-6 leading-relaxed">
              Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Website zu bieten. 
              Einige Cookies sind notwendig für die Funktionalität der Website, während andere uns 
              helfen, die Website zu verbessern und Ihr Nutzererlebnis zu personalisieren.
            </p>

            {/* Details */}
            <div className="mb-6 p-4 bg-slate-50 border-l-4 border-blue-600">
              <p className="text-sm text-slate-700">
                <strong>Notwendige Cookies:</strong> Diese Cookies sind für die Grundfunktionen 
                der Website erforderlich und können nicht deaktiviert werden.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-3">
              <button
                onClick={acceptCookies}
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Alle Cookies akzeptieren
              </button>
              <button
                onClick={acceptNecessaryOnly}
                className="flex-1 px-6 py-3 bg-slate-200 text-slate-800 font-semibold hover:bg-slate-300 transition-colors"
              >
                Nur notwendige Cookies
              </button>
              <a
                href="/cookies"
                className="flex-1 px-6 py-3 text-center border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
              >
                Mehr erfahren
              </a>
            </div>

            {/* Privacy Links */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-sm">
              <a href="/datenschutz" className="text-blue-600 hover:underline">
                Datenschutzerklärung
              </a>
              <a href="/impressum" className="text-blue-600 hover:underline">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;