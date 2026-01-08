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
        group text-center p-6 rounded-xl
        transition-all duration-300 ease-out
        hover:bg-neutral-100/50 hover:shadow-lg hover:-translate-y-1
        ${className}
      `}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-primary-950 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
        <Icon name={icon} size="lg" className="text-neutral-50" />
      </div>

      {/* Content */}
      <h3
        className="text-xl font-semibold text-primary-950 mb-2 transition-colors duration-200"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="text-primary-700 leading-relaxed">{description}</p>
    </div>
  );
}
