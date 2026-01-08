# Tasks: Phase 1 - Embroidery Digitizing Business Website

**Input**: Design documents from `/specs/001-phase1-website/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/contact-form.md, quickstart.md

**Tests**: No tests requested for Phase 1. Focus on implementation only.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Based on plan.md structure:
- **Source**: `src/` at repository root
- **Components**: `src/components/` organized by function (ui, layout, sections, cards, forms)
- **Data**: `src/lib/data/` for static data constants
- **Types**: `src/lib/types/` for TypeScript interfaces
- **Utils**: `src/lib/utils/` for helpers
- **App**: `src/app/` for Next.js App Router pages

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Next.js 14+ project with TypeScript, Tailwind CSS, and App Router in root directory using `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- [ ] T002 Install dependencies: `npm install zod react-hook-form @hookform/resolvers resend lucide-react`
- [ ] T003 [P] Create directory structure: `src/components/ui/`, `src/components/layout/`, `src/components/sections/`, `src/components/cards/`, `src/components/forms/`
- [ ] T004 [P] Create directory structure: `src/lib/data/`, `src/lib/types/`, `src/lib/utils/`
- [ ] T005 [P] Create `public/images/` directory with subdirectories `services/`, `testimonials/`
- [ ] T006 [P] Create placeholder logo file at `public/images/logo.svg` with simple text placeholder
- [ ] T007 Update `tailwind.config.ts` with custom colors (primary navy/blue, secondary orange), fonts (Inter), and container settings per plan.md
- [ ] T008 Update `src/styles/globals.css` with base styles, custom utilities, and font imports
- [ ] T009 [P] Create `.env.example` with required environment variables: `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL`

---

## Phase 2: Foundational (Types, Data, UI Components)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**CRITICAL**: No user story work can begin until this phase is complete

### Types & Interfaces

- [ ] T010 [P] Create entity interfaces in `src/lib/types/entities.ts`: Service, ServiceCategory, PricingTier, PriceInfo, Testimonial, FAQItem, FAQCategory, ContactSubmission, SiteConfig, ContactInfo, SocialLinks, TrustSignal, NavItem, ProcessStep
- [ ] T011 [P] Create component prop interfaces in `src/lib/types/components.ts`: ButtonProps, BadgeProps, IconProps, ContainerProps, NavbarProps, FooterProps, PageHeroProps, HeroProps, ServiceCardProps, PricingCardProps, TestimonialCardProps, TrustBarProps, MetricCardProps, ValueCardProps, ProcessStepProps, FAQAccordionProps, CTABlockProps, ContactFormProps, MobileMenuProps, AccordionProps
- [ ] T012 Create type re-exports in `src/lib/types/index.ts` that exports all types from entities.ts and components.ts

### Static Data

- [ ] T013 [P] Create site configuration in `src/lib/data/site-config.ts` with business name "EMB Digitizers", tagline, contact info (email, phone, hours), social links, and 3 trust signals (Years Experience: 15+, Customers Served: 10,000+, Quality Guarantee: 100%)
- [ ] T014 [P] Create services data in `src/lib/data/services.ts` with 4 services: Embroidery Digitizing (featured), Vector Art Conversion (featured), Custom Patches (featured), Logo Digitizing. Each with id, name, shortDescription, fullDescription, icon, benefits[], category, featured, order
- [ ] T015 [P] Create pricing data in `src/lib/data/pricing.ts` with 3 tiers: Standard ($15/design, 24-48h), Rush ($25/design, 12h, highlighted), Complex ($35/design, 48-72h). Each with features[], turnaround
- [ ] T016 [P] Create testimonials data in `src/lib/data/testimonials.ts` with 4 testimonials including customerName, company, quote, rating (4-5), featured status
- [ ] T017 [P] Create FAQ data in `src/lib/data/faq.ts` with 8+ questions covering: process (2), turnaround (2), formats (2), pricing (1), revisions (1). Each with id, question, answer, category, order
- [ ] T018 [P] Create process steps data in `src/lib/data/process-steps.ts` with 4 steps: Submit Artwork, Review Quote, Digitizing Process, Receive Files. Each with id, title, description, icon, order
- [ ] T019 Create data re-exports in `src/lib/data/index.ts` that exports all data from data files

