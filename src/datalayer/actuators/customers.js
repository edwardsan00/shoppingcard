import { Customers as CustomersModel } from '../connections/mysql'
import { Carts, CartAsProducts } from '../actuators'

class Customers {
  async getCustomers() {
    return await CustomersModel.findAll()
  }
  async getById({ id }) {
    const [customer] = await CustomersModel.findAll({
      where: {
        id: id
      },
      raw: true,
      nest: true,
    })
    const { dataValues: currentCart } = await Carts.getByCustomer({ customerId: id })
    if (currentCart && currentCart.id){
      const { id } = currentCart
      const productsInCart = await CartAsProducts.getByCart({ cartId: id })

      return {
        customer,
        productsInCart
      }
    }
    return {
      customer,
      productsInCart: []
    } 
  }

  async createCustomer({ customer }) {
    return await CustomersModel.create(customer)
  }
}

export default new Customers()