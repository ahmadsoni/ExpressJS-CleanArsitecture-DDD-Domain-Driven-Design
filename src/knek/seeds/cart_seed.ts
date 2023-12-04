import { type Knex } from 'knex'

export async function seed (knex: Knex): Promise<void> {
  await knex('carts').del()

  await knex('carts').insert([
    { id: 1, user_id: 1, product_id: 1, quantity: 1 },
    { id: 2, user_id: 1, product_id: 1, quantity: 4 },
    { id: 3, user_id: 1, product_id: 1, quantity: 5 }
  ])
};
