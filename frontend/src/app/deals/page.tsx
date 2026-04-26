"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Flame, Gift, TrendingUp, Heart, Star, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DealsPage() {
  const [cart, setCart] = useState<string[]>([]);
  const router = useRouter();

  const handleAddToCart = (productId: string, productName: string) => {
    setCart([...cart, productId]);
    alert(`✅ ${productName} added to cart!`);
  };

  const handleOrderNow = () => {
    if (cart.length === 0) {
      alert("Please add items to your cart first!");
      return;
    }
    router.push("/checkout");
  };

  const deals = [
    {
      id: 1,
      title: "Flash Sale",
      discount: "50%",
      description: "Limited time offer",
      icon: Flame,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      id: 2,
      title: "Super Saver",
      discount: "30%",
      description: "On select gifts",
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      id: 3,
      title: "Exclusive Deals",
      discount: "40%",
      description: "Member only",
      icon: Gift,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  const products = [
    {
      id: "p1",
      name: "Premium Gift Hamper",
      originalPrice: 2999,
      salePrice: 1499,
      discount: 50,
      rating: 4.8,
      reviews: 245,
      emoji: "🎁",
      badge: "HOT DEAL",
    },
    {
      id: "p2",
      name: "Luxury Flower Bouquet",
      originalPrice: 1999,
      salePrice: 999,
      discount: 50,
      rating: 4.9,
      reviews: 312,
      emoji: "🌹",
      badge: "FLASH SALE",
    },
    {
      id: "p3",
      name: "Chocolate Gift Set",
      originalPrice: 1499,
      salePrice: 899,
      discount: 40,
      rating: 4.7,
      reviews: 189,
      emoji: "🍫",
      badge: "30% OFF",
    },
    {
      id: "p4",
      name: "Personalized Photo Frame",
      originalPrice: 1299,
      salePrice: 649,
      discount: 50,
      rating: 4.6,
      reviews: 156,
      emoji: "📷",
      badge: "EXCLUSIVE",
    },
    {
      id: "p5",
      name: "Premium Cake & Flowers",
      originalPrice: 2499,
      salePrice: 1249,
      discount: 50,
      rating: 4.9,
      reviews: 412,
      emoji: "🎂",
      badge: "BESTSELLER",
    },
    {
      id: "p6",
      name: "Luxury Perfume Set",
      originalPrice: 3499,
      salePrice: 1749,
      discount: 50,
      rating: 5,
      reviews: 324,
      emoji: "💐",
      badge: "VIP DEAL",
    },
    {
      id: "p7",
      name: "Gift Combo Pack",
      originalPrice: 1799,
      salePrice: 899,
      discount: 50,
      rating: 4.5,
      reviews: 278,
      emoji: "🎀",
      badge: "LIMITED",
    },
    {
      id: "p8",
      name: "Premium Jewelry Box",
      originalPrice: 2199,
      salePrice: 1099,
      discount: 50,
      rating: 4.8,
      reviews: 201,
      emoji: "💎",
      badge: "TRENDING",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Flame className="h-8 w-8 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Amazing Deals & Discounts
            </h1>
          </div>
          <p className="text-white text-xl mb-6">Save up to 50% on your favorite gifts!</p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-3 h-auto">
              Shop Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-3 h-auto">
              View All Deals
            </Button>
          </div>
        </div>
      </div>

      {/* Deal Types */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Today's Best Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {deals.map((deal) => {
            const IconComponent = deal.icon;
            return (
              <div
                key={deal.id}
                className={`${deal.bgColor} border-2 ${deal.borderColor} rounded-lg p-8 text-center hover:shadow-lg transition-shadow`}
              >
                <div className={`inline-block p-3 bg-gradient-to-br ${deal.color} rounded-full mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{deal.discount}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-2">{deal.title}</p>
                <p className="text-gray-600">{deal.description}</p>
              </div>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Selling Gifts</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Badge */}
                <div className="relative h-40 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <span className="text-5xl">{product.emoji}</span>
                  <div className="absolute top-3 right-3 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.badge}
                  </div>
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    -{product.discount}%
                  </div>
                </div>

                <div className="p-4">
                  {/* Name */}
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-rose-600">₹{product.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-rose-500 hover:bg-rose-600 text-white"
                      onClick={() => handleAddToCart(product.id, product.name)}
                    >
                      Add Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-rose-300 text-rose-600 hover:bg-rose-50"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-8 text-white">
            <Zap className="h-8 w-8 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Lightning Deals</h3>
            <p className="mb-4 opacity-90">New deals every 6 hours. Don't miss out!</p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Explore Now
            </Button>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
            <TrendingUp className="h-8 w-8 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Trending Gifts</h3>
            <p className="mb-4 opacity-90">Check what others are buying today</p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              View Trending
            </Button>
          </div>
        </div>

        {/* Checkout Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Checkout?</h3>
              <p className="text-gray-600">
                {cart.length > 0
                  ? `You have ${cart.length} item(s) in your cart`
                  : "Add items to your cart to proceed"}
              </p>
            </div>
            <Button
              onClick={handleOrderNow}
              className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-4 h-auto"
              disabled={cart.length === 0}
            >
              Order Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h4 className="font-bold text-lg mb-2">Free Delivery</h4>
            <p className="text-gray-600">On orders above ₹500</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">💯</div>
            <h4 className="font-bold text-lg mb-2">100% Authentic</h4>
            <p className="text-gray-600">All products verified</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🔄</div>
            <h4 className="font-bold text-lg mb-2">Easy Returns</h4>
            <p className="text-gray-600">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
