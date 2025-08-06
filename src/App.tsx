import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light-900 text-black overflow-x-hidden">
        <CustomCursor />
        <ParticleBackground />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;