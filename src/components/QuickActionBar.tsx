import React from 'react';
import { Calendar, ShoppingBag, MessageCircle, Utensils, PartyPopper } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface QuickActionBarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({
  cartCount,
  onOpenCart,
  onOpenBooking,
}) => {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 lg:hidden p-2 rounded-full glass border-white/10 shadow-2xl bg-[#0d0f0b]/90 backdrop-blur-xl max-w-md mx-auto">
      <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-semibold">
        {/* Menu Anchor */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-full text-muted hover:text-accent active:scale-95 transition-all"
        >
          <Utensils size={16} className="text-accent mb-0.5" />
          <span>Menu</span>
        </a>

        {/* Order Online Link */}
        <a
          href={CAFE_INFO.zomatoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-full bg-accent text-background font-bold active:scale-95 transition-all shadow-md shadow-accent/20"
        >
          <ShoppingBag size={15} className="mb-0.5" />
          <span>Order</span>
        </a>

        {/* Book Event / Party Modal */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-full bg-white/5 border border-accent/30 text-accent font-semibold active:scale-95 transition-all hover:bg-accent/10"
        >
          <PartyPopper size={15} className="mb-0.5" />
          <span>Party</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${CAFE_INFO.whatsapp}?text=Hello%20Meows%20K-afe!`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-full text-muted hover:text-accent active:scale-95 transition-all"
        >
          <MessageCircle size={16} className="text-accent mb-0.5" />
          <span>Chat</span>
        </a>
      </div>
    </div>
  );
};

