"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScratchCardProps {
  width: number;
  height: number;
  imageSrc?: string; // Optional image to use as the cover
  coverColor?: string; // Color to use if no image is provided
  brushSize?: number;
  onReveal?: () => void;
  revealThreshold?: number; // percentage (0-1) to trigger onReveal
  children: React.ReactNode;
}

export function ScratchCard({
  width,
  height,
  imageSrc,
  coverColor = "#9ca3af",
  brushSize = 30,
  onReveal,
  revealThreshold = 0.5,
  children,
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Fill cover
    if (imageSrc) {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
      };
      img.src = imageSrc;
    } else {
      ctx.fillStyle = coverColor;
      ctx.fillRect(0, 0, width, height);
      
      // Add some "scratch me" text
      ctx.fillStyle = "#ffffff";
      ctx.font = "20px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Scratch to Reveal!", width / 2, height / 2);
    }
  }, [width, height, imageSrc, coverColor]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    scratch(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || isRevealed) return;
    scratch(e);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    checkReveal();
  };

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, 2 * Math.PI);
    ctx.fill();
  };

  const checkReveal = () => {
    if (isRevealed) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const totalPixels = pixels.length / 4;
    const percentRevealed = transparentPixels / totalPixels;

    if (percentRevealed > revealThreshold) {
      setIsRevealed(true);
      if (onReveal) {
        onReveal();
      }
      
      // Animate clearing the rest of the canvas
      ctx.clearRect(0, 0, width, height);
    }
  };

  return (
    <div
      className="relative select-none touch-none overflow-hidden rounded-xl shadow-lg border"
      style={{ width, height }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-background p-4">
        {children}
      </div>
      
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="absolute inset-0 z-10 cursor-crosshair touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />
      )}
      
      {isRevealed && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          {/* Sparkle or celebration animation can go here */}
        </motion.div>
      )}
    </div>
  );
}
