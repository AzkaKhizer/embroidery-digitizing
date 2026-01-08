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
      className={`bg-primary-950 py-16 md:py-24 ${className}`}
      style={backgroundStyle}
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
