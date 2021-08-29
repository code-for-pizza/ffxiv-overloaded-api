import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable('tbl_wishlisted_items');

  if (!exists)
    return knex.schema.createTable('tbl_wishlisted_items', (table) => {
      table.integer('user_id').notNullable().index();
      table.integer('item_id').notNullable().index();
      table.unique(['user_id', 'item_id']);
    });
}

export async function down(): Promise<void> {
  return;
}
