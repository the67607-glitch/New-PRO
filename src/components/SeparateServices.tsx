/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpLeft } from 'lucide-react';
import { SEPARATE_SERVICES } from '../constants';

interface SeparateServicesProps {
  scrollToForm: (pkg?: string) => void;
}

export const SeparateServices: React.FC<SeparateServicesProps> = () => {
  const navigate = useNavigate();

  return (
    <section id="separate-services" className="section-container bg-bg-subtle/30">
      <div className="text-center mb-20">
        <span className="label-caps">حلول متخصصة</span>
        <h2 className="text-4xl md:text-6xl font-bold text-brand-primary">الخدمات المنفصلة</h2>
        <p className="text-ink-muted mt-4">خدمات دقيقة ومحددة لمعالجة حالات خاصة في محفظتك العقارية.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SEPARATE_SERVICES.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card group hover:border-brand-secondary transition-all duration-500 flex flex-col"
          >
            <div className="w-14 h-14 bg-bg-subtle rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-secondary group-hover:text-white transition-all">
              {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-4">{service.title}</h3>
            <p className="text-ink-muted text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>

            <div className="pt-6 border-t border-line flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-normal text-ink-muted mb-1">تبدأ من</span>
                <div className="text-brand-primary font-bold text-xl">
                  {service.price} <span className="text-xs font-normal text-ink-muted">ر.س</span>
                </div>
              </div>
              <button
                onClick={() => navigate(`/payment?service=${encodeURIComponent(service.title)}`)}
                className="btn-primary py-3 px-6 text-sm group/btn"
              >
                <span>ادفع الآن</span>
                <ArrowUpLeft size={16} className="transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
