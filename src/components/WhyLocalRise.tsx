import React from 'react';
import { Language } from '../types';
import { ShieldCheck, Check, X, AlertTriangle, Users, Award, MapPin } from 'lucide-react';

interface WhyLocalRiseProps {
  language: Language;
  onOpenAudit: () => void;
}

export const WhyLocalRise: React.FC<WhyLocalRiseProps> = ({ language, onOpenAudit }) => {
  return (
    <section id="about-founder" className="py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-700" />
            <span>{language === 'ta' ? 'உண்மையான விற்பனையாளர் அனுபவம்' : 'Why LocalRise'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {language === 'ta'
              ? 'வெறும் விளம்பர ஏஜென்சி அல்ல — களத்தில் இறங்கி விற்ற அனுபவம்'
              : 'Execution From Someone Who Has Actually Sold on These Platforms'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'சென்னை அல்லது பெங்களூர் ஏஜென்சிகளுக்கு தென் தமிழகத்தின் கைத்தறி நெசவு, பித்தளை விளக்குகள் மற்றும் அல்வா வணிகத்தின் நுணுக்கங்கள் தெரியாது.'
              : 'Most digital agencies run generic social media ads and have never handled courier weight disputes, return penalties, or barcode GTIN exemptions. We have built real stores and managed real shipments.'}
          </p>
        </div>

        {/* Head-to-Head Comparison: Generic Agency vs LocalRise */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            
            {/* Generic Agency Column */}
            <div className="p-8 bg-stone-50/70">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase tracking-wider mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>{language === 'ta' ? 'வழக்கமான டிஜிட்டல் ஏஜென்சிகள்' : 'Typical City Agencies'}</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-6">
                {language === 'ta' ? 'அதிக கட்டணம், பூஜ்ஜிய களப்பணி' : 'High Retainers, Zero Packaging Reality'}
              </h3>
              
              <ul className="space-y-4 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'ரூ.25,000+ முன் கூட்டியே கட்டணம் கேட்பார்கள், விற்பனைக்கு உத்தரவாதம் இல்லை' : 'Demand ₹30,000/month advance retainers with no skin in the game'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'பார்சல் எடை 500g தாண்டினால் வரும் அபராதம் அவர்களுக்கு தெரியாது' : 'Don’t understand weight slab penalties (e.g. 505g costing double freight)'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'ரிட்டர்ன் (RTO) ஆர்டர்களால் வரும் நஷ்டத்தை உற்பத்தியாளர் தலையிலேயே சுமத்துவார்கள்' : 'Ignore high Cash-on-Delivery RTO return losses that kill factory margins'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'மதுரை, தென்காசி தொழிற்சாலைகளுக்கு நேரில் வர மாட்டார்கள்' : 'Based in Chennai/Bengaluru — will never visit your workshop in Tenkasi or Madurai'}</span>
                </li>
              </ul>
            </div>

            {/* LocalRise Column */}
            <div className="p-8 bg-amber-50/30">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>LocalRise Approach</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-6">
                {language === 'ta' ? 'தொழிற்சாலை சார்ந்த நடைமுறை தீர்வு' : 'Ground-Level Seller Partnership'}
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-stone-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'விற்பனை வெற்றியுடன் இணைந்த நியாயமான கட்டணம்' : 'Performance-aligned pricing — we win only when your orders ship profitably'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'எடை மற்றும் பேக்கிங் பெட்டிகளை முன்கூட்டியே அளந்து கூரியர் செலவை மிச்சப்படுத்துகிறோம்' : 'Custom box dimension audit to ensure packages stay within cheapest courier slabs'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'ரிட்டர்ன்களை (RTO) 40% வரை குறைக்க பார்சல் அனுப்பும் முன் முகவரி சரிபார்ப்பு' : 'Pre-dispatch buyer validation to slash cash-on-delivery RTO rates by up to 40%'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'மதுரை, தென்காசி, திருநெல்வேலி பகுதிகளில் நேரடி உதவி மற்றும் வழிகாட்டல்' : 'Local ground availability: In-person visits to Madurai, Tenkasi & Tirunelveli'}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Local Founder Philosophy Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-xs max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0 shadow-sm font-black text-2xl font-mono">
            LR
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'ta' ? 'நமது மண்ணின் உற்பத்திக்கு உலகளாவிய சந்தை' : 'Direct from Southern Tamil Nadu'}</span>
            </div>
            <h4 className="text-xl font-bold text-stone-900">
              {language === 'ta'
                ? 'நமது தெற்கு மாவட்ட தயாரிப்புகள் இடைத்தரகர்கள் இல்லாமல் உலகை அடைய வேண்டும்'
                : 'South Tamil Nadu crafts and manufacturing deserve direct national pricing power'}
            </h4>
            <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
              {language === 'ta'
                ? 'கடையநல்லூர் கைத்தறி துணிகள், பத்தமடை பாய்கள், மதுரை சுங்குடி மற்றும் திருநெல்வேலி பாரம்பரிய உணவுகள் வட இந்திய சந்தைகளில் அதிக விலைக்கு விற்கப்படுகின்றன. ஆனால் லாபம் இடைத்தரகர்களுக்கே செல்கிறது. LocalRise மூலம் தொழிற்சாலைகளுக்கு அந்த முழு லாபமும் கிடைக்கச் செய்வதே எங்கள் இலக்கு.'
                : 'Generations of artisans and factory owners in Kadayanallur, Madurai, and Tirunelveli produce world-class goods, only to surrender margins to layers of regional middlemen. By operating directly on Amazon, Meesho, and Flipkart, your factory retains maximum profit and builds a lasting brand asset.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
