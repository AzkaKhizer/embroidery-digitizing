'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from './mobile-menu';
import { siteConfig } from '@/lib/data';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-xl shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-all duration-300 hover:opacity-80"
          >
            {/* Logo mark */}
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors duration-300 ${
              isScrolled ? 'bg-charcoal' : 'bg-copper'
            }`}>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L12 22M2 12L22 12M6 6L18 18M18 6L6 18" className={isScrolled ? 'stroke-ivory' : 'stroke-charcoal'} />
              </svg>
            </div>
            <div>
              <span className={`block font-display text-xl font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-charcoal' : 'text-ivory'
              }`}>
                EMB Digitizers
              </span>
              <span className={`block text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                isScrolled ? 'text-charcoal/60' : 'text-ivory/60'
              }`}>
                Precision Embroidery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 group ${
                    isScrolled
                      ? isActive
                        ? 'text-copper'
                        : 'text-charcoal/70 hover:text-charcoal'
                      : isActive
                        ? 'text-copper'
                        : 'text-ivory/70 hover:text-ivory'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-0.5 bg-copper transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className={`ml-6 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                isScrolled
                  ? 'bg-charcoal text-ivory hover:bg-copper hover:shadow-copper'
                  : 'bg-copper text-charcoal hover:bg-copper-light hover:shadow-copper'
              } hover:-translate-y-0.5`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={openMobileMenu}
            className={`lg:hidden p-2 rounded-sm transition-all duration-300 ${
              isScrolled
                ? 'text-charcoal hover:bg-charcoal/10'
                : 'text-ivory hover:bg-ivory/10'
            }`}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        navItems={siteConfig.navItems}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </header>
  );
}
