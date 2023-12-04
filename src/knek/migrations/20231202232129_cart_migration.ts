import { type Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema.createTable('carts', (table) => {
    table.increments('id')
    table.integer('user_id').unsigned().notNullable()
    table.integer('product_id').unsigned().notNullable()
    table.decimal('quantity').notNullable()
    table.foreign('user_id').references('id').inTable('users')
    table.foreign('product_id').references('id').inTable('products')
  })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema.dropTable('carts')
}
