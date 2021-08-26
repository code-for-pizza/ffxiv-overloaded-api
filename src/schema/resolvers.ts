import { stringify } from "querystring";
import knex from "../database";

export default {
  Query: {
    hello: (_: any, { name }: { name: string }) => {
      if (name) return `hello ${name}`;

      return "hello world!!!";
    },
    wishlistItems: async (_: any, { userID }: { userID: string }) => {
      const rows = await knex("tblwishlisteditems")
        .select("itemid")
        .where({ userid: userID });

      return rows.map((row) => row.itemid);
    },
  },
};
