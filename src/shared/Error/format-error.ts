import { HttpStatus } from '@nestjs/common';
import { GraphQLFormattedError } from 'graphql';

export const formatError = (error: GraphQLFormattedError): any => {
  let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  if (
    error.extensions &&
    error.extensions.exception &&
    error.extensions.exception['status']
  ) {
    statusCode = error.extensions.exception['status'];
  }

  const message: any = error.message;
  // In case of GRAPHQL_VALIDATION_FAILED -> format output
  if (typeof message === 'object') {
    let msgErr: string = message['message'];
    if (!msgErr) {
      if (statusCode === HttpStatus.UNAUTHORIZED) {
        msgErr = 'Unauthorized !';
      } else if (statusCode === HttpStatus.FORBIDDEN) {
        msgErr = 'Forbidden !';
      } else {
        msgErr = 'System error !';
      }
    }
    return {
      error: message['error'],
      message: msgErr,
    };
  } else {
    // Invalid request param
    let code = error.extensions.code;
    if (
      message.indexOf('Variable') > -1 &&
      (message.indexOf('was not provided') > -1 ||
        message.indexOf('got invalid value') > -1)
    ) {
      code = 'GRAPHQL_VALIDATION_FAILED';
    }

    return {
      error: code,
      message: message,
    };
  }
};
