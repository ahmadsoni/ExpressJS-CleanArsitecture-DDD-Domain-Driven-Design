import { type Application } from 'express'
import type CategoryUseCase from '@/src/modules/category/usecase/CategoryUseCase'
import type CouponUseCase from '@/src/modules/coupon/usecase/CouponUseCase'
import type ProductUseCase from '@/src/modules/product/usecase/ProductUseCase'
import type UserUseCase from '@/src/modules/user/usecase/UserUseCase'
import type AuthUseCase from '@/src/modules/auth/usecase/AuthUseCase'
import type CartUseCase from '@/src/modules/cart/usecase/CartUseCase'
import CategoryDelivery from '@/src/modules/category/delivery/CategoryDelivery'
import CouponDelivery from '@/src/modules/coupon/delivery/CouponDelivery'
import ProductDelivery from '@/src/modules/product/delivery/ProductDelivery'
import UserDelivery from '@/src/modules/user/delivery/UserDelivery'
import AuthDelivery from '@/src/modules/auth/delivery/AuthDelivery'
import CartDelivery from '@/src/modules/cart/delivery/CartDelivery'

const newCategoryDelivery = (app: Application, usecase: CategoryUseCase): void => {
  const delivery = new CategoryDelivery(usecase)
  app.get('/categories', delivery.getAllCategories)
  app.get('/categories/:id', delivery.getCategoryById)
  app.post('/categories', delivery.createCategory)
  app.put('/categories', delivery.updateCategory)
  app.delete('/categories/:id', delivery.deleteCategory)
}
const newCouponDelivery = (app: Application, usecase: CouponUseCase): void => {
  const delivery = new CouponDelivery(usecase)
  app.get('/coupons', delivery.getAllCoupons)
  app.get('/coupons/:id', delivery.getCouponById)
  app.post('/coupons', delivery.createCoupon)
  app.put('/coupons', delivery.updateCoupon)
  app.delete('/coupons/:id', delivery.deleteCoupon)
}

const newProductDelivery = (app: Application, usecase: ProductUseCase): void => {
  const delivery = new ProductDelivery(usecase)
  app.get('/products', delivery.getAllProducts)
  app.get('/products/:id', delivery.getProductById)
  app.post('/products', delivery.createProduct)
  app.put('/products', delivery.updateProduct)
  app.delete('/products/:id', delivery.deleteProduct)
}

const newUserDelivery = (app: Application, usecase: UserUseCase): void => {
  const delivery = new UserDelivery(usecase)
  app.get('/users', delivery.getAllAccount)
  app.get('/users/:id', delivery.getAccountById)
  app.post('/users', delivery.createAccount)
  app.put('/users', delivery.updateAccount)
}

const newAuthDelivery = (app: Application, usecase: AuthUseCase): void => {
  const delivery = new AuthDelivery(usecase)
  app.post('/auth/login', delivery.login)
  app.post('/auth/register', delivery.register)
  app.post('/auth/logout', delivery.logout)
}

const newCartDelivery = (app: Application, usecase: CartUseCase): void => {
  const delivery = new CartDelivery(usecase)
  app.get('/cart/all', delivery.getAllCarts)
  app.get('/cart/:id', delivery.getCartById)
  app.put('/cart/:id', delivery.updateCart)
  app.delete('/cart/:id', delivery.deleteCart)
  app.post('/cart', delivery.addCart)
  app.delete('/cart', delivery.deleteAllCarts)
}
export { newCategoryDelivery, newCouponDelivery, newProductDelivery, newUserDelivery, newAuthDelivery, newCartDelivery }
