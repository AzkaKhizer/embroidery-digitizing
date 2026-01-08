# Data Model: Phase 1 Website

**Feature**: 001-phase1-website
**Date**: 2025-12-30
**Status**: Complete

---

## Overview

Phase 1 uses static data stored as TypeScript constants. This document defines the interfaces and data structures that will be used across the application.

---

## Core Entities

### 1. Service

Represents a digitizing service offering.

```typescript
interface Service {
  id: string;                    // Unique identifier (e.g., "embroidery-digitizing")
  name: string;                  // Display name
  shortDescription: string;      // Brief description for cards (max 150 chars)
  fullDescription: string;       // Detailed description for service page
  icon: string;                  // Icon identifier or path
  benefits: string[];            // List of key benefits
  category: ServiceCategory;     // Service categorization
  featured: boolean;             // Show on homepage
  order: number;                 // Display order
}

type ServiceCategory =
  | "digitizing"
  | "vector"
  | "patches"
  | "other";
```

**Validation Rules**:
- `id` must be unique, kebab-case
- `name` max 50 characters
- `shortDescription` max 150 characters
- `benefits` must have 3-6 items

---

### 2. Pricing Tier

Represents a pricing option or package.

```typescript
interface PricingTier {
  id: string;                    // Unique identifier
  name: string;                  // Tier name (e.g., "Standard", "Rush")
  price: PriceInfo;              // Pricing details
  features: string[];            // What's included
  turnaround: string;            // Delivery time (e.g., "24-48 hours")
  highlighted: boolean;          // Highlight as recommended
  order: number;                 // Display order
}

interface PriceInfo {
  amount: number;                // Price in cents (e.g., 1500 = $15.00)
  currency: string;              // Currency code (e.g., "USD")
  unit: string;                  // Per what (e.g., "design", "1000 stitches")
  startingAt: boolean;           // Is this "starting at" price?
}
```

**Validation Rules**:
- `amount` must be positive integer (cents)
- `features` must have 3-8 items
- Only one tier can have `highlighted: true`

---

### 3. Testimonial

Represents a customer review/testimonial.

```typescript
interface Testimonial {
  id: string;                    // Unique identifier
  customerName: string;          // Customer's name
  company?: string;              // Company name (optional)
  role?: string;                 // Customer's role (optional)
  quote: string;                 // Testimonial text
  rating: number;                // Rating 1-5
  avatar?: string;               // Avatar image path (optional)
  featured: boolean;             // Show on homepage
  order: number;                 // Display order
}
```

**Validation Rules**:
- `rating` must be 1-5
- `quote` max 300 characters
- `customerName` required, max 100 characters

---

### 4. FAQ Item

Represents a frequently asked question.

```typescript
interface FAQItem {
  id: string;                    // Unique identifier
  question: string;              // The question
  answer: string;                // The answer (can include markdown)
  category: FAQCategory;         // Question category
  order: number;                 // Display order within category
}

type FAQCategory =
  | "general"
  | "process"
  | "pricing"
  | "turnaround"
  | "formats"
  | "revisions";
```

**Validation Rules**:
- `question` max 200 characters
- `answer` max 1000 characters
- Minimum 8 FAQ items required for launch

---

### 5. Contact Submission

Represents a contact form submission.

```typescript
interface ContactSubmission {
  name: string;                  // Customer name (required)
  email: string;                 // Customer email (required)
  phone?: string;                // Phone number (optional)
  message: string;               // Message content (required)
  timestamp: Date;               // Submission time (auto-generated)
  source: string;                // Page submitted from
}
```

**Validation Rules**:
- `name` required, 2-100 characters
- `email` required, valid email format
- `phone` optional, valid phone format if provided
- `message` required, 10-2000 characters

---

### 6. Site Configuration

Global site settings and metadata.

```typescript
interface SiteConfig {
  name: string;                  // Site/business name
  tagline: string;               // Business tagline
  description: string;           // Default meta description
  url: string;                   // Production URL
  contact: ContactInfo;          // Business contact details
  social: SocialLinks;           // Social media links
  trustSignals: TrustSignal[];   // Trust indicators
}

interface ContactInfo {
  email: string;                 // Business email
  phone: string;                 // Business phone
  hours: string;                 // Business hours
  address?: string;              // Physical address (optional)
}

interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

interface TrustSignal {
  id: string;
  label: string;                 // e.g., "Years Experience"
  value: string;                 // e.g., "15+"
  icon: string;                  // Icon identifier
}
```

---

### 7. Navigation Item

Represents a navigation menu item.

```typescript
interface NavItem {
  label: string;                 // Display text
  href: string;                  // Link path
  order: number;                 // Display order
  external?: boolean;            // Opens in new tab
}
```

---

### 8. Process Step

Represents a step in the "How It Works" section.

```typescript
interface ProcessStep {
  id: string;                    // Unique identifier
  title: string;                 // Step title
  description: string;           // Step description
  icon: string;                  // Icon identifier
  order: number;                 // Step number (1, 2, 3...)
}
```

---

## Component Props Interfaces

### Layout Components

```typescript
interface NavbarProps {
  items: NavItem[];
  logo: string;
}

interface FooterProps {
  contact: ContactInfo;
  links: NavItem[];
  social: SocialLinks;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}
```

### Content Components

```typescript
interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
}

interface ServiceCardProps {
  service: Service;
  variant?: "compact" | "detailed";
}

interface PricingCardProps {
  tier: PricingTier;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

interface TrustBarProps {
  signals: TrustSignal[];
}

interface MetricCardProps {
  label: string;
  value: string;
  icon?: string;
}

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

interface ProcessStepProps {
  step: ProcessStep;
  isLast?: boolean;
}

interface FAQAccordionProps {
  items: FAQItem[];
  groupByCategory?: boolean;
}
```

### Interactive Components

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

interface ContactFormProps {
  onSuccess?: () => void;
  source?: string;
}

interface AccordionProps {
  items: { title: string; content: string }[];
  allowMultiple?: boolean;
}

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}
```

### Utility Components

```typescript
interface CTABlockProps {
  headline: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
  variant?: "primary" | "secondary";
}

interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning";
}
```

---

## Data File Structure

```
/lib/
├── data/
│   ├── services.ts          # Service[] constant
│   ├── pricing.ts           # PricingTier[] constant
│   ├── testimonials.ts      # Testimonial[] constant
│   ├── faq.ts               # FAQItem[] constant
│   ├── process-steps.ts     # ProcessStep[] constant
│   └── site-config.ts       # SiteConfig constant
├── types/
│   ├── index.ts             # Re-exports all types
│   ├── entities.ts          # Entity interfaces
│   └── components.ts        # Component prop interfaces
└── utils/
    ├── format.ts            # Formatting helpers (price, phone)
    └── validation.ts        # Validation schemas (Zod)
```

---

## Relationships

```
SiteConfig
├── ContactInfo
├── SocialLinks
└── TrustSignal[]

Service
└── ServiceCategory

PricingTier
└── PriceInfo

FAQItem
└── FAQCategory

ContactSubmission (runtime only - sent to email)
```

---

## State Transitions

### Contact Form States

```
idle → submitting → success
              ↓
            error → idle (retry)
```

### Mobile Menu States

```
closed ←→ open
```

### FAQ Accordion States

```
collapsed ←→ expanded (per item)
```

---

## Future Migration Path

When transitioning to Phase 2 (CMS/Database):

1. **Replace data constants** with API calls
2. **Add loading states** to components
3. **Implement caching** for API responses
4. **Keep interfaces unchanged** - components receive same props

This design ensures Phase 2 migration requires minimal component changes.
