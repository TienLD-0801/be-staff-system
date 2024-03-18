import { GraphQLFormattedError } from 'graphql';
import _ from 'lodash';

export const formatError = (error: GraphQLFormattedError): any => {
  const formatError: any = error.extensions.originalError;
  if (formatError) {
    const convertObj = {
      ...formatError,
      message: _.get(formatError, 'message').join(''),
    };
    return convertObj;
  }
  return formatError;
};
