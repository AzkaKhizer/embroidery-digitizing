import type { FAQItem } from '@/lib/types';

export const faqItems: FAQItem[] = [
  // Process questions
  {
    id: 'faq-1',
    question: 'How does the digitizing process work?',
    answer:
      'Simply upload your artwork through our contact form or email. Our team will review it, provide a quote, and once approved, we digitize your design. You will receive the completed files in your preferred formats within the agreed turnaround time.',
    category: 'process',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'What file formats do you accept for artwork?',
    answer:
      'We accept most common image formats including JPG, PNG, PDF, AI, EPS, PSD, and SVG. For best results, provide the highest resolution image available. Vector files (AI, EPS, SVG) produce the best digitizing results.',
    category: 'process',
    order: 2,
  },
  // Turnaround questions
  {
    id: 'faq-3',
    question: 'How long does digitizing take?',
    answer:
      'Standard turnaround is 24-48 hours for simple designs. Rush service is available with 12-hour turnaround. Complex designs may take 48-72 hours. We always communicate timeline before starting work.',
    category: 'turnaround',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Do you offer rush or same-day service?',
    answer:
      'Yes! We offer rush service with 12-hour turnaround for an additional fee. For same-day needs, please contact us directly and we will do our best to accommodate urgent requests.',
    category: 'turnaround',
    order: 4,
  },
  // Format questions
  {
    id: 'faq-5',
    question: 'What embroidery file formats do you provide?',
    answer:
      'We provide files in all major formats including DST, PES, JEF, EXP, HUS, VP3, XXX, and more. Just let us know which formats you need, and we will include them all at no extra charge.',
    category: 'formats',
    order: 5,
  },
  {
    id: 'faq-6',
    question: 'Can you convert between embroidery file formats?',
    answer:
      'Yes, we can convert existing embroidery files to different formats. However, for best quality, we recommend re-digitizing from the original artwork rather than converting between formats.',
    category: 'formats',
    order: 6,
  },
  // Pricing questions
  {
    id: 'faq-7',
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on design complexity, stitch count, and turnaround time. Simple logos start at $15, while complex detailed designs are $35. We provide exact quotes before starting any work.',
    category: 'pricing',
    order: 7,
  },
  // Revision questions
  {
    id: 'faq-8',
    question: 'What if I need changes to my design?',
    answer:
      'We include free revisions with every order - 1 revision for Standard, 2 for Rush, and unlimited for Complex designs. Additional revisions beyond the included amount are available at a small fee.',
    category: 'revisions',
    order: 8,
  },
];

export const faqByCategory = faqItems.reduce(
  (acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  },
  {} as Record<string, FAQItem[]>
);
