"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  color: string;
  image?: string;
}

const campaigns: Campaign[] = [
  {
    id: "mothers-day",
    title: "Gifts to say",
    subtitle: "'Thanks, Mom!'",
    description: "Make Mother's Day special with sweet surprises",
    buttonText: "ORDER NOW",
    color: "bg-gradient-to-r from-pink-100 to-rose-50",
  },
  {
    id: "anniversaries",
    title: "Anniversaries",
    subtitle: "Made Special",
    description: "Find timeless surprises for a timeless love story",
    buttonText: "ORDER NOW",
    color: "bg-gradient-to-r from-purple-50 to-pink-50",
  },
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "in Every",
    description: "Curated gifts for happily-ever-afters",
    buttonText: "ORDER NOW",
    color: "bg-gradient-to-r from-yellow-50 to-orange-50",
  },
];

export function FeaturedCampaigns() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className={`${campaign.color} rounded-lg p-6 md:p-8 flex flex-col justify-between min-h-72 border border-pink-100 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {campaign.id.toUpperCase().replace("-", " ")}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {campaign.title}
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-rose-600 mb-3">
                  {campaign.subtitle}
                </p>
                <p className="text-gray-700 text-sm">{campaign.description}</p>
              </div>
              <Button className="bg-rose-500 hover:bg-rose-600 text-white w-fit mt-4">
                {campaign.buttonText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
