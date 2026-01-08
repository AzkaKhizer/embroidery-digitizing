import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { ServiceGrid } from '@/components/sections/service-grid';
import { ProcessSteps } from '@/components/sections/process-steps';
import { CTABlock } from '@/components/sections/cta-block';
import { services, processSteps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Professional embroidery digitizing services including logo digitizing, vector art conversion, and custom patches. Quality designs for any embroidery machine.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Our Services"
        subtitle="From simple logos to complex artwork, we provide comprehensive embroidery digitizing solutions tailored to your needs."
      />

      {/* Services Grid (Detailed) */}
      <ServiceGrid services={services} variant="detailed" />

      {/* Process Steps */}
      <ProcessSteps steps={processSteps} />

      {/* CTA Block */}
      <CTABlock
        headline="Ready to Start Your Project?"
        description="Send us your artwork today and receive a free quote within hours. Our team is ready to help bring your designs to life."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        variant="primary"
      />
    </>
  );
}
