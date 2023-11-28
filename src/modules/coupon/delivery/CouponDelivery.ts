import { type Request, type Response } from 'express'
import type ICouponDelivery from '@/src/modules/coupon/delivery/ICouponDelivery'
import type { ICouponRepository } from '@/src/modules/coupon/repository/ICouponRepository'

export default class CouponDelivery implements ICouponDelivery {
  constructor (
    private readonly usecase: ICouponRepository
  ) {
    this.usecase = usecase
  }

  getAllCoupons = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.getAllCoupons()
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch coupon categories' })
    }
  }

  getCouponById = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.getCouponById(Number(req.params.id))
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch coupon ' })
    }
  }

  createCoupon = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.createCoupon(req.body)
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to create coupon ' })
    }
  }

  updateCoupon = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.updateCoupon(req.body)
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to update coupon' })
    }
  }

  deleteCoupon = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.deleteCoupon(Number(req.params.id))
      res.json({
        code: 200,
        data,
        message: 'Success delete coupon'
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete coupon ' })
    }
  }
}
