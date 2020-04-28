import { Carts } from '../../../datalayer/actuators'

const Mutation = {
  createCart: (_, { customerId }) => {
    return Carts.createCart({ customerId })
  }
}

export { Mutation }