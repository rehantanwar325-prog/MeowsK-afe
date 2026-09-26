export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: 'Justdial Verified' | 'Google Reviews' | 'MakeMyTrip';
  comment: string;
  tag: string;
  avatarLetter: string;
  accentColor: string;
  verifiedBooking?: boolean;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Sapna Tak',
    rating: 5,
    date: '5th June, 2026',
    source: 'Justdial Verified',
    comment:
      'My stay at HOTEL SHIVANSH was delightful! The tidy lobby welcomed me with warmth, setting a relaxing tone for my visit. It’s budget-friendly, making it perfect for leisure travelers like me. The highlight was the tasty food – every meal was a treat! Overall, it provided a refreshing escape without breaking the bank. Highly recommended!',
    tag: 'Delightful Stay & Tasty Food',
    avatarLetter: 'S',
    accentColor: 'bg-amber-600',
    verifiedBooking: true,
  },
  {
    id: 'rev-2',
    author: 'Kajal Goyal',
    rating: 5,
    date: '5th June, 2026',
    source: 'Justdial Verified',
    comment:
      'I had a great time at HOTEL SHIVANSH. It is a comfortable place to stay. The food was very tasty, and I enjoyed every meal. The location is great, making it easy to explore the area. The rooms are large and nice, perfect for relaxing. It is also budget-friendly, which is good for saving money. Plus, they have multi-language support, so I could talk easily with the staff. Overall, my experience was really good!',
    tag: 'Comfortable, Tasty Food & Great Location',
    avatarLetter: 'K',
    accentColor: 'bg-emerald-700',
    verifiedBooking: true,
  },
  {
    id: 'rev-3',
    author: 'Surendra Kumar Punia',
    rating: 5,
    date: '5th June, 2026',
    source: 'Justdial Verified',
    comment:
      'My stay at HOTEL SHIVANSH was delightful! The tidy lobby set a welcoming tone, and the large rooms offered plenty of space to relax. It’s budget-friendly without compromising comfort. The staff were warm and attentive, providing excellent service with multi-language support that made communication easy. A perfect choice for a leisure stay!',
    tag: 'Warm Staff & Multi-Language Support',
    avatarLetter: 'S',
    accentColor: 'bg-indigo-700',
    verifiedBooking: true,
  },
  {
    id: 'rev-4',
    author: 'Devendra',
    rating: 5,
    date: '5th June, 2026',
    source: 'Justdial Verified',
    comment:
      'HOTEL SHIVANSH is a great place! It has good vibes and feels very nice. The property is excellent, and I had a relaxing stay. The breakfast spread is massive and tasty! They also have good offers for groups. My room was clean and comfortable. I enjoyed my time here very much. I recommend HOTEL SHIVANSH for everyone who wants to relax and have fun!',
    tag: 'Massive Breakfast Spread & Group Offers',
    avatarLetter: 'D',
    accentColor: 'bg-amber-700',
    verifiedBooking: true,
  },
  {
    id: 'rev-5',
    author: 'Magic S P A',
    rating: 5,
    date: '5th June, 2026',
    source: 'Justdial Verified',
    comment:
      'I recently stayed at HOTEL SHIVANSH and it was an amazing experience! The staff were very friendly and helpful, making me feel right at home. The rooms were clean and comfortable, with great views. I loved the delicious food they served, especially breakfast! The location is perfect for exploring nearby attractions. I highly recommend HOTEL SHIVANSH for a wonderful getaway!',
    tag: 'Clean Rooms & Friendly Hospitality',
    avatarLetter: 'M',
    accentColor: 'bg-rose-700',
    verifiedBooking: true,
  },
  {
    id: 'rev-6',
    author: 'Nitesh Kumar',
    rating: 5,
    date: '6th January, 2026',
    source: 'Justdial Verified',
    comment:
      'Hotel Shivansh is a hidden gem for leisure stays! Nestled in lush greenery, this centrally located hotel offers spacious rooms and exceptional group offers. The friendly staff goes above and beyond to ensure a pleasant stay. Plus, their multi-language support makes it accessible for everyone. Whether you’re traveling with family or friends, Hotel Shivansh provides the perfect blend of comfort and convenience.',
    tag: 'Centrally Located & Family Friendly',
    avatarLetter: 'N',
    accentColor: 'bg-teal-700',
    verifiedBooking: true,
  },
];
