'use client';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import type { CTABlockProps } from '@/lib/types';

const variantClasses = {
  primary: 'bg-primary-950',
  secondary: 'bg-neutral-200',
};

const textClasses = {
  primary: 'text-neutral-50',
  secondary: 'text-primary-950',
};

const descriptionClasses = {
  primary: 'text-neutral-300',
  secondary: 'text-primary-700',
};

export function CTABlock({
  headline,
  description,
  ctaText,
  ctaHref,
  variant = 'primary',
  className = '',
}: CTABlockProps) {
  return (
    <section className={`relative py-16 md:py-20 overflow-hidden ${variantClasses[variant]} ${className}`}>
      {/* Gradient mesh background for primary variant */}
      {variant === 'primary' && (
        <>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(at 27% 37%, rgba(255, 253, 242, 0.15) 0px, transparent 50%),
                radial-gradient(at 97% 21%, rgba(255, 253, 242, 0.1) 0px, transparent 50%),
                radial-gradient(at 52% 99%, rgba(255, 253, 242, 0.08) 0px, transparent 50%)
              `
            }}
          />

          {/* Animated decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#FFFDF2"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5,5"
                className="animate-spin"
                style={{ animationDuration: '20s' }}
              />
            </svg>
          </div>

          <div className="absolute bottom-10 right-10 w-40 h-40 opacity-10">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 20 50 Q 50 20, 80 50 T 140 50"
                stroke="#FFFDF2"
                strokeWidth="2"
                fill="none"
                strokeDasharray="3,3"
              />
            </svg>
          </div>
        </>
      )}

      {/* Pattern for secondary variant */}
      {variant === 'secondary' && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='1'%3E%3Cpath d='M0 20 L8 20 M12 20 L28 20 M32 20 L40 20'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
      )}

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* Headline with animation */}
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 animate-fade-in-up ${textClasses[variant]}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {headline}
          </h2>

          {description && (
            <p
              className={`text-lg mb-8 leading-relaxed animate-fade-in-up ${descriptionClasses[variant]}`}
              style={{ animationDelay: '0.1s' }}
            >
              {description}
            </p>
          )}

          {/* Button with animation */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button
              href={ctaHref}
              variant={variant === 'primary' ? 'outline' : 'primary'}
              size="lg"
              className={variant === 'primary' ? 'border-neutral-50 text-neutral-50 hover:bg-neutral-50 hover:text-primary-950 transition-all duration-300 hover:scale-105' : 'transition-all duration-300 hover:scale-105'}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
