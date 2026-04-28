# 🎁 AI Gift Finder Feature - Implementation Guide

## Overview

The AI Gift Finder is an intelligent recommendation engine that helps customers discover the perfect gift in seconds. It uses a warm, human-centered approach combining questionnaire-based input with smart product matching.

---

## Architecture

### Backend (Node.js + Express + TypeScript)

#### Files Created:
1. **`src/modules/ai-gift-finder/giftFinder.schema.ts`** - Zod validation schemas
2. **`src/modules/ai-gift-finder/giftFinder.service.ts`** - Core recommendation logic
3. **`src/modules/ai-gift-finder/giftFinder.controller.ts`** - API endpoint handlers
4. **`src/modules/ai-gift-finder/giftFinder.routes.ts`** - Route definitions
5. **`src/modules/products/product.model.ts`** - Product schema for MongoDB
6. **`src/modules/products/product.seed.ts`** - Sample data for testing

#### API Endpoints:
```
GET  /api/gift-finder/questions
POST /api/gift-finder/recommendations
```

#### Request Format:
```json
{
  "relationship": "friend",
  "ageGroup": "30s",
  "personality": ["creative", "minimalist"],
  "gender": "female",
  "occasion": "birthday",
  "budgetMin": 500,
  "budgetMax": 2000
}
```

#### Response Format:
```json
{
  "message": "How wonderful that you're finding the perfect gift for this birthday! 🎁...",
  "recommendations": [
    {
      "product_id": "507f1f77bcf86cd799439011",
      "name": "Handcrafted Ceramic Mug",
      "price": 450,
      "seller": "Clay Creations Craft",
      "reason": "This gift is perfect for birthday, ideal for someone who's creative and minimalist...",
      "highlight": "Handmade"
    }
  ],
  "follow_up": "Would you like to personalize this gift further?"
}
```

### Frontend (Next.js + React + TypeScript)

#### Files Created:
1. **`src/lib/hooks/useGiftFinder.ts`** - API integration hook
2. **`src/components/gift-finder-questionnaire.tsx`** - Multi-step form component
3. **`src/components/gift-finder-recommendations.tsx`** - Results display component
4. **`src/app/gift-finder/page.tsx`** - Main page with all stages

#### User Flow:
1. **Intro Stage** - Warm welcome with feature highlights
2. **Questionnaire Stage** - 6-step form with progress tracking
3. **Recommendations Stage** - 2-3 personalized gift suggestions

---

## Installation & Setup

### 1. Backend Setup

#### Step 1: Install Dependencies (if needed)
```bash
cd backend
npm install
```

#### Step 2: Seed Sample Products
```bash
# Option A: Add to your database initialization script
# In your server.ts or app initialization:
import { seedProducts } from './modules/products/product.seed';

// After MongoDB connection is established:
await seedProducts();

# Option B: Manually via MongoDB CLI
# Use the sample products data from product.seed.ts
```

#### Step 3: Update Routes (Already Done)
The backend routes have been updated in `src/routes.ts` to include:
```typescript
router.use('/gift-finder', giftFinderRouter);
```

### 2. Frontend Setup

#### Step 1: Environment Configuration
Add to `.env.local` (if your backend is on a different URL):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### Step 2: Install Dependencies (if needed)
```bash
cd frontend
npm install
```

The UI components use your existing shadcn/ui components and Tailwind CSS.

#### Step 3: Navigation Updated
- **Navbar**: Added "✨ AI Gift Finder" link in secondary navigation
- **Homepage**: Added featured banner promoting the Gift Finder

---

## Matching Algorithm

The Gift Finder uses a scoring system to rank products:

### Scoring Breakdown:
- **Budget Match** (30 points): Exact match within range = 30 pts, within 20% = 15 pts
- **Occasion Match** (25 points): Product tagged with same occasion
- **Personality Match** (10 pts each): For each personality trait match
- **Age Group Match** (15 points): Product designed for that age group
- **Gender Preference** (10 points): If applicable
- **Stock Status** (5 points): Products in stock preferred

### Result Ranking:
1. Products are scored against user preferences
2. Top 20 candidates are selected
3. Top 3 by score are returned to user
4. Fallback: If no exact matches, returns similar products in price range

---

## Customization

