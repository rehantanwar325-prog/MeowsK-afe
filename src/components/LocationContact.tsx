import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Car,
  Navigation,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';
import confetti from 'canvas-confetti';

export const LocationContact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err) {}

    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    let msg = `*ROOM INQUIRY — HOTEL SHIVANSH, SIKAR*\n`;
    msg += `Opposite Roadways Bus Depot, Sikar\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Name: ${name || 'Guest'}\n`;
    msg += `Phone: ${phone || 'Not provided'}\n`;
    msg += `Check-in Date: ${checkIn || 'To be decided'}\n`;
    msg += `Guests: ${guests}\n`;
    if (message.trim()) {
      msg += `Note / Request: ${message.trim()}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Please confirm tariff and room availability. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const transitPoints = [
    { label: 'Roadways Central Bus Depot', dist: '0 Mtr (Directly Opposite)', time: '30 Sec Walk' },
    { label: 'Sikar Junction Railway Station', dist: '1.5 KM', time: '5 Mins Auto' },
    { label: 'Shree Khatu Shyam Ji Dham', dist: '45 KM', time: '50 Mins Drive' },
    { label: 'Shree Salasar Balaji Mandir', dist: '50 KM', time: '55 Mins Drive' },
    { label: 'Jeen Mata Shakti Peeth', dist: '28 KM', time: '35 Mins Drive' },
    { label: 'Harshnath Mahadev & Hills', dist: '14 KM', time: '20 Mins Drive' },
  ];

  return (
    <section id="location" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30">
          <MapPin size={13} />
          <span>Prime Central Sikar Address</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-medium text-text">
          Location &amp; 24/7 Front Desk
        </h2>
        <p className="text-base sm:text-lg text-text/75 font-light leading-relaxed">
          Unrivaled convenience right opposite the Middle Gate of Sikar Roadways Bus Depot. Easy to locate, open 24 hours, and equipped with dedicated parking for your vehicles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Info & Transit Distances (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Address Card */}
          <div className="glass !rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 bg-[#11140e]/90">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                  Official Hotel Address
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-text mt-1">
                  HOTEL SHIVANSH
                </h3>
                <p className="text-xs sm:text-sm text-text/80 mt-1 leading-relaxed">
                  {HOTEL_INFO.fullAddress}
                </p>
                <p className="text-xs text-amber-300/90 font-medium mt-1">
                  Landmark: {HOTEL_INFO.landmark}
                </p>
              </div>
            </div>

            {/* Direct Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="py-3.5 px-4 bg-accent text-[#0d0f0b] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone size={15} />
                <span>Call: {HOTEL_INFO.displayPhone}</span>
              </a>

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent('Namaste Hotel Shivansh, I want to inquire about a room.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 glass rounded-xl text-emerald-400 hover:text-white hover:bg-emerald-600/30 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Operating Hours & Policy */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/5 text-xs">
              <div>
                <p className="text-muted text-[11px]">Reception</p>
                <p className="font-semibold text-text mt-0.5">Open 24/7 Hours</p>
              </div>
              <div>
                <p className="text-muted text-[11px]">Check-In</p>
                <p className="font-semibold text-text mt-0.5">12:00 PM</p>
              </div>
              <div>
                <p className="text-muted text-[11px]">Check-Out</p>
                <p className="font-semibold text-text mt-0.5">11:00 AM</p>
              </div>
            </div>
          </div>

          {/* Transit Proximity Table */}
          <div className="glass !rounded-3xl p-6 sm:p-8 border border-white/10 bg-[#11140e]/90 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-display font-medium text-text flex items-center gap-2">
                <Navigation size={18} className="text-accent" />
                <span>Transit &amp; Distance Proximity</span>
              </h4>
              <span className="text-[11px] text-accent font-medium">Nearest Hub</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {transitPoints.map((tp, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-medium text-text">{tp.label}</p>
                    <p className="text-[11px] text-muted">{tp.time}</p>
                  </div>
                  <span className="font-bold text-accent shrink-0 ml-2">{tp.dist}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="glass !rounded-3xl overflow-hidden border border-white/10 h-72 relative">
            <iframe
              title="Hotel Shivansh Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8778749841834!2d75.1495651!3d27.5999327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca34e56598587%3A0x6b6c00e12d59302c!2sRoadways%20Bus%20Stand%2C%20Sikar!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-3 right-3">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass !rounded-xl px-3 py-1.5 text-xs text-text hover:text-accent border border-white/20 flex items-center gap-1.5 shadow-lg bg-black/80"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Quick Room Inquiry Form (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="glass !rounded-3xl p-6 sm:p-8 border border-accent/30 bg-[#11140e]/95 space-y-6 sticky top-28 shadow-2xl">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-accent font-bold">
                Direct Room Inquiry
              </span>
              <h3 className="text-2xl font-display font-medium text-text">
                Check Availability &amp; Rates
              </h3>
              <p className="text-xs text-text/70">
                Get an instant quote or reserve your stay without advance booking fees.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-display font-medium text-lg text-text">Inquiry Received!</h4>
                  <p className="text-xs text-text/80 mt-1">
                    Thank you {name}. Our front desk will contact you within a few minutes.
                  </p>
                </div>
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Send Directly on WhatsApp</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-text/80 font-medium mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-text focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-text/80 font-medium mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-text focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-text/80 font-medium mb-1">Check-in Date</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-text focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-text/80 font-medium mb-1">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-text focus:outline-none focus:border-accent"
                    >
                      <option value="1 Guest">1 Adult</option>
                      <option value="2 Guests">2 Adults</option>
                      <option value="3 Guests">3 Adults</option>
                      <option value="4+ Family">4+ Family</option>
                      <option value="Group / Yatra">Group Yatra</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-text/80 font-medium mb-1">Special Request (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Early morning check-in, Khatu Shyam taxi requirement, extra bed..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-text focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-accent text-[#0d0f0b] font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Submit Booking Request</span>
                </button>

                <p className="text-[11px] text-center text-muted">
                  No advance payment required. Instant confirmation via WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
