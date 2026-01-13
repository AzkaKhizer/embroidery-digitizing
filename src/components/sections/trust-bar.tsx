import { Container } from '@/components/layout/container';
import { Icon } from '@/components/ui/icon';
import type { TrustBarProps } from '@/lib/types';

export function TrustBar({ signals, className = '' }: TrustBarProps) {
  return (
    <section className={`relative z-10 py-16 bg-charcoal ${className}`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal) => (
            <div
              key={signal.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-copper rounded-full flex items-center justify-center mb-4">
                <Icon name={signal.icon} size="lg" className="text-charcoal" />
              </div>
              <span className="text-4xl md:text-5xl font-bold text-ivory mb-2">
                {signal.value}
              </span>
              <span className="text-copper-light font-medium text-lg">
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
