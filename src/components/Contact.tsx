import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-slate-800">
          Kontakt
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-16"></div>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center text-slate-600 mb-12 leading-relaxed">
            Nehmen Sie Kontakt mit uns auf und besprechen Sie Ihr Projekt.
            Wir freuen uns auf Ihre Anfrage.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Phone className="text-blue-600" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">Telefon</h3>
              <p className="text-slate-600">+49 157 34370201</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Mail className="text-blue-600" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">E-Mail</h3>
              <p className="text-slate-600">info@akkaya-st.de</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MapPin className="text-blue-600" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">Standort</h3>
              <p className="text-slate-600">Deutschland</p>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="text-center mb-16">
            <a
              href="mailto:info@akkaya-st.de"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2" size={20} />
              Jetzt Anfrage senden
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


