import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const LocationContact: React.FC = () => {
  const [queryName, setQueryName] = useState('');
  const [queryMsg, setQueryMsg] = useState('');
  const [isSent, setIsSent] = useState(false);

  const days = [
    { day: 'Monday', time: '11:00 AM – 11:30 PM' },
    { day: 'Tuesday', time: '11:00 AM – 11:30 PM' },
    { day: 'Wednesday', time: '11:00 AM – 11:30 PM' },
    { day: 'Thursday', time: '11:00 AM – 11:30 PM' },
    { day: 'Friday', time: '11:00 AM – Midnight 12:00' },
    { day: 'Saturday', time: '10:30 AM – Midnight 12:00' },
    { day: 'Sunday', time: '10:30 AM – Midnight 12:00' },
  ];

  const currentDayIndex = (new Date().getDay() + 6) % 7; // 0=Mon, 6=Sun

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryMsg.trim()) return;

    let text = `👋 *HELLO COFFEE & TOAST / MEOWS K-AFE!*\n`;
    if (queryName.trim()) text += `👤 *From:* ${queryName.trim()}\n`;
    text += `💬 *Message / Query:* ${queryMsg.trim()}\n`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CAFE_INFO.whatsapp}?text=${encoded}`, '_blank');
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-background text-text">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs tracking-[0.5em] uppercase text-accent font-bold mb-6 block">
            Visit Us
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-text mb-8 tracking-tighter">
            Find Your <span className="italic font-light text-accent">Sanctuary</span>
          </h2>
          <p className="text-muted text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Located in Sikar, Rajasthan. Walk in anytime for handcrafted brews, fresh toasts &amp; snacks, and feline warmth.
          </p>
        </div>

        {/* 3 Column Grid: Location/Map, Hours, Direct Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Cafe Info & Quick Contact Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[2rem] glass border-white/5 bg-[#11140e]/60 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-accent/30 p-0.5 bg-black">
                  <img
                    src="/images/meows-kafe-logo-sign.jpg"
                    alt="Meows K-afe Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-text">Meows K-afe</h3>
                  <p className="text-xs text-accent uppercase tracking-widest font-semibold">The Conversation Forest 🐾</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 text-sm text-muted font-light">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="font-display font-medium text-text block text-base">Cafe Location</span>
                    <span className="text-xs text-muted leading-relaxed">
                      Behind Shrinath Petrol Pump, Near Rajvilas Garden, Santosh Colony, Khichron Ka Bas, Sikar, Rajasthan 332001
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="font-display font-medium text-text block text-base">Direct Phone</span>
                    <a href={`tel:${CAFE_INFO.phone}`} className="text-xs text-accent hover:underline">
                      {CAFE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="font-display font-medium text-text block text-base">WhatsApp Support</span>
                    <a
                      href={`https://wa.me/${CAFE_INFO.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-accent hover:underline"
                    >
                      Chat with Cafe Team on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <a
                  href={`https://wa.me/${CAFE_INFO.whatsapp}?text=Hi%20Meows%20K-afe,%20I%20would%20like%20to%20know%20more!`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-full bg-accent text-background font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-full bg-white/5 border border-white/10 text-text font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-all cursor-pointer"
                >
                  <MapPin size={15} className="text-accent" />
                  <span>Map Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Operating Hours Schedule (3 cols) */}
          <div className="lg:col-span-3 p-8 rounded-[2rem] glass border-white/5 bg-[#11140e]/60">
            <div className="flex items-center gap-2 mb-4 text-accent font-display font-medium text-xl">
              <Clock size={20} />
              <span>Timings</span>
            </div>

            <p className="text-xs text-muted mb-6 font-light">
              Open 7 days a week for morning brews, brunch, and late evening dining.
            </p>

            <div className="space-y-2.5">
              {days.map((d, index) => {
                const isToday = index === currentDayIndex;
                return (
                  <div
                    key={d.day}
                    className={`p-3 rounded-xl text-xs flex items-center justify-between border ${
                      isToday
                        ? 'bg-accent/15 border-accent/40 text-accent font-bold'
                        : 'bg-white/5 border-white/5 text-muted'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isToday && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />}
                      {d.day}
                    </span>
                    <span className="text-[11px] font-light">{d.time}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Col 3: Send Quick Query Form (4 cols) */}
          <div className="lg:col-span-4 p-8 rounded-[2rem] glass border-white/5 bg-[#11140e]/60">
            <div className="mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-bold block mb-2">
                Have an inquiry?
              </span>
              <h3 className="text-2xl font-display text-text">
                Send a Message
              </h3>
              <p className="text-xs text-muted mt-1 font-light">
                We'll respond on WhatsApp directly.
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-text mb-1 uppercase tracking-wider text-[10px]">
                  Your Name
                </label>
                <input
                  type="text"
                  value={queryName}
                  onChange={(e) => setQueryName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-full glass border-white/10 text-text placeholder:text-muted/60 focus:border-accent focus:outline-none bg-white/5"
                />
              </div>

              <div>
                <label className="block font-medium text-text mb-1 uppercase tracking-wider text-[10px]">
                  Your Message / Event &amp; Party Inquiry <span className="text-accent">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={queryMsg}
                  onChange={(e) => setQueryMsg(e.target.value)}
                  placeholder="Event/party inquiries, birthday celebrations, private hall bookings, or questions..."
                  className="w-full px-4 py-3 rounded-2xl glass border-white/10 text-text placeholder:text-muted/60 focus:border-accent focus:outline-none bg-white/5 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-accent text-background font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg shadow-accent/20 cursor-pointer"
              >
                <Send size={15} />
                <span>Send WhatsApp Query</span>
              </button>

              {isSent && (
                <div className="p-3 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs text-center font-medium flex items-center justify-center gap-2">
                  <CheckCircle size={14} />
                  <span>Opening WhatsApp with your note...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

