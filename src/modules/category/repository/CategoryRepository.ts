import { type Knex } from 'knex'
import { type ICategoryRepository, type ICategory } from '@/src/modules/category/repository/ICategoryRepository'

export default class CategoryRepository implements ICategoryRepository {
  constructor (
    private readonly knek: Knex
  ) {
    this.knek = knek
  }

  async getAllCategories (): Promise<ICategory[]> {
    return await this.knek.select().table('categories')
  }

  async getCategoryById (id: number): Promise<ICategory> {
    return await this.knek.select().table('categories').where('id', id).first()
  }

  async createCategory (category: ICategory): Promise<ICategory[]> {
    return await this.knek('categories').insert(category).returning('*')
  }

  async updateCategory (category: ICategory): Promise<ICategory[]> {
    return await this.knek('categories').update(category).where('id', category.id).returning('*')
  }

  async deleteCategory (id: number): Promise<ICategory[]> {
    return await this.knek('categories').delete().where('id', id).returning('*')
  }
}
