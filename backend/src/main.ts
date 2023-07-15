import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const logger = new Logger('bootstrap');
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.setGlobalPrefix("api/v1")
  const config = new DocumentBuilder()
    .setTitle('NO COUNTRY - C12-32-M-NODE-REACT')
    .setDescription(
      'DOCUMENTACION SISTEMA DE ADMINISTRACION DE DE BUSQUEDA Y ADOPCION DE MASCOTAS',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
  logger.log(
    `API-SisAdmin Ready: Development on Line! on PORT: ${process.env.PORT}`,
  );
}
bootstrap();
