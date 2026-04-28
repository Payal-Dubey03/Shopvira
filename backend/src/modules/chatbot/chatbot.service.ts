import { Product } from '../products/product.model';
import { ChatMessage } from './chatbot.schema';

interface PageContext {
  currentPage?: string;
  productId?: string;
  productName?: string;
}

/**
 * GiftLocal Chatbot Service
 * Provides intelligent responses about gifts, occasions, and products
 */
export class ChatbotService {
  /**
   * Intent classification - determines what the user is asking about
   */
  private classifyIntent(message: string): string {
    const lowerMsg = message.toLowerCase();

    if (
      lowerMsg.includes('recommend') ||
      lowerMsg.includes('suggest') ||
      lowerMsg.includes('what should i get')
    ) {
      return 'recommendation';
    }
    if (
      lowerMsg.includes('suitable') ||
      lowerMsg.includes('appropriate') ||
      lowerMsg.includes('good for')
    ) {
      return 'suitability';
    }
    if (
      lowerMsg.includes('compare') ||
      lowerMsg.includes('better') ||
      lowerMsg.includes('which one') ||
      lowerMsg.includes('difference')
    ) {
      return 'comparison';
    }
    if (
      lowerMsg.includes('price') ||
      lowerMsg.includes('cost') ||
      lowerMsg.includes('expensive') ||
      lowerMsg.includes('cheap') ||
      lowerMsg.includes('budget')
    ) {
      return 'pricing';
    }
    if (
      lowerMsg.includes('festival') ||
      lowerMsg.includes('occasion') ||
      lowerMsg.includes('diwali') ||
      lowerMsg.includes('holi') ||
      lowerMsg.includes('christmas') ||
      lowerMsg.includes('birthday') ||
      lowerMsg.includes('anniversary')
    ) {
      return 'occasion';
    }
    if (
      lowerMsg.includes('how to') ||
      lowerMsg.includes('how can') ||
      lowerMsg.includes('can i')
    ) {
      return 'help';
    }

    return 'general';
  }

  /**
   * Extract budget from user message
   */
  private extractBudget(message: string): { min?: number; max?: number } {
    const budgetMatch = message.match(/₹?\s*(\d+)\s*(?:to|–|-|and)\s*₹?\s*(\d+)/i);
    if (budgetMatch) {
      return {
        min: parseInt(budgetMatch[1]),
        max: parseInt(budgetMatch[2]),
      };
    }

    const singleBudgetMatch = message.match(/₹?\s*(\d+)/);
    if (singleBudgetMatch) {
      const amount = parseInt(singleBudgetMatch[1]);
      return { min: 0, max: amount };
    }

    return {};
  }

  /**
   * Generate warm, contextual response
   */
  private generateResponse(
    intent: string,
    message: string,
    context?: PageContext
  ): string {
    const responses: Record<string, string[]> = {
      recommendation: [
        `Great question! 🎁 For a gift recommendation, I'd love to know — who's it for and what's the occasion? That way I can find something truly special from our local sellers.`,
        `I can definitely help! 💝 Tell me a bit more — what age group are they, and do you have a budget in mind?`,
        `Wonderful! Let me find the perfect match. Could you share: what's their personality like, and what's the occasion?`,
      ],
      suitability: [
        `That's a thoughtful question! 💭 It depends on a few things — age, preferences, and the occasion. Tell me more and I can say if it's a great fit!`,
        `Great thinking! 🤔 Let me check — what age group is it for, and what's the occasion? That'll help me advise better.`,
        `Smart to check! ✓ Generally yes, but it really depends on personal taste. What's the context?`,
      ],
      comparison: [
        `Ooh, tough choice! 🤔 Both are lovely. What matters most to you — the recipient's personality, the occasion, or your budget? That'll help me compare!`,
        `Great options! 💫 One's more personal, one's more practical. Tell me about the gift recipient and I can guide you better!`,
      ],
      pricing: [
        `Budget-conscious — I love that! 💰 We have amazing gifts at every price point. What's your range, and who's it for?`,
        `Got it! 🏷️ For a more affordable option, I'd suggest gifts under ₹500. What's the occasion?`,
      ],
      occasion: [
        `Ah, a festival gifter! 🎉 That's wonderful. Which festival, and who are you gifting to? I can suggest something perfectly timed!`,
        `Perfect occasion to gift! 🎊 Tell me the person's age and personality, and I'll find something festive they'll love.`,
      ],
      help: [
        `I'm here to help! 👋 Whether it's finding gifts, comparing options, or occasion advice — just ask!`,
        `Happy to assist! 😊 What can I help you with today?`,
      ],
      general: [
        `Great question! 💬 To give you better advice, could you be a bit more specific about what you're looking for?`,
        `I'm listening! 👂 Tell me more about what you need, and I'll do my best to help!`,
      ],
    };

    const intentResponses = responses[intent] || responses.general;
    return intentResponses[Math.floor(Math.random() * intentResponses.length)];
  }

