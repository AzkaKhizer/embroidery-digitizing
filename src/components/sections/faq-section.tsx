import { Container } from '@/components/layout/container';
import { Accordion } from '@/components/ui/accordion';
import type { FAQSectionProps } from '@/lib/types';

export function FAQSection({
  items,
  groupByCategory = false,
  className = '',
}: FAQSectionProps) {
  // Convert FAQ items to accordion format
  const accordionItems = items
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      title: item.question,
      content: <p className="text-neutral-600 leading-relaxed">{item.answer}</p>,
    }));

  if (groupByCategory) {
    // Group by category
    const categories = items.reduce(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      },
      {} as Record<string, typeof items>
    );

    const categoryLabels: Record<string, string> = {
      process: 'Process & Getting Started',
      turnaround: 'Turnaround Time',
      formats: 'File Formats',
      pricing: 'Pricing',
      revisions: 'Revisions',
      general: 'General',
    };

    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <Container size="md">
          {Object.entries(categories).map(([category, categoryItems]) => (
            <div key={category} className="mb-12 last:mb-0">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                {categoryLabels[category] || category}
              </h3>
              <Accordion
                items={categoryItems.sort((a, b) => a.order - b.order).map((item) => ({
                  id: item.id,
                  title: item.question,
                  content: (
                    <p className="text-neutral-600 leading-relaxed">
                      {item.answer}
                    </p>
                  ),
                }))}
                allowMultiple
              />
            </div>
          ))}
        </Container>
      </section>
    );
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container size="md">
        <Accordion items={accordionItems} allowMultiple />
      </Container>
    </section>
  );
}
