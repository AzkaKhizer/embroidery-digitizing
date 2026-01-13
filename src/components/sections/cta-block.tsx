'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { ArrowRight } from 'lucide-react';
import type { CTABlockProps } from '@/lib/types';

export function CTABlock({
  headline,
  description,
  ctaText,
  ctaHref,
  variant = 'primary',
  className = '',
}: CTABlockProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isPrimary = variant === 'primary';

  return (
    <section
      className={`relative py-24 md:py-32 overflow-hidden ${
        isPrimary ? 'bg-charcoal' : 'bg-ivory-dark'
      } ${className}`}
    >
      {/* Background effects for primary variant */}
      {isPrimary && (
        <>
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 60% 50% at 70% 50%, rgba(193, 127, 89, 0.2) 0%, transparent 50%),
                radial-gradient(ellipse 40% 40% at 30% 70%, rgba(212, 165, 116, 0.1) 0%, transparent 50%)
              `,
            }}
          />

          {/* Stitch pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h10M15 30h30M50 30h10' stroke='%23C17F59' stroke-width='1' fill='none' opacity='0.4' stroke-dasharray='2,4'/%3E%3Cpath d='M30 0v10M30 15v30M30 50v10' stroke='%23C17F59' stroke-width='1' fill='none' opacity='0.4' stroke-dasharray='2,4'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Decorative lines */}
          <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-copper/40 to-transparent" />
          <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-copper/40 to-transparent" />
        </>
      )}

      {/* Secondary variant decorations */}
      {!isPrimary && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h10M15 30h30M50 30h10' stroke='%230D0D0D' stroke-width='1' fill='none' opacity='0.1' stroke-dasharray='2,4'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      )}

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Accent line */}
          <div
            className={`w-12 h-1 mx-auto mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } ${isPrimary ? 'bg-copper' : 'bg-charcoal'}`}
          />

          {/* Headline */}
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isPrimary ? 'text-ivory' : 'text-charcoal'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            {headline}
          </h2>

          {/* Description */}
          {description && (
            <p
              className={`text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${isPrimary ? 'text-ivory/70' : 'text-charcoal/70'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              {description}
            </p>
          )}

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <Link
              href={ctaHref}
              className={`group inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 hover:-translate-y-1 ${
                isPrimary
                  ? 'bg-copper text-charcoal hover:bg-copper-light hover:shadow-copper-lg'
                  : 'bg-charcoal text-ivory hover:bg-copper hover:shadow-copper'
              }`}
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
