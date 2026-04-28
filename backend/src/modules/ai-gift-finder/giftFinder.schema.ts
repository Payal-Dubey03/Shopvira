import { z } from 'zod';

export const giftFinderQuestionsSchema = z.object({
  // Who is the gift for
  relationship: z.enum([
    'parent',
    'sibling',
    'spouse',
    'friend',
    'colleague',
    'mentor',
    'child',
    'grandparent',
    'other',
  ]),
  ageGroup: z.enum(['teens', '20s', '30s', '40s', '50s', '60+', 'unknown']),
  personality: z.array(z.enum(['creative', 'sporty', 'tech-savvy', 'fashionable', 'homebody', 'adventurous', 'spiritual', 'minimalist'])).min(1),
  gender: z.enum(['male', 'female', 'any']),

  // Occasion
  occasion: z.enum([
    'birthday',
    'anniversary',
    'wedding',
    'promotion',
    'diwali',
    'holi',
    'rakhi',
    'thankyou',
    'apology',
    'new-year',
    'congratulations',
    'get-well',
    'other',
  ]),

  // Budget (in INR)
  budgetMin: z.number().positive().int(),
  budgetMax: z.number().positive().int(),

  // Additional preferences
  preferences: z.array(z.string()).optional(),
  customNote: z.string().max(200).optional(),
});

export type GiftFinderQuestions = z.infer<typeof giftFinderQuestionsSchema>;

export const recommendationResponseSchema = z.object({
  message: z.string(),
  recommendations: z.array(
    z.object({
      product_id: z.string(),
      name: z.string(),
      price: z.number(),
      seller: z.string(),
      image: z.string().optional(),
      reason: z.string(),
      highlight: z.string(),
    })
  ),
  follow_up: z.string().optional(),
});
