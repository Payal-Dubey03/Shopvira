import type { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

type AppError = Error & { statusCode?: number; code?: string; fields?: Record<string, string[]> };

export function errorHandler(err: AppError, _req: Request, res: Response, _next: NextFunction) {
  const statusCode = err.statusCode ?? 500;
  const code = err.code ?? (statusCode === 500 ? 'INTERNAL_ERROR' : 'INVALID_REQUEST');

  if (statusCode >= 500) {
    logger.error('Unhandled error', { err });
  }

  return res.status(statusCode).json({
    success: false,
    error: {
      code,
      message: err.message || 'Something went wrong',
      ...(err.fields ? { fields: err.fields } : {}),
    },
  });
}

