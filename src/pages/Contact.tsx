/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'اتصل بنا',
      details: '9200 XXXXX',
      sub: 'متاح من 9 ص حتى 6 م'
    },
    {
      icon: <Mail size={24} />,
      title: 'البريد الإلكتروني',
      details: 'info@riskmanagement.sa',
      sub: 'نرد خلال 24 ساعة'
    },
    {
      icon: <MapPin size={24} />,
      title: 'المقر الرئيسي',
      details: 'الرياض، حي الملقا',
      sub: 'طريق الملك فهد'
    },
    {
      icon: <Clock size={24} />,
      title: 'ساعات العمل',
      details: 'الأحد - الخميس',
      sub: '9:00 ص - 6:00 م'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-bg-subtle/30 border-b border-line">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="label-caps">تواصل معنا</span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6">نحن هنا <span className="text-brand-secondary italic">لمساعدتك</span></h1>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              سواء كنت تملك وحدة واحدة أو محفظة عقارية ضخمة، فريقنا جاهز لتقديم الدعم والمشورة اللازمة لحماية استثماراتك.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center hover:border-brand-secondary transition-all group"
              >
                <div className="w-14 h-14 bg-bg-subtle rounded-2xl flex items-center justify-center text-brand-secondary mx-auto mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">{info.title}</h3>
                <div className="text-xl font-bold text-brand-primary mb-1">{info.details}</div>
                <div className="text-sm text-ink-muted">{info.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="bg-bg-subtle/30">
        <ContactForm 
          formRef={formRef}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
          formSubmitted={formSubmitted}
          handleSubmit={handleSubmit}
        />
      </div>

      {/* Map Placeholder */}
      <section className="py-20 section-container">
        <div className="rounded-[2.5rem] overflow-hidden bg-bg-subtle border border-line h-[400px] relative">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-ink-muted">
            <MapPin size={48} className="mb-4 opacity-20" />
            <p className="font-bold">خريطة الموقع التفاعلية</p>
            <p className="text-sm">سيتم تحميل الخريطة هنا</p>
          </div>
          {/* In a real app, you'd embed Google Maps here */}
          <div className="absolute bottom-8 right-8 glass-card p-6 max-w-xs bg-white/90 backdrop-blur-md">
            <h4 className="font-bold text-brand-primary mb-2 flex items-center gap-2">
              <MessageSquare size={16} className="text-brand-secondary" />
              زيارة مكتبنا
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed">
              نرحب بكم في مقرنا الرئيسي لمناقشة احتياجاتكم العقارية وجهاً لوجه.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
