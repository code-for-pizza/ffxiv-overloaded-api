import { gql } from 'apollo-server';
import faker from 'faker';
import { mockServer } from '@testRoot/utils/mockServer';
import { clearDatabase, initializeDatabase } from '@testRoot/utils/database';

describe('wishlistItems resolver', () => {
  const mockItemList = Array(4)
    .fill(0)
    .map(() => faker.datatype.number());

  const mockUserID = faker.datatype.number();

  const testUserWishlistItems = {
    [mockUserID]: mockItemList,
  };

  beforeAll(
    async () =>
      await initializeDatabase({
        userWishlistItemIDs: testUserWishlistItems,
      })
  );
  afterAll(async () => await clearDatabase());

  it('returns the correct item list given a userID', async () => {
    // arrange
    const query = gql`
      query GetItems($userID: Int!) {
        wishlistItems(userID: $userID)
      }
    `;

    // act
    const { data } = await mockServer.executeOperation({
      query,
      variables: { userID: mockUserID },
    });

    // assert
    expect(data?.wishlistItems).toEqual(mockItemList);
  });
});
