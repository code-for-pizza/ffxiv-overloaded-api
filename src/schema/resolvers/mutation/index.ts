import { addWishlistItem } from '@root/services/WishlistItemService';
import { UserWishlistedItem } from '../types';

const Mutation = {
  addWishlistItem: async (
    _: undefined,
    { userID, itemID }: UserWishlistedItem
  ): Promise<number> => {
    return await addWishlistItem(userID, itemID);
  },
};

export default Mutation;
