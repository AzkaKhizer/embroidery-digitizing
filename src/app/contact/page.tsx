import type { Metadata } from 'next';
import { Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import { PageHero } from '@/components/sections/page-hero';
import { Container } from '@/components/layout/container';
import { ContactForm } from '@/components/forms/contact-form';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with EMB Digitizers. Send us your artwork for a free quote or ask any questions about our embroidery digitizing services.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/\D/g, '')}`,
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: siteConfig.contact.hours,
      href: null,
    },
    {
      icon: MessageCircle,
      label: 'Response Time',
      value: 'We respond within 24 hours',
      href: null,
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Get in Touch"
        subtitle="Have a question or ready to start your project? We're here to help. Send us a message and we'll respond within 24 hours."
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible. You can also attach your artwork for a free quote.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Contact Information
              </h2>
              <p className="text-neutral-600 mb-8">
                Prefer to reach out directly? Here&apos;s how you can get in touch
                with us.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary-800" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-medium text-neutral-900 hover:text-primary-800 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-neutral-900">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional info */}
              <div className="mt-12 p-6 bg-primary-50 rounded-xl">
                <h3 className="font-semibold text-primary-900 mb-2">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-primary-800">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                    Free quote within 2-4 hours during business hours
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                    Detailed breakdown of pricing and turnaround
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                    No obligation - just honest, transparent information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
