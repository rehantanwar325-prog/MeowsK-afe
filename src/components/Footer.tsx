import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Star, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';
import { ROOMS_DATA } from '../data/roomsData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0c08] text-text pt-16 pb-28 sm:pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (2 cols on LG) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 border border-accent/40 bg-gradient-to-br from-accent/30 to-black/80 flex items-center justify-center shadow-lg">
                <img src="/favicon.svg" alt="Shivansh Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl tracking-tight text-text">
                  HOTEL SHIVANSH
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium mt-0.5">
                  Opposite Roadways Bus Depot • Sikar
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text/75 font-light leading-relaxed max-w-sm">
              Sikar’s premier hospitality stay starting at ₹1,999/night. Modern AC rooms, room heaters, pure dining, free valet parking, and effortless transit to Khatu Shyam Ji and Salasar Balaji.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/25">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span>Rated 5.0 on Justdial (11 Reviews • 55 Photos)</span>
            </div>
          </div>

          {/* Col 2: Accommodations */}
          <div className="space-y-4 text-xs">
            <h4 className="font-display font-medium text-sm text-text uppercase tracking-widest text-accent">
              Rooms &amp; Tariffs
            </h4>
            <ul className="space-y-2.5">
              {ROOMS_DATA.map((r) => (
                <li key={r.id}>
                  <button
                    onClick={() => scrollTo('rooms')}
                    className="text-text/70 hover:text-accent transition-colors flex items-center justify-between w-full text-left"
                  >
                    <span>{r.name}</span>
                    <span className="text-accent font-bold">₹{r.pricePerNight}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Pilgrimage & Tourism */}
          <div className="space-y-4 text-xs">
            <h4 className="font-display font-medium text-sm text-text uppercase tracking-widest text-accent">
              Pilgrimage Hub
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollTo('pilgrimage')}
                  className="text-text/70 hover:text-accent transition-colors block"
                >
                  Shree Khatu Shyam Ji (45 KM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pilgrimage')}
                  className="text-text/70 hover:text-accent transition-colors block"
                >
                  Shree Salasar Balaji Mandir (50 KM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pilgrimage')}
                  className="text-text/70 hover:text-accent transition-colors block"
                >
                  Jeen Mata Shakti Peeth (28 KM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pilgrimage')}
                  className="text-text/70 hover:text-accent transition-colors block"
                >
                  Harshnath Mahadev Temple (14 KM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pilgrimage')}
                  className="text-text/70 hover:text-accent transition-colors block"
                >
                  Sikar Clock Tower &amp; Havelis (1 KM)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4 text-xs">
            <h4 className="font-display font-medium text-sm text-text uppercase tracking-widest text-accent">
              Contact 24/7
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-text/75">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.fullAddress}</span>
              </li>
              <li>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex items-center gap-2 text-text/80 hover:text-accent transition-colors"
                >
                  <Phone size={14} className="text-accent shrink-0" />
                  <span>{HOTEL_INFO.displayPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent('Namaste Hotel Shivansh, I want to book a room.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors"
                >
                  <MessageCircle size={14} className="shrink-0" />
                  <span>WhatsApp: {HOTEL_INFO.displayWhatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={HOTEL_INFO.justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-accent hover:underline"
                >
                  <span>Justdial Verified Page</span>
                  <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text/60">
          <p>© {new Date().getFullYear()} HOTEL SHIVANSH. All rights reserved. Opposite Roadways Bus Depot, Sikar 332001.</p>
          <div className="flex items-center gap-2">
            <span>Payment Accepted:</span>
            <span className="text-text/90 font-medium">Cash • UPI (GPay / PhonePe / Paytm) • Cards • Net Banking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
