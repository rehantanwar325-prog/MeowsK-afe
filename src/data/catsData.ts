export interface CatProfile {
  id: string;
  name: string;
  initial: string;
  role: string;
  breed: string;
  age: string;
  personality: string[];
  favoriteSpot: string;
  favoriteActivity: string;
  quote: string;
  accent: string;
}

export const CAT_PROFILES: CatProfile[] = [
  {
    id: 'milo',
    name: 'Milo',
    initial: 'M',
    role: 'Resident Host & Lap Snuggler',
    breed: 'Ginger Tabby',
    age: '2 Years',
    personality: ['Affectionate', 'Gentle', 'Calm Companion'],
    favoriteSpot: 'The Wooden Pallet Bench under the Cat Mural',
    favoriteActivity: 'Curling up next to guests sipping hot Chai',
    quote: '"Warm laps and gentle ear scratches make my day complete."',
    accent: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
  {
    id: 'luna',
    name: 'Luna',
    initial: 'L',
    role: 'Sanctuary Guardian',
    breed: 'Tuxedo',
    age: '1.5 Years',
    personality: ['Curious', 'Observant', 'Graceful'],
    favoriteSpot: 'The Fairy-Lit Window Shelf',
    favoriteActivity: 'Watching birds outside and greeting new visitors at the entrance',
    quote: '"I approve every cup of coffee brewed in this forest."',
    accent: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
  {
    id: 'oreo',
    name: 'Oreo',
    initial: 'O',
    role: 'Board Game Companion',
    breed: 'Calico / Bi-Color',
    age: '1 Year',
    personality: ['Playful', 'Energetic', 'Friendly'],
    favoriteSpot: 'The Conversation Corner Table',
    favoriteActivity: 'Tapping dice on the board and resting near board game sessions',
    quote: '"If you roll a 6, you owe me a gentle chin rub!"',
    accent: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  },
  {
    id: 'simba',
    name: 'Simba',
    initial: 'S',
    role: 'Lounge Purr Master',
    breed: 'Golden Domestic Shorthair',
    age: '3 Years',
    personality: ['Peaceful', 'Meditative', 'Loving'],
    favoriteSpot: 'Green Plant Sanctuary Bench',
    favoriteActivity: 'Basking in the golden afternoon sunlight with ambient cafe music',
    quote: '"Take a deep breath, slow down, and enjoy your time here."',
    accent: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  },
];

export const CAFE_RULES = [
  {
    title: 'Let Cats Approach You First',
    desc: 'Our feline friends love gentle introductions. Extend your hand softly and let them sniff you before petting.',
    icon: 'HeartHandshake',
  },
  {
    title: 'No Flash Photography',
    desc: 'You are warmly encouraged to take photos (especially at our Cat Mural!), but please turn off camera flash to protect their sensitive eyes.',
    icon: 'CameraOff',
  },
  {
    title: 'Please Do Not Feed Human Food',
    desc: 'While our Maggi and bites smell tempting, human food and spices are unsafe for cats. Special cat treats are available on request!',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Gentle Voices & Relaxed Vibe',
    desc: 'Meows K-afe is "The Conversation Forest". Soft conversations and peaceful ambiance keep both guests and cats relaxed.',
    icon: 'Volume2',
  },
  {
    title: 'Sanitize Before & After Cuddles',
    desc: 'Eco-friendly, cat-safe sanitizing stations are available at every seating table and entrance for your safety and theirs.',
    icon: 'Sparkles',
  },
];
