import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/content';
import { Language } from '../types';

interface FAQSectionProps {
  language: Language;
  onOpenAudit: () => void;
  onOpenWhatsApp: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  language,
  onOpenAudit,
  onOpenWhatsApp
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-stone-100/50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-stone-600" />
            <span>{language === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Clear Answers'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {language === 'ta'
              ? 'உற்பத்தியாளர்களின் முக்கிய சந்தேகங்கள்'
              : 'Frequently Asked Questions by Factory Owners'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            {language === 'ta'
              ? 'ஜிஎஸ்டி, கூரியர் பிக்கப் மற்றும் பணம் பெறுதல் குறித்த வெளிப்படையான பதில்கள்.'
              : 'Direct facts about GST, daily courier pickups, payment transfers, and real marketplace policies.'}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <span className="text-sm sm:text-base">
                    {language === 'ta' ? faq.qTa : faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-700' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {language === 'ta' ? faq.aTa : faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">
              {language === 'ta' ? 'வேறு சந்தேகங்கள் உள்ளதா?' : 'Have a specific question about your factory products?'}
            </h4>
            <p className="text-xs text-stone-500 mt-0.5">
              {language === 'ta'
                ? 'எங்கள் வாட்ஸ்அப்பில் நேரடியாக தொடர்பு கொண்டு உடனடியாக விளக்கம் பெறலாம்.'
                : 'Chat directly with our founder on WhatsApp for immediate clarity.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 whitespace-nowrap transition-all shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{language === 'ta' ? 'வாட்ஸ்அப்பில் கேட்க' : 'Ask on WhatsApp'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
