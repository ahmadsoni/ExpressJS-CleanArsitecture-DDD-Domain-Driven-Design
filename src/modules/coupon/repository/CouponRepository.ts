import { type Knex } from 'knex'
import { type ICouponRepository, type ICoupon } from '@/src/modules/coupon/repository/ICouponRepository'

export default class CouponRepository implements ICouponRepository {
  constructor (
    private readonly knek: Knex
  ) {
    this.knek = knek
  }

  async getAllCoupons (): Promise<ICoupon[]> {
    return await this.knek.select().table('coupons')
  }

  async getCouponById (id: number): Promise<ICoupon> {
    return await this.knek.select().table('coupons').where('id', id).first()
  }

  async createCoupon (coupon: ICoupon): Promise<ICoupon[]> {
    return await this.knek('coupons').insert(coupon).returning('*')
  }

  async updateCoupon (coupon: ICoupon): Promise<ICoupon[]> {
    return await this.knek('coupons').update(coupon).where('id', coupon.id).returning('*')
  }

  async deleteCoupon (id: number): Promise<ICoupon[]> {
    return await this.knek('coupons').delete().where('id', id).returning('*')
  }
}
