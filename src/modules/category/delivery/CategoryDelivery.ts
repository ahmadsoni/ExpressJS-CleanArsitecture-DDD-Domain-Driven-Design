import { type Request, type Response } from 'express'
import type ICategoryDelivery from '@/src/modules/category/delivery/ICategoryDelivery'
import type { ICategoryRepository } from '@/src/modules/category/repository/ICategoryRepository'

export default class CategoryDelivery implements ICategoryDelivery {
  constructor (
    private readonly usecase: ICategoryRepository
  ) {
    this.usecase = usecase
  }

  getAllCategories = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.getAllCategories()
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch categories' })
    }
  }

  getCategoryById = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.getCategoryById(Number(req.params.id))
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch category' })
    }
  }

  createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.createCategory(req.body)
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to create category' })
    }
  }

  updateCategory = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.updateCategory(req.body)
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to update category' })
    }
  }

  deleteCategory = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.deleteCategory(Number(req.params.id))
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete category' })
    }
  }
}
