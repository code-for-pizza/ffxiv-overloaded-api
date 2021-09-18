import { gql } from 'apollo-server';
import faker from 'faker';
import { mockServer } from '@testRoot/utils/mockServer';
import { getWishlistItemsByUserID } from '@root/services/WishlistItemService';
import {
  clearDatabase,
  closeDatabase,
  initializeDatabase,
} from '@testRoot/utils/database';

describe('addWishlistItem resolver', () => {
  const mockItemList = Array(4)
    .fill(0)
    .map(() => faker.datatype.number());

  const mockUserID = faker.datatype.number();

  const testUserWishlistItems = {
    [mockUserID]: mockItemList,
  };

  beforeEach(
    async () =>
      await initializeDatabase({
        userWishlistItemIDs: testUserWishlistItems,
      })
  );

  afterEach(async () => await clearDatabase());
  afterAll(async () => await closeDatabase());

  it('saves the item as a wishlist item for a user', async () => {
    // arrange
    const newItemID = faker.datatype.number();
    const expectedItemIDs = [...mockItemList, newItemID];

    const query = gql`
      mutation AddWishlitItem($userID: Int!, $itemID: Int!) {
        addWishlistItem(userID: $userID, itemID: $itemID)
      }
    `;

    // act
    await mockServer.executeOperation({
      query,
      variables: { userID: mockUserID, itemID: newItemID },
    });

    // assert
    const actualItemIDs = await getWishlistItemsByUserID(mockUserID);

    expect(actualItemIDs).toEqual(expectedItemIDs);
  });

  it('throws error when wishlisting an already wishlisted item', async () => {
    // arrange
    const newItemID = faker.datatype.number();

    const query = gql`
      mutation AddWishlitItem($userID: Int!, $itemID: Int!) {
        addWishlistItem(userID: $userID, itemID: $itemID)
      }
    `;

    // act
    await mockServer.executeOperation({
      query,
      variables: { userID: mockUserID, itemID: newItemID },
    });
    const { errors } = await mockServer.executeOperation({
      query,
      variables: { userID: mockUserID, itemID: newItemID },
    });

    expect(errors?.length).toEqual(1);
  });
});
