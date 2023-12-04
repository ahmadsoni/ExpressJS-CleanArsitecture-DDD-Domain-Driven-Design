import type { ICartRepository, ICart, ICartProps } from '@/src/modules/cart/repository/ICartRepository'

export default class CartUseCase {
  constructor (
    private readonly repository: ICartRepository
  ) {
    this.repository = repository
  }

  async getAllCarts (userId: number): Promise<ICart[]> {
    return await this.repository.getAllCarts(userId)
  }

  async getCartById (id: number): Promise<ICart> {
    return await this.repository.getCartById(id)
  }

  async addCart (cart: ICartProps): Promise<ICart[]> {
    return await this.repository.addCart(cart)
  }

  async updateCart (id: number, cart: ICartProps): Promise<ICart[]> {
    return await this.repository.updateCart(id, cart)
  }

  async deleteCart (id: number): Promise<ICart[]> {
    return await this.repository.deleteCart(id)
  }

  async deleteAllCarts (userId: number): Promise<ICart[]> {
    return await this.repository.deleteAllCarts(userId)
  }
}
