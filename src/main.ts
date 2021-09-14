import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.enableCors({
    origin: [/^(http|https):\/\/(localhost|127.0.0.1):\d{2,4}$/],
    credentials: true,
  });
  useContainer(app.select(AppModule), {fallbackOnErrors: true})
  await app.listen(3001);
}
bootstrap();
