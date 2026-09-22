import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, TrendingUp, AlertCircle, ArrowRight, ShieldCheck, IndianRupee } from 'lucide-react';
import { Language } from '../types';

interface CalculatorProps {
  language: Language;
  onOpenAudit: (notes?: string) => void;
}

interface CategoryConfig {
  name: string;
  nameTa: string;
  defaultCost: number;
  defaultPrice: number;
  defaultWeight: number;
  amazonReferralRate: number;
  flipkartReferralRate: number;
}

const CATEGORIES: Record<string, CategoryConfig> = {
  textiles: {
    name: 'Handloom, Sarees & Textiles',
    nameTa: 'கைத்தறி, சுங்குடி சேலை & துணிகள்',
    defaultCost: 320,
    defaultPrice: 799,
    defaultWeight: 450,
    amazonReferralRate: 0.08, // 8%
    flipkartReferralRate: 0.10 // 10%
  },
  brass: {
    name: 'Brass, Bronze & Utensils',
    nameTa: 'பித்தளை, வெண்கலம் & விளக்குகள்',
    defaultCost: 550,
    defaultPrice: 1499,
    defaultWeight: 1200,
    amazonReferralRate: 0.11, // 11%
    flipkartReferralRate: 0.12 // 12%
  },
  food: {
    name: 'Traditional Sweets, Halwa & Spices',
    nameTa: 'திருநெல்வேலி அல்வா, இனிப்பு & மசாலா',
    defaultCost: 180,
    defaultPrice: 499,
    defaultWeight: 500,
    amazonReferralRate: 0.09, // 9%
    flipkartReferralRate: 0.09 // 9%
  },
  crafts: {
    name: 'Woodcraft, Mats & Coir Products',
    nameTa: 'மர பொம்மைகள், பாய் & நார் பொருட்கள்',
    defaultCost: 260,
    defaultPrice: 699,
    defaultWeight: 600,
    amazonReferralRate: 0.095, // 9.5%
    flipkartReferralRate: 0.10 // 10%
  }
};

