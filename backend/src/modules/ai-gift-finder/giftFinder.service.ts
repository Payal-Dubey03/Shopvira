import { Product } from '../products/product.model';
import { GiftFinderQuestions } from './giftFinder.schema';

interface RecommendationResult {
  product_id: string;
  name: string;
  price: number;
  seller: string;
  image?: string;
  reason: string;
  highlight: string;
}

export class GiftFinderService {
  /**
   * Calculate matching score for a product based on user preferences
   * Higher score = better match
   */
  private calculateMatchScore(
    product: any,
    preferences: GiftFinderQuestions
  ): number {
    let score = 0;

    // Budget match (most important)
    if (
      product.price >= preferences.budgetMin &&
      product.price <= preferences.budgetMax
    ) {
      score += 30;
    } else if (
      product.price >= preferences.budgetMin * 0.8 &&
      product.price <= preferences.budgetMax * 1.2
    ) {
      score += 15; // Close to budget gets partial credit
    }

    // Occasion match
    if (
      product.occasion &&
      product.occasion.includes(preferences.occasion.toLowerCase())
    ) {
      score += 25;
    }

    // Personality match
    if (product.personality) {
      const personalityMatches = product.personality.filter((p: string) =>
        preferences.personality.includes(p as any)
      );
      score += personalityMatches.length * 10;
    }

    // Age group match
    if (product.ageGroup && product.ageGroup === preferences.ageGroup) {
      score += 15;
    }

    // Gender preference match (if applicable)
    if (product.tags) {
      if (
        preferences.gender === 'male' &&
        product.tags.includes('mens')
      ) {
        score += 10;
      } else if (
        preferences.gender === 'female' &&
        product.tags.includes('womens')
      ) {
        score += 10;
      }
    }

    // In stock preference
    if (product.inStock) {
      score += 5;
    }

    return score;
  }

  /**
   * Generate warm, personalized reason for recommendation
   */
  private generateReason(
    product: any,
    preferences: GiftFinderQuestions
  ): string {
    const reasons: string[] = [];

    if (
      product.occasion &&
      product.occasion.includes(preferences.occasion.toLowerCase())
    ) {
      reasons.push(
        `perfect for ${preferences.occasion}`
      );
    }

    if (product.personality) {
      const matches = product.personality.filter((p: string) =>
        preferences.personality.includes(p as any)
      );
      if (matches.length > 0) {
        reasons.push(`ideal for someone who's ${matches.join(' and ')}`);
      }
    }

    if (
      product.price >= preferences.budgetMin &&
      product.price <= preferences.budgetMax
    ) {
      reasons.push('thoughtfully priced within your budget');
    }

    const reasonText =
      reasons.length > 0
        ? `This gift is ${reasons.join(', ')}. `
        : `This is a wonderful choice. `;

    return (
      reasonText +
      `Made by ${product.seller}, a small local business crafting meaningful gifts.`
    );
  }

  /**
   * Get 2-3 product recommendations based on user preferences
   */
  async getRecommendations(
    preferences: GiftFinderQuestions
  ): Promise<RecommendationResult[]> {
    try {
      // Build dynamic query to filter products
      const query: any = {
        inStock: true,
        price: {
          $gte: preferences.budgetMin * 0.8,
          $lte: preferences.budgetMax * 1.2,
        },
      };

      // Add optional filters
      if (preferences.ageGroup !== 'unknown') {
        query.$or = [
          { ageGroup: preferences.ageGroup },
          { ageGroup: { $exists: false } },
        ];
      }

      if (preferences.occasion !== 'other') {
        query.$or = query.$or || [];
        query.$or.push({
          occasion: {
            $in: [preferences.occasion.toLowerCase()],
          },
        });
      }

      // Find products
      const products = await Product.find(query).limit(20).exec();

      if (products.length === 0) {
        // Fallback: get products in price range
        const fallbackProducts = await Product.find({
          inStock: true,
          price: {
            $gte: preferences.budgetMin * 0.5,
            $lte: preferences.budgetMax * 2,
          },
        })
          .limit(10)
          .exec();

        return this.rankAndFormatProducts(
          fallbackProducts,
          preferences,
          2
        );
      }

      // Rank products by match score
      const ranked = products
        .map((product) => ({
          ...product.toObject(),
          matchScore: this.calculateMatchScore(product, preferences),
        }))
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 3);

      return this.rankAndFormatProducts(ranked, preferences, 3);
    } catch (error) {
      console.error('Error getting recommendations:', error);
      throw new Error('Failed to generate recommendations');
    }
  }

  /**
   * Format products into recommendation response
   */
  private rankAndFormatProducts(
    products: any[],
    preferences: GiftFinderQuestions,
    count: number
  ): RecommendationResult[] {
    return products.slice(0, count).map((product) => {
      const reason = this.generateReason(product, preferences);

      // Generate highlight - one special thing about the product
      let highlight = '';
      if (product.tags && product.tags.length > 0) {
        highlight = `${product.tags[0].charAt(0).toUpperCase() + product.tags[0].slice(1)}`;
      } else if (product.category) {
        highlight = product.category;
      } else {
        highlight = 'Thoughtfully Curated';
      }

      return {
        product_id: product._id?.toString() || '',
        name: product.name,
        price: product.price,
        seller: product.seller,
        image: product.image,
        reason,
        highlight,
      };
    });
  }

  /**
   * Generate personalized warm message
   */
  generateWarmMessage(preferences: GiftFinderQuestions): string {
    const occasionText =
      preferences.occasion === 'other' ? 'special moment' : preferences.occasion;

    return `How wonderful that you're finding the perfect gift for this ${occasionText}! 🎁 I've curated some beautiful recommendations from small, local Indian businesses that match your criteria perfectly.`;
  }

  /**
   * Generate follow-up question for refinement
   */
  generateFollowUpQuestion(
    preferences: GiftFinderQuestions
  ): string {
    const followUps = [
      'Would you like to personalize this gift further?',
      'Would you be interested in a custom gift message or wrapping?',
      'Can I help you find something in a different price range?',
      'Would you like to explore similar items in another category?',
    ];

    return followUps[Math.floor(Math.random() * followUps.length)];
  }
}
