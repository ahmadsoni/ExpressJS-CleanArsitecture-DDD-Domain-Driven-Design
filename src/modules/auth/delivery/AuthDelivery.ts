import { type Request, type Response } from 'express'
import type IAuthDelivery from '@/src/modules/auth/delivery/IAuthDelivery'
import type { IAuthRepository } from '@/src/modules/auth/repository/IAuthRepository'

export default class AuthDelivery implements IAuthDelivery {
  constructor (
    private readonly usecase: IAuthRepository
  ) {
    this.usecase = usecase
  }

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        res.status(400).send({ error: 'Please provide email and password' })
      }
      const data = await this.usecase.login(req.body)
      res.json({
        code: 200,
        data,
        message: 'Login success'
      })
    } catch (error) {
      const err = error as Error
      res.json({
        code: 500,
        message: err.message
      })
    }
  }

  register = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.register(req.body)
      res.json({
        code: 200,
        data,
        message: 'Register success'
      })
    } catch (error) {
      const err = error as Error
      res.json({
        code: 500,
        message: err.message
      })
    }
  }

  logout = async (_req: Request, res: Response): Promise<void> => {
    try {
      await this.usecase.logout()
      res.json({
        code: 200,
        message: 'Logout success'
      })
    } catch (error) {
      const err = error as Error
      res.json({
        code: 500,
        message: err.message
      })
    }
  }
}
