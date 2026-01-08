import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { CTABlock } from '@/components/sections/cta-block';
import { Container } from '@/components/layout/container';
import { MetricCard } from '@/components/cards/metric-card';
import { ValueCard } from '@/components/cards/value-card';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about EMB Digitizers - over 15 years of experience in professional embroidery digitizing. Discover our story, values, and commitment to quality.',
};

export default function AboutPage() {
  const metrics = [
    { value: '15+', label: 'Years Experience', icon: 'Award' },
    { value: '10,000+', label: 'Happy Customers', icon: 'Users' },
    { value: '50,000+', label: 'Designs Completed', icon: 'Sparkles' },
  ];

  const values = [
    {
      title: 'Quality First',
      description:
        'Every design we create meets our rigorous quality standards. We never compromise on the precision and detail of our digitizing work.',
      icon: 'Star',
    },
    {
      title: 'Customer Focus',
      description:
        'Your satisfaction is our priority. We work closely with you to understand your needs and deliver results that exceed expectations.',
      icon: 'Heart',
    },
    {
      title: 'Fast Delivery',
      description:
        'We understand time is valuable. Our streamlined process ensures you get your digitized files quickly without sacrificing quality.',
      icon: 'Zap',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="About EMB Digitizers"
        subtitle="Professional embroidery digitizing services built on expertise, quality, and customer satisfaction."
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-600">
              <p className="leading-relaxed mb-6">
                EMB Digitizers was founded with a simple mission: to provide
                businesses with the highest quality embroidery digitizing
                services at competitive prices. What started as a small
                operation has grown into a trusted partner for thousands of
                businesses worldwide.
              </p>
              <p className="leading-relaxed mb-6">
                With over 15 years of experience in the embroidery industry, our
                team of expert digitizers understands the nuances that make the
                difference between a good design and a great one. We combine
                traditional craftsmanship with modern technology to deliver
                results that look stunning on any fabric.
              </p>
              <p className="leading-relaxed">
                Today, we serve a diverse range of clients - from small
                businesses getting their first logo embroidered to large
                corporations with complex branding requirements. No matter the
                size of your project, you can count on us for consistent
                quality, fast turnaround, and dedicated support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            By the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                value={metric.value}
                label={metric.label}
                icon={metric.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600">
              These core principles guide everything we do at EMB Digitizers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Block */}
      <CTABlock
        headline="Ready to Work Together?"
        description="Join thousands of satisfied customers who trust EMB Digitizers for their embroidery digitizing needs."
        ctaText="Get Started Today"
        ctaHref="/contact"
        variant="primary"
      />
    </>
  );
}
