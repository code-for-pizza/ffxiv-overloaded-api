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
