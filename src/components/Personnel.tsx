import { HardHat, Flame, Cog, Shield } from 'lucide-react';

const Personnel = () => {
  const personnel = [
    {
      icon: HardHat,
      title: 'Rohrschlosser & Vorrichter',
      description: 'Erfahren im Lesen und Umsetzen von Isometrien',
    },
    {
      icon: Flame,
      title: 'WIG / MAG / E-Hand Schweißer',
      description: 'Zertifizierte Schweißer mit umfassender Erfahrung',
    },
    {
      icon: Cog,
      title: 'Anlagen- & Industriemonteure',
      description: 'Spezialisiert auf industrielle Montagearbeiten',
    },
    {
      icon: Shield,
      title: 'Sicherheitsgeschult',
      description: 'Industrielle Erfahrung und vertraut mit Baustellenregeln',
    },
  ];

  return (
    <section id="personnel" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-center">
          Fachpersonal
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {personnel.map((person, index) => {
            const Icon = person.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <Icon className="text-blue-600 mb-4" size={36} strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-slate-800 mb-2">{person.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{person.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Personnel;
