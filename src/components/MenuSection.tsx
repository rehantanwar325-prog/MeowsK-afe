import React, { useState, useMemo } from 'react';
import { Search, Plus, Minus, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData';
import { CAFE_INFO } from '../data/cafeInfo';

interface MenuSectionProps {
  cart: { [id: string]: number };
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onOpenCart: () => void;
  selectedCategoryProp?: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onOpenCart,
  selectedCategoryProp = 'maggi-specials',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(selectedCategoryProp);
  const [searchQuery, setSearchQuery] = useState<string>('');

  React.useEffect(() => {
    if (selectedCategoryProp) {
      setSelectedCategory(selectedCategoryProp);
    }
  }, [selectedCategoryProp]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // If actively searching, search through all items
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        return matchesName || matchesDesc;
      }
      // Otherwise filter by selected category
      return item.category === selectedCategory;
    });
  }, [selectedCategory, searchQuery]);

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <section id="menu" className="min-h-screen bg-background py-20 lg:py-28 relative">
      {/* Ambient Gold Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className="relative px-6 py-12 lg:py-16 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-4">
          <span>Fresh Handcrafted Offerings</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-text mb-6 tracking-tighter">
          Our <span className="italic font-light text-accent">Offerings</span>
        </h2>
        <p className="text-muted text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
          From our #1 bestseller Pizza Sandwich and signature Forest Maggi to handmade burgers, pizzas, and thick cold shakes.
        </p>

        {/* Direct Order Button */}
        <div className="flex justify-center">
          <a
            href={CAFE_INFO.zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 rounded-full bg-accent hover:bg-white text-background font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-accent/20 transition-all transform hover:scale-105 cursor-pointer"
          >
            <span>Order Online</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Search Bar & Category Navigation */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Live Search */}
          <div className="relative w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, coffees, toasts, shakes, maggi..."
              className="w-full pl-12 pr-12 py-4 rounded-full glass border-white/10 text-text placeholder:text-muted/60 text-sm focus:outline-none focus:border-accent/50 transition-all bg-[#11140e]/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-text px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 scrollbar-none justify-start md:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-accent text-background border-accent font-bold shadow-lg shadow-accent/25 scale-105'
                    : 'bg-[#11140e]/70 text-muted border-white/10 hover:border-accent/40 hover:text-text'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Cart Indicator */}
        {totalCartCount > 0 && (
          <div className="max-w-4xl mx-auto mb-10 p-4 rounded-full glass border-accent/40 bg-accent/10 flex items-center justify-between shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 pl-3">
              <ShoppingBag className="w-5 h-5 text-accent" />
              <span className="font-display font-medium text-text text-sm sm:text-base">
                {totalCartCount} {totalCartCount === 1 ? 'item' : 'items'} in your order
              </span>
            </div>
            <button
              onClick={onOpenCart}
              className="px-6 py-2.5 rounded-full bg-accent text-background font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-md cursor-pointer"
            >
              View Cart &amp; Order →
            </button>
          </div>
        )}

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 glass p-8 rounded-[2rem] max-w-md mx-auto">
            <p className="text-muted text-base font-light">No items found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('maggi-specials');
              }}
              className="mt-5 px-6 py-2.5 rounded-full bg-accent text-background font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => {
              const qtyInCart = cart[item.id] || 0;

              return (
                <div
                  key={item.id}
                  className="glass glass-hover p-6 lg:p-7 rounded-[2rem] flex flex-col justify-between group border-white/5 bg-[#11140e]/40 hover:bg-accent/5 transition-all duration-500"
                >
                  <div>
                    {/* Item Image Preview if Available */}
                    {item.image && (
                      <div className="relative aspect-video rounded-2xl overflow-hidden mb-5">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-[0.8] group-hover:saturate-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                        {item.badge && (
                          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-background text-[10px] font-black uppercase tracking-wider shadow-lg">
                            {item.badge}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Top Row: Veg Badge & Category Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-sm border border-emerald-500 flex items-center justify-center p-0.5" title="Pure Veg">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </span>
                        {!item.image && item.badge && (
                          <span className="px-2.5 py-0.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-[10px] font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-semibold">
                        {item.category.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Item Title & Description */}
                    <h3 className="text-xl font-display text-text mb-2 group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-2 font-light mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Price & Add to Cart */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-muted block uppercase tracking-wider font-semibold">
                        Price
                      </span>
                      <span className="text-2xl font-display font-medium text-accent">
                        ₹{item.price}
                      </span>
                    </div>

                    {qtyInCart === 0 ? (
                      <button
                        onClick={() => onAddToCart(item)}
                        className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-accent text-muted hover:text-background border border-white/10 hover:border-accent font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer transform hover:scale-105 active:scale-95"
                      >
                        <Plus size={14} />
                        <span>Add</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-white/5 border border-accent/40 rounded-full p-1 shadow-md">
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-text flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="font-bold text-sm text-accent px-1.5 min-w-[20px] text-center">
                          {qtyInCart}
                        </span>
                        <button
                          onClick={() => onAddToCart(item)}
                          className="w-7 h-7 rounded-full bg-accent hover:bg-white text-background font-bold flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

