interface ICategory {
  id: number
  name: string
}
interface ICategoryRepository {
  getAllCategories: () => Promise<ICategory[]>
  getCategoryById: (id: number) => Promise<ICategory>
  createCategory: (category: ICategory) => Promise<ICategory[]>
  updateCategory: (category: ICategory) => Promise<ICategory[]>
  deleteCategory: (id: number) => Promise<ICategory[]>
}
export type { ICategoryRepository, ICategory }
