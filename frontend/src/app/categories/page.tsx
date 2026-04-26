"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Birthday", slug: "birthday", emoji: "🎂", color: "from-blue-50 to-blue-100", desc: "Celebrate birthdays with special gifts" },
  { name: "Anniversary", slug: "anniversary", emoji: "💕", color: "from-red-50 to-red-100", desc: "Mark your love story with perfect gifts" },
  { name: "Mother's Day", slug: "mothers-day", emoji: "🌹", color: "from-pink-50 to-pink-100", desc: "Express your love for the special woman" },
  { name: "Same Day Delivery", slug: "same-day", emoji: "🚀", color: "from-green-50 to-green-100", desc: "Get gifts delivered on the same day" },
  { name: "Luxury Gifts", slug: "luxury", emoji: "✨", color: "from-yellow-50 to-yellow-100", desc: "Premium and exclusive gift collection" },
  { name: "Flowers", slug: "flowers", emoji: "🌸", color: "from-purple-50 to-purple-100", desc: "Fresh and beautiful flower arrangements" },
  { name: "Cakes", slug: "cakes", emoji: "🎉", color: "from-orange-50 to-orange-100", desc: "Delicious cakes for every celebration" },
  { name: "Personalized Gifts", slug: "personalized", emoji: "💌", color: "from-indigo-50 to-indigo-100", desc: "Make it special with personalized touch" },
  { name: "Wedding Gifts", slug: "wedding", emoji: "💒", color: "from-rose-50 to-rose-100", desc: "Perfect gifts for the special day" },
  { name: "Baby Gifts", slug: "baby", emoji: "👶", color: "from-cyan-50 to-cyan-100", desc: "Cute gifts for the new arrival" },
  { name: "Corporate Gifts", slug: "corporate", emoji: "🏢", color: "from-gray-50 to-gray-100", desc: "Impress your clients and employees" },
  { name: "Festival Gifts", slug: "festival", emoji: "🎊", color: "from-lime-50 to-lime-100", desc: "Celebrate all festivals with joy" },
];

export default function CategoriesPage() {
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
            <span className="text-gray-700 font-medium">Categories</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h1>
          <p className="text-xl text-gray-700">
            Find the perfect gift for every occasion and person
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className={`bg-gradient-to-br ${category.color} rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all cursor-pointer group`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-700 mb-4">{category.desc}</p>
                <div className="flex items-center text-rose-600 font-semibold group-hover:gap-2 transition-all">
                  Explore <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Why Shop by Category */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Shop by Category?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Curated Collections</h3>
              <p className="text-gray-600">Hand-picked items for each occasion</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
              <p className="text-gray-600">All products meet our quality standards</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping options</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">Best Prices</h3>
              <p className="text-gray-600">Great deals and regular discounts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
