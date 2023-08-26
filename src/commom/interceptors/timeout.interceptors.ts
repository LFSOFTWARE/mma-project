import { NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { timeout } from 'rxjs';

export class TimeouInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(timeout(10000));
  }
}
