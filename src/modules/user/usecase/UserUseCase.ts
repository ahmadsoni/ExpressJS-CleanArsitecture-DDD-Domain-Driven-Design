import type { IUser, IUserGetData, IUserRepository } from '@/src/modules/user/repository/IUserRepository'

export default class UserUseCase {
  constructor (
    private readonly repository: IUserRepository
  ) {
    this.repository = repository
  }

  async getAccountById (id: number): Promise<IUserGetData> {
    return await this.repository.getAccountById(id)
  }

  async createAccount (user: IUser): Promise<IUser[]> {
    return await this.repository.createAccount(user)
  }

  async updateAccount (id: number, user: IUser): Promise<void> {
    await this.repository.updateAccount(id, user)
  }

  async deleteAccount (id: number): Promise<void> {
    await this.repository.deleteAccount(id)
  }

  async getAllAccounts (): Promise<IUserGetData[]> {
    return await this.repository.getAllAccounts()
  }
}
