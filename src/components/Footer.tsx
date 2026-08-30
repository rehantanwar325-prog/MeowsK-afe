import React from 'react';
import { MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 mt-32 pt-16 pb-28 lg:pb-16 bg-[#0a0c08] text-text">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a className="flex items-center gap-3 text-accent group" href="#">
            <div className="relative w-9 h-9 transform transition-transform duration-500 group-hover:rotate-[360deg]">
              <img
                alt="Meows K-afe Logo"
                loading="lazy"
                className="object-cover rounded-full border border-accent/20 w-full h-full"
                src="/images/meows-kafe-logo-sign.jpg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-xl tracking-wide text-text group-hover:text-accent transition-colors">
                Meows K-afe
              </span>
              <span className="text-[10px] text-accent uppercase tracking-widest font-semibold">
                The Conversation Forest
              </span>
            </div>
          </a>
          <p className="text-muted text-sm font-light">Sikar's coziest forest lounge &amp; feline sanctuary.</p>
        </div>

        {/* Links & Socials */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 items-center">
            <a
              className="text-xs tracking-[0.2em] uppercase text-muted hover:text-text transition-colors font-semibold"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="text-xs tracking-[0.2em] uppercase text-muted hover:text-text transition-colors font-semibold"
              href="#gallery"
            >
              Gallery
            </a>
            <a
              className="text-xs tracking-[0.2em] uppercase text-muted hover:text-text transition-colors font-semibold"
              href="#story"
            >
              Legacy
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
              className="text-muted hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>

          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors font-light"
          >
            <MapPin size={15} className="text-accent" />
            <span>Santosh Colony, Sikar, Rajasthan</span>
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60 font-light">
        <p className="text-[#9e9a92]">
          © {new Date().getFullYear()} Meows K-afe (The Conversation Forest). All rights reserved.
        </p>
        <p>
          Crafted with care for coffee lovers, cozy conversations &amp; resident cats.
        </p>
      </div>
    </footer>
  );
};


