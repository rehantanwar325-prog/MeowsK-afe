import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageSquare, Calendar, Menu as MenuIcon, X, Star, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';

interface NavbarProps {
  onOpenBooking: (roomType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Rooms & Tariffs', id: 'rooms' },
    { label: 'Book Online', id: 'book-online' },
    { label: 'Yatra Planner', id: 'yatra-planner' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Dining', id: 'dining' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-5 transition-all duration-300 pointer-events-none ${
          isScrolled ? 'sm:py-3' : ''
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          <div className="glass !rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between w-full border-white/10 shadow-2xl backdrop-blur-2xl bg-[#0d0f0b]/85">
            {/* Brand Logo & Name */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
              aria-label="Hotel Shivansh Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 border border-accent/40 bg-gradient-to-br from-accent/30 to-black/80 flex items-center justify-center shadow-lg group-hover:border-accent transition-colors">
                <img
                  src="/favicon.svg"
                  alt="Hotel Shivansh Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-semibold text-lg sm:text-xl tracking-tight text-text group-hover:text-accent transition-colors leading-none">
                    HOTEL SHIVANSH
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Star size={10} className="fill-amber-400 text-amber-400" />
                    5.0
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-accent/80 font-medium hidden sm:block mt-0.5">
                  Opp. Roadways Bus Depot • Sikar
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex gap-6 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[11px] tracking-[0.2em] uppercase font-semibold text-text/80 hover:text-accent transition-all relative group cursor-pointer py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-text/90 hover:text-accent transition-colors"
                title="Call Front Desk"
              >
                <Phone size={14} className="text-accent" />
                <span className="hidden xl:inline">{HOTEL_INFO.displayPhone}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 bg-gradient-to-r from-accent to-[#b89552] text-[#0d0f0b] rounded-full text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center gap-2"
              >
                <Calendar size={14} />
                <span>Book Room</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 bg-accent text-[#0d0f0b] rounded-full text-[11px] font-bold uppercase tracking-wider"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-text hover:text-accent hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 pt-24 animate-fade-in-up">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src="/favicon.svg" alt="Shivansh Logo" className="w-10 h-10" />
                <div>
                  <h3 className="font-display font-semibold text-lg text-text">HOTEL SHIVANSH</h3>
                  <p className="text-xs text-accent">Rated 5.0 ★ on Justdial</p>
                </div>
              </div>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-lg font-medium text-text/90 hover:text-accent py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-accent">→</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-accent text-[#0d0f0b] font-bold rounded-xl text-center uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar size={18} />
              <span>Book Room Online (From ₹1,999)</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="py-3 bg-white/5 border border-white/10 text-text rounded-xl font-medium text-xs flex items-center justify-center gap-2"
              >
                <Phone size={15} className="text-accent" />
                <span>Call Hotel</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent('Namaste Hotel Shivansh, I want to inquire about room booking.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 rounded-xl font-medium text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare size={15} />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-muted">
              Opposite Roadways Bus Depot, Middle Gate, Sikar
            </p>
          </div>
        </div>
      )}
    </>
  );
};
