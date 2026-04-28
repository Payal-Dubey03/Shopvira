"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  gradient: string;
  textColor: string;
}

const categories: Category[] = [
  { id: "1", name: "Birthday", slug: "birthday", emoji: "🎂", gradient: "from-blue-500/10 to-cyan-500/10 dark:from-blue-900/40 dark:to-cyan-900/20", textColor: "text-blue-600 dark:text-blue-400" },
  { id: "2", name: "Anniversary", slug: "anniversary", emoji: "💕", gradient: "from-rose-500/10 to-red-500/10 dark:from-rose-900/40 dark:to-red-900/20", textColor: "text-rose-600 dark:text-rose-400" },
  { id: "3", name: "Mother's Day", slug: "mothers-day", emoji: "🌹", gradient: "from-pink-500/10 to-fuchsia-500/10 dark:from-pink-900/40 dark:to-fuchsia-900/20", textColor: "text-pink-600 dark:text-pink-400" },
  { id: "4", name: "Same Day", slug: "same-day", emoji: "🚀", gradient: "from-green-500/10 to-emerald-500/10 dark:from-green-900/40 dark:to-emerald-900/20", textColor: "text-green-600 dark:text-green-400" },
  { id: "5", name: "Luxury Gifts", slug: "luxury", emoji: "✨", gradient: "from-amber-500/10 to-yellow-500/10 dark:from-amber-900/40 dark:to-yellow-900/20", textColor: "text-amber-600 dark:text-amber-400" },
  { id: "6", name: "Flowers", slug: "flowers", emoji: "🌸", gradient: "from-purple-500/10 to-violet-500/10 dark:from-purple-900/40 dark:to-violet-900/20", textColor: "text-purple-600 dark:text-purple-400" },
  { id: "7", name: "Cakes", slug: "cakes", emoji: "🎉", gradient: "from-orange-500/10 to-red-400/10 dark:from-orange-900/40 dark:to-red-900/20", textColor: "text-orange-600 dark:text-orange-400" },
  { id: "8", name: "Personalized", slug: "personalized", emoji: "💌", gradient: "from-indigo-500/10 to-blue-500/10 dark:from-indigo-900/40 dark:to-blue-900/20", textColor: "text-indigo-600 dark:text-indigo-400" },
];

export function CategoryGrid() {
  return (
    <section className="w-full py-10 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            Shop by Category
          </h2>
          <Link
            href="/categories"
            className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 flex items-center gap-1 transition-colors"
          >
            All categories <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className={`group bg-gradient-to-br ${cat.gradient} rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center border border-white/70 dark:border-white/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
            >
              <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {cat.emoji}
              </div>
              <p className={`font-semibold text-[11px] md:text-xs leading-tight ${cat.textColor}`}>
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
