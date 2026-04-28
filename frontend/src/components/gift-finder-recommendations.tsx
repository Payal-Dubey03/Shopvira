'use client';

import { Star, Heart, TrendingUp } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Recommendation {
  product_id: string;
  name: string;
  price: number;
  seller: string;
  image?: string;
  reason: string;
  highlight: string;
}

interface RecommendationsDisplayProps {
  recommendations: Recommendation[];
  message: string;
  followUp?: string;
  onNewSearch: () => void;
}

export const RecommendationsDisplay = ({
  recommendations,
  message,
  followUp,
  onNewSearch,
}: RecommendationsDisplayProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Warm Message */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-8 border-2 border-amber-100">
        <p className="text-lg text-gray-800 leading-relaxed">
          <span className="text-3xl mr-2">🎁</span>
          {message}
        </p>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {recommendations.map((product, index) => (
          <div
            key={product.product_id}
            className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 group"
          >
            {/* Badge */}
            <div className="absolute top-3 right-3 z-10">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                #{index + 1} Pick
              </div>
            </div>

            {/* Image Placeholder */}
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Gift Image</p>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-5">
              {/* Highlight Badge */}
              <div className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold mb-3">
                {product.highlight}
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>

              {/* Seller */}
              <p className="text-sm text-purple-600 font-semibold mb-3">
                By {product.seller}
              </p>

              {/* Reason */}
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                "{product.reason}"
              </p>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="text-2xl font-bold text-purple-600">
                    ₹{product.price.toLocaleString()}
                  </p>
                </div>
                <Link
                  href={`/product/${product.product_id}`}
                  className={cn(
                    buttonVariants({ size: 'sm' }),
                    'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0'
                  )}
                >
                  View Gift
                </Link>
              </div>

              {/* Save Button */}
              <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Heart className="w-4 h-4" />
                Save for Later
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Follow-up Section */}
      {followUp && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <p className="text-gray-800">
            <span className="font-semibold text-blue-600">💡 Tip:</span> {followUp}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button
          onClick={onNewSearch}
          variant="outline"
          className="px-8 py-2"
        >
          ← Try Different Preferences
        </Button>
        <Link
          href="/checkout"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'px-8 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0'
          )}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};
