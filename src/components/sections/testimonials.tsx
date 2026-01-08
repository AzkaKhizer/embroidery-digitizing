import { Container } from '@/components/layout/container';
import { TestimonialCard } from '@/components/cards/testimonial-card';
import type { TestimonialsProps } from '@/lib/types';

export function Testimonials({
  testimonials,
  title = 'What Our Customers Say',
  className = '',
}: TestimonialsProps) {
  return (
    <section className={`py-16 md:py-24 bg-neutral-50 ${className}`}>
      <Container>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to
            say about their experience working with us.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
