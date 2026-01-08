import { Icon } from '@/components/ui/icon';
import type { MetricCardProps } from '@/lib/types';

export function MetricCard({
  label,
  value,
  icon,
  className = '',
}: MetricCardProps) {
  return (
    <div
      className={`bg-neutral-100 rounded-xl p-6 shadow-md border border-neutral-200 text-center ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 bg-primary-950 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name={icon} size="md" className="text-neutral-50" />
        </div>
      )}
      <p className="text-4xl font-bold text-primary-950 mb-2">{value}</p>
      <p className="text-primary-700 font-medium">{label}</p>
    </div>
  );
}
