/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RegionalClusters } from './components/RegionalClusters';
import { Calculator } from './components/Calculator';
import { ServicesPricing } from './components/ServicesPricing';
import { HowItWorks } from './components/HowItWorks';
import { WhyLocalRise } from './components/WhyLocalRise';
import { CaseStudies } from './components/CaseStudies';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { DeploymentModal } from './components/DeploymentModal';
import { Language, PricingPlan } from './types';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditNotes, setAuditNotes] = useState<string>('');
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  const handleOpenAudit = (notes?: string) => {
    setAuditNotes(notes || '');
    setIsAuditModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    handleOpenAudit(`Interested in ${plan.name} (${plan.price})`);
  };

  const handleSelectCluster = (clusterName: string) => {
    handleOpenAudit(`Manufacturer inquiry from ${clusterName}`);
  };

  const handleOpenWhatsApp = (customText?: string) => {
    const defaultText = language === 'ta'
      ? 'வணக்கம் LocalRise! நான் மதுரை / தென்காசி / திருநெல்வேலி பகுதியில் இருந்து பேசுகிறேன். எனது தயாரிப்புகளை ஆன்லைனில் விற்பனை செய்வது குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
      : 'Hello LocalRise! I am a manufacturer from Madurai/Tenkasi/Tirunelveli and would like to discuss taking my factory products online.';
    
    const text = encodeURIComponent(customText || defaultText);
    window.open(`https://wa.me/919488800000?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1E293B] flex flex-col font-sans selection:bg-amber-200 selection:text-stone-900">
      
      {/* Sticky Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenAudit={() => handleOpenAudit()}
        onOpenDeployGuide={() => setIsDeployModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenAudit={() => handleOpenAudit()}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
        />

        {/* Regional Manufacturing Clusters (Madurai, Tenkasi, Tirunelveli) */}
        <RegionalClusters
          language={language}
          onSelectCluster={handleSelectCluster}
        />

        {/* Interactive Marketplace Margin & Net Profit Calculator */}
        <Calculator
          language={language}
          onOpenAudit={handleOpenAudit}
        />

        {/* Services & Transparent Pricing */}
        <ServicesPricing
          language={language}
          onSelectPlan={handleSelectPlan}
        />

        {/* 5-Step Ground Timeline (How It Works) */}
        <HowItWorks
          language={language}
          onOpenAudit={() => handleOpenAudit('General factory audit request')}
        />

        {/* Why LocalRise (Hands-on seller vs Agency) */}
        <WhyLocalRise
          language={language}
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* Pilot Case Studies & Testimonials */}
        <CaseStudies
          language={language}
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* FAQs */}
        <FAQSection
          language={language}
          onOpenAudit={() => handleOpenAudit()}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
        />

      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenAudit={() => handleOpenAudit()}
        onOpenDeployGuide={() => setIsDeployModalOpen(true)}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Floating Sticky Quick Action Pill on Mobile */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={() => handleOpenWhatsApp()}
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 border-2 border-white"
          title="Chat directly on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white/20" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider pr-1">
            WhatsApp
          </span>
        </button>
      </div>

      {/* Free Factory Audit Lead Capture Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        language={language}
        initialNotes={auditNotes}
      />

      {/* Domain & Deployment Guide Modal for localrise.co.in */}
      <DeploymentModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />

    </div>
  );
}
