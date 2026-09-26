export interface RoomOption {
  id: string;
  name: string;
  subtitle: string;
  pricePerNight: number;
  originalPrice: number;
  image: string;
  capacity: string;
  bedType: string;
  roomSize: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  description: string;
}

export const ROOMS_DATA: RoomOption[] = [
  {
    id: 'deluxe-ac-room',
    name: 'Deluxe AC Room',
    subtitle: 'Contemporary Comfort for Solo & Couple Stays',
    pricePerNight: 1999,
    originalPrice: 2499,
    image: '/images/hotel-room-deluxe.jpg',
    capacity: '2 Adults (1 Child below 6 free)',
    bedType: '1 Queen Bed',
    roomSize: '240 sq. ft.',
    badge: 'Best Seller',
    popular: true,
    description:
      'Impeccably maintained deluxe room featuring premium mattress, climate-controlled AC, optional room heater, 43" Smart LED TV, high-speed Wi-Fi, and a sparkling private washroom with geyser.',
    features: [
      'Split Air Conditioning',
      'Room Heater on Demand',
      'High-Speed Wi-Fi',
      '43" Smart LED TV',
      'Modern Washroom with Geyser',
      'Daily Housekeeping',
      '24/7 Room Service',
      'Bottled Drinking Water',
    ],
  },
  {
    id: 'super-deluxe-room',
    name: 'Super Deluxe King Room',
    subtitle: 'Spacious Luxury with Panoramic Sikar City View',
    pricePerNight: 2499,
    originalPrice: 3199,
    image: '/images/hotel-room-suite.jpg',
    capacity: '2-3 Adults',
    bedType: '1 Grand King Bed',
    roomSize: '320 sq. ft.',
    badge: 'Recommended',
    popular: true,
    description:
      'Extra-spacious room featuring a grand King-size bed, city-view windows, comfortable lounge seating, executive work desk, tea/coffee maker, and plush linen.',
    features: [
      'Grand King Bed with Plush Pillows',
      'Sikar City View Window',
      'Dedicated Work Desk & Sofa Seating',
      'Tea & Coffee Maker Station',
      'Split AC & Heating Unit',
      'Ultra-Speed Fiber Wi-Fi',
      'Luxury Toiletries & Geyser',
      'Express Laundry & Dry Cleaning',
    ],
  },
  {
    id: 'executive-family-suite',
    name: 'Executive Family Suite',
    subtitle: 'The Ultimate Accommodation for Pilgrimage Families',
    pricePerNight: 3499,
    originalPrice: 4499,
    image: '/images/hotel-hallway.jpg',
    capacity: '4-5 Adults',
    bedType: '2 Queen Beds / Interconnected',
    roomSize: '460 sq. ft.',
    badge: 'Family Special',
    popular: false,
    description:
      'Specially designed for Khatu Shyam Ji & Salasar Balaji pilgrim families or wedding parties. Features dual queen beds, generous luggage storage, cozy lounge area, and complimentary breakfast option.',
    features: [
      'Two Large Queen Beds',
      'Spacious Living & Seating Lounge',
      'Complimentary Morning Breakfast Option',
      'Mini Fridge & Electric Kettle',
      'Dual Climate Control (AC + Heaters)',
      'Extra Wardrobe & Luggage Racks',
      'Large Deluxe En-suite Bathroom',
      'Priority 24/7 Room Dining',
    ],
  },
  {
    id: 'group-pilgrim-wing',
    name: 'Pilgrim & Corporate Group Stay',
    subtitle: 'Custom Accommodations for Khatu / Salasar Yatras',
    pricePerNight: 1699,
    originalPrice: 2200,
    image: '/images/hotel-reception.jpg',
    capacity: '6 to 50+ Guests',
    bedType: 'Multiple Rooms / Floor Booking',
    roomSize: 'Custom Wing',
    badge: 'Special Group Rates',
    popular: false,
    description:
      'Exclusive group deals for religious tour parties, wedding baratis, coaching institute parents, and corporate teams. Includes tailored meal packages and direct tour bus parking.',
    features: [
      'Special Discounted Group Tariffs',
      'Direct Tour Bus / Van Secure Parking',
      'Special Packed Breakfast / Langar Support',
      'Assistance with Local Sightseeing & Taxis',
      'Flexible Early Morning Check-ins',
      'Dedicated Group Coordinator',
      'Multi-Language Hospitality Support',
      'Luggage Storage & Locker Facility',
    ],
  },
];
