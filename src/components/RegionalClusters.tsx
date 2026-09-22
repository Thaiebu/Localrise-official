import React, { useState } from 'react';
import { MapPin, CheckCircle, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { REGIONAL_HUBS } from '../data/content';
import { Language } from '../types';

interface RegionalClustersProps {
  language: Language;
  onSelectCluster: (hubName: string) => void;
}

export const RegionalClusters: React.FC<RegionalClustersProps> = ({
  language,
  onSelectCluster
}) => {
  const [activeTab, setActiveTab] = useState<string>('madurai');
  const activeHub = REGIONAL_HUBS.find((h) => h.id === activeTab) || REGIONAL_HUBS[0];

  return (
    <section id="regional-clusters" className="py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-stone-600" />
            <span>{language === 'ta' ? 'தென் தமிழக உற்பத்தி மையங்கள்' : 'South Tamil Nadu Industrial Clusters'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {language === 'ta'
              ? 'மதுரை, தென்காசி & திருநெல்வேலி தயாரிப்புகள்'
              : 'Targeted Execution for Regional Manufacturing Hubs'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'ஒவ்வொரு பகுதிக்கும் அதன் தனித்துவமான கைவினை மற்றும் உற்பத்தி பலம் உள்ளது. அதற்கேற்ற சரியான மார்க்கெட்பிளேஸை நாங்கள் தேர்வு செய்கிறோம்.'
              : 'Every cluster has unique freight realities, margin tolerances, and buyer demand patterns. We match your specific category to the most lucrative platform.'}
          </p>
        </div>

        {/* District Tab Selectors */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-stone-300 shadow-xs gap-1.5">
            {REGIONAL_HUBS.map((hub) => {
              const isActive = hub.id === activeTab;
              return (
                <button
                  key={hub.id}
                  type="button"
                  onClick={() => setActiveTab(hub.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`}
                >
                  <MapPin className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                  <span>{language === 'ta' ? hub.nameTa : hub.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Hub Card Showcase */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'ta' ? activeHub.districtTa : activeHub.district}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                {language === 'ta' ? activeHub.nameTa : activeHub.name}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                {language === 'ta' ? activeHub.highlightTa : activeHub.highlight}
              </p>

              {/* Key Products Checklist */}
              <div className="mt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  {language === 'ta' ? 'முக்கிய தயாரிப்புகள்:' : 'Core Manufacturing Categories:'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(language === 'ta' ? activeHub.keyProductsTa : activeHub.keyProducts).map((prod, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 text-xs sm:text-sm text-stone-800 font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{prod}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Card: Platform Recommendation */}
            <div className="lg:col-span-5 bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                  {language === 'ta' ? 'பரிந்துரைக்கப்படும் விற்பனை தளம்' : 'Optimal Marketplace Strategy'}
                </span>
                <h4 className="text-xl font-bold mt-2 text-white">
                  {activeHub.bestMarketplace}
                </h4>
                <div className="mt-4 p-4 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs text-stone-300 leading-relaxed">
                  {language === 'ta'
                    ? 'எங்கள் களப்பணியாளர் உங்கள் பட்டறை அல்லது தொழிற்சாலைக்கு நேரில் வந்து தயாரிப்புகளை பார்வையிட்டு சரியான திட்டத்தை வகுப்பார்.'
                    : 'Our ground specialist visits your factory directly to measure box dimensions, test packaging durability, and finalize launch SKUs.'}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => onSelectCluster(activeHub.name)}
                  className="w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>
                    {language === 'ta'
                      ? `${activeHub.districtTa} ஆலோசனையை தொடங்க`
                      : `Launch ${activeHub.name} Factory`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
