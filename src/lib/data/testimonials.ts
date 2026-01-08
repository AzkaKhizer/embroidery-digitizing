import type { Testimonial } from '@/lib/types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    customerName: 'Sarah Johnson',
    company: 'Threads & More Apparel',
    quote:
      'EMB Digitizers transformed our company logo into a beautiful embroidery design. The quality is exceptional and the turnaround was faster than expected. Highly recommend!',
    rating: 5,
    featured: true,
  },
  {
    id: 't2',
    customerName: 'Michael Chen',
    company: 'Custom Caps Co.',
    quote:
      'We have been working with EMB Digitizers for over 2 years. Their attention to detail and consistent quality keeps us coming back. Great communication too!',
    rating: 5,
    featured: true,
  },
  {
    id: 't3',
    customerName: 'Emily Rodriguez',
    company: 'Sports Uniforms Plus',
    quote:
      'The team digitized our complex team logos perfectly. Even the small details came out crisp and clean. Fair pricing and excellent service.',
    rating: 4,
    featured: true,
  },
  {
    id: 't4',
    customerName: 'David Williams',
    company: 'Corporate Stitches LLC',
    quote:
      'Professional service from start to finish. They understood exactly what we needed and delivered high-quality files that work perfectly on our machines.',
    rating: 5,
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
