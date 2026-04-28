"use client";

import Link from "next/link";
import { MapPin, Truck, IndianRupee, Building2, MessageCircle, MoreHorizontal } from "lucide-react";

const quickLinks = [
  { icon: <Truck className="h-4 w-4" />, label: "Same Day", href: "/same-day" },
  { icon: <IndianRupee className="h-4 w-4" />, label: "INR", href: "/currency" },
  { icon: <Building2 className="h-4 w-4" />, label: "Corporate", href: "/corporate" },
  { icon: <MessageCircle className="h-4 w-4" />, label: "Support", href: "/support" },
];

export function TopNavigation() {
  return (
    <div className="hidden md:block bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-2 text-xs text-gray-600 dark:text-gray-400">
          {/* Location */}
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            <MapPin className="h-3.5 w-3.5 text-violet-500" />
            <span className="font-medium">Deliver to:</span>
            <span className="text-violet-600 dark:text-violet-400 font-semibold underline underline-offset-2">
              Select location ▾
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
