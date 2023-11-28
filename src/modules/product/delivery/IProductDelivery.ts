import { type Request, type Response } from 'express'

interface IProductDelivery {
  getAllProducts: (_req: Request, res: Response) => Promise<void>
  getProductById: (req: Request, res: Response) => Promise<void>
  createProduct: (req: Request, res: Response) => Promise<void>
  updateProduct: (req: Request, res: Response) => Promise<void>
  deleteProduct: (req: Request, res: Response) => Promise<void>
}

export default IProductDelivery
