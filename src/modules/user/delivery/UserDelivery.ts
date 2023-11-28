import { type Request, type Response } from 'express'
import type IUserDelivery from '@/src/modules/user/delivery/IUserDelivery'
import type { IUserRepository } from '@/src/modules/user/repository/IUserRepository'

export default class UserDelivery implements IUserDelivery {
  constructor (
    private readonly usecase: IUserRepository
  ) {
    this.usecase = usecase
  }

  getAllAccount = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.getAllAccounts()
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch user' })
    }
  }

  getAccountById = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.getAccountById(Number(req.params.id))
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch user' })
    }
  }

  createAccount = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.usecase.createAccount(req.body)
      res.json({
        code: 200,
        data
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to create user' })
    }
  }

  updateAccount = async (req: Request, res: Response): Promise<void> => {
    const { id, name, password, email, phone } = req.body
    try {
      await this.usecase.updateAccount(Number(id), { id: Number(id), name, password, email, phone })
      res.json({
        code: 200,
        message: 'Success update user'
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to update user' })
    }
  }

  deleteAccount = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.usecase.deleteAccount(Number(req.params.id))
      res.json({
        code: 200,
        message: 'Success delete user'
      })
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete user' })
    }
  }
}
