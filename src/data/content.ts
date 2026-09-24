import { RegionalHub, PricingPlan } from '../types';

export const REGIONAL_HUBS: RegionalHub[] = [
  {
    id: 'madurai',
    name: 'Madurai Cluster',
    nameTa: 'மதுரை உற்பத்தி மையம்',
    district: 'Madurai & Surrounds',
    districtTa: 'மதுரை மற்றும் சுற்றுப்புறங்கள்',
    keyProducts: [
      'Sungudi Cotton Sarees & Dhotis',
      'Brass & Bell Metal Vilakku (Lamps)',
      'Bag Manufacturing (School, College Backpacks, Jute & Travel Bags)',
      'Covering & 1-Gram Gold Jewellery (Chains, Bangles & Bridal Sets)',
      'Jasmine & Herbal Fragrance Extracts',
      'Traditional Confectionery & Pulses'
    ],
    keyProductsTa: [
      'சுங்குடி சேலைகள் மற்றும் வேட்டிகள்',
      'பித்தளை விளக்குகள் மற்றும் பாத்திரங்கள்',
      'பேக் தயாரிப்பு (பள்ளி பைகள், காலேஜ் பேக், ஜூட் & டிராவல்)',
      'கவரிங் & 1 கிராம் தங்க நகைகள் (Covering Jewellery)',
      'மல்லிகை மற்றும் மூலிகை தயாரிப்புகள்',
      'பாரம்பரிய உணவு மற்றும் தின்பண்டங்கள்'
    ],
    highlight: 'Huge pan-India demand for Madurai Sungudi, temple brassware, covering jewellery & factory-direct bags.',
    highlightTa: 'சுங்குடி, பித்தளை விளக்குகள், கவரிங் நகைகள் மற்றும் பேக் தயாரிப்பாளர்களுக்கு அகில இந்திய அளவில் பெரும் வரவேற்பு.',
    bestMarketplace: 'Amazon (Brass, Bags & Gifts) + Meesho (Textiles & Covering Jewellery)'
  },
  {
    id: 'tenkasi',
    name: 'Tenkasi & Puliyangudi Cluster',
    nameTa: 'தென்காசி & புளியங்குடி உற்பத்தி மையம்',
    district: 'Tenkasi, Puliyangudi, Kadayanallur & Shenkottai',
    districtTa: 'தென்காசி, புளியங்குடி, கடையநல்லூர் & செங்கோட்டை',
    keyProducts: [
      'Kadayanallur Handloom Lungis & Towels',
      'Puliyangudi Lemon Products & Agro Value-Add',
      'Courtallam Hill Spices & Pure Wild Honey',
      'Coir & Coconut Fiber Agro Products',
      'Small Agricultural Implements & Machinery',
      'Herbal Oils & Traditional Remedies'
    ],
    keyProductsTa: [
      'கடையநல்லூர் கைத்தறி லுங்கிகள் & துண்டுகள்',
      'புளியங்குடி எலுமிச்சை & வேளாண் மதிப்புக்கூட்டு பொருட்கள்',
      'குற்றால வாசனை திரவியங்கள் & மலைத்தேன்',
      'கயிறு & தேங்காய் நார் வேளாண் பொருட்கள்',
      'விவசாய கருவிகள் மற்றும் உபகரணங்கள்',
      'மூலிகை எண்ணெய்கள் & தைலங்கள்'
    ],
    highlight: 'South TN entrepreneurial powerhouse: exceptional direct factory pricing, lime agro-derivatives & high-volume handloom on Meesho & Flipkart.',
    highlightTa: 'தென் தமிழகத்தின் தொழில் முனைவோர் பூமி: எலுமிச்சை & வேளாண் பொருட்கள், நேரடி தொழிற்சாலை விலை கைத்தறி மற்றும் பான்-இந்தியா விற்பனை.',
    bestMarketplace: 'Meesho (Mass Apparel & Towels) + Amazon (Agro/Spices & Organic)'
  },
  {
    id: 'tirunelveli',
    name: 'Tirunelveli Cluster',
    nameTa: 'திருநெல்வேலி உற்பத்தி மையம்',
    district: 'Tirunelveli, Ambasamudram & Pattamadai',
    districtTa: 'திருநெல்வேலி, அம்பாசமுத்திரம் & பத்தமடை',
    keyProducts: [
      'Authentic Tirunelveli Halwa & Sweets',
      'Handcrafted Bags, School & Jute Totes',
      'Covering & Traditional Temple Jewellery Ornaments',
      'Ambasamudram Lacquer Woodcraft & Toys',
      'Pattamadai Korai Fine Grass Mats (GI)',
      'Traditional Palm Jaggery (Karupatti)'
    ],
    keyProductsTa: [
      'அசல் திருநெல்வேலி அல்வா & கார வகைகள்',
      'தையல் பேக், பள்ளி பைகள் & ஜூட் பைகள்',
      'கவரிங் & கோயில் ஆபரணங்கள் (Covering Jewellery)',
      'அம்பாசமுத்திரம் மர பொம்மைகள்',
      'பத்தமடை பாய் (GI Tag கைவினைப்பொருள்)',
      'பாரம்பரிய பனங்கருப்பட்டி மற்றும் பதநீர் பொருட்கள்'
    ],
    highlight: 'Food preservation & GI-certified crafts ready for pan-India premium courier shipment.',
    highlightTa: 'நீண்ட நாள் கெடாத பேக்கேஜிங் மூலம் அகில இந்திய அளவிலான வாடிக்கையாளர்களுக்கு நேரடி டெலிவரி.',
    bestMarketplace: 'Flipkart & Amazon (Packaged Food & Brass) + Custom D2C'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Marketplace Launch',
    nameTa: 'ஸ்டார்ட்டர் லான்ச்',
    tagline: 'Get your factory on Amazon, Flipkart or Meesho with zero guesswork.',
    taglineTa: 'அமேசான், பிளிப்கார்ட் அல்லது மீஷோவில் உங்கள் தயாரிப்புகளை விற்பனை செய்ய தொடங்குங்கள்.',
    price: '₹14,999',
    period: 'one-time setup',
    idealFor: 'Factories with 5–25 products wanting quick, error-free onboarding.',
    features: [
      'Full Seller Account Setup (GST & Bank Mapping)',
      'Brand Approval / GTIN Exemption Support',
      'Up to 20 SKUs cataloged with SEO titles & bullet points',
      'Smartphone-to-Studio photography guidelines for your products',
      'Logistics & Courier pickup integration at your factory door',
      'First order handling training & packaging compliance walkthrough',
      '14 days post-launch support for order management'
    ],
    ctaText: 'Start Marketplace Launch',
    ctaTextTa: 'இப்போதே தொடங்கவும்'
  },
  {
    id: 'growth',
    name: 'Growth & Daily Management',
    nameTa: 'முழு வளர்ச்சி & கணக்கு மேலாண்மை',
    tagline: 'End-to-end execution. We run your online operations while you focus on production.',
    taglineTa: 'ஆன்லைன் விற்பனை வேலைகளை நாங்கள் செய்கிறோம், நீங்கள் உற்பத்தியில் மட்டும் கவனம் செலுத்துங்கள்.',
    price: '₹18,500',
    period: '/ month + 4% performance share',
    popular: true,
    idealFor: 'Manufacturers who want consistent monthly orders without hiring an in-house ecommerce team.',
    features: [
      'Everything in Marketplace Launch for multiple platforms',
      'Daily inventory sync & stock out prevention',
      'Amazon Ads & Flipkart Sponsored campaign management (strict ACoS control)',
      'RTO & Return reduction strategy (customer validation before dispatch)',
      'Negative review mitigation & buyer dispute handling',
      'Bi-weekly performance review & profit margin audit',
      'Dedicated WhatsApp account manager with ground knowledge'
    ],
    ctaText: 'Partner for Growth',
    ctaTextTa: 'வளர்ச்சி பார்ட்னராக இணையுங்கள்'
  },
  {
    id: 'd2c',
    name: 'Direct Brand Store (D2C)',
    nameTa: 'சொந்த பிராண்ட் இணையதளம் (D2C)',
    tagline: 'Your own branded online store with 0% marketplace commission.',
    taglineTa: 'கமிஷன் இல்லாத உங்கள் சொந்த பிராண்ட் ஆன்லைன் கடை.',
    price: '₹28,000',
    period: 'one-time setup',
    idealFor: 'High-margin GI products (Halwa, Sungudi, Brass) wanting direct customer loyalty.',
    features: [
      'Custom Shopify or high-speed WooCommerce Storefront',
      'Integrated Razorpay/PhonePe Payment Gateway (UPI, Cards, NetBanking)',
      'Automated Shiprocket / Delhivery courier pickup integration',
      'WhatsApp automated order confirmation & live tracking updates',
      'Customer database ownership (run repeat festival promotions)',
      'Mobile-first responsive design tailored for Tamil Nadu & Indian buyers',
      '30 days technical support & hands-on admin training'
    ],
    ctaText: 'Build Brand Store',
    ctaTextTa: 'சொந்த இணையதளம் உருவாக்க'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Factory Visit or Sample Audit',
    titleTa: 'தொழிற்சாலை அல்லது மாதிரி தயாரிப்பு ஆய்வு',
    desc: 'We inspect your products in person across Madurai, Tenkasi, or Tirunelveli (or via direct sample courier). We check packaging durability, shipping weight, and product appeal.',
    descTa: 'உங்கள் தயாரிப்புகளின் தரம், பேக்கிங் மற்றும் கூரியர் எடை ஆகியவற்றை நேரில் அல்லது மாதிரி மூலம் துல்லியமாக ஆய்வு செய்கிறோம்.'
  },
  {
    step: '02',
    title: 'Marketplace Fit & Margin Math',
    titleTa: 'சரியான தளம் & லாபக் கணக்கீடு',
    desc: 'We calculate unit economics: product cost + platform fees + shipping + GST. We match your product to the right platform — Meesho for mass textiles, Amazon for high-ticket brass, Flipkart for apparel & gifting.',
    descTa: 'கமிஷன், கூரியர் கட்டணம், ஜிஎஸ்டி கழித்த பிறகு கையில் நிற்கும் நிகர லாபத்தை முன்கூட்டியே கணக்கிட்டு சரியான தளத்தை தேர்வு செய்கிறோம்.'
  },
  {
    step: '03',
    title: 'Cataloging & Search Optimization',
    titleTa: 'தயாரிப்பு பட்டியல் & தேடுதல் உகப்பாக்கம்',
    desc: 'We write clear, search-optimized product titles, specifications, and Tamil-English keywords so customers across Mumbai, Delhi, Bengaluru, and Chennai find your products first.',
    descTa: 'இந்தியா முழுவதும் உள்ள வாடிக்கையாளர்கள் உங்கள் பொருட்களை எளிதில் தேடி வாங்கும்படி துல்லியமான தலைப்புகள் மற்றும் புகைப்படங்களை உருவாக்குகிறோம்.'
  },
  {
    step: '04',
    title: 'Doorstep Courier & Packaging Setup',
    titleTa: 'தொழிற்சாலை வாசலில் கூரியர் பிக்கப்',
    desc: 'No running around courier offices. We configure Amazon Easy Ship, Flipkart Ekart, or Delhivery to pick up boxes right from your factory or godown.',
    descTa: 'கூரியர் அலுவலகங்களுக்கு அலைய தேவையில்லை. உங்கள் தொழிற்சாலை வாசலிலேயே வந்து பார்சல்களை பெற்றுக் கொள்ளும் ஏற்பாடுகள் செய்கிறோம்.'
  },
  {
    step: '05',
    title: 'Orders, Reviews & Scale',
    titleTa: 'தினசரி ஆர்டர்கள் & வணிக விரிவாக்கம்',
    desc: 'We monitor daily orders, print labels, handle customer questions, and boost your 5-star ratings so sales climb week after week.',
    descTa: 'தினசரி ஆர்டர் செயலாக்கம், வாடிக்கையாளர் நன்மதிப்பு (5-Star Reviews) மற்றும் தொடர்ந்து விற்பனையை அதிகரிப்பதில் வழிகாட்டுகிறோம்.'
  }
];

