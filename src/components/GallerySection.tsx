import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';
import { Camera, Eye, Star, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rooms' | 'exterior' | 'lobby' | 'washroom'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos (55+)' },
    { id: 'rooms', label: 'Rooms & Beds' },
    { id: 'exterior', label: 'Building & Exterior' },
    { id: 'lobby', label: 'Lobby & Reception' },
    { id: 'washroom', label: 'Modern Washrooms' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30">
          <Camera size={13} />
          <span>55 Verified Photos &amp; Video Tour</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-medium text-text">
          Property Visual Tour
        </h2>
        <p className="text-base sm:text-lg text-text/75 font-light leading-relaxed">
          Authentic photographs of Hotel Shivansh, highlighting our pristine deluxe bedrooms, tidy welcoming lobby, modern en-suite bathrooms, and exterior parking area.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-accent text-[#0d0f0b] shadow-lg'
                  : 'glass text-text/70 hover:text-text hover:border-accent/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative h-80 rounded-3xl overflow-hidden glass border border-white/10 hover:border-accent/50 cursor-pointer transition-all duration-500 shadow-xl"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f0b] via-[#0d0f0b]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Tag Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="glass !rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/30 bg-[#0d0f0b]/80">
                {item.tag}
              </span>
            </div>

            {/* Quick View Button */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-9 h-9 rounded-full bg-accent text-[#0d0f0b] flex items-center justify-center shadow-lg">
                <Eye size={16} />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 className="text-xl font-display font-medium text-text group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-text/75 mt-1 font-light line-clamp-2">
                {item.description}
              </p>
              <div className="mt-3 text-[11px] text-accent font-semibold tracking-wider uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Click to view full photo</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Justdial Verification Badge Footer */}
      <div className="mt-12 text-center">
        <a
          href={HOTEL_INFO.justdialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 glass !rounded-full text-xs font-semibold text-text/80 hover:text-accent border border-white/10 hover:border-accent/40 transition-all"
        >
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span>View all 55+ Verified Photos &amp; Video Tour on Justdial Official Listing</span>
          <span className="text-accent">↗</span>
        </a>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        items={filteredItems}
        onClose={() => setActiveItem(null)}
        onSelect={(item) => setActiveItem(item)}
      />
    </section>
  );
};
