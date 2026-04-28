import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WhatsAppCheckoutButton } from "@/components/whatsapp-checkout-button";
import { GroupGiftingModal } from "@/components/group-gifting-modal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductPage() {
  const productName = "Premium Wireless Headphones";
  const price = 299;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, price }),
      });

      if (!response.ok) throw new Error("Failed to add to cart");

      alert(`✅ ${productName} added to cart!`);
    } catch (error) {
      alert("❌ Error adding to cart. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Product Image Placeholder */}
        <div className="flex items-center justify-center bg-muted rounded-xl h-[400px] md:h-[600px]">
          <span className="text-muted-foreground text-lg">Product Image Gallery</span>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">{productName}</h1>
            <p className="text-2xl font-semibold text-primary mt-2">${price}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Experience high-fidelity audio with our latest premium wireless headphones. 
            Featuring active noise cancellation, 40-hour battery life, and spatial audio support.
          </p>

          <div className="pt-4 border-t space-y-4">
            <h3 className="font-medium text-lg">Purchase Options</h3>
            <div className="grid gap-3">
              <Button 
                size="lg" 
                className="w-full"
                onClick={handleAddToCart}
                disabled={loading}
              >
                {loading ? "Adding..." : "Add to Cart"}
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">or checkout directly</span>
                </div>
              </div>

              <WhatsAppCheckoutButton productName={productName} price={price} />
            </div>
          </div>

          <div className="pt-4 border-t space-y-4">
            <h3 className="font-medium text-lg">Gift this Item</h3>
            <Card className="p-4 bg-muted/50 border-none">
              <p className="text-sm text-muted-foreground mb-4">
                Want to buy this for someone but split the cost with friends?
              </p>
              <GroupGiftingModal productName={productName} price={price} />
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
