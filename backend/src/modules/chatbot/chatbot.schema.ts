import { z } from 'zod';

export const chatMessageSchema = z.object({
  message: z.string().min(1).max(500),
  context: z.object({
    currentPage: z.string().optional(),
    productId: z.string().optional(),
    productName: z.string().optional(),
    userQuery: z.string().optional(),
  }).optional(),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;

export const chatResponseSchema = z.object({
  reply: z.string(),
  suggestions: z.array(z.string()).optional(),
  relatedProducts: z.array(
    z.object({
      productId: z.string(),
      name: z.string(),
      price: z.number(),
    })
  ).optional(),
});

export type ChatResponse = z.infer<typeof chatResponseSchema>;
