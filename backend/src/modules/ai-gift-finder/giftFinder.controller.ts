import { Request, Response } from 'express';
import { giftFinderQuestionsSchema } from './giftFinder.schema';
import { GiftFinderService } from './giftFinder.service';
import { logger } from '../../utils/logger';

const giftFinderService = new GiftFinderService();

export const getRecommendations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Validate request body
    const preferences = giftFinderQuestionsSchema.parse(req.body);

    // Get recommendations
    const recommendations = await giftFinderService.getRecommendations(
      preferences
    );

    if (recommendations.length === 0) {
      res.status(200).json({
        message: 'No matching gifts found. Please adjust your preferences and try again.',
        recommendations: [],
        follow_up: 'Would you like to explore a different budget or occasion?',
      });
      return;
    }

    // Generate response
    const message = giftFinderService.generateWarmMessage(preferences);
    const followUp = giftFinderService.generateFollowUpQuestion(preferences);

    res.status(200).json({
      message,
      recommendations,
      follow_up: followUp,
    });

    // Log for analytics
    logger.info('Gift recommendations generated', {
      occasion: preferences.occasion,
      budget: `${preferences.budgetMin}-${preferences.budgetMax}`,
      recommendationCount: recommendations.length,
    });
  } catch (error: any) {
    logger.error('Error in getRecommendations', { error: error.message });

    // Validation errors
    if (error.errors) {
      res.status(400).json({
        message: 'Invalid input. Please check your answers.',
        error: error.errors[0]?.message,
      });
      return;
    }

    res.status(500).json({
      message: 'Unable to generate recommendations at this moment. Please try again later.',
      error: 'Internal server error',
    });
  }
};

export const getGiftFinderQuestions = (
  _req: Request,
  res: Response
): void => {
  // Return the questionnaire structure for frontend
  res.status(200).json({
    questions: [
      {
        id: 'relationship',
        type: 'select',
        question: 'Who are you buying this gift for?',
        options: [
          'parent',
          'sibling',
          'spouse',
          'friend',
          'colleague',
          'mentor',
          'child',
          'grandparent',
          'other',
        ],
      },
      {
        id: 'ageGroup',
        type: 'select',
        question: 'What age group are they in?',
        options: ['teens', '20s', '30s', '40s', '50s', '60+', 'unknown'],
      },
      {
        id: 'personality',
        type: 'checkbox',
        question: 'What describes their personality? (Select all that apply)',
        options: [
          'creative',
          'sporty',
          'tech-savvy',
          'fashionable',
          'homebody',
          'adventurous',
          'spiritual',
          'minimalist',
        ],
      },
      {
        id: 'gender',
        type: 'select',
        question: 'Any gender preference?',
        options: ['male', 'female', 'any'],
      },
      {
        id: 'occasion',
        type: 'select',
        question: 'What is the occasion?',
        options: [
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
        ],
      },
      {
        id: 'budget',
        type: 'range',
        question: 'What is your budget? (in Indian Rupees)',
        min: 100,
        max: 50000,
        step: 100,
      },
    ],
  });
};
