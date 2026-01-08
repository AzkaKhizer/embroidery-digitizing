import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'EMB Digitizers | Professional Embroidery Digitizing Services',
    template: '%s | EMB Digitizers',
  },
  description:
    'Transform your artwork into stunning embroidery designs. Fast turnaround, expert quality, and affordable pricing. Get a quote today!',
  keywords: [
    'embroidery digitizing',
    'digitizing services',
    'logo digitizing',
    'vector art',
    'custom patches',
    'embroidery design',
  ],
  authors: [{ name: 'EMB Digitizers' }],
  creator: 'EMB Digitizers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://embdigitizers.com',
    siteName: 'EMB Digitizers',
    title: 'EMB Digitizers | Professional Embroidery Digitizing Services',
    description:
      'Transform your artwork into stunning embroidery designs. Fast turnaround, expert quality, and affordable pricing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMB Digitizers | Professional Embroidery Digitizing Services',
    description:
      'Transform your artwork into stunning embroidery designs. Fast turnaround, expert quality, and affordable pricing.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-neutral-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
