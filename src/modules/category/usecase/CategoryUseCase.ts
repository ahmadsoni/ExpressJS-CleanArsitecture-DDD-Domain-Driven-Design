import { type ICategoryRepository, type ICategory } from '@/src/modules/category/repository/ICategoryRepository'

export default class CategoryUseCase {
  constructor (
    private readonly repository: ICategoryRepository
  ) {
    this.repository = repository
  }

  async getAllCategories (): Promise<ICategory[]> {
    return await this.repository.getAllCategories()
  }

  async getCategoryById (id: number): Promise<ICategory> {
    return await this.repository.getCategoryById(id)
  }

  async createCategory (category: ICategory): Promise<ICategory[]> {
    return await this.repository.createCategory(category)
  }

  async updateCategory (category: ICategory): Promise<ICategory[]> {
    return await this.repository.updateCategory(category)
  }

  async deleteCategory (id: number): Promise<ICategory[]> {
    return await this.repository.deleteCategory(id)
  }
}
