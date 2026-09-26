import React from 'react';
import {
  Wifi,
  Wind,
  Clock,
  Car,
  Utensils,
  Coffee,
  Languages,
  Accessibility,
  HeartHandshake,
  Sparkles,
  Bath,
  Tv,
  Shield,
  Zap,
  CheckCircle,
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';

export const AmenitiesSection: React.FC = () => {
  const iconMap: Record<string, any> = {
    Wifi,
    Wind,
    Clock,
    Car,
    Utensils,
    Coffee,
    Languages,
    Accessibility,
    HeartHandshake,
    Sparkles,
    Bath,
    Tv,
    Shield,
    Zap,
  };

  const fullAmenitiesList = [
    { name: 'Split AC in Every Room', icon: Wind, desc: 'Individual temperature controls' },
    { name: 'Room Heater on Demand', icon: Zap, desc: 'Cozy warmth for winter nights' },
    { name: 'High-Speed Wi-Fi', icon: Wifi, desc: 'Seamless streaming & business work' },
    { name: '24-Hour Front Desk', icon: Clock, desc: 'Late night arrival assistance' },
    { name: 'Free Valet & Parking', icon: Car, desc: 'Secure parking for cars & tour buses' },
    { name: 'In-House Dining Kitchen', icon: Utensils, desc: 'Fresh vegetarian meals & room service' },
    { name: 'Massive Breakfast Spread', icon: Coffee, desc: 'Energizing morning start for Yatris' },
    { name: 'Multi-Language Staff', icon: Languages, desc: 'Hindi, English & Rajasthani' },
    { name: 'Wheelchair Accessible', icon: Accessibility, desc: 'Senior-citizen and disability friendly' },
    { name: 'Pet Friendly Hotel', icon: HeartHandshake, desc: 'Your beloved pets are welcome' },
    { name: 'Salon & Grooming Parlour', icon: Sparkles, desc: 'Wedding styling & hair grooming' },
    { name: '24/7 Hot Water Geyser', icon: Bath, desc: 'Instant hot showers anytime' },
    { name: '43" Smart LED TV', icon: Tv, desc: 'DTH channels & YouTube streaming' },
    { name: '100% Power Backup', icon: Zap, desc: 'Uninterrupted power supply' },
    { name: 'Round-the-Clock CCTV', icon: Shield, desc: 'Safe & secure family environment' },
    { name: 'Express Daily Housekeeping', icon: CheckCircle, desc: 'Crisp fresh linens & sanitized rooms' },
  ];

  return (
    <section id="amenities" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-bold block">
          Comprehensive Facilities
        </span>
        <h2 className="text-4xl sm:text-5xl font-display font-medium text-text">
          Designed for Utmost Comfort
        </h2>
        <p className="text-base sm:text-lg text-text/75 font-light leading-relaxed">
          From cold winter nights with dedicated room heaters to modern split air conditioning, secure valet parking, and 24-hour reception, Hotel Shivansh fulfills every traveler need.
        </p>
      </div>

      {/* Grid of Amenities */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {fullAmenitiesList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass !rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1 bg-[#11140e]/80"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-[#0d0f0b] transition-all">
                <Icon size={20} />
              </div>
              <h3 className="font-display font-medium text-base sm:text-lg text-text group-hover:text-accent transition-colors mb-1">
                {item.name}
              </h3>
              <p className="text-xs text-text/60 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Highlight Box for Front Desk & Transit */}
      <div className="mt-14 glass !rounded-3xl p-6 sm:p-10 border border-white/10 bg-gradient-to-r from-accent/10 via-[#11140e] to-black/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-accent font-bold">Check-In &amp; Check-Out</p>
          <h4 className="text-xl font-display font-medium text-text">Check-in 12:00 PM • Check-out 11:00 AM</h4>
          <p className="text-xs text-text/70">Early morning check-in and luggage storage available on request for pilgrims.</p>
        </div>

        <div className="space-y-2 md:border-x md:border-white/10 md:px-6">
          <p className="text-xs uppercase tracking-widest text-accent font-bold">Transit Advantage</p>
          <h4 className="text-xl font-display font-medium text-text">Right Opp. Roadways Depot</h4>
          <p className="text-xs text-text/70">Middle Gate Ke Samne. Walk across in 30 seconds straight into the hotel.</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-accent font-bold">Payment Methods</p>
          <h4 className="text-xl font-display font-medium text-text">Cash, UPI &amp; Cards</h4>
          <p className="text-xs text-text/70">Google Pay, PhonePe, Paytm, Net Banking, and all major cards accepted.</p>
        </div>
      </div>
    </section>
  );
};
