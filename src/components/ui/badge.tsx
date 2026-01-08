import type { BadgeProps } from '@/lib/types';

const variantClasses = {
  default: 'bg-neutral-100 text-neutral-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
};

export function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const classes = [
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
}
