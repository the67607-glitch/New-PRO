/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { AUDIENCE_ITEMS } from '../constants';

export const TargetAudience: React.FC = () => {
  return (
    <section className="section-container bg-bg-subtle/50">
      <div className="text-center mb-16">
        <span className="label-caps">لمن هذه الخدمة</span>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary">حلول مخصصة لكل قطاع</h2>
      </div>

      <div className="bento-grid">
        {AUDIENCE_ITEMS.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`md:col-span-4 glass-card group hover:bg-brand-primary transition-all duration-500 cursor-default`}
          >
            <div className="w-14 h-14 bg-bg-subtle rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-white/10 group-hover:text-brand-secondary transition-all">
              {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-primary group-hover:text-white transition-colors">
              {item.title}
            </h3>
            <p className="text-ink-muted group-hover:text-white/70 transition-colors leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
