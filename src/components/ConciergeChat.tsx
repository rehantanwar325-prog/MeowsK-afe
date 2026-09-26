import React, { useState } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Phone,
  MessageCircle,
  Sparkles,
  Bot,
  User,
  Clock,
  MapPin,
  Car,
  Coffee,
  CheckCircle,
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelInfo';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actionButton?: {
    label: string;
    action: () => void;
  };
}

const PRESET_FAQS = [
  {
    q: 'How far is Khatu Shyam Ji from Hotel?',
    a: 'Shri Khatu Shyam Ji Mandir is just 45 km (~50 mins drive) from Hotel Shivansh. Direct buses leave from Roadways Depot right opposite us every 20 mins, or our front desk arranges private cabs for ₹1,800 round trip.',
  },
  {
    q: 'Can I get early check-in at 6:00 AM?',
    a: 'Yes! Standard check-in is 12:00 PM, but for morning pilgrims arriving by night bus or train, early check-in is accommodated subject to room availability, or you can safely store your luggage and freshen up.',
  },
  {
    q: 'Is parking available for cars and tour buses?',
    a: 'Yes, absolutely! We provide free, secure valet parking directly on our premises with ample space for private SUVs, traveler vans, and large tourist coaches with 24x7 CCTV surveillance.',
  },
  {
    q: 'Do you have winter room heaters and hot water?',
    a: 'Yes, 100%! All our rooms are equipped with 24-hour instant hot water geysers and complimentary room heaters are provided on demand for Rajasthan’s chilly winter nights.',
  },
  {
    q: 'What are the room tariffs starting from?',
    a: 'Our Deluxe AC Rooms start at just ₹1,999/night. Super Deluxe King is ₹2,499, and Executive Family Suite is ₹3,499. You can reserve with ₹0 advance and pay at the hotel upon check-in!',
  },
];

export const ConciergeChat: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Namaste! 🙏 Welcome to Hotel Shivansh, Sikar. I am your 24/7 Digital Concierge. How can I assist with your stay or pilgrimage today?',
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: 'u-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Compute intelligent answer
    setTimeout(() => {
      let botResponse = '';
      const lower = query.toLowerCase();

      if (lower.includes('khatu') || lower.includes('shyam')) {
        botResponse = 'Shri Khatu Shyam Ji Dham is 45 km (~50 mins) from Hotel Shivansh. Direct buses run right opposite us, and we also provide 24/7 private cab booking at ₹1,800 round trip with Mangala Aarti morning wake-up call!';
      } else if (lower.includes('salasar') || lower.includes('balaji')) {
        botResponse = 'Shree Salasar Balaji Mandir is 50 km (~55 mins). Direct express buses depart right outside our hotel from Roadways Depot every 30 minutes.';
      } else if (lower.includes('price') || lower.includes('rate') || lower.includes('tariff') || lower.includes('cost')) {
        botResponse = 'Our rooms start from just ₹1,999/night (Deluxe AC Room). Super Deluxe is ₹2,499 and Executive Family Suite is ₹3,499. You can book directly with ₹0 advance and pay upon arrival!';
      } else if (lower.includes('early') || lower.includes('check-in') || lower.includes('checkin') || lower.includes('time')) {
        botResponse = 'Our standard check-in is 12:00 PM and check-out is 11:00 AM. Our front desk is open 24 hours! For early morning arrivals (5 AM - 8 AM), early check-in is accommodated based on availability.';
      } else if (lower.includes('food') || lower.includes('breakfast') || lower.includes('dining') || lower.includes('dinner')) {
        botResponse = 'We have an in-house pure vegetarian kitchen praised by all our guests! We serve massive morning breakfast spreads, authentic Rajasthani thali, hot parathas, and provide 24-hour room service.';
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('number')) {
        botResponse = `You can call our 24/7 reception desk directly at ${HOTEL_INFO.displayPhone} or chat on WhatsApp at ${HOTEL_INFO.displayWhatsapp}.`;
      } else {
        botResponse = 'Thank you for reaching out! Hotel Shivansh is located directly opposite Roadways Bus Depot, Sikar. Our 24/7 front desk team is ready to welcome you. Would you like to check room availability or connect on WhatsApp?';
      }

      const botMsg: Message = {
        id: 'b-' + Date.now(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Trigger */}
      <div className="fixed bottom-20 sm:bottom-8 left-3 sm:left-8 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="glass p-3 sm:px-4 sm:py-3 rounded-full flex items-center gap-2.5 text-text border border-accent/40 shadow-2xl hover:border-accent hover:scale-105 transition-all cursor-pointer bg-[#11140e]/95 group"
            title="Ask 24/7 Concierge"
          >
            <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-[#0d0f0b] transition-colors">
              <Bot size={18} />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-text leading-tight">24/7 Front Desk Help</p>
              <p className="text-[10px] text-accent flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Online &bull; Ask a question</span>
              </p>
            </div>
          </button>
        )}
      </div>

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-8 left-3 sm:left-8 right-3 sm:right-auto z-50 sm:w-96 max-h-[calc(100dvh-6rem)] h-[520px] bg-[#0d0f0b] border border-accent/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col glass animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-accent/20 via-[#11140e] to-black/80 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-accent text-[#0d0f0b] flex items-center justify-center font-bold">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="font-display font-medium text-sm text-text">Hotel Shivansh Concierge</h4>
                <p className="text-[10px] text-accent flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Opp. Roadways Bus Depot &bull; 24/7 Active</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-muted hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick FAQ Pills */}
          <div className="p-2.5 bg-black/40 border-b border-white/5 flex gap-2 overflow-x-auto text-[11px] scrollbar-none">
            {PRESET_FAQS.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleSend(faq.q)}
                className="shrink-0 px-3 py-1 rounded-full bg-white/[0.04] hover:bg-accent/20 text-text/80 hover:text-accent border border-white/10 transition-colors cursor-pointer"
              >
                {faq.q.split(' ')[0]} {faq.q.split(' ')[1]} {faq.q.split(' ')[2]}?
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={13} />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-accent text-[#0d0f0b] font-medium rounded-tr-none'
                      : 'bg-white/[0.05] border border-white/10 text-text/90 rounded-tl-none font-light'
                  }`}
                >
                  <p>{m.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      m.sender === 'user' ? 'text-[#0d0f0b]/70' : 'text-muted'
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Assistance Strip */}
          <div className="px-4 py-2 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-muted">Need human assistance?</span>
            <div className="flex gap-2">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="text-accent hover:underline flex items-center gap-1 font-semibold"
              >
                <Phone size={11} />
                <span>Call Desk</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent('Namaste Hotel Shivansh, I need assistance with room booking.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <MessageCircle size={11} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-black/60 border-t border-white/10 flex gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about stay, rates, cab..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2 text-xs text-text focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="p-2.5 bg-accent text-[#0d0f0b] rounded-xl font-bold hover:bg-white transition-colors cursor-pointer"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
