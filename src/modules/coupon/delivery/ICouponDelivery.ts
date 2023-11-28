import { type Request, type Response } from 'express'

interface ICouponDelivery {
  getAllCoupons: (_req: Request, res: Response) => Promise<void>
  getCouponById: (req: Request, res: Response) => Promise<void>
  createCoupon: (req: Request, res: Response) => Promise<void>
  updateCoupon: (req: Request, res: Response) => Promise<void>
  deleteCoupon: (req: Request, res: Response) => Promise<void>
}

export default ICouponDelivery
