import { type Request, type Response } from 'express'
import type ICartDelivery from '@/src/modules/cart/delivery/ICartDelivery'
import type { ICartRepository } from '@/src/modules/cart/repository/ICartRepository'
import { type JwtPayload } from 'jsonwebtoken'

export default class CartDelivery implements ICartDelivery {
  constructor (
    private readonly usecase: ICartRepository
  ) {
    this.usecase = usecase
  }

  getAllCarts = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = (req.user as JwtPayload).id
      const data = await this.usecase.getAllCarts(id)
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch carts' })
    }
  }

  getCartById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = (req.user as JwtPayload).id
      const data = await this.usecase.getCartById(id)
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch cart' })
    }
  }

  addCart = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = {
        user_id: (req.user as JwtPayload).id,
        product_id: req.body.product_id,
        quantity: req.body.quantity
      }
      const data = await this.usecase.addCart(body)
      res.json({
        code: 200,
        data,
        message: 'Cart added Successfully'
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to add cart' })
    }
  }

  updateCart = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = {
        user_id: (req.user as JwtPayload).id,
        product_id: req.body.product_id,
        quantity: req.body.quantity
      }
      const data = await this.usecase.updateCart(Number(req.params.id), body)
      res.json({
        code: 200,
        data,
        message: 'Cart updated Successfully'
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to update cart' })
    }
  }

  deleteCart = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.deleteCart(Number(req.params.id))
      res.json({
        code: 200,
        data,
        message: 'Cart deleted Successfully'
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete cart' })
    }
  }

  deleteAllCarts = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = (req.user as JwtPayload).id
      const data = await this.usecase.deleteAllCarts(id)
      res.json({
        code: 200,
        data,
        message: 'All carts deleted'
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete carts' })
    }
  }
}
