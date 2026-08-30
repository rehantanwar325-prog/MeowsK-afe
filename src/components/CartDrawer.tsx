import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageCircle, ArrowUpRight, Coffee, Utensils } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MENU_ITEMS, MenuItem } from '../data/menuData';
import { CAFE_INFO } from '../data/cafeInfo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [id: string]: number };
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState<string>('Table 1 (Cat Mural Bench Area)');
  const [customerName, setCustomerName] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);

  if (!isOpen) return null;

  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);
  const itemsMap = new Map(MENU_ITEMS.map((item) => [item.id, item]));

  const subtotal = cartEntries.reduce((sum, [id, qty]) => {
    const item = itemsMap.get(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const grandTotal = subtotal;

  const handleWhatsAppOrder = () => {
    if (cartEntries.length === 0) return;

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (e) {}

    let orderText = `*NEW ORDER — MEOWS K-AFE*\n`;
    orderText += `*The Conversation Forest — Sikar, Rajasthan*\n`;
    orderText += `━━━━━━━━━━━━━━━━━━━━━\n`;
    orderText += `📍 *Order Type:* ${orderType === 'dine-in' ? `Dine-In (${tableNumber})` : 'Takeaway / Parcel'}\n`;
    if (customerName.trim()) {
      orderText += `👤 *Customer Name:* ${customerName.trim()}\n`;
    }
    orderText += `━━━━━━━━━━━━━━━━━━━━━\n`;
    orderText += `📋 *ITEMS:*\n`;

    cartEntries.forEach(([id, qty]) => {
      const item = itemsMap.get(id);
      if (item) {
        orderText += `• ${item.name} x ${qty} = ₹${item.price * qty}\n`;
      }
    });

    orderText += `━━━━━━━━━━━━━━━━━━━━━\n`;
    orderText += `💰 *TOTAL AMOUNT:* ₹${grandTotal}\n`;

    if (specialNotes.trim()) {
      orderText += `📝 *Notes:* ${specialNotes.trim()}\n`;
    }

    orderText += `\n*Thank you! Please prepare our order.*`;

    const encodedText = encodeURIComponent(orderText);
    const whatsappUrl = `https://wa.me/${CAFE_INFO.whatsapp}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#0d0f0b] border-l border-white/10 text-text shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#11140e]/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center border border-accent/30">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h3 className="font-display font-medium text-lg text-text">Your Order Tray</h3>
                <p className="text-xs text-accent uppercase tracking-widest font-semibold">Meows K-afe Direct</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-muted hover:text-text hover:bg-white/5"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Quick Online Order Option */}
            <div className="p-4 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Prefer doorstep delivery?</span>
                <span className="text-[11px] text-muted font-light">Order hot food for quick delivery</span>
              </div>
              <a
                href={CAFE_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-accent hover:bg-white text-background text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md transition-colors"
              >
                <span>Order</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {cartEntries.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mx-auto text-accent">
                  <Coffee size={24} />
                </div>
                <h4 className="font-display font-medium text-xl text-text">Your tray is empty</h4>
                <p className="text-xs text-muted max-w-xs mx-auto font-light">
                  Explore our menu for fresh toasts, specialty coffee, Maggi, or dessert bowls!
                </p>
              </div>
            ) : (
              <>
                {/* Order Type Selector */}
                <div className="bg-white/5 p-1.5 rounded-full border border-white/5 flex gap-1 text-xs font-semibold">
                  <button
                    onClick={() => setOrderType('dine-in')}
                    className={`flex-1 py-2 rounded-full uppercase tracking-wider text-[10px] transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      orderType === 'dine-in'
                        ? 'bg-accent text-background font-bold shadow-md'
                        : 'text-muted hover:text-text'
                    }`}
                  >
                    <Utensils size={12} />
                    <span>Dine-In</span>
                  </button>
                  <button
                    onClick={() => setOrderType('takeaway')}
                    className={`flex-1 py-2 rounded-full uppercase tracking-wider text-[10px] transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      orderType === 'takeaway'
                        ? 'bg-accent text-background font-bold shadow-md'
                        : 'text-muted hover:text-text'
                    }`}
                  >
                    <ShoppingBag size={12} />
                    <span>Takeaway</span>
                  </button>
                </div>

                {/* Dine-In Options */}
                {orderType === 'dine-in' ? (
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-semibold text-muted mb-1.5">
                      Select Table / Area:
                    </label>
                    <select
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-text focus:border-accent focus:outline-none"
                    >
                      <option value="Table 1 (Cat Mural Bench Area)" className="bg-[#0d0f0b]">Table 1 — Cat Mural Bench Area</option>
                      <option value="Table 2 (Balcony View)" className="bg-[#0d0f0b]">Table 2 — Balcony View</option>
                      <option value="Table 3 (Courtyard Lounge)" className="bg-[#0d0f0b]">Table 3 — Courtyard Lounge</option>
                      <option value="Table 4 (Central Forest Corner)" className="bg-[#0d0f0b]">Table 4 — Central Forest Corner</option>
                      <option value="Direct Counter Order" className="bg-[#0d0f0b]">Direct Counter Order</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-semibold text-muted mb-1.5">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-text focus:border-accent focus:outline-none"
                    />
                  </div>
                )}

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] text-muted font-semibold uppercase tracking-widest">
                    <span>Selected Items</span>
                    <button
                      onClick={onClearCart}
                      className="text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer font-normal"
                    >
                      <Trash2 size={12} />
                      <span>clear</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {cartEntries.map(([id, qty]) => {
                      const item = itemsMap.get(id);
                      if (!item) return null;

                      return (
                        <div
                          key={id}
                          className="p-4 rounded-2xl glass border-white/5 bg-[#11140e]/60 flex items-center justify-between gap-3"
                        >
                          <div className="flex-1 min-w-0">
                            <h5 className="text-sm font-display font-medium text-text truncate">
                              {item.name}
                            </h5>
                            <span className="text-xs text-accent font-medium">
                              ₹{item.price} each
                            </span>
                          </div>

                          <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/5">
                            <button
                              onClick={() => onRemoveFromCart(id)}
                              className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="font-bold text-xs text-accent px-1">
                              {qty}
                            </span>
                            <button
                              onClick={() => onAddToCart(item)}
                              className="w-6 h-6 rounded-full bg-accent text-background font-bold flex items-center justify-center text-xs"
                            >
                              <Plus size={11} />
                            </button>
                          </div>

                          <div className="text-right min-w-[50px]">
                            <span className="font-display font-medium text-sm text-text">
                              ₹{item.price * qty}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-muted mb-1.5">
                    Special Cooking Preferences:
                  </label>
                  <textarea
                    rows={2}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="e.g. Extra hot coffee, less spicy Maggi..."
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-text focus:border-accent focus:outline-none resize-none font-light"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout */}
          {cartEntries.length > 0 && (
            <div className="p-6 border-t border-white/5 bg-[#11140e]/90 space-y-4">
              <div className="space-y-2 text-xs text-muted font-light">
                <div className="flex justify-between">
                  <span>Subtotal ({cartEntries.reduce((a, [_, q]) => a + q, 0)} items):</span>
                  <span className="font-medium text-text">₹{subtotal}</span>
                </div>
                <div className="pt-2 border-t border-white/5 flex justify-between text-lg font-display font-medium text-text">
                  <span>Total Amount:</span>
                  <span className="text-accent text-xl">₹{grandTotal}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 rounded-full bg-accent text-background font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl shadow-accent/20 cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Send Dine-In Order (₹{grandTotal})</span>
                </button>

                <a
                  href={CAFE_INFO.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 text-accent border border-accent/40 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <span>Order Online (Delivery)</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

