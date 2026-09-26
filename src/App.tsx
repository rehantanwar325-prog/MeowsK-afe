import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { BookingSection } from './components/BookingSection';
import { YatraPlanner } from './components/YatraPlanner';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { DiningSection } from './components/DiningSection';
import { AboutStory } from './components/AboutStory';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomComparisonModal } from './components/RoomComparisonModal';
import { ConciergeChat } from './components/ConciergeChat';
import { QuickActionBar } from './components/QuickActionBar';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { HOTEL_INFO } from './data/hotelInfo';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('deluxe-ac-room');
  const [bookingPrefill, setBookingPrefill] = useState<{
    checkIn: string;
    checkOut: string;
    guests: string;
  } | undefined>(undefined);

  const handleOpenBookingModal = (
    roomId?: string,
    prefill?: { checkIn: string; checkOut: string; guests: string }
  ) => {
    if (roomId) setSelectedRoomId(roomId);
    if (prefill) setBookingPrefill(prefill);
    setIsBookingOpen(true);
  };

  const handleSelectRoomToBook = (roomId: string) => {
    setSelectedRoomId(roomId);
    const el = document.getElementById('book-online');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingOpen(true);
    }
  };

  const scrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0f0b] text-[#f0ece4] selection:bg-accent selection:text-[#0d0f0b] font-body overflow-x-hidden">
      {/* Floating Glass Pill Navbar */}
      <Navbar onOpenBooking={() => handleOpenBookingModal()} />

      <main>
        {/* 1. Hero Section with Live Badges & Quick Checker */}
        <Hero
          onOpenBooking={handleOpenBookingModal}
          onExploreRooms={scrollToRooms}
        />

        {/* 2. Rooms & Suites Section (Starting at ₹1,999) */}
        <RoomsSection
          onBookRoom={handleSelectRoomToBook}
          onOpenCompare={() => setIsCompareOpen(true)}
        />

        {/* 3. Comprehensive Online Booking Engine with Promo Codes & Live UPI QR */}
        <BookingSection preselectedRoomId={selectedRoomId} />

        {/* 4. Live Aarti Timings & Yatra Cab Fare Calculator */}
        <YatraPlanner />

        {/* 5. Comprehensive Amenities & Facilities */}
        <AmenitiesSection />

        {/* 6. Property Visual Tour & 55+ Verified Photos Gallery */}
        <GallerySection />

        {/* 7. In-House Dining with Interactive Room Service Food Tray */}
        <DiningSection />

        {/* 8. Hotel Story, Heritage & 2025 Vision */}
        <AboutStory />

        {/* 9. 5.0 ★ Justdial Verified Guest Reviews */}
        <Testimonials />

        {/* 10. Prime Central Location (Opposite Roadways Depot) & Contact */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* 24/7 Intelligent Virtual Front Desk Concierge */}
      <ConciergeChat onBookNow={() => handleOpenBookingModal()} />

      {/* Side-by-side Room Comparison Matrix Modal */}
      <RoomComparisonModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onSelectRoom={handleSelectRoomToBook}
      />

      {/* Desktop Floating Action Pill (Quick Book & WhatsApp) */}
      <div className="fixed bottom-8 right-8 z-40 hidden lg:flex items-center gap-3">
        <a
          href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent('Namaste Hotel Shivansh, I want to book a room.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="glass p-3.5 rounded-full text-emerald-400 hover:text-white hover:bg-emerald-600 border border-emerald-500/40 shadow-2xl transition-all cursor-pointer flex items-center justify-center hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
        </a>

        <button
          onClick={() => handleOpenBookingModal()}
          className="glass glass-button px-6 py-3.5 rounded-full flex items-center gap-2.5 text-text border border-accent/40 shadow-2xl hover:border-accent group cursor-pointer bg-[#11140e]/95 hover:scale-105 transition-all"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <Calendar size={16} className="text-accent group-hover:rotate-12 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-semibold">Book Room (From ₹1,999)</span>
        </button>
      </div>

      {/* Mobile Floating Bottom Bar */}
      <QuickActionBar onOpenBooking={() => handleOpenBookingModal()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoomId={selectedRoomId}
        initialPrefill={bookingPrefill}
      />
    </div>
  );
}

export default App;
