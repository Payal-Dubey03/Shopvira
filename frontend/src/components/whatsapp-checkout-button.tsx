"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppCheckoutProps {
  productName: string;
  price: number;
}

export function WhatsAppCheckoutButton({ productName, price }: WhatsAppCheckoutProps) {
  const handleCheckout = () => {
    // Generate WhatsApp link (placeholder for real API integration)
    const phone = "1234567890"; // Admin or bot number
    const message = `Hello, I'd like to buy the ${productName} for $${price}. Please guide me through checkout.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button 
      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2"
      onClick={handleCheckout}
    >
      <MessageCircle className="h-5 w-5" />
      Buy via WhatsApp
    </Button>
  );
}
