import knex from '../../db';
import { UserWishlistedItem } from './types';

export default {
  Query: {
    hello: (_: undefined, { name }: { name: string }): string => {
      if (name) return `hello ${name}`;

      return 'hello world? ARE YOU WORKING OR NOT OH MY GOSH';
    },
    wishlistItems: async (
      _: undefined,
      { userID }: UserWishlistedItem
    ): Promise<number[]> => {
      const rows = await knex('tbl_wishlisted_items')
        .select('item_id')
        .where({ user_id: userID });

      return rows.map((row) => row.item_id);
    },
  },
  Mutation: {
    addWishlistItem: async (
      _: undefined,
      { userID, itemID }: UserWishlistedItem
    ): Promise<number> => {
      try {
        await knex.transaction(async (trx) => {
          await trx('tbl_wishlisted_items')
            .insert({
              user_id: userID,
              item_id: itemID,
            })
            .transacting(trx);
        });
        return itemID;
      } catch (error) {
        console.error(
          `Error occurred while adding a new wishlist item: ${error}`
        );
        throw error;
      }
    },
  },
};
