import Link from 'next/link';
import { Mail, Phone, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Container } from './container';
import { siteConfig } from '@/lib/data';

const socialIcons: Record<string, typeof Facebook> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-ivory overflow-hidden">
      {/* Decorative stitch pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h10M15 30h30M50 30h10' stroke='%23C17F59' stroke-width='1' fill='none' opacity='0.3' stroke-dasharray='2,4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative">
        <div className="py-16 lg:py-20">
          {/* Top accent line */}
          <div className="w-16 h-1 bg-copper mb-12" />

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Company info */}
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-ivory">
                {siteConfig.businessName}
              </h3>
              <p className="text-ivory/60 mb-6 leading-relaxed">
                {siteConfig.tagline}. Quality embroidery digitizing services
                with fast turnaround and expert support.
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                {Object.entries(siteConfig.social).map(([platform, url]) => {
                  if (!url) return null;
                  const IconComponent = socialIcons[platform];
                  if (!IconComponent) return null;

                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-sm bg-charcoal-light flex items-center justify-center text-ivory/60 hover:bg-copper hover:text-charcoal transition-all duration-300"
                      aria-label={`Follow us on ${platform}`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6 text-ivory">Quick Links</h3>
              <ul className="space-y-3">
                {siteConfig.navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-ivory/60 hover:text-copper transition-colors duration-300"
                    >
                      <span className="w-0 h-px bg-copper mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6 text-ivory">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-3 text-ivory/60 hover:text-copper transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-sm bg-charcoal-light flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="pt-1">{siteConfig.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                    className="flex items-start gap-3 text-ivory/60 hover:text-copper transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-sm bg-charcoal-light flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="pt-1">{siteConfig.contact.phone}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-ivory/60">
                  <div className="w-8 h-8 rounded-sm bg-charcoal-light flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span className="pt-1">{siteConfig.contact.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-ivory/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-ivory/40 text-sm">
                &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
              </p>
              <div className="flex gap-8 text-sm">
                <Link
                  href="/privacy"
                  className="text-ivory/40 hover:text-copper transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-ivory/40 hover:text-copper transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
