import React, { useState } from 'react';
import {
  Compass,
  Clock,
  Car,
  MapPin,
  Sparkles,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Sun,
  Moon,
  Flame,
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';

interface DestinationInfo {
  id: string;
  name: string;
  distance: string;
  travelTime: string;
  oneWayCabFare: number;
  roundTripCabFare: number;
  highlight: string;
  darshanSlots: { name: string; time: string; type: string }[];
  busInfo: string;
  tips: string;
}

const DESTINATIONS: DestinationInfo[] = [
  {
    id: 'khatu-shyam',
    name: 'Shree Khatu Shyam Ji Dham',
    distance: '45 km',
    travelTime: 'Approx. 50 mins',
    oneWayCabFare: 1100,
    roundTripCabFare: 1800,
    highlight: 'Hare Ka Sahara, Lakhdatar Baba Shyam Temple',
    darshanSlots: [
      { name: 'Mangala Aarti', time: '05:30 AM', type: 'Morning Bliss' },
      { name: 'Shringar Aarti', time: '08:00 AM', type: 'Divine Darshan' },
      { name: 'Bhog Aarti', time: '12:30 PM', type: 'Afternoon Bhog' },
      { name: 'Sandhya Aarti', time: '06:30 PM', type: 'Evening Aarti' },
      { name: 'Shayan Aarti', time: '09:30 PM', type: 'Night Shayan' },
    ],
    busInfo: 'Direct buses available every 20-30 mins from Roadways Depot right opposite hotel.',
    tips: 'Early morning 5:30 AM Mangala Aarti has the most serene vibe. Hotel Shivansh provides 4:30 AM wake-up call and hot ginger tea.',
  },
  {
    id: 'salasar-balaji',
    name: 'Shree Salasar Balaji Mandir',
    distance: '50 km',
    travelTime: 'Approx. 55 mins',
    oneWayCabFare: 1200,
    roundTripCabFare: 1950,
    highlight: 'Siddha Peeth of Lord Hanuman Ji (Moustache & Beard Idol)',
    darshanSlots: [
      { name: 'Morning Darshan & Aarti', time: '05:00 AM – 10:30 AM', type: 'Morning' },
      { name: 'Raj Bhog Aarti', time: '11:15 AM', type: 'Mid-Day' },
      { name: 'Dhoop & Sandhya Aarti', time: '06:00 PM – 07:30 PM', type: 'Evening' },
      { name: 'Shayan Aarti', time: '10:00 PM', type: 'Closing' },
    ],
    busInfo: 'Salasar Express buses start directly from Roadways Bus Stand opposite our hotel entrance.',
    tips: 'Tuesday and Saturday see maximum devotion. Savamani prasad can be coordinated through local vendor contacts.',
  },
  {
    id: 'jeen-mata',
    name: 'Shri Jeen Mataji Shakti Peeth',
    distance: '28 km',
    travelTime: 'Approx. 35 mins',
    oneWayCabFare: 800,
    roundTripCabFare: 1400,
    highlight: 'Ancient 1000-year-old Kuldevi Shrine in Aravalli Valley',
    darshanSlots: [
      { name: 'Pratah Aarti', time: '05:30 AM', type: 'Morning' },
      { name: 'Madhyahna Aarti', time: '12:00 PM', type: 'Afternoon' },
      { name: 'Sandhya Aarti', time: '07:00 PM', type: 'Evening' },
    ],
    busInfo: 'Direct mini-buses and private autos ply from Roadways circle.',
    tips: 'Surrounded by tranquil hills. Best combined with Harshnath Mahadev Temple on a half-day excursion.',
  },
  {
    id: 'harshnath',
    name: 'Harshnath Mahadev & Harsh Mountain',
    distance: '14 km',
    travelTime: 'Approx. 20 mins',
    oneWayCabFare: 600,
    roundTripCabFare: 1000,
    highlight: '10th Century Monumental Shiva Ruins & Scenic Hilltop Views',
    darshanSlots: [
      { name: 'Sunrise Darshan & Trek', time: '06:00 AM – 10:00 AM', type: 'Best Views' },
      { name: 'Sunset Vista', time: '05:00 PM – 07:00 PM', type: 'Sunset' },
    ],
    busInfo: 'Shared jeeps and private cabs available directly outside hotel.',
    tips: 'Carry a camera! The winding mountain road and Shekhawati wind turbines offer stunning photo opportunities.',
  },
];

export const YatraPlanner: React.FC = () => {
  const [selectedDestId, setSelectedDestId] = useState<string>('khatu-shyam');
  const [tripType, setTripType] = useState<'round-trip' | 'one-way'>('round-trip');
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv'>('sedan');

  const dest = DESTINATIONS.find((d) => d.id === selectedDestId) || DESTINATIONS[0];

  const baseFare = tripType === 'round-trip' ? dest.roundTripCabFare : dest.oneWayCabFare;
  const finalFare = vehicleType === 'suv' ? baseFare + 600 : baseFare;

  const handleBookCabWhatsApp = () => {
    let msg = `*🚖 CAB & YATRA INQUIRY — HOTEL SHIVANSH SIKAR*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Destination: ${dest.name}\n`;
    msg += `Trip Type: ${tripType === 'round-trip' ? 'Round Trip (Return to Hotel)' : 'One-Way Drop'}\n`;
    msg += `Vehicle: ${vehicleType === 'suv' ? 'Spacious SUV (Innova / Ertiga)' : 'Comfortable AC Sedan (Dzire / Etios)'}\n`;
    msg += `Estimated Cab Fare: ₹${finalFare.toLocaleString('en-IN')}\n`;
    msg += `Pickup Point: Hotel Shivansh (Opp. Roadways Bus Depot, Sikar)\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Please confirm driver availability and pickup timings. Jai Shree Shyam! 🙏`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <section id="yatra-planner" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
          <Compass size={13} />
          <span>Interactive Pilgrimage &amp; Cab Calculator</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-medium text-text">
          Live Aarti Timings &amp; Yatra Cab Planner
        </h2>
        <p className="text-base sm:text-lg text-text/75 font-light leading-relaxed">
          Planning your holy darshan at Baba Khatu Shyam or Salasar Balaji? Check accurate daily aarti timings, estimated travel duration, and transparent taxi cab fares right here.
        </p>

        {/* Destination Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {DESTINATIONS.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDestId(d.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedDestId === d.id
                  ? 'bg-accent text-[#0d0f0b] shadow-xl shadow-accent/20 scale-105'
                  : 'glass text-text/75 hover:text-text hover:border-accent/40'
              }`}
            >
              {d.name.replace('Shree ', '').replace('Shri ', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Destination Showcase Card */}
      <div className="glass !rounded-3xl p-6 sm:p-10 border border-accent/30 bg-[#11140e]/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Destination Info & Live Aarti Schedule (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-accent font-semibold uppercase tracking-wider">
              <MapPin size={14} />
              <span>{dest.distance} from Hotel Shivansh • {dest.travelTime}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-medium text-text">
              {dest.name}
            </h3>
            <p className="text-xs sm:text-sm text-amber-300 font-medium">
              {dest.highlight}
            </p>
          </div>

          {/* Aarti Schedule Card */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-muted font-bold flex items-center gap-1.5">
              <Clock size={13} className="text-accent" />
              <span>Daily Sacred Aarti &amp; Darshan Schedule</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {dest.darshanSlots.map((slot, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div>
                      <p className="font-semibold text-text">{slot.name}</p>
                      <p className="text-[10px] text-muted">{slot.type}</p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-accent">{slot.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transit Advice Box */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold">
              <Sparkles size={14} />
              <span>Direct Roadways Bus Advantage:</span>
            </div>
            <p className="text-text/80 leading-relaxed font-light">
              {dest.busInfo}
            </p>
            <p className="text-[11px] text-amber-200/80 italic">
              💡 Pro Yatra Tip: {dest.tips}
            </p>
          </div>
        </div>

        {/* Right: Dedicated Cab Booking Fare Calculator (5 Cols) */}
        <div className="lg:col-span-5 glass !rounded-2xl p-6 sm:p-7 border border-white/10 bg-black/40 space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-accent font-bold">
              Front Desk Taxi Arrangement
            </span>
            <h4 className="text-xl font-display font-medium text-text flex items-center gap-2">
              <Car size={18} className="text-accent" />
              <span>Cab Fare Calculator</span>
            </h4>
            <p className="text-xs text-text/70">
              Verified local drivers, clean AC vehicles, and honest pre-fixed rates.
            </p>
          </div>

          {/* Trip Type Selector */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/[0.04] border border-white/5 text-xs">
            <button
              onClick={() => setTripType('round-trip')}
              className={`py-2 px-3 rounded-lg font-semibold transition-all cursor-pointer ${
                tripType === 'round-trip'
                  ? 'bg-accent text-[#0d0f0b] shadow-md'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Round Trip (With Wait)
            </button>
            <button
              onClick={() => setTripType('one-way')}
              className={`py-2 px-3 rounded-lg font-semibold transition-all cursor-pointer ${
                tripType === 'one-way'
                  ? 'bg-accent text-[#0d0f0b] shadow-md'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              One-Way Drop
            </button>
          </div>

          {/* Vehicle Type Selector */}
          <div className="space-y-1.5 text-xs">
            <label className="block text-muted font-medium text-[11px]">Select Vehicle Type:</label>
            <div className="grid grid-cols-2 gap-2">
              <div
                onClick={() => setVehicleType('sedan')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  vehicleType === 'sedan'
                    ? 'border-accent bg-accent/15 ring-1 ring-accent'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <p className="font-bold text-text">AC Sedan</p>
                <p className="text-[10px] text-muted">Dzire / Etios (Up to 4 Guests)</p>
              </div>
              <div
                onClick={() => setVehicleType('suv')}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  vehicleType === 'suv'
                    ? 'border-accent bg-accent/15 ring-1 ring-accent'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <p className="font-bold text-text">Spacious SUV</p>
                <p className="text-[10px] text-muted">Innova / Ertiga (6-7 Guests)</p>
              </div>
            </div>
          </div>

          {/* Calculated Fare Box */}
          <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-muted uppercase">Fixed Taxi Tariff:</span>
              <p className="text-2xl font-bold text-accent">₹{finalFare.toLocaleString('en-IN')}</p>
              <p className="text-[10px] text-emerald-400">All Toll &amp; Parking Included</p>
            </div>
            <div className="text-right text-[11px] text-text/80">
              <p>Pickup: Hotel Gate</p>
              <p>24/7 Availability</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleBookCabWhatsApp}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle size={16} />
              <span>Book Cab via WhatsApp</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="w-full py-3 glass hover:bg-white/10 text-text rounded-xl font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-white/10"
            >
              <Phone size={14} className="text-accent" />
              <span>Call Front Desk for Cab ({HOTEL_INFO.displayPhone})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
