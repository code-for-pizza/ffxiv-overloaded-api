import knex from '~/db';
import { UserWishlistedItem } from '../types';

const Mutation = {
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
};

export default Mutation;
