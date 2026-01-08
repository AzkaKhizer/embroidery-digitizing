import { Icon } from '@/components/ui/icon';
import type { ValueCardProps } from '@/lib/types';

export function ValueCard({
  title,
  description,
  icon,
  className = '',
}: ValueCardProps) {
  return (
    <div className={`text-center p-6 ${className}`}>
      {/* Icon */}
      <div className="w-16 h-16 bg-primary-950 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name={icon} size="lg" className="text-neutral-50" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-primary-950 mb-2">{title}</h3>
      <p className="text-primary-700 leading-relaxed">{description}</p>
    </div>
  );
}
