import { type Knex } from 'knex'

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { id: 1, title: 'title 1', description: 'tech 1', image: 'https://source.unsplash.com/category/nature/200x300', price: 10000 },
    { id: 2, title: 'title 2', description: 'tech 2', image: 'https://source.unsplash.com/category/nature/200x300', price: 20000 },
    { id: 3, title: 'title 3', description: 'tech 3', image: 'https://source.unsplash.com/category/nature/200x300', price: 30000 }
  ])
};
