import 'dotenv/config';
import { createServer } from 'http';
import { app } from './app';
import { connectDb } from './config/db';
import { env } from './config/env';
import { logger } from './utils/logger';

async function main() {
  await connectDb();

  const server = createServer(app);

  server.listen(env.PORT, () => {
    logger.info(`API listening on :${env.PORT}`);
    console.log(`🚀 Server is running at: http://localhost:${env.PORT}`);
  });
}

main().catch((err) => {
  logger.error('Fatal startup error', { err });
  process.exit(1);
});

