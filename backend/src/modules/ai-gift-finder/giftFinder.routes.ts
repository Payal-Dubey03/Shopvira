import { Router } from 'express';
import { getRecommendations, getGiftFinderQuestions } from './giftFinder.controller';

export const giftFinderRouter = Router();

/**
 * GET /api/gift-finder/questions
 * Get the questionnaire structure
 */
giftFinderRouter.get('/questions', getGiftFinderQuestions);

/**
 * POST /api/gift-finder/recommendations
 * Get product recommendations based on user preferences
 * Body: GiftFinderQuestions schema
 */
giftFinderRouter.post('/recommendations', getRecommendations);
