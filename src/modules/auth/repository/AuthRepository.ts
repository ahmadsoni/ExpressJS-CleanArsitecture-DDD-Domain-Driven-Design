import { type Knex } from 'knex'
import type { IAuthRepository, IAuth, IAuthData } from '@/src/modules/auth/repository/IAuthRepository'
import { hashPassword, comparePassword, generateJWT } from '@/src/utils/authUtils'
export default class AuthRepository implements IAuthRepository {
  constructor (
    private readonly knek: Knex
  ) {
    this.knek = knek
  }

  async login (auth: IAuth): Promise<IAuthData[]> {
    return await new Promise((resolve, reject) => {
      this.knek('users').where('email', auth.email).then(async (data) => {
        if (data.length === 0) {
          reject(new Error('User not found'))
        } else {
          const isPasswordMatch = comparePassword(auth.password, data[0].password)
          if (isPasswordMatch) {
            const data: IAuth[] = await this.knek('users').select('id', 'name', 'email', 'phone').where('email', auth.email)
            const updatedData = data.map(item => ({ ...item, accessToken: generateJWT({ id: item.id }) }))
            resolve(updatedData)
          } else {
            reject(new Error('Wrong password'))
          }
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  async register (auth: IAuth): Promise<IAuthData[]> {
    return await new Promise((resolve, reject) => {
      this.knek('users').where('email', auth.email).then(async (data) => {
        if (data.length > 0) {
          reject(new Error('Email already registered'))
        } else {
          const hashedPassword = hashPassword(auth.password)
          const data: IAuth[] = await this.knek('users').insert({
            name: auth.name,
            email: auth.email,
            password: hashedPassword,
            phone: auth.phone
          }).returning(['id', 'name', 'email', 'phone'])
          const updatedData = data.map(item => ({ ...item, accessToken: generateJWT({ id: item.id }) }))
          resolve(updatedData)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  async logout (): Promise<void> {
    await this.knek('users').delete()
  }
}
