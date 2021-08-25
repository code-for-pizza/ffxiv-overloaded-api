import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './src/schema/typeDefs';
import resolvers from './src/schema/resolvers';
import http from 'http';

const PORT = process.env.PORT || 8081;

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
  
  const httpServer = http.createServer(app);
  httpServer.listen({port: PORT}, (): void => {
    console.log(`🚀GraphQL-Server is running on http://localhost:${PORT}/graphql`);
  });
}

startApolloServer();
