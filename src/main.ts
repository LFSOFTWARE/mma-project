import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptions } from './commom/filters/http-exception.filter';
import * as momentTimezone from 'moment-timezone';
import { TimeouInterceptor } from './commom/interceptors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TimeouInterceptor());
  app.useGlobalFilters(new AllExceptions());
  app.useGlobalPipes(new ValidationPipe());

  Date.prototype.toJSON = function (): any {
    return momentTimezone(this)
      .tz('America/Sao_Paulo')
      .format('YYYY-MM-DD HH:mm:ss.SSS');
  };

  await app.listen(3000);
}
bootstrap();
