"use client";

import Link from "next/link";

export function ShopViraLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      {/* Logo SVG */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Gift Box */}
        <rect x="4" y="8" width="24" height="24" rx="2" fill="#EC4899" opacity="0.1" />
        
        {/* Box border */}
        <rect x="4" y="8" width="24" height="24" rx="2" stroke="#EC4899" strokeWidth="1.5" fill="none" />
        
        {/* Ribbon horizontal */}
        <rect x="4" y="17" width="24" height="3" fill="#EC4899" />
        
        {/* Ribbon vertical */}
        <rect x="14" y="8" width="3" height="24" fill="#EC4899" />
        
        {/* Bow - left circle */}
        <circle cx="10" cy="6" r="3" fill="#EC4899" />
        
        {/* Bow - right circle */}
        <circle cx="22" cy="6" r="3" fill="#EC4899" />
        
        {/* Bow - center */}
        <circle cx="16" cy="5" r="2.5" fill="#FBBF24" />
        
        {/* Sparkle dots */}
        <circle cx="32" cy="10" r="1.5" fill="#FBBF24" />
        <circle cx="35" cy="15" r="1" fill="#EC4899" opacity="0.6" />
        <circle cx="33" cy="22" r="1.5" fill="#FBBF24" />
      </svg>

      {/* Brand text */}
      <div className="flex flex-col">
        <span className="text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
          ShopVira
        </span>
        <span className="text-xs text-rose-500 font-semibold tracking-widest -mt-1">
          GIFTS
        </span>
      </div>
    </Link>
  );
}
