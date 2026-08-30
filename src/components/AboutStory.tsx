import React from 'react';
import { CAFE_INFO } from '../data/cafeInfo';

export const AboutStory: React.FC = () => {
  return (
    <section id="story" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden glass border-white/5 shadow-2xl">
          {/* Left Column: Atmospheric Full-Height Image */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative overflow-hidden">
            <div className="overflow-hidden absolute inset-0 h-full w-full lg:h-[120%] lg:-top-[10%]">
              <img
                src="/images/cat-mural-bench-day.jpg"
                alt="Coffee & Toast Crafting"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-background/30 mix-blend-multiply" />
          </div>

          {/* Right Column: Dark #11140e Story & Legacy Panel */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-[#11140e]">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-accent font-bold mb-6 block">
                Our Legacy
              </span>

              <h2 className="text-4xl md:text-5xl font-display text-text mb-8 leading-[1.1] tracking-tight">
                Crafting <span className="italic font-light text-accent">Moments</span> <br />
                One Cup at a Time.
              </h2>

              <p className="text-muted/90 text-base sm:text-lg leading-relaxed mb-10 font-light">
                Our cafe serves delicious artisan Paneer Bhurji Sandwiches, golden toasted breads, signature spiced Maggi bowls, and velvety coffees. Our food is crafted with quality ingredients, budget-friendly, and satisfying. People cherish our warm, cozy atmosphere, loving feline companionship, and attentive hospitality.
              </p>

              {/* Bullet Points with Gold Dots */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm text-text/80 mb-10 font-light">
                <li className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform shrink-0" />
                  <span>Freshly brewed specialty coffee</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform shrink-0" />
                  <span>Handcrafted toasts &amp; sandwiches</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform shrink-0" />
                  <span>Warm, welcoming dine-in lounge</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform shrink-0" />
                  <span>Located in Sikar, Rajasthan</span>
                </li>
              </ul>

              {/* CTA Link */}
              <a
                href="#menu"
                className="w-fit px-8 py-3.5 border border-accent/30 rounded-full text-text hover:bg-accent hover:text-background transition-all duration-500 font-medium text-sm tracking-wider uppercase cursor-pointer"
              >
                View Complete Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

