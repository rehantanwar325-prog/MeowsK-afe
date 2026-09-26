import React from 'react';
import { ShieldCheck, Award, Heart, Sparkles, MapPin, Users, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';

export const AboutStory: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Images Collage (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl">
            <img
              src="/images/hotel-reception.jpg"
              alt="Hotel Shivansh Welcoming Lobby"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f0b] via-transparent to-transparent opacity-80" />

            {/* Overlaid Badge */}
            <div className="absolute bottom-6 left-6 right-6 glass !rounded-2xl p-4 border border-accent/30 bg-[#0d0f0b]/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent text-[#0d0f0b] flex items-center justify-center font-bold text-sm shrink-0">
                  2025
                </div>
                <div>
                  <p className="font-display font-medium text-text text-sm">Year of Establishment</p>
                  <p className="text-[11px] text-accent">Freshly Built Modern Luxury Infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Offset Card */}
          <div className="hidden sm:block absolute -bottom-6 -right-6 glass !rounded-2xl p-4 border border-white/10 shadow-2xl max-w-[200px] bg-[#11140e]/95 animate-fade-in-up">
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles size={16} />
              <span className="text-xs font-bold">5.0 Star Rated</span>
            </div>
            <p className="text-[11px] text-text/75 mt-1 font-light">
              100% positive guest feedback across all platforms.
            </p>
          </div>
        </div>

        {/* Right: Story Content (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30">
              <Award size={13} />
              <span>Authentic Rajasthani Hospitality</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-medium text-text leading-tight">
              A Peaceful Oasis in the Vibrant Heart of Sikar
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">
              Devoted to Comfort, Cleanliness &amp; Memorable Journeys
            </p>
          </div>

          <p className="text-sm sm:text-base text-text/80 leading-relaxed font-light">
            Founded with a vision to redefine budget-friendly luxury in Shekhawati, <span className="text-text font-medium">Hotel Shivansh</span> stands directly opposite the Middle Gate of Sikar Roadways Bus Depot. Whether you are arriving late from Jaipur, Delhi, or Bikaner, our tidy welcoming lobby and caring multi-language team ensure you feel instantly at ease.
          </p>

          <p className="text-sm sm:text-base text-text/80 leading-relaxed font-light">
            We understand the needs of sacred yatris journeying to <span className="text-accent font-medium">Khatu Shyam Ji</span> and <span className="text-accent font-medium">Salasar Balaji</span>. That is why our property combines round-the-clock hot water, winter room heaters, appetizing pure dining, and dedicated travel support so your pilgrimage begins with peace of mind.
          </p>

          {/* Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-2">
                <MapPin size={16} />
              </div>
              <h4 className="font-semibold text-xs text-text">Zero Transit Hassle</h4>
              <p className="text-[11px] text-muted">Directly across the Roadways Bus Station.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-2">
                <Users size={16} />
              </div>
              <h4 className="font-semibold text-xs text-text">Multi-Language Care</h4>
              <p className="text-[11px] text-muted">Warm assistance in Hindi, English &amp; Marwari.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-2">
                <Heart size={16} />
              </div>
              <h4 className="font-semibold text-xs text-text">Family &amp; Pet Welcoming</h4>
              <p className="text-[11px] text-muted">Comfortable, safe, and hygienic environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
