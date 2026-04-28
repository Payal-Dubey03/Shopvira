import { Request, Response } from 'express';
import { chatMessageSchema } from './chatbot.schema';
import { ChatbotService } from './chatbot.service';
import { logger } from '../../utils/logger';

const chatbotService = new ChatbotService();

export const sendMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request
    const input = chatMessageSchema.parse(req.body);

    // Get response from chatbot service
    const response = await chatbotService.processMessage(input);

    res.status(200).json(response);

    // Log for analytics
    logger.info('Chat message processed', {
      intent: input.context?.userQuery?.substring(0, 50),
      page: input.context?.currentPage,
    });
  } catch (error: any) {
    logger.error('Error in sendMessage', { error: error.message });

    if (error.errors) {
      res.status(400).json({
        reply: "I didn't quite catch that. Could you rephrase your question?",
        error: 'Invalid input',
      });
      return;
    }

    res.status(500).json({
      reply: "I'm having trouble thinking right now. Please try again in a moment! 🙏",
      error: 'Internal server error',
    });
  }
};

export const getQuickResponse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { question } = req.query;

    if (!question || typeof question !== 'string') {
      res.status(400).json({ error: 'Question required' });
      return;
    }

    const response = await chatbotService.getQuickResponse(question);

    res.status(200).json({
      reply: response,
    });
  } catch (error) {
    logger.error('Error in getQuickResponse', error);
    res.status(500).json({
      reply: 'Oops! Something went wrong. Please try again! 🙏',
    });
  }
};
