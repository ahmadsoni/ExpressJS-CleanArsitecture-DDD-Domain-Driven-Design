import { type Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema.createTable('coupons', (table) => {
    table.increments('id')
    table.string('code', 255).unique().notNullable()
    table.integer('description', 255).notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema.dropTable('coupons')
}
