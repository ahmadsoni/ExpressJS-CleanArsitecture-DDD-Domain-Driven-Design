import type { IProduct, IProductRepository } from '@/src/modules/product/repository/IProductRepository'

export default class ProductUseCase {
  constructor (
    private readonly repository: IProductRepository
  ) {
    this.repository = repository
  }

  async getAllProducts (): Promise<IProduct[]> {
    return await this.repository.getAllProducts()
  }

  async getProductById (id: number): Promise<IProduct> {
    return await this.repository.getProductById(id)
  }

  async createProduct (product: IProduct): Promise<IProduct[]> {
    return await this.repository.createProduct(product)
  }

  async updateProduct (product: IProduct): Promise<IProduct[]> {
    return await this.repository.updateProduct(product)
  }

  async deleteProduct (id: number): Promise<IProduct[]> {
    return await this.repository.deleteProduct(id)
  }
}
