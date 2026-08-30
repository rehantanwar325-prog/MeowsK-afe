import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // 8 Curated Photos for the 2x4 grid
  const galleryList: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'The Cat Mural Bench (Night Glow)',
      subtitle: 'Iconic Night Ambience',
      category: 'cat-corner',
      image: '/images/cat-mural-bench-night.jpg',
      description: 'Illuminated halo circular mirrors glowing behind handcrafted pallet bench.',
      featured: true,
    },
    {
      id: 'gal-2',
      title: 'Artisan Coffee & Steamed Milk',
      subtitle: 'Specialty Beans',
      category: 'food',
      image: '/images/meows-kafe-logo-sign.jpg',
      description: 'Single-origin beans freshly extracted with silky smooth microfoam.',
      featured: true,
    },
    {
      id: 'gal-3',
      title: 'Freshly Baked Toasts & Bites',
      subtitle: 'Hearth-Baked',
      category: 'food',
      image: '/images/cat-mural-bench-day.jpg',
      description: 'Crisp golden crusts, gourmet seasonings, and comforting cafe bites.',
      featured: true,
    },
    {
      id: 'gal-4',
      title: 'Steaming Cafe Maggi Bowl',
      subtitle: 'Comfort Food',
      category: 'food',
      image: '/images/maggi-cafe-entrance.jpg',
      description: 'Piping hot noodles simmered with house-blended secret spices.',
      featured: true,
    },
    {
      id: 'gal-5',
      title: 'The Conversation Forest Sign',
      subtitle: 'Warm Ambiance',
      category: 'neon',
      image: '/images/meows-kafe-vertical-sign.jpg',
      description: 'Golden ambient glow creating a tranquil sanctuary for long talks.',
      featured: false,
    },
    {
      id: 'gal-6',
      title: 'Daylight Cat Lounge Corner',
      subtitle: 'Natural Sunlight',
      category: 'ambience',
      image: '/images/cat-mural-bench-day.jpg',
      description: 'Cozy cushioned seating with lush greens and sleeping fur babies.',
      featured: false,
    },
    {
      id: 'gal-7',
      title: 'Signature Cold Frappes & Shakes',
      subtitle: 'Crafted Beverages',
      category: 'food',
      image: '/images/meows-kafe-logo-sign.jpg',
      description: 'Thick Belgian chocolate, Lotus Biscoff, and refreshing fruit coolers.',
      featured: false,
    },
    {
      id: 'gal-8',
      title: 'Our Sanctuary Space',
      subtitle: 'Warm Welcomes',
      category: 'ambience',
      image: '/images/cat-mural-bench-night.jpg',
      description: 'An intimate escape in Sikar, Rajasthan designed to soothe your soul.',
      featured: false,
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      {/* Upper Teaser Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-text tracking-tight">
          Capturing the Vibe
        </h2>
        <p className="text-muted text-base font-light">A glimpse into our daily craft</p>
      </div>

      {/* Main Morning Glow Section */}
      <div className="py-12 relative z-10 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Display Typography Header */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs tracking-[0.5em] uppercase text-accent mb-6 block font-bold">
              The Canvas
            </span>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-display text-text mb-8 tracking-tighter">
              Morning <span className="italic font-light text-accent">Glow</span>
            </h3>
            <p className="text-muted/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Every snapshot captured here represents a moment of pure culinary dedication and heartfelt warmth.
            </p>
          </div>

          {/* 2x4 (8-Card) Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryList.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] group cursor-pointer glass border-white/5"
              >
                <div className="relative w-full h-full transform transition-transform duration-1000 group-hover:scale-110">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover saturate-[0.7] group-hover:saturate-100 transition-all duration-700"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Centered Expand Icon Hover Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedImage}
        items={galleryList}
        onClose={() => setSelectedImage(null)}
        onSelect={(item) => setSelectedImage(item)}
      />
    </section>
  );
};

