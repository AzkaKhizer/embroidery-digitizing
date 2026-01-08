# Quickstart Guide: Phase 1 Website

**Feature**: 001-phase1-website
**Date**: 2025-12-30

---

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ or pnpm 8+
- Git

---

## Initial Setup

### 1. Create Next.js Project

```bash
npx create-next-app@latest embdigitizers --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd embdigitizers
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install zod react-hook-form @hookform/resolvers

# Email service (choose one)
npm install resend
# OR
npm install @sendgrid/mail

# Development dependencies
npm install -D @types/node vitest @testing-library/react @testing-library/jest-dom
```

### 3. Environment Setup

Create `.env.local`:

```env
# Email Configuration
RESEND_API_KEY=re_xxxx
CONTACT_EMAIL=contact@embdigitizers.com

# Site URL (for metadata)
NEXT_PUBLIC_SITE_URL=https://embdigitizers.com
```

---

## Project Structure

```
embdigitizers/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with Navbar/Footer
│   │   ├── page.tsx             # Home page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── not-found.tsx        # 404 page
│   │   └── actions/
│   │       └── contact.ts       # Server Action
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── icon.tsx
│   │   │   └── accordion.tsx
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── container.tsx
│   │   │   └── mobile-menu.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── trust-bar.tsx
│   │   │   ├── service-grid.tsx
│   │   │   ├── pricing-grid.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── faq-section.tsx
│   │   │   ├── process-steps.tsx
│   │   │   └── cta-block.tsx
│   │   ├── cards/
│   │   │   ├── service-card.tsx
│   │   │   ├── pricing-card.tsx
│   │   │   ├── testimonial-card.tsx
│   │   │   ├── metric-card.tsx
│   │   │   └── value-card.tsx
│   │   └── forms/
│   │       └── contact-form.tsx
│   ├── lib/
│   │   ├── data/
│   │   │   ├── services.ts
│   │   │   ├── pricing.ts
│   │   │   ├── testimonials.ts
│   │   │   ├── faq.ts
│   │   │   ├── process-steps.ts
│   │   │   └── site-config.ts
│   │   ├── types/
│   │   │   ├── index.ts
│   │   │   ├── entities.ts
│   │   │   └── components.ts
│   │   └── utils/
│   │       ├── format.ts
│   │       └── validation.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   └── services/
│   └── favicon.ico
├── tests/
│   ├── components/
│   └── e2e/
├── .env.local
├── .env.example
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Tailwind Configuration

Update `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
        secondary: {
          500: "#f97316",
          600: "#ea580c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Build Order

### Phase 1A: Foundation (Implement First)

1. **Types & Data** (`/lib/types/`, `/lib/data/`)
2. **UI Components** (`/components/ui/`)
3. **Layout Components** (`/components/layout/`)
4. **Root Layout** (`/app/layout.tsx`)

### Phase 1B: Core Pages

5. **Home Page** (`/app/page.tsx`)
6. **Services Page** (`/app/services/`)
7. **Pricing Page** (`/app/pricing/`)

### Phase 1C: Supporting Pages

8. **About Page** (`/app/about/`)
9. **Contact Page** (`/app/contact/`)
10. **FAQ Page** (`/app/faq/`)

### Phase 1D: Polish

11. **404 Page** (`/app/not-found.tsx`)
12. **SEO Metadata** (per-page)
13. **Testing** (critical paths)

---

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

---

## Deployment (Vercel)

### Option 1: Vercel Dashboard

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables
4. Deploy

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Static Export (Alternative)

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
```

Then deploy `/out` folder to any static host.

---

## Testing Checklist

Before deployment:

- [ ] All pages render without errors
- [ ] Mobile navigation works
- [ ] Contact form validates correctly
- [ ] Contact form submits successfully
- [ ] All links work
- [ ] Images load with alt text
- [ ] Responsive on mobile (320px+)
- [ ] Accessibility: keyboard navigation
- [ ] Lighthouse score 90+ (Performance, SEO, Accessibility)

---

## Common Issues

### Images not showing in production

Use `next/image` with explicit width/height or fill mode.

### Contact form not working

Check `RESEND_API_KEY` environment variable is set.

### Mobile menu not closing

Ensure click-outside handler is implemented.

### Styles not applying

Verify Tailwind content paths in config.

---

## Next Steps After Phase 1

1. Add analytics (Google Analytics, Plausible)
2. Set up monitoring (Vercel Analytics, Sentry)
3. Plan Phase 2 features (order uploads)
4. Gather user feedback
