import { FileCheck, Users2, Award, ShieldCheck } from 'lucide-react';

const Quality = () => {
  const qualityPoints = [
    {
      icon: FileCheck,
      title: 'Werkverträge & Dienstleistungen',
      description: 'Arbeiten im Rahmen von Werkverträgen oder Dienstleistungen mit klarer Leistungsabgrenzung',
    },
    {
      icon: Award,
      title: 'DIN / EN Normen',
      description: 'Alle Arbeiten erfolgen nach geltenden DIN und EN Normen',
    },
    {
      icon: ShieldCheck,
      title: 'Arbeitssicherheit',
      description: 'Höchste Standards in Arbeitssicherheit und Qualitätssicherung',
    },
    {
      icon: Users2,
      title: 'Termintreue',
      description: 'Zuverlässige Umsetzung mit Fokus auf vereinbarte Termine',
    },
  ];

  return (
<section 
  id="quality" 
  className="py-24 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: 'url(/office.jpg)' }}
>
  {/* Overlay für bessere Lesbarkeit */}
  <div className="absolute inset-0 bg-white/15"></div>
  
  <div className="container mx-auto px-6 relative z-10">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Arbeitsweise & Qualität
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {qualityPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                    <Icon className="text-blue-600" size={28} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Quality;
