export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'rooms' | 'exterior' | 'lobby' | 'washroom';
  image: string;
  description: string;
  tag: string;
  featured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hotel-facade',
    title: 'Hotel Shivansh Building & Exterior',
    subtitle: 'Opposite Roadways Central Bus Depot',
    category: 'exterior',
    image: '/images/hotel-exterior.jpg',
    tag: '10 Exterior Photos',
    description:
      'Imposing modern facade located right opposite the middle gate of Roadways Bus Depot in Sikar Roadlines. Ample parking in front with 24/7 security.',
    featured: true,
  },
  {
    id: 'hotel-deluxe-room',
    title: 'Deluxe Air-Conditioned Bedroom',
    subtitle: 'Spotless Comfort & Modern Interiors',
    category: 'rooms',
    image: '/images/hotel-room-deluxe.jpg',
    tag: '22 Room Photos',
    description:
      'Beautifully furnished bedroom featuring fresh white linens, cushioned headboard, mood lighting, air conditioning, and room heater facility for a peaceful sleep.',
    featured: true,
  },
  {
    id: 'hotel-reception-lobby',
    title: 'Grand Reception & Welcome Lounge',
    subtitle: '24/7 Express Check-in & Helpdesk',
    category: 'lobby',
    image: '/images/hotel-reception.jpg',
    tag: '15 Interior Photos',
    description:
      'The tidy, well-lit front lobby welcomes guests with warmth. Our attentive multi-language staff is available 24 hours to assist with room keys and travel guidance.',
    featured: true,
  },
  {
    id: 'hotel-modern-washroom',
    title: 'Sparkling Clean Ensuite Washroom',
    subtitle: 'Hygienic Bath with 24-Hour Hot Geyser',
    category: 'washroom',
    image: '/images/hotel-bathroom.jpg',
    tag: '7 Washroom Photos',
    description:
      'Pristine modern bathroom equipped with premium sanitary fittings, hot water geysers, complimentary toiletries, and fresh sanitized towels.',
    featured: true,
  },
  {
    id: 'hotel-suite-bedding',
    title: 'Executive Suite & King Bed Setup',
    subtitle: 'Premium Hospitality for Pilgrims & Families',
    category: 'rooms',
    image: '/images/hotel-room-suite.jpg',
    tag: 'King Bed Suite',
    description:
      'Lavish King-size bedding with orthopedic mattress, ambient bedside reading lamps, tea station, and ample space for families visiting Sikar and nearby shrines.',
    featured: true,
  },
  {
    id: 'hotel-hallway-corridor',
    title: 'Spacious Guest Corridors & Architecture',
    subtitle: 'Elegantly Designed Guest Wings',
    category: 'lobby',
    image: '/images/hotel-hallway.jpg',
    tag: 'Interior & Corridors',
    description:
      'Clean, brightly illuminated corridors with high ceilings, quiet ambience, and convenient elevator & stair access to all floors.',
    featured: false,
  },
  {
    id: 'hotel-deluxe-angle',
    title: 'Comfortable Room Seating & City View',
    subtitle: 'Natural Lighting & Air Conditioning',
    category: 'rooms',
    image: '/images/hotel-room-view2.jpg',
    tag: 'Room View & Interior',
    description:
      'Spacious bedroom view showing large sliding windows overlooking Sikar, air conditioning unit, clean floor tiles, and wardrobe.',
    featured: false,
  },
  {
    id: 'hotel-lobby-lounge',
    title: 'Ground Floor Guest Lounge & Sitting Area',
    subtitle: 'Tidy Relaxing Lobby with Sofas',
    category: 'lobby',
    image: '/images/hotel-lobby-seating.jpg',
    tag: 'Lobby Seating',
    description:
      'Comfortable sofa seating area in the lobby where travelers can unwind, wait for their room keys, or arrange taxis for Khatu Shyam Ji.',
    featured: false,
  },
];
