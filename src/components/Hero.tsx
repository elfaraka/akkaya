import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section
  id="hero"
  className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: 'url(/herosection.jpg)' }}
>
      {/* Dunkler Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
  <div className="max-w-5xl mx-auto text-center">
    <h1 className="text-5xl md:text-7xl lg:text-7xl font-normal text-white mb-8 leading-tight">
      Rohrleitungsbau.<br />
      Schweißtechnik.<br />
      <span className="text-xl md:text-3xl lg:text-5xl">Präzise & Zuverlässig.</span>
    </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Schnelle Unterstützung bei Engpässen und Projekten im Anlagenbau.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Kontakt aufnehmen
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
