"use client";

import { useState } from "react";
import { Users, Link as LinkIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface GroupGiftingModalProps {
  productName: string;
  price: number;
}

export function GroupGiftingModal({ productName, price }: GroupGiftingModalProps) {
  const [generatedLink, setGeneratedLink] = useState("");

  const handleCreateGroupGift = () => {
    // Call backend API to generate a group gifting campaign and Razporpay payment link
    const placeholderLink = `https://shopvira.com/group-gift/cam_${Math.floor(Math.random() * 1000000)}`;
    setGeneratedLink(placeholderLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    alert("Link copied!");
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" className="w-full flex items-center justify-center gap-2" />
        }
      >
        <Users className="h-5 w-5 text-primary" />
        Start Group Gift
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Start a Group Gift</DialogTitle>
          <DialogDescription>
            Invite friends and family to chip in for the {productName}. Total goal: ${price}.
          </DialogDescription>
        </DialogHeader>
        
        {!generatedLink ? (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Who is this gift for?</Label>
              <Input id="recipient" placeholder="Enter recipient's name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deadline">Contribution Deadline</Label>
              <Input id="deadline" type="date" />
            </div>
            <Button className="w-full mt-4" onClick={handleCreateGroupGift}>
              Generate Contribution Link
            </Button>
          </div>
        ) : (
          <div className="space-y-4 py-4 flex flex-col items-center">
            <CheckCircle2 className="h-12 w-12 text-green-500 mb-2" />
            <h3 className="text-lg font-medium text-center">Campaign Created!</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Share this link with friends to let them contribute to the goal.
            </p>
            <div className="flex w-full items-center space-x-2">
              <Input value={generatedLink} readOnly />
              <Button size="sm" className="px-3" onClick={copyToClipboard}>
                <span className="sr-only">Copy</span>
                <LinkIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
