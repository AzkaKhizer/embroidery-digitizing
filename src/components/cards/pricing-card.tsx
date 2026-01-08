import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';
import type { PricingCardProps } from '@/lib/types';

export function PricingCard({ tier, className = '' }: PricingCardProps) {
  return (
    <div
      className={`relative bg-neutral-100 rounded-xl p-6 md:p-8 ${
        tier.highlighted
          ? 'border-2 border-primary-950 shadow-xl ring-4 ring-primary-100'
          : 'border border-neutral-200 shadow-md'
      } ${className}`}
    >
      {/* Popular badge */}
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="warning" className="bg-primary-950 text-neutral-50 px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Tier name */}
      <h3 className="text-xl font-semibold text-primary-950 mb-2">
        {tier.name}
      </h3>

      {/* Description */}
      <p className="text-primary-700 mb-4">{tier.description}</p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-primary-950">
          {formatPrice(tier.price.amount)}
        </span>
        <span className="text-primary-600 ml-1">/ {tier.price.unit}</span>
      </div>

      {/* Turnaround */}
      <div className="mb-6 pb-6 border-b border-neutral-300">
        <span className="text-sm text-primary-600">Turnaround: </span>
        <span className="text-sm font-medium text-primary-950">
          {tier.turnaround}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary-950 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-primary-800">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        href="/contact"
        variant="primary"
        fullWidth
      >
        Get Started
      </Button>
    </div>
  );
}
