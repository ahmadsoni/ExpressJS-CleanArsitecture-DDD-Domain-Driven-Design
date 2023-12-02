import type CategoryRepository from '@/src/modules/category/repository/CategoryRepository'
import type CouponRepository from '@/src/modules/coupon/repository/CouponRepository'
import type ProductRepository from '@/src/modules/product/repository/ProductRepository'
import type UserRepository from '@/src/modules/user/repository/UserRepository'
import type AuthRepository from '@/src/modules/auth/repository/AuthRepository'
import CategoryUseCase from '@/src/modules/category/usecase/CategoryUseCase'
import CouponUseCase from '@/src/modules/coupon/usecase/CouponUseCase'
import ProductUseCase from '@/src/modules/product/usecase/ProductUseCase'
import UserUseCase from '@/src/modules/user/usecase/UserUseCase'
import AuthUseCase from '@/src/modules/auth/usecase/AuthUseCase'
const newCategoryUseCase = (repository: CategoryRepository): CategoryUseCase => {
  return new CategoryUseCase(repository)
}

const newCouponUseCase = (repository: CouponRepository): CouponUseCase => {
  return new CouponUseCase(repository)
}

const newProductUseCase = (repository: ProductRepository): ProductUseCase => {
  return new ProductUseCase(repository)
}
const newUserUseCase = (repository: UserRepository): UserUseCase => {
  return new UserUseCase(repository)
}
const newAuthUseCase = (repository: AuthRepository): AuthUseCase => {
  return new AuthUseCase(repository)
}
export { newCategoryUseCase, newCouponUseCase, newProductUseCase, newUserUseCase, newAuthUseCase }
