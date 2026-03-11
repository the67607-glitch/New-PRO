/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Send, Phone, Mail, MapPin } from 'lucide-react';
import { SERVICE_OPTIONS } from '../constants';

interface ContactFormProps {
  formRef: React.RefObject<HTMLDivElement | null>;
  selectedPackage: string;
  setSelectedPackage: (pkg: string) => void;
  formSubmitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  formRef, 
  selectedPackage, 
  setSelectedPackage, 
  formSubmitted, 
  handleSubmit 
}) => {
  return (
    <section id="form" ref={formRef} className="section-container bg-bg-subtle/50">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <span className="label-caps">تواصل معنا</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-8">لنبدأ رحلة <br /> <span className="text-brand-secondary">تأمين أصولك</span></h2>
          <p className="text-lg text-ink-muted leading-relaxed mb-12">
            فريقنا من الخبراء القانونيين والائتمانيين جاهز لمساعدتك في حماية استثماراتك العقارية وضمان استقرار تدفقاتك النقدية.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary border border-line group-hover:bg-brand-secondary group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-xs text-ink-muted block uppercase tracking-widest font-bold mb-1">اتصل بنا</span>
                <span className="text-lg font-bold text-brand-primary">9200 XXXXX</span>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary border border-line group-hover:bg-brand-secondary group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs text-ink-muted block uppercase tracking-widest font-bold mb-1">البريد الإلكتروني</span>
                <span className="text-lg font-bold text-brand-primary">info@riskmanagement.sa</span>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary border border-line group-hover:bg-brand-secondary group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-xs text-ink-muted block uppercase tracking-widest font-bold mb-1">المقر الرئيسي</span>
                <span className="text-lg font-bold text-brand-primary">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="glass-card p-10 md:p-16">
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-primary mb-4">تم استلام طلبك بنجاح</h3>
                  <p className="text-ink-muted text-lg">سيقوم مستشارنا القانوني بالتواصل معك خلال 24 ساعة عمل لترتيب الخطوات القادمة.</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="mt-10 text-brand-secondary font-bold hover:underline"
                  >
                    إرسال طلب آخر
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">الاسم الكامل</label>
                      <input required type="text" placeholder="أدخل اسمك الثلاثي" className="w-full bg-bg-subtle border border-line rounded-2xl p-4 focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/5 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">رقم الجوال</label>
                      <input required type="tel" placeholder="05XXXXXXXX" className="w-full bg-bg-subtle border border-line rounded-2xl p-4 focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/5 outline-none transition-all font-medium" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">البريد الإلكتروني</label>
                      <input required type="email" placeholder="example@domain.com" className="w-full bg-bg-subtle border border-line rounded-2xl p-4 focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/5 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">الخدمة المطلوبة</label>
                      <div className="relative">
                        <select 
                          required 
                          value={selectedPackage}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          className="w-full bg-bg-subtle border border-line rounded-2xl p-4 focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/5 outline-none transition-all font-medium appearance-none"
                        >
                          <option value="">اختر الخدمة المناسبة</option>
                          {SERVICE_OPTIONS.main.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-ink-muted">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">وصف المحفظة / الحالة</label>
                    <textarea required rows={4} placeholder="يرجى كتابة تفاصيل مختصرة عن عدد الوحدات أو المشكلة التي تواجهها..." className="w-full bg-bg-subtle border border-line rounded-2xl p-4 focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/5 outline-none transition-all font-medium resize-none" />
                  </div>

                  <button type="submit" className="btn-primary w-full py-5 text-xl group">
                    <span>إرسال الطلب الآن</span>
                    <Send className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                  </button>
                  
                  <p className="text-center text-xs text-ink-muted">
                    بالنقر على إرسال، فإنك توافق على <Link to="/privacy" className="underline cursor-pointer">سياسة الخصوصية</Link> و <Link to="/terms" className="underline cursor-pointer">شروط الخدمة</Link>.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
