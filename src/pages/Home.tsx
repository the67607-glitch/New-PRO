/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TargetAudience } from '../components/TargetAudience';
import { CoreServices } from '../components/CoreServices';
import { Packages } from '../components/Packages';
import { SeparateServices } from '../components/SeparateServices';
import { Workflow } from '../components/Workflow';
import { ContactForm } from '../components/ContactForm';
import { ConsultationCTA } from '../components/ConsultationCTA';

interface HomeProps {
  selectedPackage: string;
  setSelectedPackage: (pkg: string) => void;
  formSubmitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  formRef: React.RefObject<HTMLDivElement | null>;
  scrollToForm: (pkg?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ 
  selectedPackage, 
  setSelectedPackage, 
  formSubmitted, 
  handleSubmit,
  formRef,
  scrollToForm
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main>
      <Hero scrollToForm={scrollToForm} />
      
      <div className="space-y-0">
        <TargetAudience />
        <CoreServices />
        <Packages scrollToForm={scrollToForm} />
        <SeparateServices scrollToForm={scrollToForm} />
        <ConsultationCTA scrollToForm={scrollToForm} />
        <Workflow />
        
        <ContactForm 
          formRef={formRef}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
          formSubmitted={formSubmitted}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};
