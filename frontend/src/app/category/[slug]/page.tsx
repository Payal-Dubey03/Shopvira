"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart } from "lucide-react";
import { useParams } from "next/navigation";

const categoryData: Record<string, any> = {
  birthday: {
    title: "Birthday Gifts",
    emoji: "🎂",
    description: "Celebrate with joy and make the day special",
    color: "from-blue-50 to-blue-100",
  },
  anniversary: {
    title: "Anniversary Gifts",
    emoji: "💕",
    description: "Express your love with thoughtful gifts",
    color: "from-red-50 to-red-100",
  },
  "mothers-day": {
    title: "Mother's Day Gifts",
    emoji: "🌹",
    description: "Show appreciation for the amazing women in your life",
    color: "from-pink-50 to-pink-100",
  },
  flowers: {
    title: "Flowers",
    emoji: "🌸",
    description: "Fresh and beautiful flower arrangements",
    color: "from-purple-50 to-purple-100",
  },
  cakes: {
    title: "Cakes",
    emoji: "🎉",
    description: "Delicious cakes for every celebration",
    color: "from-orange-50 to-orange-100",
  },
  personalized: {
    title: "Personalized Gifts",
    emoji: "💌",
    description: "Make it special with personalized touch",
    color: "from-indigo-50 to-indigo-100",
  },
  wedding: {
    title: "Wedding Gifts",
    emoji: "💒",
    description: "Perfect gifts for the special day",
    color: "from-rose-50 to-rose-100",
  },
  baby: {
    title: "Baby Gifts",
    emoji: "👶",
    description: "Cute gifts for the new arrival",
    color: "from-cyan-50 to-cyan-100",
  },
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categoryData[slug] || {
    title: "Products",
    emoji: "🎁",
    description: "Browse our collection",
    color: "from-rose-50 to-pink-50",
  };

  const products = [
    { name: "Premium Gift Set", price: "₹999", rating: 4.5 },
    { name: "Luxury Hamper", price: "₹1,499", rating: 5 },
    { name: "Special Bundle", price: "₹2,999", rating: 4.8 },
    { name: "Exclusive Collection", price: "₹3,499", rating: 4.9 },
    { name: "Classic Choice", price: "₹799", rating: 4.3 },
    { name: "Best Seller", price: "₹1,999", rating: 5 },
    { name: "Popular Pick", price: "₹1,299", rating: 4.6 },
    { name: "Premium Pack", price: "₹2,499", rating: 4.7 },
  ];

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
            <Link href="/categories" className="text-rose-600 hover:text-rose-700">
              Categories
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700 font-medium">{category.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${category.color} py-12`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{category.emoji}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {category.title}
              </h1>
              <p className="text-xl text-gray-700 mt-2">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Products */}
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Filter by Price</h3>
                <div className="space-y-3">
                  {["Below ₹500", "₹500 - ₹1,000", "₹1,000 - ₹2,000", "Above ₹2,000"].map((price) => (
                    <label key={price} className="flex items-center">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                      <span className="ml-2 text-gray-700">{price}</span>
                    </label>
                  ))}
                </div>

                <h3 className="font-bold text-lg mt-6 mb-4">Rating</h3>
                <div className="space-y-3">
                  {["5 Stars", "4 Stars & Above", "3 Stars & Above"].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                      <span className="ml-2 text-gray-700">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Showing {products.length} products</p>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400">
                  <option>Sort by Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Best Rating</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center relative">
                      <span className="text-5xl">{category.emoji}</span>
                      <button className="absolute top-3 right-3 p-2 bg-white rounded-full hover:bg-rose-50 transition-colors">
                        <Heart className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            {i < Math.floor(product.rating) ? "★" : "☆"}
                          </span>
                        ))}
                        <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-rose-600">{product.price}</span>
                        <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
