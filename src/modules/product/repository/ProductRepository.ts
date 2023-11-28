import { type Knex } from 'knex'
import type { IProduct, IProductRepository } from '@/src/modules/product/repository/IProductRepository'

export default class ProductRepository implements IProductRepository {
  constructor (
    private readonly knek: Knex
  ) {
    this.knek = knek
  }

  async getAllProducts (): Promise<IProduct[]> {
    return await this.knek.select().table('products')
  }

  async getProductById (id: number): Promise<IProduct> {
    return await this.knek.select().table('products').where('id', id).first()
  }

  async createProduct (product: IProduct): Promise<IProduct[]> {
    return await this.knek('products').insert(product).returning('*')
  }

  async updateProduct (product: IProduct): Promise<IProduct[]> {
    return await this.knek('products').update(product).where('id', product.id).returning('*')
  }

  async deleteProduct (id: number): Promise<IProduct[]> {
    return await this.knek('products').delete().where('id', id).returning('*')
  }
}
