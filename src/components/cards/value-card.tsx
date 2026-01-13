'use client';

import { Icon } from '@/components/ui/icon';
import type { ValueCardProps } from '@/lib/types';

export function ValueCard({
  title,
  description,
  icon,
  className = '',
}: ValueCardProps) {
  return (
    <div
      className={`
        group relative text-center p-8
        transition-all duration-500 ease-out
        hover:bg-ivory rounded-sm
        ${className}
      `}
    >
      {/* Icon */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-copper/10 rounded-full scale-110 transition-transform duration-500 group-hover:scale-125 group-hover:bg-copper/15" />

        {/* Icon container */}
        <div className="relative w-full h-full bg-charcoal rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-copper group-hover:shadow-copper">
          <Icon name={icon} size="lg" className="text-ivory transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-charcoal mb-3 transition-colors duration-300 group-hover:text-copper">
        {title}
      </h3>

      {/* Description */}
      <p className="text-charcoal/70 leading-relaxed">
        {description}
      </p>

      {/* Hover accent line */}
      <div className="w-8 h-0.5 bg-copper mx-auto mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
  );
}
