/**
 * Entity interfaces for EMB Digitizers
 * Core business domain types
 */

// Service Types
export type ServiceCategory = 'digitizing' | 'vector' | 'patches' | 'logo';

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  category: ServiceCategory;
  featured: boolean;
  order: number;
}

// Pricing Types
export interface PriceInfo {
  amount: number;
  currency: string;
  unit: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: PriceInfo;
  description: string;
  features: string[];
  turnaround: string;
  highlighted: boolean;
  order: number;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  customerName: string;
  company: string;
  quote: string;
  rating: number;
  featured: boolean;
}

// FAQ Types
export type FAQCategory = 'process' | 'turnaround' | 'formats' | 'pricing' | 'revisions' | 'general';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  order: number;
}

// Contact Types
export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
  submittedAt: Date;
}

// Site Configuration Types
export interface ContactInfo {
  email: string;
  phone: string;
  hours: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
}

export interface TrustSignal {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  description: string;
  contact: ContactInfo;
  social: SocialLinks;
  trustSignals: TrustSignal[];
  navItems: NavItem[];
}

// Process Types
export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}
