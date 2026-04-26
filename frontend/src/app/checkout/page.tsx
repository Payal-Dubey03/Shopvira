"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, Truck, CreditCard, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
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
            <Link href="/deals" className="text-rose-600 hover:text-rose-700">
              Deals
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700 font-medium">Checkout</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Secure Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your purchase safely</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Checkout */}
          <div className="md:col-span-2 space-y-8">
            {/* Step 1: Shipping Address */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Shipping Address</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Method */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Shipping Method</h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-rose-500 rounded-lg cursor-pointer bg-rose-50">
                  <input type="radio" name="shipping" defaultChecked className="w-5 h-5" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">Standard Delivery - FREE</p>
                    <p className="text-sm text-gray-600">Delivery in 5-7 business days</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="shipping" className="w-5 h-5" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">Express Delivery - ₹99</p>
                    <p className="text-sm text-gray-600">Delivery in 2-3 business days</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="shipping" className="w-5 h-5" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">Same Day Delivery - ₹199</p>
                    <p className="text-sm text-gray-600">Order before 2 PM for same day delivery</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-rose-500 rounded-lg cursor-pointer bg-rose-50">
                  <input type="radio" name="payment" defaultChecked className="w-5 h-5" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">Credit/Debit Card</p>
                    <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-5 h-5" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">Net Banking</p>
                    <p className="text-sm text-gray-600">All major banks supported</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-5 h-5" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">UPI</p>
                    <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm</p>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-5 h-5" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">Wallet</p>
                    <p className="text-sm text-gray-600">Use your ShopVira wallet balance</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6 pb-6 border-b">
                <div className="flex justify-between text-gray-700">
                  <span>Premium Gift Hamper</span>
                  <span className="font-semibold">₹1,499</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Luxury Flower Bouquet</span>
                  <span className="font-semibold">₹999</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹2,498</span>
                </div>
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Discount (50% OFF)</span>
                  <span>-₹1,249</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax & Charges</span>
                  <span className="font-semibold">₹149</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total Amount</span>
                  <span className="text-rose-600">₹1,398</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800">Secure payment protected by SSL</span>
              </div>

              <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white text-lg py-4 h-auto font-bold">
                <Lock className="mr-2 h-5 w-5" />
                Complete Purchase
              </Button>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                <p className="font-semibold mb-2">✓ Money-back guarantee</p>
                <p>If you're not satisfied, we'll refund your money within 30 days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <Lock className="h-8 w-8 text-rose-600 mx-auto mb-3" />
            <p className="font-semibold text-gray-900">Secure Payment</p>
            <p className="text-sm text-gray-600">SSL Encrypted</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <Truck className="h-8 w-8 text-rose-600 mx-auto mb-3" />
            <p className="font-semibold text-gray-900">Fast Delivery</p>
            <p className="text-sm text-gray-600">Track your order</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <CreditCard className="h-8 w-8 text-rose-600 mx-auto mb-3" />
            <p className="font-semibold text-gray-900">Multiple Payments</p>
            <p className="text-sm text-gray-600">All payment methods</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <CheckCircle className="h-8 w-8 text-rose-600 mx-auto mb-3" />
            <p className="font-semibold text-gray-900">Easy Returns</p>
            <p className="text-sm text-gray-600">30-day policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
