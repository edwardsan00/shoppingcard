import { Op } from 'sequelize'
import { Products as ProductsModel } from '../connections/mysql'

class Products {
  async getProducts({ search }) {
    if(search !== ''){
      return await ProductsModel.findAll({ where: { name: { [Op.substring]: `%${search}` } } })
    }
    return []
  }
  async getById({ id }) {
    const [product] = await ProductsModel.findAll({ where: { id }, raw: false })
    return product
  }
}

export default new Products()