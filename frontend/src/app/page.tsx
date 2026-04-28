"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { PromoBar } from "@/components/promo-bar";
import { FeaturedCampaigns } from "@/components/featured-campaigns";
import { CategoryGrid } from "@/components/category-grid";
import { Sparkles, ArrowRight, Star, Heart, ShoppingBag, Zap, Users, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const trendingProducts = [
  { id: 1, name: "Luxury Gift Hamper", desc: "Premium curated for loved ones", price: 1499, originalPrice: 1999, rating: 4.8, reviews: 342, badge: "🔥 Hot", emoji: "🧺" },
  { id: 2, name: "Custom Photo Frame", desc: "Personalized memories in wood", price: 699, originalPrice: 999, rating: 4.9, reviews: 218, badge: "💝 Bestseller", emoji: "🖼️" },
  { id: 3, name: "Artisan Flower Box", desc: "Fresh blooms, handcrafted daily", price: 849, originalPrice: 1199, rating: 4.7, reviews: 156, badge: "🌸 Fresh", emoji: "💐" },
  { id: 4, name: "Premium Cake Box", desc: "Baked fresh, delivered same day", price: 599, originalPrice: 799, rating: 4.8, reviews: 289, badge: "⚡ Same Day", emoji: "🎂" },
];

const features = [
  { icon: <Zap className="h-6 w-6" />, title: "Same Day Delivery", desc: "Order before 2PM for guaranteed same-day delivery across 10+ cities.", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/40" },
  { icon: <Users className="h-6 w-6" />, title: "Group Gifting", desc: "Pool money from friends & family to send one amazing gift together.", color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-950/40" },
  { icon: <MessageCircle className="h-6 w-6" />, title: "WhatsApp Commerce", desc: "Browse, order and track your gifts entirely through WhatsApp.", color: "text-green-500", bg: "bg-green-50 dark:bg-green-950/40" },
];

export default function Home() {
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const handleAddToCart = async (id: number, name: string) => {
    setLoadingId(id);
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id, name }),
      });
      if (response.ok) {
        alert(`✅ ${name} added to cart!`);
      } else {
        throw new Error("Failed to add");
      }
    } catch {
      alert("❌ Error adding to cart. Please try again.");
    }
    setLoadingId(null);
  };

  const toggleWishlist = (id: number) =>
    setWishlist((w) => (w.includes(id) ? w.filter((i) => i !== id) : [...w, id]));

  return (
    <div className="w-full bg-white dark:bg-gray-950 min-h-screen">
      {/* Promo Bar */}
      <PromoBar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950 py-16 md:py-24">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-300/20 dark:bg-violet-800/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-300/20 dark:bg-fuchsia-800/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-pink-300/10 dark:bg-pink-800/10 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5 border border-violet-200 dark:border-violet-700">
                <Sparkles className="h-3 w-3" />
                AI-Powered Gift Finder
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5">
                Gift Perfectly,{" "}
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Every Time
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Discover handpicked gifts from 10,000+ local Indian artisans. Same-day delivery, group gifting, and AI recommendations — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/gift-finder"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0 shadow-lg shadow-violet-200 dark:shadow-violet-900/50 gap-2 font-semibold"
                  )}
                >
                  <Sparkles className="h-4 w-4" />
                  Find Perfect Gift
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/deals"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 gap-2"
                  )}
                >
                  <ShoppingBag className="h-4 w-4" />
                  Browse Gifts
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-6 mt-8 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">10K+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Local Sellers</p>
                </div>
                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700" />
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">50K+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Happy Customers</p>
                </div>
                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700" />
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">4.9★</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">App Rating</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex-shrink-0 w-full max-w-sm">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 border border-gray-100 dark:border-gray-800">
                  <div className="text-center mb-4">
                    <div className="text-7xl mb-3">🎁</div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Can't decide?</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Let our AI find the perfect gift in 2 minutes</p>
                  </div>
                  <div className="space-y-2">
                    {["🎯 Personalized for your budget", "🏪 From local Indian sellers", "💝 Guaranteed to impress"].map(t => (
                      <div key={t} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-xl px-3 py-2">
                        {t}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/gift-finder"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full mt-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0"
                    )}
                  >
                    Start AI Quiz →
                  </Link>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  FREE ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <FeaturedCampaigns />

      {/* Category Grid */}
      <CategoryGrid />

      {/* ── TRENDING NOW ── */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Trending Now 🔥</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Most-loved gifts this week</p>
            </div>
            <Link
              href="/deals"
              className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 flex items-center gap-1 transition-colors"
            >
              See all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {trendingProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative h-44 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/40 dark:to-fuchsia-950/40 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.emoji}
                  </span>
                  {/* Badge */}
                  <div className="absolute top-2 left-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded-full text-gray-700 dark:text-gray-300 shadow-sm">
                    {product.badge}
                  </div>
                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-sm"
                  >
                    <Heart
                      className={`h-3.5 w-3.5 transition-colors ${
                        wishlist.includes(product.id)
                          ? "fill-rose-500 text-rose-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-0.5 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-1">
                    {product.desc}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                      <span className="text-xs text-gray-400 line-through ml-1.5">₹{product.originalPrice}</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product.id, product.name)}
                      disabled={loadingId === product.id}
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0 text-xs px-3"
                    >
                      {loadingId === product.id ? "..." : "Add"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI GIFT FINDER BANNER ── */}
      <section className="w-full py-5 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 p-8 md:p-12">
            {/* Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="text-4xl mb-3">✨</div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                  Can't decide on a gift?
                </h2>
                <p className="text-white/80 text-lg max-w-md">
                  Answer 5 quick questions and our AI picks 3 perfect gifts from local Indian businesses — in your budget.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col gap-3 items-center md:items-end">
                <Link
                  href="/gift-finder"
                  className="inline-flex items-center gap-2 bg-white text-violet-700 hover:bg-gray-100 font-bold px-8 py-3.5 rounded-2xl text-base transition-all shadow-xl"
                >
                  <Sparkles className="h-5 w-5" />
                  Start AI Gift Quiz
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <p className="text-white/60 text-xs">Free · Takes 2 minutes · No signup needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="w-full py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center tracking-tight">
            Why ShopVira?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className={`${f.bg} rounded-2xl p-7 border border-white/60 dark:border-white/5 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`${f.color} mb-4`}>{f.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
