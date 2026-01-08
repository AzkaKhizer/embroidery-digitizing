'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'lucide-react';
import type { MobileMenuProps } from '@/lib/types';

export function MobileMenu({ navItems, isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <div
        className="fixed inset-y-0 right-0 w-64 bg-neutral-50 shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200">
            <span className="text-lg font-semibold text-primary-950">Menu</span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-primary-600 hover:text-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-100 text-primary-950'
                          : 'text-primary-700 hover:bg-primary-100 hover:text-primary-950'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="p-4 border-t border-neutral-200">
            <Link
              href="/contact"
              className="block w-full px-4 py-3 text-center text-neutral-50 bg-primary-950 hover:bg-primary-800 rounded-lg font-semibold transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
