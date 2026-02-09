import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    'Zuverlässiger Partner für Werkvertrag- und Dienstleistungen',
    'Unterstützung bei Auftragsspitzen und erhöhtem Personalbedarf',
    'Erfahrung in Stillstandarbeiten und Revisionen',
    'Klare, praxisorientierte Lösungen für Ihre Projekte',
  ];

  return (
<section 
  id="about" 
  className="py-32 md:py-40 lg:py-48 bg-cover bg-center bg-no-repeat relative min-h-[700px] md:min-h-[800px]"
  style={{ backgroundImage: 'url(/uberuns.jpg)' }}
>
  {/* Overlay für bessere Lesbarkeit */}
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
  Über uns
</h2>
<div className="w-24 h-1 bg-white mx-auto mb-12"></div>

<p className="text-lg text-white mb-12 text-center leading-relaxed">
  Als selbstständiger Dienstleister im Rohrleitungs- und Anlagenbau bieten wir Ihnen
  flexible und professionelle Unterstützung für Ihre Projekte. Mit langjähriger Erfahrung
  und einem starken Netzwerk qualifizierter Fachkräfte sind wir Ihr verlässlicher Partner.
</p>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-lg">
                <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-slate-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
