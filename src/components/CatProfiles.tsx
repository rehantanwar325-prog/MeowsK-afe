import React from 'react';
import { Heart, Sparkles, HeartHandshake, CameraOff, UtensilsCrossed, Volume2, ShieldCheck, Calendar, PartyPopper } from 'lucide-react';
import { CAT_PROFILES } from '../data/catsData';

interface CatProfilesProps {
  onOpenBooking: () => void;
}

export const CatProfiles: React.FC<CatProfilesProps> = ({ onOpenBooking }) => {
  return (
    <section id="cats" className="py-24 lg:py-32 relative bg-background text-text overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs tracking-[0.5em] uppercase text-accent font-bold mb-6 block">
            The Feline Family
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-text mb-8 tracking-tighter">
            Resident <span className="italic font-light text-accent">Purr Masters</span>
          </h2>
          <p className="text-muted text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Every cat here has a distinct personality, a favorite snooze nook, and gentle purrs to share with visitors.
          </p>
        </div>

        {/* Cat Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {CAT_PROFILES.map((cat) => (
            <div
              key={cat.id}
              className="glass glass-hover p-7 rounded-[2rem] border-white/5 bg-[#11140e]/40 flex flex-col justify-between group"
            >
              <div>
                {/* Header Avatar Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-medium text-xl border shadow-lg transition-transform duration-500 group-hover:scale-105 ${cat.accent}`}>
                    {cat.initial}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] uppercase tracking-widest font-bold">
                    {cat.age}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl font-display text-text group-hover:text-accent transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-1">
                  {cat.role}
                </p>
                <p className="text-xs text-muted mt-1 font-light">
                  Breed: {cat.breed}
                </p>

                {/* Personality Badges */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {cat.personality.map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-muted text-[10px] font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Info List */}
                <div className="space-y-2 text-xs text-muted pt-3 border-t border-white/5 font-light">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted/60 block font-semibold">
                      Favorite Nap Spot
                    </span>
                    <span className="text-text font-normal">{cat.favoriteSpot}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted/60 block font-semibold">
                      Loves
                    </span>
                    <span className="text-text font-normal">{cat.favoriteActivity}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-5 pt-3 border-t border-white/5 text-xs text-accent italic font-display font-light">
                "{cat.quote}"
              </div>
            </div>
          ))}
        </div>

        {/* Visitor Etiquette Guide in Large Glass Panel */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] glass border-white/5 bg-[#11140e]/50 max-w-5xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/5">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-accent font-bold mb-2 block">
                Visitor Guide
              </span>
              <h3 className="text-3xl sm:text-4xl font-display text-text">
                Cat Lounge Etiquette
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-1 font-light">
                Help us keep our fur babies safe, relaxed, and happy during your visit.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-accent text-background font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg shadow-accent/20 cursor-pointer whitespace-nowrap"
            >
              <PartyPopper size={15} />
              <span>Book Event / Party</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                <HeartHandshake size={20} />
              </div>
              <h4 className="font-display font-medium text-text text-base mb-1">Let Them Approach You</h4>
              <p className="text-xs text-muted font-light leading-relaxed">
                Extend your hand gently and let them sniff you first before petting.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                <CameraOff size={20} />
              </div>
              <h4 className="font-display font-medium text-text text-base mb-1">No Camera Flash</h4>
              <p className="text-xs text-muted font-light leading-relaxed">
                Feel free to capture photos at our Cat Wall, but keep flash turned off for their sensitive eyes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                <UtensilsCrossed size={20} />
              </div>
              <h4 className="font-display font-medium text-text text-base mb-1">No Human Food</h4>
              <p className="text-xs text-muted font-light leading-relaxed">
                Human spices harm felines. Specially formulated cat treats are available from our cafe team.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                <Volume2 size={20} />
              </div>
              <h4 className="font-display font-medium text-text text-base mb-1">Tranquil Atmosphere</h4>
              <p className="text-xs text-muted font-light leading-relaxed">
                Keep conversations gentle to maintain the tranquil sanctuary environment for both guests and cats.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-display font-medium text-text text-base mb-1">Hand Hygiene</h4>
              <p className="text-xs text-muted font-light leading-relaxed">
                Sanitize hands before and after cuddling at our contactless sanitization stands.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                <Sparkles size={20} />
              </div>
              <h4 className="font-display font-medium text-text text-base mb-1">Zero Pressure Space</h4>
              <p className="text-xs text-muted font-light leading-relaxed">
                If a kitty is sleeping or taking a nap, please allow them undisturbed resting time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

