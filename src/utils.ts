import jwt, { type JwtPayload } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const screet = '$2b51050stRst1LNE foyKEGdKCOKO'

const hashPassword = (password: string): string => {
  const saltRounds = 10
  return bcrypt.hashSync(password, saltRounds)
}

const comparePassword = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash)
}

const generateJWT = (payload: object): string => {
  return jwt.sign(payload, screet, {
    expiresIn: '1d'
  })
}

const verifyJWT = (token: string): string | JwtPayload => {
  return jwt.verify(token, screet)
}

export { hashPassword, comparePassword, generateJWT, verifyJWT }
