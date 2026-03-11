/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileSearch, Gavel, Scale, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    title: 'الفحص الائتماني المتقدم',
    desc: 'تحليل شامل للسجل الائتماني للمستأجر عبر منصات الربط المباشر لضمان الملاءة المالية.',
    icon: <FileSearch size={24} />,
    color: 'bg-blue-500'
  },
  {
    title: 'التوثيق القانوني المحكم',
    desc: 'صياغة وتوثيق عقود إيجار إلكترونية موحدة تضمن حقوق المالك وتعتبر سندات تنفيذية.',
    icon: <ShieldCheck size={24} />,
    color: 'bg-emerald-500'
  },
  {
    title: 'إدارة التعثر والتحصيل',
    desc: 'منظومة احترافية لمتابعة السداد والتحصيل الودي والقانوني لضمان التدفقات النقدية.',
    icon: <Scale size={24} />,
    color: 'bg-orange-500'
  },
  {
    title: 'التنفيذ والإخلاء',
    desc: 'إجراءات قانونية سريعة وحازمة عبر محاكم التنفيذ لضمان استعادة العقار عند التعثر.',
    icon: <Gavel size={24} />,
    color: 'bg-red-500'
  }
];

export const CoreServices: React.FC = () => {
  return (
    <section id="service" className="section-container bg-bg-subtle/50">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 sticky top-32">
          <span className="label-caps">المنظومة التشغيلية</span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-primary leading-tight mb-8">
            تغطية شاملة <br />
            <span className="text-brand-secondary">لدورة الإيجار</span>
          </h2>
          <p className="text-xl text-ink-muted leading-relaxed mb-10">
            نحن لا نقدم مجرد استشارات، بل ندير العملية التشغيلية بالكامل عبر مرخصين معتمدين لضمان أعلى مستويات الدقة والسرعة.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-line shadow-sm">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-bold text-lg">مرخصون ومعتمدون نظامياً</span>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-line shadow-sm">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-bold text-lg">ربط مباشر مع منصة إيجار</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid gap-6">
          {SERVICES.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-line rounded-[2.5rem] flex flex-col md:flex-row items-start gap-8 hover:border-brand-secondary hover:shadow-2xl hover:shadow-black/5 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${item.color} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-ink-muted leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
