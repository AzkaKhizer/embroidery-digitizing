import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { ServiceGrid } from '@/components/sections/service-grid';
import { Testimonials } from '@/components/sections/testimonials';
import { CTABlock } from '@/components/sections/cta-block';
import { ValueCard } from '@/components/cards/value-card';
import { Container } from '@/components/layout/container';
import { siteConfig, featuredServices, featuredTestimonials } from '@/lib/data';

export default function HomePage() {
  const whyChooseUsItems = [
    {
      title: 'Fast Turnaround',
      description:
        'Get your digitized files in as little as 12 hours with our rush service. Standard orders completed within 24-48 hours.',
      icon: 'Zap',
    },
    {
      title: 'Quality Guarantee',
      description:
        'We stand behind our work with unlimited revisions until you are completely satisfied with your embroidery design.',
      icon: 'Shield',
    },
    {
      title: 'Expert Support',
      description:
        'Our experienced digitizers are here to help with any questions. Get personalized assistance every step of the way.',
      icon: 'HeadphonesIcon',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Professional Embroidery Digitizing Services"
        subheadline="Transform your artwork into stunning embroidery designs. Fast turnaround, expert quality, and affordable pricing for businesses of all sizes."
        primaryCta={{ text: 'Get a Quote', href: '/contact' }}
        secondaryCta={{ text: 'View Services', href: '/services' }}
      />

      {/* Trust Bar */}
      <TrustBar signals={siteConfig.trustSignals} />

      {/* Services Grid (Featured) */}
      <ServiceGrid services={featuredServices} variant="compact" />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose EMB Digitizers?
            </h2>
            <p className="text-lg text-neutral-600">
              We combine expertise, technology, and dedication to deliver
              exceptional embroidery digitizing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <ValueCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={featuredTestimonials} />

      {/* CTA Block */}
      <CTABlock
        headline="Ready to Get Started?"
        description="Send us your artwork today and receive a free quote within hours. No obligation, no hassle."
        ctaText="Get Your Free Quote"
        ctaHref="/contact"
        variant="primary"
      />
    </>
  );
}