export const PILOT_CASE_STUDIES = [
  {
    category: 'Handloom & Textiles',
    location: 'Kadayanallur & Puliyangudi, Tenkasi',
    headline: 'From local weekly shandies to 180+ monthly orders on Meesho & Flipkart',
    quote: 'We used to depend entirely on wholesale middlemen taking 45-day credit. LocalRise helped us list our 100% cotton lungis and towels directly on Meesho. Today, cash settles into our bank account every week without stress.',
    metrics: ['180+ monthly orders', '7-day cash settlement', 'Pan-India reach (UP, Bihar, Maharashtra)']
  },
  {
    category: 'Covering Jewellery & 1-Gram Gold',
    location: 'Madurai & Tirunelveli',
    headline: 'Covering jewellery workshop expanded from retail counter to 420+ pan-India orders/month',
    quote: 'Covering jewellery has the highest margin profile online: our average order is under 150 grams, keeping courier fees at the absolute lowest slab (<₹50). Customers from Mumbai and Delhi re-order bridal sets and daily chains directly!',
    metrics: ['420+ orders/month', '42% average net margin', 'Lowest courier slab (<150g)']
  },
  {
    category: 'Bag Manufacturing (School & Travel)',
    location: 'Madurai Cluster',
    headline: 'Bag manufacturing unit scaled wholesale catalog into profitable Amazon & Flipkart combos',
    quote: 'We manufacture school bags, college backpacks and jute bags. LocalRise helped us bundle them into 2-pack combo deals on Amazon & Flipkart with doorstep daily pickup. It turned our off-season into steady weekly revenue.',
    metrics: ['2.6x higher margin vs wholesale', 'Zero collection credit risk', 'Daily doorstep pickup']
  },
  {
    category: 'Brass & Temple Craft',
    location: 'Vilakkuthoon, Madurai',
    headline: 'Traditional brass vilakku manufacturer unlocked ₹2.4 Lakhs/month in festival sales',
    quote: 'Most agencies in Chennai asked for big retainers with zero understanding of heavy brass weight courier charges. LocalRise came from real seller experience and optimized our packaging to avoid weight penalties on Amazon.',
    metrics: ['₹2.4L festival revenue', '38% lower shipping damage', 'Amazon Prime Eligible']
  }
];

