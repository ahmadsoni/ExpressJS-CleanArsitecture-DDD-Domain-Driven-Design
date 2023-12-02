interface IAuth {
  id: number
  email: string
  password: string
  name: string
  phone: string
}

interface IAuthData {
  id: number
  email: string
  name: string
  phone: string
  accessToken: string
}

interface IAuthRepository {
  login: (auth: IAuth) => Promise<IAuthData[]>
  register: (auth: IAuth) => Promise<IAuthData[]>
  logout: () => Promise<void>
}

export type { IAuth, IAuthRepository, IAuthData }
