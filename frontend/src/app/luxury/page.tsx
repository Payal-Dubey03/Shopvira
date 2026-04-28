"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { useState } from "react";

export default function LuxuryGiftsPage() {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (productName: string, price: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, price }),
      });

      if (!response.ok) throw new Error("Failed to add to cart");
      alert(`✅ ${productName} added to cart!`);
    } catch (error) {
      alert("❌ Error adding to cart. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-rose-600 hover:text-rose-700">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700 font-medium">Luxury Gifts</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ✨ Luxury Collection
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl">
            Premium and exclusive gifts for those who deserve the very best
          </p>
        </div>
      </div>

      {/* Filters & Products */}
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Filter by Price</h3>
                <div className="space-y-3">
                  {["₹5,000 - ₹10,000", "₹10,000 - ₹25,000", "₹25,000 - ₹50,000", "₹50,000+"].map(
                    (price) => (
                      <label key={price} className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 rounded" />
                        <span className="ml-2 text-gray-700">{price}</span>
                      </label>
                    )
                  )}
                </div>

                <h3 className="font-bold text-lg mt-6 mb-4">Category</h3>
                <div className="space-y-3">
                  {["Watches", "Jewelry", "Electronics", "Fashion", "Home Decor"].map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                      <span className="ml-2 text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Premium Watch", price: "₹15,999", emoji: "⌚" },
                  { name: "Luxury Perfume", price: "₹8,999", emoji: "💐" },
                  { name: "Designer Handbag", price: "₹22,999", emoji: "👜" },
                  { name: "Gold Jewelry Set", price: "₹35,999", emoji: "✨" },
                  { name: "Smart Speaker", price: "₹12,999", emoji: "🎵" },
                  { name: "Premium Pen Set", price: "₹5,999", emoji: "✒️" },
                ].map((product, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative">
                      <span className="text-5xl">{product.emoji}</span>
                      <div className="absolute top-3 right-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        LUXURY
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-rose-600">{product.price}</span>
                        <Button 
                          size="sm" 
                          className="bg-rose-500 hover:bg-rose-600"
                          onClick={() => handleAddToCart(product.name, product.price)}
                          disabled={loading}
                        >
                          {loading ? "Adding..." : "Add to Cart"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Luxury */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Luxury Collection?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🔐</div>
              <h3 className="font-bold text-lg mb-2">Authentic Guarantee</h3>
              <p className="text-gray-600">100% authentic products verified by experts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-bold text-lg mb-2">Premium Packaging</h3>
              <p className="text-gray-600">Beautifully wrapped and presented with care</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-lg mb-2">Express Delivery</h3>
              <p className="text-gray-600">Fast and secure delivery to your doorstep</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
