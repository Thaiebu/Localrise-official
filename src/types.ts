export type Language = 'en' | 'ta';

export interface RegionalHub {
  id: string;
  name: string;
  nameTa: string;
  district: string;
  districtTa: string;
  keyProducts: string[];
  keyProductsTa: string[];
  highlight: string;
  highlightTa: string;
  bestMarketplace: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  nameTa: string;
  tagline: string;
  taglineTa: string;
  price: string;
  period?: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
  ctaText: string;
  ctaTextTa: string;
}

export interface CalculatorInput {
  category: string;
  manufacturingCost: number;
  sellingPrice: number;
  weightGrams: number;
  marketplace: 'amazon' | 'meesho' | 'flipkart';
}

export interface CalculatorResult {
  sellingPrice: number;
  manufacturingCost: number;
  platformFee: number;
  shippingFee: number;
  taxGst: number;
  netProfit: number;
  marginPercent: number;
  isProfitable: boolean;
}

export interface LeadFormData {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: 'Madurai' | 'Tenkasi' | 'Tirunelveli' | 'Other TN';
  category: string;
  currentStatus: 'offline_only' | 'tried_failed' | 'active_struggling' | 'ready_to_launch';
  notes?: string;
}
