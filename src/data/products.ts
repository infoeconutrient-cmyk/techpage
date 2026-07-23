export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  badge: string;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  nutritionFacts: {
    servingSize: string;
    calories: string;
    protein: string;
    fiber: string;
    fat: string;
    carbs: string;
  };
  storageInfo: string;
  shippingInfo: string;
  faqs: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: 'sattu-001',
    name: 'Traditional Sattu',
    slug: 'traditional-sattu',
    price: 349,
    originalPrice: 399,
    description:
      'A time-honoured Bihar staple made from roasted gram, crafted for daily nourishment. Sattu has nourished generations across Bihar with its grounded flavor, remarkable versatility, and quiet strength. It is a food that fits modern routines while carrying the comfort of heritage.',
    shortDescription:
      'A time-honoured Bihar staple made from roasted gram, crafted for daily nourishment.',
    images: [
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80',
    ],
    category: 'Grains & Flours',
    badge: 'Available',
    rating: 4.5,
    reviewCount: 0,
    ingredients: [
      'Roasted Bengal Gram (Chana)',
      'Himalayan Pink Salt',
      'Traditional Herbs & Spices',
    ],
    benefits: [
      'High in plant-based protein for sustained energy',
      'Rich in dietary fiber for digestive wellness',
      'Naturally gluten-free and vegan',
      'Supports weight management and muscle health',
    ],
    howToUse:
      'Mix 2 tablespoons of Sattu with a glass of water, add a pinch of salt and lemon juice, stir well, and enjoy as a refreshing sharbat. Can also be used to make parathas, laddoos, or as a nutritious add-in to smoothies and porridge.',
    nutritionFacts: {
      servingSize: '30g (2 tbsp)',
      calories: '110',
      protein: '12g',
      fiber: '6g',
      fat: '2g',
      carbs: '14g',
    },
    storageInfo:
      'Store in a cool, dry place away from direct sunlight. Use within 30 days of opening for best freshness. Keep the container tightly sealed after each use.',
    shippingInfo:
      'Free shipping on orders above ₹499. Standard delivery takes 3–5 business days. We ship to all pin codes across India.',
    faqs: [
      {
        question: 'What is Sattu made of?',
        answer:
          'Sattu is traditionally made from roasted Bengal gram (chana) that is ground into a fine powder. Our recipe follows the authentic Bihar method without any additives or preservatives.',
      },
      {
        question: 'How do I consume Sattu?',
        answer:
          'Sattu can be mixed with water to make a sharbat (summer drink), used in paratha dough, added to smoothies, or incorporated into various recipes like laddoos and porridge.',
      },
      {
        question: 'Is Sattu gluten-free?',
        answer:
          'Yes, our Traditional Sattu is made from gram which is naturally gluten-free, making it suitable for those with gluten sensitivities.',
      },
      {
        question: 'What is the shelf life?',
        answer:
          'Our Sattu has a shelf life of 6 months from the date of manufacturing when stored properly in a cool, dry place.',
      },
    ],
  },
];

export const comingSoonProducts: Product[] = [
  {
    id: 'makhana-001',
    name: 'Makhana (Coming Soon)',
    slug: 'makhana',
    price: 499,
    description:
      'Delicate lotus seeds from Bihar, prepared with a light roast and an elegant finish.',
    shortDescription:
      'Delicate lotus seeds from Bihar, prepared with a light roast and an elegant finish.',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    ],
    category: 'Snacks & Superfoods',
    badge: 'Coming Soon',
    rating: 0,
    reviewCount: 0,
    ingredients: ['Roasted Makhana (Fox Nuts)', 'Himalayan Pink Salt', 'Ghee'],
    benefits: [
      'Rich in antioxidants and protein',
      'Low in calories — perfect guilt-free snack',
      'Supports heart health and bone strength',
    ],
    howToUse: 'Enjoy straight from the pack as a crunchy snack.',
    nutritionFacts: {
      servingSize: '30g',
      calories: '130',
      protein: '5g',
      fiber: '2g',
      fat: '4g',
      carbs: '18g',
    },
    storageInfo:
      'Store in a cool, dry place. Once opened, consume within 15 days.',
    shippingInfo: 'Product coming soon. Stay tuned!',
    faqs: [],
  },
];

export const allProducts = [...products, ...comingSoonProducts];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getAvailableProducts(): Product[] {
  return products;
}

/* ── Homepage shared data ── */

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Chapter One — Bihar', href: '#chapter-one' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'Our Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const features = [
  { title: 'High Protein', subtitle: 'A grounded source of nourishment for busy days.' },
  { title: 'High Fiber', subtitle: 'Made to support steady energy and everyday balance.' },
  { title: 'Naturally Plant-Based', subtitle: 'Rooted in tradition and made without compromise.' },
  { title: 'Ready in Minutes', subtitle: 'Simple to stir, sip, and serve with ease.' },
];

export const futureChapters = [
  { title: 'Assam', subtitle: 'Raw Forest Honey', badge: 'Coming Soon' },
  { title: 'Andhra Pradesh', subtitle: 'Traditional Podi', badge: 'Coming Soon' },
  { title: 'Kerala', subtitle: 'Virgin Coconut Oil', badge: 'Coming Soon' },
  { title: 'Kashmir', subtitle: 'Premium Saffron', badge: 'Coming Soon' },
];

export const recipes = [
  {
    title: 'Traditional Sattu Sharbat',
    description: 'Cool, fragrant, and deeply satisfying.',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Healthy Breakfast Bowl',
    description: 'A bright, nourishing way to begin the day.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sattu Paratha',
    description: 'Warm, comforting, and made for shared meals.',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80',
  },
];

