import { Orders as OrdersModel } from '../connections/mysql'

class Orders {
  async getByCustomer({ customerId }) {
    const [orders] = await OrdersModel.findAll({
      where: {
        customerId
      },
      raw: true,
      nest: true,
    })
    return orders
  }

  async getById({ id }) {
    const [order] = await OrdersModel.findAll({
      where: {
        id
      },
      raw: true,
      nest: true,
    })
    return order
  }

  async createOrder({ order }) {
    return await OrdersModel.create(order)
  }
}

export default new Orders()