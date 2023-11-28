import { type Knex } from 'knex'

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('coupons').del()

  // Inserts seed entries
  await knex('coupons').insert([
    { id: 1, code: 'AKHIRBULAN', description: 'kupon akhir tahun cuyy' },
    { id: 2, code: 'AWALBULAN', description: 'kupon awal tahun cuyy' },
    { id: 3, code: 'TENGAHBULAN', description: 'kupon tengah tahun cuyy' }
  ])
};