  /**
   * Get related products for product-specific questions
   */
  private async getRelatedProducts(
    productName?: string,
    category?: string
  ): Promise<Array<{ productId: string; name: string; price: number }>> {
    try {
      const query: any = {};

      if (productName) {
        query.name = { $regex: productName, $options: 'i' };
      }
      if (category) {
        query.category = category;
      }

      const products = await Product.find(query).select('_id name price').limit(3).exec();

      return products.map(p => ({
        productId: p._id?.toString() || '',
        name: p.name,
        price: p.price,
      }));
    } catch (error) {
      return [];
    }
  }

  /**
   * Main method to process chat message and generate response
   */
  async processMessage(input: ChatMessage): Promise<any> {
    const { message, context } = input;
    const intent = this.classifyIntent(message);
    const budget = this.extractBudget(message);

    // Generate primary response
    const reply = this.generateResponse(intent, message, context);

    // Generate follow-up suggestions
    const suggestions = this.generateSuggestions(intent);

    // Get related products if applicable
    let relatedProducts: any[] = [];
    if (
      intent === 'recommendation' ||
      intent === 'suitability' ||
      intent === 'pricing'
    ) {
      relatedProducts = await this.getRelatedProducts(
        context?.productName,
        this.inferCategory(message)
      );
    }

    return {
      reply,
      suggestions,
      relatedProducts: relatedProducts.length > 0 ? relatedProducts : undefined,
    };
  }

  /**
   * Generate contextual follow-up suggestions
   */
  private generateSuggestions(intent: string): string[] {
    const suggestions: Record<string, string[]> = {
      recommendation: [
        'Show me gifts under ₹500',
        'I want something creative',
        'Help with birthday gift',
      ],
      suitability: [
        'Tell me more about this product',
        'Show similar items',
        'What do others think?',
      ],
      comparison: [
        'Help me decide',
        'Show other options',
        "What's the best value?",
      ],
      pricing: [
        'Show premium options',
        'Budget-friendly picks',
        'Best value items',
      ],
      occasion: [
        'Festival gift ideas',
        'Traditional options',
        'Modern alternatives',
      ],
      help: [
        'Browse all gifts',
        'Start AI Gift Quiz',
        'View categories',
      ],
      general: [
        'What can you help with?',
        'Show me gift ideas',
        'Take the quiz',
      ],
    };

    return suggestions[intent] || suggestions.general;
  }

  /**
   * Infer product category from message
   */
  private inferCategory(message: string): string | undefined {
    const categories: Record<string, string> = {
      candle: 'Home & Living',
      tea: 'Food & Beverage',
      chocolate: 'Food & Beverage',
      journal: 'Accessories',
      book: 'Accessories',
      scarf: 'Fashion',
      watch: 'Electronics',
      aromatherapy: 'Wellness',
      meditation: 'Wellness',
      frame: 'Home & Living',
      mug: 'Home & Living',
      pen: 'Accessories',
    };

    for (const [keyword, category] of Object.entries(categories)) {
      if (message.toLowerCase().includes(keyword)) {
        return category;
      }
    }

    return undefined;
  }

  /**
   * Get quick responses for common questions
   */
  async getQuickResponse(question: string): Promise<string> {
    const commonQ = {
      'what do you sell': 'We curate beautiful gifts from small Indian businesses — from handmade ceramics to luxury accessories, perfect for every occasion! 🎁',
      'how do i order': 'Browse our collection, add items to cart, and checkout with your preferred payment method. We deliver across India! 📦',
      'free shipping': 'Shipping depends on your location. Check your cart for exact rates. Orders over ₹2000 get special discounts! 🚚',
      'return policy': "We offer hassle-free returns within 7 days. If something's not perfect, we make it right! ✓",
      'festival gifting': 'Every Indian festival has perfect gift ideas — from Diwali diyas to Holi colors. What festival are you thinking of? 🎉',
    };

    for (const [key, value] of Object.entries(commonQ)) {
      if (question.toLowerCase().includes(key)) {
        return value;
      }
    }

    return this.generateResponse('general', question);
  }
}
