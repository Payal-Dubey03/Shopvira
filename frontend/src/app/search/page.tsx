"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search as SearchIcon, ArrowLeft } from "lucide-react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-primary/10 text-primary">
            <SearchIcon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Search Results</h1>
            <p className="text-muted-foreground mt-1">
              Showing results for <span className="text-foreground font-semibold">"{query || "everything"}"</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-3xl bg-muted/30">
          <div className="text-6xl mb-6">🔍</div>
          <h2 className="text-2xl font-bold mb-2">No products found</h2>
          <p className="text-muted-foreground max-w-md mb-8">
            We couldn't find any products matching your search. Try different keywords or browse our top categories.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/luxury" 
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              Browse Luxury
            </Link>
            <Link 
              href="/gift-finder" 
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              AI Gift Finder
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
