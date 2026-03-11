/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar } from 'lucide-react';

interface ConsultationCTAProps {
  scrollToForm: (pkg?: string) => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ scrollToForm }) => {
  return (
    <section className="section-container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-brand-primary rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden group"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-secondary/20 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="label-caps text-brand-secondary">دعم استراتيجي</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">هل تحتاج إلى <br /> <span className="font-serif italic text-brand-secondary">استشارة مهنية؟</span></h2>
            <p className="text-white/70 text-xl leading-relaxed max-w-xl">
              نقدم جلسة استشارية أولية <span className="font-bold text-white underline decoration-brand-secondary underline-offset-8">مجانية بالكامل</span> لتقييم وضعك العقاري، تحليل المخاطر في محفظتك، وتقديم خارطة طريق واضحة.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 items-center lg:items-end">
            <button 
              onClick={() => scrollToForm('استشارة مجانية')}
              className="bg-brand-secondary text-brand-primary px-12 py-6 rounded-2xl font-bold text-xl transition-all hover:bg-white hover:scale-105 active:scale-95 flex items-center gap-4 group/btn shadow-2xl shadow-brand-secondary/20"
            >
              <span>احجز استشارتك المجانية</span>
              <Calendar className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              <span>مواعيد متاحة خلال الـ 24 ساعة القادمة</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
