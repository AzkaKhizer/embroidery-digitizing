'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';
import type { PricingCardProps } from '@/lib/types';

export function PricingCard({ tier, className = '' }: PricingCardProps) {
  return (
    <div
      className={`
        group relative rounded-sm overflow-hidden
        transition-all duration-500 ease-out
        hover:-translate-y-2
        ${tier.highlighted
          ? 'bg-charcoal text-ivory shadow-premium-lg'
          : 'bg-ivory border border-charcoal/10 hover:shadow-premium hover:border-copper/30'
        }
        ${className}
      `}
    >
      {/* Popular badge */}
      {tier.highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-copper via-copper-light to-copper" />
      )}

      <div className="p-8 md:p-10">
        {/* Header */}
        <div className="mb-8">
          {tier.highlighted && (
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-copper text-charcoal rounded-sm mb-4">
              Most Popular
            </span>
          )}

          <h3 className={`font-display text-2xl font-semibold mb-2 ${
            tier.highlighted ? 'text-ivory' : 'text-charcoal'
          }`}>
            {tier.name}
          </h3>

          <p className={`text-sm ${
            tier.highlighted ? 'text-ivory/70' : 'text-charcoal/70'
          }`}>
            {tier.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-8 pb-8 border-b border-current/10">
          <div className="flex items-baseline gap-2">
            <span className={`font-display text-5xl font-semibold ${
              tier.highlighted ? 'text-copper-light' : 'text-copper'
            }`}>
              {formatPrice(tier.price.amount)}
            </span>
            <span className={`text-sm ${
              tier.highlighted ? 'text-ivory/60' : 'text-charcoal/60'
            }`}>
              / {tier.price.unit}
            </span>
          </div>

          <div className={`mt-3 text-sm ${
            tier.highlighted ? 'text-ivory/70' : 'text-charcoal/70'
          }`}>
            Turnaround: <span className="font-semibold">{tier.turnaround}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-10">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                tier.highlighted ? 'bg-copper/20' : 'bg-copper/10'
              }`}>
                <Check className={`w-3 h-3 ${
                  tier.highlighted ? 'text-copper-light' : 'text-copper'
                }`} />
              </div>
              <span className={`text-sm ${
                tier.highlighted ? 'text-ivory/80' : 'text-charcoal/80'
              }`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className={`group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 hover:-translate-y-0.5 ${
            tier.highlighted
              ? 'bg-copper text-charcoal hover:bg-copper-light hover:shadow-copper'
              : 'bg-charcoal text-ivory hover:bg-copper hover:shadow-copper'
          }`}
        >
          Get Started
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Decorative corner */}
      <div className={`absolute bottom-0 right-0 w-32 h-32 opacity-5 ${
        tier.highlighted ? '' : 'hidden'
      }`}>
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#C17F59" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="#C17F59" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>
    </div>
  );
}
