import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);

    const response = exception.getResponse();

    if (typeof response === 'object') {
      const message = (<any>response)?.error;
      if (message) {
        exception.message = message;
      }
    }

    return exception;
  }
}
