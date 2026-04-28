"use client";

import { useState } from "react";
import { X, ChevronRight, Truck, Tag, Zap } from "lucide-react";

const promos = [
  { icon: <Truck className="h-3.5 w-3.5" />, text: "FREE DELIVERY on orders above ₹499 — No code needed!" },
  { icon: <Tag className="h-3.5 w-3.5" />, text: "Use code GIFT20 — Get 20% off on your first order 🎁" },
  { icon: <Zap className="h-3.5 w-3.5" />, text: "Same-day delivery available in 10+ cities across India 🚀" },
];

export function PromoBar() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white text-xs md:text-sm overflow-hidden">
      <div className="flex items-center justify-center gap-3 py-2.5 px-10 text-center font-medium tracking-wide">
        <span className="opacity-80">{promos[current].icon}</span>
        <span>{promos[current].text}</span>
        <button
          onClick={() => setCurrent((c) => (c + 1) % promos.length)}
          className="opacity-70 hover:opacity-100 transition-opacity ml-2"
          aria-label="Next promo"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Close"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
