import { Carts } from '../../../datalayer/actuators'

const Query = {
  getCartById: (_, { id }) => {
    return Carts.getById({ id })
  },
  getCartByCustomerId: (_, { id }) => {
    return Carts.getByCustomer({ customerId: id})
  }
}

export { Query }