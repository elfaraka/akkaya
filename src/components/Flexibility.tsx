import { Clock, Users, Zap } from 'lucide-react';

const Flexibility = () => {
  const flexFeatures = [
    {
      icon: Clock,
      title: 'Kurzfristige Einsätze',
      description: 'Auch an Wochenenden und zu flexiblen Zeiten verfügbar',
    },
    {
      icon: Users,
      title: 'Zusätzliches Personal',
      description: 'Bereitstellung qualifizierter Fachkräfte über Partnerunternehmen',
    },
    {
      icon: Zap,
      title: 'Schnelle Reaktionszeiten',
      description: 'Rasche Unterstützung bei erhöhtem Personalbedarf',
    },
  ];

  return (
    <section id="flexibility" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-center">
          Flexibilität & Personal
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {flexFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                  <Icon className="text-blue-600" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Flexibility;
