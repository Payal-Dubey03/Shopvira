"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, Search, User, X, Sparkles, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopViraLogo } from "@/components/shopvira-logo";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/gift-finder", label: "✨ AI Gift Finder", highlight: true },
  { href: "/categories", label: "Categories" },
  { href: "/deals", label: "Deals" },
  { href: "/group-gifts", label: "Group Gifting" },
  { href: "/same-day", label: "Same Day" },
  { href: "/luxury", label: "Luxury" },
];

export function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Row */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <ShopViraLogo />

          {/* Search */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const query = (e.currentTarget.elements.namedItem("search") as HTMLInputElement).value;
              if (query) router.push(`/search?q=${encodeURIComponent(query)}`);
            }}
            className={`hidden md:flex flex-1 max-w-lg mx-4 relative transition-all duration-200 ${searchFocused ? "max-w-xl" : ""}`}
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <input
                name="search"
                type="text"
                placeholder="Search gifts, flowers, cakes..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-600 focus:border-transparent transition-all"
              />
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 block dark:hidden" />
              <Moon className="h-4 w-4 hidden dark:block" />
            </button>

            {/* Cart */}
            <button
              onClick={() => router.push("/checkout")}
              className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-4 w-4 flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[9px] font-bold rounded-full">
                2
              </span>
            </button>

            {/* Account */}
            <button
              onClick={() => router.push("/login")}
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              <User className="h-4 w-4" />
              <span>Account</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Secondary Nav */}
        <nav className="hidden md:flex items-center gap-1 border-t border-gray-100 dark:border-gray-800 py-2 overflow-x-auto scrollbar-none">
          {navLinks.map((link) =>
            link.highlight ? (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700 transition-all whitespace-nowrap shadow-sm shadow-violet-200 dark:shadow-violet-900"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950 transition-all whitespace-nowrap"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-4 space-y-3">
          {/* Mobile Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search gifts..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>
          {/* Mobile Nav Links */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium text-center transition-all ${
                  link.highlight
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                    : "bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 pt-1">
            <button
              onClick={() => { router.push("/login"); setMobileOpen(false); }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <User className="h-4 w-4" /> Account
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-600 dark:text-gray-400"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
