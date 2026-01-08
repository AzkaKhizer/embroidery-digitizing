import { Container } from '@/components/layout/container';
import { ServiceCard } from '@/components/cards/service-card';
import type { ServiceGridProps } from '@/lib/types';

export function ServiceGrid({
  services,
  variant = 'compact',
  className = '',
}: ServiceGridProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600">
            From simple logos to complex designs, we transform your artwork into
            high-quality embroidery files.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              variant={variant}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
