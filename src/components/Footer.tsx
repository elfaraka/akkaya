const Footer = () => {
    return (
      <footer className="bg-slate-900 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-sm mb-4 md:mb-0">
              © 2026 Akkaya Schweißtechnik. Alle Rechte vorbehalten.
            </p>
  
            {/* Links */}
            <div className="flex space-x-6 text-sm">
              <a 
                href="/impressum" 
                className="hover:text-white transition-colors"
              >
                Impressum
              </a>
              <a 
                href="/datenschutz" 
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </a>
              <a 
                href="/cookies" 
                className="hover:text-white transition-colors"
              >
                Cookie-Richtlinie
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;