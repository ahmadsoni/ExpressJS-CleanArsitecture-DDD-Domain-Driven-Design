import { type Request, type Response } from 'express'

interface ICategoryDelivery {
  getAllCategories: (_req: Request, res: Response) => Promise<void>
  getCategoryById: (req: Request, res: Response) => Promise<void>
  createCategory: (req: Request, res: Response) => Promise<void>
  updateCategory: (req: Request, res: Response) => Promise<void>
  deleteCategory: (req: Request, res: Response) => Promise<void>
}

export default ICategoryDelivery
