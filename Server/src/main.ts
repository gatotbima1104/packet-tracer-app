import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //setup cors
  app.enableCors({
    methods: ['GET'],
    origin: [
      '*'
    ]
  })
  await app.listen(3000);
}
bootstrap();
