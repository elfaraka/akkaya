import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'Über uns' },
    { id: 'services', label: 'Leistungen' },
    { id: 'flexibility', label: 'Flexibilität' },
    { id: 'personnel', label: 'Fachpersonal' },
    { id: 'quality', label: 'Qualität' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-sm py-6 shadow-md'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold tracking-tight text-slate-800 hover:text-blue-600 transition-colors"
        >
          Akkaya Schweißtechnik
        </button>

        <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
  <button
    key={item.id}
    onClick={() => scrollToSection(item.id)}
    className={`text-sm font-medium transition-colors ${
      item.id === 'contact' 
        ? 'bg-blue-600 text-white px-6 py-2 border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700' 
        : 'text-slate-700 hover:text-blue-600'
    }`}
  >
    {item.label}
  </button>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-800"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-slate-700 hover:text-blue-600 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
