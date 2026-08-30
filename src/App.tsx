import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreFeatures } from './components/CoreFeatures';
import { CategoryShowcase } from './components/CategoryShowcase';
import { GallerySection } from './components/GallerySection';
import { AboutStory } from './components/AboutStory';
import { MenuSection } from './components/MenuSection';
import { CatProfiles } from './components/CatProfiles';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { CartDrawer } from './components/CartDrawer';
import { BookingModal } from './components/BookingModal';
import { QuickActionBar } from './components/QuickActionBar';
import { Footer } from './components/Footer';
import { MenuItem } from './data/menuData';
import { Calendar, ShoppingBag, PartyPopper } from 'lucide-react';

export function App() {
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('maggi-specials');

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const totalCartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromShowcase = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    scrollToMenu();
  };

  return (
    <div className="min-h-screen bg-background text-text selection:bg-accent selection:text-background font-body overflow-x-hidden">
      {/* Floating Glass Pill Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onExploreMenu={scrollToMenu}
        />

        {/* 2. Core Features (4 Glass Cards with Rotating Badges) */}
        <CoreFeatures />

        {/* 3. Category Showcase (Alternating 3D Perspective Split Cards) */}
        <CategoryShowcase onSelectCategory={handleSelectCategoryFromShowcase} />

        {/* 4. The Canvas: Morning Glow (8-Photo Grid Gallery) */}
        <GallerySection />

        {/* 5. Our Legacy (Crafting Moments One Cup at a Time) */}
        <AboutStory />

        {/* 6. Carefully Curated Offerings (Menu with Filter Tabs & Search) */}
        <MenuSection
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onOpenCart={() => setIsCartOpen(true)}
          selectedCategoryProp={selectedCategory}
        />

        {/* 7. Resident Cats Sanctuary & Etiquette */}
        <CatProfiles onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 8. Verified Guest Testimonials */}
        <Testimonials />

        {/* 9. Location & Sanctuary Contact */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button (Event & Party Booking) */}
      <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="glass glass-button px-6 py-3.5 rounded-full flex items-center gap-2.5 text-text border border-accent/40 shadow-2xl hover:border-accent group cursor-pointer bg-[#11140e]/90 hover:scale-105 transition-all"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <PartyPopper size={16} className="text-accent group-hover:rotate-12 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-semibold">Book Event / Party</span>
        </button>
      </div>

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;

