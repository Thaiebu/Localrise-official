import React from 'react';
import { PILOT_CASE_STUDIES } from '../data/content';
import { Language } from '../types';
import { Quote, TrendingUp, MapPin, ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  language: Language;
  onOpenAudit: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ language, onOpenAudit }) => {
  return (
    <section className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'ta' ? 'கள முடிவுகள் & வெற்றிக் கதைகள்' : 'Pilot Track Record'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {language === 'ta'
              ? 'உள்ளூர் உற்பத்தியாளர்களின் ஆன்லைன் வளர்ச்சி'
              : 'Real Regional Manufacturers, Real Online Traction'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {language === 'ta'
              ? '45 நாள் கடன் சுழற்சியில் இருந்து மீண்டு, வாரம் தோறும் வங்கிக் கணக்கில் பணம் பெறும் உற்பத்தியாளர்களின் அனுபவம்.'
              : 'Breaking free from 45-day wholesale debt cycles to direct pan-India orders with weekly bank deposits.'}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILOT_CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-stone-50 border border-stone-200/90 flex flex-col justify-between hover:border-amber-400 transition-all shadow-xs"
            >
              <div>
                {/* Location Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{study.location}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200">
                    {study.category}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-lg font-bold text-stone-900 leading-snug mb-4">
                  {study.headline}
                </h3>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic mb-6">
                  "{study.quote}"
                </p>
              </div>

              {/* Key Metrics Chips */}
              <div className="pt-4 border-t border-stone-200/60">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Key Milestones:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {study.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-800 text-xs font-semibold"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
