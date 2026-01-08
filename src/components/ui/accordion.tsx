'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { AccordionProps } from '@/lib/types';

export function Accordion({
  items,
  allowMultiple = false,
  className = '',
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }

      return newSet;
    });
  };

  return (
    <div className={`divide-y divide-neutral-200 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg p-2 -m-2"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="text-lg font-medium text-neutral-900">
                {item.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              id={`accordion-content-${item.id}`}
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
              role="region"
              aria-labelledby={`accordion-button-${item.id}`}
            >
              <div className="text-neutral-600 leading-relaxed pl-2">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
