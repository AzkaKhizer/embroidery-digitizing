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
        group relative bg-neutral-100 rounded-xl p-6 border border-neutral-200
        hover-lift card-shadow hover:card-shadow-hover
        transition-all duration-300
        border-thread
        ${className}
      `}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neutral-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Thread-inspired accent line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary-950 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon with enhanced animation */}
        <div className="w-12 h-12 bg-primary-950 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon name={service.icon} size="md" className="text-neutral-50" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-primary-950 mb-2 transition-colors duration-200 group-hover:text-primary-800">
          {service.name}
        </h3>
        <p className="text-primary-700 mb-4 leading-relaxed">
          {isCompact ? service.shortDescription : service.fullDescription}
        </p>

        {/* Benefits (detailed variant only) */}
        {!isCompact && service.benefits.length > 0 && (
          <ul className="space-y-2 mb-4">
            {service.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-primary-700"
              >
                <span className="w-1.5 h-1.5 bg-primary-950 rounded-full mt-2 mr-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-125" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {/* Link with enhanced hover state */}
        <Link
          href="/services"
          className="inline-flex items-center text-primary-950 font-medium hover:text-primary-700 transition-all duration-200 group/link"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
