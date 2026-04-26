import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-rose-500">ShopVira</h3>
            <p className="text-sm text-gray-300">
              Your one-stop destination for modern e-commerce. Group gifting, gamified discounts, and WhatsApp integration.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/categories" className="hover:text-rose-500 transition-colors">All Categories</Link></li>
              <li><Link href="/deals" className="hover:text-rose-500 transition-colors">New Arrivals</Link></li>
              <li><Link href="/deals" className="hover:text-rose-500 transition-colors">Deals & Offers</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-rose-500 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-rose-500 transition-colors">Track Order</Link></li>
              <li><Link href="#" className="hover:text-rose-500 transition-colors">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-rose-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="flex space-x-4 text-gray-400">
              <Link href="#" className="hover:text-rose-500 transition-colors"><Globe className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-rose-500 transition-colors"><Phone className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-rose-500 transition-colors"><Mail className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>

        
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2024 ShopVira. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-rose-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-rose-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
