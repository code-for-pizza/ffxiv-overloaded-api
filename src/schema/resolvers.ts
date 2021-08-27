import knex from '@root/database';
import { UserWishlistedItem } from './types';

export default {
  Query: {
    hello: (_: undefined, { name }: { name: string }): string => {
      if (name) return `hello ${name}`;

      return 'hello world!!!';
    },
    wishlistItems: async (
      _: undefined,
      { userID }: UserWishlistedItem
    ): Promise<number[]> => {
      const rows = await knex('tblwishlisteditems')
        .select('itemid')
        .where({ userid: userID });

      return rows.map((row) => row.itemid);
    },
  },
  Mutation: {
    addWishlistItem: async (
      _: undefined,
      { userID, itemID }: UserWishlistedItem
    ): Promise<number> => {
      try {
        await knex.transaction(async (trx) => {
          await trx('tblwishlisteditems')
            .insert({
              userid: userID,
              itemid: itemID,
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
