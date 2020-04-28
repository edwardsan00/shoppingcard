import { Carts as CartsModel } from '../connections/mysql'

class Carts {
  async getByCustomer({ customerId }){
    const [cart] = await CartsModel.findAll({ where: { customerId, status: 'actived' }, raw: false, nest: true })
    return cart
  }

  async getById({ id }) {
    const [cart] = await CartsModel.findAll({
      where: {
        id: id
      },
      raw: true,
      nest: true,
    })
    return cart
  }

  async createCart({ customerId }) {
    return await CartsModel.create({ customerId })
  }
}

export default new Carts()