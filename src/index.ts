import express, { type Request, type Response, type Application } from 'express'
import dotenv from 'dotenv'
import knex, { type Knex } from 'knex'
import knexConfig from '@/src/knexfile'
import bodyParser from 'body-parser'
import { hashPassword, comparePassword, generateJWT } from '@/src/utils'
import authMiddleware from '@/src/middleware/auth'
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
app.get('/products', async (_req: Request, res: Response) => {
  try {
    const products = await knexInstance.table('products')
    res.send({
      data: products
    })
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch products' })
  }
})

app.post('/products', async (req: Request, res: Response) => {
  const { title, description, image, price } = req.body

  if (!title || !description || !image || !price) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  await knexInstance.table('products').insert({
    title,
    description,
    price,
    image
  }).then(() => {
    res.send({
      data: [],
      message: 'Success'
    })
  }).catch((error) => {
    res.status(500).json({ error: `Database insertion failed: ${error.message}` })
  })
})

app.delete('/products/:id', async (req: Request, res: Response) => {
  await knexInstance.table('products').where('id', req.params.id).del().then((data) => {
    res.send({
      data,
      message: 'Success'
    })
  })
})

// user routes
app.get('/users', async (_req: Request, res: Response) => {
  await knexInstance.select().table('users').then((data) => {
    res.send({
      data: {
        name: data[0].name,
        email: data[0].email,
        phone: data[0].phone
      }
    })
  })
})

app.delete('/users/:id', async (req: Request, res: Response) => {
  await knexInstance.table('users').where('id', req.params.id).del().then((data) => {
    res.send({
      data,
      message: 'Success'
    })
  })
})

app.put('/users/:id', async (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  await knexInstance.table('users').where('id', req.params.id).update({
    name,
    email,
    password,
    phone
  }).then(() => {
    res.send({
      data: [],
      message: 'Success'
    })
  }).catch((error) => {
    res.status(500).json({ error: `Database insertion failed: ${error.message}` })
  })
})
// catergory domain
app.get('/categories', async (_req: Request, res: Response) => {
  await knexInstance.select().table('categories').then((data) => {
    res.send({
      data
    })
  })
})
// auth domain
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