export const Calculator: React.FC<CalculatorProps> = ({ language, onOpenAudit }) => {
  const [selectedCatKey, setSelectedCatKey] = useState<string>('textiles');
  const cat = CATEGORIES[selectedCatKey] || CATEGORIES.textiles;

  const [costPrice, setCostPrice] = useState<number>(cat.defaultCost);
  const [sellingPrice, setSellingPrice] = useState<number>(cat.defaultPrice);
  const [weightGrams, setWeightGrams] = useState<number>(cat.defaultWeight);

  // Update defaults when category changes
  const handleCategoryChange = (key: string) => {
    setSelectedCatKey(key);
    const newCat = CATEGORIES[key];
    if (newCat) {
      setCostPrice(newCat.defaultCost);
      setSellingPrice(newCat.defaultPrice);
      setWeightGrams(newCat.defaultWeight);
    }
  };

  // Calculations for Amazon, Meesho, Flipkart
  const metrics = useMemo(() => {
    // Weight slab helper (500g increments)
    const weightSlabs = Math.max(1, Math.ceil(weightGrams / 500));

    // 1. Meesho calculation (0% commission model, courier cost only)
    const meeshoCommission = 0;
    const meeshoShipping = Math.min(130, 48 + (weightSlabs - 1) * 35);
    const meeshoTotalDeduction = meeshoCommission + meeshoShipping;
    const meeshoPayout = Math.max(0, sellingPrice - meeshoTotalDeduction);
    const meeshoNetProfit = meeshoPayout - costPrice;
    const meeshoMargin = sellingPrice > 0 ? (meeshoNetProfit / sellingPrice) * 100 : 0;

    // 2. Amazon calculation (Easy Ship National + Referral + Closing Fee)
    const amazonReferral = sellingPrice * cat.amazonReferralRate;
    const amazonClosing = sellingPrice < 250 ? 5 : sellingPrice < 500 ? 12 : sellingPrice < 1000 ? 25 : 45;
    const amazonShipping = 65 + (weightSlabs - 1) * 38;
    const amazonGstOnFees = (amazonReferral + amazonClosing + amazonShipping) * 0.18;
    const amazonTotalDeduction = amazonReferral + amazonClosing + amazonShipping + amazonGstOnFees;
    const amazonPayout = Math.max(0, sellingPrice - amazonTotalDeduction);
    const amazonNetProfit = amazonPayout - costPrice;
    const amazonMargin = sellingPrice > 0 ? (amazonNetProfit / sellingPrice) * 100 : 0;

    // 3. Flipkart calculation (Referral + Fixed fee + Collection + Shipping)
    const flipkartReferral = sellingPrice * cat.flipkartReferralRate;
    const flipkartFixed = sellingPrice < 300 ? 10 : sellingPrice < 500 ? 15 : 30;
    const flipkartShipping = 60 + (weightSlabs - 1) * 35;
    const flipkartCollection = sellingPrice * 0.02;
    const flipkartGst = (flipkartReferral + flipkartFixed + flipkartShipping + flipkartCollection) * 0.18;
    const flipkartTotalDeduction = flipkartReferral + flipkartFixed + flipkartShipping + flipkartCollection + flipkartGst;
    const flipkartPayout = Math.max(0, sellingPrice - flipkartTotalDeduction);
    const flipkartNetProfit = flipkartPayout - costPrice;
    const flipkartMargin = sellingPrice > 0 ? (flipkartNetProfit / sellingPrice) * 100 : 0;

    return {
      meesho: {
        totalDeduction: Math.round(meeshoTotalDeduction),
        bankPayout: Math.round(meeshoPayout),
        profit: Math.round(meeshoNetProfit),
        margin: Math.round(meeshoMargin)
      },
      amazon: {
        commission: Math.round(amazonReferral),
        closing: Math.round(amazonClosing),
        shipping: Math.round(amazonShipping + amazonGstOnFees),
        totalDeduction: Math.round(amazonTotalDeduction),
        bankPayout: Math.round(amazonPayout),
        profit: Math.round(amazonNetProfit),
        margin: Math.round(amazonMargin)
      },
      flipkart: {
        totalDeduction: Math.round(flipkartTotalDeduction),
        bankPayout: Math.round(flipkartPayout),
        profit: Math.round(flipkartNetProfit),
        margin: Math.round(flipkartMargin)
      }
    };
  }, [costPrice, sellingPrice, weightGrams, cat]);

  return (
    <section id="margin-calculator" className="py-20 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-semibold uppercase tracking-wider mb-4">
            <CalcIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>{language === 'ta' ? 'உண்மையான லாபக் கணக்கீடு' : 'Real-World Unit Economics'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {language === 'ta'
              ? 'உங்கள் தயாரிப்பின் நிகர லாபத்தை நீங்களே கணக்கிடுங்கள்'
              : 'Calculate Your Exact Net In-Pocket Profit'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {language === 'ta'
              ? 'மறைமுக கமிஷன்கள் எதுவும் இல்லாமல் — உற்பத்தி செலவு, கூரியர் மற்றும் பிளாட்பார்ம் கட்டணம் போக உங்கள் வங்கிக்கு வரும் உண்மையான தொகை.'
              : 'No hidden agency mystery. Compare realistic marketplace deductions across Meesho, Amazon & Flipkart before you list a single product.'}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs">
            <div className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-4">
              {language === 'ta' ? 'படி 1: உங்கள் தயாரிப்பு விவரங்கள்' : 'Step 1: Your Product Parameters'}
            </div>

            {/* Category Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-800 mb-2">
                {language === 'ta' ? 'தயாரிப்பு வகை' : 'Manufacturing Category'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(CATEGORIES).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleCategoryChange(key)}
                    className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      selectedCatKey === key
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    {language === 'ta' ? val.nameTa : val.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders and Numerical Inputs */}
            <div className="space-y-5">
              
              {/* Manufacturing Cost */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-sm font-medium text-stone-700">
                    {language === 'ta' ? 'உற்பத்தி / வாங்கிய அடக்க விலை' : 'Manufacturing / Cost Price'}
                  </label>
                  <span className="text-sm font-bold text-stone-900 font-mono">₹{costPrice}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="10"
                  value={costPrice}
                  onChange={(e) => setCostPrice(Number(e.target.value))}
                  className="w-full accent-amber-700 cursor-pointer h-2 bg-stone-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>₹50</span>
                  <span>₹1,500</span>
                  <span>₹3,000</span>
                </div>
              </div>

              {/* Planned Selling Price */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-sm font-medium text-stone-700">
                    {language === 'ta' ? 'ஆன்லைனில் விற்க நினைக்கும் விலை' : 'Planned Online Selling Price (MRP/Offer)'}
                  </label>
                  <span className="text-sm font-bold text-emerald-700 font-mono">₹{sellingPrice}</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="5000"
                  step="25"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-stone-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>₹150</span>
                  <span>₹2,500</span>
                  <span>₹5,000</span>
                </div>
              </div>

              {/* Package Weight */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-sm font-medium text-stone-700">
                    {language === 'ta' ? 'பார்சல் எடை (கிராம்)' : 'Packed Box Weight (Grams)'}
                  </label>
                  <span className="text-sm font-bold text-stone-900 font-mono">{weightGrams}g</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={weightGrams}
                  onChange={(e) => setWeightGrams(Number(e.target.value))}
                  className="w-full accent-stone-700 cursor-pointer h-2 bg-stone-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>100g (Light)</span>
                  <span>1,500g</span>
                  <span>3,000g (Heavy)</span>
                </div>
              </div>

            </div>

            {/* Seller Reality Note */}
            <div className="mt-6 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">{language === 'ta' ? 'உள்ளூர் உண்மை:' : 'Local Seller Insight:'}</span>{' '}
                {language === 'ta'
                  ? 'பேக்கிங் எடையை 500 கிராமுக்குள் கட்டுப்படுத்தினால் கூரியர் கட்டணத்தில் 35% வரை மிச்சப்படுத்தலாம். நாங்கள் இதை நேரில் கற்றுத்தருகிறோம்.'
                  : 'Keeping packed weight just under 500g saves up to ₹40 in shipping slabs per parcel. We audit your packaging to protect every rupee.'}
              </div>
            </div>

          </div>

          {/* Results Comparison Column */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-2">
              {language === 'ta' ? 'படி 2: பிளாட்பார்ம் வாரியான நிகர லாபம்' : 'Step 2: Platform Net Realization Comparison'}
            </div>

            {/* Meesho Card */}
            <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-pink-300 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-200 text-pink-700 flex items-center justify-center font-bold text-sm">
                    M
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-base">Meesho Seller Hub</h3>
                    <p className="text-xs text-stone-500">
                      {language === 'ta' ? '0% கமிஷன் மாடல் • கைத்தறி & குறைந்த விலைக்கு சிறந்தது' : '0% Commission model • Best for mass apparel & volume'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-stone-400">{language === 'ta' ? 'நிகர லாபம் / ஒரு பீஸ்' : 'Net Profit / Unit'}</div>
                  <div className={`text-xl font-bold font-mono ${metrics.meesho.profit > 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                    ₹{metrics.meesho.profit}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-3 text-center text-xs">
                <div className="bg-stone-50 p-2 rounded-lg">
                  <div className="text-stone-400">{language === 'ta' ? 'கூரியர் செலவு' : 'Logistics'}</div>
                  <div className="font-semibold text-stone-800">~₹{metrics.meesho.totalDeduction}</div>
                </div>
                <div className="bg-stone-50 p-2 rounded-lg">
                  <div className="text-stone-400">{language === 'ta' ? 'வங்கி வரவு' : 'Bank Payout'}</div>
                  <div className="font-semibold text-stone-800">₹{metrics.meesho.bankPayout}</div>
                </div>
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <div className="text-emerald-700 font-medium">{language === 'ta' ? 'லாப விகிதம்' : 'Margin %'}</div>
                  <div className="font-bold text-emerald-800">{metrics.meesho.margin}%</div>
                </div>
              </div>
            </div>

            {/* Amazon India Card */}
            <div className="p-5 rounded-2xl border-2 border-amber-300 bg-amber-50/20 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center font-bold text-sm">
                    A
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-stone-900 text-base">Amazon India (Easy Ship)</h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white uppercase">
                        High Ticket
                      </span>
                    </div>
                    <p className="text-xs text-stone-500">
                      {language === 'ta' ? 'பிரீமியம் வாடிக்கையாளர்கள் • பித்தளை, பிராண்டட் தயாரிப்புகளுக்கு உகந்தது' : 'Premium pan-India buyers • Ideal for brass, specialty GI & decor'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-stone-400">{language === 'ta' ? 'நிகர லாபம் / ஒரு பீஸ்' : 'Net Profit / Unit'}</div>
                  <div className={`text-xl font-bold font-mono ${metrics.amazon.profit > 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                    ₹{metrics.amazon.profit}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 pt-3 text-center text-xs">
                <div className="bg-white p-2 rounded-lg border border-stone-100">
                  <div className="text-stone-400">{language === 'ta' ? 'கமிஷன்' : 'Referral'}</div>
                  <div className="font-semibold text-stone-800">₹{metrics.amazon.commission}</div>
                </div>
                <div className="bg-white p-2 rounded-lg border border-stone-100">
                  <div className="text-stone-400">{language === 'ta' ? 'கூரியர்+ஜிஎஸ்டி' : 'Ship+GST'}</div>
                  <div className="font-semibold text-stone-800">₹{metrics.amazon.shipping}</div>
                </div>
                <div className="bg-white p-2 rounded-lg border border-stone-100">
                  <div className="text-stone-400">{language === 'ta' ? 'வங்கி வரவு' : 'Bank Payout'}</div>
                  <div className="font-semibold text-stone-800">₹{metrics.amazon.bankPayout}</div>
                </div>
                <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                  <div className="text-emerald-700 font-medium">{language === 'ta' ? 'லாப விகிதம்' : 'Margin %'}</div>
                  <div className="font-bold text-emerald-800">{metrics.amazon.margin}%</div>
                </div>
              </div>
            </div>

            {/* Flipkart Card */}
            <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-blue-300 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-sm">
                    F
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-base">Flipkart Marketplace</h3>
                    <p className="text-xs text-stone-500">
                      {language === 'ta' ? 'அகில இந்திய ஆடை மற்றும் வீட்டு உபயோகப் பொருட்கள்' : 'Strong Tier-2/3 festive volume & apparel traction'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-stone-400">{language === 'ta' ? 'நிகர லாபம் / ஒரு பீஸ்' : 'Net Profit / Unit'}</div>
                  <div className={`text-xl font-bold font-mono ${metrics.flipkart.profit > 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                    ₹{metrics.flipkart.profit}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-3 text-center text-xs">
                <div className="bg-stone-50 p-2 rounded-lg">
                  <div className="text-stone-400">{language === 'ta' ? 'மொத்த கட்டணம்' : 'Total Fees'}</div>
                  <div className="font-semibold text-stone-800">~₹{metrics.flipkart.totalDeduction}</div>
                </div>
                <div className="bg-stone-50 p-2 rounded-lg">
                  <div className="text-stone-400">{language === 'ta' ? 'வங்கி வரவு' : 'Bank Payout'}</div>
                  <div className="font-semibold text-stone-800">₹{metrics.flipkart.bankPayout}</div>
                </div>
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <div className="text-emerald-700 font-medium">{language === 'ta' ? 'லாப விகிதம்' : 'Margin %'}</div>
                  <div className="font-bold text-emerald-800">{metrics.flipkart.margin}%</div>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="p-4 bg-stone-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-bold text-sm">
                  {language === 'ta' ? 'உங்கள் தொழிற்சாலைக்கு தனிப்பட்ட லாப கணக்கீடு வேண்டுமா?' : 'Want us to audit your factory’s exact unit economics?'}
                </div>
                <p className="text-xs text-stone-400 mt-0.5">
                  {language === 'ta'
                    ? '15 நிமிட இலவச ஆலோசனையில் உங்கள் தயாரிப்புகளுக்கு ஏற்ற சரியான தளத்தை தேர்வு செய்யலாம்.'
                    : 'Get a tailored SKU margin sheet + packaging weight analysis in a quick 15-minute call.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenAudit(`Margin Calculator inquiry for ${cat.name} (Cost: ₹${costPrice}, MRP: ₹${sellingPrice})`)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>{language === 'ta' ? 'இலவச ஆலோசனை பெற' : 'Book Free Margin Audit'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
