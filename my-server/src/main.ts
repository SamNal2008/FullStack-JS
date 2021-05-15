import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //Adding some docs with OpenApi & Swagger
  const config = new DocumentBuilder().setTitle('Market example')
    .setDescription('The market API description')
    .setVersion('1.0')
    .addTag('market')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Adding some logger middleware as functionnal
  app.use(logger);
  app.enableCors();
  
  //Launch server
  await app.listen(3001);
}
bootstrap();
