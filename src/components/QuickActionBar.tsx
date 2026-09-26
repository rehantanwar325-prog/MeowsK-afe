import React from 'react';
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';

interface QuickActionBarProps {
  onOpenBooking: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#0d0f0b]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
      <div className="grid grid-cols-4 gap-2">
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.04] text-text hover:text-accent border border-white/5 active:scale-95 transition-all text-center"
        >
          <Phone size={16} className="text-accent" />
          <span className="text-[10px] font-medium mt-1">Call</span>
        </a>

        <a
          href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent('Namaste Hotel Shivansh, I want to book a room.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-600/15 text-emerald-400 border border-emerald-500/25 active:scale-95 transition-all text-center"
        >
          <MessageCircle size={16} />
          <span className="text-[10px] font-medium mt-1">WhatsApp</span>
        </a>

        <a
          href={HOTEL_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.04] text-text hover:text-accent border border-white/5 active:scale-95 transition-all text-center"
        >
          <MapPin size={16} className="text-accent" />
          <span className="text-[10px] font-medium mt-1">Map</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-r from-accent to-[#b89552] text-[#0d0f0b] font-bold active:scale-95 transition-all text-center shadow-lg"
        >
          <Calendar size={16} />
          <span className="text-[10px] font-bold mt-1 uppercase tracking-tight">Book Now</span>
        </button>
      </div>
    </aside>
  );
};
