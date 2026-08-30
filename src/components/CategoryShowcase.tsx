import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryShowcaseProps {
  onSelectCategory?: (category: string) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const sections = [
    {
      number: 'Section 1',
      titlePrimary: 'Sweet',
      titleSecondary: 'Bites',
      hasAmp: false,
      description: 'Enjoy our fresh cakes, pastries, Belgian waffles, and delicious sweet treats made with love.',
      image: '/images/maggi-cafe-entrance.jpg',
      categoryTarget: 'desserts',
      alt: 'Sweet Bites & Desserts',
      glowPos: 'right',
      reverse: false,
    },
    {
      number: 'Section 2',
      titlePrimary: 'Coffee',
      titleSecondary: 'Shakes',
      hasAmp: true,
      description: 'Try our freshly brewed coffee, thick cold shakes, spiced kullad chai, and refreshing coolers to energize your soul.',
      image: '/images/meows-kafe-vertical-sign.jpg',
      categoryTarget: 'chai-coffee',
      alt: 'Coffee & Shakes',
      glowPos: 'left',
      reverse: true,
    },
    {
      number: 'Section 3',
      titlePrimary: 'Pizzas',
      titleSecondary: 'Burgers',
      hasAmp: true,
      description: 'Tasty burgers, hot farmhouse pizzas, famous signature Maggi, and cheesy garlic breads served fresh from our kitchen.',
      image: '/images/cat-mural-bench-day.jpg',
      categoryTarget: 'maggi-specials',
      alt: 'Pizzas, Burgers & Maggi',
      glowPos: 'right',
      reverse: false,
    },
    {
      number: 'Section 4',
      titlePrimary: 'Feline',
      titleSecondary: 'Sanctuary',
      hasAmp: true,
      description: 'Meet our peaceful rescue cats in an indoor ambient forest lounge designed for cozy cuddles, books, and board games.',
      image: '/images/cat-mural-bench-night.jpg',
      categoryTarget: 'cats',
      alt: 'Resident Cat Sanctuary',
      glowPos: 'left',
      reverse: true,
    },
  ];

  return (
    <section className="bg-background overflow-hidden">
      {sections.map((sec, idx) => (
        <div
          key={idx}
          className="min-h-screen flex items-center relative overflow-hidden py-20 lg:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div
              className={`flex flex-col ${
                sec.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12 lg:gap-32`}
            >
              {/* 3D Perspective Image Card */}
              <div className="w-full lg:w-1/2 perspective-1000">
                <div
                  className="relative aspect-[4/5] group overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] glass border-white/5 shadow-2xl transform-gpu transition-all"
                  style={{ perspective: 1000 }}
                >
                  <div className="absolute inset-0 -top-[5%] lg:-top-[10%] h-[110%] lg:h-[120%]">
                    <img
                      src={sec.image}
                      alt={sec.alt}
                      loading="lazy"
                      className="w-full h-full object-cover scale-105 lg:scale-110 transition-transform duration-1000 group-hover:scale-115 saturate-[0.8] brightness-[0.9]"
                    />
                  </div>
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                  {/* Hover Tag */}
                  <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white font-display text-2xl italic">
                      Explore {sec.titlePrimary} {sec.hasAmp ? '& ' : ''}
                      {sec.titleSecondary}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text & Typography Side */}
              <div className="w-full lg:w-1/2">
                <span className="text-xs tracking-[0.5em] uppercase text-accent mb-8 block font-bold">
                  {sec.number}
                </span>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-text mb-8 lg:mb-10 leading-[0.9] tracking-tighter">
                  <span>{sec.titlePrimary} </span>
                  {sec.hasAmp && <span className="text-accent">&amp; </span>}
                  <span>{sec.titleSecondary}</span>
                </h2>

                <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 lg:mb-12 max-w-xl font-light">
                  {sec.description}
                </p>

                <a
                  href={sec.categoryTarget === 'cats' ? '#cats' : '#menu'}
                  onClick={() => {
                    if (onSelectCategory && sec.categoryTarget !== 'cats') {
                      onSelectCategory(sec.categoryTarget);
                    }
                  }}
                  className="group relative inline-flex items-center gap-6 overflow-hidden cursor-pointer"
                >
                  {/* Circular Border with Arrow */}
                  <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                    <ArrowRight
                      size={20}
                      className="text-accent group-hover:text-background transition-colors transform group-hover:translate-x-1"
                    />
                  </div>
                  <span className="text-sm tracking-[0.3em] uppercase font-bold group-hover:text-accent transition-colors text-text">
                    View Collection
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Ambient Glowing Orb */}
          <div
            className={`absolute -z-10 top-1/2 ${
              sec.glowPos === 'right' ? '-right-1/4' : '-left-1/4'
            } -translate-y-1/2 w-1/2 h-1/2 bg-accent/5 blur-[150px] rounded-full pointer-events-none`}
          />
        </div>
      ))}
    </section>
  );
};