export const FAQS = [
  {
    q: 'Why are Bag Manufacturers & Covering Jewellery businesses so profitable on marketplaces?',
    qTa: 'பேக் தயாரிப்பாளர்கள் மற்றும் கவரிங் நகை தொழிலுக்கு ஆன்லைன் மார்க்கெட்பிளேஸ் ஏன் அதிக லாபம் தருகிறது?',
    a: 'Both categories have phenomenal marketplace economics: Covering & 1-Gram Gold jewellery is lightweight (<150 grams), meaning minimum courier shipping costs and exceptionally high gross margins (35-50%). Bag manufacturers (school, college, jute, travel) benefit from huge pan-India consumer volume and can bundle multi-packs on Amazon and Meesho, eliminating wholesale credit defaults.',
    aTa: 'கவரிங் நகைகள் மிக குறைந்த எடை கொண்டவை (<150 கிராம்), எனவே கூரியர் கட்டணம் மிகவும் குறைவு; 35% முதல் 50% வரை நிகர லாபம் கிடைக்கும். பேக் தயாரிப்பாளர்கள் பள்ளி, கல்லூரி மற்றும் ஜூட் பைகளை காம்போக்களாக விற்று 45 நாள் கடன் சிக்கல்கள் இல்லாமல் வாரம் தோறும் ரொக்க வருவாய் ஈட்டலாம்.'
  },
  {
    q: 'Do I need GST to sell on Amazon, Flipkart, or Meesho?',
    qTa: 'அமேசான், பிளிப்கார்ட் அல்லது மீஷோவில் விற்க ஜிஎஸ்டி (GST) கட்டாயமா?',
    a: 'Yes, for selling across state borders on Amazon and Flipkart, a regular GSTIN is required. For Meesho intra-state (within Tamil Nadu), simplified registration is sometimes possible, but having GST is strongly recommended to sell pan-India. If you do not have GST, we connect you with reliable local auditors in Madurai, Tenkasi, or Tirunelveli to get it done in 3–5 days.',
    aTa: 'ஆம், இந்தியா முழுவதும் விற்க வழக்கமான GST எண் தேவைப்படுகிறது. உங்களிடம் GST இல்லையெனில், 3-5 நாட்களில் விரைவாக பெற்றுத்தர எங்கள் உள்ளூர் ஆடிட்டர் குழு உதவுகிறது.'
  },
  {
    q: 'Who comes to collect the parcels? Do I need to visit courier offices?',
    qTa: 'பார்சல்களை யார் வந்து எடுப்பார்கள்? கூரியர் ஆபிஸுக்கு போக வேண்டுமா?',
    a: 'No! The marketplace logistics team (Amazon Easy Ship, Ekart, or Delhivery/Shadowfax for Meesho) will arrive directly at your factory or shop daily to pick up packed orders. You just pack the item and paste the printed label.',
    aTa: 'இல்லை! அமேசான், பிளிப்கார்ட் மற்றும் மீஷோ கூரியர் நபர்கள் தினமும் உங்கள் கடை அல்லது தொழிற்சாலை வாசலுக்கே வந்து பார்சல்களை பெற்றுச் செல்வார்கள்.'
  },
  {
    q: 'How does payment reach my bank account?',
    qTa: 'விற்பனை பணம் எனது வங்கிக் கணக்கிற்கு எப்படி வரும்?',
    a: 'Marketplaces transfer funds directly to your verified business bank account via NEFT/RTGS on a regular cycle (usually every 7 to 14 days for delivered orders). LocalRise never touches your revenue — the money goes straight from the marketplace to you.',
    aTa: 'பணம் நேரடியாக உங்கள் வங்கிக் கணக்கிலேயே 7 முதல் 14 நாட்களுக்குள் அமேசான்/மீஷோ மூலம் செலுத்தப்படும். லோக்கல்ரைஸ் உங்கள் பணத்தை எப்போதுமே கையாள்வதில்லை; பணம் நேரடியாக உங்களுக்கே வரும்.'
  },
  {
    q: 'Why choose LocalRise over a generic digital marketing agency in Chennai or Bangalore?',
    qTa: 'ஏன் பிற ஏஜென்சிகளை விட லோக்கல்ரைஸை (LocalRise) தேர்ந்தெடுக்க வேண்டும்?',
    a: 'Most digital marketing agencies only know how to run social media ads and have never packed a parcel or handled an Amazon courier weight dispute. LocalRise is founded on real seller experience: we know actual commission calculations, packaging guidelines to avoid RTO returns, barcode requirements, and we are locally accessible right here in Madurai, Tenkasi, and Tirunelveli.',
    aTa: 'நாங்கள் வெறும் விளம்பர ஏஜென்சி அல்ல; சுயமாக அமேசான், மீஷோவில் விற்பனை செய்த நிஜமான அனுபவம் கொண்டவர்கள். கூரியர் பிரச்சனைகள், பேக்கிங் நுணுக்கங்கள் மற்றும் உங்கள் தொழிற்சாலை தேவைகளை நன்கு அறிந்தவர்கள்.'
  }
];
