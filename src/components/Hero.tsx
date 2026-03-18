/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpLeft, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { HERO_STATS } from '../constants';

interface HeroProps {
  scrollToForm: (pkg?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToForm }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-caps">إدارة الأصول العقارية الذكية</span>
          <h1 className="text-6xl md:text-8xl font-bold text-brand-primary leading-[1.1] mb-8">
            نحول المخاطر <br />
            <span className="font-serif italic text-brand-secondary">إلى استقرار</span>
          </h1>
          <p className="text-xl text-ink-muted leading-relaxed max-w-xl mb-12">
            منظومة مؤسسية متكاملة لإدارة المخاطر الإيجارية. نجمع بين الفحص الائتماني الدقيق، التوثيق القانوني المحكم، وإدارة التعثر الاحترافية لضمان تدفقاتك النقدية.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToForm('طلب تقييم أولي')}
              className="btn-primary group"
            >
              <span>ابدأ التقييم المجاني</span>
              <ArrowUpLeft className="w-5 h-5 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <a
              href="#packages"
              className="btn-secondary"
            >
              استعراض الباقات
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-line pt-8">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-bg-subtle overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-brand-primary block">+500 مالك عقاري</span>
              <span className="text-ink-muted">يثقون في خدماتنا لإدارة أصولهم</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="glass-card relative z-10 overflow-hidden">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                  <BarChart3 className="text-brand-secondary w-6 h-6" />
                </div>
                <div>
                  <span className="font-bold block">مؤشر الأداء</span>
                  <span className="text-xs text-ink-muted">تحديث مباشر</span>
                </div>
              </div>
              <div className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full text-xs font-bold">
                نشط الآن
              </div>
            </div>

            <div className="space-y-8">
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-ink-muted group-hover:text-brand-primary transition-colors">{stat.label}</span>
                    <span className="text-2xl font-bold text-brand-primary">{stat.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-bg-subtle rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: stat.value.includes('%') ? stat.value : '85%' }}
                      transition={{ duration: 1.5, delay: 0.8 + i * 0.2 }}
                      className="h-full bg-brand-secondary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="bg-bg-subtle p-4 rounded-2xl">
                <ShieldCheck className="text-brand-accent w-6 h-6 mb-2" />
                <span className="text-xs font-bold block">حماية كاملة</span>
              </div>
              <div className="bg-bg-subtle p-4 rounded-2xl">
                <Zap className="text-brand-secondary w-6 h-6 mb-2" />
                <span className="text-xs font-bold block">تنفيذ سريع</span>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-secondary/20 blur-2xl rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-accent/20 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
