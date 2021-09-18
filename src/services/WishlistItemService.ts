import knex from '~/db';

interface Row {
  item_id: number;
  user_id: number;
}

export const getWishlistItemsByUserID = async (
  userID: number
): Promise<number[]> => {
  const sql = `
      SELECT
        item_id
      FROM tbl_wishlisted_items
      WHERE
        user_id = ?
    `;

  const result = await knex.raw(sql, [userID]);

  return result.rows.map((row: Row) => row.item_id);
};

export const addWishlistItem = async (
  userID: number,
  itemID: number
): Promise<number> => {
  const sql = `
    INSERT INTO tbl_wishlisted_items (user_id, item_id)
    VALUES (?, ?)
  `;

  try {
    await knex.transaction(async (trx) => {
      await trx.raw(sql, [userID, itemID]);
    });
  } catch (error) {
    console.error(`Error occurred while adding a new wishlist item: ${error}`);
    throw error;
  }

  return itemID;
};
