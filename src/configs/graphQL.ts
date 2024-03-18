import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { formatError } from '../shared/Error/format-error';
import { GraphQLFormattedError } from 'graphql';

const graphQLConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  typePaths: ['./**/*.graphql'],
  path: '/graphql',
  playground: false,
  context: ({ req, res }) => ({ req, res }),
  installSubscriptionHandlers: true,
  csrfPrevention: true,
  formatError: (error : GraphQLFormattedError) => formatError(error),
};

export default graphQLConfig;