### Adding New Occasion Types
Edit `giftFinder.schema.ts`:
```typescript
occasion: z.enum([
  'birthday',
  'anniversary',
  // ... add new occasion here
  'christmas',  // NEW
]);
```

### Adding New Personality Types
```typescript
personality: z.array(z.enum([
  'creative',
  'sporty',
  // ... add new personality here
  'bookish',  // NEW
])),
```

### Adjusting Scoring Weights
Edit `giftFinder.service.ts` in `calculateMatchScore()` method:
```typescript
// Current: budget match = 30 points
// Change to increase/decrease weight
score += 40; // Increase budget importance
```

### Customizing Warm Messages
Edit the `generateWarmMessage()` and `generateFollowUpQuestion()` methods in `giftFinder.service.ts` to personalize responses.

---

## Testing

### Backend Testing with Postman

1. **Get Questions Structure:**
```
GET http://localhost:5000/api/gift-finder/questions
```

2. **Get Recommendations:**
```
POST http://localhost:5000/api/gift-finder/recommendations
Content-Type: application/json

{
  "relationship": "friend",
  "ageGroup": "30s",
  "personality": ["creative", "minimalist"],
  "gender": "any",
  "occasion": "birthday",
  "budgetMin": 500,
  "budgetMax": 2000
}
```

### Frontend Testing

1. Start both servers:
```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

2. Navigate to: `http://localhost:3000/gift-finder`

3. Complete the questionnaire and verify recommendations appear

---

## Database Schema

### Product Model
```typescript
{
  name: String,
  description: String,
  price: Number,
  category: String,
  seller: String (Small business name),
  sellerId: String,
  tags: [String],
  ageGroup: String, // 'teens', '20s', '30s', etc.
  occasion: [String], // ['birthday', 'anniversary']
  personality: [String], // ['creative', 'sporty']
  budget: {
    min: Number,
    max: Number
  },
  image: String,
  rating: Number,
  reviews: Number,
  inStock: Boolean,
  timestamps: true
}
```

### Sample Products Included
12 sample products covering various categories:
- Home & Living
- Wellness
- Fashion
- Electronics
- Food & Beverage
- Accessories

All designed to work with the matching algorithm.

---

## Analytics & Tracking

The service logs recommendation events:
```typescript
logger.info('Gift recommendations generated', {
  occasion: preferences.occasion,
  budget: `${preferences.budgetMin}-${preferences.budgetMax}`,
  recommendationCount: recommendations.length,
});
```

Track these metrics to understand:
- Most popular occasions
- Average budget ranges
- Recommendation success rate

---

## Performance Considerations

1. **Database Indexing**: Product model has indexes on:
   - `name` (for search)
   - `price` (for filtering)
   - `category` (for categorization)

2. **Query Optimization**: 
   - Limits to 20 products before scoring
   - Returns only top 3 recommendations
   - Single database query with complex filters

3. **Frontend Optimization**:
   - Progressive form loading
   - Streaming recommendations display
   - Memoized components to prevent re-renders

---

## Troubleshooting

### No Recommendations Appearing
- **Issue**: Products not seeded to database
- **Solution**: Run the seed function or manually add products

### Slow Response Times
- **Issue**: Too many products in database
- **Solution**: Add proper indexes; optimize query in `giftFinder.service.ts`

### Mismatched Recommendations
- **Issue**: Products don't have proper tags/metadata
- **Solution**: Update product records with correct occasion, personality, ageGroup

### API 404 Errors
- **Issue**: Routes not registered
- **Solution**: Verify `src/routes.ts` includes the giftFinder routes

---

## Future Enhancements

1. **ML-Based Ranking**: Replace scoring algorithm with trained model
2. **User Preferences Learning**: Track user clicks and refine recommendations
3. **Seasonal Adjustments**: Boost products relevant to current season/festival
4. **Voice Input**: Add voice-based questionnaire
5. **Similar Recommendations**: "Users also liked..." section
6. **Price History**: Show price trends to help users decide
7. **Seller Profiles**: Link to seller pages and other products

---

## Support & Debugging

- Check backend logs for recommendation generation errors
- Use browser DevTools Network tab to inspect API responses
- Verify MongoDB connection before seeding products
- Ensure CORS is properly configured if backend is on different domain

---

**Version**: 1.0.0  
**Last Updated**: April 2026
