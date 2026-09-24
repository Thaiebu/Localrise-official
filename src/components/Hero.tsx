import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, MapPin, TrendingUp, ShieldCheck, Box, Store, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onOpenAudit: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenAudit, onOpenWhatsApp }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle regional atmospheric background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* District Badges Banner */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Madurai (மதுரை)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-950 text-xs font-semibold shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Tenkasi & Puliyangudi (தென்காசி / புளியங்குடி)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Tirunelveli (திருநெல்வேலி)</span>
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span>{language === 'ta' ? 'தென் தமிழகம்' : 'South Tamil Nadu'}</span>
          </div>
        </div>

        {/* Manufacturing Categories Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-stone-600 mb-7">
          <span className="px-3 py-1 rounded-lg bg-stone-100 border border-stone-200">
            {language === 'ta' ? 'கைத்தறி & ஜவுளி' : 'Handloom & Textiles'}
          </span>
          <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 font-semibold shadow-2xs">
            {language === 'ta' ? 'பேக் தயாரிப்பாளர்கள்' : 'Bag Manufacturers'}
          </span>
          <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 font-semibold shadow-2xs">
            {language === 'ta' ? 'கவரிங் & 1 கிராம் நகைகள்' : 'Covering & 1-Gram Jewellery'}
          </span>
          <span className="px-3 py-1 rounded-lg bg-stone-100 border border-stone-200">
            {language === 'ta' ? 'பித்தளை பாத்திரங்கள்' : 'Brass & Metalcraft'}
          </span>
          <span className="px-3 py-1 rounded-lg bg-stone-100 border border-stone-200">
            {language === 'ta' ? 'பாரம்பரிய உணவு & இனிப்பு' : 'Regional Foods'}
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-950 tracking-tight leading-[1.18] break-words">
            {language === 'ta' ? (
              <>
                தென் தமிழகம்: மதுரை, தென்காசி, புளியங்குடி & திருநெல்வேலி உற்பத்தியாளர்களை{' '}
                <span className="text-amber-700 underline decoration-amber-300 decoration-wavy decoration-2 underline-offset-6">
                  ஆன்லைனில் கொண்டு வருகிறோம்.
                </span>
              </>
            ) : (
              <>
                Taking South Tamil Nadu manufacturers in Madurai, Tenkasi, Puliyangudi & Tirunelveli{' '}
                <span className="text-amber-700 underline decoration-amber-300 decoration-wavy decoration-2 underline-offset-6">
                  profitable online.
                </span>
              </>
            )}
          </h1>

          {/* Subtitle directly from user intent */}
          <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {language === 'ta'
              ? 'சரியான ஸ்டோர், சரியான மார்க்கெட்பிளேஸ் (Amazon, Flipkart, Meesho) மற்றும் இந்த தளங்களில் சுயமாக விற்று அனுபவம் வாய்ந்த ஒருவரின் நேரடி களப்பணி.'
              : 'The right store, the right marketplace, and hands-on execution from someone who has actually sold on these platforms.'}
          </p>

          {/* Core Reality Value Proposition Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-stone-700 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === 'ta' ? 'உண்மையான விற்பனையாளர் அனுபவம்' : 'Hands-on Seller Experience'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === 'ta' ? 'தொழிற்சாலை வாசலில் கூரியர் பிக்கப்' : 'Doorstep Factory Pickup'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === 'ta' ? 'அகில இந்திய வாடிக்கையாளர்கள்' : 'Pan-India Customer Access'}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-stone-950 hover:bg-stone-800 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>{language === 'ta' ? '15 நிமிட இலவச ஆலோசனை' : 'Book Free 15-Min Factory Audit'}</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>{language === 'ta' ? 'வாட்ஸ்அப்பில் உரையாட' : 'Chat on WhatsApp Directly'}</span>
            </button>
          </div>

          <div className="mt-4 text-xs text-stone-500">
            {language === 'ta'
              ? 'நேரடி தொழிற்சாலை வருகை அல்லது மாதிரி தயாரிப்பு ஆய்வு • உடனடி பதில்'
              : 'Direct factory visit across Madurai, Tenkasi & Tirunelveli or sample review.'}
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-amber-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/70 flex items-center justify-center mb-4">
              <Store className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-bold text-stone-900 text-lg">
              {language === 'ta' ? 'சரியான தளத் தேர்வு' : 'The Right Marketplace'}
            </h3>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              {language === 'ta'
                ? 'அனைத்து தயாரிப்புகளும் அமேசானில் விற்காது. கைத்தறிக்கு மீஷோ, பித்தளைக்கு அமேசான், இனிப்புகளுக்கு நேரடி ஸ்டோர் என துல்லியமாக வகுக்கிறோம்.'
                : 'Not every product belongs on Amazon. We match mass handloom to Meesho (0% commission), high-ticket brass to Amazon Prime, and regional GI foods to direct D2C.'}
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-amber-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 border border-stone-200 flex items-center justify-center mb-4">
              <Box className="w-6 h-6 text-stone-700" />
            </div>
            <h3 className="font-bold text-stone-900 text-lg">
              {language === 'ta' ? 'கள எதார்த்தம் & பேக்கிங்' : 'Hands-On Seller Execution'}
            </h3>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              {language === 'ta'
                ? 'ஏஜென்சிகள் செய்யாத களப்பணிகள்: பார்சல் எடை கட்டுப்பாடு, கூரியர் தகராறு தீர்வு, மற்றும் ரிட்டர்ன் (RTO) இழப்பை குறைக்கும் நுணுக்கங்கள்.'
                : 'Real seller know-how: barcode mapping, packing to prevent weight slab penalties, customer verification before dispatch, and RTO return rate defense.'}
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-amber-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/70 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="font-bold text-stone-900 text-lg">
              {language === 'ta' ? 'வாரம் தோறும் நேரடி வங்கி வரவு' : 'Weekly Direct Bank Payouts'}
            </h3>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              {language === 'ta'
                ? 'விற்பனை வருவாய் இடைத்தரகர்கள் இல்லாமல் நேரடியாக உங்கள் வங்கிக் கணக்கில் வந்து சேரும். 45 நாள் கடன் சுழற்சியில் இருந்து விடுதலை.'
                : 'Eliminate 60-day wholesale credit traps. Marketplaces settle payments directly to your factory bank account every 7 to 10 days for delivered orders.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
