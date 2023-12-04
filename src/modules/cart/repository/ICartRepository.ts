interface ICart {
  id: number
  user_id: number
  product_id: number
  quantity: number
}

interface ICartProps {
  user_id: number
  product_id: number
  quantity: number
}
interface ICartRepository {
  getAllCarts: (userId: number) => Promise<ICart[]>
  getCartById: (id: number) => Promise<ICart>
  addCart: (cart: ICartProps) => Promise<ICart[]>
  updateCart: (id: number, cart: ICartProps) => Promise<ICart[]>
  deleteCart: (id: number) => Promise<ICart[]>
  deleteAllCarts: (userId: number) => Promise<ICart[]>
}

export type { ICartRepository, ICart, ICartProps }
