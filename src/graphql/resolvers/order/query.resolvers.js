import { Orders } from '../../../datalayer/actuators'

const Query = {
  getOrderById: (_, { id }) => {
    return Orders.getById({ id })
  }
}

export { Query }