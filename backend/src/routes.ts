import { Router } from 'express';
import { authRouter } from './modules/auth/auth.routes';
import { usersRouter } from './modules/users/users.routes';
import { giftFinderRouter } from './modules/ai-gift-finder/giftFinder.routes';
import { chatbotRouter } from './modules/chatbot/chatbot.routes';

export const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/gift-finder', giftFinderRouter);
router.use('/chatbot', chatbotRouter);

