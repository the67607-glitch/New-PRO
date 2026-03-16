/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Building2, Home, Landmark, Users } from 'lucide-react';

const AUDIENCES = [
  {
    title: 'ملاك العقارات السكنية',
    desc: 'حماية شاملة لأصولك العقارية من مخاطر التعثر والتأخر في السداد.',
    icon: <Home size={24} />,
    color: 'bg-blue-500'
  },
  {
    title: 'شركات التطوير العقاري',
    desc: 'حلول مؤسسية متكاملة لإدارة محافظ الإيجار الكبيرة بكفاءة عالية.',
    icon: <Building2 size={24} />,
    color: 'bg-emerald-500'
  },
  {
    title: 'صناديق الاستثمار العقاري',
    desc: 'تقارير تحليلية دقيقة وإدارة مخاطر احترافية لتعظيم العوائد.',
    icon: <Landmark size={24} />,
    color: 'bg-orange-500'
  },
  {
    title: 'مكاتب إدارة الأملاك',
    desc: 'أدوات متقدمة لتبسيط العمليات وتقليل نسب التعثر بشكل ملموس.',
    icon: <Users size={24} />,
    color: 'bg-purple-500'
  }
];

export const TargetAudience: React.FC = () => {
  return (
    <section id="audience" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="label-caps">من نخدم</span>
        <h2 className="text-4xl md:text-6xl font-black text-brand-primary leading-tight mb-6">
          حلول مصممة <span className="text-brand-secondary">لاحتياجاتك</span>
        </h2>
        <p className="text-xl text-ink-muted leading-relaxed">
          نقدم خدماتنا لجميع الأطراف في القطاع العقاري الإيجاري بما يتناسب مع حجم واحتياجات كل عميل.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {AUDIENCES.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white border border-line rounded-[2rem] text-center hover:border-brand-secondary hover:shadow-2xl hover:shadow-black/5 transition-all group"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${item.color} shadow-lg mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">
              {item.title}
            </h3>
            <p className="text-ink-muted leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
