/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { PACKAGES } from '../constants';

interface PackagesProps {
  scrollToForm: (pkg?: string) => void;
}

export const Packages: React.FC<PackagesProps> = () => {
  const navigate = useNavigate();

  return (
    <section id="packages" className="section-container bg-brand-primary text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="text-center mb-20 relative z-10">
        <span className="label-caps text-brand-secondary">هيكلة الباقات</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">اختر حجم التغطية المناسب</h2>
        <p className="text-white/50 max-w-2xl mx-auto">خطط مرنة مصممة لتناسب احتياجات الملاك الأفراد والشركات العقارية الكبرى.</p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8 relative z-10">
        {PACKAGES.map((pkg, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col ${
              i === 1 
                ? 'bg-white/10 border-brand-secondary shadow-2xl shadow-brand-secondary/10 scale-105 z-20' 
                : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
          >
            {i === 1 && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-secondary text-brand-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                الأكثر اختياراً
              </div>
            )}

            <div className="mb-10">
              <h3 className="text-3xl font-bold mb-3">{pkg.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{pkg.desc}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-brand-secondary">{pkg.price}</span>
                <span className="text-sm text-white/50">ر.س / سنوياً</span>
              </div>
            </div>

            <div className="flex-grow">
              <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-6 block">المميزات الرئيسية</span>
              <ul className="space-y-5 mb-12">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-4 text-sm text-white/70 group">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <span className="group-hover:text-white transition-colors">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => navigate(`/payment?service=${encodeURIComponent(pkg.name)}`)}
              className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group ${
                i === 1 
                  ? 'bg-brand-secondary text-brand-primary hover:bg-white' 
                  : 'bg-white/10 text-white hover:bg-white hover:text-brand-primary'
              }`}
            >
              <span>اختيار الباقة</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
