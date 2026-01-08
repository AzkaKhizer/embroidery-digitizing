import type { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
  businessName: 'EMB Digitizers',
  tagline: 'Professional Embroidery Digitizing Services',
  description:
    'Transform your artwork into stunning embroidery designs. Fast turnaround, expert quality, and affordable pricing.',
  contact: {
    email: 'contact@embdigitizers.com',
    phone: '+1 (555) 123-4567',
    hours: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
  },
  social: {
    facebook: 'https://facebook.com/embdigitizers',
    instagram: 'https://instagram.com/embdigitizers',
    twitter: 'https://twitter.com/embdigitizers',
    linkedin: 'https://linkedin.com/company/embdigitizers',
  },
  trustSignals: [
    {
      id: 'years',
      icon: 'Award',
      value: '15+',
      label: 'Years Experience',
    },
    {
      id: 'customers',
      icon: 'Users',
      value: '10,000+',
      label: 'Customers Served',
    },
    {
      id: 'guarantee',
      icon: 'Shield',
      value: '100%',
      label: 'Quality Guarantee',
    },
  ],
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
};
