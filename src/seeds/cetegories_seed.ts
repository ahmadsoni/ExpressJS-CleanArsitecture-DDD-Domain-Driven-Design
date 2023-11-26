import { type Knex } from 'knex'

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('categories').del()

  // Inserts seed entries
  await knex('categories').insert([
    { id: 1, name: 'Database' },
    { id: 2, name: 'Frontend' },
    { id: 3, name: 'Backend' }
  ])
};
