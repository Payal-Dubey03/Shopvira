import * as Sentry from '@sentry/node';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import morgan from 'morgan';

import { env } from './config/env';
import { getDbReadyState } from './config/db';
import { globalLimiter, authLimiter } from './middleware/rateLimit';
import { errorHandler } from './middleware/errorHandler';
import { router } from './routes';

export const app = express();

// 1) Sentry init (before other imports in a real app; kept early here)
if (env.SENTRY_DSN) {
  Sentry.init({ dsn: env.SENTRY_DSN });
}

// 2) Security headers
app.use(helmet());

// 3) CORS — explicit origin list only, never '*' with credentials
app.use(
  cors({
    origin: env.CORS_ORIGINS.split(','),
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  })
);

// 4) Body parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 5) NoSQL injection prevention
app.use((req, _res, next) => {
  ['body', 'params', 'headers', 'query'].forEach((k) => {
    if ((req as any)[k]) {
      mongoSanitize.sanitize((req as any)[k]);
    }
  });
  next();
});

// 6) HTTP request logging (dev only)
if (env.NODE_ENV === 'development') app.use(morgan('dev'));

// 7) Health endpoints (minimal, before rate limiting if hosts poll frequently)
app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Shopvira API!',
    version: '1.0.0'
  });
});
app.get('/health', (_req, res) => res.status(200).send('ok'));
app.get('/ready', (_req, res) => {
  const ready = getDbReadyState() === 1;
  res.status(ready ? 200 : 503).json({ success: ready, data: { ready } });
});

// 8) Rate limits
app.use('/api', globalLimiter);
app.use('/api/v1/auth', authLimiter);

// 9) Routes
app.use('/api/v1', router);

// 10) Sentry error handler (before your error handler)
if (env.SENTRY_DSN) {
  Sentry.setupExpressErrorHandler(app);
}

// 11) Central error handler (always last)
app.use(errorHandler);

