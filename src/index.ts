import express, { type Request, type Response, type Application } from 'express'
import dotenv from 'dotenv'
import knex, { type Knex } from 'knex'
import knexConfig from '@/src/knexfile'
import bodyParser from 'body-parser'
import { hashPassword, comparePassword, generateJWT } from '@/src/utils'
import authMiddleware from '@/src/middleware/auth'
import { newCategoryRepository, newCouponRepository, newProductRepository, newUserRepository } from '@/src/modules/repository'
import { newCategoryUseCase, newCouponUseCase, newProductUseCase, newUserUseCase } from '@/src/modules/usecase'
import { newCategoryDelivery, newCouponDelivery, newProductDelivery, newUserDelivery } from '@/src/modules/delivery'

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

app.post('/auth/login', async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  await knexInstance.select()
    .where('email', email)
    .table('users').then((data) => {
      if (!data.length) {
        return res.status(400).json({ error: 'Email not found' })
      }

      if (comparePassword(data[0].password, password) || data[0].email !== email) {
        return res.status(400).json({ error: 'Password or Email not match' })
      }
      res.send({
        accessToken: generateJWT({ id: data[0].id, email: data[0].email }),
        message: 'Success'
      })
    }).catch((error) => {
      res.status(500).json({ error: `Database insertion failed: ${error.message}` })
    })
})

app.post('/auth/register', async (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  await knexInstance.table('users').insert({
    name,
    email,
    password: hashPassword(password),
    phone
  }).then((data) => {
    res.send({
      data: {
        id: data[0],
        name,
        email,
        phone,
        accessToken: generateJWT({ id: data[0], email })
      },
      message: 'Success'
    })
  }).catch((error) => {
    res.status(500).json({ error: `Database insertion failed: ${error.message}` })
  })
})

app.use(authMiddleware)

// catergory domain
const categoriesRepository = newCategoryRepository(knexInstance)
const categoriesUseCase = newCategoryUseCase(categoriesRepository)
newCategoryDelivery(app, categoriesUseCase)

// coupon domain
const couponsRepository = newCouponRepository(knexInstance)
const couponsUseCase = newCouponUseCase(couponsRepository)
newCouponDelivery(app, couponsUseCase)

// product domain
const productsRepository = newProductRepository(knexInstance)
const productsUseCase = newProductUseCase(productsRepository)
newProductDelivery(app, productsUseCase)

// user routes
const usersRepository = newUserRepository(knexInstance)
const usersUseCase = newUserUseCase(usersRepository)
newUserDelivery(app, usersUseCase)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
