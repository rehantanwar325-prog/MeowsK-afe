export interface HotelInfo {
  name: string;
  tagline: string;
  subtagline: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  displayWhatsapp: string;
  email: string;
  address: string;
  landmark: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  fullAddress: string;
  justdialUrl: string;
  googleMapsUrl: string;
  yearEstablished: string;
  rating: {
    score: number;
    totalReviews: number;
    platform: string;
    totalPhotos: number;
  };
  startingPrice: number;
  checkInTime: string;
  checkOutTime: string;
  timings: string;
  paymentAccepted: string[];
  stats: {
    label: string;
    value: string;
  }[];
  amenities: {
    name: string;
    category: 'comfort' | 'convenience' | 'services' | 'dining';
    icon: string;
    desc: string;
  }[];
}

export const HOTEL_INFO: HotelInfo = {
  name: 'HOTEL SHIVANSH',
  tagline: 'Premium Comfort & Warm Hospitality in Sikar',
  subtagline: 'Centrally Located Opposite Roadways Bus Depot • The Gateway to Khatu Shyam Ji & Salasar Balaji',
  phone: '+919999157200',
  displayPhone: '+91 99991 57200',
  whatsapp: '919999157200',
  displayWhatsapp: '+91 99991 57200',
  email: 'stay@hotelshivanshsikar.com',
  address: 'Opposite Roadways Bus Depot (Middle Gate)',
  landmark: 'Opposite Roadways Bus Stand, Mane Gate Ke Samne',
  locality: 'Devipura, Sikar Roadlines',
  city: 'Sikar',
  state: 'Rajasthan',
  pincode: '332001',
  fullAddress: 'Opposite Roadways Bus Depot, Middle Gate, Devipura, Sikar Roadlines, Sikar, Rajasthan - 332001',
  justdialUrl: 'https://www.justdial.com/Sikar/HOTEL-SHIVANSH-Opposite-Roadways-Bus-Depot-Sikar-Roadlines/9999P1572-1572-251202150053-X6V6_BZDET',
  googleMapsUrl: 'https://www.google.com/maps/search/Roadways+Bus+Depot+Sikar+Rajasthan+Hotel+Shivansh',
  yearEstablished: '2025',
  rating: {
    score: 5.0,
    totalReviews: 11,
    platform: 'Justdial',
    totalPhotos: 55,
  },
  startingPrice: 1999,
  checkInTime: '12:00 PM (24-Hour Front Desk Available)',
  checkOutTime: '11:00 AM',
  timings: 'Open 24 Hours (All 7 Days)',
  paymentAccepted: ['Cash', 'UPI (GPay / PhonePe / Paytm)', 'Net Banking', 'Debit & Credit Cards'],
  stats: [
    { label: 'Justdial Rating', value: '5.0 ★' },
    { label: 'Customer Reviews', value: '100% Positive' },
    { label: 'Photos & Videos', value: '55+ Views' },
    { label: 'To Roadways Bus Stand', value: '0 Mtr (Opposite)' },
    { label: 'To Khatu Shyam Ji', value: '45 KM (~50 Min)' },
  ],
  amenities: [
    {
      name: 'Central Roadways Location',
      category: 'convenience',
      icon: 'MapPin',
      desc: 'Right opposite Roadways Bus Depot middle gate. Perfect for effortless transit.',
    },
    {
      name: 'High-Speed Wi-Fi',
      category: 'convenience',
      icon: 'Wifi',
      desc: 'Complimentary high-speed fiber internet in all rooms and public lounges.',
    },
    {
      name: 'AC & Room Heater Available',
      category: 'comfort',
      icon: 'ThermometerSnowflake',
      desc: 'Split air conditioning for warm days and dedicated room heaters for chilly desert nights.',
    },
    {
      name: '24/7 Front Desk & Check-in',
      category: 'services',
      icon: 'Clock',
      desc: 'Round-the-clock reception team for late arrivals, early check-ins, and departures.',
    },
    {
      name: 'Tasty In-House Dining',
      category: 'dining',
      icon: 'Utensils',
      desc: 'Mouthwatering fresh North Indian and authentic Rajasthani food praised by all guests.',
    },
    {
      name: 'Massive Breakfast Spread',
      category: 'dining',
      icon: 'Coffee',
      desc: 'Energizing fresh morning breakfasts to fuel your pilgrimage and business travels.',
    },
    {
      name: 'Free Valet & Vehicle Parking',
      category: 'convenience',
      icon: 'Car',
      desc: 'Spacious secure parking area with dedicated valet assistance for cars and tourist coaches.',
    },
    {
      name: 'Multi-Language Support Staff',
      category: 'services',
      icon: 'Languages',
      desc: 'Courteous staff fluent in Hindi, English, and Rajasthani Marwari.',
    },
    {
      name: 'Wheelchair Accessible & Elevators',
      category: 'convenience',
      icon: 'Accessibility',
      desc: 'Comfortable accessibility and ground-floor assistance for elders and pilgrims.',
    },
    {
      name: 'Pet-Friendly Stay',
      category: 'comfort',
      icon: 'HeartHandshake',
      desc: 'Welcoming accommodation for your furry pets and family companions.',
    },
    {
      name: 'Salon & Grooming Services',
      category: 'services',
      icon: 'Sparkles',
      desc: 'In-house salon and beauty parlour facilities for weddings and celebrations.',
    },
    {
      name: '24-Hour Hot Water & Geyser',
      category: 'comfort',
      icon: 'Bath',
      desc: 'Modern en-suite washrooms with instantaneous hot water geysers and fresh bath amenities.',
    },
  ],
};
