import knex from "../database";
import { UserWishlistedItem } from "./types";

export default {
  Query: {
    hello: (_: any, { name }: { name: string }) => {
      if (name) return `hello ${name}`;

      return "hello world!!!";
    },
    wishlistItems: async (_: any, { userID }: UserWishlistedItem) => {
      const rows = await knex("tblwishlisteditems")
        .select("itemid")
        .where({ userid: userID });

      return rows.map((row) => row.itemid);
    },
  },
  Mutation: {
    addWishlistItem: async (_: any, { userID, itemID }: UserWishlistedItem) => {
      try {
        await knex.transaction(async (trx) => {
          await trx("tblwishlisteditems")
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
        console.log(typeof error);
        throw error;
      }
    },
  },
};
