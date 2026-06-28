export type FoodCategory =
  | 'starters'
  | 'mains'
  | 'desserts'
  | 'drinks'
  | 'salads'
  | 'soups';

export type DietType = 'veg' | 'non-veg' | 'vegan';

export interface FoodItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  discountPrice?: number;
  category: FoodCategory;
  diet: DietType;
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  prepTime: string;
  calories: number;
  ingredients: string[];
  nutrition: {
    protein: string;
    carbs: string;
    fat: string;
    calories: string;
  };
  chefNotes: string;
  isFeatured: boolean;
  isTodaySpecial: boolean;
  isPopular: boolean;
  isAvailable: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: FoodCategory;
  description: string;
  image: string;
  itemCount: number;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  social: {
    twitter?: string;
    instagram?: string;
  };
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  foodName?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'interior' | 'food' | 'events' | 'chef';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface CartItem {
  food: FoodItem;
  quantity: number;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
}
