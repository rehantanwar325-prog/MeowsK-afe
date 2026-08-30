export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'ambience' | 'cat-corner' | 'food' | 'neon';
  image: string;
  description: string;
  featured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'mural-bench-night',
    title: "The Cat's Eyes Bench (Illuminated)",
    subtitle: 'Signature Interactive Photo Spot',
    category: 'cat-corner',
    image: '/images/cat-mural-bench-night.jpg',
    description: 'Our iconic hand-painted cat mural with circular lighted mirror eyes, custom wooden bench seating, plush cozy cushions, and lush tropical foliage. The favorite spot for memorable photos!',
    featured: true,
  },
  {
    id: 'meows-logo-sign',
    title: 'Meows K-afe — The Conversation Forest',
    subtitle: 'Warm Ambient Backlit Signage',
    category: 'neon',
    image: '/images/meows-kafe-logo-sign.jpg',
    description: 'The glowing centerpiece of our cafe. Crafted against textured woodwork, casting a warm golden radiance that sets the tranquil evening mood.',
    featured: true,
  },
  {
    id: 'maggi-cafe-entrance',
    title: 'Signature Cafe Maggi & Evening Ambience',
    subtitle: 'Comfort Sips, Bites & Warm Vibes',
    category: 'food',
    image: '/images/maggi-cafe-entrance.jpg',
    description: 'Piping hot authentic Meows Maggi served fresh in the courtyard, with fairy-lit entryway and our cafe motto: "Good days start with chai and cats ❤️".',
    featured: true,
  },
  {
    id: 'mural-bench-day',
    title: 'Cozy Cat Corner & Daylight Reading Bench',
    subtitle: 'Peaceful Afternoon Sanctuary',
    category: 'ambience',
    image: '/images/cat-mural-bench-day.jpg',
    description: 'Natural sunlight illuminating our conversation bench, surrounded by vibrant potted plants, soft seating, and our curated menu brochure.',
    featured: false,
  },
  {
    id: 'meows-vertical-glow',
    title: 'The Conversation Forest Illumination',
    subtitle: 'Artisanal Wall Craft & Warm Glow',
    category: 'neon',
    image: '/images/meows-kafe-vertical-sign.jpg',
    description: 'Close-up perspective of our illuminated brand identity, celebrating the harmony of coffee steam, feline silhouettes, and forest calmness.',
    featured: false,
  },
];
