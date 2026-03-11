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
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12">
                <Shield className="text-brand-primary w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight leading-none">إدارة المخاطر</span>
                <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest mt-1">الاستقرار العقاري</span>
              </div>
            </Link>
            <p className="text-white/50 max-w-sm leading-relaxed text-lg mb-10">
              منظومة رائدة في المملكة العربية السعودية متخصصة في حماية الاستثمارات العقارية عبر إدارة احترافية للمخاطر والتعثر.
            </p>
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
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-sm text-white/30">
            <p>© {new Date().getFullYear()} إدارة المخاطر العقارية. جميع الحقوق محفوظة.</p>
            <div className="hidden md:flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
              <Link to="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/30 text-sm">
              <Globe size={14} />
              <span>العربية (السعودية)</span>
            </div>
            <div className="flex gap-4">
              <div className="px-3 py-1 rounded-lg border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/30">نظامي ومعتمد</div>
              <div className="px-3 py-1 rounded-lg border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/30">حوكمة كاملة</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
