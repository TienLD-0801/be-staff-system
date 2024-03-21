import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { ValidationPipe } from './shared/pipe/validation.pipe';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: new Logger(),
    cors: true,
  });

  // app.enableCors({
  //   origin: '*',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  // });

  app.useGlobalPipes(new ValidationPipe());

  const port = parseInt(process.env.APP_PORT, 10) || 3000;
  await app.listen(port, '0.0.0.0', () => {
    new Logger().log(`Service started successfully at port: ${port}`);
  });
}

bootstrap();
