import { type Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('products', function (table) {
      table.increments('id')
      table.string('title', 255).notNullable()
      table.string('description', 255).notNullable()
      table.string('image', 255).notNullable()
      table.decimal('price', 6, 2).notNullable()
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('products')
}
