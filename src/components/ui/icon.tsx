import * as LucideIcons from 'lucide-react';
import type { IconProps } from '@/lib/types';
import type { ElementType } from 'react';

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
};

export function Icon({ name, size = 'md', className = '' }: IconProps) {
  // Get the icon component from lucide-react
  const IconComponent = (LucideIcons as unknown as Record<string, ElementType>)[name];

  if (!IconComponent) {
    // Fallback to a default icon if not found
    const FallbackIcon = LucideIcons.HelpCircle;
    return <FallbackIcon size={sizeMap[size]} className={className} />;
  }

  return <IconComponent size={sizeMap[size]} className={className} />;
}
