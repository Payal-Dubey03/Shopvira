"use client";

import { IndianRupee, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CurrencyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500">
            <Globe className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold">Preferences</h1>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Currency</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Indian Rupee", code: "INR", symbol: "₹", selected: true },
                { label: "US Dollar", code: "USD", symbol: "$", selected: false },
                { label: "Euro", code: "EUR", symbol: "€", selected: false },
                { label: "British Pound", code: "GBP", symbol: "£", selected: false },
              ].map((currency) => (
                <button
                  key={currency.code}
                  className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${
                    currency.selected 
                      ? "border-primary bg-primary/5 ring-1 ring-primary" 
                      : "border-muted hover:border-muted-foreground/50 bg-card"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                      currency.selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {currency.symbol}
                    </div>
                    <div className="text-left">
                      <p className="font-bold">{currency.label}</p>
                      <p className="text-xs text-muted-foreground">{currency.code}</p>
                    </div>
                  </div>
                  {currency.selected && <Check className="w-5 h-5 text-primary" />}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Regional Settings</h2>
            <div className="p-6 rounded-2xl border bg-card space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">Shipping Region</p>
                  <p className="text-sm text-muted-foreground">Prices and availability may vary by region.</p>
                </div>
                <Button variant="outline">India</Button>
              </div>
              <div className="h-px bg-muted" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">Language</p>
                  <p className="text-sm text-muted-foreground">Preferred browsing language.</p>
                </div>
                <Button variant="outline">English</Button>
              </div>
            </div>
          </section>

          <div className="pt-8 flex justify-end gap-4">
            <Button variant="ghost" size="lg">Cancel</Button>
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 border-0 px-8">
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
