/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Search, FileText, ShieldCheck, Gavel, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    title: 'الفحص الائتماني',
    desc: 'تحليل دقيق لسجل المستأجر المالي والائتماني لضمان الملاءة المالية.',
    icon: <Search size={24} />,
    color: 'bg-blue-500'
  },
  {
    title: 'التوثيق القانوني',
    desc: 'إعداد عقود محكمة تضمن حقوق المالك وتتوافق مع الأنظمة المحلية.',
    icon: <FileText size={24} />,
    color: 'bg-emerald-500'
  },
  {
    title: 'الحماية النشطة',
    desc: 'مراقبة مستمرة لعمليات السداد والتدخل الفوري عند أي تأخير.',
    icon: <ShieldCheck size={24} />,
    color: 'bg-orange-500'
  },
  {
    title: 'الإجراء القانوني',
    desc: 'تنفيذ فوري للإجراءات القانونية والإخلاء عند التعثر المستمر.',
    icon: <Gavel size={24} />,
    color: 'bg-red-500'
  }
];

export const Workflow: React.FC = () => {
  return (
    <section className="section-container overflow-hidden">
      <div className="text-center mb-24">
        <span className="label-caps">كيف نعمل</span>
        <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
          منظومة متكاملة <span className="text-brand-secondary">لحماية أصولك</span>
        </h2>
        <p className="text-xl text-ink-muted max-w-2xl mx-auto">
          نحن لا نقدم مجرد خدمة، بل نبني نظاماً دفاعياً يحمي استثماراتك من البداية وحتى النهاية.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-100 -translate-y-1/2 hidden lg:block" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white ${step.color} shadow-xl shadow-${step.color.split('-')[1]}-500/20 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {step.icon}
              </div>
              <div className="relative">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-4xl font-black text-zinc-100 -z-10">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-primary">
                  {step.title}
                </h3>
                <p className="text-ink-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case System Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 glass-card bg-zinc-900 text-white p-12 md:p-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-6 block">الابتكار التقني</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              نظام إدارة القضايا <br />
              <span className="text-brand-secondary">الموحد (UCS)</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-10">
              منصة مركزية تتيح لك مراقبة جميع قضاياك، تتبع مراحل التنفيذ، والحصول على تحديثات فورية حول حالة محفظتك العقارية.
            </p>
            <div className="flex flex-wrap gap-4">
              {['أتمتة كاملة', 'تقارير ذكية', 'ربط مع ناجز', 'تنبيهات فورية'].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle2 size={14} className="text-brand-accent" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-secondary/20 blur-3xl rounded-full group-hover:bg-brand-secondary/30 transition-colors" />
            <div className="relative bg-zinc-800 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <div className="w-24 h-6 bg-white/10 rounded" />
                <div className="w-10 h-10 bg-brand-secondary rounded-full" />
              </div>
              <div className="space-y-4">
                <div className="w-full h-4 bg-white/5 rounded" />
                <div className="w-3/4 h-4 bg-white/5 rounded" />
                <div className="w-1/2 h-4 bg-white/5 rounded" />
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                <div className="h-12 bg-white/5 rounded-xl" />
                <div className="h-12 bg-white/5 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
