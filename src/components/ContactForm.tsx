import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone, Building, MessageSquare, MapPin } from 'lucide-react';
import { Language } from '../types';
import { FORMSPREE_ENDPOINT } from './AuditModal';

interface ContactFormProps {
  language: Language;
}

interface FormFields {
  name: string;
  email: string;
  phone: string;
  district: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    phone: '',
    district: 'Madurai',
    category: 'Handloom & Sarees',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Validation logic
  const validateField = (name: keyof FormFields, value: string): string | undefined => {
    const trimmed = value.trim();

    if (name === 'name') {
      if (!trimmed) {
        return language === 'ta'
          ? 'தயவுசெய்து உங்கள் பெயர் அல்லது நிறுவனப் பெயரை உள்ளிடவும்.'
          : 'Please enter your name or business name.';
      }
      if (trimmed.length < 2) {
        return language === 'ta'
          ? 'பெயர் குறைந்தது 2 எழுத்துக்கள் இருக்க வேண்டும்.'
          : 'Name must be at least 2 characters.';
      }
    }

    if (name === 'email') {
      if (!trimmed) {
        return language === 'ta'
          ? 'மின்னஞ்சல் முகவரி அவசியம்.'
          : 'Email address is required.';
      }
      // Standard RFC-compliant email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        return language === 'ta'
          ? 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும் (எ.கா: user@example.com).'
          : 'Please enter a valid email address (e.g. name@example.com).';
      }
    }

    if (name === 'phone') {
      if (!trimmed) {
        return language === 'ta'
          ? 'மொபைல் / வாட்ஸ்அப் எண் அவசியம்.'
          : 'Phone or WhatsApp number is required.';
      }
      const digitsOnly = trimmed.replace(/\D/g, '');
      if (digitsOnly.length !== 10) {
        return language === 'ta'
          ? 'சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.'
          : 'Please enter a valid 10-digit mobile number.';
      }
    }

    if (name === 'message') {
      if (!trimmed) {
        return language === 'ta'
          ? 'தயவுசெய்து தயாரிப்பு விபரம் அல்லது செய்தியை உள்ளிடவும்.'
          : 'Please enter your message or product details.';
      }
      if (trimmed.length < 10) {
        return language === 'ta'
          ? 'தயவுசெய்து குறைந்தது 10 எழுத்துக்கள் உள்ளிடவும்.'
          : 'Message must be at least 10 characters.';
      }
    }

