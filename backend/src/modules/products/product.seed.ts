import { Product } from './product.model';

/**
 * Sample products for the Gift Finder feature
 * These should be seeded into your MongoDB database
 */
export const sampleProducts = [
  // Creative Gifts
  {
    name: 'Handcrafted Ceramic Mug',
    description: 'A beautiful handcrafted ceramic mug perfect for coffee lovers. Each piece is unique and made by local artisans.',
    price: 450,
    category: 'Home & Living',
    seller: 'Clay Creations Craft',
    sellerId: 'seller_001',
    tags: ['ceramic', 'handmade', 'mugcup', 'eco-friendly'],
    ageGroup: '20s',
    occasion: ['birthday', 'thankyou', 'holi'],
    personality: ['creative', 'minimalist', 'homebody'],
    budget: { min: 300, max: 600 },
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  {
    name: 'Luxury Aromatherapy Set',
    description: 'Premium essential oils and diffuser set from a local wellness brand. Perfect for relaxation and meditation.',
    price: 1200,
    category: 'Wellness',
    seller: 'Aroma Bliss Naturals',
    sellerId: 'seller_002',
    tags: ['aromatherapy', 'essential-oils', 'wellness'],
    ageGroup: '30s',
    occasion: ['birthday', 'anniversary', 'diwali'],
    personality: ['spiritual', 'wellness-focused', 'minimalist'],
    budget: { min: 800, max: 1500 },
    rating: 4.9,
    reviews: 234,
    inStock: true,
  },
  {
    name: 'Personalized Photo Frame',
    description: 'Beautiful wooden photo frame that can be personalized with your favorite photograph. Handmade by local craftsmen.',
    price: 599,
    category: 'Home & Living',
    seller: 'Wood Artisan Studio',
    sellerId: 'seller_003',
    tags: ['frame', 'personalized', 'wooden', 'handmade'],
    ageGroup: 'unknown',
    occasion: ['anniversary', 'wedding', 'promotion'],
    personality: ['creative', 'sentimental'],
    budget: { min: 400, max: 800 },
    rating: 4.7,
    reviews: 189,
    inStock: true,
  },
  {
    name: 'Vintage Fountain Pen Set',
    description: 'Luxurious fountain pen set for writing enthusiasts. Premium quality with beautiful wooden case.',
    price: 2500,
    category: 'Accessories',
    seller: 'Ink & Quill Crafts',
    sellerId: 'seller_004',
    tags: ['pen', 'luxury', 'stationary', 'mens'],
    ageGroup: '30s',
    occasion: ['promotion', 'birthday'],
    personality: ['tech-savvy', 'professional'],
    budget: { min: 2000, max: 5000 },
    rating: 4.8,
    reviews: 123,
    inStock: true,
  },
  {
    name: 'Handmade Scarf Collection',
    description: 'Beautiful handwoven scarves made by women artisans from rural India. Sustainable and unique.',
    price: 750,
    category: 'Fashion',
    seller: 'Threads of Change',
    sellerId: 'seller_005',
    tags: ['scarf', 'womens', 'handwoven', 'sustainable'],
    ageGroup: '20s',
    occasion: ['birthday', 'festival', 'holi'],
    personality: ['fashionable', 'adventurous'],
    budget: { min: 500, max: 1000 },
    rating: 4.6,
    reviews: 267,
    inStock: true,
  },
  {
    name: 'Sports Activity Tracker',
    description: 'Modern activity tracker watch for fitness enthusiasts. Water-resistant with multiple sport modes.',
    price: 3500,
    category: 'Electronics',
    seller: 'Tech Pulse India',
    sellerId: 'seller_006',
    tags: ['watch', 'fitness', 'tech', 'sporty'],
    ageGroup: '20s',
    occasion: ['birthday', 'promotion'],
    personality: ['sporty', 'tech-savvy'],
    budget: { min: 3000, max: 5000 },
    rating: 4.7,
    reviews: 345,
    inStock: true,
  },
  {
    name: 'Artisanal Dark Chocolate Box',
    description: 'Premium dark chocolate collection from a local chocolate maker. Perfect gift for chocolate lovers.',
    price: 850,
    category: 'Food & Beverage',
    seller: 'Cocoa Crafted',
    sellerId: 'seller_007',
    tags: ['chocolate', 'artisanal', 'gourmet'],
    ageGroup: '30s',
    occasion: ['birthday', 'anniversary', 'diwali', 'holi'],
    personality: ['foodie', 'minimalist'],
    budget: { min: 600, max: 1200 },
    rating: 4.8,
    reviews: 456,
    inStock: true,
  },
  {
    name: 'Meditation Cushion',
    description: 'High-quality meditation cushion (zafu) filled with organic buckwheat. Perfect for yoga and meditation.',
    price: 1500,
    category: 'Wellness',
    seller: 'Zen Living Co',
    sellerId: 'seller_008',
    tags: ['meditation', 'yoga', 'wellness', 'organic'],
    ageGroup: '30s',
    occasion: ['birthday', 'holi'],
    personality: ['spiritual', 'homebody', 'minimalist'],
    budget: { min: 1000, max: 2000 },
    rating: 4.9,
    reviews: 198,
    inStock: true,
  },
  {
    name: 'Personalized Wooden Book Stand',
    description: 'Beautiful wooden book stand with personalized engraving. Perfect for avid readers.',
    price: 650,
    category: 'Home & Living',
    seller: 'Page Turners Studio',
    sellerId: 'seller_009',
    tags: ['bookstand', 'personalized', 'wooden', 'creative'],
    ageGroup: '20s',
    occasion: ['birthday', 'promotion'],
    personality: ['creative', 'homebody'],
    budget: { min: 500, max: 1000 },
    rating: 4.7,
    reviews: 134,
    inStock: true,
  },
  {
    name: 'Luxury Candle Set',
    description: 'Hand-poured soy candles with premium fragrances. Each set contains 3 unique scents.',
    price: 1200,
    category: 'Home & Living',
    seller: 'Glow & Warmth',
    sellerId: 'seller_010',
    tags: ['candles', 'aromatherapy', 'luxury', 'womens'],
    ageGroup: '30s',
    occasion: ['birthday', 'anniversary', 'holi'],
    personality: ['minimalist', 'fashionable', 'homebody'],
    budget: { min: 900, max: 1500 },
    rating: 4.8,
    reviews: 289,
    inStock: true,
  },
  {
    name: 'Leather Journal',
    description: 'Premium leather-bound journal perfect for writers and creators. Includes quality pages.',
    price: 980,
    category: 'Accessories',
    seller: 'Leather & Paper Tales',
    sellerId: 'seller_011',
    tags: ['journal', 'leather', 'creative', 'stationary'],
    ageGroup: '20s',
    occasion: ['birthday', 'promotion', 'college'],
    personality: ['creative', 'tech-savvy'],
    budget: { min: 700, max: 1200 },
    rating: 4.7,
    reviews: 167,
    inStock: true,
  },
  {
    name: 'Bamboo Utensil Set',
    description: 'Eco-friendly bamboo utensil set with carrying case. Perfect for travelers and eco-conscious gifts.',
    price: 450,
    category: 'Lifestyle',
    seller: 'Green Living Goods',
    sellerId: 'seller_012',
    tags: ['eco-friendly', 'bamboo', 'travel', 'minimalist'],
    ageGroup: '20s',
    occasion: ['birthday', 'diwali', 'thankyou'],
    personality: ['adventurous', 'minimalist', 'eco-conscious'],
    budget: { min: 300, max: 600 },
    rating: 4.8,
    reviews: 212,
    inStock: true,
  },
];

/**
 * Seed function to populate the database
 * Usage: In your backend initialization, import and call this function
 */
export async function seedProducts() {
  try {
    // Check if products already exist
    const count = await Product.countDocuments();
    if (count > 0) {
      console.log('Products already seeded. Skipping...');
      return;
    }

    // Insert sample products
    const created = await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully seeded ${created.length} products`);
    return created;
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    throw error;
  }
}
