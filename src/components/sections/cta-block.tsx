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
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="absolute inset-0 texture-noise" />

          {/* Animated decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 opacity-5">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="#FFFDF2" strokeWidth="1" fill="none" strokeDasharray="5,5" className="animate-spin" style={{ animationDuration: '20s' }} />
            </svg>
          </div>

          <div className="absolute bottom-10 right-10 w-40 h-40 opacity-5">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20 50 Q 50 20, 80 50 T 140 50" stroke="#FFFDF2" strokeWidth="2" fill="none" strokeDasharray="3,3" />
            </svg>
          </div>
        </>
      )}

      {/* Pattern for secondary variant */}
      {variant === 'secondary' && (
        <div className="absolute inset-0 pattern-stitch opacity-20" />
      )}

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* Headline with animation */}
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 opacity-0 animate-fade-in-up ${textClasses[variant]}`}
          >
            {headline}
          </h2>

          {description && (
            <p
              className={`text-lg mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-100 ${descriptionClasses[variant]}`}
            >
              {description}
            </p>
          )}

          {/* Button with animation */}
          <div className="opacity-0 animate-fade-in-up delay-200">
            <Button
              href={ctaHref}
              variant={variant === 'primary' ? 'outline' : 'primary'}
              size="lg"
              className={variant === 'primary' ? 'border-neutral-50 text-neutral-50 hover:bg-neutral-50 hover:text-primary-950' : ''}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
