'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { MobileMenu } from './mobile-menu';
import { siteConfig } from '@/lib/data';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-30 bg-neutral-50/80 backdrop-blur-premium border-b border-neutral-200/50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with subtle hover effect */}
          <Link href="/" className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
            <Image
              src="/images/logo.svg"
              alt={siteConfig.businessName}
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative text-sm font-medium transition-colors duration-200
                    ${isActive ? 'text-primary-950' : 'text-primary-700 hover:text-primary-950'}
                    after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px]
                    after:bg-primary-950 after:origin-left
                    ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
                    after:transition-transform after:duration-300 after:ease-out
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="inline-block py-1">{item.label}</span>
                </Link>
              );
            })}

            {/* Desktop CTA with enhanced styling */}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 text-sm font-semibold text-neutral-50 bg-primary-950 hover:bg-primary-800 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={openMobileMenu}
            className="lg:hidden p-2 text-primary-700 hover:text-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg transition-all duration-200 hover:bg-neutral-100"
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
