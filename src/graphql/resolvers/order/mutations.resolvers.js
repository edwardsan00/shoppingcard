import { Orders } from '../../../datalayer/actuators'

const Mutation = {
  createOrder: (_, { order }) => {
    return Orders.createOrder({ order })
  }
}

export { Mutation }