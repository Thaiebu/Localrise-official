import React, { useState } from 'react';
import { MessageSquare, PhoneCall, Globe, Menu, X, ArrowUpRight, CheckCircle2, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAudit: () => void;
  onOpenDeployGuide: () => void;
  isTransitioning?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenAudit,
  onOpenDeployGuide,
  isTransitioning = false
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // WhatsApp click handler with prefilled text
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'ta'
        ? 'வணக்கம் LocalRise! நான் மதுரை / தென்காசி / திருநெல்வேலி பகுதியில் இருந்து பேசுகிறேன். எனது தயாரிப்புகளை ஆன்லைனில் விற்பனை செய்வது குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
        : 'Hello LocalRise! I am a manufacturer from Madurai/Tenkasi/Tirunelveli. I would like to consult about taking my products online on Amazon, Flipkart, or Meesho.'
    );
    // WhatsApp URL (placeholder phone can be customized by owner or updated in contact)
    window.open(`https://wa.me/919488800000?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top micro-bar highlighting regional hubs */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className={`font-medium text-stone-200 lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
              {language === 'ta'
                ? 'நேரடி தொழிற்சாலை சேவை: மதுரை • தென்காசி • திருநெல்வேலி'
                : 'Direct Ground Partner: Madurai • Tenkasi • Tirunelveli'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-stone-400">
            <button
              onClick={onOpenDeployGuide}
              className="hover:text-amber-400 flex items-center gap-1 transition-colors text-stone-300 underline underline-offset-2"
              title="Launch instructions for localrise.co.in"
            >
              <BookOpen className="w-3 h-3 text-amber-400" />
              <span>localrise.co.in Setup Guide</span>
            </button>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:inline text-stone-300 font-mono">Amazon • Flipkart • Meesho</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex flex-col group">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                  Local<span className="text-amber-600">Rise</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-stone-100 text-stone-700 border border-stone-300">
                  TN
                </span>
              </div>
              <span className={`text-[10px] font-semibold text-stone-600 tracking-wider uppercase lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
                {language === 'ta' ? 'உற்பத்தியாளர்களின் ஆன்லைன் தளம்' : 'Factory to Marketplace'}
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-6 text-sm font-medium text-stone-600 lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
            <a href="#regional-clusters" className="hover:text-stone-900 transition-colors">
              {language === 'ta' ? 'உற்பத்தி மையங்கள்' : 'Regional Hubs'}
            </a>
            <a href="#services-pricing" className="hover:text-stone-900 transition-colors">
              {language === 'ta' ? 'சேவைகள் & கட்டணம்' : 'Services & Pricing'}
            </a>
            <a href="#margin-calculator" className="hover:text-stone-900 transition-colors">
              {language === 'ta' ? 'லாபக் கால்குலேட்டர்' : 'Profit Calculator'}
            </a>
            <a href="#how-it-works" className="hover:text-stone-900 transition-colors">
              {language === 'ta' ? 'எப்படி செயல்படுகிறது' : 'How It Works'}
            </a>
            <a href="#about-founder" className="hover:text-stone-900 transition-colors">
              {language === 'ta' ? 'ஏன் லோக்கல்ரைஸ்' : 'Why LocalRise'}
            </a>
            <a href="#contact-form-section" className="hover:text-stone-900 transition-colors">
              {language === 'ta' ? 'தொடர்பு படிவம்' : 'Contact Us'}
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Switcher with tactile transition */}
            <div className="flex items-center bg-stone-100 rounded-lg p-0.5 border border-stone-200 shadow-inner">
              <button
                type="button"
                disabled={isTransitioning}
                onClick={() => onLanguageChange('en')}
                aria-label="Switch to English"
                className={`relative px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-stone-950 shadow-xs ring-1 ring-stone-900/10'
                    : 'text-stone-500 hover:text-stone-900'
                } ${isTransitioning ? 'pointer-events-none opacity-80' : ''}`}
              >
                EN
              </button>
              <button
                type="button"
                disabled={isTransitioning}
                onClick={() => onLanguageChange('ta')}
                aria-label="Switch to Tamil"
                className={`relative px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  language === 'ta'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-500 hover:text-stone-900'
                } ${isTransitioning ? 'pointer-events-none opacity-80' : ''}`}
              >
                தமிழ்
              </button>
            </div>

            {/* WhatsApp Quick Chat */}
            <button
              type="button"
              onClick={openWhatsApp}
              className="p-2 rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
              <span className={`hidden lg:inline lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
                {language === 'ta' ? 'வாட்ஸ்அப்' : 'WhatsApp'}
              </span>
            </button>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenAudit}
              className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5"
            >
              <span className={`lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
                {language === 'ta' ? 'இலவச ஆலோசனை' : 'Book Free Audit'}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              disabled={isTransitioning}
              onClick={() => onLanguageChange(language === 'en' ? 'ta' : 'en')}
              className={`px-2.5 py-1 rounded-md text-xs font-bold border transition-all ${
                language === 'ta'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-stone-100 text-stone-800 border-stone-200'
              }`}
            >
              {language === 'en' ? 'தமிழ்' : 'EN'}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-stone-200 bg-[#FBFBF9] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a
              href="#regional-clusters"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100"
            >
              {language === 'ta' ? 'உற்பத்தி மையங்கள் (Madurai, Tenkasi, Tirunelveli)' : 'Regional Hubs & Products'}
            </a>
            <a
              href="#services-pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100"
            >
              {language === 'ta' ? 'சேவைகள் & கட்டணம்' : 'Services & Pricing'}
            </a>
            <a
              href="#margin-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100"
            >
              {language === 'ta' ? 'லாபக் கால்குலேட்டர்' : 'Marketplace Margin Calculator'}
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100"
            >
              {language === 'ta' ? 'எப்படி செயல்படுகிறது' : 'How It Works (5 Steps)'}
            </a>
            <a
              href="#about-founder"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100"
            >
              {language === 'ta' ? 'ஏன் லோக்கல்ரைஸ்' : 'Why LocalRise'}
            </a>
            <a
              href="#contact-form-section"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 font-semibold text-amber-700"
            >
              {language === 'ta' ? 'தொடர்பு படிவம் (Formspree)' : 'Contact Us (Inquiry Form)'}
            </a>
          </nav>
          
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ta' ? 'வாட்ஸ்அப்பில் பேச' : 'Chat on WhatsApp'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>{language === 'ta' ? 'இலவச ஆலோசனை பெற' : 'Book Free Factory Audit'}</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full py-2 px-3 rounded-lg border border-stone-300 text-stone-600 text-xs font-medium text-center"
            >
              Deployment & Domain Guide (localrise.co.in)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