### Utility Functions

- [ ] T020 [P] Create formatting helpers in `src/lib/utils/format.ts`: formatPrice(amount: number, currency?: string), formatPhone(phone: string)
- [ ] T021 [P] Create validation schemas in `src/lib/utils/validation.ts` using Zod: contactFormSchema with name (2-100 chars), email (valid), phone (optional), message (10-2000 chars)

### UI Components (Atoms)

- [ ] T022 [P] Create Button component in `src/components/ui/button.tsx` with variants (primary, secondary, outline, ghost), sizes (sm, md, lg), optional href for Link, loading state, fullWidth option. Use Tailwind classes for styling
- [ ] T023 [P] Create Badge component in `src/components/ui/badge.tsx` with variants (default, success, warning). Small rounded pill style
- [ ] T024 [P] Create Icon component in `src/components/ui/icon.tsx` using lucide-react icons. Props: name, size (sm=16, md=24, lg=32), className
- [ ] T025 Create Accordion component in `src/components/ui/accordion.tsx` with expandable items, allowMultiple option, animated expand/collapse with CSS transitions. Must be client component

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 6 - Navigate on Mobile Device (Priority: P2)

**Goal**: Implement responsive navigation that works on all devices (mobile, tablet, desktop)

**Independent Test**: Access site on mobile viewport (320px-768px), tap hamburger menu, verify all navigation links are accessible and menu closes on selection

**Why First**: Navigation is required by ALL other user stories. Must be complete before pages can be built.

### Layout Components

- [ ] T026 [P] [US6] Create Container component in `src/components/layout/container.tsx` with size variants (sm, md, lg, xl), max-w-7xl, centered, responsive padding
- [ ] T027 [P] [US6] Create MobileMenu component in `src/components/layout/mobile-menu.tsx` as client component with slide-out drawer, backdrop overlay, NavItem[] props, isOpen/onClose handlers, close on route change and click outside
- [ ] T028 [US6] Create Navbar component in `src/components/layout/navbar.tsx` with logo, desktop nav links (hidden below lg), hamburger button (visible below lg), integrate MobileMenu. Use site-config for nav items: Home, Services, Pricing, About, Contact, FAQ
- [ ] T029 [P] [US6] Create Footer component in `src/components/layout/footer.tsx` with 3-column layout on desktop (Company info, Quick Links, Contact), stack on mobile. Include copyright, social links from site-config
- [ ] T030 [US6] Create root layout in `src/app/layout.tsx` with html lang="en", body with Inter font, Navbar at top, main content area with min-h-screen, Footer at bottom. Include default metadata

**Checkpoint**: Navigation system complete - can test mobile menu independently

---

## Phase 4: User Story 1 - Discover Services and Build Trust (Priority: P1) - MVP

**Goal**: Homepage that communicates services, builds trust, and guides visitors to action

**Independent Test**: Visit homepage, verify headline visible in 5s, see service cards, trust signals above fold, clear CTA to contact

### Shared Section Components

- [ ] T031 [P] [US1] Create PageHero component in `src/components/sections/page-hero.tsx` with title, optional subtitle, gradient or image background, centered text
- [ ] T032 [P] [US1] Create CTABlock component in `src/components/sections/cta-block.tsx` with headline, optional description, ctaText, ctaHref, variant (primary with blue bg, secondary with light bg)

### Card Components

- [ ] T033 [P] [US1] Create ServiceCard component in `src/components/cards/service-card.tsx` with service prop, variant (compact for homepage, detailed for services page). Show icon, name, shortDescription, link to services. Hover effect
- [ ] T034 [P] [US1] Create TestimonialCard component in `src/components/cards/testimonial-card.tsx` with testimonial prop. Show quote in larger text, customer name, company, star rating. Card with subtle shadow
- [ ] T035 [P] [US1] Create ValueCard component in `src/components/cards/value-card.tsx` with title, description, icon props. Icon at top, centered text layout

