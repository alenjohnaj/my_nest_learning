import { HttpException, HttpStatus, CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof HttpException) {
          // If the error is an HttpException, forward it as-is
          return throwError(() => err);
        } else {
          // Handle other types of errors
          if (err instanceof MyCustomError) {
            // If it's a custom error of type MyCustomError, throw a custom exception
            const message = 'Something went wrong with MyCustomError';
            return throwError(() => new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR));
          } else {
            // For all other types of errors, throw a generic BadGatewayException
            return throwError(() => new HttpException('Bad Gateway', HttpStatus.BAD_GATEWAY));
          }
        }
      }),
    );
  }
}

// Custom error class example
class MyCustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyCustomError';
  }
}
