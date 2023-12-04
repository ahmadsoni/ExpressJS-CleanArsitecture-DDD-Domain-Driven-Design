import { type Knex } from 'knex'

export async function seed (knex: Knex): Promise<void> {
  await knex('categories').del()

  await knex('categories').insert([
    { id: 1, name: 'Database' },
    { id: 2, name: 'Frontend' },
    { id: 3, name: 'Backend' }
  ])
};
