import React from 'react';
import { Coffee, Sunrise, Clock, UtensilsCrossed } from 'lucide-react';

export const CoreFeatures: React.FC = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Specialty Beans',
      description: 'Ethically sourced, single-origin beans roasted to perfection & slow-brewed cardamom tea.',
    },
    {
      icon: Sunrise,
      title: 'Artisan Toasts',
      description: 'Golden crusts, handcrafted daily with premium toppings, cheesy garlic breads & iconic Maggi.',
    },
    {
      icon: Clock,
      title: 'Endless Brunch',
      description: 'Premium cafe classics, thick Belgium waffles & cold frappes served throughout the day.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Cinematic Space',
      description: 'A warm, moody forest atmosphere with loving feline companions designed for reflection & connection.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="sr-only">Our Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => {
            const IconComp = feat.icon;
            return (
              <div key={index}>
                <div className="glass glass-hover p-10 lg:p-12 h-full flex flex-col items-center text-center group bg-[#11140e]/40 border-white/5 hover:bg-accent/5 transition-colors duration-700">
                  {/* Rotating / Scaling Circular Badge */}
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-accent mb-10 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:bg-accent/20 transition-all duration-700 ease-out">
                    <IconComp size={32} />
                  </div>

                  {/* Serif Display Title */}
                  <h3 className="text-2xl font-display text-text mb-4 tracking-tight group-hover:text-accent transition-colors duration-500">
                    {feat.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-muted leading-relaxed font-light text-sm sm:text-base">
                    {feat.description}
                  </p>

                  {/* Expanding Accent Line */}
                  <div className="mt-8 w-8 h-[1px] bg-accent/20 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
