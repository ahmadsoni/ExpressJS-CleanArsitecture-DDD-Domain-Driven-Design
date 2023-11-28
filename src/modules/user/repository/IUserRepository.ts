interface IUser {
  id: number
  name: string
  email: string
  password: string
  phone: string
}

interface IUserGetData {
  id: number
  name: string
  email: string
  phone: string
}
interface IUserRepository {
  createAccount: (user: IUser) => Promise<IUser[]>
  deleteAccount: (id: number) => Promise<void>
  updateAccount: (id: number, user: IUser) => Promise<void>
  getAccountById: (id: number) => Promise<IUserGetData>
  getAllAccounts: () => Promise<IUserGetData[]>
}

export type {
  IUser,
  IUserRepository,
  IUserGetData
}