### Homepage Section Components

- [ ] T036 [P] [US1] Create Hero component in `src/components/sections/hero.tsx` with headline "Professional Embroidery Digitizing Services", subheadline about quality and fast turnaround, primary CTA "Get a Quote" linking to /contact, optional secondary CTA "View Services" linking to /services. Full-width with gradient background
- [ ] T037 [P] [US1] Create TrustBar component in `src/components/sections/trust-bar.tsx` with TrustSignal[] prop, display as horizontal row on desktop, 3-column grid on mobile. Each signal shows icon, value, label
- [ ] T038 [P] [US1] Create ServiceGrid component in `src/components/sections/service-grid.tsx` with services prop, variant prop. Filter featured services for homepage, show all for services page. 3-4 column grid responsive
- [ ] T039 [US1] Create Testimonials component in `src/components/sections/testimonials.tsx` with testimonials prop. Section title "What Our Customers Say", grid of TestimonialCards (2-3 on desktop)

### Homepage

- [ ] T040 [US1] Create homepage in `src/app/page.tsx` with sections in order: Hero, TrustBar (using siteConfig.trustSignals), ServiceGrid (featured services), "Why Choose Us" section with 3 ValueCards (Fast Turnaround, Quality Guarantee, Expert Support), Testimonials (featured), CTABlock. Add metadata with title "EMB Digitizers | Professional Embroidery Digitizing Services"

**Checkpoint**: Homepage complete - User Story 1 independently testable. This is the MVP!

---

## Phase 5: User Story 2 - Understand Pricing Structure (Priority: P2)

**Goal**: Transparent pricing page that displays tiers clearly and encourages custom quote requests

**Independent Test**: Navigate to /pricing, see 3 pricing tiers with prices, features, turnaround times, and CTA for custom quotes

### Card Components

- [ ] T041 [P] [US2] Create PricingCard component in `src/components/cards/pricing-card.tsx` with tier prop. Display name, formatted price (using formatPrice), "starting at" if applicable, features list with checkmarks, turnaround time, CTA button. Highlighted tier gets border/shadow emphasis

### Section Components

- [ ] T042 [US2] Create PricingGrid component in `src/components/sections/pricing-grid.tsx` with tiers prop. 3-column grid on desktop, stack on mobile. Center highlighted tier

### Pricing Page

- [ ] T043 [US2] Create pricing page in `src/app/pricing/page.tsx` with PageHero (title "Simple, Transparent Pricing", subtitle about no hidden fees), PricingGrid with pricing data, info section about volume/custom pricing, CTABlock for custom quote requests. Add metadata

**Checkpoint**: Pricing page complete - User Story 2 independently testable

---

## Phase 6: User Story 3 - Submit an Inquiry (Priority: P1)

**Goal**: Functional contact form that validates input and sends email notifications

**Independent Test**: Navigate to /contact, fill form with valid data, submit, see success message. Try invalid data, see error messages

### Server Action

- [ ] T044 [US3] Create contact form server action in `src/app/actions/contact.ts` with "use server" directive. Validate input with contactFormSchema, send email via Resend to CONTACT_EMAIL, return { success: boolean, message: string, errors?: object }. Handle errors gracefully

### Form Components

- [ ] T045 [US3] Create ContactForm component in `src/components/forms/contact-form.tsx` as client component with "use client". Use react-hook-form with zodResolver, fields: name, email, phone (optional), message (textarea). Show field errors, loading state on submit, success/error messages. Call server action on submit

### Contact Page

- [ ] T046 [US3] Create contact page in `src/app/contact/page.tsx` with PageHero (title "Get in Touch", welcoming subtitle), two-column layout on desktop: ContactForm on left, ContactInfo on right (phone, email, hours from siteConfig, response time expectation "We respond within 24 hours"). Add metadata

