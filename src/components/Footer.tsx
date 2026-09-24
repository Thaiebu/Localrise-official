import React from 'react';
import { MapPin, MessageSquare, Phone, Mail, Globe, ArrowUpRight, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenAudit: () => void;
  onOpenDeployGuide: () => void;
  onOpenWhatsApp: () => void;
  isTransitioning?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenAudit,
  onOpenDeployGuide,
  onOpenWhatsApp,
  isTransitioning = false
}) => {
  return (
    <footer className={`bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800 lang-fade-transition ${isTransitioning ? 'lang-fade-out' : 'lang-fade-in'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-2xl font-black tracking-tight text-white">
                Local<span className="text-amber-500">Rise</span>
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-stone-800 text-stone-300 border border-stone-700">
                TN
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm mb-6">
              {language === 'ta'
                ? 'மதுரை, தென்காசி & திருநெல்வேலி உற்பத்தியாளர்களை ஆன்லைனில் கொண்டு வருகிறோம் — சரியான ஸ்டோர், சரியான மார்க்கெட்பிளேஸ் மற்றும் நேரடி களப்பணி.'
                : 'Taking manufacturers in Madurai, Tenkasi & Tirunelveli online — the right store, the right marketplace, and hands-on execution from someone who has actually sold on these platforms.'}
            </p>

            <div className="flex flex-col gap-2 text-xs text-stone-400 font-mono">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                <span>Domain Target: localrise.co.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Southern Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Regional Hubs Col */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
              {language === 'ta' ? 'உற்பத்தி மையங்கள்' : 'Target Regional Hubs'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span><strong>Madurai:</strong> Sungudi, Brass & Confectionery</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span><strong>Tenkasi:</strong> Handloom, Kadayanallur & Coir</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span><strong>Tirunelveli:</strong> Halwa, Mats, Karupatti & Crafts</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-stone-800">
              <button
                type="button"
                onClick={onOpenDeployGuide}
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>How to deploy to localrise.co.in</span>
              </button>
            </div>
          </div>

          {/* Marketplaces & Direct Navigation */}
          <div className="md:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
              Marketplaces
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>Amazon India (Easy Ship & FBA)</li>
              <li>Flipkart Seller Hub</li>
              <li>Meesho (0% Commission)</li>
              <li>Custom D2C (Shopify)</li>
            </ul>
          </div>

          {/* Quick Contact & WhatsApp */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
              {language === 'ta' ? 'தொடர்புக்கு' : 'Direct Ground Contact'}
            </div>
            
            <p className="text-xs text-stone-400 mb-4 leading-relaxed">
              {language === 'ta'
                ? 'உங்கள் தயாரிப்புகளை பரிசோதிக்க மற்றும் இலவச ஆலோசனை பெற வாட்ஸ்அப்பில் செய்தி அனுப்புங்கள்.'
                : 'Message us directly with your product photos or catalog to begin.'}
            </p>

            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 mb-3 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ta' ? 'வாட்ஸ்அப் நேரடி தொடர்பு' : 'Connect on WhatsApp'}</span>
            </button>

            <button
              type="button"
              onClick={onOpenAudit}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 border border-stone-700"
            >
              <span>{language === 'ta' ? 'இலவச ஆய்வு கோர' : 'Book Free 15-Min Audit'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} LocalRise. All rights reserved. Taking Tamil Nadu manufacturers global.
          </div>
          <div className="flex items-center gap-4">
            <a href="#services-pricing" className="hover:text-stone-400 transition-colors">Pricing</a>
            <a href="#margin-calculator" className="hover:text-stone-400 transition-colors">Calculator</a>
            <a href="#how-it-works" className="hover:text-stone-400 transition-colors">How It Works</a>
            <a href="#contact-form-section" className="text-amber-400 hover:text-amber-300 transition-colors">Inquiry Form</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
