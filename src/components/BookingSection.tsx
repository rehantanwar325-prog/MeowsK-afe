import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Bed,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  Car,
  Coffee,
  ShieldCheck,
  Zap,
  CreditCard,
  QrCode,
  Printer,
  ArrowRight,
  ArrowLeft,
  Check,
  Building,
  Clock,
  MapPin,
  FileText,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HOTEL_INFO } from '../data/hotelInfo';
import { ROOMS_DATA, RoomOption } from '../data/roomsData';

interface BookingSectionProps {
  onSuccessBooking?: (bookingData: any) => void;
  preselectedRoomId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedRoomId = 'deluxe-ac-room',
}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Steps: 1: Room & Dates, 2: Guest Details, 3: Payment & Confirm, 4: Confirmed Voucher
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Booking states
  const [selectedRoomId, setSelectedRoomId] = useState<string>(preselectedRoomId);
  const [checkIn, setCheckIn] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState<string>(() => tomorrow.toISOString().split('T')[0]);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [roomsCount, setRoomsCount] = useState<number>(1);

  // Guest details
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestCity, setGuestCity] = useState<string>('');
  const [idProofType, setIdProofType] = useState<string>('Aadhaar Card');
  const [arrivalTime, setArrivalTime] = useState<string>('Afternoon (12:00 PM – 4:00 PM)');
  const [specialRequest, setSpecialRequest] = useState<string>('');

  // Add-ons
  const [includeBreakfast, setIncludeBreakfast] = useState<boolean>(false);
  const [needKhatuCab, setNeedKhatuCab] = useState<boolean>(false);
  const [needRoomHeater, setNeedRoomHeater] = useState<boolean>(true);
  const [needEarlyCheckIn, setNeedEarlyCheckIn] = useState<boolean>(false);

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<'pay-at-hotel' | 'upi-qr' | 'whatsapp'>('pay-at-hotel');
  const [upiUtr, setUpiUtr] = useState<string>('');

  // Confirmed details
  const [bookingRef, setBookingRef] = useState<string>('');
  const [bookedTimestamp, setBookedTimestamp] = useState<string>('');

  const currentRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1000 * 60 * 60 * 24, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Promo Coupon states
  const [inputCoupon, setInputCoupon] = useState<string>('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState<string>('');

  // Pricing
  const roomBaseTotal = currentRoom.pricePerNight * nights * roomsCount;
  const breakfastTotal = includeBreakfast ? 150 * (adults + children) * nights : 0;
  const cabTotal = needKhatuCab ? 1800 : 0;
  const subTotal = roomBaseTotal + breakfastTotal + cabTotal;
  const grandTotal = Math.max(0, subTotal - couponDiscount);

  const handleApplyCoupon = (codeToApply?: string) => {
    const code = (codeToApply || inputCoupon).trim().toUpperCase();
    if (!code) return;

    if (code === 'WELCOME10') {
      const discount = Math.round(subTotal * 0.1);
      setAppliedCoupon('WELCOME10');
      setCouponDiscount(discount);
      setCouponError('');
    } else if (code === 'SHYAM500') {
      const discount = 500;
      setAppliedCoupon('SHYAM500');
      setCouponDiscount(discount);
      setCouponError('');
    } else if (code === 'DIRECT') {
      const discount = 200;
      setAppliedCoupon('DIRECT');
      setCouponDiscount(discount);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon. Try WELCOME10 or SHYAM500');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    setInputCoupon('');
    setCouponError('');
  };

  const handleProceedToDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) {
      alert('Kripya apna Naam aur Mobile number enter karein.');
      return;
    }
    setStep(3);
  };

  const handleFinalBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'SHIV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(generatedRef);
    setBookedTimestamp(new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }));

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
      });
    } catch (err) {}

    setStep(4);
  };

  const handleSendToWhatsApp = () => {
    let msg = `*🏨 HOTEL SHIVANSH — ROOM BOOKING CONFIRMATION*\n`;
    msg += `Opposite Roadways Bus Depot, Sikar, Rajasthan\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `🔖 Booking ID: #${bookingRef}\n`;
    msg += `👤 Guest Name: ${guestName}\n`;
    msg += `📞 Mobile / WhatsApp: ${guestPhone}\n`;
    if (guestCity) msg += `📍 City: ${guestCity}\n`;
    msg += `🛏️ Room Type: ${currentRoom.name}\n`;
    msg += `📅 Check-In: ${checkIn} (From 12:00 PM)\n`;
    msg += `📅 Check-Out: ${checkOut} (Until 11:00 AM)\n`;
    msg += `🌙 Stay Duration: ${nights} Night(s) • ${roomsCount} Room(s)\n`;
    msg += `👥 Guests: ${adults} Adults${children > 0 ? `, ${children} Children` : ''}\n`;
    msg += `🆔 ID Proof to Carry: ${idProofType}\n`;
    msg += `⏰ Expected Arrival: ${arrivalTime}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 Total Amount: ₹${grandTotal.toLocaleString('en-IN')}\n`;
    msg += `💳 Payment Mode: ${
      paymentMethod === 'pay-at-hotel'
        ? 'Pay at Hotel (Cash / UPI on Check-in)'
        : paymentMethod === 'upi-qr'
        ? `UPI Paid (UTR: ${upiUtr || 'Submitted'})`
        : 'Confirmed via WhatsApp'
    }\n`;
    if (includeBreakfast) msg += `🍳 Breakfast: Included for all guests\n`;
    if (needKhatuCab) msg += `🚕 Cab Service: Khatu Shyam / Salasar Balaji requested\n`;
    if (needRoomHeater) msg += `❄️ Winter Room Heater: Requested\n`;
    if (specialRequest.trim()) msg += `📝 Special Request: ${specialRequest.trim()}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Please confirm my check-in reservation. Jai Shree Shyam! 🙏`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="book-online" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-accent/20 text-accent border border-accent/40 shadow-lg">
          <Calendar size={13} />
          <span>Direct Instant Booking • No Advance Fee Required</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-medium text-text">
          Online Room Booking Engine
        </h2>
        <p className="text-base sm:text-lg text-text/75 font-light leading-relaxed">
          Book your room directly in 2 minutes. Choose your dates, customize your stay, and receive an instant booking pass with Pay at Hotel or instant UPI options.
        </p>

        {/* Multi-Step Progress Indicator */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 pt-4 max-w-xl mx-auto text-xs">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-accent font-bold' : 'text-muted'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
              step >= 1 ? 'bg-accent text-[#0d0f0b]' : 'bg-white/10 text-text/60'
            }`}>
              1
            </span>
            <span className="hidden sm:inline">Rooms &amp; Dates</span>
          </div>
          <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-accent font-bold' : 'text-muted'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
              step >= 2 ? 'bg-accent text-[#0d0f0b]' : 'bg-white/10 text-text/60'
            }`}>
              2
            </span>
            <span className="hidden sm:inline">Guest Details</span>
          </div>
          <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-accent font-bold' : 'text-muted'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
              step >= 3 ? 'bg-accent text-[#0d0f0b]' : 'bg-white/10 text-text/60'
            }`}>
              3
            </span>
            <span className="hidden sm:inline">Review &amp; Pay</span>
          </div>
          <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
          <div className={`flex items-center gap-2 ${step === 4 ? 'text-emerald-400 font-bold' : 'text-muted'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
              step === 4 ? 'bg-emerald-500 text-white' : 'bg-white/10 text-text/60'
            }`}>
              4
            </span>
            <span className="hidden sm:inline">Voucher</span>
          </div>
        </div>
      </div>

      {/* Main Booking Container */}
      <div className="max-w-5xl mx-auto">
        {step === 1 && (
          /* STEP 1: DATES, ROOM & GUESTS */
          <div className="glass !rounded-3xl p-6 sm:p-10 border border-accent/30 bg-[#11140e]/95 space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-display font-medium text-text">
                Step 1: Choose Your Dates &amp; Select Room
              </h3>
              <p className="text-xs text-text/70 mt-1">
                Select check-in and check-out to calculate live night rates.
              </p>
            </div>

            {/* Date Pickers & Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-1.5 flex items-center gap-1.5">
                  <Calendar size={13} className="text-accent" />
                  <span>Check-In Date *</span>
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-1.5 flex items-center gap-1.5">
                  <Calendar size={13} className="text-accent" />
                  <span>Check-Out Date *</span>
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-1.5 flex items-center gap-1.5">
                  <Users size={13} className="text-accent" />
                  <span>Guests (Adults)</span>
                </label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                    <option key={n} value={n} className="bg-[#11140e]">
                      {n} Adult{n > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-1.5 flex items-center gap-1.5">
                  <Bed size={13} className="text-accent" />
                  <span>Rooms Required</span>
                </label>
                <select
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Number(e.target.value))}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                >
                  {[1, 2, 3, 4, 5, 8].map((n) => (
                    <option key={n} value={n} className="bg-[#11140e]">
                      {n} Room{n > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Room Options Cards */}
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-wider text-muted font-bold">
                Select Desired Room Category
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ROOMS_DATA.map((r) => {
                  const isSelected = selectedRoomId === r.id;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRoomId(r.id)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex gap-4 items-start ${
                        isSelected
                          ? 'border-accent bg-accent/15 shadow-xl shadow-accent/10 ring-1 ring-accent'
                          : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                      }`}
                    >
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-display font-medium text-base text-text">
                            {r.name}
                          </h4>
                          <span className="text-accent font-bold text-sm">
                            ₹{r.pricePerNight}
                            <span className="text-[10px] text-muted font-normal"> /nt</span>
                          </span>
                        </div>
                        <p className="text-xs text-text/70 line-clamp-2">{r.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2 text-[10px] text-text/60">
                          <span className="px-2 py-0.5 rounded bg-white/5">{r.capacity}</span>
                          <span className="px-2 py-0.5 rounded bg-white/5">{r.bedType}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Summary Strip & Proceed */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-text">
                  {currentRoom.name} • {nights} Night{nights > 1 ? 's' : ''} ({checkIn} to {checkOut})
                </p>
                <p className="text-xs text-accent font-medium">
                  Estimated Room Tariff: ₹{roomBaseTotal.toLocaleString('en-IN')} (₹{currentRoom.pricePerNight} × {nights} × {roomsCount})
                </p>
              </div>

              <button
                type="button"
                onClick={handleProceedToDetails}
                className="w-full sm:w-auto px-8 py-3.5 bg-accent text-[#0d0f0b] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue to Guest Details</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          /* STEP 2: GUEST DETAILS & ADD-ONS */
          <div className="glass !rounded-3xl p-6 sm:p-10 border border-accent/30 bg-[#11140e]/95 space-y-8 animate-fade-in-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-display font-medium text-text">
                  Step 2: Guest Details &amp; Yatra Add-ons
                </h3>
                <p className="text-xs text-text/70 mt-1">
                  Required for express check-in at the front desk.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-muted hover:text-accent flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
            </div>

            <form onSubmit={handleProceedToPayment} className="space-y-6 text-xs">
              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text/80 font-medium mb-1.5">
                    Primary Guest Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar Sharma"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-text/80 font-medium mb-1.5">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-text/80 font-medium mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. ramesh@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-text/80 font-medium mb-1.5">
                    Home City / State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jaipur, Delhi, Ahmedabad..."
                    value={guestCity}
                    onChange={(e) => setGuestCity(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-text/80 font-medium mb-1.5">
                    Govt. Photo ID to Carry for Check-In *
                  </label>
                  <select
                    value={idProofType}
                    onChange={(e) => setIdProofType(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                  >
                    <option value="Aadhaar Card" className="bg-[#11140e]">Aadhaar Card</option>
                    <option value="Driving License" className="bg-[#11140e]">Driving License</option>
                    <option value="Voter ID" className="bg-[#11140e]">Voter ID</option>
                    <option value="Passport" className="bg-[#11140e]">Passport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-text/80 font-medium mb-1.5">
                    Expected Arrival Time
                  </label>
                  <select
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                  >
                    <option value="Morning (08:00 AM – 12:00 PM)" className="bg-[#11140e]">Morning (08:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 04:00 PM)" className="bg-[#11140e]">Afternoon (12:00 PM – 04:00 PM)</option>
                    <option value="Evening (04:00 PM – 08:00 PM)" className="bg-[#11140e]">Evening (04:00 PM – 08:00 PM)</option>
                    <option value="Late Night (After 08:00 PM)" className="bg-[#11140e]">Late Night (After 08:00 PM - 24/7 Desk)</option>
                  </select>
                </div>
              </div>

              {/* Add-ons & Special Services */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs uppercase tracking-wider text-muted font-bold">
                  Enhance Your Stay &amp; Pilgrimage
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeBreakfast}
                      onChange={(e) => setIncludeBreakfast(e.target.checked)}
                      className="accent-[#c8a96e] w-4 h-4 rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-text">Massive Morning Breakfast Buffet</p>
                      <p className="text-[11px] text-muted">+₹150 per person / day</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needKhatuCab}
                      onChange={(e) => setNeedKhatuCab(e.target.checked)}
                      className="accent-[#c8a96e] w-4 h-4 rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-text">Khatu Shyam / Salasar Cab Pickup</p>
                      <p className="text-[11px] text-muted">Dedicated AC Sedan (+₹1,800)</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needRoomHeater}
                      onChange={(e) => setNeedRoomHeater(e.target.checked)}
                      className="accent-[#c8a96e] w-4 h-4 rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-text">Winter Room Heater in Bedroom</p>
                      <p className="text-[11px] text-emerald-400 font-bold uppercase">Complimentary</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needEarlyCheckIn}
                      onChange={(e) => setNeedEarlyCheckIn(e.target.checked)}
                      className="accent-[#c8a96e] w-4 h-4 rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-text">Early Morning Check-In Request</p>
                      <p className="text-[11px] text-emerald-400 font-bold uppercase">Subject to Availability</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label className="block text-text/80 font-medium mb-1.5">
                  Special Notes / Food Preferences (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jain food only, ground floor room for senior citizens, tour bus parking"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-text focus:outline-none focus:border-accent"
                />
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="text-left">
                  <span className="text-muted text-[11px]">Updated Total:</span>
                  <p className="text-xl font-bold text-accent">₹{grandTotal.toLocaleString('en-IN')}</p>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 glass rounded-xl text-text font-bold text-xs uppercase cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-8 py-3.5 bg-accent text-[#0d0f0b] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Confirmation</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          /* STEP 3: PAYMENT METHOD & REVIEW */
          <div className="glass !rounded-3xl p-6 sm:p-10 border border-accent/30 bg-[#11140e]/95 space-y-8 animate-fade-in-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-display font-medium text-text">
                  Step 3: Review Reservation &amp; Select Payment Option
                </h3>
                <p className="text-xs text-text/70 mt-1">
                  You can choose to Pay at Hotel upon check-in, or scan the UPI QR code directly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-muted hover:text-accent flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
            </div>

            {/* Booking Summary Box */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-accent font-bold">Booking Details</p>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-muted">Primary Guest:</span>
                  <span className="font-semibold text-text">{guestName} ({guestPhone})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-muted">Selected Room:</span>
                  <span className="font-semibold text-text">{currentRoom.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-muted">Stay Duration:</span>
                  <span className="font-semibold text-text">{checkIn} to {checkOut} ({nights} Night{nights > 1 ? 's' : ''})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-muted">Rooms &amp; Guests:</span>
                  <span className="font-semibold text-text">{roomsCount} Room(s), {adults} Adults{children > 0 ? `, ${children} Children` : ''}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted">ID to Carry:</span>
                  <span className="font-semibold text-text">{idProofType}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-accent font-bold">Tariff Calculation</p>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-muted">Room Charges:</span>
                  <span className="font-semibold text-text">₹{roomBaseTotal.toLocaleString('en-IN')}</span>
                </div>
                {includeBreakfast && (
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-muted">Breakfast Buffet:</span>
                    <span className="font-semibold text-text">+₹{breakfastTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {needKhatuCab && (
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-muted">Yatra Cab:</span>
                    <span className="font-semibold text-text">+₹{cabTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {couponDiscount > 0 && (
                  <div className="flex justify-between py-1 border-b border-white/5 text-emerald-400">
                    <span className="flex items-center gap-1 font-semibold">
                      <span>Coupon Applied ({appliedCoupon}):</span>
                    </span>
                    <span className="font-bold">-₹{couponDiscount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-muted">Taxes &amp; Fees:</span>
                  <span className="font-semibold text-emerald-400">Included (₹0 Extra)</span>
                </div>
                <div className="flex justify-between py-2 pt-3 border-t border-accent/30 text-sm">
                  <span className="font-bold text-text">Total Payable:</span>
                  <span className="font-bold text-accent text-base">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Promo Code Input Box */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <span className="text-xs uppercase tracking-wider text-accent font-bold flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Have a Promo / Yatra Coupon Code?</span>
                </span>
                <span className="text-[11px] text-muted">Try: <button type="button" onClick={() => handleApplyCoupon('WELCOME10')} className="text-accent underline font-semibold cursor-pointer">WELCOME10</button> or <button type="button" onClick={() => handleApplyCoupon('SHYAM500')} className="text-accent underline font-semibold cursor-pointer">SHYAM500</button></span>
              </div>

              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                    <CheckCircle2 size={15} />
                    <span>Coupon <strong>{appliedCoupon}</strong> applied! You saved ₹{couponDiscount.toLocaleString('en-IN')}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveCoupon}
                    className="text-rose-400 hover:underline text-[11px] font-bold cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code (e.g. WELCOME10 or SHYAM500)"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value.toUpperCase())}
                    className="flex-1 bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-text uppercase font-mono tracking-wider focus:outline-none focus:border-accent"
                  />
                  <button
                    type="button"
                    onClick={() => handleApplyCoupon()}
                    className="px-5 py-2 bg-accent text-[#0d0f0b] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              )}
              {couponError && (
                <p className="text-[11px] text-rose-400 font-medium">{couponError}</p>
              )}
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-4">
              <label className="block text-xs uppercase tracking-wider text-muted font-bold">
                Choose Payment Method
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* 1. Pay at Hotel */}
                <div
                  onClick={() => setPaymentMethod('pay-at-hotel')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'pay-at-hotel'
                      ? 'border-accent bg-accent/15 ring-1 ring-accent shadow-lg'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-2 text-accent font-bold text-sm mb-1">
                    <Building size={16} />
                    <span>Pay at Hotel</span>
                  </div>
                  <p className="text-[11px] text-text/75">
                    Hold room now with ₹0 advance. Pay via Cash, UPI, or Card upon check-in at front desk.
                  </p>
                </div>

                {/* 2. Instant UPI QR */}
                <div
                  onClick={() => setPaymentMethod('upi-qr')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'upi-qr'
                      ? 'border-accent bg-accent/15 ring-1 ring-accent shadow-lg'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <QrCode size={16} />
                    <span>Instant UPI / QR</span>
                  </div>
                  <p className="text-[11px] text-text/75">
                    Scan via Google Pay, PhonePe, or Paytm. Guaranteed instant confirmed allocation.
                  </p>
                </div>

                {/* 3. WhatsApp Direct */}
                <div
                  onClick={() => setPaymentMethod('whatsapp')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'whatsapp'
                      ? 'border-accent bg-accent/15 ring-1 ring-accent shadow-lg'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm mb-1">
                    <MessageCircle size={16} />
                    <span>WhatsApp Direct</span>
                  </div>
                  <p className="text-[11px] text-text/75">
                    Send booking requisition directly to Hotel Shivansh official desk on WhatsApp.
                  </p>
                </div>
              </div>

              {/* UPI QR Display when selected */}
              {paymentMethod === 'upi-qr' && (
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-emerald-500/30 text-center space-y-4 animate-fade-in-up">
                  <div className="inline-block p-4 bg-white rounded-2xl shadow-xl">
                    {/* Generates standard UPI QR link using quickchart */}
                    <img
                      src={`https://quickchart.io/qr?text=${encodeURIComponent(
                        `upi://pay?pa=9999157200@upi&pn=HOTEL+SHIVANSH&am=${grandTotal}&cu=INR&tn=Booking-${guestName}`
                      )}&size=180`}
                      alt="UPI Payment QR Code"
                      className="w-44 h-44 object-contain mx-auto"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-text">
                      Scan with Google Pay / PhonePe / Paytm / BHIM
                    </p>
                    <p className="text-xs text-accent font-semibold">
                      Pay Exact Amount: ₹{grandTotal.toLocaleString('en-IN')}
                    </p>
                    <p className="text-[11px] text-muted">
                      UPI ID: <span className="text-text font-mono">9999157200@upi</span> (Hotel Shivansh)
                    </p>
                  </div>

                  <div className="max-w-xs mx-auto">
                    <label className="block text-[11px] text-text/70 mb-1 text-left">
                      Enter UPI Reference / UTR Number (Optional):
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 423589012345"
                      value={upiUtr}
                      onChange={(e) => setUpiUtr(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-text focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Confirm CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-text/70">
                🔒 Protected by Best Price Guarantee • Instant room hold
              </p>

              <button
                type="button"
                onClick={handleFinalBooking}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-accent via-[#dbb875] to-[#c8a96e] text-[#0d0f0b] rounded-xl font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/25 cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={16} />
                <span>Confirm &amp; Generate Booking Pass</span>
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          /* STEP 4: INSTANT BOOKING PASS / VOUCHER */
          <div className="space-y-6 animate-fade-in-up">
            {/* Printable Pass Container */}
            <div
              id="printable-voucher"
              className="glass !rounded-3xl p-6 sm:p-10 border-2 border-accent/40 bg-[#11140e] shadow-2xl relative overflow-hidden"
            >
              {/* Watermark / Seal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-96 h-96">
                <img src="/favicon.svg" alt="Watermark" className="w-full h-full object-contain" />
              </div>

              {/* Pass Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center p-1 shadow-lg">
                    <img src="/favicon.svg" alt="Shivansh" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                      Confirmed Reservation Voucher
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-text">
                      HOTEL SHIVANSH
                    </h3>
                    <p className="text-xs text-text/70">
                      Opposite Roadways Bus Depot, Sikar, Rajasthan - 332001
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs text-muted">Booking Reference:</span>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-accent">
                    #{bookingRef}
                  </p>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <CheckCircle2 size={11} />
                    <span>Room Confirmed</span>
                  </span>
                </div>
              </div>

              {/* Guest & Room Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-white/10 text-xs">
                <div>
                  <span className="text-muted text-[11px]">Primary Guest</span>
                  <p className="font-semibold text-text text-sm mt-0.5">{guestName}</p>
                  <p className="text-[11px] text-text/70">{guestPhone}</p>
                </div>
                <div>
                  <span className="text-muted text-[11px]">Room Category</span>
                  <p className="font-semibold text-text text-sm mt-0.5">{currentRoom.name}</p>
                  <p className="text-[11px] text-accent">{roomsCount} Room(s)</p>
                </div>
                <div>
                  <span className="text-muted text-[11px]">Check-In</span>
                  <p className="font-semibold text-text text-sm mt-0.5">{checkIn}</p>
                  <p className="text-[11px] text-muted">From 12:00 PM</p>
                </div>
                <div>
                  <span className="text-muted text-[11px]">Check-Out</span>
                  <p className="font-semibold text-text text-sm mt-0.5">{checkOut}</p>
                  <p className="text-[11px] text-muted">Until 11:00 AM</p>
                </div>
              </div>

              {/* Services & Payment Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-white/10 text-xs">
                <div className="space-y-2">
                  <p className="font-bold text-text uppercase tracking-wider text-[11px]">
                    Included Services &amp; Highlights:
                  </p>
                  <ul className="space-y-1.5 text-text/80 text-[11px]">
                    <li className="flex items-center gap-1.5">
                      <Check size={12} className="text-accent" />
                      <span>Split AC &amp; Winter Room Heater facility</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check size={12} className="text-accent" />
                      <span>Complimentary High-Speed Wi-Fi &amp; Free Valet Parking</span>
                    </li>
                    {includeBreakfast && (
                      <li className="flex items-center gap-1.5 text-amber-300">
                        <Check size={12} />
                        <span>Massive Morning Breakfast Buffet Included</span>
                      </li>
                    )}
                    {needKhatuCab && (
                      <li className="flex items-center gap-1.5 text-amber-300">
                        <Check size={12} />
                        <span>Dedicated Yatra Taxi Cab Arranged</span>
                      </li>
                    )}
                    <li className="flex items-center gap-1.5">
                      <Check size={12} className="text-accent" />
                      <span>24-Hour Front Desk Support &amp; Hot Geyser</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 sm:text-right">
                  <p className="font-bold text-text uppercase tracking-wider text-[11px]">
                    Payment Status:
                  </p>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 inline-block text-left sm:text-right">
                    <p className="text-[11px] text-muted">Payment Method:</p>
                    <p className="font-bold text-text text-sm capitalize">
                      {paymentMethod === 'pay-at-hotel' ? 'Pay upon Check-in (Cash / UPI)' : 'UPI Digital Payment'}
                    </p>
                    <p className="text-lg font-bold text-accent mt-1">
                      Total Payable: ₹{grandTotal.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Check-In Guidelines */}
              <div className="pt-6 space-y-2 text-[11px] text-text/70">
                <p className="font-semibold text-text">Important Check-In Guidelines:</p>
                <p>
                  • Please carry a valid original <span className="text-accent font-medium">{idProofType}</span> for all adult guests during check-in.
                </p>
                <p>
                  • Location: Directly opposite Roadways Central Bus Depot Middle Gate, Sikar Roadlines, Sikar.
                </p>
                <p>
                  • For early check-in or cab assistance, please call front desk at <span className="text-text font-bold">{HOTEL_INFO.displayPhone}</span>.
                </p>
              </div>
            </div>

            {/* Actions for Voucher */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleSendToWhatsApp}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Send Booking Slip to WhatsApp</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-6 py-3.5 glass hover:bg-white/10 text-text rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-white/20 transition-all cursor-pointer"
              >
                <Printer size={16} />
                <span>Print / Save Booking Slip</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="px-6 py-3.5 glass hover:bg-white/10 text-text rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-white/20 transition-all"
              >
                <Phone size={15} className="text-accent" />
                <span>Call Front Desk</span>
              </a>

              <button
                onClick={() => setStep(1)}
                className="px-5 py-3.5 text-xs text-muted hover:text-text cursor-pointer"
              >
                Book Another Room
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
