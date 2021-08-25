import { ApolloServer } from 'apollo-server';
import typeDefs from './src/schema/typeDefs';
import resolvers from './src/schema/resolvers';

const PORT = process.env.PORT || 8081;

async function startApolloServer() {
  const server = new ApolloServer({
    cors: {
      origin: '*',
      credentials: true
    },
    typeDefs,
    resolvers,
  });
  
  server.listen({port: PORT}, (): void => {
    console.log(`🚀 GraphQL-Server is running on http://localhost:${PORT}/graphql`);
  });
}

startApolloServer();
