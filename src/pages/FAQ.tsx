/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-line last:border-0 transition-all ${isOpen ? 'bg-bg-subtle/30' : ''}`}>
      <button 
        onClick={onClick}
        className="w-full py-6 px-4 flex items-center justify-between text-right group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-secondary' : 'text-brand-primary group-hover:text-brand-secondary'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-secondary text-white rotate-180' : 'bg-bg-subtle text-brand-primary'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-8 text-ink-muted leading-relaxed text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "ما هي منظومة إدارة المخاطر العقارية؟",
      answer: "هي منصة متخصصة تهدف إلى حماية الملاك والمستثمرين العقاريين من مخاطر التعثر الإيجاري والمشاكل القانونية، من خلال تقديم تحليلات ائتمانية دقيقة للمستأجرين واستشارات قانونية احترافية."
    },
    {
      question: "كيف تساعد المنظومة في تقليل التعثر الإيجاري؟",
      answer: "نقوم بذلك عبر فحص السجل الائتماني للمستأجر المحتمل، وتحليل قدرته المالية، وتقديم تقرير مخاطر مفصل يساعد المالك في اتخاذ قرار التأجير بناءً على بيانات دقيقة وليس مجرد انطباعات."
    },
    {
      question: "هل الخدمات المقدمة متوافقة مع الأنظمة السعودية؟",
      answer: "نعم، جميع إجراءاتنا وعقودنا واستشاراتنا مصممة لتتوافق تماماً مع أنظمة وزارة العدل، ونظام التنفيذ، ونظام إيجار، وأنظمة وزارة التجارة، وكافة التشريعات العقارية المعمول بها في المملكة العربية السعودية."
    },
    {
      question: "ما هي مدة الاستشارة القانونية؟",
      answer: "تعتمد المدة على نوع الباقة، ولكن بشكل عام نضمن الرد على الاستشارات العاجلة خلال 24 ساعة عمل، بينما الدراسات القانونية المتعمقة قد تستغرق من 3 إلى 5 أيام عمل."
    },
    {
      question: "كيف يتم تحليل الملاءة الائتمانية للمستأجر؟",
      answer: "نستخدم أدوات تحليل متطورة تربط بين السجلات التاريخية للالتزام المالي، ومصادر الدخل، والالتزامات الحالية، لتقديم مؤشر مخاطر (Risk Score) يوضح احتمالية التعثر المستقبلي."
    },
    {
      question: "هل يمكنني الاشتراك في خدمة واحدة فقط دون الباقات؟",
      answer: "بالتأكيد، نوفر قسم 'الخدمات المنفصلة' الذي يتيح لك طلب خدمة محددة (مثل دراسة صك، أو تحليل مستأجر واحد) دون الحاجة للاشتراك في باقة سنوية كاملة."
    },
    {
      question: "كيف أبدأ في استخدام الخدمة؟",
      answer: "يمكنك البدء عبر تعبئة نموذج التواصل في الصفحة الرئيسية، أو اختيار الباقة المناسبة لك مباشرة، وسيقوم أحد مستشارينا بالتواصل معك لإتمام الإجراءات وتفعيل حسابك."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-brand-secondary/10 rounded-3xl flex items-center justify-center text-brand-secondary mx-auto mb-8"
          >
            <HelpCircle size={40} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6">الأسئلة الشائعة</h1>
          <p className="text-xl text-ink-muted leading-relaxed">
            كل ما تحتاج معرفته عن خدماتنا وكيفية حماية استثماراتك العقارية.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card bg-white border border-line overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        <div className="mt-20 bg-brand-primary rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 blur-[100px] rounded-full" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h2>
              <p className="text-white/70 text-lg">فريق الدعم الفني متواجد على مدار الساعة لمساعدتك.</p>
            </div>
            <Link to="/" className="btn-secondary whitespace-nowrap group">
              <span>تواصل معنا الآن</span>
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
