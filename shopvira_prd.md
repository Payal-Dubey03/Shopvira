# 🛍️ ShopVira — Product Requirements Document (PRD)

> **Next-Gen AI-Powered Gift E-Commerce SaaS Platform**

| Field | Details |
|---|---|
| **Product Name** | ShopVira |
| **Version** | 1.0.0 |
| **Date** | April 2026 |
| **Platform** | Web SaaS (Next.js) |
| **Status** | In Planning |
| **Target Market** | India |
| **Currency** | INR (₹) |
| **Tagline** | Gift Smarter |

---

## 📋 Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Scope & User Personas](#2-product-scope--user-personas)
3. [Website Pages — Detailed Specifications](#3-website-pages--detailed-specifications)
4. [Special Gift Pages](#4-special-gift-pages)
5. [Advanced AI Features](#5-advanced-ai-features)
6. [Admin Dashboard](#6-admin-dashboard)
7. [Technical Architecture & Stack](#7-technical-architecture--stack)
8. [Security & Compliance](#8-security--compliance)
9. [Development Roadmap & Milestones](#9-development-roadmap--milestones)
10. [Brand Identity & Design System](#10-brand-identity--design-system)

---

## 1. Executive Summary

ShopVira is a **next-generation AI-powered gift e-commerce SaaS platform** designed specifically for the Indian market. It combines smart AI recommendations, AR product previews, voice search, and a seamless Indian payment experience to revolutionize how people discover, personalize, and send gifts for every occasion.

### 1.1 Business Objectives

- Build a production-ready AI gift e-commerce platform for Indian consumers
- Enable personalized gifting experiences through advanced AI/ML recommendation engines
- Integrate Indian payment gateways (Razorpay / UPI) for seamless transactions
- Provide AR-powered product previews for enhanced shopping confidence
- Launch a scalable SaaS model supporting multiple gift shop merchants
- Achieve 10,000 active users within 6 months of launch

### 1.2 Key Differentiators

| Feature | Description | Priority |
|---|---|---|
| 🤖 AI Gift Finder | Questionnaire-based smart recommendation engine | High |
| 🔮 AR Product Preview | View gifts in real space via WebAR | High |
| 🎤 Voice Search | Natural language & voice-based gift search | Medium |
| 💳 Indian Payment Stack | UPI, Razorpay, Net Banking, Wallets | Critical |
| 🎂 Occasion Intelligence | Festival, birthday & anniversary smart alerts | High |
| 🎨 Custom Gift Builder | Photo upload, text, live preview | Medium |

### 1.3 Problem Statement

Gifting in India is a deeply cultural and frequent activity — birthdays, anniversaries, Diwali, Raksha Bandhan, weddings — yet existing e-commerce platforms offer generic, non-personalized shopping experiences. ShopVira solves this by making gifting:

- **Intelligent** — AI understands who you're buying for and why
- **Personal** — Customization options on most products
- **Fast** — Smart search and one-click reorder
- **Trustworthy** — Indian-first payment stack and reliable delivery

---

## 2. Product Scope & User Personas

### 2.1 In Scope

- Full e-commerce website with 15+ core pages
- AI-powered gift recommendation engine
- User authentication, dashboard, and order management
- Indian payment gateway integration (Razorpay + UPI)
- AR product preview via WebAR
- Admin dashboard for product, order, and analytics management
- Mobile-responsive design (Next.js + Tailwind CSS)
- AI shopping assistant chatbot
- Custom gift builder with live preview
- Voice search functionality
- Gift reminder system

### 2.2 Out of Scope (Phase 1)

- Native mobile apps (iOS / Android) — Phase 2
- International shipping and multi-currency support — Phase 3
- Vendor marketplace (multi-seller) — Phase 2
- Social media gifting integrations — Phase 3
- Affiliate/influencer marketing portal — Phase 3

### 2.3 User Personas

| Persona | Age | Role | Key Needs | Pain Points |
|---|---|---|---|---|
| **Priya** | 26 | Urban professional | Birthday/anniversary gifts, AI suggestions, quick checkout | Too many choices, no personalization |
| **Rahul** | 34 | Corporate manager | Bulk corporate gifts, invoice downloads, repeat orders | Time-consuming bulk ordering |
| **Sunita** | 52 | Home-maker | Festival gifts, easy navigation, vernacular search | Complex interfaces, payment confusion |
| **Arjun** | 19 | College student | Budget gifts under ₹500, trending items, UPI payments | Limited budget, uncertain gift choices |
| **Admin User** | — | Shop owner/manager | Product management, analytics, order tracking | Manual processes, no unified dashboard |

---

## 3. Website Pages — Detailed Specifications

---

### 3.1 🏠 Home Page

**Purpose:** First impression, AI-powered discovery, and conversion entry point.

**URL:** `/`

#### Core Features

- **Hero Banner** — Dynamic festival/occasion-based banners (Diwali, Holi, Raksha Bandhan, Valentine's Day) with CTA buttons
- **AI Gift Finder Widget** — "Who are you buying for?" interactive questionnaire with animated transitions
- **Trending Gifts Section** — Real-time trending products with AI-driven ranking
- **Personalized Recommendations** — ML-based suggestions from browsing/purchase history (logged-in users)
- **Category Navigation** — Birthday, Anniversary, Corporate, Wedding, Festival, Kids — with icons
- **Featured Collections** — Curated gift sets with editorial descriptions and "Shop Now" CTAs
- **Voice Search Button** — Microphone-triggered natural language search (top navigation)
- **AI Shopping Assistant Chat Button** — Floating chatbot launcher (bottom-right)
- **Newsletter Signup** — Email capture with festive offer incentive (10% off first order)
- **Trust Badges** — Secure payments, free delivery above ₹499, easy 7-day returns
- **Recently Viewed** — Personalized recently viewed items for returning users
- **Social Proof** — "10,000+ happy gifters" counter with live order ticker

#### UX Notes

- Page must load under 2 seconds (LCP target)
- Hero banner auto-rotates every 5 seconds with pause-on-hover
- AI Gift Finder widget is above the fold on mobile
- Floating chatbot button does not obscure checkout CTA

---

### 3.2 🎁 Shop / Product Listing Page

**Purpose:** Allow users to browse, filter, and discover gifts efficiently.

**URL:** `/shop`, `/shop/[category]`

#### Core Features

- **Category Filters** — Price range slider, Occasion multi-select, Recipient type, Star rating minimum, Brand
- **AI Smart Filters** — Natural language input: "Gifts under ₹500 for Mom", "Corporate gifts bulk"
- **Sorting Options** — Popular / New Arrivals / AI Recommended / Price Low-High / Price High-Low / Rating
- **Grid + List View Toggle** — Responsive product display modes with persistent preference
- **Quick Add to Cart** — One-click cart addition without leaving the page
- **Wishlist Button** — Heart icon with instant save to user wishlist (❤️)
- **Smart Tags** — "Trending 🔥", "Best Seller ⭐", "AI Pick 🤖", "Limited Stock ⚠️" badges
- **Infinite Scroll / Pagination** — Configurable in admin; default: 24 products per page
- **Product Count** — "Showing 24 of 156 products" display
- **Active Filter Chips** — Visual chips for active filters with individual remove buttons
- **Compare Feature** — Select up to 3 products to compare side-by-side (Phase 2)

#### URL Parameters

```
/shop?category=birthday&price_min=200&price_max=1500&sort=ai_recommended
```

---

### 3.3 🎀 Product Details Page

**Purpose:** Provide complete product information to drive purchase decisions.

**URL:** `/product/[slug]`

#### Core Features

- **Product Image Gallery** — Multiple images (up to 8), zoom on hover, swipe on mobile, 360° view
- **Product Video** — Demo/unboxing video embed (YouTube or Cloudinary hosted)
- **AR Product Preview** — "View in Your Space" button launching WebAR camera overlay
- **AI "Why This Gift?" Section** — AI-generated explanation of why this suits the occasion/recipient
- **Customization Options** — Name engraving, personal message (up to 150 chars), photo upload
- **Delivery Date Picker** — Calendar-based expected delivery selector with cutoff time display
- **Gift Wrapping Options** — Standard (Free), Premium (₹49), Personalized Box (₹99)
- **Similar Gift Recommendations** — AI-powered horizontal carousel of related products
- **Reviews & Ratings** — Star ratings, verified purchase badge, photo reviews, sort by helpful
- **Frequently Bought Together** — Bundle suggestion with combined pricing and one-click add
- **Stock Status** — "In Stock / Only 3 Left / Out of Stock" with restock notification option
- **Share Buttons** — WhatsApp, Instagram story, copy link
- **Breadcrumb Navigation** — Home > Category > Product name
- **Recently Viewed** — Horizontal scroll of user's recently viewed items

#### Schema & SEO

- Product structured data (JSON-LD) for Google Shopping
- Open Graph tags for social sharing
- Canonical URL per product

---

### 3.4 🤖 AI Gift Recommendation Page

**Purpose:** Guided gift discovery through AI-powered questionnaire flow.

**URL:** `/gift-finder`

#### Questionnaire Flow (5 Steps)

**Step 1 — Who is the recipient?**
Partner / Parent / Friend / Colleague / Child / Sibling / Other

**Step 2 — Recipient's Age Range**
0–10 / 11–17 / 18–25 / 26–40 / 40–60 / 60+

**Step 3 — What is the Occasion?**
Birthday / Anniversary / Wedding / Festival / Farewell / Promotion / Just Because / Other

**Step 4 — Your Budget**
Under ₹500 / ₹500–₹1,500 / ₹1,500–₹5,000 / ₹5,000–₹15,000 / ₹15,000+

**Step 5 — Recipient's Interests** *(Multi-select)*
Music 🎵 / Tech 💻 / Fashion 👗 / Books 📚 / Food 🍕 / Travel ✈️ / Fitness 🏋️ / Art 🎨 / Gaming 🎮 / Wellness 🧘

#### AI Output Display

- Top 5 Gift Suggestions with full product cards
- **Personalized Reason** — AI-written "Why this gift is perfect" for each suggestion (2–3 sentences)
- Price badge with original vs. discounted price
- "Add to Cart" directly from recommendation results
- "Regenerate Suggestions" button to refresh AI output
- "Save Results" — Email results to self or share link
- Confidence score displayed as "Match: 94%" per suggestion

---

### 3.5 🔍 Smart Search Page

**Purpose:** AI-powered natural language and voice search for gift discovery.

**URL:** `/search?q=[query]`

#### Search Features

- **AI Natural Language Search** — Processes queries like "Gift for girlfriend under ₹1000", "Corporate gifts for 50 employees"
- **Voice Search Integration** — Browser Web Speech API with real-time transcription display
- **Auto Suggestions** — Predictive dropdown with occasion tags, recipient tags, and product names
- **Search History** — Last 10 searches stored locally with one-click reuse
- **Zero Results Handler** — AI suggests related alternatives when no exact match found ("Did you mean...?")
- **Search Filters** — Apply price, occasion, rating, and availability filters on results in real-time
- **Popular Searches** — Top 8 trending search terms displayed below empty search bar
- **Search Analytics** — Every query logged for admin insights (anonymized)

#### Example Search Queries Supported

```
"Gift for girlfriend under ₹1000"
"Corporate gifts for 50 employees"
"Birthday gift for 5 year old boy"
"Anniversary gift under ₹2000"
"Eco-friendly gift for teacher"
"Same day delivery gifts in Mumbai"
```

---

### 3.6 🛒 Cart Page

**Purpose:** Review, modify, and prepare order before checkout.

**URL:** `/cart`

#### Cart Features

- **Gift Summary** — Product thumbnail, name, customization details, quantity stepper, unit price
- **Delivery Date Selection** — Per-item or unified delivery date picker with express delivery option
- **Gift Wrap Toggle** — Enable/disable premium wrapping per item with price display
- **Coupon Code Input** — Discount code with real-time validation and error messaging
- **AI Upsell Suggestions** — "Add a greeting card? ₹29" / "Complete the gift set — Add ribbon box?"
- **Shipping Cost Calculator** — Pincode-based delivery estimate (standard vs. express)
- **Order Total Breakdown** — Subtotal / Shipping / Gift Wrapping / Discount / GST (18%) / Grand Total
- **Save for Later** — Move item to wishlist from cart without losing it
- **Continue Shopping** — Return to browse without losing cart state
- **Estimated Delivery** — Show expected delivery date per item based on pincode
- **Empty Cart State** — Engaging empty state with AI Gift Finder CTA

#### Cart Persistence

- Cart saved to database for logged-in users (persists across devices)
- Cart saved to localStorage for guest users (persists 7 days)
- Merge guest cart with account cart on login
- Access/refresh tokens are NEVER stored in localStorage/sessionStorage (cart-only storage is permitted for guests)

---

### 3.7 💳 Checkout Page

**Purpose:** Secure and seamless payment and order placement.

**URL:** `/checkout`

#### Checkout Flow

**Step 1 — Delivery Details**
- Full name, phone number, address line 1 & 2, city, state, pincode
- Pincode auto-fill for city/state
- Select from saved addresses (logged-in users)
- Multiple delivery addresses for bulk orders

**Step 2 — Delivery Options**
- Standard Delivery (3–5 days) — Free above ₹499
- Express Delivery (1–2 days) — ₹99
- Same Day Delivery (select cities) — ₹149
- Scheduled Delivery — Pick specific date

**Step 3 — Gift Options**
- Gift message input (printed on card, up to 200 characters)
- Gift wrapping selection if not already selected
- Anonymous delivery toggle (hide sender name)

**Step 4 — Payment**
- UPI (GPay, PhonePe, Paytm, BHIM)
- Credit / Debit Card (Visa, Mastercard, RuPay)
- Net Banking (50+ Indian banks)
- Wallets (Paytm, Amazon Pay, Mobikwik)
- EMI options for orders above ₹3,000
- Razorpay secure payment gateway (PCI-DSS compliant)

**Step 5 — Order Confirmation**
- Order ID generated
- Confirmation email + SMS sent
- Redirect to order tracking page

#### Guest Checkout
- Order without mandatory account creation
- Option to create account post-order with one click
- Email-based order tracking for guests

---

### 3.8 📦 Order Tracking Page

**Purpose:** Real-time visibility into order status and delivery progress.

**URL:** `/orders/[order-id]`

#### Tracking Features

- **Live Order Status Timeline:**
  ```
  ✅ Order Placed → ✅ Payment Confirmed → 📦 Packed → 🚚 Shipped → 🏠 Out for Delivery → 🎉 Delivered
  ```
- **Delivery ETA** — Dynamic estimated arrival with real-time updates
- **Courier Tracking** — Third-party tracking integration (Shiprocket / Delhivery / Ekart)
- **Tracking ID** — Clickable AWB number linking to courier's tracking page
- **AI Support Chat** — "Where is my order?" chatbot embedded on page
- **Reorder Button** — One-click reorder of same items
- **Download Invoice** — PDF invoice with GST breakdown
- **Cancel Order** — Available before "Packed" status with reason selection
- **Return/Exchange Request** — Post-delivery within 7 days
- **Delivery Partner Details** — Delivery agent name and masked phone number
- **Map View** — Live delivery tracking map (Phase 2, Shiprocket integration)

---

### 3.9 👤 User Dashboard

**Purpose:** Centralized hub for user account, orders, and personalization.

**URL:** `/dashboard`

#### Dashboard Sections

| Section | Features |
|---|---|
| **My Orders** | Full order history, status, invoice download, reorder |
| **Wishlist** | Saved products, price-drop alerts, add to cart |
| **Saved Addresses** | Add/edit/delete multiple delivery addresses |
| **Gift Reminders** | Add birthdays/anniversaries, AI auto-suggestions 2 weeks before |
| **Personalized Feed** | AI recommendations based on history and preferences |
| **Subscription Gifts** | Set up recurring gift deliveries (monthly/quarterly) |
| **Profile Settings** | Name, phone, email, profile photo, password change |
| **Loyalty Points** | Points balance, earning history, redemption options |
| **Referral Program** | Unique referral link, ₹100 earned per successful referral |
| **Notifications** | Order updates, offer alerts, reminder notifications |

---

## 4. Special Gift Pages

---

### 4.1 🎂 Occasion Pages

Each occasion has a dedicated landing page with AI-curated collections, budget categories, and seasonal editorial content.

**URL pattern:** `/occasion/[occasion-name]`

| Occasion | Featured Products | Peak Season |
|---|---|---|
| 🎂 Birthday Gifts | Cakes, personalized items, experience gifts | Year-round |
| 💍 Anniversary Gifts | Couple gifts, jewelry, memory books | Year-round |
| 💒 Wedding Gifts | Registry integration, luxury sets, home decor | Oct–Dec, Apr–May |
| 💕 Valentine's Day | Romantic gifts, couples combos, personalized jewelry | Feb 1–14 |
| 🪔 Diwali Gifts | Dry fruit boxes, diyas, premium hampers | Oct–Nov |
| 🎀 Raksha Bandhan | Rakhi combos, sweets, sibling gifts | August |
| 🌈 Holi Gifts | Color kits, sweets, festive hampers | March |
| 🌙 Eid Gifts | Attar, dates, kurta sets, mithai | Variable |
| 🎓 Graduation Gifts | Journals, tech gadgets, luggage | May–June |
| 🏠 Housewarming | Home décor, plants, kitchen essentials | Year-round |

#### Each Occasion Page Includes

- AI Curated Gifts section (top 12 products)
- Budget Categories: Under ₹500 / ₹500–₹2,000 / ₹2,000–₹5,000 / Premium ₹5,000+
- Trending in This Occasion carousel
- Gift Guide blog post (SEO content)
- Countdown timer to occasion date (if applicable)

---

### 4.2 👨‍👩‍👧 Recipient Category Pages

**URL pattern:** `/gifts-for/[recipient]`

| Page | Featured Categories |
|---|---|
| 🧔 Gifts for Him | Gadgets, grooming kits, sports gear, wallets, watches |
| 👩 Gifts for Her | Jewelry, skincare, handbags, personalized gifts, plants |
| 🧒 Gifts for Kids | Toys, books, educational games, art kits, clothing |
| 👨‍👩‍👧 Gifts for Parents | Health products, photo frames, luxury hampers, experiences |
| 💼 Corporate Gifts | Branded merchandise, bulk ordering, B2B portal, invoices |
| 👫 Gifts for Friends | Trendy, experiences, funny/quirky, matching sets |
| 👩‍🏫 Gifts for Teachers | Books, stationery sets, desk items, appreciation gifts |

---

### 4.3 🎨 Custom Gift Builder Page

**Purpose:** Enable customers to create unique personalized gifts with live preview.

**URL:** `/custom-gifts`

#### Builder Features

- **Upload Photo** — Drag-and-drop or click to upload (JPEG/PNG, up to 10MB)
- **Add Text** — Font family selector (10+ fonts), color picker, size slider, bold/italic, positioning
- **Choose Base Product** — Mug, cushion, photo frame, T-shirt, calendar, canvas print, keychain, phone case
- **Live Preview** — Real-time 3D-style mockup rendering as user customizes
- **Download Mockup** — Save preview image as PNG before ordering
- **Add to Cart** — Direct order placement from builder
- **Template Gallery** — 50+ pre-designed templates for quick customization
- **Mobile-Optimized** — Touch-friendly drag-and-drop editor for mobile users
- **Undo/Redo** — Full edit history navigation

---

### 4.4 🎟️ Deals & Offers Page

**URL:** `/offers`

#### Features

- **Flash Sale** — Countdown timer with live stock counter
- **Festival Offers** — Season-specific discount collections
- **AI Discount Recommendations** — Personalized deals based on wishlist and browsing
- **Bundle Deals** — Pre-curated gift combos at discounted rates
- **Clearance Section** — End-of-season discounted items
- **Coupon Codes** — Available public codes with copy button
- **Loyalty Rewards** — Points-based exclusive member deals

---

## 5. Advanced AI Features

---

### 5.1 🤖 AI Gift Assistant Chatbot

An always-available conversational AI that guides users to the perfect gift.

#### Chatbot Capabilities

- **Natural Language Understanding** — "Help me find a gift for my dad's 60th birthday under ₹2000"
- **Budget-Based Suggestions** — Filter and suggest within stated budget constraints
- **Occasion Intelligence** — Recommend based on upcoming occasions from user calendar
- **Add to Cart from Chat** — Seamless cart addition without leaving the chat interface
- **Order Status Queries** — "Where is my order?" real-time status in chat
- **Product FAQs** — Auto-answer questions about delivery, returns, customization
- **Multi-turn Conversations** — Maintain context and preferences across a session
- **Human Handoff** — Escalate complex queries to live support agent with full context
- **Quick Reply Chips** — Pre-built response buttons for faster interaction

#### Chatbot Flow Example

```
User: "I need a gift for my wife's birthday"
Bot: "That's lovely! 🎉 How old is she turning, and what's your budget?"
User: "She's turning 30, budget ₹1500"
Bot: "Here are my top 3 picks for her 30th birthday... [shows products]"
User: "I'll take the first one"
Bot: "Added to cart! ✅ Want to add a personalized message?"
```

---

### 5.2 🧠 AI Recommendation Engine

| Algorithm Type | Logic | Applied On |
|---|---|---|
| Collaborative Filtering | Suggest based on similar user purchases | Homepage, Product Page |
| Content-Based Filtering | Match product attributes to user preferences | Search, Category Pages |
| Occasion Timing | Suggest gifts 2 weeks before saved occasions | Dashboard, Email |
| Trending Analysis | Surface regionally trending products | Home, Listing Page |
| Purchase History | Reorder suggestions and complementary items | Cart, Dashboard |
| Browsing Signals | Real-time personalization from session behavior | All Pages |
| Price Sensitivity | Calibrate to user's typical spend range | Homepage, Emails |

#### Tech Implementation

- **TensorFlow / Keras** — Model training on user-product interaction matrix
- **Matrix Factorization** — For collaborative filtering
- **FastAPI** — Recommendation service endpoint (`/api/v1/recommendations`)
- **Redis Cache** — Recommendations cached per user for 1 hour
- **A/B Testing** — 80/20 split between AI and rule-based recommendations during launch

---

### 5.3 🎤 Voice Search

- Browser Web Speech API integration for voice input
- NLP pipeline to extract: occasion, recipient, budget, product type, brand preference
- Real-time transcription display as user speaks
- Auto-search trigger 1.5 seconds after user stops speaking
- Manual "Search Now" button as fallback
- Fallback to text search if microphone permission denied
- Visual waveform animation during recording
- Hindi language support in Phase 2 (Devanagari + transliteration)

---

### 5.4 🔮 AR Product Preview (WebAR)

**Purpose:** Allow customers to visualize gifts in their real environment before purchasing.

#### Implementation

- **WebAR Library** — 8th Wall or A-Frame + AR.js
- **3D Model Format** — glTF / GLB files (compressed, under 5MB per model)
- **Supported Devices** — iOS 14+ (Safari), Android 8+ (Chrome)
- **Launch Trigger** — "View in Your Space 🔮" button on eligible product pages
- **Eligible Products** — Decorative items, cushions, frames, mugs, vases, furniture gifts
- **Lighting Adaptation** — Realistic shadow and lighting matching environment
- **Scale Controls** — Pinch to resize the AR object
- **Screenshot** — Capture AR view to share or save
- **Fallback** — 3D model viewer (non-AR) for unsupported browsers

---

### 5.5 📝 AI Product Description Generator

- Auto-generate SEO-optimized product descriptions from title + category + tags
- Occasion-specific description variants (Birthday version, Anniversary version, Corporate version)
- **Tone Selector** — Formal / Playful / Romantic / Corporate / Festive
- Admin can edit and approve AI-generated content before publishing
- Bulk generation for new product imports (CSV upload → auto descriptions)
- Keyword density optimization for Google Shopping
- Character limit controls per platform (website, Instagram, WhatsApp catalogue)

---

### 5.6 🎂 Gift Reminder System

**URL:** `/dashboard/reminders`

#### Features

- Add important dates: Birthday, Anniversary, Farewell, Festival
- Recipient name, relationship, and date input
- **AI Auto-Suggestions** — Receive gift recommendations 14 days before the occasion
- **Email Reminders** — 14 days, 7 days, and 3 days before occasion
- **WhatsApp Reminder** — Optional opt-in for WhatsApp notification
- **One-Click Reorder** — Reorder last year's gift or choose from fresh AI suggestions
- **Calendar View** — Visual calendar of all upcoming gifting occasions
- Sync with Google Calendar (Phase 2)

---

## 6. Admin Dashboard

**URL:** `/admin`
**Access:** Admin and Super Admin roles only

The Admin Dashboard is the central management hub for ShopVira operations, providing full control over inventory, orders, users, and platform analytics.

---

### 6.1 📦 Product Management

- Add / Edit / Delete products with bulk import via CSV upload
- Multi-image upload per product (drag-and-drop, up to 8 images, 5MB each)
- Category, subcategory, and tag management with hierarchy
- Inventory management with configurable low-stock alert thresholds
- AI description generator integration (one-click generate + edit)
- Product visibility control: Published / Draft / Archived / Scheduled
- Customization options configurator per product (text fields, image upload, color swatches)
- Product variants management (size, color, material) with individual pricing
- SEO fields: meta title, meta description, canonical URL, alt text per image
- Product performance tab: views, add-to-cart rate, conversion rate, revenue

---

### 6.2 🚚 Order Management

- Full order list with global search, multi-filter, and export (CSV / Excel / PDF)
- Order status update: manual and auto from courier webhook
- Print shipping label and GST invoice
- Refund processing: full / partial refund with reason logging
- Return and exchange management workflow
- Bulk status update for multiple orders simultaneously
- Customer communication: send email/SMS from order page
- Internal order notes (not visible to customer)
- Fraud detection flags (high-value + new account orders)
- Delivery partner assignment for local deliveries

---

### 6.3 👥 User Management

- View all registered users with registration date, order count, and lifetime value
- Block / Unblock accounts with reason logging
- View complete user profile, purchase history, and wishlist
- Manual loyalty point adjustments with reason field
- Export user data in CSV (GDPR/IT Act compliant)
- Segment users by: purchase value, city, acquisition source, last active date
- Send targeted email campaigns to user segments
- Admin impersonation for debugging (with full audit log)

---

### 6.4 📊 Analytics Dashboard

| Metric Category | Key Metrics | Location |
|---|---|---|
| Revenue Analytics | Daily/weekly/monthly revenue, MoM growth | Admin Home |
| Order Analytics | Total orders, avg order value, conversion rate | Admin Home |
| Product Performance | Top sellers, least viewed, high return rate products | Products Tab |
| User Analytics | New users, retention rate, avg session duration | Users Tab |
| AI Recommendation CTR | Click-through rate on AI suggestions per page | AI Tab |
| Search Analytics | Top searches, zero-result queries, search-to-purchase rate | Search Tab |
| Geographic Insights | Orders by city, state, and delivery zone | Geo Tab |
| Payment Analytics | UPI vs Card vs Wallet vs EMI breakdown | Finance Tab |
| Chatbot Analytics | Messages sent, resolution rate, handoff rate | AI Tab |
| Marketing Analytics | Coupon performance, referral conversions | Marketing Tab |

---

### 6.5 🎟️ Coupon & Offers Management

- Create flat amount / percentage / category-specific / product-specific coupons
- Set minimum order value, maximum discount cap, per-user usage limit, total usage limit, expiry date
- Festival auto-coupon generator with AI-suggested discount percentages based on category
- Coupon performance analytics: usage count, revenue generated, avg discount given
- Flash sale scheduler with automatic activation/deactivation at set times
- First-time user coupons automatically generated on registration
- Stackable vs. non-stackable coupon configuration
- Referral code generation and tracking

---

### 6.6 ⚙️ Platform Settings

- Site-wide announcement banner (text, color, link, start/end date)
- Delivery zone management (serviceable pincodes, delivery charges by zone)
- Tax configuration (GST rates by product category)
- Email template customization (order confirmation, shipping, reminders)
- Homepage banner management (upload, schedule, reorder)
- API key management for integrations (Razorpay, Shiprocket, Twilio)
- Maintenance mode toggle

---

## 7. Technical Architecture & Stack

---

### 7.1 Frontend

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Core framework, SSR, SSG, routing |
| **React 18** | UI component library |
| **Tailwind CSS** | Utility-first styling |
| **ShadCN UI** | Pre-built accessible component library |
| **Framer Motion** | Page transitions and micro-animations |
| **React Hook Form** | Form state management and validation |
| **Zustand** | Global state management (cart, user, wishlist) |
| **NextAuth.js** | Authentication (JWT + OAuth) |
| **React Query / TanStack** | Server state, caching, background refetch |
| **next/image** | Optimized image delivery |
| **next-intl** | Internationalization (Phase 2) |

#### Performance Targets

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **Lighthouse Score:** > 90 (Performance, Accessibility, SEO)

---

### 7.2 Backend

| Technology | Purpose |
|---|---|
| **Node.js + Express.js** | Primary REST API server |
| **FastAPI (Python)** | AI/ML microservices (recommendation, chatbot) |
| **JWT** | Stateless authentication |
| **Zod** | Runtime schema validation |
| **Multer** | File upload handling |
| **Bull Queue + Redis** | Background job processing (emails, reminders) |
| **Swagger / OpenAPI** | Auto-generated API documentation |

#### API Architecture

```
Base Host: https://api.shopvira.in
API Prefix: /api/v1

Auth:       /api/v1/auth/register, /api/v1/auth/login, /api/v1/auth/refresh, /api/v1/auth/logout
Products:   /api/v1/products, /api/v1/products/:id, /api/v1/products/search
Cart:       /api/v1/cart, /api/v1/cart/items, /api/v1/cart/coupon
Orders:     /api/v1/orders, /api/v1/orders/:id, /api/v1/orders/:id/track
Users:      /api/v1/users/profile, /api/v1/users/wishlist, /api/v1/users/reminders
AI:         /api/v1/ai/recommend, /api/v1/ai/chat, /api/v1/ai/gift-finder
Admin:      /api/v1/admin/products, /api/v1/admin/orders, /api/v1/admin/analytics
Payments:   /api/v1/payments/create-order, /api/v1/payments/verify, /api/v1/payments/refund
```

#### API Contract & Error Standard

All API endpoints MUST follow these response shapes (no raw objects, no mixed conventions):

**Success response (non-paginated):**

```json
{
  "success": true,
  "data": {}
}
```

**Success response (paginated lists):**

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "total": 0,
    "page": 1,
    "limit": 24,
    "totalPages": 0
  }
}
```

**Error response (standard):**

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "fields": {
      "fieldName": ["Validation message"]
    }
  }
}
```

**Error codes (MVP minimum):**

- `VALIDATION_ERROR` (400) — request body/query/params invalid
- `INVALID_REQUEST` (400) — logically invalid request (e.g., coupon expired)
- `UNAUTHORIZED` (401) — missing auth
- `TOKEN_EXPIRED` (401) — access token expired (client should refresh)
- `TOKEN_INVALID` (401) — token invalid/tampered
- `FORBIDDEN` (403) — wrong role / insufficient permission
- `NOT_FOUND` (404) — resource not found (or not owned by user)
- `CONFLICT` (409) — duplicate/unique constraint conflict
- `RATE_LIMIT_EXCEEDED` (429) — too many requests
- `INTERNAL_ERROR` (500) — unhandled server error (tracked in Sentry)

**Request conventions:**

- Auth: `Authorization: Bearer <accessToken>` for authenticated endpoints
- Content type: `Content-Type: application/json` (except file uploads)
- Identifiers: MongoDB ObjectId in `:id` path params

#### API Documentation & Postman Standard

- Every endpoint MUST be documented with: description, auth required + minimum role, request (headers/params/body), response examples, and error cases (400/401/403/404/409/429/500 as applicable).
- Maintain and commit:
  - Postman collection JSON (committed)
  - Postman environment template JSON (committed; **no real secrets**)
- API docs MUST reflect the **API Contract & Error Standard** above (no undocumented response shapes).

---

### 7.3 Database Architecture

| Database | Technology | Stores |
|---|---|---|
| Primary DB | MongoDB Atlas (M10 cluster) | Products, Orders, Users, Reviews, Categories |
| Cache Layer | Redis Cloud | Sessions, Cart, AI recommendations, OTP |
| Search Engine | Elasticsearch (or MongoDB Atlas Search) | Product search, smart filters |
| Media Storage | Cloudinary | Product images, custom gift uploads, AR models |
| Analytics DB | MongoDB (separate cluster) | Events, clickstreams, search logs |

#### Key MongoDB Collections

```javascript
// Collections
users          // Auth + profile + preferences
products       // Catalog + inventory + variants
orders         // Order data + status history
reviews        // Ratings + text + photos
categories     // Hierarchical category tree
coupons        // Discount rules + usage tracking
reminders      // Gift occasion reminders per user
chatSessions   // Chatbot conversation history
adminLogs      // All admin actions audit trail
```

---

### 7.4 Payment Integration

| Gateway | Use Case | Payment Methods |
|---|---|---|
| **Razorpay** | Primary Indian gateway | UPI, Cards, Net Banking, Wallets, EMI |
| **Razorpay UPI** | UPI-specific deep integration | GPay, PhonePe, Paytm UPI, BHIM |
| **Stripe** | International cards (Phase 2) | Visa, Mastercard, Amex |

#### Payment Flow

```
1. Frontend: Initiate order → POST /api/v1/payments/create-order
2. Backend: Create Razorpay order → return order_id + key
3. Frontend: Open Razorpay checkout modal
4. User: Complete payment (UPI / Card / etc.)
5. Razorpay: Send payment success to frontend
6. Frontend: POST /api/v1/payments/verify (razorpay_payment_id, signature)
7. Backend: Verify HMAC signature → confirm order
8. Razorpay Webhook: Backup verification via webhook
9. Backend: Update order status → send confirmation email/SMS
```

#### Refund Policy

- Automated refund processing via Razorpay Refunds API
- Refund to original payment method within 5–7 business days
- Partial refund support for split orders

---

### 7.5 AI / ML Stack

| Technology | Application | Details |
|---|---|---|
| **TensorFlow / Keras** | Recommendation Engine | Collaborative + content-based filtering |
| **OpenAI GPT-4 / Claude API** | Chatbot & Description Generation | Gift assistant, product copy, FAQ |
| **spaCy + NLTK** | NLP for Search | Intent extraction, entity recognition, tokenization |
| **8th Wall / AR.js** | WebAR Product Preview | 3D model overlay on camera feed |
| **TensorFlow.js** | Client-side AI inference | Real-time browser-based recommendations |
| **Scikit-learn** | Pricing optimization | Demand-based price suggestion model |
| **FastAPI** | AI service endpoints | Exposed via API gateway as `/api/v1/ai/*` (internal service routes may differ) |

---

### 7.6 Third-Party Integrations

| Service | Provider | Purpose |
|---|---|---|
| **Payment** | Razorpay | All Indian payment processing |
| **SMS / OTP** | MSG91 / Twilio | OTP login, order SMS notifications |
| **Email** | SendGrid / AWS SES | Transactional + marketing emails |
| **Shipping** | Shiprocket / Delhivery | Order fulfillment and tracking |
| **Search** | Algolia / Elasticsearch | Product search and faceted filtering |
| **Analytics** | Mixpanel + PostHog | User behavior and funnel analytics |
| **Error Monitoring** | Sentry | Frontend + backend error tracking |
| **CDN** | Cloudflare | Global CDN + DDoS protection |
| **Media** | Cloudinary | Image optimization, transformation, AR assets |
| **Maps** | Google Maps API | Delivery tracking, store locator (Phase 2) |

---

### 7.7 Infrastructure & DevOps

| Layer | Technology | Details |
|---|---|---|
| **Frontend Hosting** | Vercel | Auto-deploy on push, edge functions, preview URLs |
| **Backend Hosting** | Railway / Render | Node.js + FastAPI containers |
| **Database** | MongoDB Atlas | M10 cluster, auto-scaling, daily backups |
| **CI/CD** | GitHub Actions | Lint → Test → Build → Deploy pipeline |
| **Containerization** | Docker | Consistent dev/staging/prod environments |
| **Environment Management** | .env + Doppler | Secrets management, environment-specific configs |
| **SSL** | Let's Encrypt / Vercel | Auto-renewing HTTPS certificates |
| **Logging** | LogRocket + Winston | Frontend session replay + backend structured logs |
| **Uptime Monitoring** | UptimeRobot | 1-minute interval checks, SMS/email alerts |

#### Environments

```
Development:  localhost:3000 (frontend) / localhost:8000 (API)
Staging:      staging.shopvira.in
Production:   shopvira.in / api.shopvira.in
```

#### 7.7.1 Environment Variables & Secrets Policy

- **Never commit secrets**: `.env` and `.env.*` files MUST NOT be committed (only `.env.example` templates are allowed).
- **Templates required**: maintain and commit:
  - Backend: `.env.example`
  - Frontend: `.env.example` (only `NEXT_PUBLIC_*` / public-safe keys as needed)
- **Validation required**:
  - Backend validates required env vars at startup (Zod schema) and fails fast on misconfiguration.
  - Frontend validates required build/runtime env vars (Zod) so deployments fail early when misconfigured.
- **Production secret source of truth**: Doppler (or equivalent secrets manager) is the canonical store for prod/staging secrets; local `.env` is dev-only.
- **AI indexing hygiene (recommended)**: add `.cursorignore` mirroring secret patterns (`.env*`, keys, `node_modules/`, build output) to reduce accidental leakage into model context.

---

## 8. Security & Compliance

---

### 8.1 Authentication & Authorization

- JWT-based stateless authentication with 15-minute access tokens + 7-day refresh tokens
- Refresh token rotation — new refresh token issued on every use
- OAuth 2.0 social login — Google (Phase 1), Facebook, Apple (Phase 2)
- Role-Based Access Control (RBAC): `customer` / `admin` / `super_admin`
- OTP-based login via SMS (MSG91) — 6-digit, 10-minute validity
- Session timeout after 30 minutes of inactivity
- Account lockout after 5 consecutive failed login attempts (15-minute cooldown)
- Device tracking — notify user of new device login via email

#### 8.1.1 Token & Session Model (Implementation Standard)

To avoid security regressions and inconsistent client behavior, ShopVira MUST follow this token/session model:

- **Access token**
  - Lifetime: **15 minutes**
  - Transport: **`Authorization: Bearer <accessToken>` header only**
  - Storage (frontend): **memory only** (never `localStorage` / `sessionStorage`)

- **Refresh token**
  - Lifetime: **7 days**
  - Storage: **HttpOnly cookie** with `Secure` + `SameSite=Strict`
  - Not readable by JavaScript (prevents token exfiltration via XSS)

- **Refresh rotation**
  - Every successful `POST /api/v1/auth/refresh` issues a **new refresh token**
  - The previous refresh token is invalidated (rotation)
  - **Reuse detection**: if an old refresh token is presented again, revoke all active sessions for that user (breach signal)

- **Logout**
  - Clears refresh cookie
  - Revokes the server-side stored refresh token/session record for that device

- **Session timeout (30 minutes inactivity)**
  - Interpreted as an **application policy** (UI/idle-based re-auth requirement)
  - Token TTLs remain the source of truth for cryptographic expiry

- **NextAuth.js compatibility note**
  - NextAuth can be used for OAuth UI + callbacks, but the API’s auth MUST still conform to the above access/refresh model and response/error conventions.

---

### 8.2 Data Security

- Passwords hashed using **bcrypt** (salt rounds: 12)
- All API endpoints served over HTTPS / TLS 1.3
- Payment card data never stored on ShopVira servers — tokenized via Razorpay
- PCI-DSS compliance through Razorpay payment processing
- Input sanitization on all form fields (XSS prevention via DOMPurify)
- Parameterized queries / ODM (Mongoose) to prevent NoSQL injection
- CORS policy restricting API to whitelisted origins only
- Rate limiting: 100 requests/minute per IP on public API endpoints; 20 req/min on auth endpoints
- File upload validation: type whitelist (JPEG, PNG, PDF), size limit (10MB), virus scan
- Security headers: CSP, HSTS, X-Frame-Options, X-Content-Type-Options

#### 8.2.1 Backend Security Invariants (Implementation Checklist)

These are non-negotiable implementation rules for the Node.js (Express) API:

- **Security middleware baseline**
  - `helmet()` enabled (including HSTS in production; CSP tuned for Next.js assets)
  - `cors()` uses an explicit origin allowlist (no `*` with credentials)
  - `express-mongo-sanitize` (or equivalent) enabled to reduce NoSQL injection risk
  - `express-rate-limit` (or equivalent) enabled with stricter limits on auth endpoints
  - JSON body limit (default: `10kb`) to reduce payload abuse

- **Validation**
  - Zod validation on every route that accepts `body`, `query`, or `params`
  - All validation failures return `VALIDATION_ERROR` with `fields` in the standard error envelope

- **Authorization & anti-IDOR**
  - Every resource-by-id fetch/update/delete MUST enforce ownership checks (customer cannot access other users’ data)
  - Wrong-user access returns `NOT_FOUND` (404) rather than `FORBIDDEN` (do not confirm resource existence)

- **Observability & logging**
  - Sentry enabled for backend errors (scrub sensitive data before sending)
  - Logs MUST NOT include passwords, access/refresh tokens, OTPs, API keys, or raw sensitive PII

- **Health endpoints**
  - `GET /health` liveness endpoint (no auth; minimal dependencies)
  - Optional `GET /ready` readiness endpoint (returns 503 when DB/dependencies are unavailable)

---

### 8.3 Privacy & Legal Compliance

- Privacy Policy page (legally reviewed, plain language)
- Terms of Service page
- Cookie consent banner with granular opt-in/opt-out (analytics, marketing, essential)
- User data deletion: processed within 30 days of account deletion request
- GDPR-aligned data export — user can download all their data as JSON
- **IT Act 2000** compliance for Indian operations
- GST invoice generated for every order (mandatory for India)
- **Consumer Protection Act 2019** compliant return and refund policy
- Grievance Officer details published as required by Indian law

---

## 9. Development Roadmap & Milestones

---

### 9.1 Phase-by-Phase Roadmap

| Phase | Timeline | Key Deliverables |
|---|---|---|
| **Phase 1 — Foundation** | Weeks 1–4 | Brand setup, Next.js boilerplate, Auth system, DB schema, basic product pages, CI/CD pipeline |
| **Phase 2 — Core E-Commerce** | Weeks 5–8 | Product listing + detail pages, Cart, Checkout, Razorpay integration, Order tracking, User dashboard |
| **Phase 3 — AI Integration** | Weeks 9–12 | Recommendation engine (rule-based → ML), AI chatbot, Voice search, Smart search, Gift Finder |
| **Phase 4 — Advanced Features** | Weeks 13–16 | AR product preview, Custom gift builder, AI description generator, Admin dashboard v1 |
| **Phase 5 — Testing & Launch** | Weeks 17–18 | QA (manual + automated), Performance optimization, Security audit, Beta launch (100 users) |
| **Phase 6 — Growth & Scale** | Month 5–6 | Analytics refinement, Marketing integrations, User feedback iteration, Phase 2 planning |

---

### 9.2 MVP (Minimum Viable Product) — Week 8 Target

The MVP must include these non-negotiable features before any public launch:

- ✅ User Registration & Login (email/OTP)
- ✅ Product Listing with basic filters (category, price)
- ✅ Product Detail Page with images and add-to-cart
- ✅ Shopping Cart with coupon support
- ✅ Checkout with Razorpay (UPI + Cards)
- ✅ Order Confirmation + Email notification
- ✅ Order Tracking Page (status timeline)
- ✅ Basic AI Gift Recommendation (rule-based, questionnaire)
- ✅ Admin: Product Management (add/edit/delete)
- ✅ Admin: Order Management (view/update status)
- ✅ Mobile-responsive design across all pages
- ✅ SSL, basic security headers, input validation

---

### 9.3 Success Metrics

| Metric | Target | Measurement Tool |
|---|---|---|
| Monthly Active Users | 10,000 by Month 6 | Google Analytics + Mixpanel |
| Order Conversion Rate | > 3.5% | Funnel Analytics |
| Average Order Value | > ₹800 | Revenue Dashboard |
| AI Recommendation CTR | > 8% | Internal Analytics |
| Page Load Time (LCP) | < 2.5 seconds | Vercel Analytics + PageSpeed |
| Cart Abandonment Rate | < 60% | Funnel Analytics |
| Customer Retention Rate | > 25% repeat purchase in 90 days | CRM Analytics |
| Chatbot Resolution Rate | > 70% without human handoff | Chatbot Analytics |
| App Uptime | > 99.5% | UptimeRobot |
| NPS Score | > 50 | Post-order survey |

---

### 9.4 Testing Strategy

#### Types of Testing

- **Unit Testing** — Jest (frontend components), Pytest (FastAPI services)
- **Integration Testing** — API endpoint testing with Supertest
- **E2E Testing** — Playwright for critical user flows (checkout, payment, order tracking)
- **Performance Testing** — k6 load testing (simulate 1,000 concurrent users)
- **Security Testing** — OWASP Top 10 audit, penetration testing before launch
- **Accessibility Testing** — axe-core automated checks + manual screen reader testing
- **Payment Testing** — Razorpay test mode for all payment scenarios (success, failure, timeout)
- **Cross-browser Testing** — Chrome, Safari, Firefox, Samsung Internet (top Indian browsers)

---

## 10. Brand Identity & Design System

---

### 10.1 Brand Overview

ShopVira positions itself as a **premium yet approachable AI-powered gift platform**. The brand communicates joy, intelligence, and trust — making gifting effortless for every Indian occasion.

**Brand Values:** Thoughtful · Intelligent · Joyful · Trustworthy · Indian

**Brand Voice:** Warm and friendly in consumer communications. Professional and confident in corporate/B2B contexts.

---

### 10.2 Color Palette

| Color Name | Hex Code | Usage |
|---|---|---|
| **Primary Purple** | `#5B21B6` | Main brand color — trust, luxury, intelligence |
| **Gold Accent** | `#D97706` | Warmth, celebration, Indian festivity |
| **Success Green** | `#065F46` | Confirmed orders, positive actions |
| **Alert Red** | `#991B1B` | Errors, out-of-stock, urgent notices |
| **Neutral Dark** | `#1E1B4B` | Primary headings and body text |
| **Neutral Gray** | `#6B7280` | Secondary text, placeholders, borders |
| **Background** | `#FAFAF7` | Page background, card backgrounds |
| **Pure White** | `#FFFFFF` | Component surfaces, modal backgrounds |

---

### 10.3 Typography

| Use | Font | Weight | Size |
|---|---|---|---|
| H1 Page Titles | Poppins | Bold (700) | 36–48px |
| H2 Section Headings | Poppins | SemiBold (600) | 28–32px |
| H3 Subsection Headings | Inter | SemiBold (600) | 22–24px |
| Body Text | Inter | Regular (400) | 16px |
| Small / Caption | Inter | Regular (400) | 12–14px |
| Price Display | Poppins | Bold (700) | 20–24px |
| AI Taglines / Accents | Playfair Display | Italic | 18–22px |
| Admin / Data | JetBrains Mono | Regular | 14px |

---

### 10.4 Logo Guidelines

- **Primary Logo** — ShopVira wordmark + gift box icon (horizontal layout)
- **Stacked Logo** — Icon above wordmark (for square formats)
- **Icon Only** — Gift box icon for app icon, favicon, and social avatars
- **Minimum Digital Size** — 120px wide
- **Minimum Print Size** — 30mm wide
- **Clear Space** — Maintain 1× icon height as clear space on all sides
- **Approved Backgrounds** — White, #FAFAF7, #5B21B6 (purple), #0D0D0D (dark)
- **Never** — Stretch, rotate, change colors, apply drop shadows, place on busy backgrounds

#### Logo Variations

| Variation | Background | Text Color | Use Case |
|---|---|---|---|
| Light Theme | White / Ivory | Purple `#5B21B6` | Website header, business cards |
| Dark Theme | Black / Navy | White + Gold | App icon, dark-mode UI |
| Festive | Saffron / Maroon | Gold + Cream | Diwali/festival campaigns |
| AI Tech | Dark Teal | Cyan + White | Pitch decks, investor materials |
| Monochrome | White | Black | Print, emboss, stamp |

---

### 10.5 UI Component Guidelines

#### Buttons

```css
Primary CTA:    bg-purple-700  text-white   px-6 py-3 rounded-lg font-semibold
Secondary:      border-purple-700 text-purple-700  bg-transparent
Destructive:    bg-red-700 text-white
Disabled:       bg-gray-300 text-gray-500 cursor-not-allowed
```

#### Cards

- Border radius: `rounded-xl` (12px)
- Shadow: `shadow-md hover:shadow-xl transition-shadow`
- Border: `border border-gray-100`
- Padding: `p-4` (product cards) / `p-6` (feature cards)

#### Spacing Scale (Tailwind)

- `4` (16px) — Component internal padding
- `6` (24px) — Between related elements
- `8` (32px) — Between sections within a page
- `16` (64px) — Between major page sections
- `24` (96px) — Full page section separation

#### Iconography

- Library: **Lucide React** (consistent, clean line icons)
- Size: 20px (inline), 24px (buttons), 32px (feature highlights), 48px (empty states)
- Color: Match text color context; never use multiple icon colors on one component

---

## Appendix

### A. Glossary

| Term | Definition |
|---|---|
| **PRD** | Product Requirements Document |
| **MVP** | Minimum Viable Product |
| **SSR** | Server-Side Rendering (Next.js) |
| **SSG** | Static Site Generation (Next.js) |
| **UPI** | Unified Payments Interface (Indian payment system) |
| **AR** | Augmented Reality |
| **NLP** | Natural Language Processing |
| **CTR** | Click-Through Rate |
| **LCP** | Largest Contentful Paint (Core Web Vitals) |
| **RBAC** | Role-Based Access Control |
| **GST** | Goods and Services Tax (India) |
| **AWB** | Air Waybill (courier tracking number) |

### B. Document Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0.0 | April 2026 | ShopVira Team | Initial PRD creation |

---

*© 2026 ShopVira. All rights reserved. This document is confidential and proprietary.*

*ShopVira PRD v1.0 — Gift Smarter 🛍️*
