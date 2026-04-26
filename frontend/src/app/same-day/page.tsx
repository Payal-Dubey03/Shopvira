"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock, Zap } from "lucide-react";

export default function SameDayPage() {
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
            <span className="text-gray-700 font-medium">Same Day Delivery</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚀 Same Day Delivery
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl">
            Order before 2 PM and get your gift delivered the same day!
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg h-auto px-8 py-3">
            Order Now
          </Button>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
              <Zap className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-700">
                Order before 2 PM and receive your gift same day
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
              <MapPin className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wide Coverage</h3>
              <p className="text-gray-700">
                Available in major cities across the country
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200">
              <Clock className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scheduled Delivery</h3>
              <p className="text-gray-700">
                Choose your preferred delivery time slot
              </p>
            </div>
          </div>

          {/* Eligible Cities */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Available in These Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"].map(
              (city) => (
                <div
                  key={city}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-green-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{city}</span>
                  <p className="text-sm text-green-600 mt-1">✓ Available</p>
                </div>
              )
            )}
          </div>

          {/* Popular Same Day Gifts */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Same Day Gifts</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Fresh Flowers", price: "₹999", emoji: "🌹" },
              { name: "Chocolate Box", price: "₹499", emoji: "🍫" },
              { name: "Cake & Flowers", price: "₹1,499", emoji: "🎂" },
              { name: "Gift Hamper", price: "₹2,499", emoji: "🎁" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                <p className="text-green-600 font-bold text-lg mb-4">{item.price}</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Order Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How Same Day Delivery Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Browse & Select", desc: "Choose from our same day delivery collection" },
              { step: "2", title: "Order Before 2 PM", desc: "Place your order before the cutoff time" },
              { step: "3", title: "Confirm Details", desc: "Provide recipient address and preferences" },
              { step: "4", title: "Get Delivered", desc: "Receive gift same day with personalized message" },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="bg-green-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
