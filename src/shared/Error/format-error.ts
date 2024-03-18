import { GraphQLFormattedError } from 'graphql';

export const formatError = (error: GraphQLFormattedError): any => {
  const formatError: any = error.extensions.originalError;

  if (formatError) {
    console.log();
    const isArray = Array.isArray(formatError.message);
    const convertObj = {
      ...formatError,
      message: isArray ? formatError.message[0] : formatError.message,
    };
    return convertObj;
  }
  return formatError;
};
