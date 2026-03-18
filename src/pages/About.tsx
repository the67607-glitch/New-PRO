/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'وحدة عقارية مدارة', value: '+15,000' },
    { label: 'نسبة تحصيل الإيجارات', value: '98%' },
    { label: 'خبير قانوني وائتماني', value: '+50' },
    { label: 'مدينة حول المملكة', value: '12' },
  ];

  const values = [
    {
      title: 'الشفافية المطلقة',
      desc: 'نؤمن بأن الوضوح هو أساس الثقة في التعاملات العقارية والمالية.',
      icon: <Eye size={24} />
    },
    {
      title: 'الابتكار التقني',
      desc: 'نسخر أحدث تقنيات الذكاء الاصطناعي لتحليل المخاطر والتنبؤ بالتعثر.',
      icon: <TrendingUp size={24} />
    },
    {
      title: 'الحماية القانونية',
      desc: 'نضمن توافق جميع إجراءاتنا مع أنظمة وزارة العدل والجهات المختصة.',
      icon: <Shield size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-brand-primary text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-secondary blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent blur-[120px] rounded-full" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="label-caps text-brand-secondary">من نحن</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              نقود مستقبل <br /> <span className="text-brand-secondary italic font-serif">الأمان العقاري</span> في المملكة
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              تأسست منظومة إدارة المخاطر العقارية لتكون الشريك الاستراتيجي الأول للملاك والمستثمرين، موفرةً حلولاً متكاملة تجمع بين الخبرة القانونية العميقة والتحليل الائتماني المتقدم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-b border-line">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">{stat.value}</div>
                <div className="text-sm text-ink-muted font-bold uppercase tracking-normal">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-4xl font-bold text-brand-primary mb-6">رؤيتنا ورسالتنا</h2>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              نسعى لأن نكون المعيار الذهبي في إدارة المخاطر العقارية على مستوى المنطقة، من خلال خلق بيئة استثمارية آمنة ومستقرة تضمن حقوق جميع الأطراف وتساهم في نمو القطاع العقاري وفق رؤية المملكة 2030.
            </p>
            <ul className="space-y-4">
              {['تمكين الملاك من اتخاذ قرارات ائتمانية مدروسة', 'تقليل نسب التعثر الإيجاري إلى أدنى مستوياتها', 'أتمتة العمليات القانونية لسرعة استرداد الحقوق'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-primary font-medium">
                  <CheckCircle2 size={20} className="text-brand-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-bg-subtle rounded-[3rem] overflow-hidden">
              <img
                src="https://i.ibb.co/60kMrmmW/4-8nd.jpg"
                alt="رؤيتنا ورسالتنا"
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-80 bg-white/90 backdrop-blur-xl border border-brand-secondary/30 rounded-[2.5rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] hidden md:block z-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary">
                  <Shield size={32} />
                </div>
                <div className="h-px flex-grow bg-brand-secondary/20" />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-3">اعتماد مؤسسي</h3>
              <p className="text-ink-muted text-sm leading-relaxed font-medium">
                نعمل بموجب تراخيص رسمية صادرة من وزارة العدل، الهيئة العامة للعقار، ووزارة التجارة، ملتزمين بأعلى معايير الحوكمة والشفافية.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-bg-subtle/30 py-32">
        <div className="section-container">
          <div className="text-center mb-20">
            <span className="label-caps">قيمنا الجوهرية</span>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary">المبادئ التي تحركنا</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 bg-white hover:border-brand-secondary transition-all"
              >
                <div className="w-14 h-14 bg-bg-subtle rounded-2xl flex items-center justify-center text-brand-primary mb-8">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">{value.title}</h3>
                <p className="text-ink-muted leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import { Eye } from 'lucide-react';
