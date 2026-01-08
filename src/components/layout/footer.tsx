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
    <footer className="bg-primary-950 text-neutral-50">
      <Container>
        <div className="py-12 lg:py-16">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Company info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-50">
                {siteConfig.businessName}
              </h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                {siteConfig.tagline}. Quality embroidery digitizing services
                with fast turnaround and expert support.
              </p>
              {/* Social links */}
              <div className="flex space-x-4">
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
                      className="text-neutral-400 hover:text-neutral-50 transition-colors"
                      aria-label={`Follow us on ${platform}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-50">Quick Links</h3>
              <ul className="space-y-2">
                {siteConfig.navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-neutral-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-50">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-neutral-300 hover:text-neutral-50 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                    className="text-neutral-300 hover:text-neutral-50 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-300">{siteConfig.contact.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-primary-800">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-neutral-400 text-sm">
                &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-neutral-400 hover:text-neutral-50 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-neutral-400 hover:text-neutral-50 transition-colors"
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
