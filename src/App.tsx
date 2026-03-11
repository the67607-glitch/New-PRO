/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Payment } from './pages/Payment';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (pkg?: string) => {
    if (pkg) setSelectedPackage(pkg);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-brand-secondary/20">
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          scrollToForm={scrollToForm} 
        />

        <Routes>
          <Route path="/" element={
            <Home 
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
              formSubmitted={formSubmitted}
              handleSubmit={handleSubmit}
              formRef={formRef}
              scrollToForm={scrollToForm}
            />
          } />
          <Route path="/payment" element={<Payment />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
