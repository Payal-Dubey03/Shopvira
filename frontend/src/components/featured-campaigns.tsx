"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Campaign {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  gradient: string;
  accent: string;
  href: string;
}

const campaigns: Campaign[] = [
  {
    id: "mothers-day",
    tag: "Mother's Day",
    title: "Gifts to say",
    subtitle: '"Thanks, Mom!"',
    description: "Make her day magical with sweet surprises she'll treasure forever.",
    emoji: "🌹",
    gradient: "from-pink-500/10 via-rose-400/5 to-pink-300/10 dark:from-pink-900/30 dark:via-rose-800/20 dark:to-pink-900/10",
    accent: "text-pink-600 dark:text-pink-400",
    href: "/category/mothers-day",
  },
  {
    id: "anniversaries",
    tag: "Anniversaries",
    title: "Love Made",
    subtitle: "Unforgettable",
    description: "Timeless gifts for a timeless love story. Celebrate every chapter.",
    emoji: "💍",
    gradient: "from-violet-500/10 via-purple-400/5 to-fuchsia-300/10 dark:from-violet-900/30 dark:via-purple-800/20 dark:to-fuchsia-900/10",
    accent: "text-violet-600 dark:text-violet-400",
    href: "/category/anniversary",
  },
  {
    id: "wedding",
    tag: "Wedding",
    title: "Begin Your",
    subtitle: "Forever Together",
    description: "Curated gifts for happily-ever-afters. Start their journey beautifully.",
    emoji: "✨",
    gradient: "from-amber-400/10 via-orange-300/5 to-yellow-300/10 dark:from-amber-900/30 dark:via-orange-800/20 dark:to-yellow-900/10",
    accent: "text-amber-600 dark:text-amber-400",
    href: "/category/wedding",
  },
];

export function FeaturedCampaigns() {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            Occasions to Celebrate
          </h2>
          <Link
            href="/categories"
            className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 flex items-center gap-1 transition-colors"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {campaigns.map((campaign) => (
            <Link
              key={campaign.id}
              href={campaign.href}
              className={`group relative bg-gradient-to-br ${campaign.gradient} rounded-2xl p-6 md:p-7 flex flex-col justify-between min-h-[220px] border border-white/60 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* Background emoji watermark */}
              <div className="absolute -right-4 -bottom-4 text-8xl opacity-10 select-none pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:opacity-15">
                {campaign.emoji}
              </div>

              <div className="relative z-10">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-white/10 px-2.5 py-1 rounded-full mb-3 backdrop-blur-sm">
                  {campaign.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
                  {campaign.title}
                </h3>
                <p className={`text-xl font-bold mb-3 ${campaign.accent}`}>
                  {campaign.subtitle}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {campaign.description}
                </p>
              </div>

              <div className="relative z-10 mt-5">
                <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${campaign.accent} group-hover:gap-3 transition-all duration-200`}>
                  Shop Now <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
