/**
 * Component prop interfaces for EMB Digitizers
 * UI component type definitions
 */

import type { ReactNode } from 'react';
import type {
  Service,
  PricingTier,
  Testimonial,
  FAQItem,
  TrustSignal,
  NavItem,
  ProcessStep,
  SocialLinks,
  ContactInfo,
} from './entities';

// UI Component Props

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning';
  className?: string;
}

export interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: ReactNode;
  }>;
  allowMultiple?: boolean;
  className?: string;
}

// Layout Component Props

export interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export interface NavbarProps {
  navItems: NavItem[];
  logoSrc?: string;
  className?: string;
}

export interface MobileMenuProps {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export interface FooterProps {
  navItems: NavItem[];
  contact: ContactInfo;
  social: SocialLinks;
  businessName: string;
  className?: string;
}

// Section Component Props

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  className?: string;
}

export interface CTABlockProps {
  headline: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export interface TrustBarProps {
  signals: TrustSignal[];
  className?: string;
}

export interface ServiceGridProps {
  services: Service[];
  variant?: 'compact' | 'detailed';
  className?: string;
}

export interface PricingGridProps {
  tiers: PricingTier[];
  className?: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  className?: string;
}

export interface FAQSectionProps {
  items: FAQItem[];
  groupByCategory?: boolean;
  className?: string;
}

export interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
  className?: string;
}

// Card Component Props

export interface ServiceCardProps {
  service: Service;
  variant?: 'compact' | 'detailed';
  className?: string;
}

export interface PricingCardProps {
  tier: PricingTier;
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export interface MetricCardProps {
  label: string;
  value: string;
  icon?: string;
  className?: string;
}

export interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export interface ProcessStepCardProps {
  step: ProcessStep;
  stepNumber: number;
  className?: string;
}

// Form Component Props

export interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
}
