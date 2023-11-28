import CategoryRepository from '@/src/modules/category/repository/CategoryRepository'
import { type Knex } from 'knex'
import CouponRepository from '@/src/modules/coupon/repository/CouponRepository'
import ProductRepository from '@/src/modules/product/repository/ProductRepository'
import UserRepository from '@/src/modules/user/repository/UserRepository'
const newCategoryRepository = (knek: Knex): CategoryRepository => {
  return new CategoryRepository(knek)
}

const newCouponRepository = (knek: Knex): CouponRepository => {
  return new CouponRepository(knek)
}

const newProductRepository = (knek: Knex): ProductRepository => {
  return new ProductRepository(knek)
}

const newUserRepository = (knek: Knex): UserRepository => {
  return new UserRepository(knek)
}

export { newCategoryRepository, newCouponRepository, newProductRepository, newUserRepository }
