"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  color: string;
}

const categories: Category[] = [
  { id: "1", name: "Birthday", slug: "birthday", emoji: "🎂", color: "bg-blue-50" },
  { id: "2", name: "Anniversary", slug: "anniversary", emoji: "💕", color: "bg-red-50" },
  { id: "3", name: "Mother's Day", slug: "mothers-day", emoji: "🌹", color: "bg-pink-50" },
  { id: "4", name: "Same Day", slug: "same-day", emoji: "🚀", color: "bg-green-50" },
  { id: "5", name: "Luxury Gifts", slug: "luxury", emoji: "✨", color: "bg-yellow-50" },
  { id: "6", name: "Flowers", slug: "flowers", emoji: "🌸", color: "bg-purple-50" },
  { id: "7", name: "Cakes", slug: "cakes", emoji: "🎉", color: "bg-orange-50" },
  { id: "8", name: "Personalized", slug: "personalized", emoji: "💌", color: "bg-indigo-50" },
];

export function CategoryGrid() {
  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className={`${category.color} rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-all cursor-pointer border border-gray-200 hover:border-rose-300`}
            >
              <div className="text-4xl mb-2">{category.emoji}</div>
              <p className="font-medium text-gray-900 text-sm md:text-base">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
