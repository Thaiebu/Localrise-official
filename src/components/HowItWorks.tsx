import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { Language } from '../types';
import { ArrowRight, CheckCircle2, Factory, Scale, FileText, Truck, TrendingUp } from 'lucide-react';

interface HowItWorksProps {
  language: Language;
  onOpenAudit: () => void;
}

const STEP_ICONS = [Factory, Scale, FileText, Truck, TrendingUp];

export const HowItWorks: React.FC<HowItWorksProps> = ({ language, onOpenAudit }) => {
  return (
    <section id="how-it-works" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{language === 'ta' ? 'எளிமையான 5 படிகள்' : 'Ground-Level Process'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {language === 'ta'
              ? 'தொழிற்சாலையிலிருந்து ஆன்லைன் விற்பனை வரை — எப்படி நடக்கிறது?'
              : 'From Your Factory Floor to First Delivered Order'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'சிக்கலான கணினி அறிவு தேவையில்லை. ஒவ்வொரு நிலையிலும் நாங்கள் உங்களுடன் நேரடியாக நிற்போம்.'
              : 'No complicated IT jargon or confusing dashboards. We handle the technical and marketplace heavy lifting step-by-step.'}
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || CheckCircle2;
            return (
              <div
                key={idx}
                className="relative bg-stone-50 border border-stone-200 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400 transition-all shadow-xs group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-amber-600">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-stone-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-stone-900 leading-snug">
                    {language === 'ta' ? step.titleTa : step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2.5 text-xs text-stone-600 leading-relaxed">
                    {language === 'ta' ? step.descTa : step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-200/60 flex items-center text-[11px] font-semibold text-stone-500">
                  <span>{language === 'ta' ? 'அடுத்த படிக்கு வழிகாட்டல்' : 'Full hands-on support'}</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              {language === 'ta'
                ? 'உங்கள் தயாரிப்புகளை ஆன்லைனில் பரிசோதிக்க தயாரா?'
                : 'Ready to see if your products are marketplace-ready?'}
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              {language === 'ta'
                ? 'மதுரை, தென்காசி, திருநெல்வேலி பகுதிகளில் இலவசமாக நேரில் வருகை தருகிறோம் அல்லது மாதிரிகளை ஆய்வு செய்கிறோம்.'
                : 'Schedule a free sample audit. We will review your product weight, box packaging, and target unit margins.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenAudit}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center justify-center gap-2"
          >
            <span>{language === 'ta' ? 'இலவச ஆய்வு கோர' : 'Request Free Sample Audit'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
