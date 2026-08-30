import React from 'react';
import { MapPin, ChevronDown, PartyPopper } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMenu }) => {
  return (
    <section id="hero" className="relative h-[115vh] sm:h-[120vh] w-full bg-background overflow-hidden">
      {/* Background Image with Cinematic Dark Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cat-mural-bench-night.jpg"
          alt="Meows K-afe Atmosphere"
          className="w-full h-full object-cover saturate-[0.8] brightness-[0.65] scale-105"
        />
      </div>

      {/* Atmospheric Vignettes & Gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/50 via-transparent to-background" />
      <div className="absolute inset-0 z-10 bg-black/25" />
      
      {/* Golden Ambient Blur Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] pointer-events-none z-10" />

      {/* Main Content Area */}
      <div className="relative z-20 h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="space-y-8 animate-fade-in-up max-w-5xl mx-auto">
          {/* Top Uppercase Micro-Label */}
          <div className="space-y-4">
            <span className="text-xs tracking-[0.5em] uppercase text-accent font-bold block mb-4">
              The Conversation Forest • Sikar
            </span>

            {/* Giant Display Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-text tracking-tighter leading-[0.9]">
              Meows <br />
              <span className="text-accent italic font-light drop-shadow-[0_0_25px_rgba(200,169,110,0.45)]">
                K-afe
              </span>
            </h1>
          </div>

          {/* Elegant Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-text/80 max-w-2xl mx-auto font-light leading-relaxed">
            Good days start with chai, coffee, and cats. <br className="hidden md:block" />
            Where comforting flavors meet gentle purrs &amp; soulful conversations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center pt-6 flex-wrap">
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                onExploreMenu();
              }}
              className="w-full sm:w-auto px-9 py-4 bg-accent text-background rounded-full font-bold text-sm hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl shadow-accent/20 cursor-pointer"
            >
              Explore Menu
            </a>

            <a
              href={CAFE_INFO.zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-background rounded-full font-bold text-sm hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl shadow-accent/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Order Online</span>
              <span className="text-xs">↗</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 glass-button border-accent/30 text-accent hover:border-accent hover:bg-accent/10 rounded-full text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <PartyPopper size={16} />
              <span>Book Event / Party</span>
            </button>

            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 glass rounded-full flex items-center justify-center gap-2.5 hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md cursor-pointer text-text text-sm"
            >
              <MapPin size={17} className="text-accent" />
              <span>Location</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Discovery Indicator */}
      <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-muted font-bold opacity-60">
          Scroll to discover
        </span>
        <div className="animate-bounce">
          <ChevronDown size={24} className="text-accent" />
        </div>
      </div>
    </section>
  );
};


