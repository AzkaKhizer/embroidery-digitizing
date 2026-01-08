import type { ProcessStep } from '@/lib/types';

export const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    title: 'Submit Artwork',
    description:
      'Upload your logo, design, or artwork through our contact form or email. We accept all common image formats.',
    icon: 'Upload',
    order: 1,
  },
  {
    id: 'step-2',
    title: 'Review Quote',
    description:
      'Our team reviews your artwork and provides a detailed quote with pricing and turnaround time within hours.',
    icon: 'FileText',
    order: 2,
  },
  {
    id: 'step-3',
    title: 'Digitizing Process',
    description:
      'Once approved, our expert digitizers transform your artwork into high-quality embroidery files.',
    icon: 'Sparkles',
    order: 3,
  },
  {
    id: 'step-4',
    title: 'Receive Files',
    description:
      'Download your completed embroidery files in all the formats you need, ready for production.',
    icon: 'Download',
    order: 4,
  },
];
