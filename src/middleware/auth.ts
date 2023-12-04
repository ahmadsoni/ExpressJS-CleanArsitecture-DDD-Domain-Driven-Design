import type jwt from 'jsonwebtoken'
import { type Request, type Response, type NextFunction } from 'express'
import { verifyJWT } from '@/src/utils/authUtils'

declare global {
  namespace Express {
    interface Request {
      user?: jwt.JwtPayload | string
    }
  }
}

export default (req: Request, res: Response, next: NextFunction): Response<void> | void => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ error: 'Missing token' })
  }

  try {
    req.user = verifyJWT(token)
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
