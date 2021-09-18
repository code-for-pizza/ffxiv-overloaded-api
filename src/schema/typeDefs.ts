import { gql } from 'apollo-server';

export default gql`
  type Query {
    hello(name: String): String
    wishlistItems(userID: Int!): [Int]
  }

  type Mutation {
    addWishlistItem(userID: Int!, itemID: Int!): Int
  }
`;
