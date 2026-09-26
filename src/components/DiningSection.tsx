import React, { useState } from 'react';
import { MENU_ITEMS, DINING_HIGHLIGHTS, MenuItem } from '../data/diningData';
import {
  Utensils,
  Coffee,
  Check,
  Star,
  Sparkles,
  MessageCircle,
  Clock,
  Plus,
  Minus,
  ShoppingBag,
  Trash2,
  Send,
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';

export const DiningSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'breakfast' | 'main-course' | 'rajasthani' | 'beverages'>('all');
  const [trayItems, setTrayItems] = useState<{ [id: string]: number }>({});
  const [roomNumber, setRoomNumber] = useState('');
  const [guestName, setGuestName] = useState('');
  const [showTray, setShowTray] = useState(false);

  const categories = [
    { id: 'all', label: 'All Specials' },
    { id: 'breakfast', label: 'Massive Breakfast' },
    { id: 'rajasthani', label: 'Rajasthani Thali' },
    { id: 'main-course', label: 'North Indian Curries' },
    { id: 'beverages', label: 'Chai, Coffee & Lassi' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const addItem = (id: string) => {
    setTrayItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeItem = (id: string) => {
    setTrayItems((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const clearTray = () => {
    setTrayItems({});
  };

  const trayEntries = Object.entries(trayItems).map(([id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return { item, qty };
  }).filter((entry): entry is { item: MenuItem; qty: number } => entry.item !== undefined);

  const totalTrayCount = Object.values(trayItems).reduce((sum, q) => sum + q, 0);
  const totalTrayPrice = trayEntries.reduce((sum, entry) => sum + entry.item.price * entry.qty, 0);

  const handleSendOrderWhatsApp = () => {
    if (trayEntries.length === 0) return;

    let msg = `*🍽️ HOTEL SHIVANSH — ROOM SERVICE FOOD ORDER*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    if (roomNumber.trim()) msg += `🚪 Room / Table No: ${roomNumber.trim()}\n`;
    if (guestName.trim()) msg += `👤 Guest Name: ${guestName.trim()}\n`;
    msg += `⏰ Order Time: ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `*Items Ordered:*\n`;

    trayEntries.forEach(({ item, qty }) => {
      msg += `• ${item.name} × ${qty} = ₹${(item.price * qty).toLocaleString('en-IN')}\n`;
    });

    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 *Subtotal Payable: ₹${totalTrayPrice.toLocaleString('en-IN')}*\n`;
    msg += `Please prepare freshly and deliver to our room. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <section id="dining" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
          <Utensils size={13} />
          <span>Praised by 100% of Guest Reviews</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-medium text-text">
          In-House Kitchen &amp; 24/7 Room Dining
        </h2>
        <p className="text-base sm:text-lg text-text/75 font-light leading-relaxed">
          &ldquo;The highlight was the tasty food – every meal was a treat!&rdquo; Our in-house kitchen prepares authentic Rajasthani feasts, homestyle North Indian food, and a massive morning breakfast buffet. Order directly to your room!
        </p>

        {/* Highlights Bar */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {DINING_HIGHLIGHTS.features.slice(0, 3).map((feat, i) => (
            <span key={i} className="glass px-3.5 py-1 rounded-full text-xs text-text/80 flex items-center gap-1.5 border border-white/10">
              <Check size={12} className="text-accent" />
              <span>{feat}</span>
            </span>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-accent text-[#0d0f0b] shadow-lg'
                  : 'glass text-text/70 hover:text-text hover:border-accent/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Menu Items (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const qty = trayItems[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="glass !rounded-2xl p-5 border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group bg-[#11140e]/90"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Veg Green Dot */}
                        <div className="w-3.5 h-3.5 border border-emerald-500 rounded-sm flex items-center justify-center p-0.5 shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <h3 className="font-display font-medium text-base text-text group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <span className="text-base font-bold text-accent">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-text/70 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Add to Tray Action */}
                  <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between">
                    {item.isSpecial ? (
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30 uppercase">
                        Guest Favorite
                      </span>
                    ) : (
                      <span className="text-[10px] text-muted">Freshly Prepared</span>
                    )}

                    {qty > 0 ? (
                      <div className="flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-lg p-1">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-6 h-6 rounded bg-accent text-[#0d0f0b] flex items-center justify-center font-bold hover:brightness-110 cursor-pointer"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-text px-1">{qty}</span>
                        <button
                          onClick={() => addItem(item.id)}
                          className="w-6 h-6 rounded bg-accent text-[#0d0f0b] flex items-center justify-center font-bold hover:brightness-110 cursor-pointer"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addItem(item.id)}
                        className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-accent hover:text-[#0d0f0b] text-text border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Plus size={12} />
                        <span>Add to Tray</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Room Service Tray / Order Summary Card (4 cols on lg) */}
        <div className="lg:col-span-4 sticky top-28">
          <div className="glass !rounded-3xl p-6 border border-accent/30 bg-[#11140e]/95 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <ShoppingBag size={16} />
                </div>
                <div>
                  <h4 className="font-display font-medium text-base text-text">Room Service Tray</h4>
                  <p className="text-[10px] text-muted">24-Hour Hot Kitchen Delivery</p>
                </div>
              </div>

              {totalTrayCount > 0 && (
                <button
                  onClick={clearTray}
                  className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                  title="Clear Tray"
                >
                  <Trash2 size={13} />
                  <span>Clear</span>
                </button>
              )}
            </div>

            {trayEntries.length === 0 ? (
              <div className="py-8 text-center text-xs text-muted space-y-2">
                <Utensils size={28} className="mx-auto text-muted/40" />
                <p>Your room service tray is empty.</p>
                <p className="text-[11px] text-text/60">
                  Click &ldquo;+ Add to Tray&rdquo; on any dish to order food directly to your room!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="max-h-56 overflow-y-auto space-y-2 text-xs pr-1">
                  {trayEntries.map(({ item, qty }) => (
                    <div key={item.id} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-text">{item.name}</p>
                        <p className="text-[10px] text-muted">₹{item.price} each</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-bold text-accent text-xs">₹{(item.price * qty).toLocaleString('en-IN')}</span>
                        <div className="flex items-center gap-1 ml-2">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-[11px] font-bold px-1">{qty}</span>
                          <button
                            onClick={() => addItem(item.id)}
                            className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Room & Name inputs */}
                <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                  <div>
                    <label className="block text-muted text-[11px] mb-1">Room No. / Table (Optional):</label>
                    <input
                      type="text"
                      placeholder="e.g. Room 204 or Waiting in Lobby"
                      value={roomNumber}
                      onChange={(e) => setRoomNumber(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-text text-xs focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-muted text-[11px] mb-1">Guest Name (Optional):</label>
                    <input
                      type="text"
                      placeholder="e.g. Sapna Tak"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-text text-xs focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                {/* Subtotal */}
                <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-text">Subtotal Payable:</span>
                  <span className="text-lg font-bold text-accent">₹{totalTrayPrice.toLocaleString('en-IN')}</span>
                </div>

                {/* Send Order Button */}
                <button
                  onClick={handleSendOrderWhatsApp}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Send Order via WhatsApp</span>
                </button>
              </div>
            )}

            {/* Direct Dial Kitchen */}
            <div className="pt-2 text-center text-xs">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="text-text/70 hover:text-accent flex items-center justify-center gap-1.5 transition-colors"
              >
                <Clock size={12} className="text-accent" />
                <span>Call Kitchen Desk: {HOTEL_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
