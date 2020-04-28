import { Carts } from '../../../datalayer/actuators'

const Query = {
  getCartById: (_, { id }) => {
    return Carts.getById({ id })
  }
}

export { Query }