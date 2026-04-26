import type { NextFunction, Request, Response } from 'express';
import { verifyAccessToken } from '../utils/jwt';

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) {
    const err = new Error('Unauthorized') as any;
    err.statusCode = 401;
    err.code = 'UNAUTHORIZED';
    return next(err);
  }

  const token = auth.slice('Bearer '.length);
  try {
    const payload = verifyAccessToken(token);
    req.user = { _id: payload.sub, role: payload.role };
    return next();
  } catch {
    const err = new Error('Invalid token') as any;
    err.statusCode = 401;
    err.code = 'TOKEN_INVALID';
    return next(err);
  }
}

