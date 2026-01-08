import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { FAQSection } from '@/components/sections/faq-section';
import { CTABlock } from '@/components/sections/cta-block';
import { faqItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about embroidery digitizing services. Learn about our process, turnaround times, file formats, pricing, and more.',
};

export default function FAQPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our embroidery digitizing services. Can't find what you're looking for? Contact us!"
      />

      {/* FAQ Section */}
      <FAQSection items={faqItems} groupByCategory />

      {/* CTA Block */}
      <CTABlock
        headline="Still Have Questions?"
        description="We're here to help! Contact our team and we'll get back to you within 24 hours."
        ctaText="Contact Us"
        ctaHref="/contact"
        variant="secondary"
      />
    </>
  );
}
