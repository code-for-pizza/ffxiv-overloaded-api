import { ApolloServer } from 'apollo-server';
import typeDefs from '@root/schema/typeDefs';
import resolvers from '@root/schema/resolvers';

export const mockServer = new ApolloServer({
  typeDefs,
  resolvers,
});
