# 🎁 Chatbot Integration Guide - Add Context to Any Page

## How to Add Chatbot Context to Your Pages

By default, the chatbot is available on all pages via the root layout. To make it **context-aware** (know about products, categories, etc.), add props to the ChatWidget:

---

## Product Detail Page

When users are viewing a specific product, tell the chatbot about it:

```tsx
// frontend/src/app/product/[id]/page.tsx

import { ChatWidget } from '@/components/chat-widget';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    name: 'Handcrafted Ceramic Mug',
    price: 450,
  };

  return (
    <div>
      {/* Product content here */}
      
      {/* Add chatbot with product context */}
      <ChatWidget
        productId={product.id}
        productName={product.name}
        currentPage="product-detail"
      />
    </div>
  );
}
```

**Result:** User asks "Is this good for a 10-year-old?" and bot knows exactly which product you're asking about.

---

## Category Page

Show context for the category being browsed:

```tsx
// frontend/src/app/categories/page.tsx

import { ChatWidget } from '@/components/chat-widget';

export default function CategoriesPage() {
  return (
    <div>
      {/* Categories grid here */}
      
      <ChatWidget
        currentPage="categories"
      />
    </div>
  );
}
```

**Result:** User asks "Show me gifts under ₹500" and bot knows they're browsing categories.

---

## Wellness Category Page

```tsx
// frontend/src/app/category/wellness/page.tsx

import { ChatWidget } from '@/components/chat-widget';

export default function WellnessPage() {
  return (
    <div>
      {/* Wellness products here */}
      
      <ChatWidget
        currentPage="category-wellness"
      />
    </div>
  );
}
```

---

## Checkout Page

Help users make final decisions:

```tsx
// frontend/src/app/checkout/page.tsx

import { ChatWidget } from '@/components/chat-widget';

export default function CheckoutPage() {
  return (
    <div>
      {/* Checkout form here */}
      
      <ChatWidget
        currentPage="checkout"
      />
    </div>
  );
}
```

**Result:** User can ask "Is this a good gift combo?" while checking out.

---

## Gift Finder Results Page

```tsx
// frontend/src/app/gift-finder/page.tsx

import { ChatWidget } from '@/components/chat-widget';

export default function GiftFinderPage() {
  return (
    <div>
      {/* Gift recommendations here */}
      
      <ChatWidget
        currentPage="gift-finder"
      />
    </div>
  );
}
```

---

## Multiple Products (Like Cart)

For pages with multiple products, show the page context:

```tsx
// frontend/src/app/cart/page.tsx

import { ChatWidget } from '@/components/chat-widget';

export default function CartPage() {
  return (
    <div>
      {/* Cart items here */}
      
      <ChatWidget
        currentPage="shopping-cart"
      />
    </div>
  );
}
```

---

## ChatWidget Props Reference

```typescript
interface ChatWidgetProps {
  productName?: string;        // Name of product being viewed
  productId?: string;          // ID of product being viewed
  currentPage?: string;        // Current page (home, product-detail, categories, etc.)
}
```

**Example values for `currentPage`:**
- `"home"` - Homepage
- `"product-detail"` - Single product page
- `"categories"` - All categories
- `"category-wellness"` - Specific category
- `"gift-finder"` - Gift finder results
- `"checkout"` - Checkout page
- `"deals"` - Special deals
- `"luxury"` - Luxury items
- `"group-gifts"` - Group gifting

---

## What Context Enables

With these props set, the chatbot can:

### 1. Product-Specific Questions
```
User: "Is this suitable for a teenage girl?"
Bot: "The Handcrafted Ceramic Mug is creative and minimalist—
perfect for a teen who loves handmade items!"
```

### 2. Category-Aware Recommendations
```
User: "Show me something similar"
Bot: "Since you're viewing Wellness items, check out 
our Meditation Cushion (₹1,500) or Aromatherapy Set (₹1,200)!"
```

### 3. Comparison with Current Product
```
User: "Is there anything better?"
Bot: "The Candle Set we show is similar but more aromatic.
The choice depends on the recipient's preferences!"
```

### 4. Smart Suggestions
```
Page Context: category-wellness
Bot: "Perfect time to ask—what's the occasion? I can help 
you pick the right wellness gift for that event!"
```

---

## How the Backend Uses Context

The backend receives context and uses it:

```typescript
// Backend receives:
{
  message: "Is this good for a gift?",
  context: {
    currentPage: "product-detail",
    productId: "507f1f77bcf86cd799439011",
    productName: "Handcrafted Ceramic Mug"
  }
}

// Bot can then:
1. Fetch product details for more context
2. Find similar products from same category
3. Give personalized recommendations
4. Make suggestions specific to the category
```

---

## Default Behavior

If you don't pass props, the chatbot still works:
- Available on all pages
- Gives general recommendations
- Answers common questions
- Provides FAQs

---

## Example: Full Product Page Implementation

```tsx
'use client';

import { useState, useEffect } from 'react';
import { ChatWidget } from '@/components/chat-widget';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  // ... other fields
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product from API
    fetch(`/api/products/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Product image */}
        <img src={product.image} alt={product.name} />
        
        {/* Product details */}
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-2xl text-purple-600 font-bold mt-4">
          ₹{product.price}
        </p>
        <p className="text-gray-700 mt-4">{product.description}</p>
        
        {/* Add to cart button */}
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg">
          Add to Cart
        </button>
      </div>

      {/* Chatbot with full context */}
      <ChatWidget
        productId={product._id}
        productName={product.name}
        currentPage="product-detail"
      />
    </main>
  );
}
```

---

## Tips & Tricks

### 1. Dynamic Current Page
```typescript
const pathname = usePathname();
const currentPage = pathname.split('/')[1] || 'home';

<ChatWidget currentPage={currentPage} />
```

### 2. Get Product from URL
```typescript
const { id } = params;
// Fetch product name from API or state
```

### 3. Multiple Context Types
```typescript
// If showing multiple products
<ChatWidget
  currentPage="category"
  // No productId/Name since multiple products
/>
```

### 4. Pass Through Params
```typescript
type PageProps = {
  params: {
    category: string;
    subcategory?: string;
  };
};

export default function CategoryPage({ params }: PageProps) {
  <ChatWidget currentPage={`category-${params.category}`} />
}
```

---

## Testing Context

### Test 1: Product Page
1. Go to `/product/123`
2. Open chat
3. Ask: "Is this suitable for me?"
4. Bot should reference the product

### Test 2: Category Page
1. Go to `/categories/wellness`
2. Open chat
3. Ask: "Recommend something similar"
4. Bot should suggest wellness items

### Test 3: Home Page
1. Go to `/`
2. Open chat
3. Ask: "Help me find a gift"
4. Bot should give general recommendations

---

## What's Next

- ✅ Add context to all major pages
- ✅ Test conversations on each page
- ✅ Customize responses per page type
- ✅ Monitor which pages have most chats
- ✅ Optimize FAQ based on popular pages

---

**Chatbot is now fully integrated! 🎉**

For questions, check `CHATBOT_GUIDE.md` or look at the source code in:
- `src/components/chat-widget.tsx`
- `src/lib/hooks/useChat.ts`
