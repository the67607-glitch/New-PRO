/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
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
              <FileText size={24} />
            </div>
            <h1 className="text-4xl font-bold text-brand-primary">الشروط والأحكام</h1>
          </div>

          <div className="prose prose-lg max-w-none text-ink-muted space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                <Info size={20} className="text-brand-secondary" />
                <span>مقدمة</span>
              </h2>
              <p>
                باستخدامكم لموقع منظومة إدارة المخاطر العقارية، فإنكم توافقون على الالتزام بالشروط والأحكام الموضحة أدناه. يرجى قراءتها بعناية قبل البدء في استخدام خدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                <CheckCircle2 size={20} className="text-brand-secondary" />
                <span>الخدمات المقدمة</span>
              </h2>
              <p>
                تقدم المنظومة خدمات استشارية قانونية وائتمانية وإدارة للمخاطر العقارية. يتم تقديم هذه الخدمات وفقاً لأفضل الممارسات المهنية والأنظمة المعمول بها في المملكة العربية السعودية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                <AlertCircle size={20} className="text-brand-secondary" />
                <span>مسؤوليات المستخدم</span>
              </h2>
              <p>يقر المستخدم بما يلي:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>صحة ودقة جميع المعلومات والبيانات المقدمة عبر الموقع.</li>
                <li>استخدام الموقع والخدمات لأغراض قانونية ومشروعة فقط.</li>
                <li>عدم محاولة الوصول غير المصرح به إلى أنظمة الموقع أو بيانات المستخدمين الآخرين.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                <FileText size={20} className="text-brand-secondary" />
                <span>الاشتراكات والدفع</span>
              </h2>
              <p>
                تخضع جميع الاشتراكات في الباقات والخدمات المنفصلة لسياسة الدفع المسبق. يتم تفعيل الخدمة فور تأكيد عملية الدفع بنجاح. جميع الأسعار المعلنة شاملة لضريبة القيمة المضافة (15%).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                <Shield size={20} className="text-brand-secondary" />
                <span>إخلاء المسؤولية</span>
              </h2>
              <p>
                تبذل المنظومة قصارى جهدها لضمان دقة المعلومات والخدمات المقدمة، إلا أنها لا تضمن النتائج النهائية في القضايا القانونية أو الائتمانية المعقدة، حيث تعتمد هذه النتائج على عوامل خارجية متعددة.
              </p>
            </section>

            <section className="pt-8 border-t border-line">
              <p className="text-sm italic">
                آخر تحديث: مارس 2026. يخضع هذا الموقع والخدمات المقدمة من خلاله لأنظمة وقوانين المملكة العربية السعودية.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Re-using Shield icon for consistency
import { Shield } from 'lucide-react';
