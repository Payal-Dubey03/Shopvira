import { Router } from 'express';
import { validate } from '../../middleware/validate';
import { loginSchema, registerSchema } from './auth.schema';
import * as AuthController from './auth.controller';

export const authRouter = Router();

authRouter.post('/register', validate(registerSchema), AuthController.register);
authRouter.post('/login', validate(loginSchema), AuthController.login);
authRouter.post('/refresh', AuthController.refresh);
authRouter.post('/logout', AuthController.logout);

