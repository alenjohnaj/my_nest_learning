import {
    Catch,
    ExceptionFilter,
    HttpException,
    ArgumentsHost,
    HttpStatus,
  } from '@nestjs/common';
  
  export class CustomErrorResponse {
    constructor(
      public statusCode: number,
      public success: boolean,
      public error: boolean,
      public message: string | object,
    ) {}
  }
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const status = exception.getStatus();
      const exceptionMessage = exception.getResponse()
      const customErrorResponse = new CustomErrorResponse(
        status,
        false,
        true,
        exception.getResponse() || 'Internal Server Error',
      );
  
      response.status(status).json(customErrorResponse);
    }
  }