/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, CreditCard, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { SEPARATE_SERVICES, PACKAGES } from '../constants';

export const Payment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceTitle = searchParams.get('service');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const service = (SEPARATE_SERVICES.find(s => s.title === serviceTitle) || 
                 PACKAGES.find(p => p.name === serviceTitle)) as any;

  const isPackage = PACKAGES.some(p => p.name === serviceTitle);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // In a real app, we'd redirect or show a final success state
    }, 5000);
  };

  if (!service && !formSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-primary mb-4">عذراً، الخدمة غير موجودة</h2>
          <button onClick={() => navigate('/')} className="btn-primary py-3 px-8">العودة للرئيسية</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-subtle/30 pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-ink-muted hover:text-brand-primary transition-colors mb-8 group"
        >
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          <span>العودة للرئيسية</span>
        </button>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Service Summary */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 border-brand-secondary/20 bg-white">
              <span className="label-caps">ملخص الطلب</span>
              <h1 className="text-3xl font-bold text-brand-primary mt-4 mb-6">
                {isPackage ? `باقة ${service?.name}` : service?.title}
              </h1>
              <p className="text-ink-muted leading-relaxed mb-8">{service?.desc}</p>
              
              <div className="pt-8 border-t border-line">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-ink-muted">{isPackage ? "سعر الباقة السنوي" : "سعر الخدمة"}</span>
                  <span className="font-bold text-brand-primary">{service?.price} ر.س</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-ink-muted">ضريبة القيمة المضافة (15%)</span>
                  <span className="font-bold text-brand-primary">شاملة</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-line">
                  <span className="text-xl font-bold text-brand-primary">الإجمالي</span>
                  <span className="text-3xl font-bold text-brand-secondary">{service?.price} ر.س</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-brand-accent/5 border border-brand-accent/10 rounded-2xl">
              <ShieldCheck className="text-brand-accent shrink-0" size={24} />
              <p className="text-sm text-brand-primary font-medium">
                جميع المعاملات المالية مشفرة وآمنة بنسبة 100% وفقاً للمعايير العالمية.
              </p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 bg-white shadow-xl shadow-brand-primary/5">
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
                    <h3 className="text-3xl font-bold text-brand-primary mb-4">تمت عملية الدفع بنجاح</h3>
                    <p className="text-ink-muted text-lg mb-8">شكراً لثقتكم. سيتم تزويدكم بتفاصيل الخدمة عبر البريد الإلكتروني فوراً.</p>
                    <button 
                      onClick={() => navigate('/')}
                      className="btn-primary py-3 px-10"
                    >
                      العودة للرئيسية
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-brand-primary flex items-center gap-3">
                        <CreditCard className="text-brand-secondary" />
                        <span>بيانات الدفع</span>
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">الاسم على البطاقة</label>
                          <input required type="text" placeholder="أدخل الاسم كما هو مكتوب على البطاقة" className="w-full bg-bg-subtle border border-line rounded-xl p-4 focus:border-brand-secondary outline-none transition-all font-medium" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">رقم البطاقة</label>
                          <div className="relative">
                            <input required type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-bg-subtle border border-line rounded-xl p-4 focus:border-brand-secondary outline-none transition-all font-medium" />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-2">
                              <div className="w-8 h-5 bg-gray-200 rounded"></div>
                              <div className="w-8 h-5 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">تاريخ الانتهاء</label>
                            <input required type="text" placeholder="MM / YY" className="w-full bg-bg-subtle border border-line rounded-xl p-4 focus:border-brand-secondary outline-none transition-all font-medium" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">رمز التحقق (CVV)</label>
                            <input required type="text" placeholder="XXX" className="w-full bg-bg-subtle border border-line rounded-xl p-4 focus:border-brand-secondary outline-none transition-all font-medium" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-line">
                      <h2 className="text-2xl font-bold text-brand-primary">بيانات التواصل</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">البريد الإلكتروني</label>
                          <input required type="email" placeholder="example@domain.com" className="w-full bg-bg-subtle border border-line rounded-xl p-4 focus:border-brand-secondary outline-none transition-all font-medium" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">رقم الجوال</label>
                          <input required type="tel" placeholder="05XXXXXXXX" className="w-full bg-bg-subtle border border-line rounded-xl p-4 focus:border-brand-secondary outline-none transition-all font-medium" />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn-primary w-full py-5 text-xl group">
                      <span>تأكيد الدفع</span>
                      <Lock className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    
                    <div className="flex items-center justify-center gap-6 opacity-40 grayscale">
                      <div className="h-8 w-12 bg-gray-300 rounded"></div>
                      <div className="h-8 w-12 bg-gray-300 rounded"></div>
                      <div className="h-8 w-12 bg-gray-300 rounded"></div>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
