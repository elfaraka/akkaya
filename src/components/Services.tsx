import { Wrench, Factory, FileText, Timer, Settings, Trash2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Rohrleitungsbau',
      description: 'Edelstahl und Schwarzstahl nach höchsten Standards',
    },
    {
      icon: Factory,
      title: 'Anlagenmontage',
      description: 'Umbau und Revision von Industrieanlagen',
    },
    {
      icon: FileText,
      title: 'Montage nach Zeichnung',
      description: 'Präzise Ausführung nach Zeichnung und Isometrie',
    },
    {
      icon: Timer,
      title: 'Stillstand-Arbeiten',
      description: 'Shutdown-Arbeiten mit termingerechter Umsetzung',
    },
    {
      icon: Settings,
      title: 'Instandhaltung',
      description: 'Wartungs- und Instandhaltungsarbeiten',
    },
    {
      icon: Trash2,
      title: 'Demontagearbeiten',
      description: 'Fachgerechte Demontage und Rückbau',
    },
  ];

  const imageGallery = [
    {
      src: '/rohrleitungsbau.jpg',
      title: 'Rohrleitungsbau',
      subtitle: 'Präzision in jedem Detail',
    },
    {
      src: '/instandhaltung.jpg',
      title: 'Instandhaltung',
      subtitle: 'Wartung & Service',
    },
    {
      src: '/tablet.jpg',
      title: 'Digitale Planung',
      subtitle: 'Moderne Technologie',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-center">
          Leistungen
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-16"></div>

        {/* Bildergalerie - Grid Layout wie Polestar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto mb-20">
          {imageGallery.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-96 md:h-[600px]"
              >
              {/* Bild */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay mit Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {image.subtitle}
                </p>
              </div>

              {/* Hover-Indikator */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-90">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Service-Karten */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <Icon className="text-blue-600 mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;