import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { PromoBar } from "@/components/promo-bar";
import { TopNavigation } from "@/components/top-navigation";
import { FeaturedCampaigns } from "@/components/featured-campaigns";
import { CategoryGrid } from "@/components/category-grid";

export default function Home() {
  return (
    <div className="w-full">
      {/* Promo Bar */}
      <PromoBar />

      {/* Top Navigation */}
      <TopNavigation />

      {/* Hero Section with Featured Campaigns */}
      <div className="w-full">
        <FeaturedCampaigns />
      </div>

      {/* Category Grid */}
      <CategoryGrid />

      {/* Trending Products Section */}
      <div className="w-full py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <span className="text-4xl">🎁</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Premium Gift Box</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Perfect for any occasion
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-rose-600">₹999</span>
                    <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-gradient-to-r from-rose-500 to-pink-500 py-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Make Every Moment Special
          </h2>
          <p className="text-white mb-6 text-lg">
            Express your feelings with our curated collection of gifts
          </p>
          <Link href="/deals" className={buttonVariants({ size: "lg", className: "bg-white text-rose-600 hover:bg-gray-100" })}>
            Explore All Gifts
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold text-lg mb-2">Same Day Delivery</h3>
              <p className="text-gray-600">
                Get your gifts delivered on the same day in selected areas
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-bold text-lg mb-2">Group Gifting</h3>
              <p className="text-gray-600">
                Collect money from friends and send memorable group gifts
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-lg mb-2">WhatsApp Integration</h3>
              <p className="text-gray-600">
                Share and order directly through WhatsApp for convenience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
