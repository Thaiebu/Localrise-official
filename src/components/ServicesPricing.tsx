import React from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';
import { Language, PricingPlan } from '../types';

interface ServicesPricingProps {
  language: Language;
  onSelectPlan: (plan: PricingPlan) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ language, onSelectPlan }) => {
  return (
    <section id="services-pricing" className="py-20 bg-[#FBFBF9] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
            <span>{language === 'ta' ? 'வெளிப்படையான கட்டண விபரம்' : 'Transparent, Fair Pricing'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {language === 'ta'
              ? 'உங்கள் வணிகத் தேவைக்கேற்ற தெளிவான திட்டங்கள்'
              : 'Built Specifically for Factory & Workshop Budgets'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'சென்னை அல்லது பெங்களூர் ஏஜென்சிகள் போல தேவையற்ற கட்டணங்கள் இல்லை. தெளிவான சேவைகள், வெளிப்படையான விலை.'
              : 'No inflated metropolitan agency retainers. Choose a one-time launch or a full growth partnership where we win only when you get orders.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'bg-stone-900 text-white shadow-xl ring-2 ring-amber-500 scale-[1.02] md:scale-105 z-10'
                    : 'bg-white text-stone-900 border border-stone-200 shadow-xs hover:border-stone-300'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                    <span>{language === 'ta' ? 'அதிக உற்பத்தியாளர்கள் தேர்வு' : 'Most Popular Choice'}</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <h3 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-stone-900'}`}>
                      {language === 'ta' ? plan.nameTa : plan.name}
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                      {language === 'ta' ? plan.taglineTa : plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-stone-200/20">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className={`text-xs ${isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <div className={`text-xs mt-2 font-medium ${isPopular ? 'text-amber-400' : 'text-amber-700'}`}>
                      {plan.idealFor}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isPopular ? 'text-stone-400' : 'text-stone-400'}`}>
                      {language === 'ta' ? 'திட்டத்தில் அடங்குபவை:' : 'What is included:'}
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-amber-400' : 'text-emerald-600'}`} />
                        <span className={isPopular ? 'text-stone-300' : 'text-stone-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card CTA */}
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    <span>{language === 'ta' ? plan.ctaTextTa : plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Tailored Custom Quote Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 text-center max-w-3xl mx-auto shadow-xs">
          <h4 className="font-bold text-stone-900 text-base">
            {language === 'ta'
              ? 'உங்கள் தயாரிப்புகளின் எண்ணிக்கைக்கு ஏற்ப கட்டணத்தை சரிசெய்ய வேண்டுமா?'
              : 'Have a specific catalog size or cluster requirement?'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {language === 'ta'
              ? 'பெரிய கூட்டுறவு சங்கங்கள் மற்றும் மொத்த உற்பத்தியாளர்களுக்கு தனிப்பயனாக்கப்பட்ட திட்டங்கள் வழங்கப்படுகின்றன.'
              : 'We adjust pricing based on actual SKUs, volume, and logistics requirements. Talk to us for a custom factory quotation.'}
          </p>
        </div>

      </div>
    </section>
  );
};
