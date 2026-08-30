export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: 'Google Review' | 'Zomato' | 'Instagram';
  comment: string;
  tag: string;
  avatarLetter: string;
  accentColor: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Aarav Sharma',
    rating: 5,
    date: '2 days ago',
    source: 'Google Review',
    comment: 'The ambience is out of this world! That illuminated cat mural bench is pure art. We ordered the signature Maggi and Kulhad Chai—both were phenomenal. Milo came and slept right beside us while we played Uno. 10/10 recommendation!',
    tag: 'Signature Maggi & Cat Cuddles',
    avatarLetter: 'A',
    accentColor: 'bg-amber-600',
  },
  {
    id: 'rev-2',
    author: 'Priya Rathore',
    rating: 5,
    date: '1 week ago',
    source: 'Google Review',
    comment: 'Finally a cafe that lives up to the hype! "The Conversation Forest" tagline is truly felt. The warm lighting, cozy cushions, and peaceful vibe make it the best place for long chats or work-from-cafe sessions.',
    tag: 'Aesthetic Ambience & Work Friendly',
    avatarLetter: 'P',
    accentColor: 'bg-emerald-700',
  },
  {
    id: 'rev-3',
    author: 'Devendra Verma',
    rating: 5,
    date: '2 weeks ago',
    source: 'Google Review',
    comment: 'Best Maggi in town without a doubt! Served hot with amazing spices. The cat mural with glowing mirror eyes is the coolest photo spot. Staff is super warm and caring towards both guests and the cats.',
    tag: 'Must Try Food & Photo Spot',
    avatarLetter: 'D',
    accentColor: 'bg-amber-700',
  },
  {
    id: 'rev-4',
    author: 'Sneha & Harshita',
    rating: 5,
    date: '3 weeks ago',
    source: 'Instagram',
    comment: 'Celebrated my friend’s birthday here. The fairy light outdoor entrance and night vibe are magical. We took so many gorgeous pictures at the cat eyes wall!',
    tag: 'Perfect Birthday & Meetup Vibe',
    avatarLetter: 'S',
    accentColor: 'bg-rose-700',
  },
  {
    id: 'rev-5',
    author: 'Vikramaditya S.',
    rating: 5,
    date: '1 month ago',
    source: 'Google Review',
    comment: 'The Hazelnut Cappuccino and Cheese Garlic Bread are delicious. Love that it is a calm, respectful environment where you can unwind with good coffee and sweet cats.',
    tag: 'Artisan Brews & Great Service',
    avatarLetter: 'V',
    accentColor: 'bg-teal-700',
  },
];
