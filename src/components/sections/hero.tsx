'use client';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import type { HeroProps } from '@/lib/types';

export function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  className = '',
}: HeroProps) {
  return (
    <section
      className={`relative bg-primary-950 py-20 md:py-28 lg:py-32 overflow-hidden ${className}`}
    >
      {/* Gradient mesh background overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 27% 37%, rgba(255, 253, 242, 0.15) 0px, transparent 50%),
            radial-gradient(at 97% 21%, rgba(255, 253, 242, 0.1) 0px, transparent 50%),
            radial-gradient(at 52% 99%, rgba(255, 253, 242, 0.08) 0px, transparent 50%),
            radial-gradient(at 10% 29%, rgba(255, 253, 242, 0.12) 0px, transparent 50%)
          `
        }}
      />

      {/* Stitch pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFDF2' stroke-width='1'%3E%3Cpath d='M0 20 L8 20 M12 20 L28 20 M32 20 L40 20'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative floating thread accent - top right */}
      <div
        className="absolute top-20 right-10 w-64 h-64 opacity-10 animate-float hidden md:block"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 20 100 Q 60 40, 100 100 T 180 100"
            stroke="#FFFDF2"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
          />
          <circle cx="20" cy="100" r="4" fill="#FFFDF2" />
          <circle cx="180" cy="100" r="4" fill="#FFFDF2" />
        </svg>
      </div>

      {/* Decorative floating thread accent - bottom left */}
      <div
        className="absolute bottom-20 left-10 w-48 h-48 opacity-10 animate-float hidden md:block"
        style={{ animationDelay: '3s' }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 180 100 Q 140 160, 100 100 T 20 100"
            stroke="#FFFDF2"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline with fade-in animation */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50 mb-6 leading-tight animate-fade-in-up"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {headline}
          </h1>

          {/* Subheadline with delayed animation */}
          <p
            className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            {subheadline}
          </p>

          {/* CTAs with delayed animation */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button href={primaryCta.href} variant="outline" size="lg" className="border-neutral-50 text-neutral-50 hover:bg-neutral-50 hover:text-primary-950 transition-all duration-300 hover:scale-105">
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="ghost" size="lg" className="text-neutral-50 hover:bg-neutral-50/10 transition-all duration-300">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
