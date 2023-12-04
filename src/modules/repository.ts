import CategoryRepository from '@/src/modules/category/repository/CategoryRepository'
import { type Knex } from 'knex'
import CouponRepository from '@/src/modules/coupon/repository/CouponRepository'
import ProductRepository from '@/src/modules/product/repository/ProductRepository'
import UserRepository from '@/src/modules/user/repository/UserRepository'
import AuthRepository from '@/src/modules/auth/repository/AuthRepository'
import CartRepository from '@/src/modules/cart/repository/CartRepository'

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

const newAuthRepository = (knek: Knex): AuthRepository => {
  return new AuthRepository(knek)
}

const newCartRepository = (knek: Knex): CartRepository => {
  return new CartRepository(knek)
}
export { newCategoryRepository, newCouponRepository, newProductRepository, newUserRepository, newAuthRepository, newCartRepository }
