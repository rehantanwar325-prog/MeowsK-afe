import React from 'react';
import { X, Check, Bed, Users, Maximize2, Star, Calendar } from 'lucide-react';
import { ROOMS_DATA } from '../data/roomsData';

interface RoomComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRoom: (roomId: string) => void;
}

export const RoomComparisonModal: React.FC<RoomComparisonModalProps> = ({
  isOpen,
  onClose,
  onSelectRoom,
}) => {
  if (!isOpen) return null;

  const comparisonAttributes = [
    { label: 'Tariff / Night', key: 'price' },
    { label: 'Room Dimension', key: 'size' },
    { label: 'Max Guests Capacity', key: 'capacity' },
    { label: 'Bed Setup', key: 'bed' },
    { label: 'Split Air Conditioning', key: 'ac', all: true },
    { label: 'Winter Room Heater Facility', key: 'heater', all: true },
    { label: 'High-Speed Wi-Fi', key: 'wifi', all: true },
    { label: '43" Smart LED TV', key: 'tv', all: true },
    { label: '24/7 Hot Water Geyser', key: 'geyser', all: true },
    { label: 'Complimentary Valet Parking', key: 'parking', all: true },
    { label: 'Complimentary Morning Breakfast Option', key: 'breakfast' },
    { label: 'Executive Work Station & Sofa', key: 'sofa' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 max-w-5xl w-full bg-[#0d0f0b] border border-accent/40 rounded-3xl p-5 sm:p-8 glass shadow-2xl text-text animate-fade-in-up my-4 sm:my-8 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-bold">
              Transparent Accommodation Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-text mt-1">
              Compare Rooms &amp; Suites Side-by-Side
            </h3>
            <p className="text-xs text-text/70 mt-0.5">
              Find the perfect room for your stay in Sikar.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-text/80 hover:text-white transition-colors cursor-pointer border border-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pt-6">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-3 text-muted uppercase font-bold text-[11px] w-1/4">
                  Feature / Amenity
                </th>
                {ROOMS_DATA.map((r) => (
                  <th key={r.id} className="py-4 px-3 text-center w-1/4 min-w-[170px]">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-24 rounded-xl object-cover mb-2"
                    />
                    <p className="font-display font-medium text-text text-sm">{r.name}</p>
                    <p className="text-accent font-bold text-base mt-0.5">₹{r.pricePerNight} <span className="text-[10px] text-muted font-normal">/nt</span></p>
                    <button
                      onClick={() => {
                        onSelectRoom(r.id);
                        onClose();
                      }}
                      className="mt-2 w-full py-2 bg-accent hover:bg-white text-[#0d0f0b] font-bold rounded-lg text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Select Room
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-3 font-semibold text-text/80">Room Dimension</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="py-3 px-3 text-center text-text/90 font-medium">
                    {r.roomSize}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-3 font-semibold text-text/80">Guest Capacity</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="py-3 px-3 text-center text-text/90">
                    {r.capacity}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-3 font-semibold text-text/80">Bedding Configuration</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="py-3 px-3 text-center text-accent font-medium">
                    {r.bedType}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-3 font-semibold text-text/80">Split Air Conditioning</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="py-3 px-3 text-center text-emerald-400">
                    <Check size={16} className="mx-auto" />
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-3 font-semibold text-text/80">Room Heater on Demand</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="py-3 px-3 text-center text-emerald-400">
                    <Check size={16} className="mx-auto" />
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-3 font-semibold text-text/80">High-Speed Wi-Fi</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="py-3 px-3 text-center text-emerald-400">
                    <Check size={16} className="mx-auto" />
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-3 font-semibold text-text/80">Free Valet Parking</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="py-3 px-3 text-center text-emerald-400">
                    <Check size={16} className="mx-auto" />
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-3 font-semibold text-text/80">City View Balcony / Window</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="py-3 px-3 text-center">
                    {r.id.includes('super') || r.id.includes('suite') ? (
                      <span className="text-emerald-400 font-bold">Included</span>
                    ) : (
                      <span className="text-muted">Standard View</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="py-3 px-3 font-semibold text-text/80">Breakfast Included Option</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="py-3 px-3 text-center">
                    {r.id.includes('suite') ? (
                      <span className="text-accent font-bold">Complimentary</span>
                    ) : (
                      <span className="text-muted">+₹150/person</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
