'use client';

import { Container } from '@/components/layout/container';
import type { PageHeroProps } from '@/lib/types';

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  className = '',
}: PageHeroProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section
      className={`relative bg-primary-950 py-16 md:py-24 overflow-hidden ${className}`}
      style={backgroundStyle}
    >
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(255, 253, 242, 0.12) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(255, 253, 242, 0.08) 0px, transparent 50%)
          `
        }}
      />

      {/* Stitch pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFDF2' stroke-width='1'%3E%3Cpath d='M0 20 L8 20 M12 20 L28 20 M32 20 L40 20'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50 mb-4 animate-fade-in-up"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-lg md:text-xl text-neutral-300 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.15s' }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
