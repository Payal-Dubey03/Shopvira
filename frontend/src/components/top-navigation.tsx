"use client";

import Link from "next/link";
import { MapPin, Truck, IndianRupee, Building2, MessageCircle, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopNavigation() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 text-sm">
          {/* Left: Location */}
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-rose-500" />
            <span className="font-medium text-gray-700">Where to deliver?</span>
            <span className="text-rose-500 cursor-pointer hover:text-rose-600">Location missing ▼</span>
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto py-1 px-2">
              <Truck className="h-4 w-4 mb-1" />
              <span className="text-xs">Same Day</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto py-1 px-2">
              <IndianRupee className="h-4 w-4 mb-1" />
              <span className="text-xs">INR</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto py-1 px-2">
              <Building2 className="h-4 w-4 mb-1" />
              <span className="text-xs">Corporate</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto py-1 px-2">
              <MessageCircle className="h-4 w-4 mb-1" />
              <span className="text-xs">Support</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto py-1 px-2">
              <MoreHorizontal className="h-4 w-4 mb-1" />
              <span className="text-xs">More</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
