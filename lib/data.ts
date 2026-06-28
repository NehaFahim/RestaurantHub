import type {
  FoodItem,
  Category,
  Chef,
  Review,
  Testimonial,
  GalleryImage,
  BlogPost,
} from '@/types';

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Starters',
    slug: 'starters',
    description: 'Small plates to begin your journey',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 12,
  },
  {
    id: 'c2',
    name: 'Main Course',
    slug: 'mains',
    description: 'Hearty dishes crafted to perfection',
    image:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 24,
  },
  {
    id: 'c3',
    name: 'Desserts',
    slug: 'desserts',
    description: 'Sweet endings worth savoring',
    image:
      'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 9,
  },
  {
    id: 'c4',
    name: 'Drinks',
    slug: 'drinks',
    description: 'Curated wines, cocktails & mocktails',
    image:
      'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 18,
  },
  {
    id: 'c5',
    name: 'Salads',
    slug: 'salads',
    description: 'Fresh, vibrant and nourishing',
    image:
      'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 8,
  },
  {
    id: 'c6',
    name: 'Soups',
    slug: 'soups',
    description: 'Comfort in every spoonful',
    image:
      'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600',
    itemCount: 6,
  },
];

export const foods: FoodItem[] = [
  {
    id: 'f1',
    name: 'Truffle Wagyu Burger',
    slug: 'truffle-wagyu-burger',
    description:
      'Premium wagyu beef patty with black truffle, aged cheddar, and brioche bun.',
    longDescription:
      'Our signature Truffle Wagyu Burger features a hand-ground A5 wagyu patty seared to perfection, topped with shaved black truffles, aged sharp cheddar, caramelized onions, and house-made truffle aioli, all nestled in a buttery brioche bun. Served with hand-cut truffle fries.',
    price: 32,
    discountPrice: 28,
    category: 'mains',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1639558/pexels-photo-1639558.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    rating: 4.9,
    reviewCount: 248,
    prepTime: '25 min',
    calories: 720,
    ingredients: [
      'A5 Wagyu beef',
      'Black truffle',
      'Aged cheddar',
      'Brioche bun',
      'Caramelized onions',
      'Truffle aioli',
    ],
    nutrition: { protein: '38g', carbs: '42g', fat: '34g', calories: '720' },
    chefNotes:
      'Let the patty rest for 3 minutes after cooking to retain juices. Pair with a bold Cabernet.',
    isFeatured: true,
    isTodaySpecial: true,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: 'f2',
    name: 'Lobster Bisque',
    slug: 'lobster-bisque',
    description:
      'Velvety lobster soup with cognac, finished with crème fraîche and chives.',
    longDescription:
      'A luxurious lobster bisque simmered for hours with fresh lobster shells, aromatic vegetables, cognac, and a touch of tomato. Finished with crème fraîche, fresh chives, and a drizzle of cognac. Served with toasted brioche soldiers.',
    price: 18,
    category: 'soups',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6210755/pexels-photo-6210755.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    rating: 4.8,
    reviewCount: 156,
    prepTime: '15 min',
    calories: 320,
    ingredients: [
      'Fresh lobster',
      'Cognac',
      'Crème fraîche',
      'Aromatic vegetables',
      'Tomato',
      'Chives',
    ],
    nutrition: { protein: '18g', carbs: '12g', fat: '22g', calories: '320' },
    chefNotes:
      'Strain twice through a fine mesh for the silkiest texture. A splash of sherry adds depth.',
    isFeatured: true,
    isTodaySpecial: false,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: 'f3',
    name: 'Mediterranean Mezze Platter',
    slug: 'mediterranean-mezze-platter',
    description:
      'Hummus, baba ganoush, falafel, olives, and warm pita with olive oil.',
    longDescription:
      'A vibrant Mediterranean mezze platter featuring silky hummus, smoky baba ganoush, golden falafel, marinated olives, dolma, and warm pita bread drizzled with extra virgin olive oil. Perfect for sharing.',
    price: 22,
    category: 'starters',
    diet: 'vegan',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    rating: 4.7,
    reviewCount: 189,
    prepTime: '20 min',
    calories: 480,
    ingredients: [
      'Chickpeas',
      'Tahini',
      'Eggplant',
      'Falafel',
      'Olives',
      'Pita bread',
      'Olive oil',
    ],
    nutrition: { protein: '16g', carbs: '58g', fat: '22g', calories: '480' },
    chefNotes:
      'Warm the pita before serving. A sprinkle of smoked paprika on the hummus elevates the presentation.',
    isFeatured: false,
    isTodaySpecial: false,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: 'f4',
    name: 'Pan-Seared Salmon',
    slug: 'pan-seared-salmon',
    description:
      'Atlantic salmon with lemon butter sauce, asparagus, and herb quinoa.',
    longDescription:
      'Fresh Atlantic salmon pan-seared to crispy-skinned perfection, served over herb-infused quinoa with charred asparagus, finished with a bright lemon butter sauce and microgreens. A balanced, protein-rich dish.',
    price: 28,
    category: 'mains',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    rating: 4.8,
    reviewCount: 203,
    prepTime: '22 min',
    calories: 540,
    ingredients: [
      'Atlantic salmon',
      'Quinoa',
      'Asparagus',
      'Lemon',
      'Butter',
      'Fresh herbs',
    ],
    nutrition: { protein: '42g', carbs: '28g', fat: '26g', calories: '540' },
    chefNotes:
      'Pat the salmon skin completely dry before searing for the crispiest result. Cook skin-side down for 4 minutes.',
    isFeatured: true,
    isTodaySpecial: false,
    isPopular: false,
    isAvailable: true,
  },
  {
    id: 'f5',
    name: 'Dark Chocolate Fondant',
    slug: 'dark-chocolate-fondant',
    description:
      'Molten 70% dark chocolate cake with vanilla bean ice cream and raspberries.',
    longDescription:
      'A decadent dark chocolate fondant with a molten 70% Valrhona chocolate center, served warm beside Madagascar vanilla bean ice cream, fresh raspberries, and a dusting of cocoa. The ultimate dessert indulgence.',
    price: 14,
    discountPrice: 11,
    category: 'desserts',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    rating: 4.9,
    reviewCount: 312,
    prepTime: '18 min',
    calories: 410,
    ingredients: [
      '70% dark chocolate',
      'Butter',
      'Eggs',
      'Sugar',
      'Flour',
      'Vanilla ice cream',
      'Raspberries',
    ],
    nutrition: { protein: '8g', carbs: '48g', fat: '24g', calories: '410' },
    chefNotes:
      'Bake at 200°C for exactly 9 minutes for the perfect molten center. Serve immediately.',
    isFeatured: false,
    isTodaySpecial: true,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: 'f6',
    name: 'Avocado & Quinoa Salad',
    slug: 'avocado-quinoa-salad',
    description:
      'Mixed greens, avocado, quinoa, pomegranate, and citrus vinaigrette.',
    longDescription:
      'A nourishing bowl of mixed baby greens, creamy avocado, fluffy quinoa, pomegranate seeds, toasted almonds, and crumbled feta, tossed in a bright citrus vinaigrette. Healthy never tasted so good.',
    price: 16,
    category: 'salads',
    diet: 'vegan',
    image:
      'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    rating: 4.6,
    reviewCount: 142,
    prepTime: '12 min',
    calories: 380,
    ingredients: [
      'Mixed greens',
      'Avocado',
      'Quinoa',
      'Pomegranate',
      'Almonds',
      'Feta',
      'Citrus vinaigrette',
    ],
    nutrition: { protein: '12g', carbs: '34g', fat: '22g', calories: '380' },
    chefNotes:
      'Dress the salad just before serving to keep the greens crisp. Toast the almonds for extra crunch.',
    isFeatured: false,
    isTodaySpecial: false,
    isPopular: false,
    isAvailable: true,
  },
  {
    id: 'f7',
    name: 'Signature Old Fashioned',
    slug: 'signature-old-fashioned',
    description:
      'Bourbon, bitters, orange peel, and a hand-carved ice sphere.',
    longDescription:
      'Our take on the classic Old Fashioned: aged bourbon, aromatic bitters, a touch of demerara syrup, and a flamed orange peel, served over a single hand-carved ice sphere in a crystal tumbler.',
    price: 15,
    category: 'drinks',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/128321/pexels-photo-128321.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    rating: 4.9,
    reviewCount: 178,
    prepTime: '5 min',
    calories: 180,
    ingredients: ['Bourbon', 'Bitters', 'Demerara syrup', 'Orange peel'],
    nutrition: { protein: '0g', carbs: '8g', fat: '0g', calories: '180' },
    chefNotes:
      'Use a single large ice cube to minimize dilution. Flame the orange peel for aromatic oils.',
    isFeatured: true,
    isTodaySpecial: false,
    isPopular: true,
    isAvailable: true,
  },
  {
    id: 'f8',
    name: 'Margherita Pizza',
    slug: 'margherita-pizza',
    description:
      'San Marzano tomato, fresh mozzarella, basil, and extra virgin olive oil.',
    longDescription:
      'A classic Neapolitan Margherita pizza with San Marzano tomato sauce, fresh fior di latte mozzarella, basil leaves, and a drizzle of extra virgin olive oil, baked in our wood-fired oven for 90 seconds.',
    price: 19,
    category: 'mains',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/70858/pexels-photo-70858.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    rating: 4.7,
    reviewCount: 287,
    prepTime: '15 min',
    calories: 680,
    ingredients: [
      'San Marzano tomatoes',
      'Fior di latte mozzarella',
      'Fresh basil',
      'Extra virgin olive oil',
      'Pizza dough',
    ],
    nutrition: { protein: '24g', carbs: '72g', fat: '28g', calories: '680' },
    chefNotes:
      'The oven must be at 450°C for the signature charred crust. Stretch the dough by hand, never use a rolling pin.',
    isFeatured: false,
    isTodaySpecial: false,
    isPopular: true,
    isAvailable: true,
  },
];

