"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopViraLogo } from "@/components/shopvira-logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Navigation Row */}
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <ShopViraLogo />
          </div>

          {/* Center: Search Bar */}
          <div className="hidden md:flex flex-1 mx-8 max-w-md">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search for gifts, flowers, cakes..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right: Actions */}
          <nav className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex flex-col items-center h-auto py-1 px-2">
              <ShoppingCart className="h-5 w-5 mb-1" />
              <span className="text-xs">Cart</span>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex flex-col items-center h-auto py-1 px-2">
              <User className="h-5 w-5 mb-1" />
              <span className="text-xs">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-rose-500" />
            </Button>
          </nav>
        </div>

        {/* Secondary Navigation Row */}
        <div className="hidden md:flex items-center justify-start border-t border-gray-100 py-2 space-x-6">
          <Link
            href="/categories"
            className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/deals"
            className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors"
          >
            Deals
          </Link>
          <Link
            href="/group-gifts"
            className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors"
          >
            Group Gifting
          </Link>
          <Link
            href="/same-day"
            className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors"
          >
            Same Day Delivery
          </Link>
          <Link
            href="/luxury"
            className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors"
          >
            Luxury Gifts
          </Link>
        </div>
      </div>
    </header>
  );
}
