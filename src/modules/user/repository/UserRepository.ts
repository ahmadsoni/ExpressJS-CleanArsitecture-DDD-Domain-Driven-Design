import { type Knex } from 'knex'
import type { IUser, IUserRepository, IUserGetData } from '@/src/modules/user/repository/IUserRepository'

export default class UserRepository implements IUserRepository {
  constructor (
    private readonly knek: Knex
  ) {
    this.knek = knek
  }

  async createAccount (user: IUser): Promise<IUser[]> {
    return await this.knek('users').insert(user).returning('*')
  }

  async deleteAccount (id: number): Promise<void> {
    await this.knek('users').delete().where('id', id)
  }

  async updateAccount (id: number, user: IUser): Promise<void> {
    await this.knek('users').update(user).where('id', id)
  }

  async getAccountById (id: number): Promise<IUserGetData> {
    return await this.knek.column('name', 'email', 'phone').select('').table('users').where('id', id).first()
  }

  async getAllAccounts (): Promise<IUserGetData[]> {
    return await this.knek.column('name', 'email', 'phone').select().table('users')
  }
}
