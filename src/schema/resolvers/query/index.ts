import { getWishlistItemsByUserID } from '@root/services/WishlistItemService';
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
    return await getWishlistItemsByUserID(userID);
  },
};

export default Query;
