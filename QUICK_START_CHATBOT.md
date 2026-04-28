# 🚀 Chatbot Quick Start - 5 Minutes

## What You Get

A **GiftLocal Shopping Assistant** chatbot available on every page:
- ✅ Helps with gift recommendations
- ✅ Answers product questions
- ✅ Provides occasion advice
- ✅ Compares options
- ✅ Context-aware (knows what page/product user is on)

---

## Quick Setup

### 1. Start Backend Server
```bash
cd backend
npm run dev
```
Should see: `Server running on http://localhost:5000`

### 2. Start Frontend Server
```bash
# In new terminal
cd frontend
npm run dev
```
Should see: `Ready in XXXms at http://localhost:3001` (or 3000)

### 3. Kill Old Process (if needed)
```bash
# If port 3000 already in use:
taskkill /PID 5512 /F
npm run dev
```

### 4. Test the Chatbot
Visit: `http://localhost:3000` and look for the **chat bubble** 💬 in the bottom-right corner.

---

## What You'll See

### Chat Bubble (Closed)
- Purple→pink gradient button
- Red notification badge
- Floats in bottom-right corner
- Click to open

### Chat Window (Open)
- Beautiful gradient header
- Message history
- Input field at bottom
- 3 quick starter suggestions

### User Conversation
```
You: "What should I gift for Diwali under ₹1000?"

Bot: "Ah, a festival gifter! 🎉 That's wonderful. 
Which person — parent, friend, colleague? 
And do they like traditional or modern gifts?"

Quick Suggestions:
→ Show me traditional Diwali gifts
→ I want something modern
→ Help me decide
```

---

## Key Features

| Feature | Details |
|---------|---------|
| **🎯 Intent Detection** | Recognizes recommendations, comparisons, pricing questions |
| **💰 Budget Parsing** | Extracts budget amounts (e.g., "under ₹1000") |
| **🎁 Product Aware** | Suggests related products from catalog |
| **🎨 Beautiful UI** | Matches Shopvira's design language |
| **📱 Responsive** | Works on mobile and desktop |
| **⚡ Fast** | Real-time responses with loading states |
| **🌍 Context Aware** | Knows current page and product |

---

## How to Test

### Test 1: Recommendation
```
Input: "What should I get for a friend's birthday?"
Expected: Asks for age group, personality, budget
```

### Test 2: Budget Query
```
Input: "Show me gifts under ₹500"
Expected: Acknowledges budget, asks for more context
```

### Test 3: Occasion Question
```
Input: "What's a good Diwali gift?"
Expected: Acknowledges festival, asks about recipient
```

### Test 4: Comparison
```
Input: "Is the candle set or tea set better?"
Expected: Offers to help compare, asks about recipient
```

### Test 5: Product Question
```
Input: "Is this suitable for a 10-year-old?"
Expected: Gives suitability advice
```

---

## Endpoints (For Reference)

### POST /api/chatbot/message
Send a chat message with optional context

**Request:**
```json
{
  "message": "What gifts are under ₹1000?",
  "context": {
    "currentPage": "home",
    "productId": "product123",
    "productName": "Handcrafted Mug"
  }
}
```

**Response:**
```json
{
  "reply": "Budget-conscious — I love that! 💰 We have amazing...",
  "suggestions": ["Show me creative gifts", "Festival ideas", "More options"],
  "relatedProducts": [
    {"productId": "p1", "name": "Ceramic Mug", "price": 450}
  ]
}
```

### GET /api/chatbot/quick
Quick response for common questions

**Example:**
```
GET /api/chatbot/quick?question=What+do+you+sell
```

---

## Common Questions Answered

- "What do you sell?" → Shows gift catalog description
- "How do I order?" → Explains checkout process
- "Free shipping?" → Shipping info
- "Return policy?" → Return details
- "Diwali gifts?" → Festival gifting tips

---

## How to Customize

### Add Your Own Responses
Edit `backend/src/modules/chatbot/chatbot.service.ts`:

```typescript
// Find generateResponse() method
recommendation: [
  `Great question! 🎁 For a gift recommendation...`,
  `Your custom response here! 💝`,  // ADD THIS
],
```

### Add New Keywords
In `classifyIntent()` method:

```typescript
if (lowerMsg.includes('recommend') || 
    lowerMsg.includes('your custom keyword')) {  // ADD THIS
  return 'recommendation';
}
```

### Customize Quick Starters
In ChatWidget (`frontend/src/components/chat-widget.tsx`):

```tsx
<button
  onClick={() => handleQuickSuggestion('Your custom question')}
  className="..."
>
  Custom Label
</button>
```

---

## File Locations

**Backend:**
- `backend/src/modules/chatbot/` ← All backend logic
- `backend/src/routes.ts` ← Route registration

**Frontend:**
- `frontend/src/components/chat-widget.tsx` ← Main component
- `frontend/src/lib/hooks/useChat.ts` ← API integration
- `frontend/src/lib/context/ChatContext.tsx` ← State management
- `frontend/src/app/layout.tsx` ← Provider setup

---

## Debugging Tips

1. **Check if chat appears**: Open DevTools → Console for errors
2. **API not responding**: Verify backend running on port 5000
3. **Slow responses**: Check network tab in DevTools
4. **Messages not sending**: Check CORS in backend app.ts
5. **Wrong responses**: Check intent classification in service.ts

---

## Next Steps

1. ✅ Test all conversation types
2. ✅ Customize responses to match your brand
3. ✅ Add more products to catalog
4. ✅ Monitor chat analytics
5. ✅ Gather user feedback for improvements

---

## Production Checklist

- [ ] Backend running without errors
- [ ] Chat appears on all pages
- [ ] Can send/receive messages
- [ ] Quick starters work
- [ ] Product suggestions appear
- [ ] Works on mobile
- [ ] No console errors
- [ ] Logging configured
- [ ] Database connected
- [ ] Ready to deploy! 🚀

---

**That's it! Your chatbot is live!** 💬🎁

Need help? Check `CHATBOT_GUIDE.md` for detailed documentation.
