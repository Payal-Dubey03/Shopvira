"use client";

import { Building2, Handshake, Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-500 text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Corporate Gifting
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-4">Elevate Your Business Gifting</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From client appreciation to employee milestones, ShopVira provides premium corporate gifting solutions that leave a lasting impression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Bulk Orders",
              desc: "Effortless fulfillment for large quantities with personalized touches.",
              icon: <Globe className="w-6 h-6" />,
            },
            {
              title: "Custom Branding",
              desc: "Add your logo and brand colors to our premium packaging.",
              icon: <Handshake className="w-6 h-6" />,
            },
            {
              title: "Dedicated Account Manager",
              desc: "Expert guidance to help you choose the perfect gifts for your needs.",
              icon: <Building2 className="w-6 h-6" />,
            },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border bg-card hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-[3rem] p-12 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to start your corporate journey?</h2>
            <p className="text-violet-100 mb-8 text-lg">
              Contact our dedicated team to discuss your requirements and get a customized quote today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 border-0">
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                View Catalogue
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
        </div>
      </div>
    </div>
  );
}
