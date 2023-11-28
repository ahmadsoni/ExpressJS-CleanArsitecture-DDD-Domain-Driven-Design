import { type ICoupon, type ICouponRepository } from '@/src/modules/coupon/repository/ICouponRepository'

export default class CouponUseCase {
  constructor (
    private readonly repository: ICouponRepository
  ) {
    this.repository = repository
  }

  async getAllCoupons (): Promise<ICoupon[]> {
    return await this.repository.getAllCoupons()
  }

  async getCouponById (id: number): Promise<ICoupon> {
    return await this.repository.getCouponById(id)
  }

  async createCoupon (coupon: ICoupon): Promise<ICoupon[]> {
    return await this.repository.createCoupon(coupon)
  }

  async updateCoupon (coupon: ICoupon): Promise<ICoupon[]> {
    return await this.repository.updateCoupon(coupon)
  }

  async deleteCoupon (id: number): Promise<ICoupon[]> {
    return await this.repository.deleteCoupon(id)
  }
}
