import { Router } from 'express';
import { sendMessage, getQuickResponse } from './chatbot.controller';

export const chatbotRouter = Router();

/**
 * POST /api/chatbot/message
 * Send a message and get a response
 */
chatbotRouter.post('/message', sendMessage);

/**
 * GET /api/chatbot/quick
 * Get quick response for common questions
 */
chatbotRouter.get('/quick', getQuickResponse);
