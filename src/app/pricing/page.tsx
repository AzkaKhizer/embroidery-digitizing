import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { PricingGrid } from '@/components/sections/pricing-grid';
import { CTABlock } from '@/components/sections/cta-block';
import { Container } from '@/components/layout/container';
import { pricingTiers } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for embroidery digitizing services. No hidden fees, no surprises. Get started from just $15 per design.',
};

export default function PricingPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees, no surprises. Choose the plan that fits your needs and get started today."
      />

      {/* Pricing Grid */}
      <PricingGrid tiers={pricingTiers} />

      {/* Volume Pricing Info */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Volume & Custom Pricing
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Need to digitize multiple designs or have a unique project? We
              offer volume discounts and custom pricing for businesses with
              ongoing digitizing needs. Contact us to discuss your requirements
              and get a personalized quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary-800 mb-2">10%</p>
                <p className="text-neutral-600">Discount on 5+ designs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary-800 mb-2">15%</p>
                <p className="text-neutral-600">Discount on 10+ designs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary-800 mb-2">20%</p>
                <p className="text-neutral-600">Discount on 25+ designs</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Block */}
      <CTABlock
        headline="Need a Custom Quote?"
        description="Have a complex project or unique requirements? Let's discuss your specific needs and create a custom pricing plan."
        ctaText="Request Custom Quote"
        ctaHref="/contact"
        variant="primary"
      />
    </>
  );
}
