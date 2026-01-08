# Research: Phase 1 Website Implementation

**Feature**: 001-phase1-website
**Date**: 2025-12-30
**Status**: Complete

---

## 1. Framework & Runtime

### Decision: Next.js 14+ with App Router

**Rationale**:
- App Router provides Server Components by default (better performance, SEO)
- Built-in file-based routing matches page structure
- Native TypeScript support
- Excellent static site generation (SSG) for marketing pages
- React Server Components reduce client-side JavaScript

**Alternatives Considered**:
- Remix: Strong forms handling but less ecosystem support
- Astro: Great for static sites but less React ecosystem integration
- Plain React + Vite: Requires manual SSR/SSG setup

---

## 2. Styling Approach

### Decision: Tailwind CSS v3.4+

**Rationale**:
- Utility-first approach enables rapid UI development
- Mobile-first responsive design built-in
- No CSS-in-JS runtime overhead
- Consistent design tokens (spacing, colors, typography)
- Excellent purging reduces bundle size

**Alternatives Considered**:
- CSS Modules: More isolated but slower development
- Styled Components: Runtime overhead, less performant
- Plain CSS: Harder to maintain consistency

---

## 3. Form Handling

### Decision: React Hook Form + Server Actions

**Rationale**:
- React Hook Form provides excellent validation UX
- Server Actions (Next.js 14+) enable form submission without API routes
- No additional state management library needed
- Built-in form validation with Zod integration

**Alternatives Considered**:
- Formik: Heavier, more boilerplate
- Plain useState: Manual validation logic needed
- API Routes: Additional endpoint to maintain

---

## 4. Email/Contact Form Submission

### Decision: Server Action with Email Service Integration

**Rationale**:
- Server Actions keep form logic server-side
- Phase 1: Use Resend or SendGrid for email delivery
- Can swap email provider without frontend changes
- Environment variables for API keys (secure)

**Implementation Approach**:
```
Contact Form → Server Action → Email Service API → Business Email
```

**Alternatives Considered**:
- Formspree/Netlify Forms: Less control, potential vendor lock-in
- Custom SMTP: More complex setup, deliverability issues
- AWS SES: Overkill for Phase 1 volume

---

## 5. Data Layer

### Decision: Static Data with TypeScript Interfaces

**Rationale**:
- Phase 1 has no dynamic content requirements
- Data defined in `/lib/data/` as TypeScript constants
- Type-safe with shared interfaces
- Easy to migrate to CMS/database in Phase 2

**Data Structure**:
```
/lib/data/
├── services.ts      # Service offerings
├── pricing.ts       # Pricing tiers
├── testimonials.ts  # Customer reviews
├── faq.ts           # FAQ items
└── site-config.ts   # Site metadata, contact info
```

**Alternatives Considered**:
- Headless CMS (Contentful, Sanity): Overkill for Phase 1
- Database: Unnecessary complexity for static content
- JSON files: Less type safety than TypeScript

---

## 6. Image Handling

### Decision: Next.js Image Component + Public Directory

**Rationale**:
- `next/image` provides automatic optimization
- WebP/AVIF format conversion
- Lazy loading built-in
- Responsive images with srcSet
- Images stored in `/public/images/`

**Alternatives Considered**:
- Cloudinary: Additional service to manage
- imgix: Cost for low-volume site
- Raw img tags: No optimization

---

## 7. SEO Implementation

### Decision: Next.js Metadata API

**Rationale**:
- App Router provides native metadata export
- Per-page metadata configuration
- OpenGraph and Twitter cards built-in
- Automatic sitemap generation possible

**Implementation**:
- Each page exports `metadata` object
- Shared defaults in layout
- Dynamic metadata for future content

---

## 8. Component Architecture

### Decision: Atomic Design Pattern (Simplified)

**Rationale**:
- Clear separation: UI (atoms) → Sections → Pages
- Reusable across multiple pages
- Easy to test in isolation
- Clear props contracts

**Structure**:
```
/components/
├── ui/              # Atoms: Button, Badge, Icon
├── layout/          # Navbar, Footer, Container
├── sections/        # Hero, ServiceGrid, CTABlock
└── forms/           # ContactForm, FormField
```

---

## 9. Mobile Navigation

### Decision: Client Component with useState

**Rationale**:
- Mobile menu requires client-side state
- Simple open/close state, no external library needed
- AnimatePresence (framer-motion) optional for smooth transitions

**Implementation**:
- Navbar as Server Component
- MobileMenu as Client Component (use client directive)
- Hamburger icon toggles menu visibility

---

## 10. Accessibility

### Decision: Native HTML + ARIA where needed

**Rationale**:
- Semantic HTML first (nav, main, section, article)
- ARIA only when HTML semantics insufficient
- Focus management for mobile menu
- Skip links for keyboard users

**Key Requirements**:
- Color contrast WCAG AA (4.5:1 for text)
- Focus indicators visible
- Form labels associated with inputs
- Alt text for all images

---

## 11. Performance Targets

### Decision: Core Web Vitals Optimization

**Targets**:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Strategies**:
- Server Components reduce client JS
- Image optimization via next/image
- Font optimization with next/font
- Static generation for all pages

---

## 12. Testing Strategy

### Decision: Vitest + Testing Library + Playwright

**Rationale**:
- Vitest: Fast, Vite-compatible, ESM native
- Testing Library: Component testing best practices
- Playwright: E2E testing for critical paths

**Coverage Priorities (Phase 1)**:
1. Contact form validation and submission
2. Mobile navigation functionality
3. Page accessibility checks
4. Cross-browser rendering

---

## 13. Deployment

### Decision: Vercel (Recommended) or Static Export

**Rationale**:
- Vercel: Zero-config Next.js deployment
- Edge functions for Server Actions
- Automatic preview deployments
- CDN distribution

**Alternative**: Static export to any hosting
- `output: 'export'` in next.config.js
- Deploy to Netlify, Cloudflare Pages, or traditional hosting

---

## 14. Future Phase Considerations

### Phase 2 Preparation
- `/orders` route placeholder (empty page with "Coming Soon")
- Data interfaces designed for CMS migration
- Contact form structure supports file uploads later

### Phase 3 Preparation
- `/auth` route placeholder
- User type interfaces defined
- API route structure planned

---

## Summary of Technical Decisions

| Area | Decision | Why |
| ---- | -------- | --- |
| Framework | Next.js 14+ App Router | SSG, Server Components, SEO |
| Styling | Tailwind CSS v3.4+ | Utility-first, mobile-first |
| Forms | React Hook Form + Server Actions | No extra state management |
| Email | Server Action + Resend/SendGrid | Simple, secure, swappable |
| Data | Static TypeScript constants | Type-safe, simple migration |
| Images | next/image + public/ | Auto-optimization |
| SEO | Metadata API | Native, per-page config |
| Components | Atomic Design (simplified) | Reusable, testable |
| Testing | Vitest + Testing Library + Playwright | Fast, comprehensive |
| Deploy | Vercel or static export | Zero-config, CDN |

---

## Unresolved Items

None - all technical decisions resolved for Phase 1.
