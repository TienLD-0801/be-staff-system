import { formatError } from '@/shared/error/format-error';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLFormattedError } from 'graphql';

const graphQLConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  typePaths: ['./**/*.graphql'],
  path: '/graphql',
  playground: false,
  context: ({ req }) => ({ headers: req.headers }),
  installSubscriptionHandlers: true,
  csrfPrevention: true,
  formatError: (error: GraphQLFormattedError) => formatError(error),
};

export default graphQLConfig;
