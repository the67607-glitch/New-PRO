/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-subtle/30 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-10 md:p-16 bg-white"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary">
              <Shield size={24} />
            </div>
            <h1 className="text-4xl font-bold text-brand-primary">سياسة الخصوصية</h1>
          </div>

          <div className="prose prose-lg max-w-none text-ink-muted space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                <Lock size={20} className="text-brand-secondary" />
                <span>التزامنا بالخصوصية</span>
              </h2>
              <p>
                نحن في منظومة إدارة المخاطر العقارية نولي أهمية قصوى لخصوصية بياناتكم. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمونها لنا عبر موقعنا الإلكتروني.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                <Eye size={20} className="text-brand-secondary" />
                <span>المعلومات التي نجمعها</span>
              </h2>
              <p>نقوم بجمع المعلومات الضرورية لتقديم خدماتنا بكفاءة، وتشمل:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>الاسم الكامل ومعلومات التواصل (رقم الجوال، البريد الإلكتروني).</li>
                <li>معلومات المحفظة العقارية أو العقارات المراد إدارتها.</li>
                <li>بيانات الدفع عند الاشتراك في الباقات (تتم معالجتها عبر بوابات دفع آمنة).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                <FileText size={20} className="text-brand-secondary" />
                <span>كيفية استخدام المعلومات</span>
              </h2>
              <p>نستخدم بياناتكم للأغراض التالية:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>تقديم الاستشارات القانونية والائتمانية المطلوبة.</li>
                <li>التواصل معكم بخصوص طلباتكم وتحديثات الخدمة.</li>
                <li>تحسين جودة خدماتنا وتجربة المستخدم على الموقع.</li>
                <li>الامتثال للمتطلبات القانونية والتنظيمية في المملكة العربية السعودية.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                <Shield size={20} className="text-brand-secondary" />
                <span>حماية البيانات</span>
              </h2>
              <p>
                نطبق معايير أمنية تقنية وإدارية صارمة لحماية بياناتكم من الوصول غير المصرح به أو التغيير أو الإفصاح. يتم تشفير جميع البيانات الحساسة ونقلها عبر بروتوكولات آمنة.
              </p>
            </section>

            <section className="pt-8 border-t border-line">
              <p className="text-sm italic">
                آخر تحديث: مارس 2026. نحن نحتفظ بالحق في تحديث هذه السياسة عند الضرورة، وسيتم نشر أي تغييرات هنا.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
