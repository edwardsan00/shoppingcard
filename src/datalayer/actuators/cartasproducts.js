import { CartAsProducts as CartAsProductsModel } from '../connections/mysql'

class CartAsProducts {
  async getByCart({ cartId }) {
    const productsInCart = await CartAsProductsModel.findAll({
      where: {
        cartId
      },
      raw: true,
      nest: true,
    })
    return productsInCart
  }

  async addCart({ addCart }) {
    return await CartAsProductsModel.create(addCart)
  }

  async updateProduct({ id, addCart }) {
    return await CartAsProductsModel.update(addCart, { where: id, raw: true })
  }

  async deleteProduct({ id }){
    const result = await CartAsProductsModel.destroy({
      where: {
        id
      },
      raw: true,
    })
    if(!!result)
      return {
        success: true   
      }
    return {
      success: false,
      message: 'Failed delete'
    }
  }
}

export default new CartAsProducts()