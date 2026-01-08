import { Container } from '@/components/layout/container';
import { Icon } from '@/components/ui/icon';
import type { TrustBarProps } from '@/lib/types';

export function TrustBar({ signals, className = '' }: TrustBarProps) {
  return (
    <section className={`py-12 bg-neutral-100 ${className}`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal) => (
            <div
              key={signal.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-primary-950 rounded-full flex items-center justify-center mb-3">
                <Icon name={signal.icon} size="md" className="text-neutral-50" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-primary-950 mb-1">
                {signal.value}
              </span>
              <span className="text-primary-700 font-medium">
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
