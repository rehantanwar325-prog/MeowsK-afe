export interface MenuItem {
  id: string;
  name: string;
  category: 'breakfast' | 'main-course' | 'rajasthani' | 'beverages' | 'snacks';
  price: number;
  description: string;
  isSpecial?: boolean;
  isVeg: boolean;
}

export const DINING_HIGHLIGHTS = {
  title: 'In-House Dining & 24/7 Room Service',
  subtitle: 'Fresh, Hygienic & Delicious Meals Prepared by Experienced Chefs',
  tagline: 'Praised by 100% of our reviewed guests for massive breakfast spreads and flavorful curries!',
  features: [
    'Massive Fresh Morning Breakfast Buffet & À la carte',
    'Authentic Rajasthani Thali & Regional Delicacies',
    'Pure Vegetarian & Jain Friendly Preparations on Request',
    '24-Hour Express Room Service for Late Arrivals',
    'Complimentary Tea / Coffee Kit in Executive Rooms',
    'Hygienic RO Purified Water & Clean Preparation Standards',
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm-1',
    name: 'Royal Rajasthani Special Thali',
    category: 'rajasthani',
    price: 249,
    description: 'Dal Baati Churma, Gatta Curry, Ker Sangri, Paneer Sabzi, Roti, Rice, Papad, Raita, and Sweet.',
    isSpecial: true,
    isVeg: true,
  },
  {
    id: 'm-2',
    name: 'Special Paneer Butter Masala',
    category: 'main-course',
    price: 199,
    description: 'Tender cottage cheese simmered in a rich tomato, butter, and cashew nut gravy with aromatic kasuri methi.',
    isSpecial: true,
    isVeg: true,
  },
  {
    id: 'm-3',
    name: 'Dal Makhani (Slow-Cooked Overnight)',
    category: 'main-course',
    price: 179,
    description: 'Black lentils slow cooked with churned white butter and mild Indian spices.',
    isSpecial: false,
    isVeg: true,
  },
  {
    id: 'm-4',
    name: 'Stuffed Aloo & Paneer Paratha with Dahi & Makkhan',
    category: 'breakfast',
    price: 120,
    description: 'Crispy tawa parathas loaded with spiced potatoes or cottage cheese, served with fresh curd, pickle, and butter.',
    isSpecial: true,
    isVeg: true,
  },
  {
    id: 'm-5',
    name: 'Indori Poha with Sev & Fried Peanuts',
    category: 'breakfast',
    price: 79,
    description: 'Light steamed beaten rice tempered with mustard seeds, turmeric, fresh curry leaves, and crunchy ratlami sev.',
    isSpecial: false,
    isVeg: true,
  },
  {
    id: 'm-6',
    name: 'Puri Bhaji (Homestyle Aloo Tamatar)',
    category: 'breakfast',
    price: 99,
    description: '4 puffed golden puris served with tangy spiced potato gravy and green chili pickle.',
    isSpecial: false,
    isVeg: true,
  },
  {
    id: 'm-7',
    name: 'Kulhad Masala Chai & Adrak Tea',
    category: 'beverages',
    price: 35,
    description: 'Steaming hot authentic tea brewed with crushed ginger, cardamom, and aromatic cloves served in clay kulhad.',
    isSpecial: true,
    isVeg: true,
  },
  {
    id: 'm-8',
    name: 'Fresh Filter Coffee & Cappuccino',
    category: 'beverages',
    price: 65,
    description: 'Freshly ground aromatic brew served with frothy milk.',
    isSpecial: false,
    isVeg: true,
  },
  {
    id: 'm-9',
    name: 'Butter Roti & Garlic Naan Basket',
    category: 'main-course',
    price: 85,
    description: 'Assortment of hot clay-oven baked tandoori and tawa breads brushed with pure desi ghee.',
    isSpecial: false,
    isVeg: true,
  },
  {
    id: 'm-10',
    name: 'Sweet Lassi & Badam Milk',
    category: 'beverages',
    price: 75,
    description: 'Thick creamy Rajasthani sweet curd lassi garnished with saffron and chopped pistachios.',
    isSpecial: true,
    isVeg: true,
  },
];
