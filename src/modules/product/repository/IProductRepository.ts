interface IProduct {
  id: number
  title: string
  description: string
  image: string
  price: number
}

interface IProductRepository {
  getAllProducts: () => Promise<IProduct[]>
  getProductById: (id: number) => Promise<IProduct>
  createProduct: (product: IProduct) => Promise<IProduct[]>
  updateProduct: (product: IProduct) => Promise<IProduct[]>
  deleteProduct: (id: number) => Promise<IProduct[]>
}

export type { IProduct, IProductRepository }
