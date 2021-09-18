import knex from '~/db';
import { UserWishlistedItem } from '../types';

const Query = {
  hello: (_: undefined, { name }: { name: string }): string => {
    if (name) return `hello ${name}`;

    return 'hello world! ARE YOU WORKING OR NOT OH MY GOSH';
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
};

export default Query;
