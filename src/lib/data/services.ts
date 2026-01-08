import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'embroidery-digitizing',
    name: 'Embroidery Digitizing',
    shortDescription:
      'Convert your artwork into high-quality embroidery files ready for any machine.',
    fullDescription:
      'Our expert digitizers transform your logos, designs, and artwork into precise embroidery files. We support all major formats including DST, PES, JEF, and more. Each design is optimized for clean stitching and vibrant results.',
    icon: 'Sparkles',
    benefits: [
      'All major file formats supported',
      'Optimized stitch counts',
      'Color separation included',
      'Unlimited revisions',
      'Rush service available',
    ],
    category: 'digitizing',
    featured: true,
    order: 1,
  },
  {
    id: 'vector-art',
    name: 'Vector Art Conversion',
    shortDescription:
      'Transform raster images into scalable vector graphics for any application.',
    fullDescription:
      'We convert your images, sketches, and low-resolution graphics into crisp, scalable vector files. Perfect for screen printing, signage, and promotional materials. Delivered in AI, EPS, PDF, and SVG formats.',
    icon: 'Pen',
    benefits: [
      'Scalable to any size',
      'Clean, smooth lines',
      'Multiple format delivery',
      'Fast turnaround',
      'Print-ready quality',
    ],
    category: 'vector',
    featured: true,
    order: 2,
  },
  {
    id: 'custom-patches',
    name: 'Custom Patches',
    shortDescription:
      'Design and digitize custom patches for uniforms, merchandise, and more.',
    fullDescription:
      'From military-style patches to modern custom designs, we create embroidery files optimized for patch production. We handle complex borders, multiple colors, and intricate details with precision.',
    icon: 'Badge',
    benefits: [
      'Border optimization',
      'Backing specifications',
      'Size variations included',
      'Bulk discount available',
      'Sample files provided',
    ],
    category: 'patches',
    featured: true,
    order: 3,
  },
  {
    id: 'logo-digitizing',
    name: 'Logo Digitizing',
    shortDescription:
      'Specialized logo digitization for consistent branding across all embroidered items.',
    fullDescription:
      'Your logo deserves special attention. We carefully digitize corporate logos to maintain brand integrity across all stitch counts and sizes. From small left-chest placements to large back designs.',
    icon: 'Image',
    benefits: [
      'Brand consistency',
      'Multiple size versions',
      'Color matching',
      'Style guide compliance',
      'Quick turnaround',
    ],
    category: 'logo',
    featured: false,
    order: 4,
  },
];

export const featuredServices = services.filter((s) => s.featured);
