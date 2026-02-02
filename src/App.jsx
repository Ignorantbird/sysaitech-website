import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import MechanicAssistPage from './pages/MechanicAssistPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <div className="font-sans antialiased">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mechanic-assist" element={<MechanicAssistPage />} />
          <Route path="/work" element={<PortfolioPage />} />
          {/* Additional routes will be added here */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;