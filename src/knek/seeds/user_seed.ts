import { type Knex } from 'knex'

export async function seed (knex: Knex): Promise<void> {
  await knex('users').del()

  await knex('users').insert([
    {
      id: 1,
      name: 'Ahmad shonhaji',
      email: 'soni@gmail.com',
      password: '123456',
      phone: '08123456789'
    }
  ])
};
