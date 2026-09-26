export interface PilgrimageSpot {
  id: string;
  name: string;
  deity: string;
  distance: string;
  driveTime: string;
  description: string;
  timings: string;
  travelTip: string;
  cabAssistance: boolean;
}

export const PILGRIMAGE_SPOTS: PilgrimageSpot[] = [
  {
    id: 'khatu-shyam-ji',
    name: 'Shri Khatu Shyam Ji Temple',
    deity: 'Hare Ka Sahara — Baba Shyam Mandir',
    distance: '45 km',
    driveTime: 'Approx. 50 mins',
    description:
      'One of India’s most revered pilgrimage shrines, attracting millions of devotees. Hotel Shivansh serves as the primary resting hub with direct cabs, early morning wake-up service, and travel assistance.',
    timings: 'Mangala Aarti: 5:00 AM • Shayan Aarti: 10:00 PM',
    travelTip: 'Devotees recommend arriving a day prior to rest before attending early morning Mangala Aarti.',
    cabAssistance: true,
  },
  {
    id: 'salasar-balaji',
    name: 'Shree Salasar Balaji Dham',
    deity: 'Siddha Peeth of Lord Hanuman',
    distance: '50 km',
    driveTime: 'Approx. 55 mins',
    description:
      'The legendary temple of Balaji with beard and mustache (Daadi Munchh Wale Hanuman Ji). Direct express buses depart right opposite Hotel Shivansh from the Roadways Bus Depot.',
    timings: 'Open Daily from 5:00 AM to 10:00 PM',
    travelTip: 'Direct Roadways buses depart right outside our hotel entrance every 30 minutes.',
    cabAssistance: true,
  },
  {
    id: 'jeen-mata',
    name: 'Shri Jeen Mata Mandir',
    deity: 'Ancient Shakti Peeth & Kuldevi Dham',
    distance: '28 km',
    driveTime: 'Approx. 35 mins',
    description:
      'Perched amidst the scenic Aravalli hills, this sacred temple of Goddess Durga dates back more than a millennium and is celebrated during the grand Navratri mela.',
    timings: 'Open Daily from 5:30 AM to 9:30 PM',
    travelTip: 'Our reception arranges private taxis and round-trip pilgrimage packages at fair local rates.',
    cabAssistance: true,
  },
  {
    id: 'harshnath-temple',
    name: 'Harshnath Mahadev & Hills',
    deity: '10th Century Ancient Shiva Temple & Scenic Peak',
    distance: '14 km',
    driveTime: 'Approx. 20 mins',
    description:
      'Historical 10th-century ruins atop the Harsh Mountain with panoramic views of the Shekhawati plateau, wind farms, and pleasant cool breezes.',
    timings: 'Sunrise to Sunset (Best during early morning or sunset)',
    travelTip: 'Ideal morning drive for photography, nature, and historic architecture enthusiasts.',
    cabAssistance: true,
  },
  {
    id: 'sikar-heritage',
    name: 'Sikar Clock Tower & Havelis',
    deity: 'Royal Shekhawati Architecture & Bazaars',
    distance: '1.2 km',
    driveTime: 'Approx. 5 mins',
    description:
      'Historic Ghanta Ghar, grand frescoed Havelis of merchant princes, and vibrant bazaars famous for authentic Rajasthani sweets (Ghewar, Peda) and bandhani textiles.',
    timings: 'Bazaars open 10:00 AM to 9:00 PM',
    travelTip: 'Easily accessible via auto-rickshaws right outside the hotel.',
    cabAssistance: false,
  },
];
