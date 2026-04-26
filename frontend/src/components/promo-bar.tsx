"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PromoBar() {
  return (
    <div className="bg-yellow-100 border-b border-yellow-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-yellow-800">🚚 FREE DELIVERY!!!</span>
            <span className="text-yellow-700">
              Enjoy ₹0 shipping with our free delivery time slots
            </span>
          </div>
          <Button variant="ghost" size="sm" className="text-yellow-800 hover:text-yellow-900">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
