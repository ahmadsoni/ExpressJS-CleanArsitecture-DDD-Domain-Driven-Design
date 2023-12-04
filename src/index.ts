import express, { type Request, type Response, type Application } from 'express'
import dotenv from 'dotenv'
import knex, { type Knex } from 'knex'
import knexConfig from '@/src/knexfile'
import bodyParser from 'body-parser'
import authMiddleware from '@/src/middleware/auth'
import { newCategoryRepository, newCouponRepository, newProductRepository, newUserRepository, newAuthRepository, newCartRepository } from '@/src/modules/repository'
import { newCategoryUseCase, newCouponUseCase, newProductUseCase, newUserUseCase, newAuthUseCase, newCartUseCase } from '@/src/modules/usecase'
import { newCategoryDelivery, newCouponDelivery, newProductDelivery, newUserDelivery, newAuthDelivery, newCartDelivery } from '@/src/modules/delivery'

dotenv.config()

const app: Application = express()
const port = 3000
const knexInstance: Knex = knex(knexConfig.development)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (_req: Request, res: Response) => {
  res.send({
    version: '1.0.0',
    author: 'Ahmad Shonhaji'
  })
})

const authRepository = newAuthRepository(knexInstance)
const authUseCase = newAuthUseCase(authRepository)
newAuthDelivery(app, authUseCase)

app.use(authMiddleware)

const categoriesRepository = newCategoryRepository(knexInstance)
const categoriesUseCase = newCategoryUseCase(categoriesRepository)
newCategoryDelivery(app, categoriesUseCase)

const couponsRepository = newCouponRepository(knexInstance)
const couponsUseCase = newCouponUseCase(couponsRepository)
newCouponDelivery(app, couponsUseCase)

const productsRepository = newProductRepository(knexInstance)
const productsUseCase = newProductUseCase(productsRepository)
newProductDelivery(app, productsUseCase)

const usersRepository = newUserRepository(knexInstance)
const usersUseCase = newUserUseCase(usersRepository)
newUserDelivery(app, usersUseCase)

const cartsRepository = newCartRepository(knexInstance)
const cartsUseCase = newCartUseCase(cartsRepository)
newCartDelivery(app, cartsUseCase)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