    return undefined;
  };

  const validateAll = (): FormErrors => {
    return {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };
  };

  const handleBlur = (field: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true
    });

    // Run client-side validation
    const validationErrors = validateAll();
    const hasErrors = Object.values(validationErrors).some((err) => Boolean(err));

    if (hasErrors) {
      setErrors(validationErrors);
      // Focus on first erroneous element if possible
      const firstErrorField = Object.keys(validationErrors).find(
        (key) => Boolean(validationErrors[key as keyof FormErrors])
      );
      if (firstErrorField) {
        const inputElem = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        if (inputElem) inputElem.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      _subject: `New Lead: ${formData.name.trim()} - ${formData.category} (${formData.district})`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      district: formData.district,
      category: formData.category,
      message: formData.message.trim(),
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitted(true);
        setErrors({});
        setTouched({});
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit form to Formspree. Please try again or chat on WhatsApp.');
      }
    } catch (err: any) {
      console.error('Formspree submission error:', err);
      setErrorMessage(
        err.message || (language === 'ta' ? 'படிவத்தை அனுப்புவதில் சிக்கல் ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.' : 'There was an issue sending your message. Please try again.')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form-section" className="py-20 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Ground Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'ta' ? 'நேரடி தொடர்பு & களப்பணி' : 'Direct Manufacturer Inquiries'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {language === 'ta'
                ? 'உங்கள் தயாரிப்புகளை ஆன்லைனில் விற்க இப்போதே தொடங்குங்கள்'
                : 'Send Your Factory Catalog Details Directly'}
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {language === 'ta'
                ? 'மதுரை, தென்காசி, திருநெல்வேலி தயாரிப்பாளர்களுக்கு நேரடி உதவி. Formspree வழியாக உங்கள் விபரங்களை சமர்ப்பிக்கவும் — 24 மணி நேரத்திற்குள் எங்கள் களப்பணியாளர் பதிலளிப்பார்.'
                : 'Tell us about your products, packed weights, or current challenges. Formspree sends your inquiry directly to our team for an actionable feasibility review.'}
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-800 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">
                    {language === 'ta' ? 'சேவை மாவட்டங்கள்' : 'Active Ground Presence'}
                  </div>
                  <div className="text-stone-400 mt-0.5">
                    Madurai • Tenkasi / Kadayanallur • Tirunelveli
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">
                    {language === 'ta' ? 'வாட்ஸ்அப் ஆதரவு' : 'Instant WhatsApp Dispatch'}
                  </div>
                  <div className="text-stone-400 mt-0.5">
                    +91 80563 93181 (Mon – Sat, 9:00 AM – 7:00 PM)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">
                    {language === 'ta' ? 'உடனடி உறுதிப்படுத்தல்' : 'No Fluff Guarantee'}
                  </div>
                  <div className="text-stone-400 mt-0.5">
                    Direct feasibility review from someone who has handled Amazon, Flipkart & Meesho shipments.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Formspree Form with Client-side Validation */}
          <div className="lg:col-span-7 bg-stone-800/90 rounded-3xl border border-stone-700/80 p-6 sm:p-9 shadow-2xl backdrop-blur-sm">
            
            {!submitted ? (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  {language === 'ta' ? 'படிவம் (Formspree இயக்கம்)' : 'Inquiry Form (Powered by Formspree)'}
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      {language === 'ta' ? 'உங்கள் பெயர் / நிறுவனம்' : 'Your Name / Business'} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={language === 'ta' ? 'எ.கா: சுப்பிரமணியன்' : 'e.g. R. Subramanian'}
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-stone-900/90 text-white placeholder-stone-500 text-sm focus:outline-hidden transition-colors ${
                        touched.name && errors.name
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/50'
                          : 'border-stone-700 focus:ring-2 focus:ring-amber-500'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 animate-in fade-in">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      {language === 'ta' ? 'வாட்ஸ்அப் எண்' : 'WhatsApp / Mobile Number'} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="94888 XXXXX"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-stone-900/90 text-white placeholder-stone-500 text-sm focus:outline-hidden transition-colors ${
                        touched.phone && errors.phone
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/50'
                          : 'border-stone-700 focus:ring-2 focus:ring-amber-500'
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 animate-in fade-in">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email (Validated for Formspree) */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {language === 'ta' ? 'உங்கள் மின்னஞ்சல் (Email)' : 'Your Email Address'} <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="factory@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border bg-stone-900/90 text-white placeholder-stone-500 text-sm focus:outline-hidden transition-colors ${
                        touched.email && errors.email
                          ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/50'
                          : 'border-stone-700 focus:ring-2 focus:ring-amber-500'
                      }`}
                    />
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                  {touched.email && errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* District & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      {language === 'ta' ? 'மாவட்டம்' : 'District Hub'}
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={(e) => handleChange('district', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-700 bg-stone-900/90 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Tenkasi">Tenkasi / Puliyangudi / Kadayanallur (தென்காசி & புளியங்குடி)</option>
                      <option value="Madurai">Madurai District (மதுரை & சுற்றுவட்டாரம்)</option>
                      <option value="Tirunelveli">Tirunelveli / Ambasamudram (திருநெல்வேலி)</option>
                      <option value="Other TN">Other South TN Hubs (விருதுநகர், தூத்துக்குடி, etc.)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      {language === 'ta' ? 'தயாரிப்பு பிரிவு' : 'Product Category'}
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={(e) => handleChange('category', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-700 bg-stone-900/90 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Handloom & Sarees">Handloom, Sarees & Textiles</option>
                      <option value="Bag Manufacturers">Bag Manufacturers (School, Jute, Travel & Backpacks)</option>
                      <option value="Covering Jewellery">Covering & 1-Gram Gold Jewellery Business</option>
                      <option value="Brass & Utensils">Brass, Bronze & Utensils</option>
                      <option value="Halwa & Traditional Foods">Traditional Foods & Confectionery</option>
                      <option value="Woodcraft & Mats">Woodcraft, Mats & Coir</option>
                      <option value="Engineering & Agro">Engineering & Agro Implements</option>
                      <option value="Other">Other Products</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {language === 'ta' ? 'உங்கள் செய்தி / தயாரிப்பு விபரங்கள்' : 'Your Message / Product Details'} <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder={
                      language === 'ta'
                        ? 'உங்கள் தயாரிப்பு விபரம், தோராயமான விலை மற்றும் உங்கள் சந்தேகங்கள்...'
                        : 'Describe your products, existing wholesale volume, or specific questions about selling online...'
                    }
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-stone-900/90 text-white placeholder-stone-500 text-sm focus:outline-hidden transition-colors ${
                      touched.message && errors.message
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/50'
                        : 'border-stone-700 focus:ring-2 focus:ring-amber-500'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{language === 'ta' ? 'அனுப்பப்படுகிறது...' : 'Sending via Formspree...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{language === 'ta' ? 'விபரங்களை சமர்ப்பிக்க' : 'Send Message to LocalRise'}</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-stone-400 mt-2">
                    Directly connected to Formspree endpoint <code className="text-amber-300 font-mono text-[10px]">https://formspree.io/f/xjykrnql</code>
                  </p>
                </div>

              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {language === 'ta' ? 'செய்தி அனுப்பப்பட்டது!' : 'Message Sent Successfully!'}
                </h3>
                <p className="mt-2 text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                  {language === 'ta'
                    ? `நன்றி ${formData.name}. உங்கள் தகவல் Formspree மூலமாக வெற்றிகரமாக பதிவு செய்யப்பட்டுள்ளது. விரைவில் நாங்கள் உங்களை தொடர்பு கொள்வோம்.`
                    : `Thank you ${formData.name}. Your details have been submitted via Formspree. Our team will review your factory inquiry and respond via email or WhatsApp within 24 hours.`}
                </p>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        district: 'Madurai',
                        category: 'Handloom & Sarees',
                        message: ''
                      });
                      setErrors({});
                      setTouched({});
                    }}
                    className="px-6 py-2.5 rounded-xl bg-stone-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-600 transition-colors cursor-pointer"
                  >
                    {language === 'ta' ? 'மற்றுமொரு செய்தி அனுப்ப' : 'Send Another Message'}
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
