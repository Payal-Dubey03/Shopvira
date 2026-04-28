import Link from "next/link";
import { Globe2, Share2, Send, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Categories", href: "/categories" },
    { label: "New Arrivals", href: "/deals" },
    { label: "Deals & Offers", href: "/deals" },
    { label: "Luxury Gifts", href: "/luxury" },
  ],
  Gifting: [
    { label: "AI Gift Finder", href: "/gift-finder" },
    { label: "Group Gifting", href: "/group-gifts" },
    { label: "Same Day Delivery", href: "/same-day" },
    { label: "Personalised Gifts", href: "/category/personalized" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Returns & Refunds", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-gray-950 dark:bg-gray-950 text-gray-300">
      {/* Top wave divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <span className="text-xl font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                ShopVira
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              India's most loved gifting platform. Discover unique gifts from local artisans with same-day delivery, group gifting, and AI-powered recommendations.
            </p>
            <div className="flex gap-3 pt-1">
              {[Globe2, Share2, Send].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="p-2 rounded-xl bg-gray-800 hover:bg-violet-900/60 text-gray-400 hover:text-violet-400 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            {/* Contact */}
            <div className="space-y-2 pt-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-violet-400" />
                <span>hello@shopvira.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-violet-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-violet-400" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 ShopVira. All rights reserved. Made with 💜 in India.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
