/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import express, { type Request, type Response, type Application } from 'express'
import dotenv from 'dotenv'
import knex, { type Knex } from 'knex'
import knexConfig from '@/src/knexfile'
import bodyParser from 'body-parser'
dotenv.config()

const app: Application = express()
const port = 3000
const knexInstance: Knex = knex(knexConfig.development)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    version: '1.0.0',
    author: 'Ahmad Shonhaji'
  })
})

app.get('/products', (req: Request, res: Response) => {
  knexInstance.select().table('products').then((data) => {
    res.send({
      data
    })
  })
})

app.post('/products', (req: Request, res: Response) => {
  const { title, description, image, price } = req.body

  if (!title || !description || !image || !price) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  return knexInstance.table('products').insert({
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

app.delete('/products/:id', (req: Request, res: Response) => {
  return knexInstance.table('products').where('id', req.params.id).del().then((data) => {
    res.send({
      data,
      message: 'Success'
    })
  })
})

// user routes
app.get('/users', (req: Request, res: Response) => {
  knexInstance.select().table('users').then((data) => {
    res.send({
      data
    })
  })
})

app.post('/users', (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  return knexInstance.table('users').insert({
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

app.delete('/users/:id', (req: Request, res: Response) => {
  return knexInstance.table('users').where('id', req.params.id).del().then((data) => {
    res.send({
      data,
      message: 'Success'
    })
  })
})

app.put('/users/:id', (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  return knexInstance.table('users').where('id', req.params.id).update({
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

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
