'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { ArrowRight } from 'lucide-react';
import type { ServiceCardProps } from '@/lib/types';

export function ServiceCard({
  service,
  variant = 'compact',
  className = '',
}: ServiceCardProps) {
  const isCompact = variant === 'compact';

  return (
    <div
      className={`
        group relative bg-ivory rounded-sm overflow-hidden
        border border-charcoal/5
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-premium
        ${className}
      `}
    >
      {/* Copper accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-copper via-copper-light to-copper scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Content wrapper */}
      <div className="p-8">
        {/* Icon */}
        <div className="relative w-14 h-14 mb-6">
          <div className="absolute inset-0 bg-copper/10 rounded-sm rotate-3 transition-transform duration-300 group-hover:rotate-6" />
          <div className="relative w-full h-full bg-charcoal rounded-sm flex items-center justify-center transition-all duration-300 group-hover:bg-copper">
            <Icon name={service.icon} size="md" className="text-ivory transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-charcoal mb-3 transition-colors duration-300 group-hover:text-copper">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-charcoal/70 leading-relaxed mb-6">
          {isCompact ? service.shortDescription : service.fullDescription}
        </p>

        {/* Benefits (detailed variant only) */}
        {!isCompact && service.benefits.length > 0 && (
          <ul className="space-y-3 mb-6">
            {service.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-charcoal/80"
              >
                <span className="w-1.5 h-1.5 bg-copper rounded-full mt-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {/* Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-all duration-300 group-hover:text-copper"
        >
          <span className="relative">
            Learn more
            <span className="absolute -bottom-1 left-0 w-full h-px bg-copper scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#C17F59" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" stroke="#C17F59" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}
