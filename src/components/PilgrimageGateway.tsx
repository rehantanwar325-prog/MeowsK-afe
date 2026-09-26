import React from 'react';
import { PILGRIMAGE_SPOTS, PilgrimageSpot } from '../data/pilgrimageData';
import { MapPin, Navigation, Clock, Car, Compass, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';

interface PilgrimageGatewayProps {
  onOpenBooking: () => void;
}

export const PilgrimageGateway: React.FC<PilgrimageGatewayProps> = ({ onOpenBooking }) => {
  return (
    <section id="pilgrimage" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
          <Sparkles size={13} />
          <span>Sacred Yatra Hub • Sikar Rajasthan</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-medium text-text">
          Gateway to Khatu Shyam &amp; Salasar Balaji
        </h2>
        <p className="text-base sm:text-lg text-text/75 font-light leading-relaxed">
          Situated right opposite Sikar Central Roadways Bus Stand, Hotel Shivansh is the preferred basecamp for thousands of pilgrims visiting the most sacred shrines of Rajasthan.
        </p>
      </div>

      {/* Spots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PILGRIMAGE_SPOTS.map((spot) => (
          <div
            key={spot.id}
            className="glass !rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 bg-[#11140e]/90"
          >
            <div className="space-y-4">
              {/* Distance Header */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/15 text-accent border border-accent/30">
                  {spot.distance} from Hotel
                </span>
                <span className="text-xs text-text/60 flex items-center gap-1 font-medium">
                  <Clock size={12} className="text-accent" />
                  {spot.driveTime}
                </span>
              </div>

              {/* Title & Deity */}
              <div>
                <h3 className="text-2xl font-display font-medium text-text group-hover:text-accent transition-colors">
                  {spot.name}
                </h3>
                <p className="text-xs text-amber-300/90 font-medium mt-0.5">{spot.deity}</p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-text/75 font-light leading-relaxed">
                {spot.description}
              </p>

              {/* Timing & Travel Tip */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-xs">
                <div className="text-text/90 font-medium flex items-start gap-1.5">
                  <Compass size={13} className="text-accent shrink-0 mt-0.5" />
                  <span>{spot.timings}</span>
                </div>
                <div className="text-text/70 italic text-[11px] leading-relaxed">
                  Tip: {spot.travelTip}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
              {spot.cabAssistance ? (
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <Car size={13} />
                  <span>Taxi Cab Arranged 24/7</span>
                </span>
              ) : (
                <span className="text-xs text-text/60">Local Auto Available</span>
              )}

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                  `Namaste Hotel Shivansh, I want to book stay and inquire about taxi/travel to ${spot.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-accent hover:text-white uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                <span>Inquire</span>
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Yatri Services Banner */}
      <div className="mt-14 glass !rounded-3xl p-8 sm:p-10 border border-accent/30 bg-gradient-to-br from-amber-950/30 via-[#11140e] to-black/80 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center lg:text-left max-w-2xl">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Special Services for Pilgrims</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-medium text-text">
            Early Darshan Wake-up Calls, Safe Luggage Storage &amp; Cab Booking
          </h3>
          <p className="text-xs sm:text-sm text-text/75 font-light leading-relaxed">
            Planning morning Mangala Aarti at Baba Shyam Temple or Salasar Balaji? We arrange reliable private cabs at pre-fixed honest rates, provide early check-in assistance, and serve piping hot tea/coffee before departure.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 bg-accent text-[#0d0f0b] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-accent/20 cursor-pointer text-center"
          >
            Book Pilgrimage Stay
          </button>
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="px-6 py-3.5 glass rounded-xl text-text hover:text-accent border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Phone size={14} className="text-accent" />
            <span>Call for Cab Help</span>
          </a>
        </div>
      </div>
    </section>
  );
};
