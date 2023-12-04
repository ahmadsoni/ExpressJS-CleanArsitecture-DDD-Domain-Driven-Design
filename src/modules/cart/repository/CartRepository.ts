import { type Knex } from 'knex'
import type { ICartRepository, ICart, ICartProps } from '@/src/modules/cart/repository/ICartRepository'

export default class CartRepository implements ICartRepository {
  constructor (
    private readonly knek: Knex
  ) {
    this.knek = knek
  }

  async getAllCarts (userId: number): Promise<ICart[]> {
    return await this.knek.select().table('carts').where('user_id', userId)
  }

  async getCartById (id: number): Promise<ICart> {
    return await this.knek.select().table('carts').where('id', id).first()
  }

  async addCart (cart: ICartProps): Promise<ICart[]> {
    return await this.knek('carts').insert(cart).returning('*')
  }

  async updateCart (id: number, cart: ICartProps): Promise<ICart[]> {
    return await this.knek('carts').update(cart).where('id', id).returning('*')
  }

  async deleteCart (id: number): Promise<ICart[]> {
    return await this.knek('carts').delete().where('id', id).returning('*')
  }

  async deleteAllCarts (userId: number): Promise<ICart[]> {
    return await this.knek('carts').delete().where('user_id', userId).returning('*')
  }
}
