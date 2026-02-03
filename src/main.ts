import { config } from 'dotenv';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

config({ path: `envs/.env.${process.env.NODE_ENV || 'development'}` });
const PREFIX_URL = process.env.PREFIX_URL || 'user-ms/v1';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(PREFIX_URL);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
