import { type Request, type Response } from 'express'

interface IUserDelivery {
  getAllAccount: (_req: Request, res: Response) => Promise<void>
  getAccountById: (req: Request, res: Response) => Promise<void>
  createAccount: (req: Request, res: Response) => Promise<void>
  updateAccount: (req: Request, res: Response) => Promise<void>
  deleteAccount: (req: Request, res: Response) => Promise<void>
}

export default IUserDelivery