export const chefs: Chef[] = [
  {
    id: 'ch1',
    name: 'Marco Rossi',
    role: 'Executive Chef',
    bio: '20 years crafting Italian-Mediterranean cuisine with a modern twist.',
    image:
      'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialties: ['Italian', 'Mediterranean', 'Pastry'],
    social: { twitter: '#', instagram: '#' },
  },
  {
    id: 'ch2',
    name: 'Yuki Tanaka',
    role: 'Sushi Master',
    bio: 'Tokyo-trained sushi chef with 15 years of omakase experience.',
    image:
      'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialties: ['Japanese', 'Sushi', 'Sashimi'],
    social: { instagram: '#' },
  },
  {
    id: 'ch3',
    name: 'Amelia Laurent',
    role: 'Pastry Chef',
    bio: 'Le Cordon Bleu graduate redefining modern dessert artistry.',
    image:
      'https://images.pexels.com/photos/3814448/pexels-photo-3814448.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialties: ['Pastry', 'Chocolate', 'Plated Desserts'],
    social: { twitter: '#', instagram: '#' },
  },
  {
    id: 'ch4',
    name: 'James Okonkwo',
    role: 'Head Grill Chef',
    bio: 'Open-fire specialist bringing bold flavors to premium cuts.',
    image:
      'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialties: ['Grill', 'Steak', 'Barbecue'],
    social: { instagram: '#' },
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Sarah Mitchell',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    date: '2024-03-15',
    title: 'Best dining experience in the city',
    comment:
      'The Truffle Wagyu Burger is absolutely divine. Every bite was a flavor explosion. The service was impeccable and the ambiance was perfect for our anniversary.',
    foodName: 'Truffle Wagyu Burger',
  },
  {
    id: 'r2',
    name: 'David Chen',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    date: '2024-03-10',
    title: 'Exceptional quality and taste',
    comment:
      'Ordered the Pan-Seared Salmon for delivery and it arrived hot and perfectly cooked. The packaging was elegant. This is now my go-to for fine dining at home.',
    foodName: 'Pan-Seared Salmon',
  },
  {
    id: 'r3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4,
    date: '2024-03-05',
    title: 'Lovely atmosphere, great food',
    comment:
      'The Lobster Bisque was rich and velvety. The chocolate fondant for dessert was the highlight. Will definitely return.',
    foodName: 'Lobster Bisque',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Olivia Bennett',
    role: 'Food Blogger',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'RestaurantHub has redefined what fine dining delivery can be. The quality rivals any restaurant I have visited in person.',
  },
  {
    id: 't2',
    name: 'Michael Foster',
    role: 'Regular Customer',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'From the seamless ordering to the exquisite food, every experience has been outstanding. The reservation system is effortless.',
  },
  {
    id: 't3',
    name: 'Sophia Park',
    role: 'Critic, The Daily Plate',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'A masterclass in modern dining. The chefs here understand flavor balance at a level few restaurants achieve.',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Elegant restaurant interior',
    category: 'interior',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Plated gourmet dish',
    category: 'food',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Chef plating a dish',
    category: 'chef',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Private dining event',
    category: 'events',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Artfully plated dessert',
    category: 'food',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cozy bar area',
    category: 'interior',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh ingredients on display',
    category: 'food',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wine pairing event',
    category: 'events',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Art of Pairing Wine with Food',
    slug: 'art-of-pairing-wine-with-food',
    excerpt:
      'Discover how the right wine can elevate your dining experience, from bold reds to crisp whites.',
    content:
      'Wine pairing is both an art and a science. The fundamental principle is balance: the wine should complement, not overpower, the dish. For rich, fatty meats like our Truffle Wagyu Burger, a bold Cabernet Sauvignon cuts through the richness with its tannins. For delicate seafood like our Pan-Seared Salmon, a crisp Sauvignon Blanc or Chablis enhances without masking. The key is to match intensity — delicate with delicate, bold with bold. Acidity in wine also plays a crucial role, refreshing the palate between bites. When in doubt, regional pairings rarely fail: Italian food with Italian wine, French food with French wine. The terroir speaks the same language on plate and in glass.',
    image:
      'https://images.pexels.com/photos/1407848/pexels-photo-1407848.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Marco Rossi',
    authorAvatar:
      'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-03-20',
    category: 'Wine & Pairing',
    tags: ['wine', 'pairing', 'dining'],
    readTime: '5 min read',
  },
  {
    id: 'b2',
    title: 'Behind the Scenes: A Day in Our Kitchen',
    slug: 'behind-the-scenes-day-in-our-kitchen',
    excerpt:
      'Ever wonder what happens before your dish arrives? Follow our chefs through a full service.',
    content:
      'A day in our kitchen begins long before the first guest arrives. At 6 AM, the prep team starts: vegetables are washed and cut, stocks are set to simmer, and doughs are shaped for their first proof. By 10 AM, the line cooks arrive for mise en place — the meticulous arrangement of every ingredient each cook will need. Every sauce is tasted, every temperature checked. When service begins at noon, the kitchen transforms into a choreographed dance. Orders stream in, tickets are called, and each station executes its part with precision timing. The pass — where the executive chef inspects every plate before it leaves — is the final checkpoint. A dish that does not meet our standard never reaches a guest. This commitment to excellence, repeated hundreds of times each day, is what defines RestaurantHub.',
    image:
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'James Okonkwo',
    authorAvatar:
      'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-03-15',
    category: 'Behind the Scenes',
    tags: ['kitchen', 'chefs', 'process'],
    readTime: '7 min read',
  },
  {
    id: 'b3',
    title: '5 Dessert Trends Shaping 2024',
    slug: 'five-dessert-trends-shaping-2024',
    excerpt:
      'From deconstructed classics to savory-sweet fusions, here is what is trending in pastry.',
    content:
      'Pastry is undergoing a renaissance. First, deconstruction: familiar desserts reimagined as their essential components, plated with artistic precision. Second, savory-sweet fusion: ingredients like olive oil, miso, and black garlic finding their way into desserts. Third, plant-based indulgence: dairy-free ice creams and egg-free mousses that sacrifice nothing in texture or flavor. Fourth, hyper-local sourcing: pastry chefs using foraged fruits and regional grains. Fifth, interactive desserts: dishes that guests finish at the table, like pouring hot sauce over a chocolate sphere. Our Dark Chocolate Fondant embodies several of these trends — a classic technique with a modern, interactive presentation.',
    image:
      'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Amelia Laurent',
    authorAvatar:
      'https://images.pexels.com/photos/3814448/pexels-photo-3814448.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-03-10',
    category: 'Trends',
    tags: ['dessert', 'pastry', 'trends'],
    readTime: '4 min read',
  },
];

export const faqs = [
  {
    id: 'faq1',
    question: 'What are your delivery hours?',
    answer:
      'We deliver from 11:00 AM to 10:30 PM, seven days a week. Orders placed after 10:00 PM may have extended delivery times.',
  },
  {
    id: 'faq2',
    question: 'How can I make a table reservation?',
    answer:
      'You can reserve a table through our Reservations page. Select your preferred date, time, and party size, and we will confirm your booking via email.',
  },
  {
    id: 'faq3',
    question: 'Do you accommodate dietary restrictions?',
    answer:
      'Absolutely. Our menu includes vegetarian, vegan, and gluten-free options. Please note any allergies or restrictions when ordering or reserving, and our chefs will be happy to accommodate.',
  },
  {
    id: 'faq4',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, debit cards, and cash on delivery. Online payments are processed securely through Stripe.',
  },
  {
    id: 'faq5',
    question: 'Can I cancel or modify my order?',
    answer:
      'Orders can be modified or cancelled within 5 minutes of placing them. Contact us immediately and we will do our best to accommodate your request.',
  },
  {
    id: 'faq6',
    question: 'Do you offer catering for events?',
    answer:
      'Yes, we provide full catering services for private and corporate events. Please contact us through the Contact page for a customized quote.',
  },
];
