import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      
      /* Добавить сюда ведение локального лога всех исключений */
  
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;

      const message = 
        exception instanceof HttpException
          ? exception.message
          : 'Неизвестная ошибка';

      const stack = 
        exception instanceof HttpException
          ? exception.stack
          : 'Неизвестная ошибка';
  
      response.status(status).json({
        statusCode: status,
        message: message,
        /* stack: stack, */
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }