import { Container } from '@/components/layout/container';
import { Icon } from '@/components/ui/icon';
import type { ProcessStepsProps } from '@/lib/types';

export function ProcessSteps({
  steps,
  title = 'How It Works',
  className = '',
}: ProcessStepsProps) {
  const sortedSteps = [...steps].sort((a, b) => a.order - b.order);

  return (
    <section className={`py-16 md:py-24 bg-neutral-50 ${className}`}>
      <Container>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600">
            Our simple 4-step process makes getting your designs digitized easy
            and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-primary-200" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {sortedSteps.map((step, index) => (
              <div key={step.id} className="relative text-center">
                {/* Step number with icon */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary-800 rounded-full flex items-center justify-center mx-auto relative z-10">
                    <Icon name={step.icon} size="lg" className="text-white" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Step content */}
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
