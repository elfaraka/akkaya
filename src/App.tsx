import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Flexibility from './components/Flexibility';
import Personnel from './components/Personnel';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Cookies from './components/Cookies';
import CookieBanner from './components/CookieBanner';  // ← NEU

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Flexibility />
      <Personnel />
      <Quality />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </Router>
  );
}

export default App;