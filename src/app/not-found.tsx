import Link from 'next/link';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const helpfulLinks = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Services', href: '/services', icon: Search },
    { label: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          {/* 404 Text */}
          <p className="text-8xl md:text-9xl font-bold text-primary-200 mb-4">
            404
          </p>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-lg text-neutral-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
            been moved or deleted.
          </p>

          {/* Primary CTA */}
          <Button href="/" variant="primary" size="lg" className="mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>

          {/* Helpful links */}
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-500 mb-4">
              Or try one of these pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center text-primary-800 hover:text-primary-600 font-medium transition-colors"
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
