import { type Request, type Response } from 'express'

interface ICartDelivery {
  getAllCarts: (req: Request, res: Response) => Promise<void>
  getCartById: (req: Request, res: Response) => Promise<void>
  addCart: (req: Request, res: Response) => Promise<void>
  updateCart: (req: Request, res: Response) => Promise<void>
  deleteCart: (req: Request, res: Response) => Promise<void>
  deleteAllCarts: (req: Request, res: Response) => Promise<void>
}

export default ICartDelivery
