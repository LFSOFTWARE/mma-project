import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptions } from './commom/filters/http-exception.filter';
import * as momentTimezone from 'moment-timezone';
import { TimeouInterceptor } from './commom/interceptors';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TimeouInterceptor());
  app.useGlobalFilters(new AllExceptions());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('API for MMA project')
    .setDescription('This APi provides an crud for MMA project.')
    .setVersion('1.0')
    .addTag('MMA')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  Date.prototype.toJSON = function (): any {
    return momentTimezone(this)
      .tz('America/Sao_Paulo')
      .format('YYYY-MM-DD HH:mm:ss.SSS');
  };

  await app.listen(3000);
}
bootstrap();
