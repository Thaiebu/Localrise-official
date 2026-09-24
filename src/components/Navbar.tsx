import React, { useState } from 'react';
import { 
  MessageSquare, 
  Globe, 
  Menu, 
  X, 
  ArrowUpRight, 
  TrendingUp, 
  MapPin, 
  Calculator, 
  Briefcase, 
  HelpCircle,
  Mail
} from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAudit: () => void;
  onOpenDeployGuide?: () => void;
  isTransitioning?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenAudit,
  isTransitioning = false
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // WhatsApp click handler with prefilled text
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'ta'
        ? 'வணக்கம் LocalRise! நான் தென் தமிழகம் (மதுரை / தென்காசி / புளியங்குடி / திருநெல்வேலி) பகுதியில் இருந்து பேசுகிறேன். எனது தயாரிப்புகளை ஆன்லைனில் விற்பனை செய்வது குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
        : 'Hello LocalRise! I am a manufacturer from South Tamil Nadu (Madurai / Tenkasi / Puliyangudi / Tirunelveli). I would like to consult about taking my products online on Amazon, Flipkart, or Meesho.'
    );
    window.open(`https://wa.me/918056393181?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const navLinks = [
    {
      href: '#regional-clusters',
      labelEn: 'Regional Hubs',
      labelTa: 'உற்பத்தி மையங்கள் (Madurai, Tenkasi, Tirunelveli)',
      desktopLabelEn: 'Hubs',
      desktopLabelTa: 'மையங்கள்',
      icon: MapPin
    },
    {
      href: '#services-pricing',
      labelEn: 'Services & Pricing',
      labelTa: 'சேவைகள் & கட்டணம்',
      desktopLabelEn: 'Services',
      desktopLabelTa: 'சேவைகள்',
      icon: Briefcase
    },
    {
      href: '#margin-calculator',
      labelEn: 'Margin Calculator',
      labelTa: 'லாபக் கால்குலேட்டர்',
      desktopLabelEn: 'Calculator',
      desktopLabelTa: 'கால்குலேட்டர்',
      icon: Calculator
    },
    {
      href: '#how-it-works',
      labelEn: 'How It Works',
      labelTa: 'செயல்முறை விளக்கம்',
      desktopLabelEn: 'Process',
      desktopLabelTa: 'செயல்முறை',
      icon: TrendingUp
    },
    {
      href: '#about-founder',
      labelEn: 'Why LocalRise',
      labelTa: 'ஏன் நாங்கள்',
      desktopLabelEn: 'Why Us',
      desktopLabelTa: 'ஏன் நாங்கள்',
      icon: HelpCircle
    },
    {
      href: '#contact-form-section',
      labelEn: 'Contact Us',
      labelTa: 'தொடர்புக்கு',
      desktopLabelEn: 'Contact',
      desktopLabelTa: 'தொடர்பு',
      icon: Mail
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all w-full max-w-full">
      {/* Subtle brand top accent line */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700" />

      {/* Main Navbar Container - Expanded to full width to use left and right space cleanly */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex items-center justify-between h-20 gap-3 xl:gap-6">
          
          {/* Logo Brand Block */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-sm ring-2 ring-amber-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <TrendingUp className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold tracking-normal text-stone-950 font-sans group-hover:text-amber-600 transition-colors">
                    Local<span className="text-amber-600">Rise</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200/80">
                    TN
                  </span>
                </div>
                <span className={`text-[11px] sm:text-xs font-medium text-stone-500 tracking-normal mt-0.5 truncate max-w-[180px] sm:max-w-none lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
                  {language === 'ta' ? 'உற்பத்தியாளர்களின் ஆன்லைன் தளம்' : 'Factory to Marketplace'}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 text-sm font-medium text-stone-600 lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="px-2.5 xl:px-3.5 py-1.5 rounded-lg hover:text-stone-950 hover:bg-stone-100/80 transition-all duration-150 whitespace-nowrap text-[13px] xl:text-[14px] font-medium tracking-normal"
              >
                {language === 'ta' ? link.desktopLabelTa : link.desktopLabelEn}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* Language Switcher with clean pill design */}
            <div className="flex items-center bg-stone-100/90 rounded-xl p-1 border border-stone-200/80 shadow-2xs shrink-0">
              <div className="pl-1.5 pr-1 text-stone-400">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <button
                type="button"
                disabled={isTransitioning}
                onClick={() => onLanguageChange('en')}
                aria-label="Switch to English"
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-stone-950 shadow-xs ring-1 ring-stone-900/5'
                    : 'text-stone-600 hover:text-stone-950'
                } ${isTransitioning ? 'pointer-events-none opacity-80' : ''}`}
              >
                EN
              </button>
              <button
                type="button"
                disabled={isTransitioning}
                onClick={() => onLanguageChange('ta')}
                aria-label="Switch to Tamil"
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  language === 'ta'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                } ${isTransitioning ? 'pointer-events-none opacity-80' : ''}`}
              >
                தமிழ்
              </button>
            </div>

            {/* WhatsApp Quick Chat */}
            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/80 transition-all shadow-2xs cursor-pointer whitespace-nowrap shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
              <span className={`hidden 2xl:inline lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
                {language === 'ta' ? 'வாட்ஸ்அப்' : 'WhatsApp'}
              </span>
            </button>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-stone-950 hover:bg-amber-600 text-white text-xs sm:text-sm font-semibold tracking-normal transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span className={`lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
                {language === 'ta' ? 'இலவச ஆலோசனை' : 'Book Free Audit'}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 stroke-[2.5]" />
            </button>

          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            {/* Quick language toggle for mobile */}
            <button
              type="button"
              disabled={isTransitioning}
              onClick={() => onLanguageChange(language === 'en' ? 'ta' : 'en')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
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
              className="p-2 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white/98 backdrop-blur-md px-4 pt-4 pb-6 space-y-4 shadow-lg animate-lang-pop">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-stone-100 text-sm font-medium transition-colors"
                >
                  <IconComponent className="w-4 h-4 text-amber-600" />
                  <span>{language === 'ta' ? link.labelTa : link.labelEn}</span>
                </a>
              );
            })}
          </nav>
          
          <div className="pt-2 flex flex-col gap-2.5 border-t border-stone-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ta' ? 'வாட்ஸ்அப்பில் பேச' : 'Chat on WhatsApp (+91 80563 93181)'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-3 px-4 rounded-xl bg-stone-950 hover:bg-amber-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <span>{language === 'ta' ? 'இலவச ஆலோசனை பெற' : 'Book Free Factory Audit'}</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
