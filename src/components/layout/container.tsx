import type { ContainerProps } from '@/lib/types';

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
};

export function Container({
  children,
  size = 'xl',
  className = '',
}: ContainerProps) {
  const classes = [
    'mx-auto px-4 sm:px-6 lg:px-8',
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}
