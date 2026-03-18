/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Search, FileText, ShieldCheck, Gavel, CheckCircle2, BarChart3 } from 'lucide-react';

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
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Header & UCS Highlight */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
          <div>
            <span className="label-caps">كيف نعمل</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-6 leading-tight">
              منظومة متكاملة <br />
              <span className="text-brand-secondary">لحماية أصولك</span>
            </h2>
            <p className="text-xl text-ink-muted leading-relaxed">
              نحن لا نقدم مجرد خدمة، بل نبني نظاماً دفاعياً يحمي استثماراتك من البداية وحتى النهاية عبر أتمتة كاملة للعمليات.
            </p>
          </div>

          {/* UCS Highlight - Dashboard Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center">
                  <BarChart3 size={20} className="text-brand-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-normal text-brand-secondary">نظام UCS الموحد</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">إدارة القضايا الذكية</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                منصة مركزية تتيح لك مراقبة جميع قضاياك، تتبع مراحل التنفيذ، والحصول على تحديثات فورية حول حالة محفظتك.
              </p>

              <div className="space-y-3">
                {[
                  { label: 'القضايا النشطة', value: '12', color: 'bg-brand-secondary' },
                  { label: 'نسبة الإنجاز', value: '94%', color: 'bg-brand-accent' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl flex justify-between items-center border border-white/10">
                    <span className="text-xs text-zinc-400">{item.label}</span>
                    <span className={`text-sm font-bold ${item.color.replace('bg-', 'text-')}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Vertical Timeline Steps */}
        <div className="lg:col-span-7 space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute top-0 right-10 w-px h-full bg-line hidden md:block" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col md:flex-row items-start gap-8 p-8 bg-white border border-line rounded-[2rem] hover:border-brand-secondary hover:shadow-xl transition-all group"
            >
              {/* Step Number & Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white ${step.color} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {step.icon}
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white border border-line rounded-full flex items-center justify-center text-xs font-black text-brand-primary shadow-sm">
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
                  {step.title}
                </h3>
                <p className="text-ink-muted leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
