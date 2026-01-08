import { Star, Quote } from 'lucide-react';
import type { TestimonialCardProps } from '@/lib/types';

export function TestimonialCard({
  testimonial,
  className = '',
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-neutral-100 rounded-xl p-6 shadow-md border border-neutral-200 ${className}`}
    >
      {/* Quote icon */}
      <Quote className="h-8 w-8 text-primary-300 mb-4" />

      {/* Quote text */}
      <blockquote className="text-primary-800 text-lg leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < testimonial.rating
                ? 'text-primary-950 fill-primary-950'
                : 'text-primary-300'
            }`}
          />
        ))}
      </div>

      {/* Customer info */}
      <div>
        <p className="font-semibold text-primary-950">
          {testimonial.customerName}
        </p>
        <p className="text-sm text-primary-600">{testimonial.company}</p>
      </div>
    </div>
  );
}