**Checkpoint**: Contact form complete - User Story 3 independently testable

---

## Phase 7: User Story 4 - Learn About the Company (Priority: P3)

**Goal**: About page that builds trust through company story, metrics, and values

**Independent Test**: Navigate to /about, see company story, years in business, customer count, values/mission clearly displayed

### Card Components

- [ ] T047 [P] [US4] Create MetricCard component in `src/components/cards/metric-card.tsx` with label, value, optional icon props. Large value text, smaller label below, optional icon above

### About Page

- [ ] T048 [US4] Create about page in `src/app/about/page.tsx` with PageHero (title "About EMB Digitizers", company tagline), Our Story section (2-3 paragraphs about company background, experience, commitment), Trust Metrics row (3 MetricCards: 15+ Years, 10,000+ Customers, 50,000+ Designs), Our Values section (3 ValueCards: Quality First, Customer Focus, Fast Delivery), CTABlock. Add metadata

**Checkpoint**: About page complete - User Story 4 independently testable

---

## Phase 8: User Story 5 - Find Answers to Common Questions (Priority: P3)

**Goal**: FAQ page with expandable answers organized by category

**Independent Test**: Navigate to /faq, see 8+ questions, click question to expand answer, answer is clear and complete

### Section Components

- [ ] T049 [US5] Create FAQSection component in `src/components/sections/faq-section.tsx` with FAQItem[] prop, optional groupByCategory. Use Accordion component, display questions as accordion items

### FAQ Page

- [ ] T050 [US5] Create FAQ page in `src/app/faq/page.tsx` with PageHero (title "Frequently Asked Questions", subtitle), FAQSection with faq data, "Still Have Questions?" CTABlock linking to contact. Add metadata

**Checkpoint**: FAQ page complete - User Story 5 independently testable

---

## Phase 9: Services Page (Supports US1)

**Goal**: Detailed services page showing all offerings and process

**Independent Test**: Navigate to /services, see all services with detailed descriptions, benefits, and how-it-works process

### Components

- [ ] T051 [P] Create ProcessStep component in `src/components/sections/process-steps.tsx` with ProcessStep[] prop. Display steps as numbered timeline/flow. Icons, titles, descriptions. Connect with lines/arrows

### Services Page

- [ ] T052 Create services page in `src/app/services/page.tsx` with PageHero (title "Our Services", subtitle about quality digitizing), ServiceGrid (all services, detailed variant), ProcessSteps section (title "How It Works"), CTABlock. Add metadata

**Checkpoint**: Services page complete - enhances User Story 1

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Final touches that affect multiple user stories

- [ ] T053 [P] Create 404 page in `src/app/not-found.tsx` with friendly message "Page Not Found", description, Button to go home, show navigation options
- [ ] T054 [P] Add OpenGraph images metadata to all pages (can use placeholder og-image.jpg in public/)
- [ ] T055 [P] Create placeholder images: `public/images/hero-bg.jpg` (gradient or stock embroidery image), service icons in `public/images/services/`
- [ ] T056 Review all pages for responsive behavior at 320px, 768px, 1024px, 1440px breakpoints. Fix any overflow or readability issues
- [ ] T057 Verify keyboard navigation works on all interactive elements (buttons, links, accordion, mobile menu, form fields)
- [ ] T058 Run Lighthouse audit on homepage, fix any accessibility issues (color contrast, alt text, focus indicators)
- [ ] T059 Verify contact form works end-to-end (requires RESEND_API_KEY in .env.local)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **US6 Navigation (Phase 3)**: Depends on Foundational - BLOCKS all pages
- **US1 Homepage (Phase 4)**: Depends on Navigation
- **US2 Pricing (Phase 5)**: Depends on Navigation (can parallel with US1)
- **US3 Contact (Phase 6)**: Depends on Navigation (can parallel with US1, US2)
- **US4 About (Phase 7)**: Depends on Navigation (can parallel with US1-3)
- **US5 FAQ (Phase 8)**: Depends on Foundational Accordion component
- **Services (Phase 9)**: Depends on US1 components
- **Polish (Phase 10)**: Depends on all pages being complete

