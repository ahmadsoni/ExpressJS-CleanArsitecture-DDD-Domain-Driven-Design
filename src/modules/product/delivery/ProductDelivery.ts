import { type Request, type Response } from 'express'
import type IProductDelivery from '@/src/modules/product/delivery/IProductDelivery'
import type { IProductRepository } from '@/src/modules/product/repository/IProductRepository'

export default class ProductDelivery implements IProductDelivery {
  constructor (
    private readonly usecase: IProductRepository
  ) {
    this.usecase = usecase
  }

  getAllProducts = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.getAllProducts()
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch products' })
    }
  }

  getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.getProductById(Number(req.params.id))
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch product ' })
    }
  }

  createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.createProduct(req.body)
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to create product ' })
    }
  }

  updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.updateProduct(req.body)
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to update product' })
    }
  }

  deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.deleteProduct(Number(req.params.id))
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete product' })
    }
  }
}
