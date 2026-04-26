import { Router } from 'express';
import { requireAuth } from '../../middleware/requireAuth';
import * as UsersController from './users.controller';

export const usersRouter = Router();

usersRouter.get('/me', requireAuth, UsersController.me);
usersRouter.get('/sessions', requireAuth, UsersController.listSessions);
usersRouter.delete('/sessions/:id', requireAuth, UsersController.revokeSession);

