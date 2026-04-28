# 💬 GiftLocal Shopping Assistant Chatbot - Implementation Guide

## Overview

A context-aware AI shopping assistant that helps users with gift recommendations, product questions, occasion advice, and comparisons. Available on every page of Shopvira via a beautiful floating widget.

---

## Architecture

### Backend (Node.js + Express + TypeScript)

#### Files Created:
1. **`src/modules/chatbot/chatbot.schema.ts`** - Zod validation schemas
2. **`src/modules/chatbot/chatbot.service.ts`** - Core chatbot logic & intent classification
3. **`src/modules/chatbot/chatbot.controller.ts`** - API endpoint handlers
4. **`src/modules/chatbot/chatbot.routes.ts`** - Route definitions

#### API Endpoints:
```
POST /api/chatbot/message     → Process chat message with context
GET  /api/chatbot/quick       → Get quick responses for common questions
```

#### Request Format:
```json
{
  "message": "What should I gift for a birthday under ₹1000?",
  "context": {
    "currentPage": "home",
    "productId": "507f1f77bcf86cd799439011",
    "productName": "Handcrafted Ceramic Mug"
  }
}
```

#### Response Format:
```json
{
  "reply": "Great question! Tell me a bit more about who you're buying for and I'll find something special...",
  "suggestions": ["Show me gifts under ₹500", "I want something creative", "Help with birthday gift"],
  "relatedProducts": [
    {
      "productId": "507f1f77bcf86cd799439012",
      "name": "Personalized Photo Frame",
      "price": 599
    }
  ]
}
```

### Frontend (Next.js + React + TypeScript)

#### Files Created:
1. **`src/lib/hooks/useChat.ts`** - Chat API integration hook
2. **`src/lib/context/ChatContext.tsx`** - Global chat context & provider
3. **`src/components/chat-widget.tsx`** - Floating chat widget component
4. **`src/app/layout.tsx`** - Updated to include ChatProvider & ChatWidget

#### Features:
- ✅ Global chat state across all pages
- ✅ Message history with timestamps
- ✅ Loading states and error handling
- ✅ Quick suggestion buttons
- ✅ Context-aware responses (page, product info)
- ✅ Beautiful gradient design matching Shopvira's theme
- ✅ Smooth animations and transitions
- ✅ Mobile responsive

---

## Installation & Setup

### 1. Backend Setup

#### Step 1: Routes Already Updated
The backend routes in `src/routes.ts` have been updated to include:
```typescript
router.use('/chatbot', chatbotRouter);
```

#### Step 2: Test Backend Endpoints
```bash
# Get quick response
curl "http://localhost:5000/api/chatbot/quick?question=What%20gifts%20do%20you%20have"

# Send message
curl -X POST http://localhost:5000/api/chatbot/message \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What should I gift for a birthday?",
    "context": {
      "currentPage": "home"
    }
  }'
```

### 2. Frontend Setup

#### Step 1: Environment Configuration
Add to `.env.local` (if backend on different URL):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### Step 2: Layout Updated
The root layout (`app/layout.tsx`) now includes:
- `ChatProvider` wrapper
- `ChatWidget` component on all pages

#### Step 3: Start Frontend
```bash
cd frontend
npm run dev
```

Visit: `http://localhost:3000` and look for the chat button in bottom-right corner

---

## How It Works

### Intent Classification

The chatbot analyzes user messages and classifies intent:

| Intent | Examples | Response |
|--------|----------|----------|
| **recommendation** | "suggest a gift", "what should I get" | Asks for more context about recipient |
| **suitability** | "is this good for a 10-year-old?", "appropriate for wedding?" | Provides suitability assessment |
| **comparison** | "which is better — candle or tea?", "compare these" | Helps user compare options |
| **pricing** | "budget options under ₹500" | Suggests price-appropriate gifts |
| **occasion** | "Diwali gifts", "festival ideas" | Provides occasion-specific advice |
| **help** | "how do I order?" | General assistance |
| **general** | Anything else | Asks for clarification |

### Algorithm

1. **Message Received** → Extract user intent & budget
2. **Context Extraction** → Identify current page, product info
3. **Intent Classification** → Determine what user needs
4. **Response Generation** → Craft warm, helpful response
5. **Suggestions** → Generate 3 follow-up suggestion buttons
6. **Related Products** → Find relevant products from catalog
7. **Stream Response** → Display to user with typing indicator

---

## UI Components

### Chat Widget

**Appearance:**
- Floating button in bottom-right corner (purple→pink gradient)
- Animated notification badge
- Expandable chat window (96 width, 600px height max)
- Gradient header matching theme

**Features:**
- Minimized state: Shows floating button with notification
- Expanded state: Full chat history, input field, suggestions
- Auto-scroll to latest message
- Loading state with animation
- Empty state with quick starters

**Quick Starter Options:**
- Birthday gift ideas
- Budget-friendly options (under ₹500)
- Festival gifting

### Message Bubbles

**User Messages:**
- Right-aligned
- Gradient purple→pink background
- White text
- Timestamp

