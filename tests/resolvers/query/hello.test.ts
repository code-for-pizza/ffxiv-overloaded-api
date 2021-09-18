import faker from 'faker';
import { ApolloServer, gql } from 'apollo-server';
import typeDefs from '@root/schema/typeDefs';
import resolvers from '@root/schema/resolvers';

describe('hello resolver', () => {
  const mockServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  it('returns the correct string, given no name', async () => {
    // arrange
    const query = gql`
      query GetHello {
        hello
      }
    `;
    const expectedResult = 'hello world! ARE YOU WORKING OR NOT OH MY GOSH';

    // act
    const { data } = await mockServer.executeOperation({ query });

    // assert
    expect(data?.hello).toBe(expectedResult);
  });

  it('returns the correct string, given a name', async () => {
    // arrange
    const query = gql`
      query GetHello($name: String!) {
        hello(name: $name)
      }
    `;
    const name = faker.name.firstName();
    const expectedResult = `hello ${name}`;

    // act
    const { data } = await mockServer.executeOperation({
      query,
      variables: { name },
    });

    // assert
    expect(data?.hello).toBe(expectedResult);
  });
});
