import React, { useState } from 'react';
import { MapPin, Phone, Calendar, Users, Star, ArrowRight, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';
import { ROOMS_DATA } from '../data/roomsData';

interface HeroProps {
  onOpenBooking: (roomType?: string, prefill?: { checkIn: string; checkOut: string; guests: string }) => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRooms }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [checkIn, setCheckIn] = useState(() => new Date().toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(() => tomorrow.toISOString().split('T')[0]);
  const [selectedRoom, setSelectedRoom] = useState('deluxe-ac-room');
  const [guests, setGuests] = useState('2 Guests');

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedRoom, { checkIn, checkOut, guests });
  };

  return (
    <section id="hero" className="relative min-h-[105vh] w-full bg-[#0d0f0b] flex flex-col justify-between pt-28 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hotel-exterior.jpg"
          alt="Hotel Shivansh Sikar Exterior View"
          className="w-full h-full object-cover object-center brightness-[0.55] contrast-[1.05] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f0b] via-[#0d0f0b]/50 to-[#0d0f0b]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/15 rounded-full blur-[170px] pointer-events-none z-10" />

      {/* Main Hero Header */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 text-center my-auto">
        <div className="space-y-6 animate-fade-in-up">
          {/* Top Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-lg">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span>5.0 / 5.0 Justdial Rated</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-text/90 border border-white/15 backdrop-blur-md">
              <MapPin size={13} className="text-accent" />
              <span>Opposite Roadways Bus Depot, Sikar</span>
            </span>

            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              <Sparkles size={12} />
              <span>Open 24 Hours • 365 Days</span>
            </span>
          </div>

          {/* Grand Heading */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-medium text-text tracking-tighter leading-[0.95]">
              HOTEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eed596] via-accent to-[#b89552] italic font-light drop-shadow-[0_0_35px_rgba(200,169,110,0.5)]">SHIVANSH</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl uppercase tracking-[0.25em] text-accent font-semibold">
              Luxury Comfort &amp; Hospitality in the Heart of Sikar
            </p>
          </div>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-text/80 max-w-3xl mx-auto font-light leading-relaxed">
            The premier stay right opposite the Central Roadways Bus Stand. Enjoy modern AC rooms, winter room heaters, appetizing in-house dining, free valet parking, and seamless connectivity to <span className="text-accent font-medium">Shri Khatu Shyam Ji (45 km)</span> and <span className="text-accent font-medium">Salasar Balaji (50 km)</span>.
          </p>

          {/* Primary Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 sm:px-9 sm:py-4 bg-gradient-to-r from-accent via-[#dbb875] to-[#c8a96e] text-[#0d0f0b] rounded-full font-bold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/25 cursor-pointer flex items-center gap-2"
            >
              <Calendar size={16} />
              <span>Book Room (From ₹1,999)</span>
            </button>

            <button
              onClick={onExploreRooms}
              className="px-7 py-3.5 sm:px-8 sm:py-4 glass-button text-text hover:text-accent border border-white/20 hover:border-accent/60 rounded-full font-semibold text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Rooms &amp; Tariffs</span>
              <ArrowRight size={15} />
            </button>

            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent('Namaste Hotel Shivansh, I want to book a room. Please share tariffs and availability.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 sm:px-7 sm:py-4 glass rounded-full text-emerald-300 hover:text-white hover:bg-emerald-600/30 border border-emerald-500/30 text-sm font-semibold transition-all flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>

        {/* Quick Room Booking Form Card */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto glass !rounded-2xl p-4 sm:p-6 border border-accent/30 shadow-2xl backdrop-blur-2xl bg-[#11140e]/90 text-left">
          <form onSubmit={handleQuickCheck} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            {/* Check-In */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-muted font-bold mb-1.5 flex items-center gap-1">
                <Calendar size={12} className="text-accent" />
                <span>Check-In</span>
              </label>
              <input
                type="date"
                value={checkIn}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-text focus:outline-none focus:border-accent"
              />
            </div>

            {/* Check-Out */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-muted font-bold mb-1.5 flex items-center gap-1">
                <Calendar size={12} className="text-accent" />
                <span>Check-Out</span>
              </label>
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-text focus:outline-none focus:border-accent"
              />
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-muted font-bold mb-1.5">
                Room Category
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-text focus:outline-none focus:border-accent"
              >
                {ROOMS_DATA.map((r) => (
                  <option key={r.id} value={r.id} className="bg-[#11140e] text-white">
                    {r.name} — ₹{r.pricePerNight}
                  </option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-muted font-bold mb-1.5 flex items-center gap-1">
                <Users size={12} className="text-accent" />
                <span>Guests</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-text focus:outline-none focus:border-accent"
              >
                <option value="1 Guest" className="bg-[#11140e]">1 Adult</option>
                <option value="2 Guests" className="bg-[#11140e]">2 Adults</option>
                <option value="3 Guests" className="bg-[#11140e]">3 Adults</option>
                <option value="4+ Family / Group" className="bg-[#11140e]">4+ Family / Group</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 bg-accent text-[#0d0f0b] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>Check &amp; Book</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Highlights Strip */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="glass !rounded-xl p-3 sm:p-4 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <Star size={18} className="fill-accent text-accent" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-text">5.0 Star Rated</p>
              <p className="text-[11px] text-muted">100% Verified Reviews</p>
            </div>
          </div>

          <div className="glass !rounded-xl p-3 sm:p-4 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-text">0 Mtr Walk</p>
              <p className="text-[11px] text-muted">Opp. Roadways Bus Stand</p>
            </div>
          </div>

          <div className="glass !rounded-xl p-3 sm:p-4 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-text">From ₹1,999/Night</p>
              <p className="text-[11px] text-muted">Budget-Friendly Luxury</p>
            </div>
          </div>

          <div className="glass !rounded-xl p-3 sm:p-4 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-text">24/7 Front Desk</p>
              <p className="text-[11px] text-muted">Free Valet &amp; Parking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