### User Story Dependencies

- **US6 Navigation (P2)**: Must complete first - provides Navbar/Footer for all pages
- **US1 Homepage (P1)**: Depends on US6 - MVP milestone
- **US2 Pricing (P2)**: Depends on US6 - can parallel with US1
- **US3 Contact (P1)**: Depends on US6 - critical conversion path
- **US4 About (P3)**: Depends on US6 - lower priority
- **US5 FAQ (P3)**: Depends on US6 - lower priority

### Within Each User Story

- Types before data
- Data before components
- Components before pages
- Shared components before page-specific components

### Parallel Opportunities

**Phase 2 (All types/data can run in parallel):**
```
T010, T011 (types)
T013, T014, T015, T016, T017, T018 (data)
T020, T021 (utils)
T022, T023, T024 (UI components)
```

**Phase 4 (Card/section components can run in parallel):**
```
T031, T032, T033, T034, T035, T036, T037, T038 (all [P])
```

**Phases 4-8 (After Navigation complete, pages can parallel):**
```
US1 Homepage, US2 Pricing, US3 Contact, US4 About, US5 FAQ
```

---

## Parallel Example: Phase 2 Foundation

```bash
# All types in parallel:
T010: Create entity interfaces in src/lib/types/entities.ts
T011: Create component prop interfaces in src/lib/types/components.ts

# All data in parallel (after types):
T013: Create site configuration in src/lib/data/site-config.ts
T014: Create services data in src/lib/data/services.ts
T015: Create pricing data in src/lib/data/pricing.ts
T016: Create testimonials data in src/lib/data/testimonials.ts
T017: Create FAQ data in src/lib/data/faq.ts
T018: Create process steps data in src/lib/data/process-steps.ts

# All UI components in parallel:
T022: Create Button component
T023: Create Badge component
T024: Create Icon component
```

---

## Implementation Strategy

### MVP First (User Stories 6 + 1 + 3)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: Navigation (US6)
4. Complete Phase 4: Homepage (US1)
5. Complete Phase 6: Contact Form (US3)
6. **STOP and VALIDATE**: Test homepage and contact flow
7. Deploy MVP!

### Incremental Delivery

1. Setup + Foundational + Navigation → Site skeleton ready
2. Add Homepage (US1) → MVP with service discovery
3. Add Contact (US3) → Conversion enabled
4. Add Pricing (US2) → Lead qualification
5. Add About (US4) → Trust building
6. Add FAQ (US5) → Self-service support
7. Add Services details → Complete information
8. Polish → Production ready

### Suggested MVP Scope

**Minimum for launch**: Phases 1-4 + Phase 6 (Setup, Foundation, Navigation, Homepage, Contact)

This delivers:
- Professional homepage with services and trust signals
- Working contact form for lead generation
- Mobile-responsive navigation
- Approximately 35 tasks to MVP

---

## Summary

| Phase | User Story | Tasks | Parallelizable |
| ----- | ---------- | ----- | -------------- |
| 1 | Setup | 9 | 6 |
| 2 | Foundational | 16 | 14 |
| 3 | US6 Navigation | 5 | 3 |
| 4 | US1 Homepage | 10 | 8 |
| 5 | US2 Pricing | 3 | 1 |
| 6 | US3 Contact | 3 | 0 |
| 7 | US4 About | 2 | 1 |
| 8 | US5 FAQ | 2 | 0 |
| 9 | Services | 2 | 1 |
| 10 | Polish | 7 | 4 |
| **Total** | | **59** | **38** |

---

## Notes

- All tasks include exact file paths for Claude Code execution
- [P] tasks can run in parallel when executing with multiple agents
- Each user story has independent test criteria
- Checkpoint after each story allows validation before proceeding
- Types and data are foundational - complete before any components
- Navigation must complete before any pages can be built
- Contact form requires RESEND_API_KEY environment variable to test email
