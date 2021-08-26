import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/typeDefs";
import resolvers from "./schema/resolvers";

const PORT = process.env.PORT || 3001;

async function startApolloServer() {
  const server = new ApolloServer({
    cors: {
      origin: "*",
      credentials: true,
    },
    typeDefs,
    resolvers,
  });

  server.listen({ port: PORT }, (): void => {
    console.log(
      `🚀 GraphQL-Server is running on http://localhost:${PORT}/graphql`
    );
  });
}

startApolloServer();
