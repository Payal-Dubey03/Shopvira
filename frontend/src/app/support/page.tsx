"use client";

import { MessageCircle, Phone, Mail, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold tracking-tight mb-6">How can we help you?</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search for help (e.g. 'track order', 'returns')" 
              className="h-14 pl-12 pr-4 rounded-2xl bg-muted/50 border-0 text-lg focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Track Order",
              desc: "Check the real-time status of your delivery.",
              icon: <FileText className="w-6 h-6" />,
              link: "Track Now"
            },
            {
              title: "Returns & Refunds",
              desc: "Easy 7-day returns for peace of mind.",
              icon: <FileText className="w-6 h-6" />,
              link: "Start Return"
            },
            {
              title: "FAQs",
              desc: "Quick answers to common questions.",
              icon: <MessageCircle className="w-6 h-6" />,
              link: "Read More"
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border bg-card hover:border-primary/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-6">{item.desc}</p>
              <Button variant="link" className="p-0 text-primary font-bold">
                {item.link} →
              </Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-12 rounded-[3rem] bg-muted/30 border border-muted">
          <div>
            <h2 className="text-3xl font-bold mb-4">Still need assistance?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our support team is available 24/7 to help you with any queries or concerns.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold">+91 1800-SHOPVIRA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Support</p>
                  <p className="font-semibold">help@shopvira.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-background border shadow-xl">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" />
              <textarea 
                className="w-full h-32 p-4 rounded-xl border bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="How can we help?"
              />
              <Button className="w-full h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 border-0">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
