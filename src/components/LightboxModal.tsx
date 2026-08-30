import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../data/galleryData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/95 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-5xl w-full max-h-[90vh] bg-[#0d0f0b] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row glass">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/70 hover:bg-white/10 text-text border border-white/10 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Media Container */}
        <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[460px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full max-h-[75vh] object-contain"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-text border border-white/20 transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-text border border-white/20 transition-all hover:scale-110 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Details Sidebar */}
        <div className="md:w-2/5 p-8 flex flex-col justify-between bg-[#11140e] text-left border-t md:border-t-0 md:border-l border-white/5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold">
                {item.category.replace('-', ' ')}
              </span>
              <span className="text-xs text-muted font-light">
                {currentIndex + 1} / {items.length}
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-display font-medium text-text tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-accent uppercase tracking-widest font-semibold mt-1">
                {item.subtitle}
              </p>
            </div>

            <p className="text-sm text-muted font-light leading-relaxed">
              {item.description}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-text space-y-1">
              <div className="flex items-center gap-2 text-accent font-display font-medium">
                <Sparkles size={14} />
                <span>Coffee &amp; Toast Atmosphere</span>
              </div>
              <p className="text-muted text-xs font-light">
                Sikar, Rajasthan. Open 11:00 AM – 11:30 PM.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-muted font-light">The Canvas • Morning Glow</span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs text-muted hover:text-text border border-white/10 transition-colors cursor-pointer"
              >
                ← Prev
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-full bg-accent hover:bg-white text-xs font-bold text-background uppercase tracking-wider transition-colors cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

