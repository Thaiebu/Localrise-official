import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Phone, MapPin, Building } from 'lucide-react';
import { Language, LeadFormData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialNotes?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  language,
  initialNotes = ''
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    businessName: '',
    contactPerson: '',
    phone: '',
    city: 'Madurai',
    category: 'Handloom & Textiles',
    currentStatus: 'offline_only',
    notes: initialNotes
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, notes: initialNotes }));
    }
  }, [initialNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare WhatsApp link with prefilled factory details
    const waText = encodeURIComponent(
      `*New Factory Audit Request via LocalRise Website*\n\n` +
      `*Business Name:* ${formData.businessName || 'Not specified'}\n` +
      `*Contact Person:* ${formData.contactPerson || 'Owner'}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*District/Hub:* ${formData.city}\n` +
      `*Category:* ${formData.category}\n` +
      `*Current Status:* ${formData.currentStatus}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}\n` : '') +
      `\nLooking forward to scheduling the 15-minute factory review.`
    );

    // Open WhatsApp in new tab for direct frictionless contact
    setTimeout(() => {
      window.open(`https://wa.me/919488800000?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-stone-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span>{language === 'ta' ? 'இலவச 15 நிமிட கள ஆய்வு' : 'Free 15-Min Factory Audit'}</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900">
                {language === 'ta'
                  ? 'உங்கள் தயாரிப்புகளை ஆன்லைனில் எடுத்துச் செல்லுங்கள்'
                  : 'Get Your Free Marketplace Feasibility Review'}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
                {language === 'ta'
                  ? 'மதுரை, தென்காசி மற்றும் திருநெல்வேலி உற்பத்தியாளர்களுக்கு நேரடி ஆலோசனை.'
                  : 'We will check unit economics, target marketplaces, and packaging feasibility.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Business Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  {language === 'ta' ? 'தொழிற்சாலை / நிறுவனத்தின் பெயர்' : 'Factory / Business Name'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'ta' ? 'எ.கா: மதுரை சுங்குடி டெக்ஸ்டைல்ஸ்' : 'e.g. Sri Murugan Handlooms / Brass Crafts'}
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-900 focus:border-stone-900 bg-stone-50/50"
                />
              </div>

              {/* Contact Person & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    {language === 'ta' ? 'தொடர்பு கொள்ள வேண்டியவர்' : 'Contact Person'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'ta' ? 'உங்கள் பெயர்' : 'Owner / Manager Name'}
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-900 focus:border-stone-900 bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    {language === 'ta' ? 'வாட்ஸ்அப் எண்' : 'Phone / WhatsApp'} *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    placeholder="94888 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-900 focus:border-stone-900 bg-stone-50/50"
                  />
                </div>
              </div>

              {/* City / Hub Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    {language === 'ta' ? 'மாவட்டம் / பகுதி' : 'District Hub'}
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-900 bg-stone-50/50"
                  >
                    <option value="Madurai">Madurai (மதுரை)</option>
                    <option value="Tenkasi">Tenkasi / Kadayanallur (தென்காசி)</option>
                    <option value="Tirunelveli">Tirunelveli / Ambasamudram (திருநெல்வேலி)</option>
                    <option value="Other TN">Other Southern TN (பிற பகுதிகள்)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    {language === 'ta' ? 'தயாரிப்பு வகை' : 'Product Category'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-900 bg-stone-50/50"
                  >
                    <option value="Handloom & Textiles">Handloom, Sarees & Textiles (கைத்தறி)</option>
                    <option value="Brass & Utensils">Brass, Bronze & Utensils (பித்தளை பாத்திரங்கள்)</option>
                    <option value="Traditional Foods & Sweets">Sweets, Halwa & Spices (அல்வா & மசாலா)</option>
                    <option value="Woodcraft & Mats">Woodcraft, Mats & Coir (மர பொம்மைகள் & பாய்)</option>
                    <option value="Agro & Engineering">Agro Implements & Engineering</option>
                    <option value="Other Category">Other Regional Products</option>
                  </select>
                </div>
              </div>

              {/* Current Online Status */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  {language === 'ta' ? 'தற்போதைய விற்பனை நிலை' : 'Current Online Status'}
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'offline_only', label: '100% Offline Wholesale' },
                    { id: 'tried_failed', label: 'Tried Before, Low Traction' },
                    { id: 'active_struggling', label: 'Active, High Return Rates' },
                    { id: 'ready_to_launch', label: 'Ready to Launch New Store' }
                  ].map((status) => (
                    <button
                      key={status.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, currentStatus: status.id as any })}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                        formData.currentStatus === status.id
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  {language === 'ta' ? 'கூடுதல் குறிப்புகள் (விருப்பத்தேர்வு)' : 'Products you want to list / Notes (Optional)'}
                </label>
                <textarea
                  rows={2}
                  placeholder={language === 'ta' ? 'தயாரிப்புகளின் எடை, விலை விபரங்கள்...' : 'Approximate SKUs, prices, or questions you have...'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-900 bg-stone-50/50"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    {language === 'ta' ? 'தகவல்களை அனுப்பி வாட்ஸ்அப்பில் உரையாட' : 'Submit & Connect on WhatsApp'}
                  </span>
                </button>
                <p className="text-[11px] text-center text-stone-500 mt-2">
                  {language === 'ta'
                    ? 'உங்கள் தகவல்கள் பாதுகாப்பானது. தேவையற்ற ஸ்பேம் அழைப்புகள் இல்லை.'
                    : '100% confidential. No spam or unsolicited marketing calls.'}
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900">
              {language === 'ta' ? 'கோரிக்கை பெறப்பட்டது!' : 'Audit Request Received!'}
            </h3>
            <p className="mt-2 text-sm text-stone-600 max-w-sm mx-auto">
              {language === 'ta'
                ? `நன்றி ${formData.contactPerson}. உங்கள் தொழிற்சாலைக்கான தயாரிப்பு ஆய்வுத் திட்டத்துடன் எங்கள் களப்பணியாளர் வாட்ஸ்அப்பில் உங்களை தொடர்பு கொள்வார்.`
                : `Thank you ${formData.contactPerson}. We have recorded details for ${formData.businessName} in ${formData.city}. We will review your catalog and message you shortly.`}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-800"
              >
                {language === 'ta' ? 'முடிந்தது' : 'Done'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
