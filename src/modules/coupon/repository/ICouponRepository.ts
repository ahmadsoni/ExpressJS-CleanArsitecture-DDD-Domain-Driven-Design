interface ICoupon {
  id: string
  code: string
  description: string
}

interface ICouponRepository {
  getAllCoupons: () => Promise<ICoupon[]>
  getCouponById: (id: number) => Promise<ICoupon>
  createCoupon: (coupon: ICoupon) => Promise<ICoupon[]>
  updateCoupon: (coupon: ICoupon) => Promise<ICoupon[]>
  deleteCoupon: (id: number) => Promise<ICoupon[]>
}

export type { ICoupon, ICouponRepository }
