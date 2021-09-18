/* eslint-disable @typescript-eslint/no-non-null-assertion */
import faker from 'faker';
import knex from '~/db';

interface Options {
  /** Option to hardcode itemIDs */
  userWishlistItemIDs?: {
    [userID: string]: number[];
  };
}

export const initializeDatabase = async ({
  userWishlistItemIDs,
}: Options = {}): Promise<void> => {
  const mockUserID = 1;

  /** generate mock wishlist items*/
  let wishlistItemRows: string[] = [];

  if (userWishlistItemIDs) {
    Object.keys(userWishlistItemIDs).forEach((userID) => {
      const rows = generateWishlistItemsFromList(
        Number(userID),
        userWishlistItemIDs[userID]!
      );

      wishlistItemRows = [...wishlistItemRows, ...rows];
    });
  } else {
    wishlistItemRows = generateWishlistItems(mockUserID, 4);
  }
  const mockRows = [...wishlistItemRows];

  const sql = `
    INSERT INTO tbl_wishlisted_items (user_id, item_id)
    VALUES
      ${mockRows.join(', ')}
  `;

  await knex.transaction(async (trx) => await trx.raw(sql));
};

export const clearDatabase = async (): Promise<void> => {
  const sql = `
    DELETE FROM tbl_wishlisted_items
  `;

  await knex.transaction(async (trx) => await trx.raw(sql));

  knex.destroy();
};

const generateWishlistItems = (userID: number, itemCount: number): string[] => {
  return Array(itemCount)
    .fill(0)
    .map(() => faker.fake(`(${userID}, {{datatype.number}})`));
};

const generateWishlistItemsFromList = (
  userID: number,
  itemIDs: number[]
): string[] => itemIDs.map((itemID) => `(${userID}, ${itemID})`);
