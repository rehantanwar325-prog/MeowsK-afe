import React, { useState, useEffect } from 'react';
import { MapPin, ShoppingBag, Calendar, Menu as MenuIcon, X, PartyPopper } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface NavbarProps {
  onOpenBooking: () => void;
  currentView?: 'home' | 'menu';
  onNavigate?: (view: 'home' | 'menu') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  currentView = 'home',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      onNavigate('menu');
    }
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 transition-all duration-300 pointer-events-none ${
          isScrolled ? 'sm:py-4' : ''
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          <div className="glass !rounded-full px-4 sm:px-6 py-3 flex items-center justify-between w-full border-white/5 shadow-2xl backdrop-blur-2xl">
            {/* Brand Logo & Name */}
            <a
              href="#"
              onClick={handleHomeClick}
              className="flex items-center gap-3 group"
              aria-label="Meows K-afe Home"
            >
              <div className="relative w-10 h-10 transform transition-transform duration-500 group-hover:rotate-[360deg]">
                <img
                  src="/images/meows-kafe-logo-sign.jpg"
                  alt="Meows K-afe Logo"
                  className="object-cover rounded-full border border-accent/20 w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-medium text-lg sm:text-xl tracking-tight text-text group-hover:text-accent transition-colors leading-none">
                  Meows K-afe
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-accent/80 font-bold hidden sm:block mt-0.5">
                  The Conversation Forest
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links & Actions */}
            <div className="hidden md:flex gap-6 lg:gap-8 items-center">
              <a
                href="#hero"
                onClick={handleHomeClick}
                className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all relative group ${
                  currentView === 'home' ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                    currentView === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>

              <a
                href="#menu"
                onClick={handleMenuClick}
                className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all relative group ${
                  currentView === 'menu' ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                Menu
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                    currentView === 'menu' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>

              <a
                href="#gallery"
                className="text-[10px] tracking-[0.3em] uppercase font-bold transition-all relative group text-muted hover:text-text"
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>

              <a
                href="#story"
                className="text-[10px] tracking-[0.3em] uppercase font-bold transition-all relative group text-muted hover:text-text"
              >
                Legacy
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>

              <a
                href="https://www.google.com/maps/search/Coffee+and+Toast+Café+Sikar+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-bold text-muted hover:text-accent transition-all bg-white/5 hover:bg-accent/10 px-4 py-2 rounded-full border border-white/5 hover:border-accent/20"
                aria-label="Find us on Google Maps"
              >
                <MapPin size={12} className="text-accent" />
                <span className="hidden lg:inline">Find Us</span>
              </a>

              {/* Order Online Button */}
              <a
                href={CAFE_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent hover:bg-white text-background rounded-full font-bold text-[10px] tracking-[0.15em] uppercase transition-all duration-300 transform hover:scale-105 shadow-md shadow-accent/20 flex items-center gap-1 cursor-pointer"
              >
                <span>Order Online</span>
                <span className="text-[9px]">↗</span>
              </a>

              {/* Book Event / Party Button */}
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 glass-button border-accent/40 text-accent hover:border-accent hover:bg-accent/10 rounded-full font-bold text-[10px] tracking-[0.15em] uppercase transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <PartyPopper size={13} />
                <span>Book Event</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={CAFE_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-accent text-background text-[10px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1"
                aria-label="Order Online"
              >
                <span>Order</span>
                <span className="text-[8px]">↗</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-white/5 text-text border border-white/5 cursor-pointer"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <MenuIcon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden pointer-events-auto">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-[#0d0f0b] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl z-10">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/meows-kafe-logo-sign.jpg"
                    alt="Logo"
                    className="w-9 h-9 rounded-full object-cover border border-accent/30"
                  />
                  <div>
                    <h3 className="font-display font-medium text-base text-text">Meows K-afe</h3>
                    <p className="text-[10px] text-accent tracking-widest uppercase">The Conversation Forest • Sikar</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-muted hover:text-text cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="#hero"
                  onClick={handleHomeClick}
                  className="text-xs uppercase tracking-[0.3em] font-bold text-text hover:text-accent py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Home</span>
                  <span className="text-accent">→</span>
                </a>
                <a
                  href="#menu"
                  onClick={handleMenuClick}
                  className="text-xs uppercase tracking-[0.3em] font-bold text-text hover:text-accent py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Menu</span>
                  <span className="text-accent">→</span>
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.3em] font-bold text-text hover:text-accent py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Gallery</span>
                  <span className="text-accent">→</span>
                </a>
                <a
                  href="#story"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.3em] font-bold text-text hover:text-accent py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Our Story</span>
                  <span className="text-accent">→</span>
                </a>
                <a
                  href="#cats"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.3em] font-bold text-text hover:text-accent py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Resident Cats</span>
                  <span className="text-accent">→</span>
                </a>
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.3em] font-bold text-text hover:text-accent py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Google Maps</span>
                  <MapPin size={14} className="text-accent" />
                </a>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={CAFE_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-accent hover:bg-white text-background font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-accent/20 cursor-pointer"
              >
                <span>Order Online</span>
                <span className="text-xs">↗</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-accent text-background font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-accent/20 cursor-pointer"
              >
                <PartyPopper size={15} />
                <span>Book Event or Party</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

