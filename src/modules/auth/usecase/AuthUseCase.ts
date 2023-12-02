import type { IAuthRepository, IAuth, IAuthData } from '@/src/modules/auth/repository/IAuthRepository'

export default class AuthUseCase {
  constructor (
    private readonly repository: IAuthRepository
  ) {
    this.repository = repository
  }

  async login (auth: IAuth): Promise<IAuthData[]> {
    return await this.repository.login(auth)
  }

  async register (auth: IAuth): Promise<IAuthData[]> {
    return await this.repository.register(auth)
  }

  async logout (): Promise<void> {
    await this.repository.logout()
  }
}
