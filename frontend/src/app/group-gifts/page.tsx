"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function GroupGiftsPage() {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-rose-600 hover:text-rose-700">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700 font-medium">Group Gifting</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Group Gifting Made Easy
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl">
            Collect money from friends and send memorable group gifts for any occasion. No hassle, all joy!
          </p>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white text-lg h-auto px-8 py-3">
            Start a Group Gift
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Create Pool</h3>
              <p className="text-gray-700">
                Start a group gift and invite your friends to contribute
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collect Funds</h3>
              <p className="text-gray-700">
                Friends contribute securely through multiple payment options
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-100 p-8 rounded-lg border border-rose-200">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send Gift</h3>
              <p className="text-gray-700">
                Choose the perfect gift and send it with a personalized message
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Group Gifts */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Group Gifts</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Premium Hamper", price: "₹2,999", emoji: "🎁" },
              { name: "Luxury Gift Set", price: "₹4,999", emoji: "✨" },
              { name: "Flowers & Chocolates", price: "₹1,999", emoji: "🌹" },
              { name: "Experience Voucher", price: "₹5,999", emoji: "🎫" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                <p className="text-rose-600 font-bold text-lg mb-4">{item.price}</p>
                <Button className="w-full bg-rose-500 hover:bg-rose-600">
                  Send with Group
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 py-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Celebrate Together?
          </h2>
          <p className="text-white mb-6 text-lg">
            Create your first group gift now and share the joy
          </p>
          <Button className="bg-white text-rose-600 hover:bg-gray-100 text-lg h-auto px-8 py-3">
            Create a Group Gift
          </Button>
        </div>
      </div>
    </div>
  );
}
