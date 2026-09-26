import React, { useState } from 'react';
import { Check, Star, Users, Bed, Maximize2, ShieldCheck, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import { ROOMS_DATA, RoomOption } from '../data/roomsData';
import { HOTEL_INFO } from '../data/hotelInfo';

interface RoomsSectionProps {
  onBookRoom: (roomId: string) => void;
  onOpenCompare?: () => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onBookRoom, onOpenCompare }) => {
  const [filter, setFilter] = useState<'all' | 'popular' | 'family'>('all');

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filter === 'popular') return room.popular;
    if (filter === 'family') return room.id.includes('family') || room.id.includes('group');
    return true;
  });

  return (
    <section id="rooms" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-bold block">
          Affordable Luxury • Starting at ₹1,999 / Night
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-text">
          Curated Rooms &amp; Suites
        </h2>
        <p className="text-base sm:text-lg text-text/75 font-light leading-relaxed">
          Every room at Hotel Shivansh is meticulously sanitized and appointed with modern split air conditioning, winter room heaters, high-speed Wi-Fi, and plush bedding for a deep and peaceful rest.
        </p>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 pt-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-accent text-[#0d0f0b] shadow-lg'
                : 'glass text-text/70 hover:text-text'
            }`}
          >
            All Accommodations ({ROOMS_DATA.length})
          </button>
          <button
            onClick={() => setFilter('popular')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'popular'
                ? 'bg-accent text-[#0d0f0b] shadow-lg'
                : 'glass text-text/70 hover:text-text'
            }`}
          >
            Best Sellers
          </button>
          <button
            onClick={() => setFilter('family')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'family'
                ? 'bg-accent text-[#0d0f0b] shadow-lg'
                : 'glass text-text/70 hover:text-text'
            }`}
          >
            Family &amp; Groups
          </button>
          {onOpenCompare && (
            <button
              onClick={onOpenCompare}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-accent/40 text-accent hover:bg-accent/15 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles size={12} />
              <span>Compare All Rooms</span>
            </button>
          )}
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="glass !rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col group hover:shadow-2xl hover:shadow-accent/10"
          >
            {/* Room Image Container */}
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11140e] via-transparent to-black/30" />

              {/* Badge */}
              {room.badge && (
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-accent text-[#0d0f0b] shadow-lg">
                    {room.badge}
                  </span>
                </div>
              )}

              {/* Rating Sticker */}
              <div className="absolute top-4 right-4 glass !rounded-full px-3 py-1 flex items-center gap-1 text-xs font-bold text-amber-300 border border-amber-500/30">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span>5.0</span>
              </div>

              {/* Price Tag Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-display font-medium text-text group-hover:text-accent transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-text/80">{room.subtitle}</p>
                </div>
                <div className="text-right glass !rounded-xl px-3 py-1.5 border border-accent/30 bg-[#0d0f0b]/90">
                  <div className="text-[10px] text-muted line-through">₹{room.originalPrice}</div>
                  <div className="text-lg sm:text-xl font-bold text-accent">
                    ₹{room.pricePerNight}
                    <span className="text-[10px] text-text/70 font-normal"> / night</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Specs & Details */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
              {/* Specs Bar */}
              <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/5 text-center text-xs">
                <div className="flex flex-col items-center gap-1">
                  <Users size={14} className="text-accent" />
                  <span className="text-text/90 font-medium">{room.capacity}</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-white/10">
                  <Bed size={14} className="text-accent" />
                  <span className="text-text/90 font-medium">{room.bedType}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Maximize2 size={14} className="text-accent" />
                  <span className="text-text/90 font-medium">{room.roomSize}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-text/80 leading-relaxed font-light">
                {room.description}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-2 text-xs text-text/80">
                {room.features.slice(0, 6).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-accent" />
                    </div>
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onBookRoom(room.id)}
                  className="flex-1 py-3 px-6 bg-accent text-[#0d0f0b] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  <span>Reserve Room (₹{room.pricePerNight})</span>
                </button>

                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                    `Namaste Hotel Shivansh, I want to book ${room.name} (₹${room.pricePerNight}/night). Please check availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 glass rounded-xl text-emerald-400 hover:text-white hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle size={14} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Pilgrimage / Wedding Note */}
      <div className="mt-12 glass !rounded-2xl p-6 sm:p-8 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-accent/10 via-transparent to-accent/5">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Sparkles size={16} className="text-accent" />
            <h4 className="text-lg font-display font-medium text-text">
              Planning a Khatu Shyam / Salasar Yatra or Wedding Stay?
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-text/75 max-w-2xl font-light">
            We provide customized bulk room bookings, tour bus parking right on the premises, customized vegetarian meals, and round-the-clock taxi cab assistance.
          </p>
        </div>

        <button
          onClick={() => onBookRoom('group-pilgrim-wing')}
          className="shrink-0 px-6 py-3 bg-white/10 hover:bg-accent hover:text-[#0d0f0b] border border-accent/40 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
        >
          Request Group Tariff
        </button>
      </div>
    </section>
  );
};
