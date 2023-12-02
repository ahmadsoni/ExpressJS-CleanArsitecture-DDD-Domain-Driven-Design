import { type Request, type Response } from 'express'

interface IAuthDelivery {
  login: (req: Request, res: Response) => Promise<void>
  register: (req: Request, res: Response) => Promise<void>
  logout: (req: Request, res: Response) => Promise<void>
}

export default IAuthDelivery
