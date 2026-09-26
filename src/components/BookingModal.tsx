import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Users,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  Car,
  Coffee,
  ShieldCheck,
  Zap,
  Bed,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HOTEL_INFO } from '../data/hotelInfo';
import { ROOMS_DATA } from '../data/roomsData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialPrefill?: {
    checkIn: string;
    checkOut: string;
    guests: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId = 'deluxe-ac-room',
  initialPrefill,
}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedRoomId, setSelectedRoomId] = useState(initialRoomId);
  const [checkIn, setCheckIn] = useState(initialPrefill?.checkIn || (() => new Date().toISOString().split('T')[0]));
  const [checkOut, setCheckOut] = useState(initialPrefill?.checkOut || (() => tomorrow.toISOString().split('T')[0]));
  const [guests, setGuests] = useState(initialPrefill?.guests || '2 Adults');
  const [roomsCount, setRoomsCount] = useState(1);
  const [specialRequest, setSpecialRequest] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'Complimentary Wi-Fi & Valet Parking',
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (initialRoomId) {
      setSelectedRoomId(initialRoomId);
    }
  }, [initialRoomId]);

  useEffect(() => {
    if (initialPrefill) {
      if (initialPrefill.checkIn) setCheckIn(initialPrefill.checkIn);
      if (initialPrefill.checkOut) setCheckOut(initialPrefill.checkOut);
      if (initialPrefill.guests) setGuests(initialPrefill.guests);
    }
  }, [initialPrefill]);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1000 * 60 * 60 * 24, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const estimatedTotal = currentRoom.pricePerNight * nights * roomsCount;

  const toggleAddon = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const id = 'SHIV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(id);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 },
      });
    } catch (err) {}

    setIsSubmitted(true);
  };

  const handleWhatsAppConfirm = () => {
    let msg = `*HOTEL SHIVANSH — ROOM RESERVATION REQUEST*\n`;
    msg += `Opposite Roadways Bus Depot, Sikar, Rajasthan\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Booking ID: #${bookingId || 'DIRECT-WEB'}\n`;
    msg += `Guest Name: ${name}\n`;
    msg += `Contact Phone: ${phone}\n`;
    msg += `Room Category: ${currentRoom.name} (₹${currentRoom.pricePerNight}/night)\n`;
    msg += `Check-In Date: ${checkIn}\n`;
    msg += `Check-Out Date: ${checkOut}\n`;
    msg += `Total Nights: ${nights} Night(s)\n`;
    msg += `Number of Rooms: ${roomsCount}\n`;
    msg += `Guests: ${guests}\n`;
    msg += `Estimated Total: ₹${estimatedTotal.toLocaleString('en-IN')}\n`;
    if (selectedAddons.length > 0) {
      msg += `Services Requested: ${selectedAddons.join(', ')}\n`;
    }
    if (specialRequest.trim()) {
      msg += `Special Instructions: ${specialRequest.trim()}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Please confirm my reservation and provide check-in instructions. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const availableAddons = [
    { id: 'wifi-park', name: 'Complimentary Wi-Fi & Valet Parking', free: true },
    { id: 'breakfast', name: 'Include Massive Morning Breakfast Buffet (+₹150/person)', free: false },
    { id: 'cab-khatu', name: 'Arrange Taxi for Khatu Shyam Ji / Salasar Balaji', free: false },
    { id: 'room-heater', name: 'Room Heater in Room for Winter Night', free: true },
    { id: 'early-in', name: 'Early Morning Check-In Assistance', free: true },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 max-w-2xl w-full bg-[#0d0f0b] border border-accent/30 rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-8 my-4 sm:my-8 glass text-text animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-text/80 hover:text-white transition-colors cursor-pointer border border-white/10 z-20"
          aria-label="Close booking modal"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">
                Reservation Request Generated
              </span>
              <h3 className="text-3xl font-display font-medium text-text">
                Room Held for {name}!
              </h3>
              <p className="text-xs sm:text-sm text-text/80 max-w-md mx-auto font-light">
                Your reservation reference is <span className="font-bold text-accent">#{bookingId}</span> for {currentRoom.name}. Our 24/7 reception desk has received your request.
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-left text-xs space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-muted">Room:</span>
                <span className="font-semibold text-text">{currentRoom.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Dates:</span>
                <span className="font-semibold text-text">{checkIn} to {checkOut} ({nights} Night{nights > 1 ? 's' : ''})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Rooms &amp; Guests:</span>
                <span className="font-semibold text-text">{roomsCount} Room(s), {guests}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10">
                <span className="text-text font-bold">Estimated Payable at Hotel:</span>
                <span className="text-accent font-bold text-sm">₹{estimatedTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 max-w-md mx-auto pt-2">
              <button
                onClick={handleWhatsAppConfirm}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle size={18} />
                <span>Confirm Instantly via WhatsApp</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full py-3.5 glass hover:bg-white/10 text-text rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-white/10"
              >
                <Phone size={16} className="text-accent" />
                <span>Call Front Desk ({HOTEL_INFO.displayPhone})</span>
              </a>

              <button
                onClick={onClose}
                className="text-xs text-muted hover:text-text pt-2 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  Direct Hotel Booking • Pay at Hotel
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-text mt-1">
                Reserve Your Stay at Hotel Shivansh
              </h3>
              <p className="text-xs text-text/75 mt-0.5">
                Opposite Roadways Bus Stand, Sikar • Best Rate Guarantee starting from ₹1,999
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-text/80 font-medium mb-1">Guest Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sapna Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-text focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-text/80 font-medium mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-text focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              {/* Room Selection */}
              <div>
                <label className="block text-text/80 font-medium mb-1 flex items-center justify-between">
                  <span>Room Category</span>
                  <span className="text-accent font-bold">₹{currentRoom.pricePerNight} / night</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROOMS_DATA.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setSelectedRoomId(r.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedRoomId === r.id
                          ? 'border-accent bg-accent/15 text-white shadow-md'
                          : 'border-white/10 bg-white/[0.02] text-text/80 hover:border-white/30'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-xs text-text">{r.name}</span>
                        <span className="text-accent font-bold">₹{r.pricePerNight}</span>
                      </div>
                      <p className="text-[10px] text-muted truncate mt-0.5">{r.subtitle}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates & Counts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-text/80 font-medium mb-1">Check-In</label>
                  <input
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-text focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-text/80 font-medium mb-1">Check-Out</label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-text focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-text/80 font-medium mb-1">Rooms</label>
                  <select
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(Number(e.target.value))}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-text focus:outline-none focus:border-accent"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n} className="bg-[#11140e]">
                        {n} Room{n > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-text/80 font-medium mb-1">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-text focus:outline-none focus:border-accent"
                  >
                    <option value="1 Adult" className="bg-[#11140e]">1 Adult</option>
                    <option value="2 Adults" className="bg-[#11140e]">2 Adults</option>
                    <option value="3 Adults" className="bg-[#11140e]">3 Adults</option>
                    <option value="4+ Family" className="bg-[#11140e]">4+ Family</option>
                    <option value="Group / Yatra" className="bg-[#11140e]">Group Yatra</option>
                  </select>
                </div>
              </div>

              {/* Addons Selection */}
              <div>
                <label className="block text-text/80 font-medium mb-1.5">Complimentary &amp; Additional Services</label>
                <div className="space-y-1.5">
                  {availableAddons.map((ad) => (
                    <label
                      key={ad.id}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/20 cursor-pointer text-[11px]"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAddons.includes(ad.name)}
                        onChange={() => toggleAddon(ad.name)}
                        className="rounded accent-[#c8a96e]"
                      />
                      <span className="flex-1 text-text/90">{ad.name}</span>
                      {ad.free && (
                        <span className="text-[10px] text-emerald-400 font-bold uppercase">Free</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-text/80 font-medium mb-1">Special Notes / Arrival Time</label>
                <input
                  type="text"
                  placeholder="e.g. Arriving late night via sleeper bus, need parking for Innova"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2 text-text focus:outline-none focus:border-accent"
                />
              </div>

              {/* Price Calculation Summary Strip */}
              <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-between">
                <div>
                  <p className="text-text font-semibold">
                    {nights} Night(s) × {roomsCount} Room(s)
                  </p>
                  <p className="text-[10px] text-muted">No advance charge • Pay upon check-in</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-muted">Estimated Total:</span>
                  <p className="text-lg font-bold text-accent">₹{estimatedTotal.toLocaleString('en-IN')}</p>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-accent via-[#dbb875] to-[#c8a96e] text-[#0d0f0b] font-bold uppercase tracking-wider rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/25 cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                <span>Confirm &amp; Hold Room</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
