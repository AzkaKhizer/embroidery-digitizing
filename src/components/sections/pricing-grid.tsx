import { Container } from '@/components/layout/container';
import { PricingCard } from '@/components/cards/pricing-card';
import type { PricingGridProps } from '@/lib/types';

export function PricingGrid({ tiers, className = '' }: PricingGridProps) {
  // Sort tiers by order and find the highlighted one
  const sortedTiers = [...tiers].sort((a, b) => a.order - b.order);

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {sortedTiers.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              className={tier.highlighted ? 'md:-mt-4 md:mb-4' : ''}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
