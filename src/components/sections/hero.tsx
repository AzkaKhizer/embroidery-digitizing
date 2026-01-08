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
      <div className="absolute inset-0 gradient-mesh opacity-60" />

      {/* Enhanced stitch pattern background */}
      <div className="absolute inset-0 pattern-stitch opacity-10" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 texture-noise" />

      {/* Decorative floating thread accent - top right */}
      <div
        className="absolute top-20 right-10 w-64 h-64 opacity-5 animate-float"
        style={{ animationDelay: '0s' }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 50 50 Q 100 20, 150 50 T 250 50"
            stroke="#FFFDF2"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Decorative floating thread accent - bottom left */}
      <div
        className="absolute bottom-20 left-10 w-48 h-48 opacity-5 animate-float"
        style={{ animationDelay: '2s' }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 150 150 Q 100 180, 50 150 T -50 150"
            stroke="#FFFDF2"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline with staggered fade-in animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50 mb-6 leading-tight opacity-0 animate-fade-in-up">
            {headline}
          </h1>

          {/* Subheadline with delayed animation */}
          <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-200">
            {subheadline}
          </p>

          {/* CTAs with delayed animation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
            <Button href={primaryCta.href} variant="outline" size="lg" className="border-neutral-50 text-neutral-50 hover:bg-neutral-50 hover:text-primary-950">
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="ghost" size="lg" className="text-neutral-50 hover:bg-neutral-50/10">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
