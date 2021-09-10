import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [/^(http|https):\/\/(localhost|127.0.0.1):\d{2,4}$/],
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
