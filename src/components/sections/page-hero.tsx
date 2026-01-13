'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/layout/container';
import type { PageHeroProps } from '@/lib/types';

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  className = '',
}: PageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(193, 127, 89, 0.15) 0%, transparent 60%)
          `,
        }}
      />

      {/* Stitch pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h10M15 30h30M50 30h10' stroke='%23C17F59' stroke-width='1' fill='none' opacity='0.3' stroke-dasharray='2,4'/%3E%3Cpath d='M30 0v10M30 15v30M30 50v10' stroke='%23C17F59' stroke-width='1' fill='none' opacity='0.3' stroke-dasharray='2,4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-24 h-px bg-gradient-to-r from-copper/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-24 h-px bg-gradient-to-l from-copper/50 to-transparent" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Accent line */}
          <div
            className={`w-12 h-1 bg-copper mx-auto mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />

          {/* Title */}
          <h1
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`text-lg md:text-xl text-ivory/70 leading-relaxed transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </Container>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