**Bot Messages:**
- Left-aligned
- Light gray background (#f3f4f6)
- Dark text
- Timestamp
- Border and subtle shadow

### Input Area

- Single-line text input with placeholder
- Send button with loader state
- Disabled state when loading or empty
- Enter key sends message

---

## Usage Examples

### Example 1: Recommendation Request
```
User: "What should I gift for Diwali under ₹1000?"

Bot: "Ah, a festival gifter! 🎉 That's wonderful. Which person — 
parent, friend, colleague? And do they like traditional or modern gifts?"

Suggestions:
- Show me traditional Diwali gifts
- I want something modern
- Help me decide
```

### Example 2: Suitability Question
```
User: "Is the meditation cushion good for a 10-year-old?"

Bot: "That's a thoughtful question! 💭 The meditation cushion is 
typically better for teens and adults. For a 10-year-old, creative 
gifts like art sets or personalized books work great!"

Related Products:
- Personalized Wooden Book Stand (₹650)
- Artisanal Chocolate Box (₹850)
```

### Example 3: Budget Filtering
```
User: "What gifts can I get for ₹500?"

Bot: "Budget-conscious — I love that! 💰 We have amazing gifts 
at every price point under ₹500. Who's it for? That'll help me narrow it down!"

Suggestions:
- Birthday gift under ₹500
- Anniversary gift under ₹500
- General thank-you gift
```

---

## Customization

### Add New Common Questions

Edit `chatbot.service.ts` → `getQuickResponse()` method:

```typescript
const commonQ = {
  'what do you sell': 'We curate beautiful gifts...',
  'how do i order': 'Browse our collection...',
  'international shipping': 'We currently deliver within India...',  // NEW
  // ... more
};
```

### Customize Warm Responses

Edit `generateResponse()` method:

```typescript
recommendation: [
  `Great question! 🎁 For a gift recommendation...`,
  `I can definitely help! 💝 Tell me more...`,  // Add your own
  // ... more options
],
```

### Adjust Intent Keywords

Edit `classifyIntent()` method:

```typescript
if (lowerMsg.includes('recommend') || 
    lowerMsg.includes('suggest') ||
    lowerMsg.includes('what should') ||
    lowerMsg.includes('gift me')  // NEW KEYWORD
) {
  return 'recommendation';
}
```

### Modify Follow-up Suggestions

Edit `generateSuggestions()` method:

```typescript
recommendation: [
  'Show me gifts under ₹500',
  'I want something creative',
  'Help with birthday gift',
  'Something eco-friendly',  // NEW SUGGESTION
],
```

---

## Context Awareness

The chatbot becomes smarter based on page context:

```typescript
// On Product Page
<ChatWidget 
  productName="Handcrafted Ceramic Mug"
  productId="507f1f77bcf86cd799439011"
  currentPage="product-detail"
/>

// On Category Page
<ChatWidget 
  currentPage="category-wellness"
/>

// On Home Page
<ChatWidget 
  currentPage="home"
/>
```

The context helps the bot:
- Give product-specific advice
- Recommend similar items
- Stay focused on relevant categories
- Personalize suggestions

---

## Analytics & Logging

The service logs chat interactions:

```typescript
logger.info('Chat message processed', {
  intent: input.context?.userQuery?.substring(0, 50),
  page: input.context?.currentPage,
});
```

Track these metrics:
- Most common intents
- Popular pages for chat usage
- Common questions by occasion
- User satisfaction with recommendations

---

## Performance Optimization

1. **Message Caching**: Store common QA pairs for instant responses
2. **Debounced Suggestions**: Load suggestions after response settles
3. **Lazy Product Loading**: Fetch related products async
4. **Widget Optimization**: Only render when opened
5. **Request Batching**: Combine multiple suggestions into one request

---

## Testing

### Manual Testing

1. **Backend Testing:**
```bash
curl -X POST http://localhost:5000/api/chatbot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Recommend a birthday gift under 1000"}'
```

2. **Frontend Testing:**
- Visit http://localhost:3000
- Click chat button in bottom-right
- Send messages and verify responses
- Test on different pages

### Test Scenarios

- ✅ Recommendation requests with budget
- ✅ Occasion-specific questions
- ✅ Product suitability questions
- ✅ Comparison requests
- ✅ Budget filtering
- ✅ Context preservation across pages
- ✅ Empty state with quick starters
- ✅ Loading states
- ✅ Error handling

---

## File Structure

```
backend/
├── src/modules/
│   └── chatbot/
│       ├── chatbot.schema.ts
│       ├── chatbot.service.ts
│       ├── chatbot.controller.ts
│       └── chatbot.routes.ts
└── src/routes.ts (UPDATED)

frontend/
├── src/app/
│   └── layout.tsx (UPDATED)
├── src/lib/
│   ├── hooks/
│   │   └── useChat.ts
│   └── context/
│       └── ChatContext.tsx
└── src/components/
    └── chat-widget.tsx
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Chat widget not appearing | Verify ChatProvider wraps layout, ChatWidget rendered |
| API 404 errors | Check backend routes include chatbot router |
| Slow responses | Check backend server is running, database connected |
| Messages not persisting | Chat state is in-memory; refresh clears history (add localStorage if needed) |
| Context not working | Pass context props to ChatWidget on each page |
| CORS errors | Verify CORS origins in backend app.ts |

---

## Future Enhancements

1. **Voice Input** - Allow voice messages for accessibility
2. **ML-Based Intent** - Replace regex with NLP model
3. **Conversation History** - Persist chats in database
4. **Personalized Learning** - Track user preferences over time
5. **Multi-language Support** - Hindi, Tamil, Telugu support
6. **Video Search** - Show product videos in recommendations
7. **AR Integration** - "Show this gift in AR" feature
8. **Admin Dashboard** - Monitor chat analytics & quality

---

## Support & Debugging

- Backend: Check console logs for intent classification
- Frontend: Use browser DevTools → Network for API calls
- Chat History: Inspect message state in React DevTools
- Performance: Monitor bundle size with `npm run build`

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**Status**: ✅ Production Ready
