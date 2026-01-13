'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { ArrowRight } from 'lucide-react';
import type { HeroProps } from '@/lib/types';

export function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  className = '',
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`relative min-h-[75vh] flex items-center overflow-hidden pt-20 pb-40 ${className}`}>
      {/* Dark charcoal background */}
      <div className="absolute inset-0 bg-charcoal" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(193, 127, 89, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(212, 165, 116, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Stitch pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h10M15 30h30M50 30h10' stroke='%23C17F59' stroke-width='1' fill='none' opacity='0.3' stroke-dasharray='2,4'/%3E%3Cpath d='M30 0v10M30 15v30M30 50v10' stroke='%23C17F59' stroke-width='1' fill='none' opacity='0.3' stroke-dasharray='2,4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative thread line - left */}
      <div className="absolute left-0 top-1/4 w-48 h-px bg-gradient-to-r from-copper/60 to-transparent" />
      <div className="absolute left-0 top-1/4 translate-y-2 w-32 h-px bg-gradient-to-r from-copper/30 to-transparent" />

      {/* Decorative thread line - right */}
      <div className="absolute right-0 bottom-1/3 w-64 h-px bg-gradient-to-l from-copper/60 to-transparent" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-20 animate-float hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#C17F59" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" stroke="#D4A574" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-32 left-16 w-24 h-24 opacity-15 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50 Q50 20 80 50 Q50 80 20 50" stroke="#C17F59" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Accent line */}
          <div
            className={`w-16 h-1 bg-copper mb-8 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          />

          {/* Headline */}
          <h1
            className={`font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-ivory leading-[1.1] mb-6 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-ivory/70 leading-relaxed max-w-2xl mb-10 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {subheadline}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-copper text-charcoal font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-copper-light hover:shadow-copper hover:-translate-y-1"
            >
              {primaryCta.text}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-ivory/30 text-ivory font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 hover:border-copper hover:text-copper hover:-translate-y-1"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-16 pt-8 border-t border-ivory/10 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="flex flex-wrap items-center gap-12 md:gap-16 text-sm text-ivory/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper" />
                <span>24-Hour Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper" />
                <span>Unlimited Revisions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper" />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
