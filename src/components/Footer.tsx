/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Twitter, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-secondary opacity-20" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-8 group cursor-pointer">
              <img 
                src="https://i.ibb.co/hRW4J0BP/K-1.png" 
                alt="إدارة المخاطر" 
                className="h-14 w-auto brightness-0 invert transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold tracking-tight leading-none text-white">
                إدارة المخاطر الإيجارية
              </span>
            </Link>
            <p className="text-white/50 max-w-sm leading-relaxed text-lg mb-10">
              منظومة رائدة في المملكة العربية السعودية متخصصة في حماية الاستثمارات العقارية عبر إدارة احترافية للمخاطر والتعثر.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Shield size={12} className="text-brand-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">مرخص من وزارة العدل</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Shield size={12} className="text-brand-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">مرخص من الهيئة العامة للعقار</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Shield size={12} className="text-brand-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">مرخص من وزارة التجارة</span>
              </div>
            </div>
            <div className="flex gap-4">
              {[Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <span className="label-caps text-brand-secondary mb-8">الشركة</span>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">عن المنظومة</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="label-caps text-brand-secondary mb-8">الدعم</span>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/faq" className="hover:text-white transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <span className="label-caps text-brand-secondary mb-4">النشرة البريدية</span>
              <p className="text-sm text-white/50 mb-6">اشترك للحصول على آخر التحديثات والتقارير العقارية.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="بريدك الإلكتروني" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-secondary flex-grow" />
                <button className="bg-brand-secondary text-brand-primary px-4 py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Copyright & Legal Links */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white/40">
              <p>جميع الحقوق محفوظة © {new Date().getFullYear()} لمنظومة إدارة المخاطر العقارية.</p>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-brand-secondary transition-colors">سياسة الخصوصية</Link>
                <Link to="/terms" className="hover:text-brand-secondary transition-colors">الشروط والأحكام</Link>
              </div>
            </div>
            
            {/* Language & Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center gap-2 text-white/40 text-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <Globe size={14} className="text-brand-secondary" />
                <span>المملكة العربية السعودية</span>
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 bg-white/5">نظامي ومعتمد</div>
                <div className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 bg-white/5">حوكمة كاملة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
