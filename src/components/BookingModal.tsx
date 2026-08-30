import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2, PartyPopper, Sparkles, Calendar, Users, Music, Gift, Heart, Camera } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CAFE_INFO } from '../data/cafeInfo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Birthday Party & Celebration');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('5:00 PM – 7:30 PM (Golden Hour / Sunset Party)');
  const [guests, setGuests] = useState('8–15 Guests (Party Gathering)');
  const [zone, setZone] = useState('Cat Eyes Mural Lounge (Iconic Seating)');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'Custom Birthday / Party Decor & Fairy Lights',
    'Special Cat Interaction & Treats Session',
  ]);
  const [specialRequest, setSpecialRequest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const toggleAddon = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const generatedId = 'EV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(generatedId);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
      });
    } catch (err) {}

    setIsSubmitted(true);
  };

  const handleWhatsAppConfirm = () => {
    let msg = `*EVENT & PARTY BOOKING INQUIRY — MEOWS K-AFE*\n`;
    msg += `*The Conversation Forest — Sikar, Rajasthan*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Pass ID: #${bookingId}\n`;
    msg += `Host / Name: ${name}\n`;
    msg += `Phone / WhatsApp: ${phone}\n`;
    msg += `Event Type: ${eventType}\n`;
    msg += `Event Date: ${date}\n`;
    msg += `Time Slot: ${timeSlot}\n`;
    msg += `Estimated Guests: ${guests}\n`;
    msg += `Preferred Space: ${zone}\n`;
    msg += `Add-ons: ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'Standard Setup'}\n`;
    if (specialRequest.trim()) {
      msg += `Special Requests / Notes: ${specialRequest.trim()}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Looking forward to finalizing the party arrangements and custom food menu!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${CAFE_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const availableAddons = [
    { name: 'Custom Birthday / Party Decor & Fairy Lights', icon: Sparkles },
    { name: 'Special Cat Interaction & Treats Session', icon: Heart },
    { name: 'Acoustic Guitar / Sound System Setup', icon: Music },
    { name: 'Custom Celebration Cake & Photo Props', icon: Gift },
    { name: 'Polaroid Keepsake Photo Session', icon: Camera },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 max-w-xl w-full bg-[#0d0f0b] border border-accent/20 rounded-[2.5rem] p-6 sm:p-9 text-text shadow-2xl overflow-hidden my-6 glass max-h-[92vh] flex flex-col">
        {/* Glow Accent */}
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted hover:text-text border border-white/5 transition-colors cursor-pointer z-20"
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div className="overflow-y-auto pr-1">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] uppercase font-bold tracking-[0.2em] mb-2">
                <PartyPopper size={13} />
                <span>Events &amp; Celebrations</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-text">
                Book for Event or Party
              </h3>
              <p className="text-xs text-muted mt-1 font-light leading-relaxed">
                Host birthdays, kitty parties, cat cuddle meetups, acoustic sessions, or private celebrations at The Conversation Forest.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[10px] text-muted mb-1.5">
                    Host / Organizer Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-text placeholder:text-muted/60 focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[10px] text-muted mb-1.5">
                    Phone / WhatsApp <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-text placeholder:text-muted/60 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Event Type & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[10px] text-muted mb-1.5">
                    Event / Occasion Type <span className="text-accent">*</span>
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-text focus:border-accent focus:outline-none text-xs"
                  >
                    <option value="Birthday Party & Celebration" className="bg-[#0d0f0b]">Birthday Party &amp; Celebration</option>
                    <option value="Cat Lovers & Cuddle Meetup" className="bg-[#0d0f0b]">Cat Lovers &amp; Cuddle Meetup</option>
                    <option value="Kitty Party / High-Tea Gathering" className="bg-[#0d0f0b]">Kitty Party / High-Tea</option>
                    <option value="Acoustic Jam / Open Mic / Music Session" className="bg-[#0d0f0b]">Acoustic Jam &amp; Music Session</option>
                    <option value="Anniversary & Romantic Private Date" className="bg-[#0d0f0b]">Anniversary / Romantic Date</option>
                    <option value="Corporate / Team Meetup & Chill" className="bg-[#0d0f0b]">Corporate / Team Gathering</option>
                    <option value="College Farewell / Fresher / Friends Reunion" className="bg-[#0d0f0b]">Farewell / Reunion Party</option>
                    <option value="Exclusive Full Cafe Hall Booking" className="bg-[#0d0f0b]">Full Cafe Private Booking</option>
                    <option value="Custom Private Gathering" className="bg-[#0d0f0b]">Custom Celebration</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[10px] text-muted mb-1.5">
                    Event Date <span className="text-accent">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-text focus:border-accent focus:outline-none text-xs"
                  />
                </div>
              </div>

              {/* Time Slot & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[10px] text-muted mb-1.5">
                    Preferred Time Slot <span className="text-accent">*</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-text focus:border-accent focus:outline-none text-xs"
                  >
                    <option value="11:00 AM – 1:30 PM (Brunch Gathering)" className="bg-[#0d0f0b]">11:00 AM – 1:30 PM (Brunch)</option>
                    <option value="2:00 PM – 4:30 PM (Afternoon Tea & Chill)" className="bg-[#0d0f0b]">2:00 PM – 4:30 PM (Afternoon Tea)</option>
                    <option value="5:00 PM – 7:30 PM (Golden Hour / Sunset Party)" className="bg-[#0d0f0b]">5:00 PM – 7:30 PM (Sunset Party)</option>
                    <option value="7:30 PM – 10:00 PM (Prime Evening Glow Celebration)" className="bg-[#0d0f0b]">7:30 PM – 10:00 PM (Evening Glow)</option>
                    <option value="10:00 PM – 12:00 AM (Late Night Acoustic Hangout)" className="bg-[#0d0f0b]">10:00 PM – Midnight (Late Night)</option>
                    <option value="Custom Multi-Hour Slot" className="bg-[#0d0f0b]">Custom Multi-Hour Slot</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[10px] text-muted mb-1.5">
                    Estimated Guests <span className="text-accent">*</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-text focus:border-accent focus:outline-none text-xs"
                  >
                    <option value="4–8 Guests (Small Gathering)" className="bg-[#0d0f0b]">4–8 Guests (Small Gathering)</option>
                    <option value="8–15 Guests (Party Gathering)" className="bg-[#0d0f0b]">8–15 Guests (Party Gathering)</option>
                    <option value="15–25 Guests (Large Celebration)" className="bg-[#0d0f0b]">15–25 Guests (Large Celebration)</option>
                    <option value="25–40 Guests (Grand Party)" className="bg-[#0d0f0b]">25–40 Guests (Grand Party)</option>
                    <option value="40+ Guests (Exclusive Full Cafe Booking)" className="bg-[#0d0f0b]">40+ Guests (Full Cafe Booking)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Seating Zone */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[10px] text-muted mb-1.5">
                  Preferred Space / Atmosphere
                </label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-text focus:border-accent focus:outline-none text-xs"
                >
                  <option value="Cat Eyes Mural Lounge (Iconic Seating)" className="bg-[#0d0f0b]">Cat Eyes Mural Lounge (Iconic Seating &amp; Murals)</option>
                  <option value="Terrace & Outdoor Balcony Garden" className="bg-[#0d0f0b]">Terrace &amp; Fairy-Lit Balcony Garden</option>
                  <option value="Entire Cafe & Sanctuary (Exclusive Full Booking)" className="bg-[#0d0f0b]">Entire Cafe Sanctuary (Private Exclusive Booking)</option>
                  <option value="Indoor Quiet Forest Corner" className="bg-[#0d0f0b]">Indoor Quiet Forest Corner</option>
                </select>
              </div>

              {/* Add-ons & Arrangements */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[10px] text-muted mb-2">
                  Special Arrangements &amp; Add-ons (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableAddons.map((addon, idx) => {
                    const Icon = addon.icon;
                    const isChecked = selectedAddons.includes(addon.name);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => toggleAddon(addon.name)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all cursor-pointer text-[11px] ${
                          isChecked
                            ? 'bg-accent/15 border-accent/60 text-accent font-medium'
                            : 'bg-white/5 border-white/5 text-muted hover:border-white/10'
                        }`}
                      >
                        <Icon size={14} className={isChecked ? 'text-accent' : 'text-muted'} />
                        <span className="truncate">{addon.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[10px] text-muted mb-1.5">
                  Party Notes / Theme / Custom Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="e.g. Surprise birthday setup, specific cake flavor, customized song playlist, dietary requests..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-text placeholder:text-muted/60 focus:border-accent focus:outline-none text-xs resize-none font-light"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 rounded-full bg-accent text-background font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl shadow-accent/20 cursor-pointer"
              >
                <PartyPopper size={16} />
                <span>Confirm &amp; Generate Event Pass</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Ticket Card */
          <div className="text-center py-4 space-y-6 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 text-accent flex items-center justify-center mx-auto shadow-lg animate-bounce">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="px-3.5 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
                <PartyPopper size={12} />
                <span>Event Request Confirmed</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-text mt-3">
                Get Ready to Celebrate!
              </h3>
              <p className="text-xs text-muted mt-1 font-light max-w-md mx-auto">
                Your party pass has been created. Share it directly with our team on WhatsApp to finalize your menu and decor arrangements.
              </p>
            </div>

            {/* Ticket Card Details */}
            <div className="p-5 rounded-2xl bg-white/5 border border-dashed border-accent/40 text-left space-y-3 text-xs">
              <div className="flex justify-between items-center border-b border-white/10 pb-2.5 font-display font-medium text-accent">
                <span className="text-sm">🎫 Pass #{bookingId}</span>
                <span className="text-emerald-400 text-[11px] font-sans font-semibold">● Slot Reserved</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-muted font-light">
                <div>
                  <span className="text-muted/60 block text-[10px] uppercase tracking-wider">Host:</span>
                  <span className="font-medium text-text">{name}</span>
                </div>
                <div>
                  <span className="text-muted/60 block text-[10px] uppercase tracking-wider">Phone:</span>
                  <span className="font-medium text-text">{phone}</span>
                </div>
                <div>
                  <span className="text-muted/60 block text-[10px] uppercase tracking-wider">Event Type:</span>
                  <span className="font-medium text-accent truncate block">{eventType}</span>
                </div>
                <div>
                  <span className="text-muted/60 block text-[10px] uppercase tracking-wider">Guest Count:</span>
                  <span className="font-medium text-text">{guests}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted/60 block text-[10px] uppercase tracking-wider">Date &amp; Slot:</span>
                  <span className="font-medium text-text">{date} — {timeSlot}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted/60 block text-[10px] uppercase tracking-wider">Venue Zone:</span>
                  <span className="font-medium text-text">{zone}</span>
                </div>
              </div>

              {selectedAddons.length > 0 && (
                <div className="pt-2 border-t border-white/5">
                  <span className="text-muted/60 block text-[10px] uppercase tracking-wider mb-1">Add-ons:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedAddons.map((ad, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px]">
                        {ad}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppConfirm}
                className="w-full py-4 rounded-full bg-accent text-background font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Send Event Pass to Cafe WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 text-muted hover:text-text text-xs uppercase tracking-wider font-semibold cursor-pointer border border-white/5"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

