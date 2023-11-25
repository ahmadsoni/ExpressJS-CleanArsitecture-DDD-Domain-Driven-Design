import { type Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('users', function (table) {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('email', 255).notNullable()
      table.string('password', 255).notNullable()
      table.string('phone', 15).notNullable()
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('products')
}
