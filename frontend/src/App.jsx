import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
